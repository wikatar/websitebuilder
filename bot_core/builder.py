"""
Core website builder implementation.
"""

import os
import json
import shutil
from typing import Dict, List, Optional
from pathlib import Path
from datetime import datetime
from jinja2 import Environment, FileSystemLoader

class WebsiteBuilder:
    def __init__(self):
        """
        Initialize WebsiteBuilder with proper directory structure.
        """
        # Core directories
        self.root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        self.websites_dir = os.path.join(self.root_dir, "websites")
        self.shared_dir = os.path.join(self.root_dir, "shared")
        
        # Shared resource directories
        self.templates_dir = os.path.join(self.shared_dir, "templates")
        self.components_dir = os.path.join(self.shared_dir, "components")
        self.assets_dir = os.path.join(self.shared_dir, "assets")
        self.scripts_dir = os.path.join(self.shared_dir, "scripts")
        
        # Create all necessary directories
        for dir_path in [
            self.websites_dir,
            self.shared_dir,
            self.templates_dir,
            self.components_dir,
            self.assets_dir,
            self.scripts_dir
        ]:
            os.makedirs(dir_path, exist_ok=True)
        
        self.current_site = None
        self.env = Environment(loader=FileSystemLoader(str(self.templates_dir)))

    def create_website(
        self,
        domain: str,
        config: Dict,
        template: str = "business"
    ) -> str:
        """
        Create a new website from template.
        
        Args:
            domain: Domain name (e.g., 'balthazarproject.com')
            config: Website configuration
            template: Template name to use
        """
        # Setup website directory structure
        site_path = os.path.join(self.websites_dir, domain)
        
        # Create standard website directories
        for dir_name in [
            'public_html',
            'public_html/assets',
            'public_html/assets/images',
            'public_html/assets/css',
            'public_html/assets/js',
            'public_html/components',
            'logs',
            'backup',
            'ssl',
            'config'
        ]:
            os.makedirs(os.path.join(site_path, dir_name), exist_ok=True)
        
        # Set working directory to public_html
        public_path = os.path.join(site_path, 'public_html')
        
        # Load template configuration
        template_config_path = os.path.join(self.templates_dir, template, "config.json")
        with open(template_config_path, 'r') as f:
            template_config = json.load(f)
            
        # Copy required components from shared components
        for component in template_config["components"]["required"]:
            self._copy_component(template, component, public_path)
            
        # Copy optional components if specified
        for component in config.get("components", []):
            if component in template_config["components"]["optional"]:
                self._copy_component(template, component, public_path)
        
        # Copy shared assets
        self._copy_shared_assets(public_path)
        
        # Generate site configuration
        site_config = {
            **template_config,
            **config,
            "domain": domain,
            "creation_date": str(datetime.now())
        }
        
        # Save site configuration
        config_path = os.path.join(site_path, "config/site_config.json")
        with open(config_path, 'w') as f:
            json.dump(site_config, f, indent=4)
            
        self.current_site = site_path
        return site_path
    
    def _copy_component(self, template: str, component: str, site_path: str):
        """Copy a component from shared components to site directory."""
        src = os.path.join(self.components_dir, template, component)
        dst = os.path.join(site_path, "components", component)
        
        if os.path.exists(src):
            shutil.copytree(src, dst, dirs_exist_ok=True)
    
    def _copy_shared_assets(self, public_path: str):
        """Copy shared assets to the website's public directory."""
        for asset_type in ['css', 'js', 'images']:
            src = os.path.join(self.assets_dir, asset_type)
            dst = os.path.join(public_path, 'assets', asset_type)
            if os.path.exists(src):
                shutil.copytree(src, dst, dirs_exist_ok=True)
    
    def customize_theme(self, colors: Dict[str, str], fonts: Dict[str, str]):
        """Customize theme colors and fonts."""
        if not self.current_site:
            raise ValueError("No active website. Call create_website first.")
            
        config_path = os.path.join(self.current_site, "config.json")
        with open(config_path, 'r') as f:
            config = json.load(f)
            
        config["theme"]["colors"].update(colors)
        config["theme"]["fonts"].update(fonts)
        
        with open(config_path, 'w') as f:
            json.dump(config, f, indent=4)
    
    def set_content(self, content: Dict[str, str]):
        """Set website content variables."""
        if not self.current_site:
            raise ValueError("No active website. Call create_website first.")
            
        config_path = os.path.join(self.current_site, "config.json")
        with open(config_path, 'r') as f:
            config = json.load(f)
            
        config["variables"].update(content)
        
        with open(config_path, 'w') as f:
            json.dump(config, f, indent=4)
    
    def add_seo_schemas(self, schemas: List[Dict]):
        """Add SEO schema markup to the website."""
        if not self.current_site:
            raise ValueError("No active website. Call create_website first.")
            
        from bot_core.seo.schema_generator import SchemaGenerator
        generator = SchemaGenerator()
        
        # Generate and save schemas
        schema_dir = os.path.join(self.current_site, "schemas")
        os.makedirs(schema_dir, exist_ok=True)
        
        for schema in schemas:
            schema_type = schema.pop("type")
            if hasattr(generator, f"generate_{schema_type}"):
                generated = getattr(generator, f"generate_{schema_type}")(**schema)
                script_tag = generator.to_script_tag(generated)
                
                with open(os.path.join(schema_dir, f"{schema_type}.html"), 'w') as f:
                    f.write(script_tag)
    
    def build(self) -> str:
        """Build the final website."""
        if not self.current_site:
            raise ValueError("No active website. Call create_website first.")
            
        # Here we would:
        # 1. Process all templates
        # 2. Inject content
        # 3. Optimize assets
        # 4. Generate final HTML
        
        return self.current_site

    def _process_templates(self, target_dir, site_config):
        """Process and render template files"""
        template_vars = {
            "site_title": site_config.get("title", "New Website"),
            "primary_color": site_config.get("primary_color", "#007bff"),
            "secondary_color": site_config.get("secondary_color", "#6c757d"),
            "text_color": site_config.get("text_color", "#333333"),
            "current_year": datetime.now().year,
            "navigation_links": self._generate_nav_links(site_config.get("nav_links", [])),
            "main_content": site_config.get("main_content", "<h2>Welcome to your new website!</h2>")
        }
        
        # Render HTML template
        template = self.env.get_template("index.html")
        rendered = template.render(**template_vars)
        
        with open(target_dir / "index.html", "w") as f:
            f.write(rendered)

    def _generate_nav_links(self, links):
        """Generate HTML for navigation links"""
        if not links:
            return "<a href='#'>Home</a>"
            
        return " ".join(f"<a href='{link['url']}'>{link['text']}</a>" for link in links) 
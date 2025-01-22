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
    def __init__(self, output_dir: str = "websites"):
        self.output_dir = output_dir
        self.template_dir = "bot_core/templates"
        self.current_site = None
        self.env = Environment(loader=FileSystemLoader(str(self.template_dir)))
        
        # Load global config
        with open("bot_core/config.json") as f:
            self.config = json.load(f)

    def create_website(
        self,
        site_name: str,
        config: Dict,
        template: str = "business"
    ) -> str:
        """Create a new website from template."""
        # Setup site directory
        site_path = os.path.join(self.output_dir, site_name)
        os.makedirs(site_path, exist_ok=True)
        
        # Load template configuration
        template_config_path = os.path.join(self.template_dir, template, "config.json")
        with open(template_config_path, 'r') as f:
            template_config = json.load(f)
            
        # Copy required components
        for component in template_config["components"]["required"]:
            self._copy_component(template, component, site_path)
            
        # Copy optional components if specified
        for component in config.get("components", []):
            if component in template_config["components"]["optional"]:
                self._copy_component(template, component, site_path)
        
        # Generate site configuration
        site_config = {
            **template_config,
            **config,
            "site_name": site_name,
            "creation_date": str(datetime.now())
        }
        
        # Save site configuration
        config_path = os.path.join(site_path, "config.json")
        with open(config_path, 'w') as f:
            json.dump(site_config, f, indent=4)
            
        self.current_site = site_path
        return site_path
    
    def _copy_component(self, template: str, component: str, site_path: str):
        """Copy a component from template to site directory."""
        src = os.path.join(self.template_dir, template, "components", component)
        dst = os.path.join(site_path, "components", component)
        
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
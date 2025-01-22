"""
Script to build a personal website using the business template.
"""

from bot_core.builder import WebsiteBuilder
from bot_core.seo.schema_generator import SchemaGenerator

def main():
    # Initialize the website builder
    builder = WebsiteBuilder()
    
    # Create website with business template
    site_config = {
        "title": "Your Name - Professional Portfolio",
        "design_library": "tailwind-daisyui",
        "theme": "light",
        "components": [
            "header",
            "footer",
            "hero",
            "services",
            "about",
            "contact"
        ]
    }
    
    site_path = builder.create_website("my-portfolio", site_config)
    
    # Customize theme
    builder.customize_theme(
        colors={
            "primary": "#4F46E5",    # Indigo
            "secondary": "#EC4899",   # Pink
            "accent": "#14B8A6",      # Teal
            "neutral": "#1F2937",     # Gray
            "base-100": "#FFFFFF"     # White
        },
        fonts={
            "heading": "Inter",
            "body": "Inter"
        }
    )
    
    # Set content
    builder.set_content({
        "company_name": "Your Name",
        "company_description": "Professional Web Developer & SEO Specialist",
        "hero_title": "Building Digital Success",
        "hero_description": "Crafting modern, SEO-optimized websites that drive results",
        "hero_image": "/assets/images/hero.jpg",
        "hero_image_alt": "Professional web development and SEO services",
        "cta_primary_text": "View Portfolio",
        "cta_secondary_text": "Contact Me",
        "social_links": {
            "twitter": "https://twitter.com/yourusername",
            "linkedin": "https://linkedin.com/in/yourusername",
            "github": "https://github.com/yourusername"
        },
        "services": [
            {
                "name": "Web Development",
                "link": "#services"
            },
            {
                "name": "SEO Optimization",
                "link": "#services"
            },
            {
                "name": "Digital Strategy",
                "link": "#services"
            }
        ],
        "stats": [
            {
                "title": "Projects",
                "value": "50+",
                "description": "Completed"
            },
            {
                "title": "Clients",
                "value": "30+",
                "description": "Satisfied"
            },
            {
                "title": "Experience",
                "value": "5+",
                "description": "Years"
            }
        ]
    })
    
    # Add SEO schemas
    builder.add_seo_schemas([
        {
            "type": "local_business",
            "business_name": "Your Name",
            "address": {
                "street": "Your Street",
                "city": "Your City",
                "region": "Your Region",
                "postal_code": "12345",
                "country": "Sweden"
            },
            "geo": {
                "latitude": 59.3293,
                "longitude": 18.0686
            },
            "telephone": "+46-XXX-XXXXXX"
        },
        {
            "type": "service",
            "name": "Web Development Services",
            "description": "Professional web development and SEO optimization services.",
            "provider": "Your Name",
            "area_served": "Stockholm Region"
        }
    ])
    
    # Build the website
    final_path = builder.build()
    print(f"Website built successfully at: {final_path}")

if __name__ == "__main__":
    main() 
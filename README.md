# Website Builder Bot

A Python-based bot for automating website creation, management, and deployment. Generate websites from templates and deploy them to GitHub with ease.

## Project Structure

```
WebsiteBuilderBot/
├── bot_core/                    # Core bot functionality
│   ├── builder.py              # Main website generation logic
│   ├── templates/              # Website templates
│   │   ├── basic_site/        # Basic responsive template
│   │   └── blog_template/     # Blog-specific template
│   └── config.json            # Global bot configuration
├── websites/                   # Generated websites
├── tests/                     # Test suite
├── scripts/                   # Automation scripts
└── docs/                      # Documentation
```

## Features

- Generate websites from customizable templates
- Dynamic content injection using Jinja2
- Automated asset management (CSS, JS, etc)
- Independent GitHub repository creation for each website
- JSON-based configuration system
- Multi-site project management

## Getting Started

### Prerequisites
- Python 3.8+
- Git
- GitHub account

### Installation
1. Clone the repository
2. Run `./scripts/setup.sh`
3. Install dependencies: `pip install -r requirements.txt`

### Basic Usage
```python
from bot_core.builder import WebsiteBuilder

builder = WebsiteBuilder()
config = {
    "title": "My Website",
    "primary_color": "#ff5733"
}
builder.create_website("my-website", config)
```

## Dependencies

This project requires the following Python packages:
- Jinja2 >= 3.0.0 - Template engine for Python
- pathlib >= 1.0.1 - Object-oriented filesystem paths

## Repository Strategy

The project uses a unique repository management approach:

1. **Main Bot Repository**: 
   - Contains the core bot code and templates
   - Branch: `main`
   - Excludes generated websites

2. **Website Repositories**: 
   - Each generated website gets its own repository
   - Created automatically during deployment
   - Contains only website-specific files
   - Enables independent version control and deployment

## Deployment Workflow

1. Generate website using the bot
2. Bot creates a new GitHub repository for the website
3. Initial files are pushed to the new repository
4. GitHub Pages (or other hosting) is configured automatically

## Resources
- [Jinja2 Documentation](https://jinja.palletsprojects.com/)
- [GitHub REST API Documentation](https://docs.github.com/en/rest)

### Future Resources
- Template galleries
- Plugin directory
- Community templates
- Deployment guides

## License
MIT License


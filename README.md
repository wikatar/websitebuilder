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
├── websites/                   # Generated websites (gitignored)
│   └── [website_name]/        # Individual website projects
├── tests/                     # Test suite
├── scripts/                   # Automation scripts
│   ├── setup.sh              # Initial setup script
│   ├── deploy.sh             # Git deployment script
│   └── clean.sh              # System sanitizer
├── .gitignore                # Strict ignore rules
├── docs/                     # Documentation
└── requirements.txt          # Pinned dependencies
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
4. Create virtual environment: `python -m venv .venv`

### Basic Usage
```python
from bot_core.builder import WebsiteBuilder

builder = WebsiteBuilder()
config = {
    "title": "My Website",
    "primary_color": "#ff5733",
    "meta": {
        "author": "Your Name",
        "license": "MIT"
    }
}
builder.create_website("my-website", config)
```

## Dependencies

This project requires the following Python packages:
- Jinja2 >= 3.0.0 - Template engine for Python
- pathlib >= 1.0.1 - Object-oriented filesystem paths

## Repository Strategy

### Core Repository Rules
1. **Main Branch Protection**:
   - Contains only bot logic, templates, and configuration
   - Protected from direct pushes
   - Requires pull request reviews
   
2. **Never Commit**:
   - Generated websites
   - Temporary files
   - IDE configurations
   - Environment variables or secrets

### Website Repositories
Each generated website gets its own repository:
- Created automatically during deployment
- Contains only website-specific files
- Enables independent version control
- Separate from main bot repository

## Development Workflow

### Template Changes
1. Create new template versions (never modify existing)
2. Update template registry in config
3. Run test suite
4. Create pull request

### Core Modifications
1. Branch from protected main
2. Make changes
3. Run sanitizer: `./scripts/clean.sh`
4. Create pull request (requires 2 approvals)

## Deployment Workflow

1. Generate website using the bot:
```bash
python -m bot_core.builder create --name "mysite" --template basic
```

2. Deploy to GitHub:
```bash
./scripts/deploy.sh mysite "Initial commit"
```

3. Configure GitHub Pages or other hosting

## Quality Gates

### Pre-commit Checks
```yaml
# .pre-commit-config.yaml
repos:
- repo: https://github.com/pre-commit/pre-commit-hooks
  rev: v4.4.0
  hooks:
    - id: check-yaml
    - id: end-of-file-fixer
    - id: trailing-whitespace
```

### Post-generation Validation
```bash
# Run template tests
pytest tests/ --site-name "mysite"
```

## Resources
- [Jinja2 Documentation](https://jinja.palletsprojects.com/)
- [GitHub REST API Documentation](https://docs.github.com/en/rest)

### Future Resources
- Template galleries
- Plugin directory
- Community templates
- Deployment guides

## License
MIT License - See LICENSE for details


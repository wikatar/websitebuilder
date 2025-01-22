# Website Builder Bot

A comprehensive website building automation system with advanced SEO capabilities, cost management, and review handling.

## Core Components

### 1. SEO Automation System
The SEO module (`bot_core/seo/`) provides a complete automation framework for SEO management:

#### SEO Sentinel (`sentinel.py`)
- **Automated Monitoring**
  - Traffic drop detection (>15% threshold)
  - CTR analysis (2.5-8% range)
  - Content freshness monitoring (90 days)
  - Keyword density optimization (0.8-1.2%)
- **Issue Detection & Resolution**
  - Automated remediation for common issues
  - Human escalation for critical problems
  - Ticket creation system
- **Content Analysis**
  - Word count verification (min 1200 words)
  - Freshness tracking
  - Keyword optimization

#### Cost Governor (`cost_governor.py`)
- **Budget Management**
  - Monthly budget tracking
  - Expense categorization
  - ROI analysis
- **Cost Optimization**
  - Activity-based costing
  - Automated spending suggestions
  - Budget projections
- **Default Pricing**
  - Content: $0.02/word
  - Technical audits: $50
  - Local SEO: $1-2 per action
  - Monitoring: $0.50/day

#### Review Manager (`review_manager.py`)
- **Automated Response System**
  - Sentiment analysis
  - Template-based responses
  - Escalation triggers
- **Review Request Scheduling**
  - Event-based triggers
  - Channel optimization
  - Timing management
- **Response Timing**
  - Positive reviews: 12 hours
  - Neutral reviews: 8 hours
  - Negative reviews: 4 hours

#### Main Automation Interface (`automation.py`)
- **Task Orchestration**
  - Coordinated monitoring
  - Integrated reporting
  - Action approval system
- **Data Collection**
  - Traffic metrics
  - Search console data
  - Review aggregation
  - Content metrics

### 2. Development Workflow

#### Setup
1. Clone the repository
```bash
git clone https://github.com/wikatar/websitebuilder.git
cd websitebuilder
```

2. Create and activate virtual environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies
```bash
pip install -r requirements.txt
```

#### Configuration
1. Set up configuration files:
   - `config/seo_thresholds.json`
   - `config/review_templates.json`

2. Configure logging:
   - Logs directory: `logs/`
   - Separate logs for each component

### 3. Usage Examples

```python
# Initialize SEO automation
from bot_core.seo import SEOAutomation

seo = SEOAutomation(
    business_id="your_business_id",
    monthly_budget=5000
)

# Run automated tasks
results = seo.run_automated_tasks()

# Handle results
if results['pending_actions']:
    for action in results['pending_actions']:
        if action['type'] == 'review_escalation':
            handle_review_escalation(action)
        elif action['type'] == 'seo_issue':
            handle_seo_issue(action)

# Check budget status
if results['cost_optimization']:
    apply_cost_optimizations(results['cost_optimization'])
```

### 4. Quality Gates

#### Code Quality
- PEP 8 compliance
- Type hints
- Comprehensive error handling
- Detailed logging

#### SEO Quality
- Content length requirements
- Keyword density optimization
- Response time thresholds
- Budget adherence

### 5. Future Enhancements

1. **SEO Capabilities**
   - AI-powered content freshness analysis
   - Automated local citation building
   - Enhanced schema markup generation

2. **Cost Management**
   - Machine learning for budget optimization
   - Predictive ROI analysis
   - Advanced cost allocation

3. **Review Management**
   - Sentiment analysis improvements
   - Multi-language support
   - Advanced response personalization

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

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

## Template System

### Design Libraries
Our template system supports multiple design approaches:

```
templates/
├── design_libraries/         # Different styling approaches
│   ├── tailwind-basic/      # Pure Tailwind CSS
│   │   ├── README.md        # Setup instructions
│   │   └── src/            
│   │       └── components/  # Reusable components
│   │
│   ├── tailwind-daisyui/    # Tailwind + DaisyUI
│   │   ├── README.md
│   │   ├── package.json     # Optional Node dependencies
│   │   └── src/
│   │       ├── input.css    # Tailwind directives
│   │       └── components/
│   │
│   └── custom-css/          # No framework option
│       └── src/
│           └── styles/
```

### Available Design Options
| Library | Features | Setup Complexity |
|---------|----------|-----------------|
| Tailwind Basic | Utility-first CSS, CDN option | Minimal |
| Tailwind + DaisyUI | Component library, themes | Medium |
| Custom CSS | Full control, no dependencies | Custom |

### Using Templates
```python
from bot_core.builder import WebsiteBuilder

builder = WebsiteBuilder()
config = {
    "title": "My Website",
    "design_library": "tailwind-daisyui",
    "theme": "light",
    "components": ["navbar", "footer", "hero"]
}
builder.create_website("my-website", config)
```

### Development Workflow

For Tailwind-based sites:
```bash
# Start development
npm run dev

# Build for production
npm run build
```

For CDN-only sites:
```html
<!-- Include in HTML -->
<script src="https://cdn.tailwindcss.com"></script>
```

## License
MIT License - See LICENSE for details


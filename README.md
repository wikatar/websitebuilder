# Website Builder Bot

A comprehensive website building automation system with advanced SEO capabilities, cost management, and review handling.

## Project Structure

```
WebsiteBuilderBot/
├── bot_core/                    # Core bot functionality
│   ├── seo/                    # SEO automation system
│   │   ├── __init__.py        # Package initialization
│   │   ├── automation.py      # Main SEO interface
│   │   ├── sentinel.py        # SEO monitoring
│   │   ├── cost_governor.py   # Budget management
│   │   └── review_manager.py  # Review handling
│   ├── templates/             # Website templates
│   │   ├── design_libraries/  # Different styling approaches
│   │   │   ├── tailwind-basic/
│   │   │   ├── tailwind-daisyui/
│   │   │   └── custom-css/
│   │   ├── builder.py             # Website generation logic
│   │   └── config.json            # Global bot configuration
│   ├── docs/                      # Documentation
│   └── scripts/                   # Automation scripts
│       ├── setup.sh              # Initial setup script
│       ├── deploy.sh             # Git deployment script
│       └── clean.sh              # System sanitizer
└── requirements.txt          # Project dependencies

```

## Core Components

### 1. Website Builder
The website builder module provides template-based website generation:

#### Template System
- **Design Libraries**
  - Tailwind Basic (CDN option)
  - Tailwind + DaisyUI
  - Custom CSS
- **Component Management**
  - Reusable UI components
  - Theme configuration
  - Asset optimization

#### Builder Features
- Generate websites from templates
- Dynamic content injection
- Automated asset management
- Independent repository creation
- Multi-site project management

### 2. SEO Automation System
The SEO module provides comprehensive SEO management:

#### SEO Sentinel (`sentinel.py`)
- **Automated Monitoring**
  - Traffic drop detection (>15% threshold)
  - CTR analysis (2.5-8% range)
  - Content freshness monitoring (90 days)
  - Keyword density optimization (0.8-1.2%)
- **Issue Detection & Resolution**
  - Automated remediation
  - Human escalation
  - Ticket creation

#### Cost Governor (`cost_governor.py`)
- **Budget Management**
  - Monthly budget tracking
  - ROI analysis
  - Expense categorization
- **Default Pricing**
  - Content: $0.02/word
  - Technical audits: $50
  - Local SEO: $1-2 per action
  - Monitoring: $0.50/day

#### Review Manager (`review_manager.py`)
- **Response System**
  - Sentiment analysis
  - Template-based responses
  - Channel optimization
- **Response Timing**
  - Positive reviews: 12 hours
  - Neutral reviews: 8 hours
  - Negative reviews: 4 hours

## Getting Started

### Prerequisites
- Python 3.8+
- Git
- GitHub account

### Installation
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

### Configuration
1. Set up configuration files:
   - `bot_core/config.json` - Global bot configuration
   - `config/seo_thresholds.json` - SEO monitoring thresholds
   - `config/review_templates.json` - Review response templates

2. Configure logging:
   - Create `logs/` directory
   - Separate logs for each component

## Usage Examples

### Website Generation
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

### SEO Automation
```python
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
```

## Development Workflow

### Template Development
1. Choose design library
2. Create components
3. Test with sample content
4. Document usage

### SEO Feature Development
1. Update monitoring thresholds
2. Test automation rules
3. Validate cost calculations
4. Document changes

## Quality Gates

### Code Quality
- PEP 8 compliance
- Type hints
- Error handling
- Detailed logging

### SEO Quality
- Content requirements
- Response times
- Budget controls
- Monitoring thresholds

## Future Enhancements

1. **Website Builder**
   - More design libraries
   - Plugin system
   - Visual editor
   - Performance optimization

2. **SEO Capabilities**
   - AI content analysis
   - Citation automation
   - Schema generation

3. **Integration**
   - Analytics dashboard
   - Automated reporting
   - Multi-site management

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.


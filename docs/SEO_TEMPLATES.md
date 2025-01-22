# SEO Templates Guide

This document outlines the SEO-focused template system used in the Website Builder Bot, ensuring optimal search engine visibility and content structure.

## Template Structure

```
bot_core/templates/
├── seo_base/                  # Foundation for all SEO sites
│   ├── required_elements.md   # Documentation
│   ├── meta_template.json     # AI-generated metadata
│   └── schema_org/           # Structured data templates
│       ├── article.json
│       ├── product.json
│       └── faq.json
│
├── page_types/               # Pre-configured SEO layouts
│   ├── article/
│   │   ├── schema.json       # Article structured data
│   │   └── outline.md        # Heading hierarchy
│   └── product/
│       ├── schema.json
│       └── outline.md
└── validators/               # SEO check systems
    ├── lighthouse.yml        # Performance rules
    └── content_rules.json    # Quality guidelines
```

## Core SEO Components

### Required Page Elements
```html
<head>
    <!-- AI-generated -->
    <title>{{ seo.title }} | {{ site.title }}</title>
    <meta name="description" content="{{ seo.meta_description }}">
    <meta name="keywords" content="{{ seo.keywords }}">
    
    <!-- Open Graph -->
    <meta property="og:title" content="{{ seo.title }}">
    <meta property="og:description" content="{{ seo.meta_description }}">
    <meta property="og:image" content="{{ seo.image }}">
    
    <!-- Schema.org -->
    <script type="application/ld+json">
        {{ structured_data | safe }}
    </script>
</head>

<body>
    <article>
        <h1>{{ seo.h1 }}</h1>
        <!-- Content with validated heading hierarchy -->
    </article>
</body>
```

## Implementation

### Basic Usage
```python
from bot_core.builder import WebsiteBuilder
from bot_core.seo import SEOGenerator

# Initialize builders
builder = WebsiteBuilder()
seo = SEOGenerator()

# Generate SEO content
content = seo.generate_content(
    topic="Web Development",
    type="article",
    keywords=["web development", "coding", "programming"]
)

# Create website with SEO optimization
config = {
    "title": "Web Development Guide",
    "template": "article",
    "seo": content,
    "validate_seo": True
}
builder.create_website("dev-guide", config)
```

## Validation System

### Technical SEO Checks
- Meta tags presence and format
- Heading hierarchy
- Image alt attributes
- Canonical URLs
- Mobile responsiveness
- Page speed metrics

### Content Quality
- Keyword density
- Readability scores
- Content length
- Internal linking
- Duplicate content

### AI Moderation
- Content relevance
- Grammar and style
- Keyword optimization
- User intent matching

## Content Rules

### Article Requirements
```json
{
    "required_sections": {
        "article": [
            {"type": "h1", "min_words": 3, "max_words": 8},
            {"type": "meta_description", "length": {"min": 120, "max": 158}},
            {"type": "faq", "min_questions": 3}
        ]
    },
    "quality_thresholds": {
        "readability_score": 60,
        "keyword_density": 1.5,
        "unique_images": 2
    }
}
```

## Integration Tools

### Free Tools
```bash
# Lighthouse CI
npm install -g @lhci/cli
lhci autorun --collect.url="http://localhost:3000"

# Screaming Frog (Free up to 500 URLs)
# Download from screamingfrog.co.uk
```

### Premium Integrations
```python
# SEMrush API Example
def analyze_seo(url):
    response = requests.post(
        "https://api.semrush.com/analytics/v1",
        params={
            "type": "domain_rank",
            "key": config.SEMRUSH_API_KEY,
            "export_columns": "Dt,Rk,Or,Ot,Oc,Ad,At,Ac"
        }
    )
    return response.json()
```

## Best Practices

1. **Content Structure**:
   - Use clear heading hierarchy
   - Include relevant schema markup
   - Optimize meta descriptions
   - Use descriptive URLs

2. **Technical SEO**:
   - Implement canonical URLs
   - Optimize images
   - Use semantic HTML
   - Enable mobile responsiveness

3. **Content Quality**:
   - Write for humans first
   - Include relevant keywords naturally
   - Create comprehensive content
   - Add internal links

## Future Enhancements

- [ ] Add more schema.org templates
- [ ] Implement AI-powered content generation
- [ ] Add advanced SEO analytics
- [ ] Create visual SEO editor
- [ ] Integrate more third-party SEO tools 
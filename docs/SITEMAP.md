# Balthazar Project Sitemap

> **AI Note**: For comprehensive understanding of the project structure:
> - **SEO Implementation**: Review [SEO Guidelines](docs/guides/SEO_GUIDELINES.md) for our AI-first SEO approach, schema structure, and content optimization patterns
> - **Design System**: Check [Design System](docs/guides/DESIGN_SYSTEM.md) for component architecture, styling patterns, and UI/UX guidelines
> - **Development Flow**: When building pages, always reference this sitemap in conjunction with SEO and Design guidelines to ensure consistency
>
> This integrated approach ensures all pages maintain our SEO strategy and design principles while following the sitemap structure.

## Overview
This document serves as both a sitemap for the website and a development guide. It's structured to be easily parsed by both humans and AI, ensuring consistent development across the team.

## AI Parsing Guide
This sitemap is structured for optimal AI comprehension and development. When working with this document:

### Structure Format
- YAML format for structured data
- Markdown for documentation
- TypeScript for implementation
- JSON Schema for validation

### Key Areas to Parse
1. **Page Definitions**
   - Component requirements
   - Content specifications
   - SEO requirements
   - Priority levels

2. **Content Requirements**
   - Minimum/maximum values
   - Required structures
   - Content types
   - Validation rules

3. **SEO Specifications**
   - Schema requirements
   - Focus keywords
   - Meta templates
   - Priority levels

### Implementation Steps
1. Parse YAML structure for page requirements
2. Validate against TypeScript types in `src/config/sitemap.ts`
3. Check existing implementation in `src/app/[locale]`
4. Follow development guidelines for modifications

### Maintenance Tasks
1. Update content based on requirements
2. Validate SEO implementation
3. Check component completeness
4. Monitor content freshness
5. Track version changes

## Site Structure

```yaml
site:
  base_url: https://balthazarproject.com
  locales: 
    - sv
    - en
  default_locale: sv

pages:
  home:
    path: /
    priority: 1.0
    components:
      - Hero
      - ServiceOverview
      - FeaturedWork
      - AboutPreview
      - ContactCTA
    content_requirements:
      - value_proposition
      - service_highlights
      - featured_projects: 3
      - testimonials: 2-4
    seo:
      title_template: "Balthazar Project - {locale_specific_title}"
      focus_keywords:
        - web development
        - digital solutions
        - AI integration
      required_schema:
        - Organization
        - WebSite

  about:
    path: /about
    priority: 0.9
    components:
      - CompanyIntro
      - Values
      - Team
      - Vision
      - Timeline
    content_requirements:
      - company_story
      - team_members
      - core_values: 3-5
      - company_vision
      - milestones: 5-8
    seo:
      focus_keywords:
        - about us
        - company values
        - team
      required_schema:
        - Organization
        - Person (for team members)

  services:
    path: /services
    priority: 0.9
    subpages:
      web_development:
        path: /services/web-development
        components:
          - ServiceHero
          - Features
          - ProcessFlow
          - CaseStudies
          - PricingPlans
        content_requirements:
          - service_description
          - key_features: 4-6
          - process_steps: 3-5
          - case_studies: 2-3
          - pricing_tiers: 3
      
      seo_optimization:
        path: /services/seo
        # Similar structure as web_development
      
      custom_development:
        path: /services/custom
        # Similar structure as web_development

  portfolio:
    path: /portfolio
    priority: 0.8
    components:
      - ProjectGrid
      - FilterSystem
      - ProjectDetails
    content_requirements:
      - projects:
          min: 6
          structure:
            - title
            - description
            - technologies
            - challenge
            - solution
            - results
      - categories:
          - Web Development
          - SEO
          - Custom Solutions
    seo:
      focus_keywords:
        - portfolio
        - case studies
        - projects
      required_schema:
        - ItemList
        - CreativeWork

  contact:
    path: /contact
    priority: 0.7
    components:
      - ContactForm
      - ContactInfo
      - Map
      - FAQ
    content_requirements:
      - contact_methods
      - form_fields
      - office_location
      - faq_items: 5-8
    seo:
      focus_keywords:
        - contact
        - get in touch
      required_schema:
        - LocalBusiness
        - ContactPage

## Development Guidelines

### Adding New Pages
1. Update this sitemap first
2. Create page structure following the template
3. Implement required components
4. Add content following requirements
5. Implement SEO schema
6. Add to navigation
7. Update tests

### Content Management
- All content should be managed through i18n
- Follow the content_requirements for each page
- Maintain consistent tone and style
- Keep SEO focus keywords in mind

### SEO Implementation
- Each page must implement required schema
- Follow title_template patterns
- Maintain focus keywords density
- Implement proper meta tags
- Add structured data

### Component Guidelines
- Reuse components listed in page definitions
- Maintain consistent styling
- Follow accessibility guidelines
- Implement responsive design
- Add proper data-testid attributes

### Testing Requirements
- Unit tests for components
- Integration tests for pages
- SEO validation
- Performance metrics
- Accessibility checks

## Maintenance
- Review and update content quarterly
- Check and update SEO performance monthly
- Validate all links bi-weekly
- Update case studies as completed
- Review analytics and adjust focus keywords

## AI Integration Notes
This sitemap is structured to be easily parsed by AI systems for:
- Automated testing
- Content generation
- SEO optimization
- Performance monitoring
- Development assistance

## Version Control
- Document all sitemap changes
- Keep changelog updated
- Tag major structure changes
- Maintain backwards compatibility 
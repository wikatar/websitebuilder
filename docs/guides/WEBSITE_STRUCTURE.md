# Website Structure Guidelines

## Site Architecture

### Core Pages
```
src/app/[locale]/
├── page.tsx                    # Homepage
├── about/                      # About Us
│   ├── page.tsx               # Main About page
│   ├── team/                  # Team page
│   └── vision/                # Vision & Mission
├── services/                  # Services
│   ├── page.tsx              # Services Overview
│   ├── web-development/      # Web Development
│   ├── ai-integration/       # AI Integration
│   ├── digital-growth/       # Digital Growth
│   └── software-solutions/   # Custom Software
├── portfolio/                # Portfolio
│   ├── page.tsx             # Portfolio Overview
│   └── [project]/           # Individual Projects
├── resources/               # Resources
│   ├── page.tsx            # Resources Overview
│   ├── blog/               # Blog
│   └── case-studies/       # Case Studies
└── contact/                # Contact
    └── page.tsx           # Contact Form
```

## Page Components Structure

### 1. Homepage (`page.tsx`)
- Hero Section
- Features Overview
- How It Works
- Services Preview
- Latest Projects
- Client Testimonials
- Call to Action

### 2. About Section
- Company Story
- Mission & Vision
- Team Members
- Technology Stack
- Partner Network

### 3. Services Pages
- Service Overview
- Key Features
- Benefits
- Process Flow
- Case Studies
- Pricing (if applicable)
- FAQ
- CTA

### 4. Portfolio Section
- Project Grid
- Filtering System
- Detailed Case Studies
- Results & Metrics
- Client Testimonials

### 5. Resources Section
- Blog Posts
- Case Studies
- Whitepapers
- Documentation
- Video Tutorials

### 6. Contact Page
- Contact Form
- Office Locations
- Support Channels
- FAQ Section

## Component Library

### Layout Components
```typescript
src/components/layout/
├── Navigation/
│   ├── MainNav.tsx
│   ├── MobileNav.tsx
│   └── LanguageSelector.tsx
├── Footer/
│   ├── MainFooter.tsx
│   └── FooterNewsletter.tsx
└── Common/
    ├── PageHeader.tsx
    ├── Breadcrumbs.tsx
    └── ScrollToTop.tsx
```

### Feature Components
```typescript
src/components/features/
├── Services/
│   ├── ServiceCard.tsx
│   └── ServiceProcess.tsx
├── Portfolio/
│   ├── ProjectCard.tsx
│   └── ProjectGrid.tsx
└── Common/
    ├── TestimonialCard.tsx
    ├── PricingTable.tsx
    └── FAQAccordion.tsx
```

## Navigation Structure

### Main Navigation
1. Home
2. About
   - Our Story
   - Team
   - Vision
3. Services
   - AI-Enhanced Web Development
   - AI Integration & Tools
   - Digital Growth
   - Custom Software
4. Portfolio
   - All Projects
   - Case Studies
5. Resources
   - Blog
   - Case Studies
   - Documentation
6. Contact

### Footer Structure
1. Company Info
2. Services
3. Resources
4. Contact Info
5. Newsletter Signup
6. Social Links

## Page Templates

### Standard Page Template
```typescript
export default function StandardPage() {
  return (
    <>
      <PageHeader title={t('page.title')} description={t('page.description')} />
      <Breadcrumbs items={breadcrumbItems} />
      <main className="min-h-screen">
        <PageContent />
        <RelatedContent />
        <CTA />
      </main>
    </>
  );
}
```

### Service Page Template
```typescript
export default function ServicePage() {
  return (
    <>
      <ServiceHeader service={service} />
      <ServiceFeatures features={features} />
      <ProcessFlow steps={steps} />
      <CaseStudies studies={relatedStudies} />
      <ServiceFAQ faqs={serviceFaqs} />
      <ServiceCTA />
    </>
  );
}
```

## Styling Guidelines

### Layout Classes
```css
.page-container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.section-padding {
  @apply py-12 md:py-16 lg:py-20;
}

.grid-layout {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
}
```

### Component Classes
```css
.card {
  @apply bg-base-200 rounded-lg shadow-lg p-6;
}

.section-title {
  @apply text-3xl md:text-4xl font-bold mb-4;
}

.section-description {
  @apply text-lg text-base-content/70 max-w-2xl mx-auto;
}
```

## Implementation Checklist

### For Each New Page
- [ ] Create page component with proper SEO metadata
- [ ] Add translations for all content
- [ ] Implement responsive design
- [ ] Add proper navigation links
- [ ] Include relevant CTAs
- [ ] Set up analytics tracking
- [ ] Test across all devices
- [ ] Validate accessibility
- [ ] Check performance metrics

### For New Features
- [ ] Create reusable components
- [ ] Add TypeScript interfaces
- [ ] Implement error handling
- [ ] Add loading states
- [ ] Write unit tests
- [ ] Document component usage
- [ ] Optimize performance
- [ ] Test edge cases

## Performance Considerations

### Image Optimization
- Use next/image for all images
- Implement lazy loading
- Provide proper image dimensions
- Use WebP format with fallbacks

### Code Optimization
- Implement code splitting
- Use dynamic imports for large components
- Minimize bundle size
- Optimize third-party imports

### Loading States
- Add loading skeletons
- Implement progressive loading
- Show loading indicators
- Handle error states

## Analytics Integration

### Page Tracking
- Page views
- User interactions
- Form submissions
- Download tracking
- Video engagement

### Event Tracking
- Button clicks
- Form interactions
- Scroll depth
- Time on page
- Exit intent

---

*Note: This structure is designed to be both AI-friendly and human-readable, ensuring consistent implementation across the project.* 
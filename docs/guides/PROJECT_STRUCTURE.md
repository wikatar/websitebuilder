# Project Structure and Development Guidelines

## Table of Contents
1. [Project Overview](#project-overview)
2. [Directory Structure](#directory-structure)
3. [Development Workflow](#development-workflow)
4. [Critical Areas](#critical-areas)
5. [Common Pitfalls](#common-pitfalls)

## Project Overview

### Core Technologies
- Next.js 15.1.6
- TypeScript
- TailwindCSS with DaisyUI
- next-intl for internationalization
- Framer Motion for animations

### Key Features
- Internationalization (sv/en)
- Dark theme
- SEO optimization
- Performance monitoring
- Responsive design
- Animation system

## Directory Structure

```
balthazarproject.com/
├── src/
│   ├── app/                 # Next.js app router
│   │   └── [locale]/       # Locale-based routing
│   ├── components/         # React components
│   │   ├── ui/            # Basic UI components
│   │   ├── layout/        # Layout components
│   │   ├── features/      # Feature components
│   │   └── templates/     # Page templates
│   ├── messages/          # Translation files
│   └── utils/            # Utility functions
├── public/               # Static assets
├── docs/                # Documentation
│   ├── guides/          # Development guides
│   ├── decisions/       # Architecture decisions
│   └── templates/       # Component templates
└── tools/              # Development tools
```

## Development Workflow

### 1. Component Development
- Follow atomic design principles
- Use TypeScript strictly
- Implement proper prop types
- Add JSDoc documentation
- Include unit tests

### 2. Page Creation
```typescript
// Standard page structure
export default function Page() {
  const t = useTranslations('namespace');
  
  return (
    <>
      <PageSEO path="/path" pageKey="key" />
      <main className="min-h-screen">
        <section className="py-16 bg-base-200">
          {/* Content */}
        </section>
      </main>
    </>
  );
}
```

### 3. Internationalization
- Use translation keys consistently
- Maintain parallel structure in all locales
- Test all languages before deployment
- Use ICU message format

## Critical Areas

### 1. Layout System
- `src/app/[locale]/layout.tsx` - Core layout
- Theme provider implementation
- Font loading system
- Navigation structure

### 2. Routing
- Locale-based routing
- Dynamic routes
- Middleware configuration
- 404 handling

### 3. State Management
- Component-level state
- Context usage
- Props drilling prevention
- Performance optimization

### 4. Performance
- Image optimization
- Code splitting
- Bundle size monitoring
- Lazy loading

## Common Pitfalls

### 1. Internationalization
- **Issue**: Missing translation keys
- **Solution**: Use TypeScript for translation key validation
- **Prevention**: Implement automated checks

### 2. Component Structure
- **Issue**: Prop drilling
- **Solution**: Use composition or context
- **Prevention**: Regular code reviews

### 3. Performance
- **Issue**: Large bundle sizes
- **Solution**: Code splitting and lazy loading
- **Prevention**: Bundle analysis in CI/CD

### 4. Styling
- **Issue**: Inconsistent theme usage
- **Solution**: Use design system tokens
- **Prevention**: Style linting

## Best Practices

### 1. Code Organization
- Group related components
- Maintain clear file naming
- Use index files for exports
- Keep components focused

### 2. Performance Optimization
- Use static generation when possible
- Implement proper caching
- Optimize images and fonts
- Monitor Core Web Vitals

### 3. Error Handling
- Implement error boundaries
- Use proper logging
- Handle edge cases
- Provide fallback UI

### 4. Testing
- Unit tests for utilities
- Component testing
- Integration tests
- E2E testing for critical paths

## Development Guidelines

### 1. Git Workflow
- Feature branches
- Semantic commits
- PR templates
- Code review process

### 2. Code Style
- ESLint configuration
- Prettier formatting
- TypeScript strict mode
- JSDoc comments

### 3. Documentation
- Component documentation
- API documentation
- Architecture decisions
- Setup instructions

## Monitoring and Maintenance

### 1. Performance Monitoring
- Core Web Vitals
- Bundle size tracking
- Error tracking
- User analytics

### 2. Security
- Regular dependency updates
- Security best practices
- Authentication flows
- Data protection

### 3. Accessibility
- WCAG compliance
- Keyboard navigation
- Screen reader support
- Color contrast

## Future Considerations
- Automated testing expansion
- Performance optimization
- Accessibility improvements
- Documentation automation
- CI/CD enhancements 
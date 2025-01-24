# Balthazar Project - AI-First Web Development Framework

## Project Vision
This repository serves as the foundation for an AI-first web development framework, designed to enable rapid, scalable website development with minimal human intervention. The project is structured to allow AI systems to autonomously develop, maintain, and scale websites while maintaining high standards for performance, accessibility, and user experience.

## Core Principles

### 1. AI-First Development
- All code, documentation, and structures are optimized for AI comprehension and manipulation
- Clear patterns and conventions that enable autonomous decision-making
- Comprehensive error handling designed for AI-driven resolution
- Explicit documentation of intent and reasoning behind architectural decisions

### 2. Scalability Foundation
- Built to support rapid deployment of multiple websites (target: 100+ sites)
- Optimized for daily content generation (1+ page per site per day)
- Standardized components and patterns for consistent development
- Performance-first architecture for fast page loads and optimal user experience

### 3. Project Governance
- Project owner provides strategic direction and supervision
- No foundational or directional changes without explicit owner approval
- AI systems operate within defined boundaries while maintaining autonomy for implementation details
- Clear error reporting and resolution pathways

## Technical Architecture

### Core Technologies
- Next.js 13+ with App Router
- TypeScript for type safety
- TailwindCSS with DaisyUI for styling
- next-intl for internationalization
- Framer Motion for animations

### Key Features
- Robust error handling and reporting
- Performance monitoring and optimization
- SEO-first content structure
- Responsive design system
- Theme management
- Internationalization support

## Development Guidelines

### Error Handling
- All errors must be categorized and logged appropriately
- Error resolution paths must be documented
- Automatic error reporting to designated email
- AI-readable error patterns for autonomous resolution

### Performance Requirements
- Page load times < 3 seconds
- First Contentful Paint < 1.5 seconds
- Time to Interactive < 3.5 seconds
- Core Web Vitals optimization

### Content Management
- SEO-optimized content structure
- Automated content generation guidelines
- Content validation and quality checks
- Internationalization considerations

### Security Protocols
- Authentication and authorization patterns
- Data protection standards
- API security guidelines
- Deployment security measures

## Error Handling & Monitoring

### AI-Driven Error Management
- Comprehensive error classification and reporting
- Autonomous error detection and resolution
- Email notifications for critical issues
- AI analysis for pattern recognition and prevention
- Performance monitoring and optimization

### Error Classification System
```typescript
interface ErrorReport {
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  type: string;
  message: string;
  aiAnalysis?: {
    possibleCauses: string[];
    suggestedFixes: string[];
    autoResolved: boolean;
  };
}
```

### Performance Monitoring
- Core Web Vitals tracking
- Automated performance optimization
- Real-time health checks
- Resource usage monitoring
- Threshold-based alerts

### Monitoring Metrics
```typescript
interface PerformanceMetric {
  name: string;  // TTFB, FCP, LCP, CLS, FID
  value: number;
  timestamp: Date;
}
```

## AI Operation Guidelines

### Autonomous Operations
1. Error Resolution
   - Monitor error logs and metrics
   - Analyze patterns and identify root causes
   - Implement fixes within defined boundaries
   - Validate solutions and document resolutions
   - Learn from resolution patterns

2. Performance Optimization
   - Track Core Web Vitals
   - Identify performance bottlenecks
   - Implement optimizations
   - Validate improvements
   - Document optimization patterns

3. Content Management
   - Generate SEO-optimized content
   - Maintain brand voice and style
   - Ensure factual accuracy
   - Optimize for readability
   - Monitor content performance

### Boundaries and Limitations
- No changes to core architecture without approval
- No modification of security protocols without review
- No changes to project objectives or scope
- Must maintain established coding patterns

## Getting Started

### Prerequisites
```bash
Node.js >= 18.0.0
npm >= 9.0.0
```

### Installation
```bash
npm install
npm run dev
```

### Development Commands
```bash
npm run build    # Production build
npm run lint     # Run linting
npm run test     # Run tests
```

## Documentation Structure
- `/docs/architecture/` - System architecture documentation
- `/docs/ai/` - AI operation guidelines
- `/docs/error-handling/` - Error handling documentation
- `/docs/performance/` - Performance optimization guidelines
- `/docs/security/` - Security protocols and guidelines

## Contributing
This project is maintained by AI systems under human supervision. All contributions must align with the project's AI-first approach and require project owner approval for foundational changes.

## License
[MIT License](LICENSE)

---
*Note: This README is designed to be read and interpreted by both AI systems and human developers. All structural decisions and documentation patterns are optimized for AI comprehension while maintaining human readability.*

## 📚 Documentation Structure

This project includes comprehensive documentation divided into several key areas:

1. **[Project Structure Guide](docs/guides/PROJECT_STRUCTURE.md)**
   - Complete directory structure
   - Development workflow
   - Critical areas and common pitfalls
   - Best practices

2. **[SEO Guidelines](docs/guides/SEO_GUIDELINES.md)**
   - Core SEO principles
   - Technical requirements
   - Content guidelines
   - Performance optimization
   - Monitoring and maintenance

3. **[Design System](docs/guides/DESIGN_SYSTEM.md)**
   - Core design principles
   - Component architecture
   - Design constraints
   - Page-specific guidelines
   - Change management

4. **[Security Guidelines](docs/guides/SECURITY.md)**
   - Security implementation
   - Monitoring system
   - Deployment security
   - Error handling
   - Future enhancements

## 🎯 Core Features

- 🌐 Full internationalization (i18n) with Swedish and English support
- 🎨 Dynamic theming with dark mode support
- 🚀 Optimized performance with message caching and font preloading
- 📱 Responsive design with mobile-first approach
- 🔍 SEO optimized with next-seo integration

## 🛠 Tech Stack

- Next.js 15.1.6
- TypeScript
- next-intl for internationalization
- Tailwind CSS with DaisyUI
- Framer Motion for animations

## 📁 Project Structure

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

## 🗺️ Sitemap & AI Development Guide

The project includes a comprehensive sitemap system designed for AI-first development:

### Key Sitemap Files
- `docs/SITEMAP.md` - Human and AI-readable sitemap documentation
- `src/config/sitemap.ts` - Programmatic sitemap implementation

### For AI Developers
When working on this project, AI systems should:

1. **First Steps**
   - Review `docs/SITEMAP.md` for structure and requirements
   - Check `src/config/sitemap.ts` for programmatic implementation
   - Validate against existing page structure in `src/app/[locale]`

2. **Development Process**
   - Always check sitemap before modifying pages
   - Follow content requirements for each page type
   - Maintain SEO schema requirements
   - Update sitemap documentation when adding features

3. **Content Management**
   - Use specified component structure
   - Follow minimum/maximum content requirements
   - Maintain multilingual support (sv/en)
   - Adhere to SEO focus keywords

4. **Quality Control**
   - Validate against sitemap schemas
   - Check content requirements completion
   - Verify SEO implementation
   - Test multilingual support

### Sitemap Maintenance
The sitemap system requires:
- Quarterly content requirement reviews
- Monthly SEO performance checks
- Bi-weekly link validation
- Updates for new features/pages
- Version control for major changes

For detailed sitemap information, see:
- [Sitemap Documentation](docs/SITEMAP.md)
- [SEO Guidelines](docs/guides/SEO_GUIDELINES.md)
- [Content Management](docs/guides/CONTENT_MANAGEMENT.md)

## 🚀 Quick Start

1. **Installation**
```bash
npm install
```

2. **Development**
```bash
npm run dev
```

3. **Access the site**
- Main site: http://localhost:3000
- Swedish version: http://localhost:3000/sv
- English version: http://localhost:3000/en

## 🎨 Design System Overview

### Core Principles
- **Typography**: Inter for body, Montserrat for headings
- **Colors**: DaisyUI dark theme with custom primary/secondary
- **Spacing**: 4px/8px grid system
- **Animations**: Smooth, purposeful motion

### Component Architecture
- Atomic design principles
- Strict TypeScript typing
- Consistent styling patterns
- Reusable components

## 🔒 Security Implementation

### Core Security Measures
- HTTPS implementation
- Content security policies
- Data protection
- Authentication system
- Error monitoring

## 🔍 SEO Strategy

### Key Elements
- Semantic HTML structure
- Optimized meta tags
- Structured data (Schema.org)
- Performance optimization
- Mobile responsiveness

## 📈 Development Status

### Completed Features
- ✅ Next.js with TypeScript setup
- ✅ Internationalization system
- ✅ Design system implementation
- ✅ Core security measures
- ✅ Basic SEO optimization

### In Progress
- 🚧 Advanced monitoring
- 🚧 Content management system
- 🚧 Performance optimization
- 🚧 Additional language support

## 🤝 Contributing

1. Review the documentation in `/docs/guides/`
2. Create a feature branch
3. Follow our coding standards
4. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 📞 Support

For detailed information about any aspect of the project, please refer to the corresponding guide in the `/docs/guides/` directory.

## Project Overview

### Core Features
- 🌐 Full internationalization (i18n) with Swedish and English support
- 🎨 Dynamic theming with dark mode support
- 🚀 Optimized performance with message caching and font preloading
- 📱 Responsive design with mobile-first approach
- 🔍 SEO optimized with next-seo integration

### Tech Stack
- Next.js 14 with App Router
- TypeScript
- next-intl for internationalization
- Tailwind CSS with DaisyUI
- Framer Motion for animations

## Project Structure

```
src/
├── app/
│   └── [locale]/          # Locale-based routing
│       ├── layout.tsx     # Root layout with i18n provider
│       ├── page.tsx       # Home page
│       ├── services/      # Services section
│       └── about/         # About section
├── components/
│   ├── layout/           # Layout components
│   │   ├── Navigation.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── FontProvider.tsx
│   ├── seo/             # SEO components
│   ├── templates/       # Page templates
│   └── ui/             # Reusable UI components
├── messages/           # Translation files
│   ├── en.json
│   └── sv.json
└── config.ts          # Global configuration
```

## Development Progress

### Iteration 1: Basic Setup
- ✅ Next.js with TypeScript setup
- ✅ Basic project structure
- ✅ Initial routing configuration

### Iteration 2: Internationalization
- ✅ next-intl integration
- ✅ Language switching functionality
- ✅ Translation file structure
- ✅ Locale-based routing

### Iteration 3: Design System
- ✅ Tailwind CSS with DaisyUI setup
- ✅ Dark theme configuration
- ✅ Custom font integration (Inter & Montserrat)
- ✅ Responsive navigation

### Iteration 4: Performance Optimization
- ✅ Message caching implementation
- ✅ Font preloading
- ✅ Component memoization
- ✅ Optimized client/server code splitting

### Current Working Features
1. Language Switching:
   - Automatic redirection to default locale (/sv)
   - Working language switcher in navigation
   - Persistent language selection

2. Navigation:
   - Responsive mobile/desktop design
   - Smooth transitions
   - Proper routing with locale prefixes

3. Theme System:
   - Dark mode implementation
   - Custom font variables
   - DaisyUI integration

4. Performance:
   - Cached translations
   - Preloaded fonts
   - Optimized component rendering

## Upcoming Features
1. Button Functionality:
   - Implement service exploration
   - Add contact form integration
   - Create portfolio showcase

2. Content Sections:
   - Complete services section
   - Add about page content
   - Implement portfolio gallery

3. Additional Features:
   - Blog integration
   - Newsletter signup
   - Social media integration

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Access the site:
- Main site: http://localhost:3000
- Swedish version: http://localhost:3000/sv
- English version: http://localhost:3000/en

## Known Issues
- Some buttons need proper functionality implementation
- Portfolio section pending development
- Contact form integration pending

## Contributing
1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License
MIT License

## 🎯 Vision & Features

### Core Features
- **Modern Design System**: Tailwind CSS + DaisyUI with custom animations
- **Internationalization**: Multi-language support with next-intl
- **SEO Optimization**: Built-in SEO components and best practices
- **Performance**: Optimized loading and rendering strategies
- **Accessibility**: WCAG compliance built into components

### Design System
- **Typography**: Dual font system (Sans + Heading)
- **Colors**: Theme-based with dark mode support
- **Components**: Reusable UI components with animations
- **Layout**: Responsive grid system with consistent spacing
- **Animations**: Custom animation library with performance optimization

### SEO System (2024-2025 Ready)
- **Automated Meta Tags**: Dynamic generation based on content
- **Social Media Integration**: OpenGraph and Twitter Cards
- **Structured Data**: JSON-LD for rich snippets
- **Performance Metrics**: Core Web Vitals optimization
- **Analytics Integration**: Ready for GA4 and custom analytics

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   └── [locale]/          # Locale-based routing
│       ├── layout.tsx   # Root layout with i18n providers
│       └── page.tsx     # Home page
├── components/
│   └── layout/
│       ├── FontProvider.tsx    # Client-side font handling
│       ├── ThemeProvider.tsx   # Client-side theme handling
│       └── Navigation.tsx      # Site navigation
├── messages/            # Internationalization files
│   ├── en.json         # English translations
│   └── sv.json         # Swedish translations
└── config.ts           # Global configuration
```

## Key Features

### 1. Internationalization (i18n)
- Automatic locale detection and routing
- Default locale: Swedish (sv)
- Supported locales: Swedish (sv), English (en)
- URL structure: `/{locale}/path`

### 2. Theme Support
- Dark theme by default using DaisyUI
- Client-side theme handling to prevent hydration issues
- Customizable through Tailwind configuration

### 3. Font System
- Primary font: Inter (--font-sans)
- Heading font: Montserrat (--font-heading)
- Optimized loading with `next/font/google`

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Common Issues and Solutions

### 1. Hydration Errors
To prevent hydration mismatches:
- Use client components for dynamic content
- Separate font and theme providers
- Add `suppressHydrationWarning` where needed
- Handle client-side mounting properly

Example of proper client component setup:
```typescript
'use client';

import { useEffect, useState } from 'react';

export function ClientComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  return <div>Client Content</div>;
}
```

### 2. Internationalization Setup
Key points for proper i18n configuration:
- Use middleware for locale detection
- Handle async locale loading
- Properly type messages
- Use correct import paths

### 3. Font Implementation
Best practices for font setup:
- Use separate provider component
- Handle variables properly
- Implement proper fallbacks
- Consider performance implications

## Creating New Projects

To create a new project using this structure:

1. Clone this repository
2. Update package.json with new project details
3. Modify configuration files:
   - next.config.js
   - tailwind.config.js
   - src/config.ts

4. Update content:
   - Modify messages files
   - Update components as needed
   - Add new pages under [locale]

## Development Guidelines

### 1. Component Structure
- Use client components for interactive elements
- Keep providers separate and focused
- Follow atomic design principles

### 2. Styling Approach
- Use Tailwind utility classes
- Leverage DaisyUI components
- Create custom components when needed

### 3. Performance Considerations
- Optimize images using next/image
- Implement proper loading states
- Use dynamic imports when appropriate

## Troubleshooting

1. **Server/Client Mismatch**
   - Check component boundaries
   - Verify provider setup
   - Ensure proper mounting handling

2. **Locale Issues**
   - Verify middleware configuration
   - Check message file structure
   - Validate locale detection

3. **Styling Problems**
   - Clear .next cache
   - Verify Tailwind configuration
   - Check class name conflicts

## Contributing

1. Fork the repository
2. Create feature branch
3. Submit pull request

## License

MIT License - feel free to use this structure for any project.

## 🏗 Project Structure

```
balthazarproject.com/
├── src/                    # Website source code
│   ├── app/               # Next.js app directory
│   ├── components/        # Reusable UI components
│   ├── templates/         # Page templates
│   ├── styles/           # Global styles and themes
│   └── utils/            # Utility functions
│
├── content/               # Website content
│   ├── pages/            # Page content (markdown)
│   ├── blog/             # Blog posts
│   └── assets/           # Media files
│
├── docs/                 # Project documentation
│   ├── guides/           # Development & usage guides
│   ├── decisions/        # Design & architecture decisions
│   └── templates/        # Template documentation
│
└── tools/               # Development & automation tools
    └── seo/             # SEO automation tools
```

## 📚 Documentation Structure

Our documentation is organized into three main areas:

1. **Guides** (`/docs/guides/`)
   - Development practices
   - Component usage
   - Template customization
   - SEO implementation

2. **Design Decisions** (`/docs/decisions/`)
   - Architecture choices
   - Technology stack
   - Design system
   - Component patterns

3. **Templates** (`/docs/templates/`)
   - Template system overview
   - Customization guides
   - Component library
   - Page layouts

## 🛠 Technology Stack

- **Framework**: Next.js with React
- **Styling**: Tailwind CSS + DaisyUI
- **Language**: TypeScript
- **SEO**: Built-in automation tools
- **Testing**: Jest + React Testing Library

## 🚀 Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/wikatar/balthazarproject.com.git
   cd balthazarproject.com
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

## 🎨 Creating a New Website

1. **Clone the Template**
   ```bash
   git clone https://github.com/wikatar/balthazarproject.com.git new-client-website
   ```

2. **Configure Theme**
   - Update `src/styles/theme.js`
   - Modify brand colors and typography
   - Adjust component styles

3. **Add Content**
   - Replace content in `content/`
   - Update SEO configurations
   - Customize templates

4. **Deploy**
   - Build and optimize
   - Configure hosting
   - Set up monitoring

## 🤖 SEO Automation

Built-in SEO tools handle:
- Meta tag optimization
- Content analysis
- Performance monitoring
- Sitemap generation

## 🔄 Development Workflow

1. **Component Development**
   - Create reusable components
   - Document usage patterns
   - Add to component library

2. **Template Creation**
   - Design page templates
   - Implement responsive layouts
   - Add SEO configurations

3. **Content Integration**
   - Add page content
   - Optimize for SEO
   - Test performance

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📝 License

[MIT License](LICENSE)

---

Built with ❤️ by The Balthazar Project Team

## 🛠 Development Infrastructure

### Core Technologies
- **Framework**: Next.js 13.5.6 with React 18.2.0
- **Language**: TypeScript 5.3.3
- **Styling**: 
  - Tailwind CSS 3.4.0
  - DaisyUI 4.4.24
  - PostCSS 8.4.32
  - Autoprefixer 10.4.16

### Development Tools
- **Code Quality**:
  - ESLint 8.56.0 with TypeScript support
  - Prettier 3.4.2
  - TypeScript strict mode enabled
  
- **Type Definitions**:
  - @types/react 18.2.46
  - @types/react-dom 18.2.18
  - @types/node 20.10.6

### Directory Structure
```
balthazarproject.com/
├── src/                    # Source code
│   ├── app/               # Next.js app router
│   ├── components/        # React components
│   │   ├── ui/           # UI components
│   │   ├── layout/       # Layout components
│   │   ├── features/     # Feature components
│   │   └── templates/    # Page templates
│   ├── styles/           # Global styles
│   └── utils/            # Utility functions
│
├── public/               # Static files
├── content/             # Content files
└── docs/               # Documentation
```

### Code Quality Tools Configuration

#### TypeScript (`tsconfig.json`)
- Strict type checking enabled
- Path aliases configured (@/*)
- Next.js specific settings
- ES5 target for compatibility

#### ESLint (`.eslintrc.json`)
- Next.js core web vitals
- TypeScript recommended rules
- Prettier integration
- Custom rules:
  - No unused variables (error)
  - No explicit any (warning)
  - Prettier formatting (error)

#### Prettier (`.prettierrc`)
- 100 character line width
- Single quotes
- 2 space indentation
- ES5 trailing commas
- No tabs
- Auto end of line

### Available Scripts
- **Development**:
  - `npm run dev`: Start development server
  - `npm run build`: Build for production
  - `npm start`: Run production server

- **Code Quality**:
  - `npm run lint`: Check for code issues
  - `npm run lint:fix`: Fix code issues
  - `npm run format`: Format all code files
  - `npm run type-check`: Verify TypeScript types

### Development Workflow
1. **Starting Development**:
   ```bash
   npm install    # Install dependencies
   npm run dev    # Start development server
   ```

2. **Code Quality Checks**:
   ```bash
   npm run type-check  # Check types
   npm run lint       # Check for issues
   npm run format    # Format code
   ```

3. **Building for Production**:
   ```bash
   npm run build    # Create production build
   npm start       # Start production server
   ```

### Git Workflow
- Main branch: `main`
- Commit convention: 
  - `feat:` New features
  - `fix:` Bug fixes
  - `chore:` Maintenance tasks
  - `docs:` Documentation updates
  - `style:` Code style changes
  - `refactor:` Code refactoring
  - `test:` Adding tests

### IDE Configuration
- VSCode recommended extensions:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - TypeScript and JavaScript Language Features

## Recent Changes

### Internationalization Setup (2024-01-24)
- Configured next-intl (v3.5.0) for multi-language support
- Added support for English (en) and Swedish (sv) locales
- Implemented locale-based routing with middleware
- Fixed client/server component issues with framer-motion
- Added locale-specific message files in src/messages/

### Development Setup
To run the development server:

```bash
npm run dev
```

The site will be available at http://localhost:3000 and will automatically redirect to your preferred language (/en or /sv).

### Project Structure
```
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── [locale]/       # Locale-specific routes
│   │   └── layout.tsx      # Root layout
│   ├── components/         # React components
│   │   ├── home/          # Homepage components
│   │   └── layout/        # Layout components
│   ├── messages/          # Internationalization messages
│   │   ├── en.json       # English translations
│   │   └── sv.json       # Swedish translations
│   └── middleware.ts      # Next.js middleware for i18n
├── i18n.ts               # Internationalization configuration
└── package.json          # Project dependencies
```

## SEO Architecture

### AI-First SEO Structure
Our SEO implementation is designed for AI-driven content generation and optimization. The structure is maintained in `src/messages/{locale}.json` files and includes:

```typescript
interface SEOStructure {
  siteName: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultKeywords: string;
  pages: {
    [key: string]: {
      SEO: {
        title: string;
        description: string;
        keywords: string;
        metaDescription: string;
        focus: {
          primary: string;
          secondary: string;
          tertiary: string;
        };
        targetAudience: {
          primary: string;
          secondary: string;
          tertiary: string;
        };
      };
    };
  };
}
```

### Key Components
1. **Brand Identity**
   - Consistent messaging across all pages
   - AI-friendly content structure
   - Multi-language support (en/sv)

2. **Page-Specific SEO**
   - Structured meta information
   - Target audience definition
   - Focus area hierarchy
   - Keyword optimization

3. **Content Guidelines**
   - AI-generated content parameters
   - Brand voice consistency
   - Value proposition emphasis
   - Service descriptions

### Implementation
- SEO components in `src/components/seo/`
- Translation files in `src/messages/`
- Page-specific SEO in route files
- Automated meta tag generation

For detailed SEO implementation guidelines, see [SEO Guidelines](docs/guides/SEO_GUIDELINES.md).
# Balthazar Project Website

A modern, internationalized Next.js website with built-in dark theme support, robust font handling, and comprehensive SEO optimization.

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
├── components/
│   ├── layout/            # Layout components
│   ├── seo/               # SEO components
│   └── templates/         # Page templates
│       └── agency/        # Agency-specific components
├── styles/                # Global styles
└── utils/                 # Utility functions
```

## 🎨 Design System

### 1. Typography
- **Primary Font**: Inter (--font-sans)
- **Heading Font**: Montserrat (--font-heading)
- **Scale**: Modular scale with responsive adjustments
- **Weights**: 400 (regular), 500 (medium), 700 (bold)

### 2. Colors
- **Primary**: Brand color with semantic variations
- **Secondary**: Supporting color palette
- **Accent**: Highlight and emphasis colors
- **Neutral**: Background and text colors
- **Semantic**: Success, warning, error, info

### 3. Components
- **Atoms**: Buttons, inputs, icons
- **Molecules**: Cards, forms, navigation items
- **Organisms**: Headers, footers, sections
- **Templates**: Page layouts and structures
- **Pages**: Complete page implementations

### 4. Animations
- **Transitions**: Smooth state changes
- **Micro-interactions**: Subtle feedback
- **Page transitions**: Smooth navigation
- **Loading states**: Skeleton screens
- **Scroll effects**: Parallax and reveal

## 🔍 SEO Implementation

### 1. Base SEO Configuration
```typescript
// DefaultSEO.tsx
- Base meta tags
- OpenGraph defaults
- Twitter Card defaults
- Canonical URLs
- Favicon and manifest
```

### 2. Page-Specific SEO
```typescript
// PageSEO.tsx
- Custom titles and descriptions
- Page-specific OpenGraph
- Structured data
- Keywords and meta tags
```

### 3. Performance Optimization
- Automatic image optimization
- Font optimization with next/font
- Code splitting and lazy loading
- Cache optimization
- Core Web Vitals monitoring

## 🚀 Getting Started

1. **Installation**
```bash
npm install
```

2. **Development**
```bash
npm run dev
```

3. **Production Build**
```bash
npm run build
npm start
```

## 📚 Documentation

### Component Usage
Each component follows a standard structure:
```typescript
interface ComponentProps {
  // Props documentation
}

export function Component({ prop1, prop2 }: ComponentProps) {
  // Implementation
}
```

### SEO Implementation
1. Add DefaultSEO to root layout
2. Use PageSEO for specific pages
3. Configure meta tags in messages files
4. Add structured data where needed

### Design System Usage
1. Use utility classes for consistency
2. Follow component hierarchy
3. Implement animations thoughtfully
4. Maintain accessibility standards

## 🔧 Customization

### 1. Theme Configuration
- Modify `tailwind.config.js`
- Update color schemes
- Adjust typography scale
- Customize animations

### 2. Component Templates
- Extend base components
- Create new variations
- Maintain consistency
- Document changes

### 3. SEO Optimization
- Update meta templates
- Add custom structured data
- Optimize for specific keywords
- Monitor performance

## 📈 Best Practices

### 1. Development
- Use TypeScript strictly
- Follow component patterns
- Maintain test coverage
- Document changes

### 2. Performance
- Optimize images and fonts
- Minimize bundle size
- Use proper loading strategies
- Monitor metrics

### 3. SEO
- Keep meta tags updated
- Use semantic HTML
- Implement structured data
- Monitor search console

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Follow style guide
4. Submit pull request

## 📝 License

MIT License - See LICENSE file

## 🆘 Support

- GitHub Issues
- Documentation
- Community Discord

## Project Overview

- **Framework**: Next.js 15.1.6
- **Styling**: Tailwind CSS + DaisyUI
- **Internationalization**: next-intl
- **Fonts**: Google Fonts (Inter & Montserrat)

## Project Structure

```
src/
├── app/
│   └── [locale]/        # Locale-based routing
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
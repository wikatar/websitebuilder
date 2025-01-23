# Balthazar Project Website

A modern, internationalized Next.js website showcasing web development expertise and services.

## Project Overview

This project is built with Next.js 15.1.6 and features:
- Full internationalization support (Swedish and English)
- Modern UI with Tailwind CSS and DaisyUI
- TypeScript for type safety
- ESLint and Prettier for code quality

## Project Structure

```
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── [locale]/       # Locale-specific routes
│   │   └── layout.tsx      # Root layout
│   ├── components/         # React components
│   │   ├── layout/        # Layout components
│   │   └── ui/            # UI components
│   ├── messages/          # Translation files
│   │   ├── en.json       # English translations
│   │   └── sv.json       # Swedish translations
│   └── config.ts         # Project configuration
├── middleware.ts         # Internationalization middleware
└── next.config.js       # Next.js configuration
```

## Internationalization (i18n)

The project uses `next-intl` for internationalization with the following setup:
- Default locale: Swedish (sv)
- Supported locales: Swedish (sv), English (en)
- Automatic locale detection and routing
- Translation files in `src/messages/`

### Key Files:
- `middleware.ts`: Handles locale routing and prefixing
- `src/messages/*.json`: Translation files
- `src/i18n/request.ts`: Server-side i18n configuration

## Development Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Environment Setup**:
   - Node.js 18+ required
   - Ensure all dependencies are installed

3. **Development Server**:
   ```bash
   npm run dev
   ```
   Access the site at http://localhost:3000

4. **Code Quality Checks**:
   ```bash
   npm run type-check  # Check types
   npm run lint       # Check for issues
   npm run format    # Format code
   ```

5. **Building for Production**:
   ```bash
   npm run build    # Create production build
   npm start       # Start production server
   ```

## Git Workflow
- Main branch: `main`
- Commit convention: 
  - `feat:` New features
  - `fix:` Bug fixes
  - `chore:` Maintenance tasks
  - `docs:` Documentation updates
  - `style:` Code style changes
  - `refactor:` Code refactoring
  - `test:` Adding tests

## Configuration Files

### next.config.js
- Next.js configuration
- next-intl plugin setup
- Environment variables

### middleware.ts
- Internationalization routing
- Path matching configuration
- Locale prefix settings

### tailwind.config.js
- Theme configuration
- DaisyUI setup
- Custom color schemes

## IDE Configuration
- VSCode recommended extensions:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - TypeScript and JavaScript Language Features

## Troubleshooting

Common issues and solutions:
1. **Port Already in Use**: Kill the process using `pkill -f "next dev"` and restart
2. **Type Errors**: Run `npm run type-check` to identify issues
3. **Linting Errors**: Run `npm run lint:fix` to auto-fix common issues

## 🎯 Vision

We're building more than just a website - we're creating a foundation for scalable web development:

- **Template-First Development**: Every component, page, and feature is designed for reuse
- **Built-In SEO**: Automated SEO optimization with built-in best practices
- **Comprehensive Documentation**: Capturing decisions, patterns, and guides for future reference
- **Client-Ready Framework**: Ready to be adapted for client projects with minimal modifications

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
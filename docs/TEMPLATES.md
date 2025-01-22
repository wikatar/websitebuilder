# Website Templates Guide

This document outlines the template system used in the Website Builder Bot, focusing on design options and implementation.

## Template Structure

```
bot_core/templates/
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

## Design Options

### 1. Tailwind Basic
- **Description**: Minimal setup using Tailwind CSS via CDN
- **Best for**: Quick prototypes and simple websites
- **Setup**: Zero configuration needed
- **Features**:
  - Utility-first CSS
  - Responsive design
  - Modern components
  - No build step required

### 2. Tailwind + DaisyUI
- **Description**: Enhanced Tailwind with component library
- **Best for**: Complex applications needing consistent UI
- **Setup**: Requires Node.js and npm
- **Features**:
  - Pre-built components
  - Theme system
  - Responsive layouts
  - Customizable design tokens

### 3. Custom CSS
- **Description**: Framework-free approach
- **Best for**: Unique designs or minimal sites
- **Setup**: Manual CSS implementation
- **Features**:
  - Full control over styles
  - No external dependencies
  - Lightweight output

## Implementation

### Basic Usage
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

### Development Workflows

#### Tailwind Basic (CDN)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <!-- Your content here -->
</body>
</html>
```

#### Tailwind + DaisyUI
```bash
# Installation
npm install tailwindcss daisyui

# Development
npm run dev

# Production build
npm run build
```

#### Custom CSS
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles/main.css">
</head>
<body>
    <!-- Your content here -->
</body>
</html>
```

## Component Examples

### Navigation Bar
```html
<nav class="bg-white shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
            <div class="flex space-x-7">
                <a href="#" class="flex items-center py-4 px-2">
                    <span class="font-semibold text-gray-500 text-lg">Logo</span>
                </a>
                <div class="hidden md:flex items-center space-x-1">
                    <a href="#" class="py-4 px-2 text-blue-500 border-b-4 border-blue-500">Home</a>
                    <a href="#" class="py-4 px-2 text-gray-500 hover:text-blue-500">About</a>
                    <a href="#" class="py-4 px-2 text-gray-500 hover:text-blue-500">Services</a>
                </div>
            </div>
        </div>
    </div>
</nav>
```

## Best Practices

1. **Template Selection**:
   - Use Tailwind Basic for quick prototypes
   - Choose Tailwind + DaisyUI for complex applications
   - Select Custom CSS for unique designs

2. **Development**:
   - Keep components modular
   - Use responsive design patterns
   - Follow framework conventions

3. **Performance**:
   - Minimize custom CSS
   - Use CDN for development only
   - Build for production when using npm

## Future Enhancements

- [ ] Add more component libraries
- [ ] Create template marketplace
- [ ] Implement visual template customizer
- [ ] Add template version control 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Will be customized per client
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui'],
        heading: ['var(--font-heading)', 'system-ui'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
        'scale-up': 'scaleUp 0.3s ease-out forwards',
        blob: 'blob 7s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [{
      dark: {
        ...require('daisyui/src/theming/themes')['dark'],
        // Base colors - Dark theme
        "base-100": "#000000", // Pure black - Your specified base
        "base-200": "#0A0707", // Slightly lighter with a hint of red
        "base-300": "#141010", // Even lighter with red undertone
        "base-content": "#ffffff",

        // Primary colors - Main brand color
        primary: "#3D0000", // Your specified deep dark red
        "primary-focus": "#4D0000", // Slightly lighter for hover states
        "primary-content": "#ffffff",

        // Secondary colors - Supporting color
        secondary: "#950101", // Your specified darker red
        "secondary-focus": "#A50101", // Slightly lighter for hover states
        "secondary-content": "#ffffff",

        // Accent colors - Highlights and special elements
        accent: "#CC0000", // Brighter red for accents
        "accent-focus": "#DD0000",
        "accent-content": "#ffffff",

        // Neutral colors - Text and backgrounds
        neutral: "#1A1616", // Dark gray with red undertone
        "neutral-focus": "#242020",
        "neutral-content": "#ffffff",

        // State colors - Feedback and status
        info: "#0070f3",
        success: "#00cc88",
        warning: "#ff9900",
        error: "#ff0000",

        // Additional custom colors for gradients and effects
        "red-dark": "#2D0000",
        "red-light": "#FF0000",
      }
    }],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
  },
}

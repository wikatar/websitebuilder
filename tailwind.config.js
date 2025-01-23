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
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [{
      dark: {
        ...require('daisyui/src/theming/themes')['dark'],
        "base-100": "#000000",
        "base-200": "#0a0a0a",
        "base-300": "#1a1a1a",
        "base-content": "#ffffff",
        primary: "#8B0000",
        secondary: "#D10000",
        accent: "#FF0000"
      }
    }],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
  },
}

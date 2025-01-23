/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#007AFF',
          secondary: '#5856D6',
          accent: '#FF2D55',
        },
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#8B0000',
          secondary: '#D10000',
          accent: '#FF0000',
          neutral: '#1a1a1a',
          'base-100': '#0f0f0f',
          'base-200': '#1a1a1a',
          'base-300': '#262626',
          'base-content': '#ffffff',
        },
      },
    ],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
  },
}

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
          primary: '#0A84FF',
          secondary: '#5E5CE6',
          accent: '#FF375F',
        },
      },
    ],
  },
}

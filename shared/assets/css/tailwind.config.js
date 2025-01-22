/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{html,js}",
    "./templates/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
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
          primary: '#4F46E5',
          secondary: '#EC4899',
          accent: '#14B8A6',
        },
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#6366F1',
          secondary: '#EC4899',
          accent: '#14B8A6',
        },
      },
    ],
  },
} 
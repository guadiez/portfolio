/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f3f1ec',
        'paper-dark': '#e9e6df',
        ink: '#141414',
        grey: {
          DEFAULT: '#9a978f',
          light: '#c7c4bc',
          dark: '#6b6962',
        },
        noir: '#0a0a0a',
      },
      fontFamily: {
        display: ['"Pagkaki"', '"Henny Penny"', '"Poppins"', 'cursive'],
        body: ['"Poppins"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '.35em',
      },
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [],
}

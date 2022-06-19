/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#81e6d9',
        secondary: '#4fd1c5',
        background: '#e6fffa',
        white: '#fff',
      },
      maxWidth: {
        xxs: '18rem',
      },
    },
  },
  plugins: [],
}

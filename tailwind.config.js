/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Montserrat': 'Montserrat, sans-serif',
        'SourceSerif': 'Source Serif Pro, serif',
      },
      textColor:{
        'nav': '#4B4B4B',
        'articles': '#838387',
        'button': '#838387',
        'secondary': '#254D4C',
      },
      backgroundColor: {
        'sponsorship' : '#F4F6F5',
        'feedbacksBg' : '#F4F6F5',
        'secondary': '#254D4C',
      },
      ringColor:{
        'secondary': '#254D4D'
      },
      screens:{
        'xs': '400px',
      }
    },
  },
  plugins: [],
}

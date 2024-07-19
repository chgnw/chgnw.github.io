/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        std: ['Kanit']
      },
      colors: {
        primary: '#9DAOA7',
        text: '#03030A',
        bgd: '#C6D0DE',
        acc: '#FFD700'
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      'sm': '480px',
      'md': '834px',
      'lg': '1440px',
    },
    extend: {
      fontFamily: {
        umono: ['Ubuntu Mono']
      },
      colors: {
        background: '#151517',
        text: '#C6D624',
        secondary: '#F3F3F4',
      }
    },
  },
  plugins: [],
}


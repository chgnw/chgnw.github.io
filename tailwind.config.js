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
        background: '#FFF0F5',
        text: '#483D8B',
        primary: '#F4E3E9',
        secondary: '#F5F5F5',
        accent: '#BC8F8F'
      }
    },
  },
  plugins: [],
}


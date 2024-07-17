/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Kanit: ['Kanit'], 
        poppins: ['poppins']
      },
      colors: {
        primary: '#225522',
        text: '#F5F5F5',
        bgd: '#FFFDD0',
        acc: '#FFD700'
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      openSans: ['Montserrat'],
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    
    extend: {

      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      colors: {
        primary: '#FE860E',
        secondary: '#FF4F79',
        third: '#FF4F79',
        fourth: '#D62744',
        fifth: '#EF304F',
  
        darkGray: '#191A1B',
        mediumGray: '#292D32',
        neutralGray: '#666666',
        lighterGray: '#D2D2D2',
        grayWhithe: '#F0F0F0',

      },
      height:{
        '100': '26rem',
        '120': '28rem',
        '128': '32rem',
      },
    },

    
  },
  plugins: [],
}


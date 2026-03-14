/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {    
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary_gray: '#F5F5F5',
        secondary_gray: '#C4C4C4',
      },
      keyframes: {
        slideIn: {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)',
          },
          '100%':{
            opacity: '1',
            transform: 'translateX(0)',
          }
        }
      },
      animation: {
      slideIn: 'slideIn 1s ease forwards',
    }
    },    
  },
  plugins: [],
}
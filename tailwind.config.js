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
      }
    },
  },
  plugins: [],
}
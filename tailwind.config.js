/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: '#41B06E',
        primaryContent: '#8DECB4',
        primarySubcontent: '#2DAA9E',
        primaryBase: '#141E46',
        primaryAccent: '#8DECB4',
        primaryBg: '#FFF5E0',
  
        
      },
    },
  },
  plugins: [],
}
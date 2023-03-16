/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Inter:'Inter'
      },
      boxShadow:{
        mainShadow:'0px 0px 20px 2px rgba(0,0,0,.1)'
      }
    },
  },
  plugins: [],
}

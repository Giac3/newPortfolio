/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        labrada: ['Labrada', 'serif'],
        display: ['Comfortaa', "cursive"]
      },
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.15) 0px 2px 8px',
        'custom2': ' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
      }

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require("tailwindcss-animation-delay"),
  ],
}
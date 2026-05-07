/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : "#E6EEC9",
        secondary : "#C2D099",
        accent : "#35858E"
      }
    },
  },
  plugins: [],
}
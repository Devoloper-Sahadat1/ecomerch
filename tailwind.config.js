/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      st:["Gupter", "serif"]
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


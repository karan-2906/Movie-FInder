/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
       colors: {
        "light-blue" : "#227fb4",
        "dark-blue" : "#1d4ed8",
        "light-gray" : "#9ca3af",
        "dark-gray" : "#202020",
       }
    },
  },
  plugins: [],
}


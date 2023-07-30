/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dk-dark-blue": "hsl(209, 23%, 22%)",
        "dk-very-dark-blue": "hsl(207, 26%, 17%)",
        "lt-very-dark-blue": "hsl(200, 15%, 8%)",
        "lt-dark-gray": "hsl(0, 0%, 52%)",
        "lt-light-gray": "hsl(0, 0%, 98%)",
        "mt-white": "hsl(0, 0%, 100%)"
      },
      fontFamily : {
        "nunito": ['Nunito Sans', "sans-serif"]
      }
    },
  },
  plugins: [],
}


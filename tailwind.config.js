/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "600px",
        xs: "300px",
      },
      fontFamily: {
        myFont: ["my-font", "serif"],
      },
      colors: {
        primary: "#282828",
        second: "#fff6c2",
        tercero: "#e7e5da",
      },
    },

  },
  plugins: [],
};

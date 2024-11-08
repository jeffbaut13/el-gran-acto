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
        StageGroteskBlack: ["StageGrotesk-black", "serif"],
        StageGroteskBold: ["StageGrotesk-bold", "serif"],
        StageGroteskLigth: ["StageGrotesk-ligth", "serif"],
        StageGroteskRegular: ["StageGrotesk-regular", "serif"],
        Wayland: ["Wayland", "serif"],
      },
      colors: {
        primary: "#fcf6cc",
        second: "#000000",
        tercero: "#e9e2b4",
      },
    },
  },
  plugins: [],
};

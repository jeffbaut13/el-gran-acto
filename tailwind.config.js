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
        neue: ["BebasNeue-Regular", "serif"],
        Fontfabric: ["Fontfabric-Regular", "serif"],
        Alterenate: ["Alterenate-regular", "serif"],
        StageGroteskBlack: ["StageGrotesk-black", "serif"],
        StageGroteskBold: ["StageGrotesk-bold", "serif"],
        StageGroteskLigth: ["StageGrotesk-ligth", "serif"],
        StageGroteskRegular: ["StageGrotesk-regular", "serif"],
        StageGroteskMedium: ["StageGrotesk-Medium", "serif"],
        Wayland: ["Wayland", "serif"],
      },
      colors: {
        primary: "var(--color-primary)",
        second: "var(--color-second)",
        tercero: "var(--color-third)",
        opacityBlack: "var(--color-opacityBlack)",
      },
      
      
      fontSize:{
        button: "1.58rem",
        parrafo: "0.9rem",
        titlesBig: "6.22rem"
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "768px",
        lg: "1440px",
      },
      fontFamily: {
        outfit: "Outfit,sans-serif",
      },
      colors: {
        red: "#FC4747",
        darkBlue: "#10141E",
        semiDarkBlue: "#161D2F",
        greyishBLue: "#5A698F",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

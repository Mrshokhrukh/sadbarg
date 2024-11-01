/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        custom: { max: "1320px", min: "512px" },
      },
      maxWidth: {
        max: "1290px", // max-width: 1290px
      },
      fontFamily: {
        playfair: "Playfair Display",
        montserrat: "Montserrat",
      },
      colors: {
        cl1: "#F8F8F8",
        cl2Orange: "#D6891F",
      },
      boxShadow: {
        shx1: "rgba(0, 0, 0, 0.15) 0px 2px 8px;",
        card: "rgba(0, 0, 0, 0.15) 0px 2px 8px;",
      },
    },
  },
  plugins: [],
};

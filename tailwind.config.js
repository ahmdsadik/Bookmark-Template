/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./*.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        Rubik: "Rubik",
      },
      colors: {
        red: {
          soft: "#fa5757",
        },
        blue: {
          soft: "#5368df",
          Grayish: "#9194a1",
          Dark: "#252b46",
        },
        Text: {
          global: "18px",
        },
      },
    },
  },
  plugins: [],
};

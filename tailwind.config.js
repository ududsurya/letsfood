/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#FFCB45",
        secondary: "#475569",
        light: "#FFF9EA",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};

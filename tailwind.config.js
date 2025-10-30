/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        lightGradStart: "#C6E6FB",
        lightGradEnd: "#ffffff",
        darkGradStart: "#0F0C29",
        darkGradEnd: "#000000",
      },
    },
  },
  plugins: [],
};

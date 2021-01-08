const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  important: true,
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: { brand: "#fed700" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  // plugins: [require("@tailwindcss/ui"), require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

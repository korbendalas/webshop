module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        light: "#85d7ff",
        DEFAULT: "#1fb6ff",
      },
      yellow: { brand: "#fed700" },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  // plugins: [require("@tailwindcss/ui"), require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

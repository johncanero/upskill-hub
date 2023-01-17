module.exports = {
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
    "src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {},
    },
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};

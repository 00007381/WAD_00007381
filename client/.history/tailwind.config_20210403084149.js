module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "16/9": "56.25%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

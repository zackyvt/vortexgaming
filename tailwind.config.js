module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "dark": "#0B0B0D",
      "white": "#FFFFFF",
      "gold": "#A77129",
      "gray": "#111216"
    },
    fontFamily: {
      "sans": "Roboto, sans-serif"
    },
    extend: {
      boxShadow: {
        "standard": "5px 5px 10px 0px rgba(255,255,255,0.2);"
      }
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ["Nunito Sans", "sans-serif"],
      },

      colors: {
        "dm-bg": "hsl(207, 26%, 17%)",
        "lm-bg": "hsl(0, 0%, 98%)",
        "dm-secondary": "hsl(209, 23%, 22%)",
        "lm-secondary": "hsl(0, 0%, 100%)",
        "dark-gray": "hsl(0, 0%, 52%)", // light mode input
        "dm-text": "hsl(0, 0%, 100%)",
        "lm-text": "hsl(200, 15%, 8%)",
      },

      boxShadow: {
        around: "0 0 10px 2px rgb(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      "primary-black": "#16161A",
      "secundary-black": "#242629",
      "nice-purple": "#7F5AF0",
      "nice-green": "#2CB67D",
    }),
    textColor: {
      title: "#FFFFFE",
      general: "#94A1B2",
      "nice-green": "#2CB67D",
    },
    fontFamily: {
      title: "Oswald",
      body: "Raleway",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

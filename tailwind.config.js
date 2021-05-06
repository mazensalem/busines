const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber,
      amber: colors.amber,
      white: colors.white,
      black: colors.black,
    },
    extend: {
      backgroundImage: (theme) => ({
        background: "url('../img/private-dining-room.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

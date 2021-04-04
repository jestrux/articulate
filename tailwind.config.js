const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './index.html',
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lime: colors.lime,
        blue: colors.cyan,
        green: colors.emerald,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

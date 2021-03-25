module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
        brand: {
          light: '#308dc3',
          DEFAULT: '#0C6BA1',
          dark: '#064b72',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

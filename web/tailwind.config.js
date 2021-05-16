module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: '#31326f',
        yellow: '#ffc93c',
        lightGreen: '#dbf6e9',
        green: '#9ddfd3',
        grey: '#ebe9e7'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

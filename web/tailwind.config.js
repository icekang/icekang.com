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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: { color: theme('colors.yellow') },
            h2: { color: theme('colors.yellow') },
            h3: { color: theme('colors.yellow') },
            h4: { color: theme('colors.yellow') },
            h5: { color: theme('colors.yellow') },
            'li::before': { color: theme('colors.gray.200') },
            th: { color: theme('colors.gray.200')},
            color: theme('colors.grey'),
            a: {
              color: theme('colors.green'),
              '&:hover': {
                color: theme('colors.lightGreen'),
              },
            },
            blockquote: {
              color: theme('colors.yellow'),
            },
            code: {
              color: theme('colors.green'),
            },
            strong: {
              color: theme('colors.green'),
            },
          },
        },
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

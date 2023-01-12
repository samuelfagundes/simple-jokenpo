/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Inconsolata', 'sans-serif'],
    },
    colors: {
      white: '#FFFFFF',
      black: {
        900: '#14000A',
      },
      brown: {
        900: '#F5EFED',
      },
      green: {
        900: '#1AE000',
      },
      blue: {
        700: '#3E92CC',
      },
      red: {
        900: '#B80006',
      },
    },
    extend: {},
  },
  plugins: [],
};

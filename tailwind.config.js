const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inital: ['initial'],
      },
      textColor: {
        '404color': '#106f86',
        footertext: '#4f4f4f',
        compactcolor: '#444',
        linkButton: '#106f86',
      },
      backgroundColor: {
        footer: '#fafafa',
        scrolled: 'rgba(255, 255, 255, 0.75)',
      },
      borderColor: {
        ftborder: '#e5e5e5',
      },
      boxShadow: {
        productdetail:
          '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);',
      },
      zIndex: {
        1: 1,
      },
      transitionProperty: {
        backgroundColor: 'backgroundColor',
        padding: 'padding',
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};

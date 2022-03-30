const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      transparent: 'transparent',
      'almost-white': '#F7F7F7',
      'very-light-grey': '#EEEEEE',
      'disabled-grey': '#D7D7D7',
      'light-grey': '#BBBBBB',
      'mint-green': '#E4F2D2',
      'apple-green': '#78BE20',
      'grass-green': '#009639',
      'brand-green': '#006341',
      'heritage-green': '#115740',
      'orange-light': '#FCEED3',
      'orange': '#F2A900',
      'red-light': '#F7D4D7',
      'red': '#D22630',
      'red-dark': '#AA2930',
      'teal-light': '#D0F0EE',
      'teal': '#00B2A9'
    },
    screens: {
      'desktop': { 'min': '769px' },
      'tablet': { 'min': '641px', 'max': '768px' },
      'mobile': { 'min': '0px', 'max': '640px' }
    },
    fontFamily: {
      sans: ['"MarkPro"', ...defaultTheme.fontFamily.sans]
    },
    fontSize: {
      'desktop-h1': ['60px', { lineHeight: 1.25 }],
      'desktop-h2': ['40px', { lineHeight: 1.25 }],
      'desktop-h3': ['30px', { lineHeight: 1.25 }],
      'desktop-h4': ['28px', { lineHeight: 1.25 }],
      'desktop-h5': ['22px', { lineHeight: 1.25 }],
      'desktop-h6': ['20px', { lineHeight: 1.25 }],
      'desktop-paragraph': ['16px', { lineHeight: 1.5 }],
      'desktop-label': ['14px', { lineHeight: 1 }],
      'tablet-h1': ['40px', { lineHeight: 1.25 }],
      'tablet-h2': ['30px', { lineHeight: 1.25 }],
      'tablet-h3': ['26px', { lineHeight: 1.25 }],
      'tablet-h4': ['24px', { lineHeight: 1.25 }],
      'tablet-h5': ['22px', { lineHeight: 1.25 }],
      'tablet-h6': ['20px', { lineHeight: 1.25 }],
      'tablet-paragraph': ['16px', { lineHeight: 1.5 }],
      'tablet-label': ['14px', { lineHeight: 1 }],
      'mobile-h1': ['30px', { lineHeight: 1.25 }],
      'mobile-h2': ['26px', { lineHeight: 1.25 }],
      'mobile-h3': ['24px', { lineHeight: 1.25 }],
      'mobile-h4': ['22px', { lineHeight: 1.25 }],
      'mobile-h5': ['20px', { lineHeight: 1.25 }],
      'mobile-h6': ['18px', { lineHeight: 1.25 }],
      'mobile-paragraph': ['16px', { lineHeight: 1.5 }],
      'mobile-label': ['14px', { lineHeight: 1 }]
    },
    extend: {
      spacing: {
        'desktop-small': '15px',
        'desktop-medium': '30px',
        'desktop-large': '60px',
        'tablet-small': '10px',
        'tablet-medium': '20px',
        'tablet-large': '40px',
        'mobile-small': '10px',
        'mobile-medium': '20px',
        'mobile-large': '40px'
      }
    },
  },
  plugins: [],
};

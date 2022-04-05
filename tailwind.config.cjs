const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      gray: colors.neutral,
    },
    extend: {
      colors: {
        accent: colors.violet,
        light: colors.gray['500'],
        muted: colors.gray['600'],
        semidark: colors.gray['700'],
        dark: colors.gray['800'],
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1200px',
      // xl: '1440px',
    },
  },
  plugins: [],
};

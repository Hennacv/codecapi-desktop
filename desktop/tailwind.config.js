module.exports = {
  content: ['./src/renderer/*/.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      zIndex: {
        1: '1',
      },
      boxShadow: {
        nav: '0 0.1em 0.3em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%)',
        side: '0 0 0.3em rgb(10 10 10 / 10%)',
      },
      minWidth: {
        side: '15rem',
      },
      colors: {
        'hover-bl': '#485fc7',
      },
    },
  },
  variants: {},
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/forms')],
};

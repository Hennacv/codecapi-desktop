module.exports = {
  content: ['./src/renderer/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      zIndex: {
        1: '1',
      },
      boxShadow: {
        nav: '0 0.1em 0.3em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%)',
        side: '0 0 0.3em rgb(10 10 10 / 10%)',
        card: '0 2em 5em rgba(0, 0, 0, 0.03)',
        tag: '0 0.3em 0.5em rgba(0, 0, 0, 0.05)',
        input: 'inset 0 0.1em 0.5em rgba(0, 0, 0, 0.05)'
      },
      minWidth: {
        side: '15rem',
      },
      width: {
        answer: '97.5%',
      },
      colors: {
        'hover-bl': '#485fc7',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/forms')],
};

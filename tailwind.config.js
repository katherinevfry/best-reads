module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkblue: '#152b30',
        medblue: '#284247'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

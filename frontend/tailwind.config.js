module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          100: '#f0fff4', // very light mint
          200: '#ccf5e8', // lighter mint
          300: '#a7eadc', // light mint
          400: '#82dfd0', // mint
          500: '#5dd4c3', // default mint
          600: '#38c9b7', // medium mint
          700: '#2aa79b', // dark mint
          800: '#1d857f', // darker mint
          900: '#106362', // darkest mint
        },
        'secondary': {
          100: '#E2E2D5',
          200: '#888883',
        },
        'primary-text': '#212121',
        'secondary-text': '#757575',
      }
    },
  },
  plugins: [],
}
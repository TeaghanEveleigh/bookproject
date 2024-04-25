const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Scan these files for Tailwind CSS classes
  theme: {
    extend: {
      colors: {
        // Extend or override the default colors
        teal: colors.teal,
        cyan: colors.cyan,
      },
      fontFamily: {
        // Extend or add custom font families
        sans: ['Inter', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [
    
  ],
};

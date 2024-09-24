// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // other paths
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
    // other plugins
  ],
}

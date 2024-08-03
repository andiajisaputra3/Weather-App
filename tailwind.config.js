/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-1': 'linear-gradient(-60deg, #ff5858 0%, #f09819 100%);',
      },
    },
  },
  plugins: [],
}
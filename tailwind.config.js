/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#F54EA2',
          purple: '#A855F7',
          blue: '#0EA5E9',
          green: '#84CC16',
          yellow: '#FACC15',
        }
      },
      fontFamily: {
        fredoka: ['"Fredoka"', 'cursive'],
        opensans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

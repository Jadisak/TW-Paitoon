 /** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
  extend: {
    fontFamily: {
      'thai-sans': ['Noto Sans Thai', 'sans-serif'],
      'thai-serif': ['Noto Serif Thai', 'serif'],
    },
    colors: {
      'soft-green': {
          50: '#f0f9f4',
          100: '#dcf2e4',
          200: '#bce5cd',
          300: '#8dd1aa',
          400: '#5bb380',
          500: '#369960',
          600: '#277a4b',
          700: '#20613d',
          800: '#1c4e33',
          900: '#18402b',
      }
    }
  }
},
   plugins: [],
 }
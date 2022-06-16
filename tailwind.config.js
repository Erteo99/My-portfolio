/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary:   '#283618',
        secondary: '#606c38',
        white:     '#fefae0',
        shadow:    '#dda15e',
        balance:   '#bc6c25',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

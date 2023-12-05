/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      animation: {
        'blink': 'blinker 1.2s linear infinite',
      },
    },
  },
  plugins: [],
}

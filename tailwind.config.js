/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Grotesk: ['Grotesk'],
        Neue: ['Neue'],
        Chakra: ['Chakra']
      }
    },
  },
  plugins: [],
}
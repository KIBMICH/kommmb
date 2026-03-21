/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'leaf-green': '#2E7D32',
        'leaf-green-dark': '#1B5E20',
        'leaf-green-light': '#4CAF50',
        'earth-brown': '#8D6E63',
        'earth-beige': '#D7CCC8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

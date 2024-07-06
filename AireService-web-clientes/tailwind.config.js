/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#2ecc71',
        success: '#2ecc71',
        danger: '#e74c3c',
        warning: '#f1c40f',
        info: '#34495e',
        light: '#ecf0f1',
        dark: '#343a40',
        customAzul:'#8AB8FF'
      },
    },
  },
  plugins: [],
}


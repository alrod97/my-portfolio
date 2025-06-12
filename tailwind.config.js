/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            primary: '#1f2937', // gray-800
            accent: '1f2937',  // gray-600 - a more subtle accent color
            },
        height: {
          '112': '28rem',
        },
        fontFamily: {
          sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
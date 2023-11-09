/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#444CE7',
        'custom-text': '#667085',
        'custom-grey':'#D5D9EB',
        'custom-grey-text': '#344054',
        'custom-lightgrey':'#98A2B3',
        
      },
      fontFamily: {
        inter: ['Inter'],
      },
      

    },
  },
  plugins: [],
}


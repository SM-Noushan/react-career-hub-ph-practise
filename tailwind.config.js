/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-01': '#1A1919',
      'dark-02': '#474747',
      'dark-03': '#757575',
      'dark-04': '#A3A3A3',
      'grad-01': '#7E90FE',
      'grad-02': '#9873FF',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      manrope: ['Manrope', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}


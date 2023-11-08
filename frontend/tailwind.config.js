/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'hp': '300px',
        'hp-2': '420px',
        '3xl': '1500px',
      },
      colors: {
        'primary': '#f8de7e',
        'primary-50': '#fae596',
        'footer': '#475569',
        'primary-0': '#fff'
      },
      height: {
        470: '470px'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
})


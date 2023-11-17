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
        's1': '300px',
        's2': '420px',
        's3': '640px',
          // => @media (min-width: 640px) { ... }
    
        's4': '768px',
          // => @media (min-width: 768px) { ... }
    
        's5': '1024px',
          // => @media (min-width: 1024px) { ... }
    
        's6': '1280px',
          // => @media (min-width: 1280px) { ... }
    
        's7': '1536px',
          // => @media (min-width: 1536px) { ... }
      },
      colors: {
        'primary': '#f8de7e',
        'primary-50': '#fae596',
        'secondary': '#475569',
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


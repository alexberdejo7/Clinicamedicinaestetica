/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-coffee': '#efe0cc',
        'custom-beige': '#fbf1e4',
        'custom-dark-blue': '#7cbcfc',
        'custom-light-blue': '#c3f9fc',
        'custom-light-beige': '#F5F5DC',
        'custom-light-gray': '#D3D3D3',
      },
      fontFamily: {
        cursive: ['Brush Script MT', 'cursive'],
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': 'px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'hide-img': {'min': '200px', 'max': '1024px'},
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}
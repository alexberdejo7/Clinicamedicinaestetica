/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx,svg}",
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
        'custom-piel': '#CBA486',
        'custom-cafe': '#241E1A',
        'custom-gray': '#818185',
        'custom-azulpastel': '#758bfd',
        'custom-blueobscure': '#101a36',
        'custom-rosa': '#ffafad',
        'custom-background-second': '#feefe8',
        'custmom-indigo-background' : '#f4effc',
        'custmom-indigo-cards' : '#e2daeb'
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
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx,svg}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores azules
'custom-dark-blue': '#7cbcfc',
'custom-light-blue': '#c3f9fc',
'custom-azulpastel': '#758bfd',
'custom-blueobscure': '#072c4a',
'blue-light-pastel': '#AFCBFF',
'blue-sky': '#90CAF9',
'blue-dark': '#1976D2',
'blue-gray-light': '#B0C4D8',
'blue-light': '#D4E6F1',
'blue-sky': '#A9D1EB',
'blue-clinic': '#5DADE2',
'blue-dark': '#154360',
'Azul-Nuevo': '#155864',
'Azul-Variacion': '#155864',
'Azul-Aqua' : '#ddecf0',
'White-widget': '#f9fafb',
'AzulLogo' : '##427e98',
'white-secondary' : '#e4effa',
'cafe-beige': '#E9D6BD',
'color-piel' :'#dcbb95',
'color-piel-soft' : '#fbf7f1',
'Azul-soft' : '#eef9ff',
'Azul-medium' : '#00acff',
'Azul-Strong': '#006db4',


// Colores verdes
'green-primary': '#28B463',
'green-pastel': '#76D7C4',
'pastel-green-soft': '#B9D9B8',
'pastel-mint-strong': '#6AB86A',

// Colores cafés

'custom-cafe': '#241E1A',
'nude-pastel': '#E6D5C3',
'brown-medium': '#C4A484',
'brown-dark': '#8D6E63',
'brown-gray': '#A89F94',
'nude-secondary' : '#bb8f78',
'nude-primary' : '#ceaa97',
'nude-bg': '#f7f6f9',
'nude-strong' : '#bb8f78',
'nude-text' : '#33241c',
'nude-clinica' : '#A68777',
'footer-color' : '#2b231d',


// Colores grises
'custom-light-gray': '#D3D3D3',
'custom-gray': '#818185',
'gray-dark': '#34495E',
'aqua-silver-soft': '#B2BEB5',
'aqua-silver-medium': '#8B8D8F',
'aqua-silver-strong': '#6C6E6B',

// Colores rosados
'pastel-pink-soft': '#F4A6A1',
'pastel-pink-medium': '#F17E7A',
'pastel-pink-strong': '#E94A4A',

// Colores aqua/turquesa
'aqua-soft': '#E0FFFF',
'aqua-medium': '#00CED1',
'aqua-strong': '#20B2AA',

// Colores durazno (peach)
'pastel-peach-soft': '#F8D1C3',
'pastel-peach-medium': '#F4B8A1',
'pastel-peach-strong': '#F08060',

// Colores pasteles (mezclados)
'pastel-blue-soft': '#EAF3F8',
'pastel-blue-medium': '#9EB4D4',
'pastel-blue-strong': '#6D9DC5',
'pastel-soft': '#E6E6FA',
'pastel-medium': '#D5B4E8',
'pastel-strong': '#B39DDB',

// Colores adicionales (beige y otros)
'custom-light-beige': '#F5F5DC',
'custom-background-second': '#feefe8',
'custmom-indigo-background': '#f4effc',
'custmom-indigo-cards': '#e2daeb',

      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
        collection: ['Collection', 'sans-serif'],
        neoteric: ['Neoteric', 'sans-serif'],
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '760px',
        'lg': '960px',
        'xl': '1220px',
        '2xl': '1536px',
        'hide-img': {'min': '200px', 'max': '820px'},
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}
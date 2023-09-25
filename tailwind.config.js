/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Blue' : 'hsl(211,100%,40%)',
        'BlueHover' : 'hsl(211,100%,50%)',
        'Facebook': 'hsl(208,92%,53%)',
        'Instagram': 'hsl(329, 70%, 58%)',        
        'LinkedIn': 'hsl(208,99%,40%)',
        'FondoBgOscuro' : 'hsl(224,17%,1%)',
        'FondoBgClaro' : 'hsl(225,14%,2%))',
        'BackgroundCard': 'hsl(0,0%,97%)',
        'backgroundIcons': 'hsl(225,15%,40%)',
        'BackgroundHomeSolid': ' rgb(0,14,251);',
        

      },
      backgroundImage:{
          'Instagram': 'linear-gradient(to rigth, hsl(37, 97%,70%))',
          'Backgound': 'linear-gradient(0deg, #0d0d0e 6%, #1b1e26 95%)',
          'Overlay': "url('/src/assets/Images/endless-constellation.svg')",
          'OverlayTransparent' : '#0097fb3c',
          'BackgroundHome': "url('./src/assets/Images/universe-planet-background.webp')",

      },
      fontFamily:{
        'Oswald': ['Oswald', 'sans-serif'],
        'Roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
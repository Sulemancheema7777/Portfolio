

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,html,jsx}"],
  mode:'jit',
  theme: {
    extend: {
      colors:{
        blue:'#2CBCE9',
        red:'#DC4492',
        yellow:'#EFEA30',
        grey:'#181818',
        'border-custom':'#2B2B2B54',
        'deep-blue':'#010026',
        'dark-grey':'#757575',
        'opaque-black':'rgba(0,0,0,0.35)',
        'primary-color':'#556B2F'
      },
      backgroundImage:(theme)=>({
        'gradient-rainbow':'linear-gradient(81.66deg,#EFEA30 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)',
        'gradient-rainblue':'linear-gradient(90deg,#EFEA30 14.53%, #D57D8F 69.36%, #FFBD0C 117.73%)'
      }),
      fontFamily:{
        opensans:['Open Sans','sans-serif']
      },
      content:{
        brush:"url('./src/assets/brush.png')",
        person1:"url('./src/assets/person-1.png')",
        person2:"url('./src/assets/person-2.png')",
        person3:"url('./src/assets/person-3.png')"
      },
      screens:{
        xs:'480px',
        sm:'768px',
        md:'1060px',
        lg:'1217px'
      },
      textColor: (theme) => ({
      ...theme('colors'), // Include all default colors (like black, white, etc.)
      DEFAULT: '#ffffff', // Set default to white
    }),
    }
  },
  plugins: [
     
  ],
}


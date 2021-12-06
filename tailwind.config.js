module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'xs': '1.3rem'
      },
      inset: {
        '40': '40px'
      },
      padding: {
        sides: '30px',
        topbot: '10px'
      },
      spacing: {
        sm: '10px',
        xl: '50px'
      },
      height: {
        navbar: '80px',
      },
      width: {
        xl: '600px',
      },
      backgroundImage: {
        'cloud': '/images/cloud.jpg',
      },
      colors: {
        darkblue: '#8ddeff',
        lightblue: "#ccf0ff",
        primary: "#C8C8C8",
        secondary: "#E5E5E5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

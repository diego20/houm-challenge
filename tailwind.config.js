module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        "10-px": "10px"
      }
    },
    colors: {
      orange: {
        dark: "#b2301e",
        light: '#FEF1F0',
        DEFAULT: '#FF452B',
      },
      black: {
        dark: "#212121",
        DEFAULT: "#424242",
        light: "#616161"
      },
      gray: {
        dark: "#B0BEC5",
        DEFAULT: "#263238",
        light: "#ECEFF1"
      },
      white: {
        DEFAULT: "#fff"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

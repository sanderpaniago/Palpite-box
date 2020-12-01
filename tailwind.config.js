module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'navy-blue-500': '#1AC8FF',
        'navy-blue-600': '#15AFE0',
        'navy-blue-900': '#1E4A5C'
      },
      minHeight: {
        '1/2': '50vh'
      },
      backgroundImage: theme => ({
        'img-cv': 'url(/fotoCV.png)'
      }),
      height: {
        xl: '508px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

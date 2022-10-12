const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'main': '#f67b14'
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        '._active:active': {
          filter: 'brightness(90%)'
        }
      })
    })
  ],
  corePlugins: {
    preflight: false
  },
  important: true,
}

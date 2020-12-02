module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: false,
  theme: {
    extend: {
      animation: {
        'magnify': 'magnify 2.5s ease-in-out infinite',
        'dance': 'dance 1s ease infinite',
        'reserved': 'reserved 3s infinite'
      },
      keyframes: {
        'magnify': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1.5)' },
        },
        'dance': {
          '30%': {
            transform: 'scale(1.2)'
          },
          '40%, 60%': {
            transform: 'rotate(-20deg) scale(1.2)'
          },
          '50%': {
            transform: 'rotate(20deg) scale(1.2)'
          },
          '70%': {
            transform: 'rotate(0deg) scale(1.2)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
        'reserved': {
          '0%': {
            boxShadow: '0 0 0 0 rgba(255, 82, 82, 0.7)'
          },
          '70%': {
            boxShadow: '0 0 0 4px rgba(255, 82, 82, 0.3)'
          },
          '100%': {
            boxShadow: '0 0 0 0 rgba(255, 82, 82, 0)'
          }
        }
      }
    },
  },
  variants: {
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [],
};
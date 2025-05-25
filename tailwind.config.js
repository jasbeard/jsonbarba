const colors = require('./src/components/colors.json');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: colors.accent['400'],
        dark: '#2c3136',
        cgray: '#afb9c5',
        ...colors,
      },
      screens: {
        xs: { max: '639px' },
      },
      keyframes: {
        'slide-up': {
          from: {
            opacity: '0',
            transform: 'translateY(4px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          }
        },

        'slide-right' : {
          from: {
            opacity: '0',
            transform: 'translateX(-4px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          }
        },

        'slide-down': {
          from: {
            opacity: '0',
            transform: 'translateY(-4px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          }
        },

        'slide-left': {
          from: {
            opacity: '0',
            transform: 'translateX(4px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          }
        
        },
        
        'slide-up-mobile': {
          from: {
            opacity: '0',
            transform: 'translateY(100%)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          }
        },

        'slide-down-mobile': {
          from: {
            opacity: '0',
            transform: 'translateY(0)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(100%)'
          }
        }
      },

      transitionTimingFunction: {
        in: 'cubic-bezier(0, 0, 0, 1)',
        out: 'cubic-bezier(1, 0, 1, 1)',
        'in-out': 'cubic-bezier(0.8 , 0 , 0.2 , 1)',
      },

      animation: {
        'slide-up': '400ms cubic-bezier(0, 0, 0, 1) slide-up',
        'slide-down': '400ms cubic-bezier(0, 0, 0, 1) slide-down',
        'slide-up-mobile': '150ms ease-in slide-up-mobile',
        'slide-down-mobile': '50ms ease-in-out slide-down-mobile',
        // add animation name based on keyframes data as needed
      }
    }
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

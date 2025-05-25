/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'slideUpAndFade': {
          from: {
            opacity: '0',
            transform: 'translateY(2px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          }
        },

        'slideRightAndFade' : {
          from: {
            opacity: '0',
            transform: 'translateX(-2px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          }
        },

        'slideDownAndFade': {
          from: {
            opacity: '0',
            transform: 'translateY(-2px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          }
        },

        'slideLeftAndFade': {
          from: {
            opacity: '0',
            transform: 'translateX(2px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          }
        
        }
      }
    }
  },
  darkMode: 'class',
  plugins: [],
}

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
        'slide-up': {
          from: {
            opacity: '0',
            transform: 'translateY(2px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          }
        },

        'slide-right' : {
          from: {
            opacity: '0',
            transform: 'translateX(-2px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          }
        },

        'slide-down': {
          from: {
            opacity: '0',
            transform: 'translateY(-2px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          }
        },

        'slide-left': {
          from: {
            opacity: '0',
            transform: 'translateX(2px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          }
        
        }
      },

      animation: {
        'slide-up': '400ms cubic-bezier(0.16, 1, 0.3, 1) slide-up'
        // add animation name based on keyframes data as needed
      }
    }
  },
  darkMode: 'class',
  plugins: [],
}

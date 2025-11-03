const colors = require("./src/components/colors.json");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: colors.accent["400"],
        dark: "#000",
        cgray: "#afb9c5",
        "golden-amber": "#AC7914",
        gofuniro: "#f3f3f5",
        tokyo: "#a7a7a7",
        ...colors,
      },
      screens: {
        xs: { max: "639px" },
      },
      keyframes: {
        "slide-up": {
          from: {
            opacity: "0",
            transform: "translateY(4px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        "slide-right": {
          from: {
            opacity: "0",
            transform: "translateX(-4px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },

        "slide-down": {
          from: {
            opacity: "0",
            transform: "translateY(-4px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        "slide-left": {
          from: {
            opacity: "0",
            transform: "translateX(4px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },

        "slide-up-mobile": {
          from: {
            opacity: "0",
            transform: "translateY(100%)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        "slide-down-mobile": {
          from: {
            opacity: "0",
            transform: "translateY(0)",
          },
          to: {
            opacity: "1",
            transform: "translateY(100%)",
          },
        },
        "fade-in": {
          from: {
            opacity: "0",
            transform: "translateY(12px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
      },

      transitionTimingFunction: {
        in: "cubic-bezier(0, 0, 0, 1)",
        out: "cubic-bezier(1, 0, 1, 1)",
        "in-out": "cubic-bezier(0.8 , 0 , 0.2 , 1)",
      },

      animation: {
        "slide-up": "400ms cubic-bezier(0, 0, 0, 1) slide-up",
        "slide-down": "400ms cubic-bezier(0, 0, 0, 1) slide-down",
        "slide-up-mobile": "150ms ease-in slide-up-mobile",
        "slide-down-mobile": "50ms ease-in-out slide-down-mobile",
        "fade-in": "800ms cubic-bezier(0.16, 1, 0.3, 1) fade-in",
        "fade-in-slow": "1000ms cubic-bezier(0.16, 1, 0.3, 1) fade-in",
        shine: "shine 5s linear infinite",
        // add animation name based on keyframes data as needed
      },
      animationDelay: {
        0: "0ms",
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
};

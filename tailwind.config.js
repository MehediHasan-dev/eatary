/** @type {import('tailwindcss').Config} */

import scrollbar from 'tailwind-scrollbar'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      /**
       * Color
       */
      colors: {
        primary: '#E27D60',
      },
      /**
       * Font Family
       */
      fontFamily: {
        "primary": ["Playfair Display", "serif"],
        "body": ["Poppins", "serif;"]
      },

      /**
       * Container
       */
      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
          sm: '0',
          md: '0',
          lg: '0',
          xl: '0',
          '2xl': '0',
          '3xl': '0',
        },
        screens: {
          sm: '100%',
          md: '720px',
          lg: '960px',
          xl: '1140px',
          '2xl': '1320px',
          '3xl': '1440px',
        },
      },
    },
  },
  plugins: [scrollbar],
}
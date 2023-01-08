/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'tab-sm': '421px',
      // => @media (min-width: 421px) { ... }

      'tab-md': '617px',
      // => @media (min-width: 617px) { ... }

      'tab-lg': '717px',
      // => @media (min-width: 717px) { ... }

      'desktop': '947px',
      // => @media (min-width: 1280px) { ... }
    },

    extend: {
      gridTemplateColumns: {
        // Complex site-specific column configuration
        'grid-cols-container': '12fr 9fr 1fr',
      },
      gridTemplateRows: {
        // Complex site-specific column configuration
        'lg-rows': '1fr minmax(900px, 1fr) 100px',
      },
    },
  },
  plugins: [],
  daisyui: {
    themes: [],
  },
}

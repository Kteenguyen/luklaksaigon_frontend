/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C95928',           // 1. Brick (Accent/Highlight)
        'primary-dark': '#C95928',    // Map to Brick
        secondary: '#201F1E',         // 2. Black (Primary Dark Background)
        'secondary-deep': '#201F1E',  // Map to Black
        background: '#FFFFFF',         // 3. White (Primary Light Background)
        surface: '#FFFFFF',            // Map to White
        beige: '#DED3B8',             // 4. Beige (Warm Neutral)
        sandstone: '#797166',         // 5. Sandstone (Muted Mid-tone)
        'text-main': '#201F1E',       // Map to Black
        'text-muted': '#797166',       // Map to Sandstone
        cream: '#FAF7F2',
        alabaster: '#FBFAF5',
        linen: '#FAF9F6',
        charcoal: '#121110',
      },
      zIndex: {
        'base': '1',
        'overlay': '30',
        'mobile-menu': '40',
        'sticky-header': '200',
        'modal-backdrop': '300',
        'modal-content': '310',
        'loader': '999',
      },
      fontFamily: {
        serif: ['Newsreader', 'serif'],
        sans: ['"Work Sans"', 'sans-serif'],
      },
      keyframes: {
        'slow-pan': {
          '0%': { transform: 'scale(1.05) translate(0, 0)' },
          '100%': { transform: 'scale(1.05) translate(-2%, -2%)' },
        }
      },
      animation: {
        'slow-pan': 'slow-pan 20s ease-in-out infinite alternate',
      }
    },
  },
  plugins: [],
}

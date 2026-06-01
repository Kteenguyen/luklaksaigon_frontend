/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D4AF37', // Vàng hoàng gia (Classic Gold) - Sáng hơn, nổi bật trên nền tối
        'primary-dark': '#B06B3E', // Giữ lại màu cũ nếu cần dùng trên nền quá sáng
        secondary: '#1C1B19', // Deep warm charcoal (wabi-sabi dark background)
        'secondary-deep': '#121211', // Deeper black-charcoal for footer panels
        background: '#F9F8F5', // Cream off-white
        surface: '#FFFFFF',
        'text-main': '#2C2B29', // Soft readable dark grey on light background
        'text-muted': '#7E7B74', // Warm muted grey
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
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

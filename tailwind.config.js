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
        secondary: '#2D2C2A',
        background: '#F9F8F5',
        surface: '#FFFFFF',
        'text-main': '#3A3A3A',
        'text-muted': '#888888',
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

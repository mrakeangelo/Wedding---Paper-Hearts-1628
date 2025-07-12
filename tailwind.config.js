/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: '#FDF8F0',
        blush: '#F4C2C2',
        denim: '#6B9BD2',
        kraft: '#D4A574',
        lavender: '#E6E6FA',
        'paper-white': '#FEFEFE',
        'ink-dark': '#2D3748',
        'pencil-gray': '#718096'
      },
      fontFamily: {
        handwritten: ['Kalam', 'cursive'],
        serif: ['Crimson Text', 'serif'],
        sans: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'paper-texture': "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"%3E%3Cg fill-opacity=\"0.03\"%3E%3Cpolygon fill=\"%23000\" points=\"50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40\"/%3E%3C/g%3E%3C/svg%3E')",
        'notebook-lines': "repeating-linear-gradient(transparent, transparent 24px, #E2E8F0 24px, #E2E8F0 25px)"
      },
      animation: {
        'bounce-in': 'bounceIn 0.6s ease-out',
        'rotate-gentle': 'rotateGentle 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'tape-peel': 'tapePeel 0.3s ease-out',
        'polaroid-drop': 'polaroidDrop 0.8s ease-out',
        'sticker-bounce': 'stickerBounce 0.5s ease-out'
      },
      keyframes: {
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        rotateGentle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        tapePeel: {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(12deg)' }
        },
        polaroidDrop: {
          '0%': { transform: 'translateY(-100px) rotate(0deg)', opacity: '0' },
          '100%': { transform: 'translateY(0px) rotate(-2deg)', opacity: '1' }
        },
        stickerBounce: {
          '0%': { transform: 'scale(0) rotate(0deg)' },
          '50%': { transform: 'scale(1.2) rotate(180deg)' },
          '100%': { transform: 'scale(1) rotate(360deg)' }
        }
      }
    },
  },
  plugins: [],
}
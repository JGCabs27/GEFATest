/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#E8F1FA',
          100: '#D1E3F5',
          200: '#A3C7EB',
          300: '#75AAE1',
          400: '#488ED7',
          500: '#2A72BC',
          600: '#1A5B9C',
          700: '#124478',
          800: '#0D2E54',
          900: '#162A52',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
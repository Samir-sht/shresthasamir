/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#05060f',
          900: '#0a0b18',
          800: '#111327',
          700: '#1a1c35',
        },
      },
      boxShadow: {
        glow: '0 0 40px -12px rgba(99, 102, 241, 0.55)',
        card: '0 18px 50px -24px rgba(2, 6, 23, 0.9)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-26px) translateX(14px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(22px) scale(1.06)' },
        },
      },
      animation: {
        float: 'float 11s ease-in-out infinite',
        drift: 'drift 14s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

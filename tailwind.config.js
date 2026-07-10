/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          50: '#EFF4FF',
          100: '#DCE7FF',
          200: '#BCD1FF',
          300: '#8FB2FF',
          400: '#5C8AFF',
          500: '#2563EB',
          600: '#1D4FD1',
          700: '#173FAA',
          800: '#12327E',
          900: '#0F285F',
        },
        ink: {
          DEFAULT: '#0F172A',
          800: '#16213C',
          700: '#1E293B',
        },
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15,23,42,.06)',
        card: '0 8px 24px -8px rgba(15,23,42,.16)',
        lifted: '0 24px 60px -16px rgba(15,23,42,.28)',
      },
      borderRadius: {
        xl2: '18px',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-40px) scale(1.06)' },
          '66%': { transform: 'translate(-24px,26px) scale(.96)' },
        },
      },
      animation: {
        float: 'float 16s cubic-bezier(.22,1,.36,1) infinite',
      },
    },
  },
  plugins: [],
}

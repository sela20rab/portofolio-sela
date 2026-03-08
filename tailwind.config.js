/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        babyblue: '#a0e9ff',
        babypink: '#f9a8ff',
        babypurple: '#cdb4ff',
      },
    },
  },
  plugins: [],

  extend: {
  keyframes: {
    'fade-in-up': {
      '0%': { opacity: 0, transform: 'translateY(20px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
    'scale-up': {
      '0%': { transform: 'scale(0.95)' },
      '100%': { transform: 'scale(1)' },
    },
  },
  animation: {
    'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
    'scale-up': 'scale-up 0.6s ease-out forwards',
  },
}
}
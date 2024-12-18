/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.5s ease-in',
        'bounce-once': 'bounce 0.5s ease-in-out',
      },
      keyframes: {
        'neon-pulse': {
          '0%, 100%': {
            textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa',
          },
          '50%': {
            textShadow: '0 0 4px #fff, 0 0 7px #fff, 0 0 18px #fff, 0 0 38px #0fa, 0 0 73px #0fa, 0 0 80px #0fa, 0 0 94px #0fa, 0 0 140px #0fa',
          },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"],
  },
}
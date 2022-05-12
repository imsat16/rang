module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        flipdown: 'flipdown 2s linear infinite',
      },
      keyframes: {
        flipdown: {
          '0%': {
            transform: 'perspective(100px) rotate(0deg)',
          },
          '50%': {
            transform: 'perspective(100px) rotateX(180deg)',
          },
          '100%': {
            transform: 'perspective(100px) rotateZ(180deg)',
          },
        },
      },
    },
    plugins: [],
  },
};

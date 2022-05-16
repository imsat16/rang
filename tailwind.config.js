module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%'
      },
      fontFamily: {
        Poppins: ['poppins', 'sans-serif'],
        Fasthand: ['Fasthand', 'cursive'],
      },
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
    colors: {
      transparent: 'transparent',
      white: '#F9FDFF',
      dark: '#464646',
      yellow: '#FFCA00',
      blue: {
        100: '#B9EEFF ',
        200: '#9EF3FF ',
        300: '#80D8FF ',
        400: '#B9EEFF ',
        500: '#00A0F4',
        600: '#00A2E9 ',
        700: '#00A4D9 ',
        800: '#2197F7 ',
        900: '#228ED6 ',
      },
      gray: {
        300:'#d1d5db',
        400:'#9ca3af',
        500: '#6b7280',
        600: '#464646',
      },
    },
    fontSize: {
      '2xl': '50px',
      xl: '35px',
      lg: '25px',
      md: '15px',
      sm: '14px',
    },
    plugins: [],
  },
};

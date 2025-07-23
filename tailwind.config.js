/** @type {import('tailwindcss').Config} */
module.exports = {
  //...
  theme: {
    extend: {
      keyframes: {
        bubble: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '50%': { opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { transform: 'translateY(80vh)', opacity: '0' },
        },
      },
      animation: {
        bubble: 'bubble 9s linear infinite',
      },
    },
  },
  //...
};

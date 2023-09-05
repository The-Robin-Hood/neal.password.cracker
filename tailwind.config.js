/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/popup/index.html","./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kalam: ["Kalam", "cursive"],
      }
    },
  },
  plugins: [],
};


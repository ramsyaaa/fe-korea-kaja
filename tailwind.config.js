/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ohno: ["Ohno Softie", "sans-serif"],
        sans: ["Gilroy", "sans-serif"],
        gilroy: ["Gilroy", "sans-serif"],
      },
      colors: {
        kpink: {
          DEFAULT: "#F7208F",
          50: "#FDC3E1",
          100: "#FCAFD6",
          200: "#FB88C0",
          300: "#FA61AA",
          400: "#F83A94",
          500: "#F7208F",
          600: "#CC0973",
          700: "#941358",
          800: "#5D0C38",
          900: "#260518",
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
    extend: {
      backgroundColor: {
        primary: "#10141E",
        secondary: "#FC4747",
      },
      colors: {
        primary: "#FC4747",
        tag: "#101217",
      },
      ringOffsetColor: {
        primary: "#10141E",
      },
    },
  },
  plugins: [],
};

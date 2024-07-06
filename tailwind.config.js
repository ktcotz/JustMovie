/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#10141E",
        secondary: "#FC4747",
      },
      colors: {
        primary: "#FC4747",
      },
    },
  },
  plugins: [],
};

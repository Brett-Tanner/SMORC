/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        death: ["death", "sans-serif"],
        relocation: ["relocation", "sans-serif"],
      },
    },
  },
  plugins: [],
};

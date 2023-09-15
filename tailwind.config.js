/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        death: ["death", "sans-serif"],
        relocation: ["relocation", "sans-serif"],
      },
      boxShadow: {
        hero: "inset 25vw 0px 500px 7vw black, inset -10vw 0 500px 0 black",
      },
    },
  },
  plugins: [],
};

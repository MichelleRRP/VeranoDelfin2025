/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgcolor: "#F0F1D2",
        barcolor: "#FFFDEF",
        accent1: "#C3C37E",
        accent2: "#7E7EC3",
        fontlink: "#5a5acb",
        linkselect: "#3f3fe3",
        fontdef: "#413324",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"], //ahhhhsdas
      },
    },
  },
  plugins: [],
}

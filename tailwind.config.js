/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ], // add your preferred file extensions here
  theme: {
    colors: {
      orange: "#F8512F",
      black: "#000000",
      cream: "#EDFEEB",
      white: "#F8F9E9",
      blue: "#17538C",
      background:"#FFFFFF"
    },
    fontFamily: {
      Cardo: ["Cardo", "serif"],
    },
    extend: {},
  },
  plugins: [],
};

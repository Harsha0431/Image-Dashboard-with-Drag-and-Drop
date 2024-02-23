/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  media: false, // or 'purge' or 'class'
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
        oswald: ["Oswald", "sans-serif"],
        robotoslab: ["Roboto Slab", "serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        overlock: ["Overlock SC", "sans-serif"],
        croissant: ["Croissant One", "serif"],
        stylish: ["Stylish", "serif"],
        salsa: ["Salsa", "cursive"],
        alegreya: ["Alegreya", "serif"],
      },
    },
    screens: {
      xxl: "1200px",
      xl: "992px",
      lg: "840px",
      md: "768px",
      sm: "640px",
      ssm: "576px",
      vsm: "400px",
      vvsm: "330px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


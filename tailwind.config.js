/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        Dark_cyan: "hsl(185, 75%, 39%)",
        Very_dark_desaturated_blue: "hsl(229, 23%, 23%)",
        Dark_grayish_blue: "hsl(227, 10%, 46%)",
        Dark_gray: "hsl(0, 0%, 59%)"
      },
      fontFamily: {
        Kumbh_Sans: ["Kumbh Sans", "sans-serif"]
      },
      screens: {
        Large_Mobile_Design_View: { max: "426px", min: "374px" },
        Medium_Mobile_Design_View: { max: "374px", min: "321px" },
        Small_Mobile_Design_View: { max: "321px" }
      }
    },
  },
  plugins: [],
}


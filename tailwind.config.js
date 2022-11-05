/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        allura : "'Allura', cursive"
       },
          screens: {
            sm:"640px",
            sm:  "640px",
            md:  "768px",
            lg:  "1024px",
            xl:  "1280px",
            "2xl":  "1536px"
          },
          colors:{
           "Secondary": "#231917",
            "highlight":'#c42d30'
          }
    },
  },
  plugins: [],
}

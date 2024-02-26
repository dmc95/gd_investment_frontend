/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      // => @media (min-width: 320px) { ... }

      xm: "635px",
      // => @media (min-width: 635px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
     
      xlx: "1440px",
      // => @media (min-width: 1440px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      
      "3xl": "2560px",
      // => @media (min-width: 2560px) { ... }
    },
    // colors:{
    //   'customGolden':'#A8902D',
    //   'customBlue':'#6764E9',
    //   'customWhite':'#EEF0F2',
    //   'customGray':'#ABA8B2'
    // },
    extend: {
      scale: {
        '102': '1.02',
      },
      animation: {
        scroll: 'scroll 200s linear infinite', 
        scrollSpeed: 'scroll 60s linear infinite',
      },
       
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 55))' },
        },
      },
    },
  },
  plugins: [],
}

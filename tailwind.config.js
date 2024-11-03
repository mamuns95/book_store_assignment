/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    themes: ["dark"],
    extend: {
      fontFamily: {
        dela : '"Dela Gothic One", serif', 
        popppins: "'Poppins', sans-serif;",
        edu: "'Edu AU VIC WA NT Dots', cursive",
      },
    },
  },
  plugins: [require("daisyui")],
};

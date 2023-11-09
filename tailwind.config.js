/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Ebony: "#0A0B26",
        AeroBlue: "#BFFFD9",
        CaribbeanGreen: "#08CC85",
        SeaMist: "#08CC85",
        MintGreen: "#F7FFFA",
        PaleTurquoise: "#AFF7CD",
        CharcoalGrey: "#414141",
        PaleViolet: "#CFABFF",
        Chardonnay: "#FFC87F",
        SilverChalice: "#AFAFAF",
        HintOfGreen: "#E7FDF0",
        BlueChalk: "#F0E5FF",
        Ceramic: "#FFFDF9",
        Oasis: "#FFECD3",
      },
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1100px",
      xl: "1100px",
      "2xl": "1100px",
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};

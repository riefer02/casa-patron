/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        ["spin-words"]: {
          "0%, 25%": {
            transform: "translateY(0%)",
          },
          "33%, 58%": {
            transform: "translateY(-100%)",
          },
          "66%, 91%": {
            transform: "translateY(-200%)",
          },
          "100%": {
            transform: "translateY(-300%)",
          },
        },
      },
      animation: {
        ["spin-words"]: "spin-words 8s linear infinite",
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      fontSize: {
        "10xl": "clamp(3rem, 5vw, 6rem)",
        "11xl": "clamp(3.5rem, 6vw, 7rem)",
        "12xl": "clamp(4rem, 7vw, 8rem)",
        "13xl": "clamp(4.5rem, 8vw, 9rem)",
      },
      colors: {
        skyBlue: {
          300: "#63D2F8",
        },
      },
      animation: {
        "horizontal-scroll": "horizontal-scroll linear 16s infinite ",
        "horizontal-scroll-2": "horizontal-scroll-2 linear 16s infinite ",
      },
      keyframes: {
        "horizontal-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "horizontal-scroll-2": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      yellow: "#FCB72b",
      snow: "#f2f5f9",
      "dark-navy": "#495567",
      "dim-grey": "#939Caa",
      "light-grey": "#e5ecf4",
      "light-yellow": "#fff4df",
    },
    fontSize: {
      h1: ["3.5rem", { lineHeight: "3.5rem", letterSpacing: "-2.5px" }],
      h2: ["3rem", { lineHeight: "3rem", letterSpacing: "-2.14px" }],
      h3: ["2.5rem", { lineHeight: "3rem", letterSpacing: "-1.79px" }],
      h4: ["1.5rem", { lineHeight: "1.75rem", letterSpacing: "-1.07px" }],
      body: ["0.9375rem", { lineHeight: "1.5625rem", letterSpacing: "0" }],
    },
    fontFamily: {
      body: ["Lexend Deca", "sans-serif"],
      heading: ["Space Mono", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};

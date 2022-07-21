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
      yellow: "#fcb72b",
      snow: "#f2f5f9",
      "dark-navy": "#495567",
      "dim-grey": "#939Caa",
      "light-grey": "#e5ecf4",
      "light-yellow": "#fff4df",
    },
    fontSize: {
      h1: [
        "3.5rem",
        { lineHeight: "3.5rem", letterSpacing: "-2.5px", fontWeight: "bold" },
      ],
      h2: [
        "3rem",
        { lineHeight: "3rem", letterSpacing: "-2.14px", fontWeight: "bold" },
      ],
      h3: [
        "2.5rem",
        { lineHeight: "3rem", letterSpacing: "-1.79px", fontWeight: "bold" },
      ],
      h4: [
        "1.5rem",
        { lineHeight: "1.75rem", letterSpacing: "-1.07px", fontWeight: "bold" },
      ],
      "card-title": [
        "1.25rem",
        {
          lineHeight: "1.75rem",
          letterSpacing: "-0.0556rem",
          fontWeight: "bold",
        },
      ],
      "nav-list": [
        "1.125rem",
        { lineHeight: "1.5625rem", letterSpacing: "0", fontWeight: "bold" },
      ],
      button: [
        "0.9375rem",
        { lineHeight: "1.5625rem", letterSpacing: "0", fontWeight: "bold" },
      ],
      body: ["0.9375rem", { lineHeight: "1.5625rem", letterSpacing: "0" }],
    },
    fontFamily: {
      heading: ["Space Mono", "monospace"],
      body: ["Lexend Deca", "sans-serif"],
      "nav-list": ["Space Mono", "monospace"],
      button: ["Space Mono", "monospace"],
      monospace: ["Space Mono", "monospace"],
      "sans-serif": ["Lexend Deca", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "home-hero-mobile": "url(./src/assets/images/home-hero-mobile.jpg)",
        "home-hero-tablet": "url(./src/assets/images/home-hero-tablet.jpg)",
        "home-hero-desktop": "url(./src/assets/images/home-hero-desktop.jpg)",
      },
    },
  },
  plugins: [],
};

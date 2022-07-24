/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      yellow: "#fcb72b",
      snow: "#f2f5f9",
      "darker-navy": "#333A44",
      "dark-navy": "#495567",
      "dim-grey": "#939Caa",
      "light-grey": "#e5ecf4",
      "light-yellow": "#fff4df",
    },
    fontSize: {
      56: ["3.5rem", { lineHeight: "3.5rem", letterSpacing: "-2.5px" }],
      48: ["3rem", { lineHeight: "3rem", letterSpacing: "-2.14px" }],
      40: ["2.5rem", { lineHeight: "3rem", letterSpacing: "-1.79px" }],
      24: ["1.5rem", { lineHeight: "1.75rem", letterSpacing: "-1.07px" }],
      32: ["2rem", { lineHeight: "2rem", letterSpacing: "-1.43px" }],
      20: ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "-0.89px" }],
      18: ["1.125rem", { lineHeight: "1.5625rem", letterSpacing: "0rem" }],
      15: ["0.9375rem", { lineHeight: "1.5625rem", letterSpacing: "0rem" }],
    },
    fontFamily: {
      monospace: ["Space Mono", "monospace"],
      "sans-serif": ["Lexend Deca", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "home-hero-mobile": "url(/src/assets/images/home-hero-mobile.jpg)",
        "home-hero-tablet": "url(/src/assets/images/home-hero-tablet.jpg)",
        "home-hero-desktop": "url(/src/assets/images/home-hero-desktop.jpg)",
        "semi-circles": "url(src/assets/patterns/semi-circles.svg)",
        "about-hero-mobile": "url(/src/assets/images/about-hero-mobile.jpg)",
        "about-hero-tablet": "url(/src/assets/images/about-hero-tablet.jpg)",
        "about-hero-desktop": "url(/src/assets/images/about-hero-desktop.jpg)",
        "careers-location-hero-mobile":
          "url(src/assets/images/careers-locations-hero-mobile.jpg)",
        "careers-location-hero-tablet":
          "url(src/assets/images/careers-locations-hero-tablet.jpg)",
        "careers-location-hero-desktop":
          "url(src/assets/images/careers-locations-hero-desktop.jpg)",
      },
    },
  },
  plugins: [],
};

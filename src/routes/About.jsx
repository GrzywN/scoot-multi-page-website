import React from "react";
import SmallHero from "../common/components/SmallHero/SmallHero";

function About() {
  return (
    <SmallHero
      className="
      bg-about-hero-mobile
      md:bg-about-hero-tablet
      xl:bg-about-hero-desktop"
      title="About"
    />
  );
}

export default About;

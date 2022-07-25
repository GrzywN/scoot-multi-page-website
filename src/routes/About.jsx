import React from "react";
import SmallHero from "../common/components/SmallHero/SmallHero";
import AboutSections from "/src/pages/about/AboutSections";

function About() {
  return (
    <>
      <SmallHero
        className="
        bg-about-hero-mobile
        md:bg-about-hero-tablet
        xl:bg-about-hero-desktop"
        title="About"
      />
      <AboutSections />
    </>
  );
}

export default About;

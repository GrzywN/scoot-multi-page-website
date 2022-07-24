import React from "react";
import SmallHero from "../common/components/SmallHero/SmallHero";

function Careers() {
  return (
    <SmallHero
      className="
      bg-careers-location-hero-mobile
      md:bg-careers-location-hero-tablet
      xl:bg-careers-location-hero-desktop"
      title="Careers"
    />
  );
}

export default Careers;

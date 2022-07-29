import React from "react";
import { LowHero } from "../components/Heros";
import WorldMap from "../components/WorldMap";
import { CtaSection } from "../components/Sections";

function Locations() {
  return (
    <>
      <LowHero
        className="
        bg-careers-location-hero-mobile
        md:bg-careers-location-hero-tablet
        xl:bg-careers-location-hero-desktop"
        title="Locations"
      />
      <WorldMap className="mt-[4.5rem] md:mt-36 xl:mt-[7.5rem]" />
      <CtaSection
        className="
        my-[4.5rem]
        md:mt-16 md:mb-[7.5rem]
        xl:mt-[7.5rem]"
        title="Your city not listed?"
        description="If you’d like to see Scoot in your hometown, be sure to let us know. We track 
        requests and plan launches based on demand. Feel free to message us by clicking 
        the link or messaging us on social."
        to="#"
        ctaText="Message Us"
      />
    </>
  );
}

export default Locations;

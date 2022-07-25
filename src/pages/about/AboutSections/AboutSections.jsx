import React from "react";
import Section from "/src/common/components/Section";
import imageDigitalEra from "/src/assets/images/digital-era.jpg";
import imageBetterLiving from "/src/assets/images/better-living.jpg";
import {
  LeftBottomLongUpward,
  RightTopLongDownward,
} from "/src/common/containers/SectionArrows";

const LEFT = "LEFT";
const RIGHT = "RIGHT";

function AboutSections() {
  return (
    <div
      className="
      mt-[4.5rem] mb-[7.5rem] grid gap-[7.5rem] overflow-hidden
      md:mt-[9rem] md:mb-[7.5rem]
      xl:my-[7.5rem]"
    >
      <Section
        imageHref={imageDigitalEra}
        arrowTo={LEFT}
        decoration={<LeftBottomLongUpward />}
        title="Mobility for the digital era"
        description="Getting around should be simple (and even fun!) for everyone. We embrace technology to 
        provide low cost, smart access to scooters at your fingertips."
      />
      <Section
        imageHref={imageBetterLiving}
        arrowTo={RIGHT}
        decoration={<RightTopLongDownward />}
        title="Better urban living"
        description="We’re helping connect cities and bring people closer together. Our scooters are also 
        fully-electric and we offset the minimal carbon footprint for each ride."
      />
    </div>
  );
}

export default AboutSections;

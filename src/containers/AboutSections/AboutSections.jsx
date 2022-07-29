import React from "react";
import ArrowSection from "../../components/ArrowSection";
import { LeftBottomLongUpward, RightTopLongDownward } from "../SectionArrows";
import EnumerationSection from "../../components/EnumerationSection";

import imageDigitalEra from "../../assets/images/digital-era.jpg";
import imageBetterLiving from "../../assets/images/better-living.jpg";
import imageOurTech from "../../assets/images/our-tech.jpg";
import imageOurIntegrity from "../../assets/images/our-integrity.jpg";
import imageOurCommunity from "../../assets/images/our-community.jpg";

const LEFT = "LEFT";
const RIGHT = "RIGHT";

function AboutSections() {
  return (
    <div
      className="
      mt-[4.5rem] mb-[9.0625rem] grid gap-[7.5rem] overflow-hidden
      md:mt-[9rem] md:mb-[7.5rem]
      xl:my-[7.5rem]"
    >
      <ArrowSection
        imageHref={imageDigitalEra}
        arrowTo={LEFT}
        decoration={<LeftBottomLongUpward />}
        title="Mobility for the digital era"
        description="
        Getting around should be simple (and even fun!) for everyone. We embrace technology to 
        provide low cost, smart access to scooters at your fingertips."
      />
      <ArrowSection
        imageHref={imageBetterLiving}
        arrowTo={RIGHT}
        decoration={<RightTopLongDownward />}
        title="Better urban living"
        description="
        We’re helping connect cities and bring people closer together. Our scooters are also 
        fully-electric and we offset the minimal carbon footprint for each ride."
      />
      <EnumerationSection
        title="Our values"
        cardImages={[imageOurTech, imageOurIntegrity, imageOurCommunity]}
        cardTitles={["Our tech", "Our integrity", "Our community"]}
        cardDescriptions={[
          "We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
          "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.",
          "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
        ]}
      />
    </div>
  );
}

export default AboutSections;

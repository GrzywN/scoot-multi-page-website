import React from "react";
import SmallHero from "../components/SmallHero";
import Section from "../components/Section";
import EnumerationSection from "../components/EnumerationSection";
import CareersCard from "../components/CareersSection";
import { LeftBottomLongDownward } from "../containers/SectionArrows";

import imageJoinUs from "../assets/images/join-us.jpg";
import imageOurTech from "../assets/images/our-tech.jpg";
import imageOurIntegrity from "../assets/images/our-integrity.jpg";
import imageOurCommunity from "../assets/images/our-community.jpg";

const LEFT = "LEFT";

function Careers() {
  return (
    <>
      <SmallHero
        className="
        bg-careers-location-hero-mobile
        md:bg-careers-location-hero-tablet
        xl:bg-careers-location-hero-desktop"
        title="Careers"
      />
      <Section
        className="
        mt-[4.5rem]
        md:mt-36
        xl:mt-[7.5rem]"
        imageHref={imageJoinUs}
        arrowTo={LEFT}
        ctaText="Say Hello"
        ctaTo="/"
        hasLargerGap
        decoration={<LeftBottomLongDownward />}
        title="Care to join our mission?"
        description="We’re always looking for ambitious individuals to help us on our journey. If you’re 
        passionate about our mission to provide clean, accessible transport to improve urban 
        living we want to hear from you!"
      />
      <EnumerationSection
        className="
        mt-[7.5rem]"
        title="Why join us?"
        cardImages={[imageOurTech, imageOurIntegrity, imageOurCommunity]}
        cardTitles={["Our tech", "Our integrity", "Our community"]}
        cardDescriptions={[
          "We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
          "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.",
          "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
        ]}
      />
      <CareersCard
        className="
        mt-[9.0625rem] mb-[7.5rem] 
        md:mt-[7.5rem] 
        xl:mb-[10rem]"
      />
    </>
  );
}

export default Careers;

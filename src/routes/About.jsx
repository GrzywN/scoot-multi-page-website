import React from "react";
import SmallHero from "../components/Heros/LowHero";
import {
  ArrowSection,
  EnumerationSection,
  FaqsSection,
} from "../components/Sections";
import {
  LeftBottomLongUpward,
  RightTopLongDownward,
} from "../containers/SectionArrows";
import { LEFT, RIGHT } from "../utils/constants";

import imageDigitalEra from "../assets/images/digital-era.jpg";
import imageBetterLiving from "../assets/images/better-living.jpg";
import imageOurTech from "../assets/images/our-tech.jpg";
import imageOurIntegrity from "../assets/images/our-integrity.jpg";
import imageOurCommunity from "../assets/images/our-community.jpg";

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
      <FaqsSection
        className="mb-[7.5rem] xl:mb-40"
        sectionTitle="FAQs"
        contents={[
          {
            title: "How it works",
            content: [
              {
                control: "How do I download the app?",
                panel: `
                To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. 
                An even simpler way to do it would be to click the relevant link at the bottom of this 
                page and you’ll be re-directed to the correct page.`,
              },
              {
                control: "Can I find a nearby Scoots?",
                panel: `
                Definitely! Simply open up the app and allow us to find your location while using it. We'll 
                show you all of the closest Scoots and some extra useful information.`,
              },
              {
                control: "Do I need a license to ride?",
                panel: `
                Yup! We provide information inside the app regarding local laws and the license you need to be 
                able to ride our Scoots.`,
              },
            ],
          },
          {
            title: "Safe driving",
            content: [
              {
                control: "Should I wear a helmet?",
                panel: `
                Yes, please do! All cities have different laws. But we strongly strongly strongly recommend 
                always wearing a helmet regardless of the local laws. We like you and we want you to be as 
                safe as possible while Scooting.`,
              },
              {
                control: "How about the rules & regulations?",
                panel: `
                Now is not the time to be a rule breaker. Be sure you're complying with all local laws and 
                regulations. Also, just be a good human being. Be sure not to park your Scoot where it can 
                block access to buildings or get in people's way.`,
              },
              {
                control: "What if I damage my Scoot?",
                panel: `
                Be sure to read our terms and conditions carefully. Not the most fun job we know but we make 
                it as clear as possible. There's an option to add insurance for each trip, or you can sign 
                up for annual insurance if you're a regular Scooter.`,
              },
            ],
          },
        ]}
      />
    </>
  );
}

export default About;

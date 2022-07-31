import React from "react";
import { motion } from "framer-motion";
import { MainHero } from "../components/Heros";
import Stepper from "../components/Stepper";
import { ArrowSection } from "../components/Sections";
import {
  LeftBottomLongDownward,
  LeftTopShortDownward,
  RightTopShortDownward,
} from "../components/StyledSectionArrows";

import iconLocate from "../assets/icons/locate.svg";
import iconRide from "../assets/icons/ride.svg";
import iconScooter from "../assets/icons/scooter.svg";
import imageTelemetry from "../assets/images/telemetry.jpg";
import imageNearYou from "../assets/images/near-you.jpg";
import imagePayments from "../assets/images/payments.jpg";

import { LEFT, RIGHT, initial, animate } from "../utils/constants";
import { pageTransitionVariant } from "../utils/animationsVariantsFactory";

function Home() {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      variants={pageTransitionVariant}
    >
      <MainHero
        title="Scooter sharing made simple"
        description="Scoot takes the hassle out of urban mobility. Our bikes are placed
        in convenient locations in each of our cities. Use our app to locate
        the nearest bike, unlock it with a tap, and you’re away!"
        ctaText="Get Scootin"
      />
      <Stepper
        cardsIcons={[iconLocate, iconRide, iconScooter]}
        cardsTitles={["Locate with app", "Pick your scooter", "Enjoy the ride"]}
        cardsDescriptions={[
          `Use the app to find the nearest scooter to you. We are continuously
        placing scooters in the areas with most demand, so one should never be
        too far away.`,
          `We show the most important info for the scooters closest to you. So
        you know how much charge they have left and can see roughly how much
        it will cost.`,
          `Scan the QR code and the bike will unlock. Retract the cable lock, put
        on a helmet, and you’re off! Always lock bikes away from walkways and
        accessibility ramps.`,
        ]}
      />
      <div
        className="
        my-[7.5rem] grid gap-[7.5rem] overflow-hidden
        md:mt-[9.0625rem] md:mb-[6.5rem] md:gap-[7.5rem]
        xl:my-[12.5rem] xl:gap-40"
      >
        <ArrowSection
          imageHref={imageTelemetry}
          arrowTo={LEFT}
          ctaTo="/about"
          decoration={<LeftBottomLongDownward />}
          title="Easy to use riding telemetry"
          description="The Scoot app is available with riding telemetry. This means it can show you your 
          average speed, how long you've been using the scooter, your traveling distance, 
          and many more things all in an easy to use app."
        />
        <ArrowSection
          className="md:mt-2 xl:mt-0"
          imageHref={imageNearYou}
          arrowTo={RIGHT}
          ctaTo="/locations"
          decoration={<RightTopShortDownward />}
          hasLargerGap
          title="Coming to a city near you"
          description="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure 
          to let us know if you want to see us in your hometown. We’re aiming to let our 
          scooters loose on 23 cities over the coming year."
        />
        <ArrowSection
          imageHref={imagePayments}
          arrowTo={LEFT}
          ctaTo="/about"
          decoration={<LeftTopShortDownward />}
          hasLargerGap
          title="Zero hassle payments"
          description="Our payment is as easy as one two three. We accept most credit cards and debit cards. 
          You can also link your PayPal account inside the app. Need to pay later? No worries! 
          You can defer payment for up to a month."
        />
      </div>
    </motion.div>
  );
}

export default Home;

import React from "react";
import { ArrowSection } from "../../components/Sections";

import imageTelemetry from "../../assets/images/telemetry.jpg";
import imageNearYou from "../../assets/images/near-you.jpg";
import imagePayments from "../../assets/images/payments.jpg";
import {
  LeftBottomLongDownward,
  LeftTopShortDownward,
  RightTopShortDownward,
} from "../SectionArrows";

const LEFT = "LEFT";
const RIGHT = "RIGHT";

function HomeSections() {
  return (
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
  );
}

export default HomeSections;

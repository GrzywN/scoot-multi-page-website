import React from "react";
import Section from "/src/common/components/Section/";
import imageTelemetry from "/src/assets/images/telemetry.jpg";
import imageNearYou from "/src/assets/images/near-you.jpg";
import imagePayments from "/src/assets/images/payments.jpg";

import BottomLongLeftDownwardArrow from "/src/common/containers/SectionDecorations/BottomLongLeftDownwardArrow";
import TopShortRightDownwardArrow from "/src/common/containers/SectionDecorations/TopShortRightDownwardArrow";

const LEFT = "LEFT";
const RIGHT = "RIGHT";

function SectionsContainer() {
  return (
    <div
      className="
      mt-[7.5rem] grid gap-[7.5rem]
      md:mt-[9.0625rem] md:gap-[7.5rem]
      xl:mt-[12.5rem] xl:gap-40"
    >
      <Section
        imageHref={imageTelemetry}
        arrowTo={LEFT}
        hasLargerGap={false}
        title="Easy to use riding telemetry"
        description="The Scoot app is available with riding telemetry. This means it can show you your 
        average speed, how long you've been using the scooter, your traveling distance, 
        and many more things all in an easy to use app."
        decoration={<BottomLongLeftDownwardArrow />}
      />
      <Section
        className="md:mt-2 xl:mt-0"
        imageHref={imageNearYou}
        arrowTo={RIGHT}
        hasLargerGap
        title="Coming to a city near you"
        description="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure 
        to let us know if you want to see us in your hometown. We’re aiming to let our 
        scooters loose on 23 cities over the coming year."
        decoration={<TopShortRightDownwardArrow />}
      />
      <Section
        imageHref={imagePayments}
        arrowTo={LEFT}
        hasLargerGap
        title="Zero hassle payments"
        description="Our payment is as easy as one two three. We accept most credit cards and debit cards. 
        You can also link your PayPal account inside the app. Need to pay later? No worries! 
        You can defer payment for up to a month."
      />
    </div>
  );
}

export default SectionsContainer;

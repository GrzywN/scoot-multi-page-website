import React from "react";
import StepperCard from "./StepperCard";

import iconLocate from "../../assets/icons/locate.svg";
import iconRide from "../../assets/icons/ride.svg";
import iconScooter from "../../assets/icons/scooter.svg";

function Stepper() {
  return (
    <div
      className="
      grid w-full place-items-center
      md:relative"
    >
      <div
        className="
        mt-[7.5rem] grid justify-center gap-12 px-8
        md:mt-[7.625rem] md:max-w-[90rem] md:gap-10 md:px-0
        xl:relative xl:mt-40 xl:flex xl:gap-[1.875rem]"
      >
        <StepperCard
          icon={iconLocate}
          title="Locate with app"
          description="Use the app to find the nearest scooter to you. We are continuously
          placing scooters in the areas with most demand, so one should never be
          too far away."
        />
        <StepperCard
          icon={iconRide}
          title="Pick your scooter"
          description="We show the most important info for the scooters closest to you. So
          you know how much charge they have left and can see roughly how much
          it will cost."
        />
        <StepperCard
          icon={iconScooter}
          title="Enjoy the ride"
          description="Scan the QR code and the bike will unlock. Retract the cable lock, put
          on a helmet, and you’re off! Always lock bikes away from walkways and
          accessibility ramps."
        />
        <div
          className="
          absolute -z-10 hidden bg-light-grey
          md:top-0 md:block md:h-[32.0625rem] md:w-[0.9375rem] md:translate-x-[calc(3rem-50%)]
          xl:top-12 xl:left-0 xl:h-[0.9375rem] xl:w-[60.875rem] xl:-translate-y-1/2 xl:translate-x-[-10.3125rem]"
        />
        <div
          className="
          absolute top-12 -z-10 hidden bg-light-grey
          xl:left-0 xl:block xl:h-[0.9375rem] xl:w-screen xl:-translate-x-full xl:-translate-y-1/2"
        />
      </div>
    </div>
  );
}

export default Stepper;

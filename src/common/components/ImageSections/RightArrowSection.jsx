import React from "react";
import SectionCard from "./SectionCard";
import LeftDownwardArrow from "/src/common/components/Patterns/LeftDownwardArrow";
import telemetryImage from "/src/assets/images/telemetry.jpg";
import circle from "/src/assets/patterns/circle.svg";

function RightArrowSection() {
  return (
    <div
      className="
      mx-auto mt-[7.5rem] max-w-[90rem]
      md:mt-[9.0625rem]
      xl:mt-[12.5rem]"
    >
      <div
        className="
        relative px-8 
        xl:flex xl:flex-row-reverse xl:justify-between xl:gap-[13rem] xl:px-0 xl:pl-[10.3125rem]"
      >
        <img
          className="
          mx-auto mb-14 h-auto w-full max-w-[19.4375rem] rounded-full
          md:max-w-[27.8125rem] md:translate-x-[0.125rem]
          xl:mx-0 xl:mr-auto xl:translate-x-0"
          src={telemetryImage}
          alt=""
        />
        <LeftDownwardArrow
          className="
          absolute top-[10.8125rem] -translate-x-2 -translate-y-2
          md:right-0 md:top-[18.6875rem] md:translate-x-[0.375rem] md:translate-y-0
          xl:translate-x-0"
        />
        <img
          className="
          absolute left-1/2 top-0 -z-10 w-[19.4375rem] translate-x-[calc(-50%+19.4375rem+4rem)]
          md:w-[27.8125rem] md:translate-x-[calc(-50%+27.8125rem+4rem+0.125rem)]
          xl:left-3/4 xl:translate-x-[calc(50%+2.25rem)]"
          src={circle}
          alt=""
        />
        <SectionCard
          title="Easy to use riding telemetry"
          description="The Scoot app is available with riding telemetry. This means it can show
          you your average speed, how long you've been using the scooter,
          your traveling distance, and many more things all in an easy to use app."
          href="/about"
        />
      </div>
    </div>
  );
}

export default RightArrowSection;

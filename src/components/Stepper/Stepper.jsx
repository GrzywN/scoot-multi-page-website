import React from "react";
import PropTypes from "prop-types";
import StepperCard from "./StepperCard";

function Stepper({ cardsIcons, cardsTitles, cardsDescriptions }) {
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
        {cardsIcons.map((icon, index) => (
          <StepperCard
            key={icon}
            icon={icon}
            title={cardsTitles[index]}
            description={cardsDescriptions[index]}
          />
        ))}
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

Stepper.propTypes = {
  cardsIcons: PropTypes.arrayOf(PropTypes.string).isRequired,
  cardsTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  cardsDescriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Stepper;

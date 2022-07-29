import React from "react";
import PropTypes from "prop-types";
import CTA from "/src/common/components/CTA";

function CareersCard({ job, location, ctaTo }) {
  return (
    <div
      className="
      w-full bg-snow px-8 pb-8 pt-9 md:flex
      md:h-32 md:items-center md:justify-between md:p-0 md:px-12 xl:mx-auto
      xl:max-w-[69.375rem] xl:pl-10 xl:pr-16"
    >
      <div
        className="
        mb-4 grid gap-1 text-center text-dark-navy
        md:mb-0 md:gap-2 md:text-start
        xl:mb-2"
      >
        <h3
          className="
          font-monospace text-18 font-bold tracking-tighter
          md:text-24"
        >
          {job}
        </h3>
        <p className="font-sans-serif text-15 font-normal">{location}</p>
      </div>
      <CTA
        className="
        mx-auto max-w-[19.4375rem]
        md:mx-0"
        to={ctaTo}
        text="Apply"
      />
    </div>
  );
}

CareersCard.propTypes = {
  job: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  ctaTo: PropTypes.string.isRequired,
};

export default CareersCard;

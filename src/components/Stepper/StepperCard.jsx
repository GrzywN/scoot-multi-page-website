import React from "react";
import PropTypes from "prop-types";

function StepperCard({ icon, title, description }) {
  return (
    <div
      className="
      relative grid place-items-center gap-6
      md:max-w-[35.8125rem] md:place-items-start md:gap-0 md:pl-[10.9375rem]
      xl:max-w-[21.875rem] xl:pl-0"
    >
      <img
        className="
        h-14 w-14
        md:absolute md:h-24 md:w-24
        xl:static xl:mb-10"
        src={icon}
        alt=""
      />
      <h2
        className="
        font-monospace text-20 font-bold text-dark-navy
        md:mb-[1.6875rem] md:text-24
        xl:mb-[1.6875rem]"
      >
        {title}
      </h2>
      <p
        className="
        text-center font-sans-serif text-15 text-dim-grey
        md:text-left"
      >
        {description}
      </p>
    </div>
  );
}

StepperCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default StepperCard;

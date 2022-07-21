import React from "react";
import PropTypes from "prop-types";

function Card({ icon, title, description }) {
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
      <h3
        className="
        font-monospace text-card-title text-dark-navy
        md:mb-[1.6875rem]
        xl:mb-[1.6875rem]"
      >
        {title}
      </h3>
      <p
        className="
        text-center font-sans-serif text-body text-dim-grey
        md:text-left"
      >
        {description}
      </p>
    </div>
  );
}

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;

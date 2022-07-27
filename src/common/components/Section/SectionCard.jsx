import React from "react";
import PropTypes from "prop-types";
import CTA from "/src/common/components/CTA";

function SectionCard(props) {
  const { className, title, description, to } = props;

  return (
    <div
      className={`${className}
      flex flex-col items-center gap-8
      md:gap-10
      xl:items-start xl:gap-0`}
    >
      <h3
        className="
        text-center font-monospace text-32 font-bold text-dark-navy
        md:max-w-[28.5625rem] md:text-48
        xl:mb-6 xl:max-w-[27.8125rem] xl:text-left"
      >
        {title}
      </h3>
      <p
        className="
        text-center font-sans-serif text-15 text-dim-grey
        md:w-[35.8125rem]
        xl:mb-10 xl:w-[27.8125rem] xl:max-w-[27.8125rem] xl:text-left"
      >
        {description}
      </p>
      {to && (
        <CTA
          className="
          max-w-[11.25rem]"
          to={to}
          text="Learn More"
        />
      )}
    </div>
  );
}

SectionCard.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

SectionCard.defaultProps = {
  className: "",
  to: null,
};

export default SectionCard;

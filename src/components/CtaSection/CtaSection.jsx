import React from "react";
import PropTypes from "prop-types";
import CTA from "../CTA";

function CtaSection(props) {
  const { className, title, description, to, ctaText } = props;

  return (
    <div
      className={`${className}
      flex flex-col items-center gap-8 px-8
      md:gap-10 md:px-0
      xl:mx-auto xl:max-w-[69.375rem] xl:flex-row xl:gap-0`}
    >
      <h3
        className="
        text-center font-monospace text-32 font-bold capitalize text-dark-navy
        md:max-w-[28.5625rem] md:text-48
        xl:max-w-[21.9375rem] xl:text-left xl:normal-case"
      >
        {title}
      </h3>
      <p
        className="
        text-center font-sans-serif text-15 text-dim-grey
        md:w-[35.8125rem]
        xl:ml-[1.875rem] xl:w-[27.8125rem] xl:max-w-[27.8125rem] xl:text-left"
      >
        {description}
      </p>
      {to && (
        <CTA
          className="
          max-w-[11.25rem]
          xl:ml-auto"
          to={to}
          text={ctaText}
        />
      )}
    </div>
  );
}

CtaSection.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  to: PropTypes.string,
  ctaText: PropTypes.string.isRequired,
};

CtaSection.defaultProps = {
  className: "",
  to: null,
};

export default CtaSection;

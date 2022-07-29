import React from "react";
import PropTypes from "prop-types";
import SectionCard from "./ArrowSectionCard";
import { LEFT, RIGHT } from "../../../utils/constants";

import { Circle } from "../../Patterns";

function ArrowSection(props) {
  const {
    imageHref,
    arrowTo,
    title,
    description,
    hasLargerGap = false,
    className = "",
    decoration,
    ctaText = "Learn More",
    ctaTo = "",
  } = props;

  return (
    <section className={`${className} w-full`}>
      <div
        className={`
        ${arrowTo === RIGHT ? "xl:flex-row" : "xl:flex-row-reverse"}
        relative mx-auto flex flex-col px-8
        md:max-w-[27.8125rem] md:px-0
        xl:max-w-[69.375rem] xl:items-center xl:justify-between`}
      >
        <img
          className={`
          mx-auto mb-14 h-auto w-full max-w-[19.4375rem] rounded-full
          ${hasLargerGap && "md:mb-16"}
          md:max-w-[27.8125rem]
          xl:m-0`}
          src={imageHref}
          alt=""
        />
        <SectionCard
          className={!ctaTo ? "xl:mt-[2.5rem]" : ""}
          title={title}
          description={description}
          ctaText={ctaText}
          to={ctaTo}
        />
        <Circle
          className={`${
            arrowTo === RIGHT
              ? "left-0 translate-x-[calc(-100%-4rem)]"
              : "right-0 translate-x-[calc(100%+4rem)]"
          } absolute`}
        />
        {decoration}
      </div>
    </section>
  );
}

ArrowSection.propTypes = {
  className: PropTypes.string,
  imageHref: PropTypes.string.isRequired,
  arrowTo: PropTypes.oneOf([LEFT, RIGHT]).isRequired,
  ctaText: PropTypes.string,
  ctaTo: PropTypes.string,
  decoration: PropTypes.element,
  hasLargerGap: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

ArrowSection.defaultProps = {
  className: "",
  ctaText: "Learn More",
  ctaTo: "",
  decoration: null,
  hasLargerGap: false,
};

export default ArrowSection;

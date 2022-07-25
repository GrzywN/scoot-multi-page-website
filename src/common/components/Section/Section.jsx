import React from "react";
import PropTypes from "prop-types";
import circle from "/src/assets/patterns/circle.svg";
import SectionCard from "/src/common/components/Section/SectionCard.jsx";

const LEFT = "LEFT";
const RIGHT = "RIGHT";
let arrowToRight;

function Section(props) {
  const {
    imageHref,
    arrowTo,
    title,
    description,
    hasLargerGap = false,
    className = "",
    decoration,
    ctaTo = "",
  } = props;

  if (arrowTo === LEFT) {
    arrowToRight = false;
  } else if (arrowTo === RIGHT) {
    arrowToRight = true;
  }

  if (arrowTo === LEFT) {
    arrowToRight = false;
  } else if (arrowTo === RIGHT) {
    arrowToRight = true;
  }

  return (
    <section className={`${className} w-full`}>
      <div
        className={`
        ${arrowToRight ? "xl:flex-row" : "xl:flex-row-reverse"}
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
          className={!ctaTo && "xl:mt-[2.5rem]"}
          title={title}
          description={description}
          to={ctaTo}
        />
        <img
          className={`${
            arrowToRight
              ? "left-0 translate-x-[calc(-100%-4rem)]"
              : "right-0 translate-x-[calc(100%+4rem)]"
          } absolute`}
          src={circle}
          alt=""
        />
        {decoration}
      </div>
    </section>
  );
}

Section.propTypes = {
  className: PropTypes.string,
  imageHref: PropTypes.string.isRequired,
  arrowTo: PropTypes.string.isRequired,
  ctaTo: PropTypes.string,
  decoration: PropTypes.element,
  hasLargerGap: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

Section.defaultProps = {
  className: "",
  ctaTo: "",
  decoration: null,
  hasLargerGap: false,
};

export default Section;

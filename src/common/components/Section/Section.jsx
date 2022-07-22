import React from "react";
import PropTypes from "prop-types";
import circle from "/src/assets/patterns/circle.svg";
import SectionCard from "/src/common/components/Section/SectionCard.jsx";

const LEFT = "LEFT";
const RIGHT = "RIGHT";
let arrowToRight;

function Section({
  imageHref,
  arrowTo,
  title,
  description,
  hasLargerGap,
  className = "",
}) {
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
      <figure
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
        <SectionCard title={title} description={description} href="/about" />
        <img
          className={`${
            arrowToRight
              ? "left-0 translate-x-[calc(-100%-4rem)]"
              : "right-0 translate-x-[calc(100%+4rem)]"
          } absolute`}
          src={circle}
          alt=""
        />
      </figure>
    </section>
  );
}

Section.propTypes = {
  imageHref: PropTypes.string.isRequired,
  arrowTo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hasLargerGap: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

Section.defaultProps = {
  className: "",
};

export default Section;
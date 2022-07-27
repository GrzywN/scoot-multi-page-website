import React, { useState } from "react";
import PropTypes from "prop-types";

import iconChevron from "/src/assets/icons/chevron.svg";

function Accordion({ className, contentsData }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => {
      if (prevIndex === index) {
        return null;
      }
      return index;
    });
  };

  return (
    <div
      className={`${className}
      grid gap-4
      md:gap-6
      xl:gap-4`}
    >
      {contentsData.map((item, index) => {
        const isItemActive = activeIndex === index;
        const { control, panel } = item;

        return (
          <div
            className="
            relative overflow-hidden bg-snow p-8
            md:pl-10"
            key={control}
          >
            <h4
              className="
              font-monospace text-18 font-bold leading-6 text-dark-navy
              md:text-24"
            >
              <button
                className="
                flex w-full items-center justify-between gap-4 text-left"
                type="button"
                aria-expanded={isItemActive}
                aria-controls={`panel-${index}`}
                id={`control-${index}`}
                onClick={() => handleClick(index)}
              >
                <span className="tracking-tighter">{control}</span>
                <img
                  className={`${isItemActive ? "rotate-180" : ""}
                  transition-transform duration-500 ease-in-out`}
                  src={iconChevron}
                  alt=""
                />
              </button>
            </h4>
            <div
              className={`
              ${isItemActive ? "pt-6 opacity-100" : "h-0 opacity-0 "}
              w-full transition-[opacity_height] duration-500`}
              id={`panel-${index}`}
              role="region"
              aria-labelledby={`control-${index}`}
            >
              <p
                className={`
                font-sans-serif text-15 text-dark-navy
                xl:max-w-[98%]`}
              >
                {panel}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Accordion.propTypes = {
  className: PropTypes.string,
  contentsData: PropTypes.arrayOf(
    PropTypes.shape({
      control: PropTypes.string.isRequired,
      panel: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Accordion.defaultProps = {
  className: "",
};

export default Accordion;

import React from "react";
import PropTypes from "prop-types";
import { WhiteCircles } from "../../Patterns";

function LowHero({ className, title }) {
  return (
    <div className={`${className} w-full bg-cover bg-center`}>
      <div
        className={` 
        relative mx-auto flex h-40 w-full max-w-[90rem] items-center justify-center
        md:h-[12.5rem] md:justify-start md:pl-[6.0625rem]
        xl:pl-[10.3125rem]
      `}
      >
        <h1
          className="
          font-monospace text-40 font-bold capitalize text-white
          md:text-56"
        >
          {title}
        </h1>
        <WhiteCircles className="absolute right-0 hidden md:block md:translate-x-[1.9375rem]" />
      </div>
    </div>
  );
}

LowHero.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default LowHero;

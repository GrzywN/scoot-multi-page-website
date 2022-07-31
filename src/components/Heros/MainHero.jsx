import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import CTA from "../CTA";
import { Line, WhiteCircles, RightDownwardArrow } from "../Patterns";
import {
  createPathVariants,
  createOpacityVariants,
} from "../../utils/animationsVariantsFactory";

const extraLinePathVariants = createPathVariants({ rotate180: false });
const linePathVariants = createPathVariants({ rotate180: true });
const sectionOpacityVariants = createOpacityVariants({ order: 1 });
const rightArrowPathVariants = createPathVariants({ order: 2 });
const whiteCirclesPathVariants = createPathVariants({ order: 3 });

function MainHero({ title, description, ctaText }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="
      grid place-items-center overflow-hidden bg-home-hero-mobile bg-cover bg-center
      md:bg-home-hero-tablet 
      xl:bg-home-hero-desktop"
    >
      <div
        className="
        relative h-[40.625rem] w-full max-w-[90rem] px-8 pt-[7.1875rem] 
        md:pt-[8.5625rem]
        xl:pt-[9.5625rem] xl:pl-[10.3125rem]"
      >
        <motion.div
          variants={sectionOpacityVariants}
          className="
          flex flex-col items-center
          xl:items-start"
        >
          <h1
            className="
            mb-6 max-w-[23.4375rem] text-center font-monospace text-40 font-bold leading-none text-white
            md:max-w-[35.8125rem] md:text-56
            xl:mb-10 xl:text-left"
          >
            {title}
          </h1>
          <p
            className="
            mb-[2.125rem] text-center font-sans-serif text-15 text-white
            md:mb-8 md:max-w-[35.8125rem]
            xl:mb-10 xl:max-w-[25.3125rem] xl:translate-x-[5.9375rem] xl:text-left 2xl:translate-x-0"
          >
            {description}
          </p>
          <CTA
            className="
            max-w-[11.25rem] xl:translate-x-[5.9375rem] 2xl:translate-x-0"
            to="#download"
            text={ctaText}
          />
        </motion.div>
        <RightDownwardArrow
          className="
          absolute bottom-[1.75rem] left-[-19.5rem]
          md:left-[-7.9375rem] md:bottom-[2.1563rem]
          xl:left-[44.0625rem] xl:bottom-[9.5rem]"
          pathVariants={rightArrowPathVariants}
        />
        <WhiteCircles
          className="
          hidden
          md:absolute md:right-[-1.9375rem] md:bottom-[2.8125rem] md:block md:h-[3.9375rem] md:w-[14.625rem]
          xl:bottom-[10.3125rem] xl:left-[78.375rem]"
          pathVariants={whiteCirclesPathVariants}
        />
        <Line
          className="
          hidden
          xl:absolute xl:bottom-[18rem] xl:left-0 xl:block
          2xl:hidden"
          pathVariants={linePathVariants}
        />
        <Line
          className="
          hidden
          xl:absolute xl:bottom-[18rem] xl:left-0 xl:block xl:-translate-x-full
          2xl:hidden"
          pathVariants={extraLinePathVariants}
        />
      </div>
    </motion.div>
  );
}

MainHero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ctaText: PropTypes.string.isRequired,
};

export default MainHero;

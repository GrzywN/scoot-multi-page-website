import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  opacityVariantsShape,
  pathVariantsShape,
} from "/src/common/utils/animations";

function LeftUpwardArrow(props) {
  const { className, svgVariants, pathVariants } = props;

  return (
    <motion.svg
      initial="initial"
      animate="animate"
      variants={svgVariants}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="741"
      height="151"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#FCB72B"
        strokeLinejoin="bevel"
        strokeWidth="15"
      >
        <motion.path
          variants={pathVariants}
          d="M740.969 143.368H182.854V43.999H6.591"
        />
        <motion.path
          variants={pathVariants}
          d="M44.64 82.64L6.214 44.214 44.64 5.787"
        />
      </g>
    </motion.svg>
  );
}

LeftUpwardArrow.propTypes = {
  className: PropTypes.string,
  svgVariants: opacityVariantsShape,
  pathVariants: pathVariantsShape,
};

LeftUpwardArrow.defaultProps = {
  className: "",
  svgVariants: {},
  pathVariants: {},
};

export default LeftUpwardArrow;

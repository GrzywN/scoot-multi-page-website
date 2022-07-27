import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  opacityVariantsShape,
  pathVariantsShape,
} from "/src/common/utils/animationsPropTypes";

function LeftDownwardArrow({ className, svgVariants, pathVariants }) {
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
          d="M740.969 8H182.854v99.369H6.591"
        />
        <motion.path
          variants={pathVariants}
          d="M44.64 145.64L6.214 107.214 44.64 68.787"
        />
      </g>
    </motion.svg>
  );
}

LeftDownwardArrow.propTypes = {
  className: PropTypes.string,
  svgVariants: opacityVariantsShape,
  pathVariants: pathVariantsShape,
};

LeftDownwardArrow.defaultProps = {
  className: "",
  svgVariants: {},
  pathVariants: {},
};

export default LeftDownwardArrow;

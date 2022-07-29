import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  opacityVariantsShape,
  pathVariantsShape,
} from "../../utils/animationsPropTypes";

function SemiCircles({ className, svgVariants, pathVariants }) {
  return (
    <motion.svg
      initial="initial"
      animate="animate"
      variants={svgVariants}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="1158"
      height="158"
    >
      <g
        fill="none"
        fillRule="evenodd"
        opacity=".1"
        transform="matrix(-1 0 0 1 1159 8)"
      >
        <motion.circle
          variants={pathVariants}
          cx="173.5"
          cy="173.5"
          r="173.5"
          fill="#E5ECF4"
        />
        <motion.circle
          variants={pathVariants}
          cx="576.5"
          cy="173.5"
          r="173.5"
          stroke="#E5ECF4"
          strokeWidth="15"
        />
        <motion.circle
          variants={pathVariants}
          cx="979.5"
          cy="173.5"
          r="173.5"
          stroke="#E5ECF4"
          strokeWidth="15"
        />
      </g>
    </motion.svg>
  );
}

SemiCircles.propTypes = {
  className: PropTypes.string,
  svgVariants: opacityVariantsShape,
  pathVariants: pathVariantsShape,
};

SemiCircles.defaultProps = {
  className: "",
  svgVariants: {},
  pathVariants: {},
};

export default SemiCircles;

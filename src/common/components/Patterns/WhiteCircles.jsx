import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  opacityVariantsShape,
  pathVariantsShape,
} from "/src/common/utils/animations";

function WhiteCircles({ className = "", svgVariants, pathVariants }) {
  return (
    <motion.svg
      initial="initial"
      animate="animate"
      variants={svgVariants}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="234"
      height="63"
    >
      <g fill="none" fillRule="evenodd">
        <motion.circle
          variants={pathVariants}
          cx="31"
          cy="31.5"
          r="29.5"
          stroke="#FFF"
          strokeWidth="3"
        />
        <motion.circle
          variants={pathVariants}
          cx="117"
          cy="31.5"
          r="29.5"
          stroke="#FFF"
          strokeWidth="3"
        />
        <motion.circle
          variants={pathVariants}
          cx="203"
          cy="31.5"
          r="31"
          fill="#FFF"
        />
      </g>
    </motion.svg>
  );
}

WhiteCircles.propTypes = {
  className: PropTypes.string,
  svgVariants: opacityVariantsShape,
  pathVariants: pathVariantsShape,
};

WhiteCircles.defaultProps = {
  className: "",
  svgVariants: {},
  pathVariants: {},
};

export default WhiteCircles;

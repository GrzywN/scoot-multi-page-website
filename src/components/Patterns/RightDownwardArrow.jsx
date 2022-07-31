import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  opacityVariantsShape,
  pathVariantsShape,
} from "../../utils/animationsPropTypes";

function RightDownwardArrow({ className, svgVariants, pathVariants }) {
  return (
    <motion.svg
      initial="initial"
      animate="animate"
      variants={svgVariants}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="452"
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
          d="M407.952 145.444l38.426-38.426-38.426-38.426"
        />
        <motion.path variants={pathVariants} d="M0 8h270.115v99.369h176.263" />
      </g>
    </motion.svg>
  );
}

RightDownwardArrow.propTypes = {
  className: PropTypes.string,
  svgVariants: opacityVariantsShape,
  pathVariants: pathVariantsShape,
};

RightDownwardArrow.defaultProps = {
  className: "",
  svgVariants: {},
  pathVariants: {},
};

export default RightDownwardArrow;

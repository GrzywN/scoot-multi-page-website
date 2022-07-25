import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  opacityVariantsShape,
  pathVariantsShape,
} from "/src/common/utils/animationsPropTypes";

function Line({ className, svgVariants, pathVariants }) {
  return (
    <motion.svg
      initial="initial"
      animate="animate"
      variants={svgVariants}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="203"
      height="15"
    >
      <motion.path
        variants={pathVariants}
        fill="none"
        stroke="#FCB72B"
        strokeWidth="15"
        d="M203 7.5H.5"
      />
    </motion.svg>
  );
}

Line.propTypes = {
  className: PropTypes.string,
  svgVariants: opacityVariantsShape,
  pathVariants: pathVariantsShape,
};

Line.defaultProps = {
  className: "",
  svgVariants: {},
  pathVariants: {},
};

export default Line;

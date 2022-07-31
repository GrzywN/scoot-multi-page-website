import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  opacityVariantsShape,
  pathVariantsShape,
} from "../../utils/animationsPropTypes";

function Circle({ className, svgVariants, pathVariants }) {
  return (
    <motion.svg
      initial="initial"
      animate="animate"
      variants={svgVariants}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="445"
      height="445"
    >
      <motion.circle
        variants={pathVariants}
        cx="302.5"
        cy="222.5"
        r="222.5"
        fill="#E5ECF4"
        fillRule="evenodd"
        transform="translate(-80)"
      />
    </motion.svg>
  );
}

Circle.propTypes = {
  className: PropTypes.string,
  svgVariants: opacityVariantsShape,
  pathVariants: pathVariantsShape,
};

Circle.defaultProps = {
  className: "",
  svgVariants: {},
  pathVariants: {},
};

export default Circle;

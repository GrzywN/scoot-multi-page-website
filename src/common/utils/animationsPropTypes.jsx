import PropTypes from "prop-types";

const opacityVariantsShape = PropTypes.shape({
  initial: PropTypes.shape({
    opacity: PropTypes.number,
  }),
  animate: PropTypes.PropTypes.shape({
    opacity: PropTypes.number,
    transition: PropTypes.shape({ duration: PropTypes.number }),
  }),
});

const pathVariantsShape = PropTypes.shape({
  initial: PropTypes.shape({
    opacity: PropTypes.number,
    pathLength: PropTypes.number,
    rotate: PropTypes.number,
  }),
  animate: PropTypes.shape({
    opacity: PropTypes.number,
    pathLength: PropTypes.number,
    transition: PropTypes.shape({
      duration: PropTypes.number,
      ease: PropTypes.string,
      delay: PropTypes.number,
    }),
  }),
});

export { opacityVariantsShape, pathVariantsShape };

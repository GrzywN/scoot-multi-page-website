const DEFAULT_DURATION = 0.8;
const DEFAULT_EASE = "easeInOut";

const pageTransitionVariant = {
  initial: { y: 10, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8 } },
};

const createOpacityVariants = ({ order = 0 }) => {
  const calulatedDelay = order * DEFAULT_DURATION;
  return {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: DEFAULT_DURATION,
        ease: DEFAULT_EASE,
        delay: calulatedDelay,
      },
    },
  };
};

const createPathVariants = ({ order = 0, rotate180 = false }) => {
  const calulatedDelay = order * DEFAULT_DURATION;
  return {
    initial: {
      opacity: 0,
      pathLength: 0,
      rotate: rotate180 ? -180 : 0,
    },
    animate: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: DEFAULT_DURATION,
        ease: DEFAULT_EASE,
        delay: calulatedDelay,
      },
    },
  };
};

export { pageTransitionVariant, createOpacityVariants, createPathVariants };

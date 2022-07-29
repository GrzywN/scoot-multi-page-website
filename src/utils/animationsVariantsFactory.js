const DEFAULT_DURATION = 1;
const DEFAULT_EASE = "easeInOut";

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

export { createOpacityVariants, createPathVariants };

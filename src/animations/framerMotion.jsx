/**
 * Production-Level Framer Motion Animations
 * Inspired by motion.dev examples
 * https://motion.dev/examples
 */

// ============================================
// SPRING CONFIGURATIONS
// ============================================
export const springConfig = {
  gentle: { type: "spring", stiffness: 100, damping: 15 },
  wobbly: { type: "spring", stiffness: 180, damping: 12 },
  stiff: { type: "spring", stiffness: 260, damping: 20 },
  slow: { type: "spring", stiffness: 80, damping: 20 },
  molasses: { type: "spring", stiffness: 40, damping: 20 },
  snappy: { type: "spring", stiffness: 400, damping: 25 },
  bouncy: { type: "spring", stiffness: 300, damping: 10, mass: 0.8 },
};

// ============================================
// EASING FUNCTIONS
// ============================================
export const easing = {
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.55, 0.265, 1.55],
};

// ============================================
// CONTAINER VARIANTS (with stagger)
// ============================================
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const containerVariantsFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

export const containerVariantsSlow = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// ============================================
// ITEM VARIANTS
// ============================================
export const fadeIn = {
  hidden: { 
    opacity: 0,
  },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 40,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
};

export const fadeInDown = {
  hidden: { 
    opacity: 0, 
    y: -40,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: springConfig.gentle,
  },
};

export const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -60,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: springConfig.gentle,
  },
};

export const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 60,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: springConfig.gentle,
  },
};

export const fadeInScale = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: springConfig.wobbly,
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.15 },
  },
};

export const scaleIn = {
  hidden: { 
    scale: 0,
    opacity: 0,
  },
  visible: { 
    scale: 1,
    opacity: 1,
    transition: springConfig.bouncy,
  },
};

export const slideInFromBottom = {
  hidden: { 
    y: "100%",
    opacity: 0,
  },
  visible: { 
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
  exit: {
    y: "100%",
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

// ============================================
// CARD VARIANTS
// ============================================
export const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: springConfig.gentle,
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: springConfig.snappy,
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

export const cardVariantsStagger = {
  hidden: { 
    opacity: 0, 
    y: 40,
  },
  visible: (i) => ({ 
    opacity: 1, 
    y: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  }),
};

// ============================================
// BUTTON VARIANTS
// ============================================
export const buttonVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: springConfig.snappy,
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 },
  },
};

export const buttonWithGlow = {
  initial: { 
    scale: 1,
    boxShadow: "0 0 0 rgba(139, 92, 246, 0)",
  },
  hover: { 
    scale: 1.02,
    boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)",
    transition: springConfig.snappy,
  },
  tap: { 
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

// ============================================
// HERO SECTION VARIANTS
// ============================================
export const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

export const heroTextVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    filter: "blur(10px)",
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 12,
    },
  },
};

export const heroImageVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotate: -5,
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
      delay: 0.4,
    },
  },
};

// ============================================
// FLOATING ANIMATION VARIANTS
// ============================================
export const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const floatingWithRotate = {
  animate: {
    y: [-8, 8, -8],
    rotate: [-2, 2, -2],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// ============================================
// SCROLL-TRIGGERED VARIANTS
// ============================================
export const scrollReveal = {
  hidden: { 
    opacity: 0, 
    y: 75,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing.easeOutExpo,
    },
  },
};

export const scrollRevealScale = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easing.easeOutExpo,
    },
  },
};

export const scrollRevealLeft = {
  hidden: { 
    opacity: 0, 
    x: -100,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: easing.easeOutExpo,
    },
  },
};

export const scrollRevealRight = {
  hidden: { 
    opacity: 0, 
    x: 100,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: easing.easeOutExpo,
    },
  },
};

// ============================================
// MODAL / OVERLAY VARIANTS
// ============================================
export const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const modalVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: springConfig.snappy,
  },
  exit: { 
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.2 },
  },
};

// ============================================
// MENU / DROPDOWN VARIANTS
// ============================================
export const menuVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.95,
    y: -10,
  },
  visible: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: springConfig.snappy,
  },
  exit: { 
    opacity: 0,
    scale: 0.95,
    y: -10,
    transition: { duration: 0.15 },
  },
};

export const menuItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: springConfig.gentle,
  },
};

// ============================================
// PATH DRAWING VARIANTS (for SVGs)
// ============================================
export const pathDraw = {
  hidden: { 
    pathLength: 0,
    opacity: 0,
  },
  visible: { 
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.5, ease: "easeInOut" },
      opacity: { duration: 0.2 },
    },
  },
};

export const pathDrawFast = {
  hidden: { pathLength: 0 },
  visible: { 
    pathLength: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// ============================================
// RIPPLE EFFECT (Material Design inspired)
// ============================================
export const rippleVariants = {
  initial: { 
    scale: 0,
    opacity: 0.5,
  },
  animate: { 
    scale: 4,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// ============================================
// LIST ANIMATION VARIANTS
// ============================================
export const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

export const listItemVariants = {
  hidden: { 
    opacity: 0, 
    x: -20,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: springConfig.gentle,
  },
};

// ============================================
// NOTIFICATION / TOAST VARIANTS
// ============================================
export const toastVariants = {
  hidden: { 
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springConfig.bouncy,
  },
  exit: { 
    opacity: 0,
    y: 20,
    scale: 0.9,
    transition: { duration: 0.2 },
  },
};

// ============================================
// PARALLAX HELPERS
// ============================================
export const createParallaxVariants = (yOffset = 50) => ({
  hidden: { y: yOffset },
  visible: { 
    y: 0,
    transition: {
      duration: 0.8,
      ease: easing.easeOutQuart,
    },
  },
});

// ============================================
// VIEWPORT OPTIONS
// ============================================
export const viewportOnce = { once: true, margin: "-100px" };
export const viewportAlways = { once: false, margin: "-50px" };
export const viewportHalf = { once: true, amount: 0.5 };

// ============================================
// GESTURE HANDLERS
// ============================================
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: springConfig.snappy,
};

export const hoverLift = {
  whileHover: { y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" },
  transition: springConfig.gentle,
};

export const hoverGlow = {
  whileHover: { boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)" },
  transition: { duration: 0.3 },
};

// ============================================
// UTILITY FUNCTIONS
// ============================================
export const getStaggerDelay = (index, baseDelay = 0.1) => index * baseDelay;

export const createStaggerVariants = (delay = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: delay,
    },
  },
});

// Animate Number utility config
export const numberSpring = {
  type: "spring",
  stiffness: 100,
  damping: 30,
};

export default {
  springConfig,
  easing,
  containerVariants,
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  fadeInScale,
  cardVariants,
  buttonVariants,
  heroContainerVariants,
  heroTextVariants,
  heroImageVariants,
  floatingVariants,
  scrollReveal,
  modalVariants,
  menuVariants,
  pathDraw,
  viewportOnce,
  hoverScale,
  hoverLift,
};

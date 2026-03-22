import { motion } from "framer-motion";

// Stagger container for lists and grids
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  }),
  exit: { opacity: 0 },
};

// Fade in from bottom
export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 12, stiffness: 100 },
  },
  exit: { opacity: 0, y: 20 },
};

// Fade in from left
export const fadeInLeftVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", damping: 12, stiffness: 100 },
  },
  exit: { opacity: 0, x: -20 },
};

// Fade in from right
export const fadeInRightVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", damping: 12, stiffness: 100 },
  },
  exit: { opacity: 0, x: 20 },
};

// Scale in
export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", damping: 12, stiffness: 100 },
  },
  exit: { opacity: 0, scale: 0.8 },
};

// Float animation
export const floatVariants = {
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Rotate slowly
export const rotateVariants = {
  rotate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Hover scale effect
export const hoverVariants = {
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

// Click scale effect
export const clickVariants = {
  tap: {
    scale: 0.95,
  },
};

// Custom motion components for easy reuse
export const MotionDiv = motion.div;
export const MotionSection = motion.section;
export const MotionHeader = motion.header;
export const MotionButton = motion.button;
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionH3 = motion.h3;
export const MotionP = motion.p;
export const MotionSpan = motion.span;
export const MotionLi = motion.li;
export const MotionUl = motion.ul;
export const MotionForm = motion.form;
export const MotionInput = motion.input;
export const MotionTextarea = motion.textarea;
export const MotionLabel = motion.label;

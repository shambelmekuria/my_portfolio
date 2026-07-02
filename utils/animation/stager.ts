import { stagger, Variants } from "motion"; // or "framer-motion"

export const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: stagger(0.15),
    },
  },
};

export const gridContainer: Variants = {
  hidden: {},
  visible: {                       
    transition: {
      delayChildren: stagger(0.08),  
    },
  },
};

export const gridItems: Variants = {
  hidden: {
    opacity: 0,                      
    y: 24,
  },
  visible: {
    opacity: 1,                      
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const items: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};
// src/lib/animations.ts
import { Variants, Transition } from "framer-motion"

const springTransition: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 17
}

// Fix: Remove ease property to use default easing
const smoothTransition: Transition = {
  duration: 0.6
}

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: smoothTransition }
}

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0, transition: smoothTransition }
}

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0, transition: smoothTransition }
}

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: springTransition
}

export const headerAnimation = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  transition: smoothTransition
}

export const logoHover = {
  whileHover: { scale: 1.05 },
  transition: springTransition
}

export const navItemAnimation = (index: number) => ({
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { ...smoothTransition, delay: index * 0.1 },
  whileHover: { y: -2 }
})

export const headerButtonAnimation = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { ...smoothTransition, delay: 0.3 }
}

export const hero3DAnimation = {
  initial: { opacity: 0, scale: 0.8, rotate: -10 },
  whileInView: { opacity: 1, scale: 1, rotate: 0 },
  viewport: { once: true },
  transition: { 
    duration: 0.8
  }
}

export const projectCardHover = {
  whileHover: { y: -10, scale: 1.02 },
  transition: springTransition
}

export const projectImageHover = {
  whileHover: { scale: 1.1 },
  transition: smoothTransition
}

export const badgeAnimation = (index: number) => ({
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { delay: index * 0.1 },
  whileHover: { scale: 1.1 }
})

export const linkHover = {
  whileHover: { x: 5 }
}

export const iconSpinHover = {
  whileHover: { scale: 1.2, rotate: 360 },
  transition: { duration: 0.3 }
}

export const serviceCardAnimation = {
  whileHover: { y: -10, scale: 1.05 },
  transition: springTransition
}

export const serviceIconHover = {
  whileHover: { rotate: 360, scale: 1.1 },
  transition: smoothTransition
}

export const faqCardAnimation = {
  whileHover: { scale: 1.02, y: -5 },
  transition: springTransition
}

export const contactItemHover = {
  whileHover: { x: 10 }
}

export const formInputFocus = {
  whileFocus: { scale: 1.02 }
}

export const footerAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: smoothTransition
}

export const skillCardAnimation = {
  whileHover: { scale: 1.05, rotateY: 5 },
  transition: springTransition
}

export const viewAllProjectsAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { ...smoothTransition, delay: 0.3 }
}

// Common animation props for convenience
export const animationProps = {
  initial: "initial" as const,
  whileInView: "animate" as const,
  viewport: { once: true },
  transition: smoothTransition
}

export const staggerProps = {
  initial: "initial" as const,
  whileInView: "animate" as const,
  viewport: { once: true },
  variants: staggerContainer
}
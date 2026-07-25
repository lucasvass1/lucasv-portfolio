"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Children, isValidElement, type ReactNode } from "react";

export const EASE_OUT = [0.21, 1, 0.32, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  x?: number;
  y?: number;
  once?: boolean;
  amount?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  x = 0,
  y = 24,
  once = true,
  amount = 0.3,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : y,
        x: shouldReduceMotion ? 0 : x,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration: shouldReduceMotion ? 0.15 : 0.6,
        ease: EASE_OUT,
        delay: shouldReduceMotion ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}

type StaggerGridProps = {
  children: ReactNode;
  className?: string;
  once?: boolean;
  amount?: number;
  y?: number;
  stagger?: number;
};

export function StaggerGrid({
  children,
  className,
  once = true,
  amount = 0.15,
  y = 20,
  stagger = 0.08,
}: StaggerGridProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : stagger,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.15 : 0.5, ease: EASE_OUT },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {Children.map(children, (child) =>
        isValidElement(child) ? (
          <motion.div key={child.key} variants={itemVariants}>
            {child}
          </motion.div>
        ) : (
          child
        ),
      )}
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { forwardRef, ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

const SectionReveal = forwardRef<HTMLDivElement, SectionRevealProps>(
  ({ children, className = "", delay = 0, direction = "up" }, ref) => {
    const variants = {
      up: { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
      left: { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
      right: { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } },
      none: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    };

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        variants={variants[direction]}
        className={className}
      >
        {children}
      </motion.div>
    );
  }
);

SectionReveal.displayName = "SectionReveal";

export default SectionReveal;

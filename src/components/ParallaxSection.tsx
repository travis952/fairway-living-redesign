import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  image: string;
  alt: string;
  height?: string;
  speed?: number;
  children?: React.ReactNode;
  overlay?: boolean;
}

const ParallaxSection = ({
  image,
  alt,
  height = "h-[60vh]",
  speed = 0.3,
  children,
  overlay = true,
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.05, 1.1]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${height}`}>
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/40" />
      )}
      {children && (
        <div className="relative z-10 h-full flex items-center">
          {children}
        </div>
      )}
    </div>
  );
};

export default ParallaxSection;

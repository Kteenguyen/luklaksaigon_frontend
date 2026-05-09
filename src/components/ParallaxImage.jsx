import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxImage({ src, alt, className }) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <div ref={containerRef} className={`overflow-hidden relative ${className}`}>
      <motion.img
        style={{ y, scale }}
        src={src}
        alt={alt}
        className="w-full h-full object-cover origin-center"
      />
    </div>
  );
}

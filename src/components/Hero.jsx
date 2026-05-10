import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import videoBanner from '../video/banner.mp4';

export default function Hero() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'], // from section top to section bottom
  });

  // Video drifts UP slower than scroll (classic parallax depth)
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  // Text floats up and fades as user scrolls away
  const textY = useTransform(scrollYProgress, [0, 0.6], ['0%', '-20%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Overlay darkens slightly as user scrolls (adds drama)
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.3, 0.65]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-secondary">

      {/* ── Video Layer: parallax drift ── */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        style={{ y: videoY }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 origin-center will-change-transform"
      >
        <video
          ref={videoRef}
          src={videoBanner}
          autoPlay loop muted playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* ── Overlay: darkens as user scrolls ── */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-secondary pointer-events-none z-10"
      />

      {/* ── Text Layer: floats up + fades ── */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-12 md:p-24 pointer-events-none">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          style={{ y: textY, opacity: textOpacity }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto max-w-4xl"
        >
          <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-white mb-6 block drop-shadow-md">
            Luk Lak Design &amp; Build
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white font-light tracking-wide leading-none drop-shadow-2xl">
            Tâm huyết trong từng không gian.
          </h1>
        </motion.div>
      </div>

    </section>
  );
}

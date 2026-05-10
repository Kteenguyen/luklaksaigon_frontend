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

  const title = "Tâm huyết trong từng không gian.";
  const words = title.split(" ");

  // Stagger variants for word animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

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

      {/* ── Overlay: elegant gradient ── */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 pointer-events-none z-10"
      />

      {/* ── Text Layer: floats up + fades ── */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center p-12 md:p-24 pointer-events-none text-center">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="pointer-events-auto max-w-5xl"
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: '0em' }}
            animate={{ opacity: 1, letterSpacing: '0.4em' }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="text-[10px] md:text-sm uppercase text-white/80 mb-8 block drop-shadow-md font-light"
          >
            Luk Lak Design &amp; Build
          </motion.span>
          
          <h1 className="sr-only">Luklak Architects Sài Gòn - Thiết kế Kiến trúc và Thi công Nội thất cao cấp</h1>

          <motion.h2 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl lg:text-[100px] font-serif text-white font-light tracking-tight leading-[1.1] drop-shadow-2xl flex flex-wrap justify-center gap-x-4 md:gap-x-8"
          >
            {words.map((word, index) => (
              <motion.span key={index} variants={wordVariants} className="inline-block">
                {word}
              </motion.span>
            ))}
          </motion.h2>
        </motion.div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">Cuộn xuống</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>

    </section>
  );
}

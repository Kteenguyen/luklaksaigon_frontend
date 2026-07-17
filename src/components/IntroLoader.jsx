"use client";
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import monogramSrc from '../assets/logo/PNG/Logo_Light_3 copy.png';

export default function IntroLoader({ onComplete }) {
  const [phase, setPhase] = useState(1); // 1: Entrance, 2: Warp, 3: Portal, 4: Exit/Reveal
  const [isFinished, setIsFinished] = useState(false);
  const canvasRef = useRef(null);
  const phaseRef = useRef(phase);

  // Sync phase state to Ref so canvas loop does not re-trigger and reset stars position
  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  useEffect(() => {
    // Prevent scrolling while loading
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden';
      if (window.__lenis) {
        window.__lenis.stop();
      }
    }

    // Phase transitions
    const warpTimer = setTimeout(() => {
      setPhase(2);
    }, 2000); // 2s slow drift & logo reveal

    const portalTimer = setTimeout(() => {
      setPhase(3);
    }, 3400); // 1.4s warp speed acceleration and logo fly-through

    let completionTimer;
    const exitTimer = setTimeout(() => {
      setIsFinished(true); // Triggers the Framer Motion exit animation
      // Re-enable scrolling
      document.body.style.overflow = '';
      if (window.__lenis) {
        window.__lenis.start();
      }
      completionTimer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 1200); // Give the white portal fade-out 1.2s to fully clear
    }, 4200);

    return () => {
      clearTimeout(warpTimer);
      clearTimeout(portalTimer);
      clearTimeout(exitTimer);
      if (completionTimer) clearTimeout(completionTimer);
      document.body.style.overflow = '';
      if (window.__lenis) {
        window.__lenis.start();
      }
    };
  }, [onComplete]);

  // Starfield Simulation on Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    const resizeCanvas = () => {
      // Render the starfield background at a lower resolution (40% of screen size)
      // This creates a natural, soft cinematic camera blur (depth of field) when CSS stretches it,
      // while keeping rendering overhead virtually zero.
      const scale = 0.4;
      canvas.width = Math.floor(window.innerWidth * scale);
      canvas.height = Math.floor(window.innerHeight * scale);
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const numStars = 140;
    const stars = [];
    const colors = ['#FFFFFF', '#FAF7F2', '#DED3B8', '#C95928'];

    // Initialize stars with 3D positions
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: (Math.random() - 0.5) * 2000,
        y: (Math.random() - 0.5) * 2000,
        z: Math.random() * 2000,
        color: colors[Math.floor(Math.random() * colors.length)],
        px: 0,
        py: 0
      });
    }

    const fov = 350;
    let speed = 1.8;
    let targetSpeed = 1.8;

    const render = () => {
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const currentPhase = phaseRef.current;

      // During warp speed, clear canvas with slight opacity for trailing/motion blur effect
      if (currentPhase >= 2) {
        ctx.fillStyle = 'rgba(11, 10, 10, 0.18)'; // transparent dark charcoal base
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        targetSpeed = 110; // Hyperspace speed target
      } else {
        ctx.fillStyle = '#0b0a0a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Smoothly transition speed
      speed += (targetSpeed - speed) * 0.08;

      // Group draw calls for high-performance batch rendering
      const orangeLines = [];
      const whiteLines = [];
      const circleGroups = {};

      for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        star.z -= speed;

        // Reset stars that fly past the camera view
        if (star.z <= 0) {
          star.z = 2000;
          star.x = (Math.random() - 0.5) * 2000;
          star.y = (Math.random() - 0.5) * 2000;
          star.px = 0;
          star.py = 0;
        }

        // Projection math
        const x3d = (star.x / star.z) * fov + cx;
        const y3d = (star.y / star.z) * fov + cy;

        if (x3d >= 0 && x3d <= canvas.width && y3d >= 0 && y3d <= canvas.height) {
          const size = (1 - star.z / 2000) * 2.5;

          if (currentPhase >= 2 && star.px !== 0 && star.py !== 0) {
            if (star.color === '#C95928') {
              orangeLines.push({ x1: star.px, y1: star.py, x2: x3d, y2: y3d, size });
            } else {
              whiteLines.push({ x1: star.px, y1: star.py, x2: x3d, y2: y3d, size });
            }
          } else {
            if (!circleGroups[star.color]) {
              circleGroups[star.color] = [];
            }
            circleGroups[star.color].push({ x: x3d, y: y3d, size });
          }
        }

        star.px = x3d;
        star.py = y3d;
      }

      // 1. Draw circles (Phase 1)
      Object.keys(circleGroups).forEach(color => {
        ctx.fillStyle = color;
        circleGroups[color].forEach(circle => {
          ctx.beginPath();
          ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      // 2. Draw Orange warp lines
      if (orangeLines.length > 0) {
        ctx.beginPath();
        orangeLines.forEach(line => {
          ctx.moveTo(line.x1, line.y1);
          ctx.lineTo(line.x2, line.y2);
        });
        ctx.strokeStyle = `rgba(201, 89, 40, ${currentPhase === 2 ? 0.8 : 0.4})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // 3. Draw White/Neutral warp lines
      if (whiteLines.length > 0) {
        ctx.beginPath();
        whiteLines.forEach(line => {
          ctx.moveTo(line.x1, line.y1);
          ctx.lineTo(line.x2, line.y2);
        });
        ctx.strokeStyle = `rgba(255, 255, 255, ${currentPhase === 2 ? 0.65 : 0.3})`;
        ctx.lineWidth = 1.0;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []); // Run canvas logic once on mount

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 z-loader overflow-hidden bg-[#0b0a0a] flex items-center justify-center pointer-events-auto"
          exit={{ 
            opacity: 0, 
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
          }}
        >
          {/* Starfield background */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block z-0" />

          {/* Logo Content Layer */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <AnimatePresence>
              {phase < 3 && (
                <motion.div
                  key="logo-warp-group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    phase === 2
                      ? { 
                          scale: 7, 
                          opacity: [1, 0.8, 0], 
                          transition: { duration: 1.4, ease: [0.85, 0, 0.15, 1] } 
                        }
                      : { 
                          scale: 1, 
                          opacity: 1,
                          transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] } 
                        }
                  }
                  className="flex flex-col items-center justify-center text-center select-none pointer-events-none"
                >
                  {/* Monogram L Logo */}
                  <img
                    src={monogramSrc.src || monogramSrc}
                    alt="Luklak Saigon Monogram Logo"
                    title="Luklak Saigon Monogram"
                    className="w-16 h-16 md:w-20 md:h-20 object-contain relative z-10 drop-shadow-[0_0_20px_rgba(201,89,40,0.3)] mb-4 md:mb-6"
                  />

                  {/* Brand Typography */}
                  <h1 className="font-serif text-[11px] md:text-[13px] tracking-[0.5em] md:tracking-[0.6em] text-white font-light uppercase mr-[-0.5em] md:mr-[-0.6em] relative z-10">
                    LUKLAK
                  </h1>
                  <p className="font-sans text-[7px] md:text-[8px] tracking-[0.35em] md:tracking-[0.4em] text-white/50 uppercase mt-1.5 md:mt-2 mr-[-0.35em] md:mr-[-0.4em] relative z-10">
                    SAIGON
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Portal of Light Transition Mask */}
          {phase === 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-white z-40"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

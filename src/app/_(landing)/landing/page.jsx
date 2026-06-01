"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function LandingPage() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const labelRefs = useRef([]);

  const labels = [
    { at: 0.04, text: "Kiến Trúc & Nội Thất", sub: "Luklak Saigon" },
    { at: 0.25, text: "Không Gian Sống", sub: "Đẳng Cấp & Tinh Tế" },
    { at: 0.48, text: "Từng Chi Tiết", sub: "Được Chăm Chút Tỉ Mỉ" },
    { at: 0.72, text: "Hơn 500 Công Trình", sub: "Trên Khắp Việt Nam" },
    { at: 0.90, text: "Câu Chuyện Của Bạn", sub: "Bắt Đầu Tại Đây" },
  ];

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    video.pause();
    video.currentTime = 0;

    let raf = null;

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const scrollable = container.offsetHeight - window.innerHeight;
        const scrolled = -rect.top;
        const progress = Math.min(Math.max(scrolled / scrollable, 0), 1);

        // Scrub video
        if (video.duration) {
          video.currentTime = progress * video.duration;
        }

        // Show/hide labels
        labelRefs.current.forEach((el, i) => {
          if (!el) return;
          const show = labels[i].at;
          const hide = i < labels.length - 1 ? labels[i + 1].at - 0.02 : 1;
          const visible = progress >= show && progress < hide;
          const entering = progress >= show && progress < show + 0.06;

          el.style.opacity = visible ? "1" : "0";
          el.style.transform = entering
            ? `translateY(${Math.max(0, (1 - (progress - show) / 0.06) * 28)}px)`
            : "translateY(0)";
        });

        // Progress bar
        const bar = document.getElementById("lk-bar");
        if (bar) bar.style.transform = `scaleX(${progress})`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // init
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <main style={{ background: "#050505" }}>

      {/* ── VIDEO SCRUB ───────────────────────── */}
      <div ref={containerRef} style={{ height: "600vh", position: "relative" }}>
        <div style={{
          position: "sticky", top: 0, height: "100vh",
          overflow: "hidden", display: "flex",
          alignItems: "center", justifyContent: "center",
        }}>

          {/* Video */}
          <video
            ref={videoRef}
            src="/video/luklak_scrub.mp4"
            muted playsInline preload="auto"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />

          {/* Overlay */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "linear-gradient(to bottom,rgba(5,5,5,0.3) 0%,rgba(5,5,5,0.1) 40%,rgba(5,5,5,0.5) 100%)",
          }} />

          {/* Labels */}
          {labels.map((l, i) => (
            <div
              key={i}
              ref={(el) => (labelRefs.current[i] = el)}
              style={{
                position: "absolute", textAlign: "center", zIndex: 10,
                padding: "0 24px", opacity: 0,
                transition: "opacity 0.5s ease, transform 0.5s ease",
                transform: "translateY(28px)",
              }}
            >
              <p style={{
                color: "#B06B3E", fontSize: 11,
                letterSpacing: "0.5em", textTransform: "uppercase",
                marginBottom: 12,
              }}>
                {l.sub}
              </p>
              <h2 style={{
                fontFamily: "Georgia,serif", color: "#fff",
                fontWeight: 300, fontSize: "clamp(2rem,6vw,5rem)",
                lineHeight: 1.1, margin: 0,
              }}>
                {l.text}
              </h2>
            </div>
          ))}

          {/* Scroll hint */}
          <div style={{
            position: "absolute", bottom: 36, left: "50%",
            transform: "translateX(-50%)", textAlign: "center",
            zIndex: 10,
          }}>
            <span style={{
              color: "rgba(255,255,255,0.3)", fontSize: 9,
              letterSpacing: "0.45em", textTransform: "uppercase",
              display: "block", marginBottom: 8,
            }}>
              Cuộn
            </span>
            <div style={{
              width: 1, height: 40, margin: "0 auto",
              background: "linear-gradient(to bottom,rgba(255,255,255,0.4),transparent)",
              animation: "lkPulse 1.8s ease-in-out infinite",
            }} />
          </div>

          {/* Progress bar */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: 2, background: "rgba(255,255,255,0.08)", zIndex: 20,
          }}>
            <div id="lk-bar" style={{
              height: "100%", background: "#B06B3E",
              transformOrigin: "left", transform: "scaleX(0)",
              transition: "transform 0.05s linear",
            }} />
          </div>
        </div>
      </div>

      {/* ── CTA ─────────────────────────────────── */}
      <section style={{
        background: "#050505", padding: "120px 24px",
        textAlign: "center",
      }}>
        <span style={{
          color: "#B06B3E", fontSize: 10,
          letterSpacing: "0.5em", textTransform: "uppercase",
          display: "block", marginBottom: 24,
        }}>
          Bắt Đầu Hành Trình
        </span>
        <h2 style={{
          fontFamily: "Georgia,serif", color: "#fff",
          fontSize: "clamp(2.5rem,6vw,5rem)", fontWeight: 300,
          lineHeight: 1.2, marginBottom: 32,
        }}>
          Ngôi Nhà Mơ Ước<br />
          <span style={{ color: "#B06B3E", fontStyle: "italic" }}>Của Bạn</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.4)", maxWidth: 440, margin: "0 auto 48px", lineHeight: 1.8, fontSize: 14 }}>
          Để Luklak Saigon đồng hành tạo nên không gian sống đẳng cấp,
          phản ánh đúng cá tính và lối sống của bạn.
        </p>
        <Link href="/lien-he" style={{
          display: "inline-block", background: "#B06B3E", color: "#fff",
          padding: "18px 56px", fontSize: 12, letterSpacing: "0.3em",
          textTransform: "uppercase", textDecoration: "none",
          transition: "transform 0.3s, box-shadow 0.3s",
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(176,107,62,0.35)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}
        >
          Tư Vấn Miễn Phí Ngay
        </Link>
        <div style={{ marginTop: 48 }}>
          <Link href="/" style={{ color: "rgba(255,255,255,0.2)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>
            ← Trang Chủ
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes lkPulse {
          0%,100% { transform: scaleY(1); opacity: 1; }
          50% { transform: scaleY(0.6); opacity: 0.4; }
        }
      `}</style>
    </main>
  );
}

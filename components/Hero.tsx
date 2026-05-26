"use client";
import { useEffect, useRef } from "react";

interface HeroProps { onCallClick: () => void; }

export default function Hero({ onCallClick }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);
    let raf: number;

    const dots = Array.from({ length: 38 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      o: Math.random() * 0.4 + 0.05,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0) d.x = w;
        if (d.x > w) d.x = 0;
        if (d.y < 0) d.y = h;
        if (d.y > h) d.y = 0;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${d.o})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };

    draw();

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", resize, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "calc(var(--nav-h) + 4rem) clamp(1.25rem, 5vw, 3rem) 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}
      />

      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `radial-gradient(ellipse 85% 50% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 60%)`,
        pointerEvents: "none",
      }} />

      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.6) 50%, transparent 100%)",
        pointerEvents: "none",
      }} />

      <div style={{
        position: "absolute",
        bottom: "15%", left: "50%",
        transform: "translateX(-50%)",
        width: "min(600px, 90vw)", height: "1px",
        background: "linear-gradient(90deg, transparent, var(--border), transparent)",
        pointerEvents: "none",
      }} />

      <div style={{
        position: "relative", zIndex: 1,
        maxWidth: "min(780px, 100%)",
        margin: "0 auto",
        width: "100%",
      }}>
        <div
          className="fade-up delay-1"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.18)",
            borderRadius: "100px", padding: "0.4rem 1rem",
            marginBottom: "clamp(1.5rem, 4vw, 2.5rem)",
          }}
        >
          <span style={{
            width: "7px", height: "7px", borderRadius: "50%", background: "var(--gold)",
            animation: "goldPulse 2s ease-in-out infinite", display: "inline-block", flexShrink: 0,
          }} />
          <span className="mono" style={{ color: "var(--gold)", fontSize: "10px", lineHeight: 1 }}>
            Purpose-built for hotel front desks
          </span>
        </div>

        <h1
          className="display fade-up delay-2"
          style={{ fontSize: "var(--text-hero)", color: "var(--cream)", marginBottom: "clamp(1rem, 3vw, 1.5rem)" }}
        >
          Your Hotel's<br />
          <em style={{
            fontStyle: "italic",
            background: "linear-gradient(105deg, var(--gold-muted) 0%, var(--gold) 50%, var(--gold-muted) 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer 3.5s linear infinite",
          }}>
            AI Receptionist
          </em>
        </h1>

        <p
          className="body-text fade-up delay-3"
          style={{
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            maxWidth: "48ch",
            margin: "0 auto clamp(0.75rem, 2vw, 1.25rem)",
            color: "var(--muted-light)",
          }}
        >
          Every missed call at night is a booking lost to a competitor. Our AI
          receptionist answers every call, every hour — handling reservations,
          inquiries, and guest requests in Hindi and English.
        </p>

        <p className="fade-up delay-3 mono" style={{
          color: "var(--muted)", fontSize: "9.5px",
          marginBottom: "clamp(2rem, 4vw, 3rem)", letterSpacing: "0.15em",
        }}>
          Not a generic chatbot — built exclusively for hospitality
        </p>

        <div className="hero-ctas fade-up delay-4">
          <button onClick={onCallClick} className="btn-primary">
            <span style={{
              width: "7px", height: "7px", borderRadius: "50%",
              background: "var(--charcoal)", display: "inline-block", flexShrink: 0,
              animation: "goldPulse 2s ease-in-out infinite",
            }} />
            Try Live Demo
          </button>
          <a href="#pricing" className="btn-outline">View Pricing</a>
        </div>

        <p className="fade-up delay-5 mono" style={{ color: "var(--muted)", marginTop: "2rem", fontSize: "9.5px" }}>
          No technical setup · Hindi &amp; English
        </p>

        <div className="fade-in delay-5" style={{
          marginTop: "3rem",
          display: "flex", justifyContent: "center",
          gap: "clamp(1.5rem, 4vw, 3rem)", flexWrap: "wrap",
        }}>
          {[
            ["< 800ms", "Voice latency"],
            ["24 / 7", "Always on"],
            ["2", "Languages"],
          ].map(([val, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div className="mono" style={{ color: "var(--gold)", fontSize: "1.1rem", fontWeight: 400, letterSpacing: "-0.01em" }}>{val}</div>
              <div className="mono" style={{ color: "var(--muted-faint)", fontSize: "8px", letterSpacing: "0.2em", marginTop: "2px" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="fade-up delay-5"
        style={{
          position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.3rem",
        }}
        aria-hidden="true"
      >
        <span className="mono" style={{ fontSize: "7px", color: "var(--muted-faint)", letterSpacing: "0.2em" }}>SCROLL</span>
        <div style={{
          width: "1px", height: "2rem",
          background: "linear-gradient(to bottom, var(--border-light), transparent)",
        }} />
      </div>
    </section>
  );
}
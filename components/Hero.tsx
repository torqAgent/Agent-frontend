"use client";

interface HeroProps { onCallClick: () => void; }

export default function Hero({ onCallClick }: HeroProps) {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "8rem 1.5rem 5rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background radial */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)`,
      }} />
      {/* Noise texture */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0, opacity: 0.025,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "180px",
      }} />
      {/* Gold top line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
        opacity: 0.5,
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "780px", margin: "0 auto" }}>
        {/* Pill */}
        <div className="fade-up delay-1" style={{
          display: "inline-flex", alignItems: "center", gap: "0.6rem",
          background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)",
          borderRadius: "100px", padding: "0.4rem 1rem", marginBottom: "2.5rem",
        }}>
          <span style={{
            width: "7px", height: "7px", borderRadius: "50%", background: "var(--gold)",
            animation: "goldPulse 2s ease-in-out infinite", display: "inline-block",
          }} />
          <span className="mono" style={{ color: "var(--gold)", fontSize: "10px" }}>
            Purpose-built for hotel front desks
          </span>
        </div>

        <h1 className="display fade-up delay-2" style={{
          fontSize: "clamp(3.5rem, 9vw, 7rem)", color: "var(--cream)", marginBottom: "1.5rem",
        }}>
          Your Hotel's<br />
          <em style={{ color: "var(--gold)" }}>AI Receptionist</em>
        </h1>

        <p className="body-text fade-up delay-3" style={{
          fontSize: "1.1rem", maxWidth: "48ch", margin: "0 auto 1.5rem", color: "var(--muted-light)",
        }}>
          Every missed call at night is a booking lost to a competitor.
          Our AI receptionist answers every call, every hour — handling
          reservations, inquiries, and guest requests in Hindi and English.
        </p>

        <p className="fade-up delay-3 mono" style={{
          color: "var(--muted)", fontSize: "10px", marginBottom: "3rem",
          letterSpacing: "0.15em",
        }}>
          Not a generic chatbot — built exclusively for hospitality
        </p>

        <div className="fade-up delay-4" style={{
          display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap",
        }}>
          <button onClick={onCallClick} className="btn-primary">
            <span style={{
              width: "7px", height: "7px", borderRadius: "50%",
              background: "var(--charcoal)", display: "inline-block",
            }} />
            Try Live Demo
          </button>
          <a href="#pricing" className="btn-outline">View Pricing</a>
        </div>

        <p className="fade-up delay-5 mono" style={{ color: "var(--muted)", marginTop: "2rem", fontSize: "10px" }}>
          No technical setup  · Hindi & English
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="fade-up delay-5" style={{
        position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
      }}>
        <div style={{ width: "1px", height: "2.5rem", background: "linear-gradient(to bottom, var(--border-light), transparent)" }} />
      </div>
    </section>
  );
}
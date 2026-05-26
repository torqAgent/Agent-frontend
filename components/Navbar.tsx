"use client";
import { useState, useEffect } from "react";

interface NavbarProps { onCallClick: () => void; }

const links = [
  { label: "Features",   href: "#features"    },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Demo",       href: "#demo"        },
  { label: "Pricing",    href: "#pricing"     },
];

export default function Navbar({ onCallClick }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`} role="navigation" aria-label="Main navigation">
        <a
          href="/"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.15rem",
            fontStyle: "italic",
            fontWeight: 300,
            color: "var(--cream)",
            letterSpacing: "0.01em",
            flexShrink: 0,
          }}
        >
          Torq<span style={{ color: "var(--gold)" }}>.</span>
        </a>

        <div className="nav-links" role="list">
          {links.map(({ label, href }) => (
            <a key={label} href={href} className="nav-link" role="listitem">{label}</a>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <button
            onClick={onCallClick}
            className="btn-primary"
            style={{ fontSize: "9px", padding: "0.6rem 1.1rem", display: "none" }}
            aria-label="Try live demo"
          >
            <span style={{
              width: "6px", height: "6px", borderRadius: "50%",
              background: "var(--charcoal)", display: "inline-block", flexShrink: 0,
              animation: "goldPulse 2s ease-in-out infinite",
            }} />
            Live Demo
          </button>

          <style>{`@media (min-width: 768px) { .nav-cta-btn { display: inline-flex !important; } }`}</style>
          <button
            onClick={onCallClick}
            className="btn-primary nav-cta-btn"
            style={{ fontSize: "9px", padding: "0.6rem 1.1rem" }}
            aria-label="Try live demo"
          >
            <span style={{
              width: "6px", height: "6px", borderRadius: "50%",
              background: "var(--charcoal)", display: "inline-block", flexShrink: 0,
              animation: "goldPulse 2s ease-in-out infinite",
            }} />
            Live Demo
          </button>

          <button
            className={`nav-hamburger${open ? " open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </nav>

      <div className={`nav-drawer${open ? " open" : ""}`} aria-hidden={!open}>
        {links.map(({ label, href }) => (
          <a key={label} href={href} className="nav-drawer-link" onClick={close}>{label}</a>
        ))}
        <button
          onClick={() => { close(); onCallClick(); }}
          className="btn-primary"
          style={{ marginTop: "2rem", fontSize: "11px", padding: "1rem 2rem", width: "fit-content" }}
        >
          <span style={{
            width: "7px", height: "7px", borderRadius: "50%",
            background: "var(--charcoal)", display: "inline-block",
            animation: "goldPulse 2s ease-in-out infinite",
          }} />
          Try Live Demo
        </button>
        <div style={{ marginTop: "auto", paddingTop: "2rem" }}>
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "9px", color: "var(--muted-faint)",
            letterSpacing: "0.16em", textTransform: "uppercase",
          }}>
            Hindi & English · 24/7
          </p>
        </div>
      </div>
    </>
  );
}
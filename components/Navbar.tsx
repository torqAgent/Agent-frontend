"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar({ onCallClick }: { onCallClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const close = () => setDrawerOpen(false);

  const navLinks = [
    { label: "Features",     href: "#features"     },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Demo",         href: "#demo"         },
    { label: "Pricing",      href: "#pricing"      },
  ];

  return (
    <>
      <nav
        className="nav"
        style={{ borderBottomColor: scrolled ? "var(--border)" : "transparent" }}
      >
        {/* Logo */}
        <a
          href="/"
          aria-label="Torq Agents home"
          style={{
            display: "flex", alignItems: "center",
            gap: "0.6rem", textDecoration: "none", flexShrink: 0,
          }}
        >
          <Image
            src="/logo.jpeg"
            alt="Torq Agents"
            width={32}
            height={32}
            style={{ objectFit: "contain", borderRadius: "6px" }}
            priority
          />
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic", fontWeight: 300,
            fontSize: "1rem", color: "var(--cream)", letterSpacing: "0.01em",
          }}>
            Torq<span style={{ color: "var(--gold)" }}>.</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="nav-links" role="list">
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href} className="nav-link" role="listitem">{label}</a>
          ))}
        </div>

        {/* Desktop CTAs + mobile hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {/* Desktop only buttons */}
          <button
            onClick={onCallClick}
            className="btn-ghost"
            style={{ padding: "0.55rem 1.1rem", fontSize: "9.5px" }}
            aria-label="Try demo"
          >
            Try Demo
          </button>
          <a
            href="mailto:hello@torqdesigns.com"
            className="btn-primary"
            style={{ padding: "0.55rem 1.25rem", fontSize: "9.5px" }}
          >
            Book a Call
          </a>

          {/* Hamburger — mobile only */}
          <button
            className={`nav-hamburger${drawerOpen ? " open" : ""}`}
            onClick={() => setDrawerOpen((v) => !v)}
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            aria-expanded={drawerOpen}
            aria-controls="nav-drawer"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay backdrop */}
      {drawerOpen && (
        <div
          onClick={close}
          style={{
            position: "fixed", inset: 0, zIndex: 98,
            background: "rgba(0,0,0,0.5)",
          }}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div
        id="nav-drawer"
        className={`nav-drawer${drawerOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav style={{ display: "flex", flexDirection: "column" }}>
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href} className="nav-drawer-link" onClick={close}>
              {label}
            </a>
          ))}
        </nav>

        <div style={{
          paddingTop: "2rem",
          display: "flex", flexDirection: "column", gap: "0.75rem",
          marginTop: "auto",
        }}>
          <button
            className="btn-ghost"
            onClick={() => { onCallClick(); close(); }}
            style={{
              width: "100%", justifyContent: "center",
              border: "1px solid var(--border)", borderRadius: "var(--radius-sm)",
              minHeight: "52px", fontSize: "11px",
            }}
          >
            Try Live Demo
          </button>
          <a
            href="mailto:hello@torqdesigns.com"
            className="btn-primary"
            style={{ width: "100%", justifyContent: "center", minHeight: "52px", fontSize: "11px" }}
            onClick={close}
          >
            Book a Call
          </a>
        </div>

        <p className="mono" style={{
          color: "var(--muted-faint)", fontSize: "8.5px",
          textAlign: "center", marginTop: "2rem",
          letterSpacing: "0.12em",
        }}>
          hello@torqdesigns.com
        </p>
      </div>
    </>
  );
}
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

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const close = () => setDrawerOpen(false);

  return (
    <>
      <nav
        className="nav"
        style={{ borderBottomColor: scrolled ? "var(--border)" : "transparent" }}
      >
        {/* Logo */}
        <a href="/" aria-label="Torq Agents home" style={{ display: "flex", alignItems: "center", gap: "0.65rem", textDecoration: "none" }}>
          <Image
            src="/logo.jpeg"
            alt="Torq Agents"
            width={36}
            height={36}
            style={{ objectFit: "contain", borderRadius: "6px" }}
          />
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "1.05rem",
            color: "var(--cream)",
            letterSpacing: "0.01em",
          }}>
            Torq<span style={{ color: "var(--gold)" }}>.</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="nav-links" role="list">
          {[
            { label: "Features",    href: "#features"     },
            { label: "How It Works",href: "#how-it-works" },
            { label: "Demo",        href: "#demo"         },
            { label: "Pricing",     href: "#pricing"      },
          ].map(({ label, href }) => (
            <a key={href} href={href} className="nav-link" role="listitem">
              {label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <button
            onClick={onCallClick}
            className="btn-ghost"
            style={{ padding: "0.55rem 1.1rem", fontSize: "9.5px" }}
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

      {/* Mobile drawer */}
      <div
        id="nav-drawer"
        className={`nav-drawer${drawerOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {[
          { label: "Features",     href: "#features"     },
          { label: "How It Works", href: "#how-it-works" },
          { label: "Demo",         href: "#demo"         },
          { label: "Pricing",      href: "#pricing"      },
        ].map(({ label, href }) => (
          <a key={href} href={href} className="nav-drawer-link" onClick={close}>
            {label}
          </a>
        ))}

        <div style={{ paddingTop: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <button
            className="btn-ghost"
            onClick={() => { onCallClick(); close(); }}
            style={{ width: "100%", justifyContent: "center" }}
          >
            Try Demo
          </button>
          <a
            href="mailto:hello@torqdesigns.com"
            className="btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={close}
          >
            Book a Call
          </a>
        </div>
      </div>
    </>
  );
}
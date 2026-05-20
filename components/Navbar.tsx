"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar({ onCallClick }: { onCallClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className="nav" style={{ borderBottomColor: scrolled ? "var(--border)" : "transparent" }}>
      <Image
        src="/logo.jpeg"
        alt="Torq Agents"
        width={48}
        height={48}
        style={{ objectFit: "contain" }}
      />
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <a href="#pricing" className="mono" style={{ color: "var(--muted)", textDecoration: "none" }}>
          Pricing
        </a>
        <button onClick={onCallClick} className="btn-primary" style={{ padding: "0.65rem 1.5rem" }}>
          Try Demo
        </button>
      </div>
    </nav>
  );
}
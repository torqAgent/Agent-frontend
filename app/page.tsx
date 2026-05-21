"use client";

import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CallWidget from "@/components/CallWidget";
import VisibilityControl from "@/components/VisibilityControl";
import OnboardingTimeline from "@/components/OnboardingTimeline";
import UseCases from "@/components/UseCases";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";

/* ══════════════════════════════════════════
   TRUST BAR
══════════════════════════════════════════ */
function TrustBar() {
  const items = [
    "Sarvam AI",
    "LiveKit",
    "Available 24 / 7",
    "Hindi & English",
    "< 800 ms latency",
  ];
  return (
    <div
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "0.9rem var(--page-px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "clamp(1.5rem, 4vw, 3.5rem)",
        flexWrap: "wrap",
        overflowX: "hidden",
      }}
    >
      {items.map((item) => (
        <span
          key={item}
          className="mono"
          style={{ color: "var(--muted)", fontSize: "9px", letterSpacing: "0.2em", whiteSpace: "nowrap" }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════
   DEMO SECTION
══════════════════════════════════════════ */
function DemoSection() {
  return (
    <section id="demo" className="section-wrap" aria-labelledby="demo-heading">
      <hr className="hairline" style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }} />

      <div className="two-col">
        {/* Label column */}
        <div className="two-col-label">
          <span className="section-label fade-left">Live demo</span>

          <div
            className="live-badge fade-in delay-2"
            style={{ marginTop: "1rem", width: "fit-content" }}
          >
            <span className="status-dot" />
            Available now
          </div>

          <div
            className="fade-up delay-4"
            style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "0.9rem" }}
          >
            {([
              ["< 800 ms", "Voice latency"],
              ["Hindi + EN", "Languages"],
              ["24 / 7",    "Uptime"],
            ] as const).map(([val, label]) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                <span className="mono" style={{ color: "var(--gold)", fontSize: "11px" }}>{val}</span>
                <span className="mono" style={{ color: "var(--muted)", fontSize: "8.5px" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Content column */}
        <div className="two-col-content">
          <h2 id="demo-heading" className="section-title fade-up">
            Talk to the<br />
            <em>receptionist</em>
          </h2>
          <p
            className="section-body fade-up delay-2"
            style={{ marginBottom: "clamp(2rem, 4vw, 3rem)" }}
          >
            Click below. The AI agent picks up instantly and converses in Hindi
            or English — live, in your browser. No app, no install.
          </p>

          <div className="call-box fade-up delay-3">
            <CallWidget />
          </div>

          <p
            className="fade-in delay-5"
            style={{
              marginTop: "1.25rem",
              fontFamily: "'DM Mono', monospace",
              fontSize: "9px",
              letterSpacing: "0.14em",
              color: "var(--muted-faint)",
              textTransform: "uppercase",
            }}
          >
            Powered by Sarvam AI · LiveKit · Real-time voice
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   CTA SECTION
══════════════════════════════════════════ */
function CTASection({ onCallClick }: { onCallClick: () => void }) {
  return (
    <section className="section-wrap" style={{ paddingTop: 0 }}>
      <div className="cta-banner">
        <div style={{ position: "relative", zIndex: 1 }}>
          <span className="section-label fade-up" style={{ marginBottom: "1.5rem" }}>
            Get started
          </span>
          <h2
            className="section-title fade-up delay-1"
            style={{ maxWidth: "20ch", fontSize: "clamp(2.4rem, 5vw, 4.2rem)" }}
          >
            Ready to automate<br />
            <em>your front desk?</em>
          </h2>
          <p
            className="section-body fade-up delay-2"
            style={{ marginBottom: "2.5rem", marginTop: "0.5rem" }}
          >
            Schedule a personalised demo and see the AI agent handle real hotel
            queries — live. Setup takes less than 48 hours.
          </p>

          <div
            className="fade-up delay-3"
            style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}
          >
            <a href="mailto:hello@torqdesigns.com" className="btn-primary">
              Schedule a Demo
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  d="M2.5 6h7M6.5 3l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <button className="btn-outline" onClick={onCallClick}>
              Try Live Demo
            </button>
          </div>

          <div
            className="fade-in delay-5"
            style={{ marginTop: "2.5rem", display: "flex", gap: "2rem", flexWrap: "wrap" }}
          >
            {["No credit card", "48 hr setup", "Cancel anytime"].map((t) => (
              <span
                key={t}
                className="mono"
                style={{ fontSize: "8.5px", color: "var(--muted)", letterSpacing: "0.18em" }}
              >
                ✓ {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   FOOTER
══════════════════════════════════════════ */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-row">
        <a
          href="/"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1rem",
            fontStyle: "italic",
            fontWeight: 300,
            color: "var(--muted)",
            textDecoration: "none",
            letterSpacing: "0.01em",
          }}
        >
          Torq<span style={{ color: "var(--gold-muted)" }}>.</span>
        </a>

        <nav className="footer-links" aria-label="Footer navigation">
          {[
            { label: "Pricing",      href: "#pricing"     },
            { label: "Demo",         href: "#demo"        },
            { label: "How It Works", href: "#how-it-works"},
            { label: "Contact",      href: "mailto:hello@torqdesigns.com" },
          ].map(({ label, href }) => (
            <a key={label} href={href} className="footer-link">{label}</a>
          ))}
        </nav>
      </div>

      <hr className="hairline" />

      <div className="footer-row">
        <span className="mono" style={{ color: "var(--muted-faint)", fontSize: "8.5px" }}>
          Built with Sarvam AI · LiveKit · Next.js
        </span>
        <span className="mono" style={{ color: "var(--muted-faint)", fontSize: "8.5px" }}>
          © {year} Torq Designs
        </span>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */
export default function Home() {
  const callRef = useRef<HTMLDivElement>(null);

  const scrollToCall = () =>
    callRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <main>
      <Navbar onCallClick={scrollToCall} />
      <Hero onCallClick={scrollToCall} />
      <TrustBar />
      <Features />
      <HowItWorks />

      {/* Scroll anchor for demo — zero-height div, no ref-on-section issues */}
      <div ref={callRef} style={{ scrollMarginTop: "calc(var(--nav-h) + 24px)" }} />
      <DemoSection />

      <VisibilityControl />
      <OnboardingTimeline />
      <UseCases />
      <Pricing />
      <FAQ />
      <CTASection onCallClick={scrollToCall} />
      <Footer />
    </main>
  );
}
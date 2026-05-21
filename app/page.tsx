"use client";
import { useRef } from "react";
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

export default function Home() {
  const callRef = useRef<HTMLDivElement>(null);
  const scrollToCall = () => callRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <main>
      <Navbar onCallClick={scrollToCall} />
      <Hero onCallClick={scrollToCall} />
      <Features />
      <HowItWorks />

      {/* Live Demo */}
      <section ref={callRef} className="section-wrap">
        <hr className="hairline" style={{ marginBottom: "5rem" }} />
        <div className="two-col" style={{ flexWrap: "wrap", gap: "3rem 5rem" }}>
          <div className="two-col-label">
            <span className="section-label">Live demo</span>
          </div>
          <div className="two-col-content">
            <h2 className="section-title">Talk to the<br /><em>receptionist</em></h2>
            <p className="section-body" style={{ marginBottom: "2.5rem" }}>
              Click below. The AI agent picks up and speaks with you in
              Hindi or English — live, in your browser. No app needed.
            </p>
            <div className="call-box">
              <CallWidget />
            </div>
          </div>
        </div>
      </section>

      <VisibilityControl />
      <OnboardingTimeline />
      <UseCases />
      <Pricing />
      <FAQ />

      {/* CTA Banner */}
      <section style={{ padding: "0 2rem 7rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{
          background: "linear-gradient(135deg, var(--charcoal-2) 0%, var(--charcoal-3) 100%)",
          border: "1px solid var(--border-light)",
          borderRadius: "20px",
          padding: "4rem 3rem",
          textAlign: "center",
        }}>
          <span className="section-label" style={{ display: "inline-block" }}>Get started</span>
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            Ready to automate<br /><em>your front desk?</em>
          </h2>
          <p className="section-body" style={{ margin: "0 auto 2.5rem", textAlign: "center" }}>
            Schedule a demo and see the agent handle real hotel queries live.
          </p>
          <a href="mailto:hello@torqdesigns.com" className="btn-primary">
            Schedule a Demo
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid var(--border)",
        padding: "3rem 2.5rem",
        maxWidth: "1100px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <span className="display" style={{ fontSize: "1.05rem", color: "var(--muted)", fontStyle: "italic" }}>
            AI Hotel Receptionist
          </span>
          <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
            <a href="#pricing" className="mono" style={{ color: "var(--muted)", textDecoration: "none", fontSize: "10px" }}>
              Pricing
            </a>
            <a href="mailto:hello@torqdesigns.com" className="mono" style={{ color: "var(--muted)", textDecoration: "none", fontSize: "10px" }}>
              Contact
            </a>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
          <span className="mono" style={{ color: "var(--muted)", fontSize: "9px" }}>
            Built with Sarvam AI · LiveKit · Next.js
          </span>
          <span className="mono" style={{ color: "var(--muted)", fontSize: "9px" }}>
            © {new Date().getFullYear()} Torq Designs
          </span>
        </div>
      </footer>
    </main>
  );
}
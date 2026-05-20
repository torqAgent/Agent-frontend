"use client";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CallWidget from "@/components/CallWidget";
import BuiltWithSarvam from "@/components/BuiltWithSarvam";
import UseCases from "@/components/UseCases";
import Pricing from "@/components/Pricing";

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

      <BuiltWithSarvam />
      <UseCases />
      <Pricing />

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
          <a href="mailto:hello@example.com" className="btn-primary">
            Schedule a Demo
          </a>
        </div>
      </section>

      {/* Footer */}
      <div className="footer">
        <span className="display" style={{ fontSize: "1.05rem", color: "var(--muted)", fontStyle: "italic" }}>
          AI Hotel Receptionist
        </span>
        <span className="mono" style={{ color: "var(--muted)", fontSize: "9px" }}>
          Built with Sarvam AI · LiveKit · Next.js
        </span>
      </div>
    </main>
  );
}
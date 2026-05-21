"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Will this replace my front desk staff?",
    a: "No. The agent handles routine inbound calls — availability checks, booking requests, FAQs — so your staff can focus on guests at the property. For anything sensitive or complex, the agent hands the call to your team immediately.",
  },
  {
    q: "What if the AI says something wrong?",
    a: "The agent only answers using information you provide — your property details, pricing, and FAQ. It doesn't guess or hallucinate. For anything outside its knowledge, it tells the guest it will connect them to the front desk rather than risk a wrong answer.",
  },
  {
    q: "Does it work with my existing phone number?",
    a: "Yes. We route calls through your current hotel number — no new SIM, no new hardware, no number change. Guests dial the same number they always have.",
  },
  {
    q: "How long does setup take?",
    a: "30 days from kickoff to live calls. Our engineering team handles everything: phone routing, PMS integration, FAQ training, and test call runs. You review and approve — we build.",
  },
  {
    q: "What languages does it support?",
    a: "English and Hindi are live today, powered by Sarvam AI's models trained on Indian accents. Regional language support — Kannada, Tamil, Malayalam — is on the roadmap.",
  },
  {
    q: "What happens during very high call volume?",
    a: "The agent handles multiple calls simultaneously with no busy signal and no queue. Whether you get 5 calls or 50 in an hour, every guest is answered instantly.",
  },
  {
    q: "Is guest data stored securely?",
    a: "All call data is encrypted in transit and at rest. We do not share or sell guest information. Call logs and summaries are accessible only to your team through the dashboard.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No long-term lock-in. Cancel with 30 days' notice on any plan. Your call logs and data are exported to you on request.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-wrap">
      <hr className="hairline" style={{ marginBottom: "5rem" }} />
      <div className="two-col" style={{ flexWrap: "wrap", gap: "3rem 5rem" }}>
        <div className="two-col-label">
          <span className="section-label">FAQ</span>
        </div>
        <div className="two-col-content">
          <h2 className="section-title">Common<br /><em>questions</em></h2>
          <p className="section-body" style={{ marginBottom: "3rem" }}>
            Everything you need to know before getting started.
          </p>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  style={{
                    borderTop: "1px solid var(--border)",
                    ...(i === faqs.length - 1 ? { borderBottom: "1px solid var(--border)" } : {}),
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "1.5rem 0",
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "1.5rem",
                      textAlign: "left",
                    }}
                  >
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
                      fontSize: "0.95rem", color: "var(--cream)", lineHeight: 1.5,
                    }}>
                      {item.q}
                    </span>
                    <span style={{
                      color: "var(--gold)", fontSize: "1rem", flexShrink: 0,
                      marginTop: "2px",
                      transition: "transform 0.25s ease",
                      display: "inline-block",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}>
                      ✦
                    </span>
                  </button>

                  <div style={{
                    overflow: "hidden",
                    maxHeight: isOpen ? "300px" : "0",
                    transition: "max-height 0.35s ease",
                  }}>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
                      fontSize: "0.9rem", color: "var(--muted-light)",
                      lineHeight: 1.75, paddingBottom: "1.75rem",
                      maxWidth: "52ch",
                    }}>
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
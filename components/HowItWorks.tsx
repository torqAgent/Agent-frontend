const steps = [
  { num: "01", title: "Click Call", description: "No app, no login, no download. Works straight in your browser on any device." },
  { num: "02", title: "Agent Answers", description: "Sarvam AI's speech engine understands Hindi and English and responds in under a second." },
  { num: "03", title: "Book Your Room", description: "Ask about availability, pricing, or amenities. The agent handles it like a real front desk." },
];

export default function HowItWorks() {
  return (
    <section className="section-wrap">
      <hr className="hairline" style={{ marginBottom: "5rem" }} />
      <div className="two-col" style={{ flexWrap: "wrap", gap: "3rem 5rem" }}>
        <div className="two-col-label">
          <span className="section-label">How it works</span>
        </div>
        <div className="two-col-content">
          <h2 className="section-title">Three steps.<br /><em>Zero friction.</em></h2>
          <div style={{ marginTop: "2.5rem" }}>
            {steps.map((s) => (
              <div key={s.num} className="step-row">
                <span className="mono" style={{ color: "var(--muted)", flexShrink: 0, width: "2rem", paddingTop: "3px" }}>{s.num}</span>
                <div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "1.5rem", color: "var(--cream)", marginBottom: "0.4rem" }}>
                    {s.title}
                  </h3>
                  <p className="body-text" style={{ fontSize: "0.9rem", maxWidth: "40ch" }}>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
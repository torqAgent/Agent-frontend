const features = [
  "24/7 inbound voice calls — English & Hindi",
  "Real-time availability checks",
  "Booking, cancellation & modification",
  "Google Calendar & PMS sync",
  "Payment collection over call",
  "Guest FAQ — trained on your property",
  "Call logs, summaries & reports",
  "Human handoff when needed",
];

export default function Features() {
  return (
    <section className="section-wrap">
      <hr className="hairline" style={{ marginBottom: "5rem" }} />
      <div className="two-col" style={{ flexWrap: "wrap", gap: "3rem 5rem" }}>
        <div className="two-col-label">
          <span className="section-label">What it does</span>
        </div>
        <div className="two-col-content">
          <h2 className="section-title">Every feature your<br /><em>front desk needs</em></h2>
          <p className="section-body" style={{ marginBottom: "0.75rem" }}>
            Built exclusively for hotels, serviced apartments, and travel agencies.
            Every feature designed around how a receptionist actually works —
            nothing generic, nothing irrelevant.
          </p>
          <p className="section-body" style={{ marginBottom: "3rem" }}>
            No technical setup required on your end.
          </p>
          <div className="feature-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-cell">
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ color: "var(--gold)", marginTop: "2px", flexShrink: 0, fontSize: "0.7rem" }}>◆</span>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
                    fontSize: "0.9rem", color: "var(--cream-dim)", lineHeight: 1.6,
                  }}>
                    {f}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
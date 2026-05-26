const steps = [
  {
    num: "01",
    title: "Guest calls your number",
    description:
      "No new hardware, no new SIM. Your existing hotel phone number rings — the AI receptionist picks up instantly. Zero hold time.",
  },
  {
    num: "02",
    title: "Agent handles the conversation",
    description:
      "Sarvam AI's speech engine understands Hindi and English — real accents, not textbook speech. Availability, pricing, amenities, bookings: all handled in under a second.",
  },
  {
    num: "03",
    title: "Booking confirmed. Calendar updated.",
    description:
      "Reservations sync to your Google Calendar or PMS in real time. Your front desk sees every call logged and summarised in the dashboard.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-wrap">
      <hr className="hairline" style={{ marginBottom: "5rem" }} />
      <div className="two-col" style={{ flexWrap: "wrap", gap: "3rem 5rem" }}>
        <div className="two-col-label">
          <span className="section-label reveal">How it works</span>
        </div>
        <div className="two-col-content">
          <h2 className="section-title reveal reveal-delay-1">Answers the call.<br /><em>Every time.</em></h2>
          <p className="section-body reveal reveal-delay-2" style={{ marginBottom: "2.5rem" }}>
            From the moment a guest dials your number to a confirmed reservation —
            here is what happens behind the scenes.
          </p>

          <div className="steps-grid reveal reveal-delay-3">
            {steps.map((s) => (
              <div key={s.num} className="feature-cell" style={{ padding: "1.75rem 1.5rem" }}>
                <span className="mono" style={{
                  color: "var(--muted)", fontSize: "9px", display: "block", marginBottom: "1rem",
                }}>
                  {s.num}
                </span>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif", fontWeight: 400,
                  fontSize: "1.3rem", color: "var(--cream)", marginBottom: "0.75rem", lineHeight: 1.3,
                }}>
                  {s.title}
                </h3>
                <p className="body-text" style={{ fontSize: "0.875rem", maxWidth: "32ch" }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
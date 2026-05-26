const plans = [
  {
    tier: "Front Desk",
    name: "Starter",
    price: "₹15,000",
    setup: "₹30,000",
    minutes: "750",
    overage: "₹6",
    featured: false,
    features: [
      "Voice calls — English & Hindi",
      "FAQ answering",
      "Availability checks",
      "Google Calendar sync",
      "Call logs & summaries",
      "Email support",
    ],
  },
  {
    tier: "Concierge",
    name: "Growth",
    price: "₹25,000",
    setup: "₹55,000",
    minutes: "1,500",
    overage: "₹5",
    featured: true,
    features: [
      "Everything in Front Desk",
      "Full booking management",
      "PMS integration (Opera, Cloudbeds)",
      "Payment collection over call",
      "Cancellation & modification handling",
      "Priority support & onboarding call",
    ],
  },
  {
    tier: "Chief of Staff",
    name: "Pro",
    price: "₹35,000",
    setup: "₹80,000",
    minutes: "3,000",
    overage: "₹4",
    featured: false,
    features: [
      "Everything in Concierge",
      "Custom integrations",
      "Multi-property support",
      "Dedicated account manager",
      "Monthly performance review",
      "SLA-backed uptime guarantee",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-wrap">
      <hr className="hairline" style={{ marginBottom: "5rem" }} />
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <span className="section-label reveal" style={{ display: "inline-block" }}>Pricing</span>
        <h2 className="section-title reveal reveal-delay-1" style={{ maxWidth: "none" }}>
          Simple, transparent plans
        </h2>
        <p className="section-body reveal reveal-delay-2" style={{ margin: "0 auto", textAlign: "center", maxWidth: "46ch" }}>
          No hidden fees. Cancel anytime. Get in touch to discuss a custom setup for your property.
        </p>
      </div>

      <div className="setup-callout reveal reveal-delay-2">
        <span style={{ color: "var(--gold)", fontSize: "0.65rem", marginTop: "3px", flexShrink: 0 }}>◆</span>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
          fontSize: "0.875rem", color: "var(--muted-light)", lineHeight: 1.65,
        }}>
          <span style={{ color: "var(--cream)" }}>Setup fee covers full onboarding by our engineering team</span> — phone
          routing, PMS integration, FAQ training, test calls, and go-live support.
          You pay once, we handle everything.
        </p>
      </div>

      <div className="pricing-grid reveal reveal-delay-3">
        {plans.map((p) => (
          <div key={p.tier} className={`pricing-card${p.featured ? " featured" : ""}`}>
            {p.featured && <div className="featured-badge">Most Popular</div>}

            <div style={{ marginBottom: "0.4rem" }}>
              <span className="mono" style={{
                color: p.featured ? "var(--gold)" : "var(--muted)", fontSize: "10px",
              }}>
                {p.tier}
              </span>
            </div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem",
              fontWeight: 400, color: "var(--cream)", marginBottom: "1.75rem",
            }}>
              {p.name}
            </div>

            <div style={{ marginBottom: "0.4rem" }}>
              <span style={{
                fontFamily: "'Cormorant Garamond', serif", fontSize: "2.8rem",
                fontWeight: 300, color: p.featured ? "var(--gold)" : "var(--cream)",
              }}>
                {p.price}
              </span>
              <span className="mono" style={{ color: "var(--muted)", fontSize: "10px", marginLeft: "0.4rem" }}>/mo</span>
            </div>
            <div className="mono" style={{ color: "var(--muted)", fontSize: "10px", marginBottom: "0.3rem" }}>
              Setup: {p.setup}
            </div>
            <div className="mono" style={{ color: "var(--muted)", fontSize: "10px", marginBottom: "2rem" }}>
              {p.minutes} min/mo · Overage {p.overage}/min
            </div>

            <hr style={{ border: "none", borderTop: "1px solid var(--border)", marginBottom: "1.75rem" }} />

            <ul style={{
              listStyle: "none", display: "flex", flexDirection: "column",
              gap: "0.85rem", marginBottom: "2.5rem", flex: 1,
            }}>
              {p.features.map((f, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
                  <span style={{ color: "var(--gold)", fontSize: "0.6rem", flexShrink: 0, marginTop: "4px" }}>◆</span>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
                    fontSize: "0.875rem", color: "var(--cream-dim)", lineHeight: 1.5,
                  }}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="mailto:hello@torqdesigns.com"
              className={p.featured ? "btn-primary" : "btn-outline"}
              style={{ justifyContent: "center", width: "100%" }}
            >
              Get Started
            </a>
          </div>
        ))}
      </div>

      <p className="mono" style={{
        color: "var(--muted)", textAlign: "center", marginTop: "2.5rem", fontSize: "10px",
      }}>
        Get in touch to schedule a demo or discuss a custom setup
      </p>
    </section>
  );
}
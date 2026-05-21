const integrationGroups = [
  { category: "Property Management", items: ["Opera", "Cloudbeds", "Hotelogix"] },
  { category: "Calendar",            items: ["Google Calendar"] },
];

const visibilityCards = [
  {
    icon: "◈",
    title: "Live dashboard",
    subtitle: "Every call. Every booking. In one place.",
    bullets: [
      "Live call activity feed",
      "Per-call summaries with intent detected",
      "Booking and inquiry reports",
      "Missed query alerts — know what the agent couldn't answer",
    ],
  },
  {
    icon: "◎",
    title: "Human takeover",
    subtitle: "Your team stays in control — always.",
    bullets: [
      "Monitor any live call in real time",
      "One-tap handoff to your front desk staff",
      "Agent flags complex or sensitive calls automatically",
      "No guest ever feels abandoned",
    ],
  },
];

export default function VisibilityIntegrations() {
  return (
    <section className="section-wrap">
      <hr className="hairline" style={{ marginBottom: "5rem" }} />

      <div className="two-col" style={{ flexWrap: "wrap", gap: "3rem 5rem" }}>
        <div className="two-col-label">
          <span className="section-label">Visibility & Integrations</span>
        </div>

        <div className="two-col-content">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}>

            {/* Cards 1 & 2: Visibility */}
            {visibilityCards.map((card) => (
              <div
                key={card.title}
                style={{
                  background: "var(--charcoal-2)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  padding: "2rem",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-light)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <div style={{
                  width: "40px", height: "40px",
                  background: "var(--gold-dim)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: "10px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1.25rem",
                  color: "var(--gold)", fontSize: "1rem",
                }}>
                  {card.icon}
                </div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif", fontWeight: 400,
                  fontSize: "1.4rem", color: "var(--cream)", marginBottom: "0.4rem",
                }}>
                  {card.title}
                </h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
                  fontSize: "0.85rem", color: "var(--muted)", marginBottom: "1.5rem",
                  lineHeight: 1.6,
                }}>
                  {card.subtitle}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {card.bullets.map((b, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
                      <span style={{ color: "var(--gold)", fontSize: "0.65rem", flexShrink: 0, marginTop: "4px" }}>◆</span>
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
                        fontSize: "0.875rem", color: "var(--cream-dim)", lineHeight: 1.5,
                      }}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Card 3: Integrations */}
            <div
              style={{
                background: "var(--charcoal-2)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "2rem",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div style={{
                width: "40px", height: "40px",
                background: "var(--gold-dim)",
                border: "1px solid rgba(201,168,76,0.2)",
                borderRadius: "10px",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "1.25rem",
                color: "var(--gold)", fontSize: "1rem",
              }}>
                ◫
              </div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif", fontWeight: 400,
                fontSize: "1.4rem", color: "var(--cream)", marginBottom: "0.4rem",
              }}>
                Integrations
              </h3>
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
                fontSize: "0.85rem", color: "var(--muted)", marginBottom: "1.5rem",
                lineHeight: 1.6,
              }}>
                Works with your existing stack.
              </p>

              {/* Category + name list */}
<div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
  {integrationGroups.map((group) => (
    <div key={group.category}>
      <span className="mono" style={{
        fontSize: "9px",
        color: "var(--gold)",
        display: "block",
        marginBottom: "0.4rem",
        letterSpacing: "0.08em",
      }}>
        {group.category}
      </span>
      <span style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 300,
        fontSize: "0.875rem",
        color: "var(--cream-dim)",
        lineHeight: 1.6,
      }}>
        {group.items.join(" · ")}
      </span>
    </div>
  ))}
</div>

            
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
const milestones = [
  {
    day: "Day 1",
    title: "Discovery call",
    description: "We learn your property, phone setup, and the queries your guests ask most",
    live: false,
  },
  {
    day: "Day 7",
    title: "Agent configured",
    description: "Voice, FAQ, and booking flows built specifically for your hotel",
    live: false,
  },
  {
    day: "Day 14",
    title: "Test calls begin",
    description: "Your team speaks to the agent and gives feedback — we refine",
    live: false,
  },
  {
    day: "Day 21",
    title: "Staff briefing",
    description: "Your front desk learns the dashboard and the handoff process",
    live: false,
  },
  {
    day: "Day 30",
    title: "Live on your line",
    description: "Agent answers real guest calls on your existing phone number",
    live: true,
  },
];

export default function OnboardingTimeline() {
  return (
    <section className="section-wrap">
      <hr className="hairline" style={{ marginBottom: "5rem" }} />

      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <span className="section-label" style={{ display: "inline-block" }}>Onboarding</span>
        <h2 className="section-title" style={{ maxWidth: "none" }}>
          From kickoff to live calls —<br /><em>in 30 days</em>
        </h2>
        <p className="section-body" style={{ margin: "1rem auto 0", textAlign: "center", maxWidth: "48ch" }}>
          Our engineering team handles the full setup — phone routing, PMS
          connections, FAQ training, test calls. You don't write a line of code
          or touch a single config file.
        </p>
      </div>

      {/* Desktop timeline */}
      <div style={{ overflowX: "auto", paddingBottom: "1rem" }}>
        <div style={{ minWidth: "700px", position: "relative", padding: "4rem 0" }}>

          {/* Track line */}
          <div style={{
            position: "absolute",
            top: "50%",
            left: "5%",
            right: "5%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, var(--border-light) 10%, var(--gold) 100%)",
            transform: "translateY(-50%)",
          }} />

          {/* Nodes */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 5%",
            position: "relative",
          }}>
            {milestones.map((m, i) => {
              const isAbove = i % 2 === 0;
              return (
                <div
                  key={m.day}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 0,
                    flex: 1,
                    maxWidth: "160px",
                  }}
                >
                  {/* Top label */}
                  <div style={{ height: "90px", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", marginBottom: "0.75rem" }}>
                    {isAbove && (
                      <>
                        <span className="mono" style={{ color: m.live ? "var(--gold)" : "var(--muted)", fontSize: "9px", marginBottom: "0.35rem" }}>
                          {m.day}{m.live ? " · LIVE" : ""}
                        </span>
                        <span style={{
                          fontFamily: "'Cormorant Garamond', serif", fontWeight: 400,
                          fontSize: "1rem", color: "var(--cream)", textAlign: "center",
                          lineHeight: 1.2, marginBottom: "0.4rem",
                        }}>
                          {m.title}
                        </span>
                        <span style={{
                          fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
                          fontSize: "0.75rem", color: "var(--muted)", textAlign: "center",
                          lineHeight: 1.45,
                        }}>
                          {m.description}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Dot */}
                  <div style={{
                    width: m.live ? "14px" : "10px",
                    height: m.live ? "14px" : "10px",
                    borderRadius: "50%",
                    background: m.live ? "var(--gold)" : "var(--charcoal-3)",
                    border: `2px solid ${m.live ? "var(--gold)" : "var(--border-light)"}`,
                    boxShadow: m.live ? "0 0 12px rgba(252,204,0,0.4)" : "none",
                    flexShrink: 0,
                    zIndex: 1,
                  }} />

                  {/* Bottom label */}
                  <div style={{ height: "90px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", marginTop: "0.75rem" }}>
                    {!isAbove && (
                      <>
                        <span className="mono" style={{ color: m.live ? "var(--gold)" : "var(--muted)", fontSize: "9px", marginBottom: "0.35rem" }}>
                          {m.day}{m.live ? " · LIVE" : ""}
                        </span>
                        <span style={{
                          fontFamily: "'Cormorant Garamond', serif", fontWeight: 400,
                          fontSize: "1rem", color: "var(--cream)", textAlign: "center",
                          lineHeight: 1.2, marginBottom: "0.4rem",
                        }}>
                          {m.title}
                        </span>
                        <span style={{
                          fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
                          fontSize: "0.75rem", color: "var(--muted)", textAlign: "center",
                          lineHeight: 1.45,
                        }}>
                          {m.description}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Forward-deployed team card */}
      <div style={{
        marginTop: "3.5rem",
        background: "linear-gradient(135deg, var(--charcoal-2) 0%, var(--charcoal-3) 100%)",
        border: "1px solid var(--border-light)",
        borderRadius: "16px",
        padding: "2.5rem",
        display: "flex",
        gap: "2rem",
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}>
        <div style={{
          width: "44px", height: "44px", flexShrink: 0,
          background: "var(--gold-dim)",
          border: "1px solid rgba(201,168,76,0.25)",
          borderRadius: "12px",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.1rem", color: "var(--gold)",
        }}>
          ◉
        </div>
        <div style={{ flex: 1, minWidth: "240px" }}>
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif", fontWeight: 400,
            fontSize: "1.35rem", color: "var(--cream)", marginBottom: "0.5rem",
          }}>
            We set it all up for you
          </h3>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
            fontSize: "0.9rem", color: "var(--muted-light)", lineHeight: 1.7,
            maxWidth: "52ch",
          }}>
            Our forward-deployed engineering team handles onboarding end-to-end —
            configuring your phone routing, integrating your calendar and PMS,
            training the agent on your property, and running test calls before
            you go live. Included in your setup fee.
          </p>
        </div>
      </div>
    </section>
  );
}
const cases = [
  {
    label: "01",
    title: "Hotels",
    description: "Handle check-in queries, room availability, pricing, and amenities round the clock without front-desk staff.",
  },
  {
    label: "02",
    title: "Travel Agencies",
    description: "Answer package queries, itinerary questions, and booking requests in the customer's own language.",
  },
  {
    label: "03",
    title: "Serviced Apartments",
    description: "Manage guest onboarding, maintenance requests, and checkout — all over a simple voice call.",
  },
];

export default function UseCases() {
  return (
    <section className="section-wrap">
      <hr className="hairline" style={{ marginBottom: "5rem" }} />
      <div className="two-col" style={{ flexWrap: "wrap", gap: "3rem 5rem" }}>
        <div className="two-col-label">
          <span className="section-label reveal">Use cases</span>
        </div>
        <div className="two-col-content">
          <h2 className="section-title reveal reveal-delay-1">Built for<br /><em>hospitality</em></h2>

          <div className="cases-grid reveal reveal-delay-2">
            {cases.map((c) => (
              <div key={c.label} className="feature-cell" style={{ padding: "1.75rem 1.5rem" }}>
                <span className="mono" style={{
                  color: "var(--muted)", fontSize: "9px", display: "block", marginBottom: "1rem",
                }}>
                  {c.label}
                </span>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif", fontWeight: 400,
                  fontSize: "1.5rem", color: "var(--cream)", marginBottom: "0.5rem",
                }}>
                  {c.title}
                </h3>
                <p className="body-text" style={{ fontSize: "0.9rem" }}>
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
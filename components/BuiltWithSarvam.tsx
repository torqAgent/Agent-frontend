const stack = [
  { label: "Speech-to-Text", value: "Sarvam Saaras", gold: true },
  { label: "Text-to-Speech", value: "Sarvam Bulbul",  gold: true },
  { label: "Agent Framework", value: "LiveKit Agents", gold: false },
  { label: "Frontend",        value: "Next.js",        gold: false },
  { label: "Deploy",          value: "Vercel",         gold: false },
  { label: "Languages",       value: "Hindi & English",gold: false },
];

export default function BuiltWithSarvam() {
  return (
    <section className="section-wrap">
      <hr className="hairline" style={{ marginBottom: "5rem" }} />
      <div className="two-col" style={{ flexWrap: "wrap", gap: "3rem 5rem" }}>
        <div className="two-col-label">
          <span className="section-label">Technology</span>
        </div>
        <div className="two-col-content">
          <h2 className="section-title">Built with<br /><em>Sarvam AI</em></h2>
          <p className="section-body" style={{ marginBottom: "2.5rem" }}>
            India-first speech models trained on Hindi, English, and regional
            accents — built to understand real guests, not textbook speech.
          </p>
          <div className="feature-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))" }}>
            {stack.map((item) => (
              <div key={item.label} className="feature-cell">
                <span className="mono" style={{ color: "var(--muted)", fontSize: "9px", display: "block", marginBottom: "0.5rem" }}>{item.label}</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.9rem", color: item.gold ? "var(--gold)" : "var(--cream)" }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
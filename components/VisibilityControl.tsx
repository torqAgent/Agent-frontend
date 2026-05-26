"use client";

import { useState } from "react";

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

const TABS = [
  { id: "overview",  label: "Overview",  img: "/dashboard-overview.png",  caption: "Live bookings, revenue MTD, occupancy rate and call activity — all in one glance." },
  { id: "rooms",     label: "Rooms",     img: "/dashboard-rooms.png",     caption: "Every room's availability and booking history, updated in real time." },
  { id: "bookings",  label: "Bookings",  img: "/dashboard-bookings.png",  caption: "Full booking ledger with guest names, phone, check-in/out dates and revenue." },
  { id: "analytics", label: "Analytics", img: "/dashboard-analytics.png", caption: "Booking trends, room type breakdown and availability charts — always live." },
];

function DashboardMockup() {
  const [active, setActive] = useState("overview");
  const current = TABS.find((t) => t.id === active)!;

  return (
    <div style={{ marginTop: "2.5rem" }}>
      <div className="tab-switcher">
        {TABS.map((tab) => {
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase",
                padding: "0.55rem 1.1rem", borderRadius: 99, border: "none", cursor: "pointer",
                transition: "all 0.2s",
                background: isActive ? "var(--gold)" : "transparent",
                color: isActive ? "#0a0806" : "var(--muted)",
                fontWeight: isActive ? 600 : 400,
                boxShadow: isActive ? "0 2px 10px rgba(232,170,42,0.25)" : "none",
                whiteSpace: "nowrap",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div style={{
        borderRadius: 14, overflow: "hidden",
        border: "1px solid var(--border)",
        background: "var(--charcoal-2)",
        boxShadow: "0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.03)",
      }}>
        <div style={{
          height: 38, background: "var(--charcoal-3)",
          borderBottom: "1px solid var(--border)",
          display: "flex", alignItems: "center",
          padding: "0 1rem", gap: 8,
        }}>
          {["#ff5f56","#ffbd2e","#27c93f"].map((c) => (
            <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.8, flexShrink: 0 }} />
          ))}
          <div style={{
            flex: 1, margin: "0 0.75rem",
            background: "var(--charcoal-4, rgba(255,255,255,0.04))",
            border: "1px solid var(--border)",
            borderRadius: 99, height: 22,
            display: "flex", alignItems: "center", paddingLeft: 10, gap: 6,
          }}>
            <svg width="8" height="8" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <rect x="1" y="4" width="10" height="7" rx="1.5" stroke="var(--muted)" strokeWidth="1.2"/>
              <path d="M4 4V3a2 2 0 0 1 4 0v1" stroke="var(--muted)" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <span style={{ fontFamily: "monospace", fontSize: 8, color: "var(--muted)", letterSpacing: "0.1em" }}>
              dashboard.torqdesigns.com
            </span>
          </div>
          <div style={{
            display: "flex", alignItems: "center", gap: 5,
            background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)",
            borderRadius: 99, padding: "3px 10px",
          }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
            <span style={{ fontFamily: "monospace", fontSize: 7, color: "#4ade80", letterSpacing: "0.15em", textTransform: "uppercase" }}>Live</span>
          </div>
        </div>

        <div style={{ position: "relative", lineHeight: 0 }}>
          <img
            src={current.img}
            alt={current.label}
            className="dashboard-img"
          />
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: 60,
            background: "linear-gradient(to bottom, transparent, var(--charcoal-2))",
            pointerEvents: "none",
          }} />
        </div>
      </div>

      <p style={{
        marginTop: 12, fontFamily: "'DM Mono', monospace",
        fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)",
      }}>
        {current.caption}
      </p>
    </div>
  );
}

export default function VisibilityIntegrations() {
  return (
    <section className="section-wrap">
      <hr className="hairline" style={{ marginBottom: "5rem" }} />

      <div className="two-col" style={{ flexWrap: "wrap", gap: "3rem 5rem" }}>
        <div className="two-col-label">
          <span className="section-label reveal">Visibility & Integrations</span>
        </div>

        <div className="two-col-content">
          <div className="visibility-cards-grid reveal reveal-delay-1">
            {visibilityCards.map((card) => (
              <div
                key={card.title}
                style={{
                  background: "var(--charcoal-2)", border: "1px solid var(--border)",
                  borderRadius: 16, padding: "2rem", transition: "border-color 0.25s, transform 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-light)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{
                  width: 40, height: 40, background: "var(--gold-dim)",
                  border: "1px solid rgba(201,168,76,0.2)", borderRadius: 10,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1.25rem", color: "var(--gold)", fontSize: "1rem",
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
                  fontSize: "0.85rem", color: "var(--muted)", marginBottom: "1.5rem", lineHeight: 1.6,
                }}>
                  {card.subtitle}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {card.bullets.map((b, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
                      <span style={{ color: "var(--gold)", fontSize: "0.6rem", flexShrink: 0, marginTop: 4 }}>◆</span>
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
                        fontSize: "0.875rem", color: "var(--cream-dim)", lineHeight: 1.5,
                      }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div
              style={{
                background: "var(--charcoal-2)", border: "1px solid var(--border)",
                borderRadius: 16, padding: "2rem", transition: "border-color 0.25s, transform 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-light)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{
                width: 40, height: 40, background: "var(--gold-dim)",
                border: "1px solid rgba(201,168,76,0.2)", borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "1.25rem", color: "var(--gold)", fontSize: "1rem",
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
                fontSize: "0.85rem", color: "var(--muted)", marginBottom: "1.5rem", lineHeight: 1.6,
              }}>
                Works with your existing stack.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {integrationGroups.map((group) => (
                  <div key={group.category}>
                    <span className="mono" style={{
                      fontSize: 9, color: "var(--gold)", display: "block",
                      marginBottom: "0.4rem", letterSpacing: "0.08em",
                    }}>
                      {group.category}
                    </span>
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
                      fontSize: "0.875rem", color: "var(--cream-dim)", lineHeight: 1.6,
                    }}>
                      {group.items.join(" · ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-3">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
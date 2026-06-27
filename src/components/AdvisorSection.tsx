import { site } from "@/data/site";

export function AdvisorSection() {
  return (
    <section id="advisor" className="section section-alt">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.85fr) minmax(0, 1.15fr)",
            gap: 64,
            alignItems: "start",
          }}
          className="advisor-grid"
        >
          {/* Portrait placeholder — neutral silhouette */}
          <div>
            <div
              aria-label="Portrait of Swetha Ranganathan — coming soon"
              role="img"
              style={{
                position: "relative",
                aspectRatio: "4 / 5",
                background:
                  "linear-gradient(180deg, #ecebe7 0%, #d8d6d0 100%)",
                border: "1px solid var(--border-strong)",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              {/* Subtle silhouette */}
              <svg
                viewBox="0 0 200 250"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
                aria-hidden
              >
                <defs>
                  <linearGradient id="sil" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#bcb9b1" />
                    <stop offset="1" stopColor="#9c988f" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="92" r="36" fill="url(#sil)" />
                <path
                  d="M30,260 C30,190 60,160 100,160 C140,160 170,190 170,260 Z"
                  fill="url(#sil)"
                />
              </svg>
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  margin: 16,
                  padding: "10px 14px",
                  background: "rgba(255,255,255,0.92)",
                  border: "1px solid var(--border)",
                  borderRadius: 6,
                  fontSize: "0.78rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--color-primary)",
                  fontWeight: 600,
                }}
              >
                Portrait coming soon
              </div>
            </div>
            <div
              style={{
                marginTop: 16,
                padding: "16px 20px",
                background: "var(--color-primary)",
                color: "var(--color-white)",
                borderRadius: "var(--radius-sm)",
                borderLeft: "3px solid var(--color-secondary)",
              }}
            >
              <div style={{ fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600 }}>
                Founder
              </div>
              <div style={{ marginTop: 4, fontWeight: 600 }}>
                Swetha Ranganathan
              </div>
              <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)" }}>
                Chartered Accountant
              </div>
            </div>
          </div>

          <div>
            <span className="eyebrow">Meet Your Advisor</span>
            <h2 style={{ marginBottom: 24 }}>
              Meet Swetha Ranganathan, Founder & Chartered Accountant
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", marginBottom: 20 }}>
              Swetha Ranganathan is a Chartered Accountant dedicated to helping
              scaling corporations and high-growth ventures align fast
              operational models with rock-solid compliance frameworks.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: 20 }}>
              With over a decade of hands-on corporate finance experience, Swetha
              brings deep pedigree from major advisory ecosystems. Her
              professional background includes pivotal tenures at top-tier
              institutions like BDO India, Tata Consulting Engineers, MGB
              Advisors, and HNA LLP (formerly Hiregange and Associates).
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: 32 }}>
              Her cross-industry advisory expertise spans engineering
              consultancy, real estate, hospitality, manufacturing, and
              educational institutions—giving her a rare vantage point on
              operational risk and fiscal architecture.
            </p>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Connect on LinkedIn ↗
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .advisor-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

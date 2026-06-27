import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="top"
      className="grid-bg-light"
      style={{
        position: "relative",
        paddingTop: "clamp(72px, 11vw, 140px)",
        paddingBottom: "clamp(72px, 11vw, 140px)",
        background: "var(--surface-alt)",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(900px 360px at 85% 0%, rgba(243,121,32,0.08), transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <div className="container" style={{ position: "relative" }}>
        <div style={{ maxWidth: 880 }}>
          <span className="eyebrow">Chartered Accountant · Bengaluru</span>
          <h1 style={{ marginBottom: 24 }}>
            Strategic Financial Clarity for{" "}
            <span style={{ color: "var(--color-secondary)" }}>
              Ambitious Businesses
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--text-muted)",
              maxWidth: 680,
              marginBottom: 36,
            }}
          >
            Strategy Circle is the financial advisory and compliance partner for
            high-growth startups, scale-ups, and corporate teams. We combine
            rigorous CA expertise with sharp commercial judgment to deliver
            structural clarity.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <a href="#services" className="btn btn-primary">
              Explore Our Services
            </a>
            <a href={site.calendlyUrl} className="text-link">
              Book a Strategy Consultation →
            </a>
          </div>
        </div>

        <div
          style={{
            marginTop: 72,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
            borderTop: "1px solid var(--border-strong)",
            borderBottom: "1px solid var(--border-strong)",
          }}
          className="hero-stats"
        >
          {[
            ["10+", "Years of CA expertise"],
            ["6", "Advisory service lines"],
            ["Multi", "Sector experience"],
            ["Partner", "Led engagements"],
          ].map(([k, v], i) => (
            <div
              key={k}
              style={{
                padding: "28px 24px",
                borderLeft: i === 0 ? "none" : "1px solid var(--border-strong)",
              }}
            >
              <div
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  color: "var(--color-primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                {k}
              </div>
              <div
                style={{
                  marginTop: 4,
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontWeight: 500,
                }}
              >
                {v}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .hero-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .hero-stats > div:nth-child(2) { border-left: 1px solid var(--border-strong) !important; }
          .hero-stats > div:nth-child(3) { border-left: none !important; border-top: 1px solid var(--border-strong); }
          .hero-stats > div:nth-child(4) { border-top: 1px solid var(--border-strong); }
        }
      `}</style>
    </section>
  );
}

import { differencePillars } from "@/data/difference";

export function DifferenceGrid() {
  return (
    <section id="difference" className="section section-alt">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 56 }}>
          <span className="eyebrow">The Strategy Circle Difference</span>
          <h2>Why Ambitious Teams Choose Us</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 0,
            border: "1px solid var(--border-strong)",
            background: "var(--color-white)",
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
          }}
        >
          {differencePillars.map((p, i) => (
            <div
              key={p.title}
              style={{
                padding: "36px 32px",
                borderRight: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
                position: "relative",
              }}
              className={`pillar-cell pillar-${i}`}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 40,
                  height: 3,
                  background: "var(--color-secondary)",
                }}
              />
              <div
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-secondary)",
                  fontWeight: 600,
                  marginBottom: 14,
                }}
              >
                {p.label}
              </div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  marginBottom: 12,
                  color: "var(--color-primary)",
                }}
              >
                {p.title}
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
                {p.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 56 }}>
          <span className="eyebrow">Expertise & Advisory</span>
          <h2 style={{ marginBottom: 18 }}>Tailored Financial Infrastructure</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
            Comprehensive financial advisory and compliance architecture, designed
            to protect and accelerate businesses at every stage of growth.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {services.map((s) => (
            <article key={s.number} className="card service-card">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: "var(--color-secondary)",
                    letterSpacing: "0.14em",
                  }}
                >
                  {s.number}
                </span>
                <span
                  aria-hidden
                  style={{
                    width: 36,
                    height: 1,
                    background: "var(--border-strong)",
                  }}
                />
              </div>
              <h3 style={{ marginBottom: 12, color: "var(--color-primary)" }}>
                {s.title}
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
                {s.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Logo } from "./Logo";
import { footerLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: "var(--color-dark)",
        color: "var(--color-light-gray)",
        paddingTop: 72,
        paddingBottom: 28,
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1.1fr",
            gap: 48,
          }}
          className="footer-grid"
        >
          <div>
            <div style={{ filter: "brightness(0) invert(1)" }}>
              <Logo light />
            </div>
            <p
              style={{
                marginTop: 18,
                color: "rgba(255,255,255,0.65)",
                fontSize: "0.92rem",
                maxWidth: 320,
              }}
            >
              Financial Advisory & Compliance Consulting for startups, scale-ups,
              and corporate teams.
            </p>
          </div>

          <FooterCol title="Quick Links">
            {footerLinks.quick.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="footer-link">{l.label}</a>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Services">
            {footerLinks.services.map((s) => (
              <li key={s} style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", padding: "6px 0" }}>
                {s}
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Contact">
            <li><a href={`mailto:${site.email}`} className="footer-link">{site.email}</a></li>
            <li><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="footer-link">{site.phone}</a></li>
            <li style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", padding: "6px 0" }}>
              {site.location}
            </li>
          </FooterCol>
        </div>

        <div
          style={{
            marginTop: 56,
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            fontSize: "0.82rem",
            color: "rgba(255,255,255,0.5)",
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "space-between",
          }}
        >
          <span>© 2026 Strategy Circle. All rights reserved.</span>
          <span>CA Swetha Ranganathan · Privacy Policy · Terms of Use</span>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: rgba(255,255,255,0.75);
          font-size: 0.9rem;
          display: inline-block;
          padding: 6px 0;
          transition: color 160ms ease;
        }
        .footer-link:hover { color: var(--color-gold); }
        @media (max-width: 800px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4
        style={{
          color: "var(--color-white)",
          fontSize: "0.78rem",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          marginBottom: 14,
          fontWeight: 600,
        }}
      >
        {title}
      </h4>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>{children}</ul>
    </div>
  );
}

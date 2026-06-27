import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { nav, site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "saturate(140%) blur(10px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        <Link to="/" aria-label="Strategy Circle home">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="primary-nav">
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: 32,
              margin: 0,
              padding: 0,
              alignItems: "center",
            }}
          >
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  style={{
                    fontSize: "0.92rem",
                    fontWeight: 500,
                    color: "var(--text)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-secondary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text)")
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={site.calendlyUrl}
          className="btn btn-primary header-cta"
          style={{ padding: "12px 20px", fontSize: "0.875rem" }}
        >
          Book Consultation
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="menu-toggle"
          style={{
            display: "none",
            background: "transparent",
            border: "1px solid var(--border-strong)",
            borderRadius: 6,
            padding: "8px 10px",
            cursor: "pointer",
          }}
        >
          <span style={{ display: "block", width: 18, height: 2, background: "var(--color-primary)", marginBottom: 4 }} />
          <span style={{ display: "block", width: 18, height: 2, background: "var(--color-primary)", marginBottom: 4 }} />
          <span style={{ display: "block", width: 18, height: 2, background: "var(--color-primary)" }} />
        </button>
      </div>

      {open && (
        <div
          className="mobile-nav"
          style={{
            borderTop: "1px solid var(--border)",
            background: "var(--color-white)",
          }}
        >
          <div className="container" style={{ padding: "16px 24px 24px" }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 4 }}>
              {nav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: "block",
                      padding: "12px 0",
                      fontSize: "1rem",
                      fontWeight: 500,
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={site.calendlyUrl}
              className="btn btn-primary"
              onClick={() => setOpen(false)}
              style={{ marginTop: 16, width: "100%" }}
            >
              Book Consultation
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 880px) {
          .primary-nav, .header-cta { display: none !important; }
          .menu-toggle { display: inline-block !important; }
        }
      `}</style>
    </header>
  );
}

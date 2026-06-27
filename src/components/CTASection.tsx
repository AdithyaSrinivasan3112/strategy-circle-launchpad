import { site } from "@/data/site";

export function CTASection() {
  return (
    <section
      className="section section-dark grid-bg"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(700px 300px at 85% 100%, rgba(243,121,32,0.18), transparent 60%)",
        }}
      />
      <div className="container" style={{ position: "relative", textAlign: "center" }}>
        <span className="eyebrow" style={{ justifyContent: "center" }}>
          Get Started
        </span>
        <h2 style={{ maxWidth: 720, margin: "0 auto 20px", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          Let's Build Together
        </h2>
        <p
          style={{
            maxWidth: 640,
            margin: "0 auto 36px",
            color: "rgba(255,255,255,0.75)",
            fontSize: "1.05rem",
          }}
        >
          Whether you are managing complex contracts, building an investor data
          room, or setting up DPDP compliance, secure your financial clarity
          today.
        </p>
        <a href={site.calendlyUrl} className="btn btn-accent" style={{ padding: "16px 28px" }}>
          Schedule a Strategy Call →
        </a>
      </div>
    </section>
  );
}

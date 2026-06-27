import type { Resource } from "@/data/resources";

const typeLabel: Record<Resource["type"], string> = {
  blog: "Blog",
  newsletter: "Newsletter",
  insight: "Insight",
  linkedin: "LinkedIn",
};

export function ResourceCard({ resource }: { resource: Resource }) {
  const isExternal = !!resource.externalUrl;
  const content = (
    <article
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        height: "100%",
        opacity: resource.date === "Coming soon" ? 0.92 : 1,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-secondary)",
            padding: "5px 10px",
            border: "1px solid var(--color-secondary)",
            borderRadius: 4,
          }}
        >
          {typeLabel[resource.type]}
        </span>
        <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
          {resource.date}
        </span>
      </div>
      <h3 style={{ fontSize: "1.1rem", color: "var(--color-primary)" }}>
        {resource.title}
      </h3>
      <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", flex: 1 }}>
        {resource.excerpt}
      </p>
    </article>
  );

  if (isExternal) {
    return (
      <a
        href={resource.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block", height: "100%" }}
      >
        {content}
      </a>
    );
  }
  return content;
}

import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ResourceCard } from "@/components/ResourceCard";
import {
  placeholderResources,
  resourceFilters,
  type ResourceType,
} from "@/data/resources";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources | Strategy Circle" },
      {
        name: "description",
        content:
          "Practical notes, founder-focused insights, and advisory perspectives on finance, compliance, due diligence, and business structuring.",
      },
      { property: "og:title", content: "Resources | Strategy Circle" },
      {
        property: "og:description",
        content:
          "Founder-led insights on finance, compliance, due diligence, and business structuring from Strategy Circle.",
      },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  const [filter, setFilter] = useState<"all" | ResourceType>("all");
  const items =
    filter === "all"
      ? placeholderResources
      : placeholderResources.filter((r) => r.type === filter);

  return (
    <main>
      <section
        className="grid-bg-light"
        style={{
          background: "var(--surface-alt)",
          paddingTop: "clamp(72px, 10vw, 120px)",
          paddingBottom: "clamp(48px, 6vw, 72px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="container">
          <span className="eyebrow">Resources</span>
          <h1 style={{ marginBottom: 20, maxWidth: 760 }}>
            Resources from Strategy Circle
          </h1>
          <p
            style={{
              fontSize: "1.075rem",
              color: "var(--text-muted)",
              maxWidth: 720,
            }}
          >
            Practical notes, founder-focused insights, and advisory perspectives
            on finance, compliance, due diligence, and business structuring.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            role="tablist"
            aria-label="Filter resources"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 40,
              paddingBottom: 24,
              borderBottom: "1px solid var(--border)",
            }}
          >
            {resourceFilters.map((f) => {
              const active = filter === f.value;
              return (
                <button
                  key={f.value}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(f.value)}
                  style={{
                    padding: "10px 18px",
                    fontSize: "0.88rem",
                    fontWeight: 500,
                    borderRadius: 999,
                    border: `1px solid ${active ? "var(--color-primary)" : "var(--border-strong)"}`,
                    background: active ? "var(--color-primary)" : "transparent",
                    color: active ? "var(--color-white)" : "var(--text)",
                    cursor: "pointer",
                    transition: "all 160ms ease",
                  }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          {items.length === 0 ? (
            <p style={{ color: "var(--text-muted)" }}>
              No resources in this category yet. Check back soon.
            </p>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 20,
              }}
            >
              {items.map((r) => (
                <ResourceCard key={r.slug} resource={r} />
              ))}
            </div>
          )}

          <div
            style={{
              marginTop: 56,
              padding: "28px 32px",
              border: "1px dashed var(--border-strong)",
              borderRadius: "var(--radius-md)",
              background: "var(--surface-alt)",
              fontSize: "0.92rem",
              color: "var(--text-muted)",
            }}
          >
            <strong style={{ color: "var(--color-primary)" }}>
              More coming soon.
            </strong>{" "}
            Blog posts, newsletter issues, and LinkedIn articles will appear here
            as they are published.
          </div>
        </div>
      </section>
    </main>
  );
}

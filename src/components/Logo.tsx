// Text-based brand mark. Swap with <img src="/src/assets/images/strategy-circle-logo.svg" />
// once a real logo asset is added.
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        fontWeight: 700,
        fontSize: "1.125rem",
        letterSpacing: "-0.01em",
        color: light ? "var(--color-white)" : "var(--color-primary)",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: 28,
          height: 28,
          borderRadius: 6,
          background: "var(--color-primary)",
          border: "1.5px solid var(--color-secondary)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--color-white)",
          fontSize: "0.75rem",
          fontWeight: 800,
          letterSpacing: 0,
        }}
      >
        SC
      </span>
      Strategy Circle
    </span>
  );
}

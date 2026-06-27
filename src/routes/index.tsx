import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { DifferenceGrid } from "@/components/DifferenceGrid";
import { ServicesSection } from "@/components/ServicesSection";
import { AdvisorSection } from "@/components/AdvisorSection";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Strategy Circle | Financial Advisory & Compliance Consulting" },
      {
        name: "description",
        content:
          "Strategy Circle is a CA-led financial advisory and compliance practice helping startups, scale-ups, and corporate teams build investor-ready, highly compliant, and scalable enterprises.",
      },
      { property: "og:title", content: "Strategy Circle | Financial Advisory & Compliance Consulting" },
      {
        property: "og:description",
        content:
          "CA-led financial advisory and compliance for ambitious businesses. Fractional CFO, due diligence, investment readiness, DPDP and more.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main>
      <Hero />
      <DifferenceGrid />
      <ServicesSection />
      <AdvisorSection />
      <CTASection />
    </main>
  );
}

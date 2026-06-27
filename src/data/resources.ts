// Future-ready resource model. Real entries to be added later.
export type ResourceType = "blog" | "newsletter" | "insight" | "linkedin";

export interface Resource {
  title: string;
  slug: string;
  type: ResourceType;
  date: string;
  excerpt: string;
  externalUrl?: string;
  featured?: boolean;
  body?: string;
}

export const resourceFilters: { label: string; value: "all" | ResourceType }[] = [
  { label: "All", value: "all" },
  { label: "Blog", value: "blog" },
  { label: "Newsletter", value: "newsletter" },
  { label: "Insights", value: "insight" },
  { label: "LinkedIn Articles", value: "linkedin" },
];

export const placeholderResources: Resource[] = [
  {
    title: "Coming soon: Founder-led notes on financial clarity",
    slug: "coming-soon-founder-notes",
    type: "blog",
    date: "Coming soon",
    excerpt:
      "Practical commentary on building investor-ready finance functions, from a CA's vantage point.",
  },
  {
    title: "Coming soon: The Strategy Circle Newsletter",
    slug: "coming-soon-newsletter",
    type: "newsletter",
    date: "Coming soon",
    excerpt:
      "A monthly briefing on tax, compliance, and corporate finance for scaling Indian businesses.",
  },
  {
    title: "Coming soon: Insights on DPDP, due diligence & structuring",
    slug: "coming-soon-insights",
    type: "insight",
    date: "Coming soon",
    excerpt:
      "Field notes from engagements across engineering, real estate, hospitality, manufacturing, and education.",
  },
];

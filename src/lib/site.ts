export const siteConfig = {
  name: "Aryan Madaan",
  title: "Aryan Madaan — Enterprise AI Architect & AI Governance Lead",
  tagline: "Systems don't fail from bad models. They fail from bad trust.",
  description:
    "Enterprise AI architect and AI governance lead. I build enterprise AI that large organisations trust enough to use, and the governance that keeps it safe: lead architect of TDA, used across 5 Tata Group companies, and governance for a fleet of 300+ AI agents.",
  // Update this once a real custom domain is connected — everything else
  // (sitemap, canonical URLs, Open Graph, JSON-LD) derives from this value.
  url: "https://aryanmadaan.vercel.app",
  email: "aryanmadaan321@gmail.com",
  links: {
    github: "https://github.com/Aryan-Madaan",
    linkedin: "https://www.linkedin.com/in/aryan-madaan-a42716212",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Publications", href: "/publications" },
    { label: "Advisory", href: "/advisory" },
    { label: "Writing", href: "/blog" },
    { label: "Puzzles", href: "/puzzles" },
  ],
} as const;

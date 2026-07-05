import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Enterprise AI products built at Tata Steel, plus research projects from undergrad — diffusion models, StyleGAN, CNNs from scratch, time-series forecasting.",
};

const builtByMe = [
  {
    title: "Tata Steel Digital Assistant (TDA)",
    period: "2025 — present",
    body: "Enterprise knowledge assistant built from zero to production in 2 months — past basic retrieval, on knowledge graphs and cross-session memory. Queries across three domains — global public data, internal enterprise systems, and proprietary user data (call recordings, spreadsheets, PDFs) — cutting policy discovery from 2 business days to under a minute. Rolled out to 76,000+ people across 5 group companies.",
  },
  {
    title: "Zen AI",
    period: "2025 — present",
    body: "The low-code platform behind Tata Steel's agent fleet — lets non-data-scientists (developers, frontline managers) build and ship their own AI agents. Built on Google's Agent Development Kit (ADK). Agents built on it now number 300+ across the group, 9 months after launch.",
  },
  {
    title: "Vaani",
    period: "2025 — present",
    body: "A Microsoft Teams voice and conversational bot extending TDA — captures minutes of meeting automatically and answers spoken queries when invoked, across HR, Finance, and Operations.",
  },
  {
    title: "TDA Cowork",
    period: "2025 — present",
    body: "A desktop app extending TDA with local file access and a persistent personal memory layer — context that carries across sessions on your own machine, rather than the shared enterprise-wide chat surface.",
  },
  {
    title: "Code Genie CLI",
    period: "2024 — 2025",
    body: "An internal terminal-based AI coding agent — conceptually similar to today's terminal coding assistants, built before that category had wide adoption. Superseded by agents built on Zen AI.",
  },
];

const fleetIGovern = [
  {
    title: "Safety EyeQ",
    period: "2025 — present",
    body: "A computer-vision agent analyzing live video feeds in high-risk plant zones for SOP adherence — flagging hazards (like equipment near hot material) and pushing real-time alerts for corrective action, in support of Tata Steel's zero lost-time-injury goal.",
  },
  {
    title: "People Care Agent",
    period: "2025 — present",
    body: "A specialized HR-helpdesk agent resolving 70%+ of routine employee tickets autonomously — hours of manual resolution time back for HR teams across the group.",
  },
  {
    title: "Resume Screener",
    period: "2025 — present",
    body: "An AI recruitment tool that pre-screens candidates so HR can spend its time on strategic hiring and candidate engagement instead of manual resume triage — referenced publicly by Tata Steel's Chief People Officer in Forbes India.",
  },
];

const consultingProjects = [
  {
    title: "Financial reporting automation — Indus Insights",
    period: "2024",
    body: "Automated a weekly reporting process from 11 hours to under 1 (91% reduction), and separately cut a finance-metric report script from 6 hours to 4 minutes. Improved SQL pipeline speed by 73% and cut downstream errors by 95% with automated quality frameworks.",
  },
  {
    title: "Credit risk analysis for a US lender — Indus Insights",
    period: "2024",
    body: "Analyzed large-scale datasets for a US-based lender (~$100M revenue), contributing to a 22% reduction in credit risk. Designed 10 Tableau dashboards spanning 40+ key metrics and optimized data storage by eliminating redundant tables — engagement specifics stay under the client NDA.",
  },
];

const researchProjects = [
  {
    title: "Semantic-rich latents via Diffusion Autoencoders",
    period: "2023",
    body: "Fine-tuned Denoising Diffusion Implicit Models (DDIMs) and performed linear interpolation across the latent space for smooth morphing between images. Achieved a Fréchet Inception Distance of ~21, versus 150 from a comparable UNet architecture — coursework-adjacent research done independently.",
  },
  {
    title: "Image generation from text captions using StyleGANs",
    period: "2023",
    body: "Generated multiline captions from 700 one-hot-encoded facial-feature vectors using a refined word2vec model, trained a StyleGAN with a VGG16-derived latent space, and built a text encoder to synthesize images matching described facial features.",
  },
  {
    title: "CNN built from scratch in C++",
    period: "2022",
    body: "Implemented convolution, pooling, and backpropagation with no external ML libraries. Trained on Kaggle's 42,000-image digit set, reaching 96% accuracy on the 28,000-image test set.",
  },
  {
    title: "Statistical forecasting of wind energy",
    period: "2022",
    body: "Modeled Rajasthan meteorological data with ADF/KPSS stationarity tests and ARMA, ARIMA, SARIMA, and LSTM models to forecast wind speeds, evaluated via RMSE/MAE/MAPE — best result: SARIMA at 82.34% accuracy.",
  },
];

function ProjectGrid({
  items,
}: {
  items: { title: string; period: string; body: string }[];
}) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
      {items.map((p, i) => (
        <Reveal key={p.title} delay={(i % 2) * 80}>
          <article className="group h-full border-t-2 border-[var(--color-fg)] p-5 transition-transform duration-300 hover:-translate-y-1">
            <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted)]">
              {p.period}
            </span>
            <h3 className="mt-2 font-[family-name:var(--font-display)] text-base font-semibold transition-colors group-hover:text-[var(--color-signal)]">
              {p.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
              {p.body}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Container className="max-w-3xl py-16 sm:py-24">
      <p className="eyebrow mb-4">Projects</p>
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl">
        What I&apos;ve built, and the fleet I govern.
      </h1>

      <section className="mt-14">
        <p className="eyebrow mb-2">Built by me</p>
        <p className="text-[var(--color-muted)]">
          Products I personally designed and shipped, as part of the AI
          Discovery &amp; Governance function.
        </p>
        <ProjectGrid items={builtByMe} />
      </section>

      <section className="mt-16">
        <p className="eyebrow mb-2">Part of the fleet I govern</p>
        <p className="text-[var(--color-muted)]">
          Built by other teams within the same agentic ecosystem — my role
          covers their governance, security, and compliance, not their
          authorship.
        </p>
        <ProjectGrid items={fleetIGovern} />
        <p className="mt-6 text-sm text-[var(--color-muted)]">
          Independently verifiable:{" "}
          <a
            href="https://www.tatasteel.com/newsroom/press-releases/india/2026/tata-steel-partners-with-google-cloud-to-deploy-a-unified-agentic-ai-across-its-global-value-chain/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-signal)] underline underline-offset-4"
          >
            Tata Steel &amp; Google Cloud press release, April 2026
          </a>{" "}
          on the platform&apos;s scale.
        </p>
      </section>

      <section className="mt-16">
        <p className="eyebrow mb-2">Consulting &amp; analytics — Indus Insights</p>
        <p className="text-[var(--color-muted)]">
          A 6-month Practice School placement doing data science and
          analytics consulting, ahead of the AI-focused roles that followed.
        </p>
        <ProjectGrid items={consultingProjects} />
      </section>

      <section className="mt-16">
        <p className="eyebrow mb-2">Research projects — undergrad</p>
        <p className="text-[var(--color-muted)]">
          Independent and coursework-driven work, mostly generative modeling
          and forecasting, done to understand how the methods work
          underneath.
        </p>
        <ProjectGrid items={researchProjects} />
      </section>

      <div className="mt-16 border-t border-[var(--color-line)] pt-10 text-center">
        <p className="text-[var(--color-muted)]">
          Want the full technical or business case behind any of this?
        </p>
        <Link
          href="/contact?reason=opportunity"
          className="mt-4 inline-block border border-[var(--color-fg)] bg-[var(--color-fg)] px-6 py-3 text-sm font-medium text-[var(--color-bg)] transition-colors hover:border-[var(--color-signal)] hover:bg-[var(--color-signal)]"
        >
          Get in touch
        </Link>
      </div>
    </Container>
  );
}

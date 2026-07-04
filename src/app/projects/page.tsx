import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Enterprise AI products built at Tata Steel, plus research projects from undergrad — diffusion models, StyleGAN, CNNs from scratch, time-series forecasting.",
};

const enterpriseProjects = [
  {
    title: "Tata Steel Digital Assistant (TDA)",
    period: "2025 — present",
    body: "Enterprise RAG assistant built from zero to production in 2 months. 13,000+ active users across 5 group companies, 150+ integrated data sources, cut policy discovery from 2 business days to under a minute.",
  },
  {
    title: "Vaani",
    period: "2025 — present",
    body: "A Microsoft Teams voice and conversational bot extending TDA — captures minutes of meeting automatically and answers spoken queries when invoked, across HR, Finance, and Operations.",
  },
  {
    title: "TDA Cowork",
    period: "2025 — present",
    body: "An in-house desktop application extending TDA with a more personalized layer for individual workflows, rather than the shared enterprise-wide surface.",
  },
  {
    title: "Code Genie CLI",
    period: "2024 — 2025",
    body: "An internal terminal-based AI coding agent — conceptually similar to today's terminal coding assistants, built before that category had wide adoption.",
  },
  {
    title: "No-code AI agent platform",
    period: "2025 — present",
    body: "A platform letting non-engineering teams assemble their own AI agents without writing code — now running 200+ agents across 20 departments.",
  },
];

const researchProjects = [
  {
    title: "Semantic-rich latents via Diffusion Autoencoders",
    period: "2023",
    body: "Fine-tuned Denoising Diffusion Implicit Models (DDIMs) and performed linear interpolation across the latent space for smooth morphing between images. Achieved a Fréchet Inception Distance of ~21, versus 150 from a comparable UNet architecture.",
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
        What I&apos;ve actually shipped.
      </h1>

      <section className="mt-14">
        <p className="eyebrow mb-2">Enterprise AI products — Tata Steel</p>
        <p className="text-[var(--color-muted)]">
          Built as part of the AI Discovery &amp; Governance function, all
          extending or complementing the same core platform.
        </p>
        <ProjectGrid items={enterpriseProjects} />
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
    </Container>
  );
}

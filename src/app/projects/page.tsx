import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "TDA, Tata Steel's enterprise AI platform that I lead, the products built on it, Zen AI, Marshal (an open-source AI governance library), and earlier research and builds.",
};

type Item = {
  title: string;
  period: string;
  body: string;
  badge?: string;
  github?: string;
  site?: string;
};

const tdaNumbers = [
  { value: "76,000+", label: "people it's rolled out to" },
  { value: "13,000+", label: "daily active users" },
  { value: "5", label: "group companies" },
  { value: "2 months", label: "from concept to production" },
];

const tdaSurfaces = [
  "Web",
  "Windows",
  "macOS",
  "Android (native)",
  "iOS (native)",
  "Microsoft Teams",
  "Word",
  "Excel",
  "PowerPoint",
  "Outlook",
  "OneNote",
  "Browser extension",
  "Voice",
];

const tdaDoes = [
  "Answers from SharePoint, enterprise data and a knowledge graph, with a source and verdict for every claim",
  "Handles HR and IT self-service, with explicit approval before any change to a company system",
  "Generates and edits decks, documents, workbooks, dashboards, images, video and podcasts",
  "Cut policy discovery from 2 business days to under a minute",
];

const builtOnTda: Item[] = [
  {
    title: "TDA Secy",
    period: "2026 to now",
    body: "TDA's meeting assistant on Microsoft Teams. It writes minutes with decisions and action items within minutes of a call; higher tiers read the shared screen and can speak, answer and present in the meeting. Audio is deleted once the minutes are written.",
  },
  {
    title: "TDA Cowork",
    period: "2025 to now",
    body: "A desktop app that lets TDA work on your own machine, in the browser, folders, clipboard and screenshots, with feedback on every action and workflows you can record and replay.",
  },
  {
    title: "Live AI dashboards",
    period: "2026",
    body: "Dashboards built from a plain-language request: click-to-filter, drill-down, maps, and an explanation for any number. Cut dashboard creation from months to minutes; built to replace paid BI licences for everyday reporting.",
  },
  {
    title: "Company Graph Studio",
    period: "2026",
    badge: "In development",
    body: "A governed way to build, review and query the company knowledge graph behind TDA's answers. Every change is rule-checked, approved by named people and kept in a tamper-evident history.",
  },
  {
    title: "Governance, the start of AGP",
    period: "2025 to now",
    body: "FinOps with cost attribution by department, threat monitoring and landscape monitoring, built on TDA first. Now being extended to every AI product and model at Tata Steel as the AI Governance Platform.",
  },
];

const platforms: Item[] = [
  {
    title: "Zen AI",
    period: "2026 to now",
    body: "The low-code platform behind Tata Steel's agent fleet. Developers and frontline managers build and ship their own agents, on Google's Agent Development Kit. 300+ agents in 9 months.",
  },
  {
    title: "Project Management System",
    period: "2024 to 2025",
    body: "An idea and project tracker adopted by 100,000+ people, the widest reach of anything I've shipped. It tracks ideas that have enabled ₹400 crore+ in organisation-wide savings.",
  },
  {
    title: "Sarathi",
    period: "2026 to now",
    body: "Voice travel booking: say the trip you need and it surfaces the best flight and hotel options. Cut booking time from about 30 minutes to 5 to 10. Adopted company-wide.",
  },
  {
    title: "Code Genie CLI",
    period: "2025",
    body: "An internal terminal-based AI coding agent, built before that category had wide adoption. Later superseded by agents built on Zen AI.",
  },
];

const fleet: Item[] = [
  {
    title: "Safety EyeQ",
    period: "2025 to now",
    body: "Computer vision on live video in high-risk plant zones, flagging hazards and sending real-time alerts, in support of Tata Steel's zero lost-time-injury goal.",
  },
  {
    title: "People Care Agent",
    period: "2026 to now",
    body: "An HR helpdesk agent that resolves 70%+ of routine employee tickets on its own.",
  },
  {
    title: "Resume Screener",
    period: "2025 to now",
    body: "Pre-screens candidates so HR spends its time on hiring decisions, not triage. Referenced by Tata Steel's Chief People Officer in Forbes India.",
  },
];

const earlier: { heading: string; items: Item[] }[] = [
  {
    heading: "Indus Insights · BITS Pilani Practice School, 2024",
    items: [
      {
        title: "Financial reporting automation",
        period: "2024",
        body: "Cut a weekly reporting process from 11 hours to under 1 (91%) and a finance-metric report from 6 hours to 4 minutes. SQL pipelines 73% faster, downstream errors down 95%.",
      },
      {
        title: "Credit risk analysis for a US lender",
        period: "2024",
        body: "Large-scale analysis for a lender with about $100M revenue, contributing to a 22% reduction in credit risk, plus 10 Tableau dashboards across 40+ metrics. Specifics stay under the client NDA.",
      },
      {
        title: "Retail analytics on public data",
        period: "2024",
        body: "On the public TATA Online Retail dataset: sales patterns, best and worst products by profit, market-basket analysis, customer segmentation, churn and clustering.",
      },
    ],
  },
  {
    heading: "Research and learning projects",
    items: [
      {
        title: "Diffusion autoencoders",
        period: "2023",
        body: "Interpolated in the latent space of Denoising Diffusion Implicit Models to morph between images. Reached an FID of about 21, versus 150 for a comparable UNet.",
      },
      {
        title: "Text-to-image with StyleGANs",
        period: "2023",
        body: "Captions from 700 one-hot-encoded facial-feature vectors via word2vec, a StyleGAN with a VGG16-derived latent space, and a text encoder that generates the described face.",
        github: "https://github.com/Aryan-Madaan/GAN_DL_CLASS_PROJECT",
      },
      {
        title: "CNN from scratch in C++",
        period: "2022",
        body: "Convolution, pooling and backpropagation with no ML libraries. 96% accuracy on a 28,000-image test set.",
        github: "https://github.com/Aryan-Madaan/CNN",
      },
      {
        title: "Wind energy forecasting",
        period: "2022",
        body: "Rajasthan weather data with ARMA, ARIMA, SARIMA and LSTM models. Best result: SARIMA at 82.34% accuracy.",
      },
    ],
  },
  {
    heading: "Competitive programming and early builds",
    items: [
      {
        title: "Competitive programming",
        period: "2021 to 2023",
        body: "150+ C++ solutions on Codeforces and CodeChef, up to Div. 2 E and F problems. Competed in CodeChef SnackDown 2021 (qualifier and Round 1A) and APOGEE's International Coding League 2023.",
        github: "https://github.com/Aryan-Madaan/CodeforcesCompetetions",
      },
      {
        title: "Early builds",
        period: "2021 to 2024",
        body: "Flutter apps (a crystal-shop storefront, a chat app, a therapy app), a BITS Wi-Fi auto-login tool, a Sudoku solver, Tetris in Python, self-organising maps and a stock-trading bot. 23 original repositories.",
        github: "https://github.com/Aryan-Madaan?tab=repositories",
      },
    ],
  },
];

const linkClass =
  "text-[var(--color-muted)] underline underline-offset-4 hover:text-[var(--color-signal)]";

function Card({ p, compact = false }: { p: Item; compact?: boolean }) {
  return (
    <article className="flex h-full flex-col border border-[var(--color-line)] p-5 transition-colors hover:border-[var(--color-muted)]">
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted)]">
          {p.period}
        </span>
        {p.badge && (
          <span className="border border-[var(--color-signal)] px-1.5 py-0.5 font-[family-name:var(--font-mono)] text-[0.6875rem] text-[var(--color-signal)]">
            {p.badge}
          </span>
        )}
      </div>
      <h3 className={`mt-2 font-semibold ${compact ? "text-base" : "text-lg"}`}>{p.title}</h3>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-[var(--color-muted)]">{p.body}</p>
      {(p.github || p.site) && (
        <p className="mt-auto flex gap-4 pt-3 font-[family-name:var(--font-mono)] text-xs">
          {p.github && (
            <a href={p.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
              GitHub ↗
            </a>
          )}
          {p.site && (
            <a href={p.site} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Site ↗
            </a>
          )}
        </p>
      )}
    </article>
  );
}

function SectionHead({ title, note }: { title: string; note?: string }) {
  return (
    <div className="mb-6">
      <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.01em] sm:text-3xl">
        {title}
      </h2>
      {note && <p className="mt-2 max-w-2xl text-[var(--color-muted)]">{note}</p>}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Container className="max-w-5xl py-16 sm:py-24">
      <p className="eyebrow mb-4">Projects</p>
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
        What I&apos;ve built, and the fleet I govern.
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
        One flagship platform, the products built on it, and the tools and
        open-source work around it. Earlier work is at the bottom.
      </p>

      <section className="mt-14 border border-[var(--color-line)] bg-[var(--color-surface)] p-6 sm:p-8">
        <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.08em] text-[var(--color-signal)]">
          Flagship · 2025 to now
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          Tata Steel Digital Assistant (TDA)
        </h2>
        <p className="mt-2 font-[family-name:var(--font-mono)] text-sm text-[var(--color-muted)]">
          Lead architect and developer · leading a team of 6 · 5,200+ commits
        </p>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed">
          Built from zero to production in two months, then rebuilt from a
          chatbot into a governed multi-agent AI platform, now in its fourth
          generation, that meets people wherever they already work.
        </p>

        <dl className="mt-8 grid grid-cols-2 gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-4">
          {tdaNumbers.map((n) => (
            <div key={n.label} className="flex flex-col-reverse bg-[var(--color-bg)] p-4">
              <dt className="mt-1 text-sm text-[var(--color-muted)]">{n.label}</dt>
              <dd className="font-[family-name:var(--font-mono)] text-2xl font-medium">{n.value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.08em] text-[var(--color-muted)]">
          Where TDA lives
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {tdaSurfaces.map((s) => (
            <li
              key={s}
              className="border border-[var(--color-line)] bg-[var(--color-bg)] px-3 py-1.5 text-sm"
            >
              {s}
            </li>
          ))}
        </ul>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {tdaDoes.map((d) => (
            <li key={d} className="flex gap-3 leading-relaxed">
              <span aria-hidden="true" className="mt-[0.7rem] h-1 w-1 shrink-0 bg-[var(--color-signal)]" />
              <span>{d}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.08em] text-[var(--color-muted)]">
          Built on TDA
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {builtOnTda.map((p) => (
            <Card key={p.title} p={p} compact />
          ))}
        </div>

        <p className="mt-8 text-sm">
          <Link href="/experience" className="text-[var(--color-signal)] underline underline-offset-4">
            The full route, role by role →
          </Link>
        </p>
      </section>

      <section className="mt-16">
        <SectionHead title="Other platforms I built" />
        <div className="grid gap-4 sm:grid-cols-2">
          {platforms.map((p) => (
            <Card key={p.title} p={p} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHead title="Open source" note="Built and maintained independently, outside work." />
        <article className="border border-[var(--color-signal)] p-6 sm:p-8">
          <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted)]">2026 to now · MIT licence · v0.14</p>
          <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold">Marshal</h3>
          <p className="mt-3 max-w-3xl leading-relaxed">
            A Python library that decides, before an AI agent acts, whether a
            retrieval, tool call or model call is allowed, and keeps one
            tamper-evident audit trail across all three.
          </p>
          <ul className="mt-4 grid gap-2 text-[0.9375rem] text-[var(--color-muted)] sm:grid-cols-2">
            <li>Blocks the &ldquo;lethal trifecta&rdquo; in a session</li>
            <li>Pins MCP tool definitions against rug pulls</li>
            <li>Records who an agent acted for</li>
            <li>Routes risky actions to a human approval queue</li>
            <li>Permission filters inside 8 vector databases</li>
            <li>EU AI Act Article 12 and 73 reports · 485 tests</li>
          </ul>
          <p className="mt-5 flex gap-5 font-[family-name:var(--font-mono)] text-sm">
            <a href="https://github.com/Aryan-Madaan/Marshal" target="_blank" rel="noopener noreferrer" className="text-[var(--color-signal)] underline underline-offset-4">
              GitHub ↗
            </a>
            <a href="https://aryan-madaan.github.io/Marshal/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-signal)] underline underline-offset-4">
              Site ↗
            </a>
          </p>
        </article>
      </section>

      <section className="mt-16">
        <SectionHead
          title="The fleet I govern"
          note="Built by other teams in the same agent ecosystem. My role covers their governance, security and compliance, not their authorship."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {fleet.map((p) => (
            <Card key={p.title} p={p} compact />
          ))}
        </div>
        <p className="mt-4 text-sm text-[var(--color-muted)]">
          Independently verifiable:{" "}
          <a
            href="https://www.tatasteel.com/newsroom/press-releases/india/2026/tata-steel-partners-with-google-cloud-to-deploy-a-unified-agentic-ai-across-its-global-value-chain/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-signal)] underline underline-offset-4"
          >
            Tata Steel and Google Cloud press release, April 2026
          </a>
          .
        </p>
      </section>

      <details className="group mt-16 border-t border-[var(--color-line)] pt-8">
        <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4">
          <span>
            <span className="block font-[family-name:var(--font-display)] text-2xl font-semibold sm:text-3xl">
              Earlier work
            </span>
            <span className="mt-1 block text-[var(--color-muted)]">
              Indus Insights, research projects, competitive programming and early builds
            </span>
          </span>
          <span className="shrink-0 border border-[var(--color-line)] px-3 py-1.5 font-[family-name:var(--font-mono)] text-sm group-open:hidden">
            Show
          </span>
          <span className="hidden shrink-0 border border-[var(--color-line)] px-3 py-1.5 font-[family-name:var(--font-mono)] text-sm group-open:inline">
            Hide
          </span>
        </summary>
        <div className="mt-8 space-y-10">
          {earlier.map((g) => (
            <div key={g.heading}>
              <p className="eyebrow mb-3">{g.heading}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {g.items.map((p) => (
                  <Card key={p.title} p={p} compact />
                ))}
              </div>
            </div>
          ))}
        </div>
      </details>

      <div className="mt-16 border-t border-[var(--color-line)] pt-10 text-center">
        <p className="text-[var(--color-muted)]">
          Want the technical or business case behind any of this?
        </p>
        <Link
          href="/contact?reason=opportunity"
          className="mt-4 inline-flex min-h-11 items-center bg-[var(--color-signal)] px-5 text-sm font-semibold text-[var(--color-signal-contrast)] transition-opacity hover:opacity-90"
        >
          Get in touch
        </Link>
      </div>
    </Container>
  );
}

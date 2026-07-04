import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";

const stats = [
  { value: "76,000+", label: "total users the platform has rolled out to" },
  { value: "13,000+", label: "daily active users across 5 Tata Group companies" },
  { value: "150+", label: "enterprise data sources integrated" },
  { value: "2", label: "peer-reviewed ML publications" },
];

const pillars = [
  {
    tag: "01",
    title: "Enterprise RAG & agentic systems",
    body: "Retrieval-augmented generation (RAG) architecture, multi-agent orchestration, and the data-integration work underneath it — built to hold up past a demo, at organization scale.",
  },
  {
    tag: "02",
    title: "AI governance & trust layers",
    body: "Access control, audit trails, and escalation paths — the layer that decides whether people actually rely on what the system tells them.",
  },
  {
    tag: "03",
    title: "Executive-facing AI products",
    body: "Turning a model into something a CXO will make a real decision from — voice interfaces, reporting pipelines, and getting people to actually change how they work.",
  },
];

export default function Home() {
  return (
    <>
      <section className="overflow-hidden border-b border-[var(--color-line)] py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-14">
            <Reveal>
              <div className="shrink-0">
                <div className="h-44 w-44 overflow-hidden border border-[var(--color-line)] bg-[var(--color-surface)] sm:h-56 sm:w-56">
                  <Image
                    src="/images/aryan-madaan.jpg"
                    alt="Portrait of Aryan Madaan"
                    width={448}
                    height={448}
                    priority
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <p className="mt-3 font-[family-name:var(--font-mono)] text-[0.68rem] tracking-[0.14em] text-[var(--color-muted)]">
                  AM / TATA STEEL / 2026
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="eyebrow mb-3">Aryan Madaan</p>
              <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight sm:text-4xl">
                Enterprise AI architect, currently building AI Discovery
                &amp; Governance at Tata Steel.
              </h1>
              <p className="mt-4 max-w-2xl text-base text-[var(--color-muted)]">
                Chemical engineer by training, published ML researcher,
                and the person who built an enterprise AI assistant now
                rolled out to 76,000+ people (13,000+ daily active) across
                five companies within the Tata Group — one of India&apos;s
                largest industrial conglomerates. I write about AI
                engineering and advise organizations on their AI stack.
              </p>

              <p className="mt-8 max-w-2xl font-[family-name:var(--font-display)] text-xl font-semibold leading-snug sm:text-2xl">
                Systems don&apos;t fail from bad models. They fail from{" "}
                <span className="text-[var(--color-signal)]">bad trust.</span>
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  href="/advisory"
                  className="border border-[var(--color-fg)] bg-[var(--color-fg)] px-6 py-3 text-sm font-medium text-[var(--color-bg)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-signal)] hover:bg-[var(--color-signal)] hover:shadow-lg"
                >
                  Work with me on your AI stack
                </Link>
                <Link
                  href="/blog"
                  className="text-sm font-medium underline decoration-[var(--color-line)] underline-offset-4 transition-colors hover:text-[var(--color-signal)] hover:decoration-[var(--color-signal)]"
                >
                  Read the writing
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-signal)]"
                >
                  Get in touch →
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-line)] py-14">
        <Container>
          <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="reg-mark p-4 transition-colors hover:bg-[var(--color-surface)]">
                  <dd className="font-[family-name:var(--font-display)] text-2xl font-semibold sm:text-3xl">
                    <CountUp value={s.value} />
                  </dd>
                  <dt className="mt-1 text-sm text-[var(--color-muted)]">
                    {s.label}
                  </dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <p className="eyebrow mb-10">What I build</p>
          </Reveal>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.tag} delay={i * 100}>
                <div className="group border-t-2 border-[var(--color-fg)] pt-5 transition-transform duration-300 hover:-translate-y-1">
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted)]">
                    {p.tag}
                  </span>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-semibold transition-colors group-hover:text-[var(--color-signal)]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--color-line)] py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-4">Enterprise Intelligence</p>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold sm:text-3xl">
              Most &ldquo;enterprise AI&rdquo; is a chatbot bolted onto a
              department. That&apos;s not the same claim as making an
              organization&apos;s own knowledge queryable and trustworthy.
            </h2>
            <p className="mt-5 text-[var(--color-muted)]">
              That distinction — and why the hard part is governance, not the
              model — is the thesis behind my advisory work.
            </p>
            <Link
              href="/advisory"
              className="mt-6 inline-block font-medium text-[var(--color-signal)] underline underline-offset-4"
            >
              Read the full argument →
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

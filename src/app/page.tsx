import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import { AuditLog } from "@/components/audit-log";

const stats = [
  { value: "76,000+", label: "total users TDA has rolled out to" },
  { value: "300+", label: "AI agents across the fleet I govern, in 9 months" },
  { value: "70%+", label: "of HR tickets one of those agents resolves solo" },
  { value: "2", label: "peer-reviewed ML publications" },
];

const pillars = [
  {
    tag: "01",
    title: "Retrieval, knowledge graphs & agentic systems",
    body: "Past basic RAG — knowledge catalogs, graph-based retrieval (GraphRAG), and persistent memory across sessions, wired into multi-agent orchestration that holds up past a demo, at organization scale.",
  },
  {
    tag: "02",
    title: "Governance, security & Responsible AI",
    body: "Access control, audit trails, and escalation paths on one side; red-teaming against prompt injection and data leakage on the other — plus the cross-border compliance work of running one platform across four countries.",
  },
  {
    tag: "03",
    title: "Builder tooling & internal platforms",
    body: "A low-code agent platform non-engineers use to ship their own automations, an AI-assisted internal coding tool, and the developer platform 700+ engineers build on daily.",
  },
  {
    tag: "04",
    title: "Executive-facing AI products",
    body: "Turning a model into something a CXO will make a real decision from — voice interfaces, reporting pipelines, and getting people to actually change how they work.",
  },
];

export default function Home() {
  return (
    <>
      <section className="border-b border-[var(--color-line)] py-16 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-start gap-12 lg:gap-14">
            <Reveal className="min-w-0 flex-[999_1_30rem]">
              <div className="mb-6 flex items-center gap-3">
                <Image
                  src="/images/aryan-madaan.jpg"
                  alt="Portrait of Aryan Madaan"
                  width={112}
                  height={112}
                  priority
                  className="h-14 w-14 object-cover object-top"
                />
                <p className="eyebrow">
                  Aryan Madaan · enterprise AI, governance &amp; security
                </p>
              </div>
              <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]">
                Every AI decision should have an answer to{" "}
                <span className="text-[var(--color-signal)]">
                  &ldquo;who allowed this?&rdquo;
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                At Tata Steel, I partner directly with the C-suite on
                enterprise GenAI strategy, and I&apos;ve shipped that
                strategy myself: an assistant built zero-to-production in
                two months, now at 76,000+ people (13,000+ daily active)
                across five group companies. My governance remit covers
                what doesn&apos;t show up in a demo — access control, audit
                trails, and cross-border data-privacy compliance across
                India, the UK, Thailand, and Singapore — plus the
                partnerships that keep 860+ production AI models running
                safely at that scale.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/advisory"
                  className="inline-flex min-h-11 items-center bg-[var(--color-signal)] px-5 text-sm font-semibold text-[var(--color-signal-contrast)] transition-opacity hover:opacity-90"
                >
                  Work with me on your AI stack
                </Link>
                <a
                  href="/resume/Aryan-Madaan-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center border border-[var(--color-line)] px-5 text-sm font-medium transition-colors hover:border-[var(--color-fg)]"
                >
                  Résumé (PDF)
                </a>
                <Link
                  href="/experience"
                  className="inline-flex min-h-11 items-center px-3 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
                >
                  Climb the career route →
                </Link>
              </div>

              <p className="mt-10 font-[family-name:var(--font-mono)] text-sm text-[var(--color-muted)]">
                Systems don&apos;t fail from bad models. They fail from{" "}
                <span className="text-[var(--color-signal)]">bad trust.</span>
              </p>
            </Reveal>

            <Reveal delay={150} className="min-w-0 flex-[1_1_22rem]">
              <AuditLog />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <dl className="grid grid-cols-2 gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse bg-[var(--color-bg)] p-6">
                <dt className="mt-2 text-sm text-[var(--color-muted)]">
                  {s.label}
                </dt>
                <dd className="font-[family-name:var(--font-mono)] text-3xl font-medium tracking-tight tabular-nums">
                  <CountUp value={s.value} />
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.02em]">
              What I build
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.tag} delay={i * 100}>
                <div className="group h-full border border-[var(--color-line)] p-6 transition-colors hover:border-[var(--color-muted)]">
                  <span className="font-[family-name:var(--font-mono)] text-[0.8125rem] text-[var(--color-signal)]">
                    {p.tag}
                  </span>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--color-muted)]">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--color-line)] py-20">
        <Container>
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.02em]">
              Two layers, one answer
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--color-muted)]">
              Most &ldquo;enterprise AI&rdquo; is a chatbot bolted onto a
              department. The useful answer is what the organization knows,
              filtered by what this person is allowed to see.
            </p>
            <div className="mt-8 flex flex-wrap items-stretch gap-4">
              <div className="min-w-0 flex-[1_1_17rem] border border-[var(--color-line)] p-6">
                <p className="font-[family-name:var(--font-mono)] text-[0.8125rem] text-[var(--color-signal)]">
                  EIL
                </p>
                <p className="mt-2 text-xl font-semibold">
                  Enterprise Intelligence Layer
                </p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-[var(--color-muted)]">
                  Data, documents, policies, agents and governance. The same
                  for everyone.
                </p>
              </div>
              <div className="flex flex-[0_1_8rem] items-center justify-center font-[family-name:var(--font-mono)] text-[0.8125rem] text-[var(--color-muted)]">
                ∩ at 4 joints
              </div>
              <div className="min-w-0 flex-[1_1_17rem] border border-[var(--color-line)] p-6">
                <p className="font-[family-name:var(--font-mono)] text-[0.8125rem] text-[var(--color-signal)]">
                  UCL
                </p>
                <p className="mt-2 text-xl font-semibold">User Context Layer</p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-[var(--color-muted)]">
                  Role, entitlements, entity, country and memory. Different
                  for every user.
                </p>
              </div>
            </div>
            <Link
              href="/advisory"
              className="mt-8 inline-flex min-h-11 items-center font-medium text-[var(--color-signal)] underline underline-offset-4"
            >
              Read the full argument →
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

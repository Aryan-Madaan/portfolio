import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "AI Advisory",
  description:
    "Advisory for organizations on enterprise AI stack strategy, knowledge-graph and agentic architecture, and AI governance — from someone who has built and shipped it at scale.",
};

const services = [
  {
    tag: "01",
    title: "Enterprise AI stack strategy & roadmapping",
    body: "Where to start, what to build versus buy, and what sequence actually gets adopted — not a vendor slide deck.",
  },
  {
    tag: "02",
    title: "Knowledge-graph & agentic architecture design and review",
    body: "Knowledge catalogs, graph-based retrieval, cross-session memory, and multi-agent orchestration — plus a second set of eyes on an existing build before it hits production load.",
  },
  {
    tag: "03",
    title: "AI governance & Responsible AI frameworks",
    body: "Access control, audit trails, escalation paths, and a framework for how the organization approves, monitors, and retires the models and LLMs it runs — the compliance posture that decides whether the business actually trusts the system.",
  },
  {
    tag: "04",
    title: "AI security & red-teaming",
    body: "Testing for prompt injection, data leakage, and agent manipulation before an attacker — or a regulator — finds it first.",
  },
  {
    tag: "05",
    title: "Build-vs-buy evaluation",
    body: "An honest assessment of whether your team should build this in-house, extend a platform, or buy — before the budget is committed.",
  },
];

const proof = [
  "Built an enterprise AI assistant from zero to production in 2 months, now rolled out to 76,000+ people (13,000+ daily active) across 5 Tata Group companies.",
  "Integrated 150+ enterprise data sources — 100+ databases and 50,000+ documents — into a single retrieval layer.",
  "Run a no-code AI agent platform with 200+ agents live across 20 departments — governance at that scale is a different problem than governing one chatbot.",
  "Manage the same platform across UK, Thailand, and Singapore entities — including cross-border data transfer and data-privacy compliance across jurisdictions, not just the India build.",
  "Helping shape how the organization governs its models and LLMs directly — which get approved, how they're monitored, and when they're retired.",
  "Negotiate directly with cloud and AI infrastructure partners on contracts and connectivity.",
  "Delivered enterprise-grade security — role-based access control (RBAC), encryption, and VAPT (independent penetration testing) clearance — at 99% uptime.",
  "Two peer-reviewed ML publications in indexed international journals.",
];

export default function AdvisoryPage() {
  return (
    <>
      <section className="border-b border-[var(--color-line)] py-16 sm:py-24">
        <Container className="max-w-3xl">
          <p className="eyebrow mb-4">AI Advisory</p>
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight sm:text-4xl">
            Enterprise Intelligence: why most &ldquo;enterprise AI&rdquo;
            isn&apos;t, and what actually makes organizations trust it.
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/contact?reason=advisory"
              className="border border-[var(--color-fg)] bg-[var(--color-fg)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-signal)] hover:bg-[var(--color-signal)]"
            >
              Start a conversation
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium underline decoration-[var(--color-line)] underline-offset-4 transition-colors hover:text-[var(--color-signal)] hover:decoration-[var(--color-signal)]"
            >
              See the outcomes this has driven →
            </Link>
          </div>

          <div className="prose-schematic mt-10">
            <p>
              Most enterprise AI today is a chatbot bolted onto a
              department — a Q&amp;A widget on top of a SharePoint.
              <strong> Enterprise Intelligence</strong> is a different claim:
              that an organization&apos;s collective knowledge — its data,
              documents, policies, past decisions, and the judgment calls its
              most experienced people make that never get written down —
              should be queryable and actionable in real time, instead of
              sitting locked in silos, PDFs, and the heads of people who
              might leave next quarter.
            </p>
            <h2>Why organizations actually need this</h2>
            <p>
              <strong>Slow decisions lose money.</strong> When policy
              discovery or executive reporting takes days, decisions get
              made on stale information — or delayed until the window is
              gone.
            </p>
            <p>
              <strong>Knowledge doesn&apos;t scale with headcount.</strong>{" "}
              As organizations grow, institutional knowledge fragments
              across systems and people faster than any wiki can keep up.
              New hires — and veterans — re-solve problems nobody can
              surface the answer to.
            </p>
            <p>
              <strong>Experience walks out the door when people do.</strong>{" "}
              When an expert leaves, the undocumented judgment behind their
              decisions leaves with them. Enterprise Intelligence is the
              attempt to externalize that reasoning into something durable.
            </p>
            <p>
              <strong>Governance requires traceability.</strong> Ad hoc
              knowledge work can&apos;t be audited. A real architecture for
              this — retrieval plus access control plus audit trails — makes
              institutional decision-making explainable after the fact,
              which matters more once AI is part of the decision chain, not
              just a lookup tool.
            </p>
            <p>
              <strong>The real bottleneck is trust, not retrieval.</strong>{" "}
              Anyone can wire an LLM to a vector database this year. The
              harder problem — the one that actually determines adoption —
              is the governance layer around it: who can see what, what
              happens when it doesn&apos;t know, and who it escalates to
              when it&apos;s unsure. That is a distinct discipline, not a
              side effect of picking a model vendor.
            </p>
            <p>
              I&apos;d rather understate this than oversell it: the
              technical build is genuinely the easier half. What I actually
              spend my time on is the second half — governance, adoption,
              and the trust layer that determines whether any of it gets
              used.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-line)] py-16">
        <Container>
          <p className="eyebrow mb-10">How I can help</p>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {services.map((s) => (
              <div key={s.tag} className="border-t-2 border-[var(--color-fg)] pt-5">
                <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted)]">
                  {s.tag}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-semibold">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-line)] py-16">
        <Container className="max-w-3xl">
          <p className="eyebrow mb-6">Track record</p>
          <ul className="space-y-3">
            {proof.map((p) => (
              <li key={p} className="flex gap-3 text-sm leading-relaxed text-[var(--color-muted)]">
                <span className="mt-2 h-1 w-1 shrink-0 bg-[var(--color-signal)]" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
            Have an AI stack decision on the table?
          </h2>
          <p className="mt-3 text-[var(--color-muted)]">
            Tell me what you&apos;re trying to build or fix — I&apos;ll tell
            you honestly whether it&apos;s worth a conversation.
          </p>
          <Link
            href="/contact?reason=advisory"
            className="mt-6 inline-block border border-[var(--color-fg)] bg-[var(--color-fg)] px-6 py-3 text-sm font-medium text-[var(--color-bg)] transition-colors hover:border-[var(--color-signal)] hover:bg-[var(--color-signal)]"
          >
            Start a conversation
          </Link>
        </Container>
      </section>
    </>
  );
}

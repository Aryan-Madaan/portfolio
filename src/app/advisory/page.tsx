import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { ClearPill } from "@/components/clear-pill";

export const metadata: Metadata = {
  title: "AI Advisory",
  description:
    "Advisory for organizations on enterprise AI stack strategy, knowledge-graph and agentic architecture, and AI governance, from someone who has built and shipped it at scale.",
};

const services = [
  {
    tag: "01",
    title: "Enterprise AI stack strategy & roadmapping",
    body: "Where to start, what to build versus buy or extend, and what sequence actually gets adopted. Not a vendor slide deck.",
  },
  {
    tag: "02",
    title: "Knowledge-graph & agentic architecture design and review",
    body: "Designing how the Enterprise Intelligence Layer and the User Context Layer fit together: knowledge catalogs, graph-based retrieval, cross-session memory and multi-agent orchestration. Or a second set of eyes on an existing build before it hits production load.",
  },
  {
    tag: "03",
    title: "AI governance & Responsible AI frameworks",
    body: "Access control, audit trails, escalation paths, and a framework for how the organization approves, monitors, and retires the models and LLMs it runs: the compliance posture that decides whether the business actually trusts the system.",
  },
  {
    tag: "04",
    title: "AI security & red-teaming",
    body: "Testing for prompt injection, data leakage, tool poisoning and agent goal hijacking before an attacker (or a regulator) finds it. Findings map to the OWASP Top 10 for LLM and Agentic Applications, and the fixes change what agents can reach, so they hold up when attackers adapt.",
  },
  {
    tag: "05",
    title: "Adoption & change management",
    body: "The unglamorous half of the work: getting an organization to actually change how it operates once the system is built, instead of quietly reverting to the old way.",
  },
];

const proof = [
  {
    problem: "\u201cOur AI pilot works, but nobody uses it.\u201d",
    solved: "Took an assistant from concept to production in 2 months and to 76,000+ people across 5 group companies, by putting it inside the tools they already use.",
  },
  {
    problem: "\u201cWe have dozens of agents and no idea who governs them.\u201d",
    solved: "Govern a fleet of 300+ agents under one model, publicly cited in Tata Steel's April 2026 press release with Google Cloud.",
  },
  {
    problem: "\u201cOur AI spend is growing faster than anyone can explain.\u201d",
    solved: "Built cost attribution by department, usage limits and caching that cut model cost by about a quarter, now the basis of Tata Steel's AI Governance Platform.",
  },
  {
    problem: "\u201cWe operate in several countries and legal won't sign off.\u201d",
    solved: "Run the same platform across India, the UK, Thailand and Singapore, including cross-border data transfer and privacy compliance.",
  },
  {
    problem: "\u201cSecurity says agents are too risky to deploy.\u201d",
    solved: "Shipped with role-based access, encryption and independent penetration-test clearance at 99% uptime, and wrote Marshal, an open-source governance library for exactly this.",
  },
];

export default function AdvisoryPage() {
  return (
    <>
      <section className="border-b border-[var(--color-line)] py-16 sm:py-24">
        <Container>
          <p className="eyebrow mb-4">AI Advisory</p>
          <ClearPill headingLevel="h1" />
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
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

        </Container>
      </section>

      <section className="border-b border-[var(--color-line)] py-16 sm:py-24">
        <Container className="max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight sm:text-4xl">
            Enterprise Intelligence: why most &ldquo;enterprise AI&rdquo;
            isn&apos;t, and what actually makes organizations trust it.
          </h2>

          <div className="prose-schematic mt-8">
            <p>
              Most enterprise AI today is a chatbot bolted onto a
              department, a Q&amp;A widget on top of a SharePoint.
              <strong> Enterprise Intelligence</strong> is a different claim:
              that an organization&apos;s collective knowledge (its data,
              documents, policies, past decisions, and the judgment calls its
              most experienced people make that never get written down)
              should be queryable and actionable in real time, instead of
              sitting locked in silos, PDFs, and the heads of people who
              might leave next quarter.
            </p>
            <p>
              I built this argument by running it: an assistant now used by
              76,000+ people across 5 Tata Group companies, governing a
              fleet that scaled past 300 production agents in 9 months.
            </p>
            <h2>Why organizations actually need this</h2>
            <p>
              <strong>Slow decisions lose money.</strong> When policy
              discovery or executive reporting takes days, decisions get
              made on stale information, or delayed until the window is
              gone.
            </p>
            <p>
              <strong>Knowledge doesn&apos;t scale with headcount.</strong>{" "}
              As organizations grow, institutional knowledge fragments
              across systems and people faster than any wiki can keep up.
              New hires and veterans alike re-solve problems nobody can
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
              this, retrieval plus access control plus audit trails, makes
              institutional decision-making explainable after the fact,
              which matters more once AI is part of the decision chain, not
              just a lookup tool.
            </p>
            <p>
              <strong>The real bottleneck is trust, not retrieval.</strong>{" "}
              Anyone can wire an LLM to a vector database this year. The
              harder problem, and the one that decides adoption, is the
              governance layer around it: who can see what, what
              happens when it doesn&apos;t know, and who it escalates to
              when it&apos;s unsure. That is a distinct discipline, not a
              side effect of picking a model vendor.
            </p>
            <h2>Two layers, one answer</h2>
            <p>
              I think of this as two layers that have to be designed
              together.
            </p>
            <p>
              The <strong>Enterprise Intelligence Layer (EIL)</strong> is
              what the organization knows and is allowed to do: its data,
              documents, policies, past decisions, the agents that act on
              them, and the governance that sits over all of it. It&apos;s
              the same for everyone in the company.
            </p>
            <p>
              The <strong>User Context Layer (UCL)</strong> is everything
              about the person asking: who they are, their role and
              entitlements, which entity and country they sit in, what
              they&apos;re working on, and what the system should remember
              about them. It&apos;s different for every single user.
            </p>
            <p>
              An EIL without user context is a search
              engine that gives a plant engineer and a finance controller
              the same answer, and leaks whatever either of them
              shouldn&apos;t see. A UCL without the EIL is a personal
              assistant with no institutional memory, confidently guessing.
              The useful answer is always the intersection: what the
              organization knows, filtered by what this person is allowed
              to see, ranked by what they actually need right now.
            </p>
            <p>That marriage happens at four specific joints:</p>
            <ul>
              <li>
                <strong>Permissions travel with the person.</strong> Access
                control is applied at retrieval time, at the document and
                field level, using the user&apos;s own entitlements. It
                isn&apos;t applied as a filter on the final answer, after
                the model has already read everything.
              </li>
              <li>
                <strong>Agents act <em>for</em> someone, and the audit trail
                says so.</strong> Every action records two identities: the
                user it was done for, and the agent that did it. Without
                that split, &ldquo;who approved this?&rdquo; has no answer.
              </li>
              <li>
                <strong>Context shapes relevance as well as access.</strong>{" "}
                The same question about a safety procedure should land
                differently for someone on the shop floor and someone
                writing the audit report, even when both are allowed to see
                the same documents.
              </li>
              <li>
                <strong>User memory is governed as personal data.</strong>{" "}
                What the system remembers about a person has its own
                retention, consent, and cross-border rules, separate from
                the organization&apos;s knowledge. Mixing the two is how a
                private conversation ends up in someone else&apos;s answer.
              </li>
            </ul>
            <p>
              The joint between the two layers is also where most of the
              security risk lives. An agent session that holds a
              user&apos;s private context, reads untrusted content, and can
              send data out is exactly the combination that recent
              prompt-injection incidents have exploited. If nobody designs
              the boundary between the EIL and the UCL, it ends up wherever
              the chosen framework puts it. Designing it on purpose is most
              of what makes the system safe to scale.
            </p>
            <p>
              I&apos;d rather understate this than oversell it: the
              technical build is genuinely the easier half. What I actually
              spend my time on is the second half: governance, adoption,
              and the trust layer that determines whether any of it gets
              used. That&apos;s why 300+ agents run under one governance
              model instead of 300 one-off builds.
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
          <p className="eyebrow mb-6">Problems I&apos;ve already solved</p>
          <ul className="space-y-6">
            {proof.map((p) => (
              <li key={p.problem} className="border-l-2 border-[var(--color-signal)] pl-5">
                <p className="font-[family-name:var(--font-display)] text-lg font-semibold">{p.problem}</p>
                <p className="mt-1.5 leading-relaxed text-[var(--color-muted)]">{p.solved}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-[var(--color-muted)]">
            Independently verifiable:{" "}
            <a
              href="https://www.tatasteel.com/newsroom/press-releases/india/2026/tata-steel-partners-with-google-cloud-to-deploy-a-unified-agentic-ai-across-its-global-value-chain/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-signal)] underline underline-offset-4"
            >
              Tata Steel &amp; Google Cloud press release, April 2026
            </a>
            , or the full{" "}
            <Link
              href="/projects"
              className="text-[var(--color-signal)] underline underline-offset-4"
            >
              breakdown of what this fleet actually does
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold sm:text-3xl">
            Have an AI stack decision on the table?
          </h2>
          <p className="mt-3 text-[var(--color-muted)]">
            Tell me what you&apos;re trying to build or fix, and I&apos;ll tell
            you honestly whether it&apos;s worth a conversation. 15 minutes,
            no deck required.
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

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Code, Mountain, Waves } from "lucide-react";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "About",
  description:
    "Chemical engineer who ended up building enterprise AI. Lead architect of TDA at Tata Steel, published ML researcher, reverse mentor, trekker.",
};

const facts = [
  { label: "Now", value: "Lead architect of TDA", note: "Tata Steel" },
  { label: "Leading", value: "A team of 6", note: "AI discovery and governance" },
  { label: "Puzzles", value: "Placed 3rd", note: "cryptic puzzle-solving competition, BITS Pilani" },
  { label: "Treks", value: "5 Himalayan treks", note: "and counting" },
  { label: "Studied", value: "BITS Pilani", note: "Chemical Engineering, Data Science minor" },
  { label: "Published", value: "2 ML papers", note: "peer-reviewed journals" },
];

const route = [
  { year: "2020", title: "BITS Pilani", detail: "Chemical Engineering with a Data Science minor. Two ML research papers came out of it." },
  { year: "2022", title: "MASTH Life", detail: "Eight months building two mental-health apps. Largest contributor to the codebase." },
  { year: "2023", title: "Tata Steel, IT intern", detail: "Pitched an NLP chatbot to senior leadership. They said yes. It became TDA." },
  { year: "2024", title: "Indus Insights", detail: "BITS Practice School placement. Automated reporting for a US lender; asked to stay on." },
  { year: "2024", title: "Tata Steel, Management Trainee", detail: "Rotated across the whole stack, from React to SAP." },
  { year: "2025", title: "Manager, AI", detail: "An AI development platform for 700+ developers." },
  { year: "Now", title: "Manager, AI Discovery and Governance", detail: "Lead architect of TDA, governance for 300+ agents, reverse mentor to the CPO." },
];

const treks: { name: string; href?: string }[] = [
  { name: "Chandrashila", href: "/blog/chopta-chandrashila" },
  { name: "Kedarkantha", href: "/blog/kedarkantha" },
  { name: "Dayara Bugyal", href: "/blog/dayara-bugyal" },
  { name: "Brahmatal" },
  { name: "Kasol Kheerganga" },
];

const topics = [
  "Governing AI agents",
  "Knowledge graphs",
  "Enterprise AI adoption",
  "Reverse mentoring",
  "Himalayan treks",
  "Logic puzzles",
];

const linkClass =
  "text-[var(--color-signal)] underline underline-offset-4 hover:opacity-80";

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--color-line)] py-16 sm:py-20">
        <Container className="max-w-5xl">
          <div className="flex flex-wrap items-center gap-8">
            <Image
              src="/images/aryan-madaan.jpg"
              alt="Portrait of Aryan Madaan"
              width={320}
              height={320}
              priority
              className="h-36 w-36 shrink-0 object-cover object-top sm:h-44 sm:w-44"
            />
            <div className="min-w-0 flex-[1_1_20rem]">
              <p className="eyebrow">About · Aryan Madaan</p>
              <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                Chemical engineer who ended up building enterprise AI.
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
                Enterprise AI architect and AI governance lead. I build
                enterprise AI that large organisations trust enough to use,
                and the governance that keeps it safe.
              </p>
            </div>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.label} className="flex flex-col-reverse bg-[var(--color-bg)] p-5">
                <dd>
                  <span className="block text-lg font-semibold leading-snug">{f.value}</span>
                  <span className="mt-1 block text-sm text-[var(--color-muted)]">{f.note}</span>
                </dd>
                <dt className="mb-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.08em] text-[var(--color-signal)]">
                  {f.label}
                </dt>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="border-b border-[var(--color-line)] py-16">
        <Container className="max-w-5xl">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold sm:text-3xl">
              The route here
            </h2>
            <Link href="/experience" className={`text-sm ${linkClass}`}>
              Climb the full route →
            </Link>
          </div>
          <ol className="mt-10 border-l-2 border-[var(--color-line)]">
            {route.map((r, i) => (
              <li key={r.title} className="relative pb-8 pl-8 last:pb-0">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 ${
                    i === route.length - 1
                      ? "border-[var(--color-signal)] bg-[var(--color-signal)]"
                      : "border-[var(--color-muted)] bg-[var(--color-bg)]"
                  }`}
                />
                <p className="font-[family-name:var(--font-mono)] text-[0.8125rem] text-[var(--color-signal)]">
                  {r.year}
                </p>
                <p className="mt-1 text-lg font-semibold">{r.title}</p>
                <p className="mt-1 max-w-2xl leading-relaxed text-[var(--color-muted)]">
                  {r.detail}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-b border-[var(--color-line)] py-16">
        <Container className="max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold sm:text-3xl">
            What I believe
          </h2>
          <blockquote className="mt-8 border-l-2 border-[var(--color-signal)] pl-6 font-[family-name:var(--font-display)] text-2xl font-semibold leading-snug sm:text-3xl">
            Systems don&apos;t fail from bad models. They fail from bad trust.
          </blockquote>
          <div className="mt-8 space-y-4 text-lg leading-relaxed text-[var(--color-muted)]">
            <p>
              Chemical engineering taught me process design: map how
              something flows, find where it bottlenecks, fix the system. I
              still do that, with knowledge and agents instead of reactors.
            </p>
            <p>
              My{" "}
              <Link href="/publications" className={linkClass}>
                two research papers
              </Link>{" "}
              taught me that a model is only as useful as the trust an expert
              will place in it. That became the thread through everything
              since.
            </p>
            <p>
              Reverse mentoring Tata Steel&apos;s Chief People Officer taught
              me that explaining AI well is its own skill. The full argument
              is on the{" "}
              <Link href="/advisory" className={linkClass}>
                advisory page
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-line)] py-16">
        <Container className="max-w-5xl">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold sm:text-3xl">
            Off the clock
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="border border-[var(--color-line)] p-6 sm:col-span-2">
              <Mountain aria-hidden="true" className="h-6 w-6 text-[var(--color-signal)]" />
              <p className="mt-3 text-lg font-semibold">Treks</p>
              <p className="mt-1 text-[var(--color-muted)]">
                The one place where output and performance are irrelevant.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {treks.map((t) => (
                  <li key={t.name}>
                    {t.href ? (
                      <Link
                        href={t.href}
                        className="inline-flex min-h-11 items-center border border-[var(--color-line)] px-3.5 text-sm transition-colors hover:border-[var(--color-signal)] hover:text-[var(--color-signal)]"
                      >
                        {t.name} →
                      </Link>
                    ) : (
                      <span className="inline-flex min-h-11 items-center border border-[var(--color-line)] px-3.5 text-sm text-[var(--color-muted)]">
                        {t.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-[var(--color-line)] p-6">
              <BookOpen aria-hidden="true" className="h-6 w-6 text-[var(--color-signal)]" />
              <p className="mt-3 text-lg font-semibold">Reading</p>
              <p className="mt-1 text-[var(--color-muted)]">
                Fiction, strategy and mental models, more for the frameworks
                than for finishing.
              </p>
            </div>
            <div className="border border-[var(--color-line)] p-6">
              <Waves aria-hidden="true" className="h-6 w-6 text-[var(--color-signal)]" />
              <p className="mt-3 text-lg font-semibold">Swimming and badminton</p>
              <p className="mt-1 text-[var(--color-muted)]">To stay sane in between.</p>
            </div>
            <div className="border border-[var(--color-line)] p-6 sm:col-span-2">
              <Code aria-hidden="true" className="h-6 w-6 text-[var(--color-signal)]" />
              <p className="mt-3 text-lg font-semibold">Puzzles and competitive programming</p>
              <p className="mt-1 text-[var(--color-muted)]">
                I placed 3rd in a cryptic puzzle-solving competition at BITS
                Pilani, and from 2021 to 2023 competed on Codeforces and
                CodeChef, including SnackDown 2021 and APOGEE&apos;s
                International Coding League 2023. The habit lives on in the{" "}
                <Link href="/puzzles" className={linkClass}>
                  puzzles section
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold sm:text-3xl">
            Ask me about
          </h2>
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {topics.map((t) => (
              <li
                key={t}
                className="border border-[var(--color-line)] px-3.5 py-2 text-sm"
              >
                {t}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-11 items-center bg-[var(--color-signal)] px-5 text-sm font-semibold text-[var(--color-signal-contrast)] transition-opacity hover:opacity-90"
          >
            Get in touch
          </Link>
        </Container>
      </section>
    </>
  );
}

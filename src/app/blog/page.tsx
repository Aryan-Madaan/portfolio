import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { getBlogPosts, type Post } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays on governing and building enterprise AI, plus treks, science and life. Start with the three that make the case.",
};

// Hand-picked essays that make the case, in reading order. Missing or draft
// slugs are skipped automatically.
const START_HERE = [
  "enterprise-intelligence",
  "attacker-moves-second",
  "it-was-never-the-agents",
];

// Posts about governing AI; other AI posts fall under "Building AI", and
// career and science posts under "Off the clock".
const GOVERNING = new Set([
  "enterprise-intelligence",
  "governing-a-300-agent-fleet",
  "attacker-moves-second",
  "cross-border-data-transfer",
  "fable-5-and-mythos",
  "paying-per-seat-to-see-your-own-data",
  "memory-is-a-governance-problem",
  "it-was-never-the-agents",
]);

const THEMES = [
  {
    id: "governing",
    title: "Governing AI",
    note: "Trust, security, cost and compliance: the half of enterprise AI that decides whether anyone uses it.",
    match: (p: Post) => GOVERNING.has(p.slug),
  },
  {
    id: "building",
    title: "Building AI",
    note: "Harnesses, agents, loops and the hardware underneath.",
    match: (p: Post) => p.category === "ai" && !GOVERNING.has(p.slug),
  },
  {
    id: "off-the-clock",
    title: "Off the clock",
    note: "Treks, mentoring, history and the occasional physics argument.",
    match: (p: Post) => p.category !== "ai",
  },
];

function monthYear(date: string) {
  const d = new Date(date);
  return Number.isNaN(d.getTime())
    ? date
    : d.toLocaleDateString("en-GB", { month: "short", year: "numeric" });
}

export default function BlogIndexPage() {
  const posts = getBlogPosts();
  const bySlug = new Map(posts.map((p) => [p.slug, p]));
  const featured = START_HERE.map((s) => bySlug.get(s)).filter(Boolean) as Post[];
  const [lead, ...rest] = featured;

  return (
    <Container className="max-w-5xl py-16 sm:py-24">
      <p className="eyebrow mb-4">Writing</p>
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
        Notes from building AI that people trust.
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
        {posts.length} pieces across three themes. If you read one thing, read
        the first essay below.
      </p>
      <nav aria-label="Themes" className="mt-6 flex flex-wrap gap-2">
        {THEMES.map((t) => (
          <a
            key={t.id}
            href={`#${t.id}`}
            className="inline-flex min-h-11 items-center border border-[var(--color-line)] px-3.5 text-sm transition-colors hover:border-[var(--color-signal)] hover:text-[var(--color-signal)]"
          >
            {t.title} · {posts.filter(t.match).length}
          </a>
        ))}
      </nav>

      {lead && (
        <section aria-labelledby="start-here" className="mt-14">
          <h2 id="start-here" className="eyebrow mb-4">
            Start here
          </h2>
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <Link
              href={`/blog/${lead.slug}`}
              className="group flex flex-col border border-[var(--color-line)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-signal)] sm:p-8"
            >
              <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-signal)]">
                The thesis · {lead.readingTime}
              </span>
              <span className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold leading-snug group-hover:text-[var(--color-signal)] sm:text-3xl">
                {lead.title}
              </span>
              <span className="mt-3 leading-relaxed text-[var(--color-muted)]">
                {lead.description}
              </span>
              <span className="mt-auto pt-6 font-[family-name:var(--font-mono)] text-sm text-[var(--color-signal)]">
                Read the essay →
              </span>
            </Link>
            <div className="grid gap-4">
              {rest.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col border border-[var(--color-line)] p-5 transition-colors hover:border-[var(--color-signal)]"
                >
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted)]">
                    {monthYear(p.date)} · {p.readingTime}
                  </span>
                  <span className="mt-2 text-lg font-semibold leading-snug group-hover:text-[var(--color-signal)]">
                    {p.title}
                  </span>
                  <span className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-[var(--color-muted)]">
                    {p.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {THEMES.map((t) => {
        const items = posts.filter(t.match);
        if (items.length === 0) return null;
        return (
          <section key={t.id} id={t.id} className="mt-16 scroll-mt-24">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold sm:text-3xl">
              {t.title}
            </h2>
            <p className="mt-2 max-w-2xl text-[var(--color-muted)]">{t.note}</p>
            <ul className="mt-6 border-t border-[var(--color-line)]">
              {items.map((p) => (
                <li key={p.slug} className="border-b border-[var(--color-line)]">
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group grid gap-x-6 gap-y-1 py-5 sm:grid-cols-[7rem_minmax(0,1fr)_auto] sm:items-baseline"
                  >
                    <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted)]">
                      {monthYear(p.date)}
                    </span>
                    <span>
                      <span className="block text-lg font-semibold leading-snug group-hover:text-[var(--color-signal)]">
                        {p.title}
                      </span>
                      <span className="mt-1 block line-clamp-2 text-[0.9375rem] leading-relaxed text-[var(--color-muted)]">
                        {p.description}
                      </span>
                    </span>
                    <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted)] sm:text-right">
                      {p.readingTime}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </Container>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { getPuzzles } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Puzzles",
  description:
    "Logic and analytical puzzles grouped by difficulty, with solutions hidden until you want them.",
};

// Difficulty labels used in puzzle frontmatter, mapped to a 1-5 meter.
const LEVEL: Record<string, number> = {
  easy: 1,
  "easy-medium": 2,
  medium: 3,
  "medium-hard": 4,
  hard: 4,
  "very hard": 5,
};

const GROUPS = [
  { title: "Warm-ups", note: "A few minutes each.", levels: [1, 2] },
  { title: "Proper puzzles", note: "Bring a pen.", levels: [3] },
  { title: "Hard", note: "Expect to get stuck, which is the point.", levels: [4] },
  { title: "Brutal", note: "Paper, primes and patience.", levels: [5] },
];

function Meter({ level }: { level: number }) {
  return (
    <span className="inline-flex items-center gap-1" aria-label={`Difficulty ${level} of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`h-1.5 w-1.5 rounded-full ${
            i <= level ? "bg-[var(--color-signal)]" : "bg-[var(--color-line)]"
          }`}
        />
      ))}
    </span>
  );
}

export default function PuzzlesIndexPage() {
  const puzzles = getPuzzles().map((p) => ({
    ...p,
    level: LEVEL[p.difficulty ?? ""] ?? 3,
  }));

  return (
    <Container className="max-w-5xl py-16 sm:py-24">
      <p className="eyebrow mb-4">Puzzles</p>
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
        Pick a puzzle. Solutions stay hidden until you want them.
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
        I placed 3rd in a cryptic puzzle-solving competition at BITS Pilani,
        and this is the same habit, kept up. {puzzles.length} puzzles, from
        warm-ups to the genuinely brutal.
      </p>

      {GROUPS.map((g) => {
        const items = puzzles.filter((p) => g.levels.includes(p.level));
        if (items.length === 0) return null;
        return (
          <section key={g.title} className="mt-14">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
                {g.title}
              </h2>
              <p className="text-[var(--color-muted)]">
                {g.note} · {items.length}
              </p>
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((puzzle) => (
                <li key={puzzle.slug}>
                  <Link
                    href={`/puzzles/${puzzle.slug}`}
                    className="group flex h-full flex-col border border-[var(--color-line)] p-5 transition-colors hover:border-[var(--color-signal)]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wide text-[var(--color-muted)]">
                        {puzzle.category ?? "puzzle"}
                      </span>
                      <Meter level={puzzle.level} />
                    </div>
                    <h3 className="mt-3 font-semibold leading-snug group-hover:text-[var(--color-signal)]">
                      {puzzle.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[var(--color-muted)]">
                      {puzzle.description}
                    </p>
                    <span className="mt-auto pt-4 font-[family-name:var(--font-mono)] text-xs text-[var(--color-signal)]">
                      Try it →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      {puzzles.length === 0 && (
        <p className="mt-12 text-[var(--color-muted)]">Nothing here yet.</p>
      )}
    </Container>
  );
}

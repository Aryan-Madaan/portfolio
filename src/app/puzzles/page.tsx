import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { getPuzzles } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Puzzles",
  description: "Logic and analytical puzzles, with solutions.",
};

const DIFFICULTY_COLOR: Record<string, string> = {
  easy: "text-[var(--color-muted)]",
  medium: "text-[var(--color-signal)]",
  hard: "text-[var(--color-signal)]",
};

export default function PuzzlesIndexPage() {
  const puzzles = getPuzzles();

  return (
    <Container className="max-w-3xl py-16 sm:py-24">
      <p className="eyebrow mb-4">Puzzles</p>
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl">
        Puzzles, with solutions kept out of sight until you want them.
      </h1>
      <p className="mt-6 text-[var(--color-muted)]">
        I placed 3rd in a cryptic puzzle-solving competition at BITS Pilani
        — this section is that same habit, kept up. Solutions are hidden
        behind a reveal; try it first.
      </p>

      <ul className="mt-12 space-y-10">
        {puzzles.map((puzzle) => (
          <li key={puzzle.slug} className="border-t border-[var(--color-line)] pt-6">
            <Link href={`/puzzles/${puzzle.slug}`} className="group block">
              <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--color-muted)]">
                <span className="font-[family-name:var(--font-mono)]">
                  {puzzle.date}
                </span>
                {puzzle.category && (
                  <>
                    <span>·</span>
                    <span className="font-[family-name:var(--font-mono)] uppercase tracking-wide">
                      {puzzle.category}
                    </span>
                  </>
                )}
                {puzzle.difficulty && (
                  <>
                    <span>·</span>
                    <span
                      className={
                        DIFFICULTY_COLOR[puzzle.difficulty] ??
                        "text-[var(--color-muted)]"
                      }
                    >
                      {puzzle.difficulty}
                    </span>
                  </>
                )}
              </div>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold group-hover:text-[var(--color-signal)]">
                {puzzle.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {puzzle.description}
              </p>
            </Link>
          </li>
        ))}
        {puzzles.length === 0 && (
          <p className="text-[var(--color-muted)]">Nothing here yet.</p>
        )}
      </ul>
    </Container>
  );
}

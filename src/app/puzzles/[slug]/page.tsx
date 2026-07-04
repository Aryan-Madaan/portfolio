import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/container";
import { MdxContent } from "@/components/mdx-content";
import { getPuzzle, getPuzzles } from "@/lib/posts";

export function generateStaticParams() {
  return getPuzzles().map((puzzle) => ({ slug: puzzle.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const puzzle = getPuzzle(slug);
  if (!puzzle) return {};
  return { title: puzzle.title, description: puzzle.description };
}

export default async function PuzzlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const puzzle = getPuzzle(slug);
  if (!puzzle) notFound();

  return (
    <Container className="max-w-3xl py-16 sm:py-24">
      <Link href="/puzzles" className="eyebrow hover:text-[var(--color-signal)]">
        ← Puzzles
      </Link>
      <h1 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight sm:text-4xl">
        {puzzle.title}
      </h1>
      <div className="mt-4 flex flex-wrap gap-3 text-xs text-[var(--color-muted)]">
        <span className="font-[family-name:var(--font-mono)]">{puzzle.date}</span>
        {puzzle.difficulty && (
          <>
            <span>·</span>
            <span>{puzzle.difficulty}</span>
          </>
        )}
      </div>
      <div className="mt-10">
        <MdxContent source={puzzle.content} />
      </div>
    </Container>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { getBlogPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on enterprise AI engineering, agent systems, and career.",
};

const CATEGORY_LABEL: Record<string, string> = {
  ai: "AI & Engineering",
  career: "Career & Life",
};

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const posts = getBlogPosts();
  const filtered = category
    ? posts.filter((p) => p.category === category)
    : posts;
  const categories = Array.from(
    new Set(posts.map((p) => p.category).filter(Boolean))
  ) as string[];

  return (
    <Container className="max-w-3xl py-16 sm:py-24">
      <p className="eyebrow mb-4">Writing</p>
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl">
        AI engineering, and everything around it.
      </h1>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/blog"
          className={`eyebrow border px-3 py-1.5 ${
            !category
              ? "border-[var(--color-signal)] text-[var(--color-signal)]"
              : "border-[var(--color-line)]"
          }`}
        >
          All
        </Link>
        {categories.map((c) => (
          <Link
            key={c}
            href={`/blog?category=${c}`}
            className={`eyebrow border px-3 py-1.5 ${
              category === c
                ? "border-[var(--color-signal)] text-[var(--color-signal)]"
                : "border-[var(--color-line)]"
            }`}
          >
            {CATEGORY_LABEL[c] ?? c}
          </Link>
        ))}
      </div>

      <ul className="mt-12 space-y-10">
        {filtered.map((post) => (
          <li key={post.slug} className="border-t border-[var(--color-line)] pt-6">
            <Link href={`/blog/${post.slug}`} className="group block">
              <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--color-muted)]">
                <span className="font-[family-name:var(--font-mono)]">
                  {post.date}
                </span>
                <span>·</span>
                <span>{post.readingTime}</span>
                {post.category && (
                  <>
                    <span>·</span>
                    <span className="text-[var(--color-signal)]">
                      {CATEGORY_LABEL[post.category] ?? post.category}
                    </span>
                  </>
                )}
              </div>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold group-hover:text-[var(--color-signal)]">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {post.description}
              </p>
            </Link>
          </li>
        ))}
        {filtered.length === 0 && (
          <p className="text-[var(--color-muted)]">Nothing here yet.</p>
        )}
      </ul>
    </Container>
  );
}

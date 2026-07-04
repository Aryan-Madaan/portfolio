import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/container";
import { MdxContent } from "@/components/mdx-content";
import { getBlogPost, getBlogPosts } from "@/lib/posts";

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: { title: post.title, description: post.description },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <Container className="max-w-3xl py-16 sm:py-24">
      <Link href="/blog" className="eyebrow hover:text-[var(--color-signal)]">
        ← Writing
      </Link>
      <h1 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight sm:text-4xl">
        {post.title}
      </h1>
      <div className="mt-4 flex flex-wrap gap-3 text-xs text-[var(--color-muted)]">
        <span className="font-[family-name:var(--font-mono)]">{post.date}</span>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>
      <div className="mt-10">
        <MdxContent source={post.content} />
      </div>
    </Container>
  );
}

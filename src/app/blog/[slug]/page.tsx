import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/container";
import { MdxContent } from "@/components/mdx-content";
import { getBlogPost, getBlogPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/site";
import { safeJsonLd } from "@/lib/json-ld";

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
  const url = `${siteConfig.url}/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url: `${siteConfig.url}/blog/${slug}`,
    keywords: post.tags.join(", "),
    author: { "@id": `${siteConfig.url}/#person` },
    publisher: { "@id": `${siteConfig.url}/#person` },
  };

  return (
    <Container className="max-w-3xl py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
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

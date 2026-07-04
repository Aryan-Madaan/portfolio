import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category?: string;
  tags: string[];
  difficulty?: string;
  draft: boolean;
  readingTime: string;
};

export type Post = PostMeta & { content: string };

function walk(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    if (entry.name.endsWith(".mdx")) return [full];
    return [];
  });
}

function loadCollection(sub: string): Post[] {
  const dir = path.join(CONTENT_DIR, sub);
  const files = walk(dir);

  const posts = files.map((filePath) => {
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);
    const slug = path.basename(filePath, ".mdx");

    return {
      slug,
      title: String(data.title ?? slug),
      description: String(data.description ?? ""),
      date: String(data.date ?? "1970-01-01"),
      category: data.category ? String(data.category) : undefined,
      tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
      difficulty: data.difficulty ? String(data.difficulty) : undefined,
      draft: Boolean(data.draft),
      readingTime: readingTime(content).text,
      content,
    };
  });

  // Draft posts never appear in listings or render on their own page.
  // This is the second gate behind PR review for the automation pipeline —
  // a merged draft still stays invisible until a human flips `draft: false`.
  return posts
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPosts(): Post[] {
  return loadCollection("blog");
}

export function getPuzzles(): Post[] {
  return loadCollection("puzzles");
}

export function getBlogPost(slug: string): Post | undefined {
  return getBlogPosts().find((p) => p.slug === slug);
}

export function getPuzzle(slug: string): Post | undefined {
  return getPuzzles().find((p) => p.slug === slug);
}

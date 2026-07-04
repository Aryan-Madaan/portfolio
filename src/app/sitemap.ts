import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getBlogPosts, getPuzzles } from "@/lib/posts";

const staticRoutes = [
  "",
  "/about",
  "/advisory",
  "/experience",
  "/projects",
  "/publications",
  "/blog",
  "/puzzles",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const blogEntries = getBlogPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const puzzleEntries = getPuzzles().map((puzzle) => ({
    url: `${siteConfig.url}/puzzles/${puzzle.slug}`,
    lastModified: puzzle.date,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticEntries, ...blogEntries, ...puzzleEntries];
}

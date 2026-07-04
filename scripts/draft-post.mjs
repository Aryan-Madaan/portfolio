#!/usr/bin/env node
// Drafts one AI-blog post as an MDX file with `draft: true`, then removes its
// topic from content/topics-queue.yaml. Never touches `main` directly — the
// calling GitHub Action commits this to a branch and opens a PR for review.
// See README.md "AI blog automation" for the full flow.

import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import path from "node:path";
import Anthropic from "@anthropic-ai/sdk";
import yaml from "js-yaml";

const ROOT = process.cwd();
const QUEUE_PATH = path.join(ROOT, "content/topics-queue.yaml");
const BLOG_AI_DIR = path.join(ROOT, "content/blog/ai");
const MODEL = process.env.CLAUDE_MODEL || "claude-sonnet-5";

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function existingTitles() {
  if (!existsSync(BLOG_AI_DIR)) return [];
  return readdirSync(BLOG_AI_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const raw = readFileSync(path.join(BLOG_AI_DIR, f), "utf8");
      const match = raw.match(/^title:\s*"(.+)"\s*$/m);
      return match ? match[1] : f;
    });
}

function loadQueue() {
  if (!existsSync(QUEUE_PATH)) return [];
  const raw = readFileSync(QUEUE_PATH, "utf8");
  return yaml.load(raw) || [];
}

function saveQueue(remaining) {
  const header = `# Queue of topics for the automated AI-blog draft pipeline (scripts/draft-post.mjs).\n# Each run pops the first entry, drafts a post, and removes it from this file in the same PR.\n# Add new topics to the bottom. Order doesn't imply priority beyond "next".\n\n`;
  const body = remaining.map((t) => `- "${t.replace(/"/g, '\\"')}"`).join("\n");
  writeFileSync(QUEUE_PATH, header + body + "\n");
}

async function main() {
  const cliTopic = process.argv[2];
  const queue = loadQueue();
  const topic = cliTopic || queue[0];

  if (!topic) {
    console.log("No topic provided and the queue is empty. Nothing to draft.");
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("ANTHROPIC_API_KEY is not set. Add it as a repo secret to enable this workflow.");
    process.exit(1);
  }

  const anthropic = new Anthropic({ apiKey });
  const existing = existingTitles();
  const today = process.env.DRAFT_DATE || new Date().toISOString().slice(0, 10);

  const systemPrompt = `You write for Aryan Madaan's personal blog, in his voice: direct, confident, systems-oriented, ENTJ — no hedging, no filler enthusiasm, no marketing fluff. He is an enterprise AI architect at Tata Steel (built an enterprise RAG assistant rolled out to 76,000+ users), a published ML researcher, and chemical-engineer by training. His recurring thesis: the hard part of enterprise AI is governance and trust, not the model.

Rules:
- Never fabricate statistics, case studies, company names, or quotes. If you'd need a specific number you don't have, describe the mechanism/reasoning instead of inventing a figure.
- Do not repeat a topic already covered: ${existing.length ? existing.join("; ") : "(none yet)"}.
- Output ONLY a single MDX file's contents — YAML frontmatter, then the body. No commentary before or after.
- Frontmatter fields required: title, description, date, category, tags (array), draft.
- Set date to "${today}" and draft to true, always.
- category must be "ai".
- Body: 500-900 words, plain prose with a couple of ## subheadings, no invented citations.`;

  const userPrompt = `Write the post for this topic: "${topic}"`;

  const response = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 4000,
    system: systemPrompt,
    messages: [{ role: "user", content: userPrompt }],
  });

  const textBlock = response.content.find((b) => b.type === "text");
  if (!textBlock) throw new Error("No text content in model response.");
  let mdx = textBlock.text.trim();

  // Strip an accidental ```mdx fence if the model wrapped its output in one.
  mdx = mdx.replace(/^```[a-z]*\n/, "").replace(/```$/, "").trim() + "\n";

  // Force draft: true regardless of what the model wrote — defense in depth
  // alongside PR review, so a merge alone can never publish this.
  if (/^draft:\s*false\s*$/m.test(mdx)) {
    mdx = mdx.replace(/^draft:\s*false\s*$/m, "draft: true");
  } else if (!/^draft:/m.test(mdx)) {
    mdx = mdx.replace(/^(---\n)/, `$1draft: true\n`);
  }

  const titleMatch = mdx.match(/^title:\s*"(.+)"\s*$/m);
  const title = titleMatch ? titleMatch[1] : topic;
  const slug = slugify(title);
  const filePath = path.join(BLOG_AI_DIR, `${slug}.mdx`);

  writeFileSync(filePath, mdx);
  console.log(`Wrote ${filePath}`);

  if (!cliTopic) {
    saveQueue(queue.slice(1));
    console.log("Removed topic from queue.");
  }

  const githubOutput = process.env.GITHUB_OUTPUT;
  if (githubOutput) {
    writeFileSync(
      githubOutput,
      `slug=${slug}\ntitle=${title}\nfile_path=content/blog/ai/${slug}.mdx\n`,
      { flag: "a" }
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

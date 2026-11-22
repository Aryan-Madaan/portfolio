import type { Metadata } from "next";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site";
import credits from "@/lib/credits.json";

export const metadata: Metadata = {
  title: "Credits",
  description:
    "Open-source software, fonts and sources this site is built with, and their licenses.",
};

type Credit = {
  name: string;
  version: string;
  license: string;
  repository: string | null;
};

// Not npm packages, so license-checker can't see them.
const assets = [
  {
    name: "Geist and Geist Mono",
    by: "Vercel",
    license: "SIL Open Font License 1.1",
    url: "https://github.com/vercel/geist-font",
  },
  {
    name: "Lucide icons",
    by: "Lucide contributors",
    license: "ISC",
    url: "https://github.com/lucide-icons/lucide",
  },
];

export default function CreditsPage() {
  const packages = credits as Credit[];

  return (
    <Container className="max-w-3xl py-16 sm:py-24">
      <p className="eyebrow mb-4">Credits</p>
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl">
        Open-source credits
      </h1>
      <div className="prose-schematic mt-6">
        <p>
          This site is built on open-source work by many people. Thank you.
          The site&apos;s own source code is released under the{" "}
          <a
            href={`${siteConfig.links.github}/portfolio/blob/main/LICENSE`}
            target="_blank"
            rel="noopener noreferrer"
          >
            MIT License
          </a>
          ; the writing, puzzles&apos; wording and photos are &copy; Aryan
          Madaan, all rights reserved. Puzzles credit their original source on
          each page.
        </p>

        <h2>Fonts and icons</h2>
        <ul>
          {assets.map((a) => (
            <li key={a.name}>
              <a href={a.url} target="_blank" rel="noopener noreferrer">
                {a.name}
              </a>{" "}
              by {a.by}, {a.license}.
            </li>
          ))}
        </ul>

        <h2>Software</h2>
        <p>
          {packages.length} open-source packages, each used under its own
          license. Full license texts are in each project&apos;s repository.
        </p>
      </div>

      <div className="mt-6 overflow-x-auto border border-[var(--color-line)]">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="text-left font-[family-name:var(--font-mono)] text-[0.8125rem] text-[var(--color-muted)]">
              <th scope="col" className="border-b border-[var(--color-line)] px-4 py-3 font-normal">
                Package
              </th>
              <th scope="col" className="border-b border-[var(--color-line)] px-4 py-3 font-normal">
                Version
              </th>
              <th scope="col" className="border-b border-[var(--color-line)] px-4 py-3 font-normal">
                License
              </th>
            </tr>
          </thead>
          <tbody>
            {packages.map((p) => (
              <tr key={`${p.name}@${p.version}`}>
                <td className="border-b border-[var(--color-line)] px-4 py-2">
                  {p.repository ? (
                    <a
                      href={p.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-2 hover:underline"
                    >
                      {p.name}
                    </a>
                  ) : (
                    p.name
                  )}
                </td>
                <td className="border-b border-[var(--color-line)] px-4 py-2 font-[family-name:var(--font-mono)] tabular-nums text-[var(--color-muted)]">
                  {p.version}
                </td>
                <td className="border-b border-[var(--color-line)] px-4 py-2 text-[var(--color-muted)]">
                  {p.license}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}

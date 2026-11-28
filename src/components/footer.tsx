import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = 2026;

  return (
    <footer className="mt-auto border-t border-[var(--color-line)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {year} Aryan Madaan. Views are my own, not my employer&apos;s.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a
            href={`${siteConfig.links.github}/portfolio/blob/main/LICENSE`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-signal)]"
          >
            MIT License
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-signal)]"
          >
            GitHub
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-signal)]"
          >
            LinkedIn
          </a>
          <Link href="/privacy" className="hover:text-[var(--color-signal)]">
            Privacy
          </Link>
          <Link href="/credits" className="hover:text-[var(--color-signal)]">
            Credits
          </Link>
          <Link href="/contact" className="hover:text-[var(--color-signal)]">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

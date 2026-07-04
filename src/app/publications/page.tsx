import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Publications",
  description: "Peer-reviewed publications on machine learning applied to industrial chemical processes.",
};

const publications = [
  {
    title:
      "Development of machine learning based model for low-temperature PEM fuel cells",
    authors: "Madaan, A., Pandey, J.",
    venue: "Computers and Chemical Engineering, 188, 108754 (2024)",
    href: "https://doi.org/10.1016/j.compchemeng.2024.108754",
  },
  {
    title:
      "Predicting nickel catalyst deactivation in biogas steam and dry reforming for hydrogen production using machine learning",
    authors:
      "Kumbhat, A., Madaan, A., Goel, R., Appari, S., Al-Fatesh, A. S., Osman, A. I.",
    venue:
      "Process Safety and Environmental Protection, 191 (Part B), 1833-1846 (2024)",
    href: "https://doi.org/10.1016/j.psep.2024.09.020",
  },
];

export default function PublicationsPage() {
  return (
    <Container className="max-w-3xl py-16 sm:py-24">
      <p className="eyebrow mb-4">Publications</p>
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl">
        Peer-reviewed work.
      </h1>

      <ul className="mt-12 space-y-8">
        {publications.map((pub) => (
          <li key={pub.href} className="border-t border-[var(--color-line)] pt-6">
            <h2 className="font-[family-name:var(--font-display)] text-base font-semibold leading-snug">
              {pub.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              {pub.authors}
            </p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">{pub.venue}</p>
            <a
              href={pub.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-medium text-[var(--color-signal)] underline underline-offset-4"
            >
              View DOI →
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
}

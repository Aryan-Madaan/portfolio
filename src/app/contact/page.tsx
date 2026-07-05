import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ reason?: string }>;
}) {
  const { reason } = await searchParams;
  const defaultReason =
    reason === "advisory" || reason === "other" ? reason : "opportunity";

  return (
    <Container className="max-w-xl py-16 sm:py-24">
      <p className="eyebrow mb-4">Contact</p>
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl">
        Get in touch.
      </h1>
      <p className="mt-4 text-[var(--color-muted)]">
        Whether it&apos;s a role, an advisory conversation, or something
        else — this form reaches me directly. Prefer a public profile
        instead?{" "}
        <a
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-signal)] underline underline-offset-4"
        >
          LinkedIn
        </a>{" "}
        or{" "}
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-signal)] underline underline-offset-4"
        >
          GitHub
        </a>
        . I typically reply within 1–2 business days.
      </p>

      <div className="mt-10">
        <ContactForm defaultReason={defaultReason} />
        <p className="mt-4 text-xs text-[var(--color-muted)]">
          Used only to reply to you — never shared, sold, or added to a
          list.
        </p>
      </div>
    </Container>
  );
}

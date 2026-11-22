import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "What personal data this site collects, why, who processes it, how long it is kept, and your rights under India's Digital Personal Data Protection Act, 2023.",
};

// Plain-language notice under Section 5 of the Digital Personal Data
// Protection Act, 2023 and the DPDP Rules, 2025. Keep it in sync with what
// src/app/api/contact/route.ts actually does.
export default function PrivacyPage() {
  return (
    <Container className="max-w-3xl py-16 sm:py-24">
      <p className="eyebrow mb-4">Privacy</p>
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl">
        Privacy notice
      </h1>
      <p className="mt-4 text-[var(--color-muted)]">
        Last updated 22 November 2026. Written to meet India&apos;s Digital
        Personal Data Protection Act, 2023 (DPDP Act).
      </p>

      <div className="prose-schematic mt-10">
        <h2>The short version</h2>
        <p>
          Reading this site collects no personal data about you: no
          accounts, no advertising, no tracking cookies. The only personal
          data I receive is what you choose to send through the{" "}
          <Link href="/contact">contact form</Link>, and I use it only to
          reply to you.
        </p>

        <h2>Who is responsible</h2>
        <p>
          Aryan Madaan is the Data Fiduciary for this site. For anything
          about your data, email{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>

        <h2>What is collected, and why</h2>
        <ul>
          <li>
            <strong>Contact form:</strong> your name, email address, the
            reason you picked, and your message. Purpose: to read and reply
            to your message. Nothing else.
          </li>
          <li>
            <strong>IP address, when you submit the form:</strong> used
            only for spam protection (Cloudflare Turnstile) and to limit
            repeated submissions. It is not stored by this site.
          </li>
          <li>
            <strong>Standard hosting logs:</strong> like every website, the
            hosting provider briefly records technical request data (such as
            IP address and browser type) to run and secure the service.
          </li>
          <li>
            <strong>Visitor statistics:</strong> Vercel Web Analytics and
            Speed Insights count page views and measure load speed in
            aggregate. They use no cookies and do not identify you.
          </li>
        </ul>
        <p>
          Your light/dark theme choice is saved only in your own browser and
          never sent to me.
        </p>

        <h2>Consent</h2>
        <p>
          The contact form asks for your consent before sending. You can
          withdraw it at any time by emailing me; I will then delete your
          message and stop processing your data. Withdrawing is as easy as
          giving consent.
        </p>

        <h2>Who processes the data for me</h2>
        <p>
          I don&apos;t sell or share your data with anyone for marketing.
          These service providers process it on my behalf, only to run the
          site:
        </p>
        <ul>
          <li>
            <strong>Vercel</strong>: hosting and aggregate analytics.
          </li>
          <li>
            <strong>Cloudflare</strong>: Turnstile spam protection on the
            form.
          </li>
          <li>
            <strong>Resend</strong>: delivers the form message to my inbox.
          </li>
          <li>
            <strong>Google (Gmail)</strong>: my email inbox, where the message
            arrives.
          </li>
        </ul>
        <p>
          Some of these providers process data outside India. The DPDP Act
          permits this except to countries the Government of India
          restricts, and none of these transfers are to such a country.
        </p>

        <h2>How long it is kept</h2>
        <p>
          Contact messages are deleted automatically 12 months after the last
          message in our conversation, or sooner if you ask. The email
          delivery provider (Resend) keeps its own copy for no more than 30
          days.
        </p>

        <h2>Your rights</h2>
        <p>Under the DPDP Act you can ask me to:</p>
        <ul>
          <li>tell you what personal data of yours I hold and how it is used;</li>
          <li>correct, complete or update it;</li>
          <li>erase it;</li>
          <li>
            nominate someone to exercise these rights for you if you are
            unable to.
          </li>
        </ul>
        <p>
          Email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>{" "}
          with your request. I will respond as soon as possible, and within 90
          days at the latest.
        </p>

        <h2>Complaints</h2>
        <p>
          If you are unhappy with how I&apos;ve handled your data, please email
          me first so I can fix it. If it is still not resolved, you have the
          right to complain to the Data Protection Board of India.
        </p>

        <h2>Security</h2>
        <p>
          The site is served only over HTTPS, the form is protected against
          spam and abuse, and access to messages is limited to me. If a breach
          ever affected your data, I would tell you and the Data Protection
          Board as the law requires.
        </p>

        <h2>Children</h2>
        <p>
          This site is meant for adults. Please don&apos;t use the contact
          form if you are under 18.
        </p>
      </div>
    </Container>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work history — Tata Steel, Indus Insights, MASTH Life.",
};

const roles = [
  {
    org: "Tata Steel Limited",
    title: "Manager, AI Discovery and Governance",
    period: "Nov 2025 — Present",
    bullets: [
      "Built the Tata Steel Digital Assistant from concept to production in 2 months — 13,000+ daily active users (76,000+ rolled out to) across 5 group companies in India and the UK, ~20,000 queries/day.",
      "Integrated 150+ enterprise data sources (100+ databases, 50,000+ documents); cut policy discovery from 2 business days to under a minute.",
      "Beyond that user base, own platform governance and compliance for the Thailand and Singapore (NYK) entities as they come online, including cross-border data transfer discussions across all four countries.",
      "Architecting the next version of TDA on Google's Agent Development Kit (ADK) v2, with improved cross-system connectivity.",
      "Learned networking and systems fundamentals (MPLS links, infra topology) to hold my own in infrastructure negotiations, and lead contract talks with cloud and AI infrastructure partners.",
      "Delivered enterprise-grade security — role-based access control (RBAC), encryption, and VAPT (independent penetration testing) clearance — at 99% uptime.",
      "Launched a no-code AI agent platform now running 200+ agents across 20 departments.",
    ],
  },
  {
    org: "Tata Steel Limited",
    title: "Manager, AI",
    period: "Mar 2025 — Nov 2025",
    bullets: [
      "Delivered an AI-powered development platform used by 700+ developers (React, Flask, GCF, BigQuery, Bedrock).",
      "Built a pipeline converting CXO input into BRDs, FRDs, and deployment-ready technical documentation.",
    ],
  },
  {
    org: "Tata Steel Limited",
    title: "Management Trainee",
    period: "Aug 2024 — Mar 2025",
    bullets: [
      "Rotated across React, C#, R, Python, GCP, SAP, and the Google AI Platform, building the foundation for the AI leadership role that followed.",
    ],
  },
  {
    org: "Indus Insights and Analytical Services",
    title: "Junior Associate",
    period: "Jan 2024 — Jun 2024",
    bullets: [
      "Reduced a mission-critical weekly reporting process from 11 hours to under 1 (91% reduction) via Python automation.",
      "Cut downstream reporting errors by 95% with automated quality frameworks; improved SQL pipeline speed by 73%.",
      "Analyzed large-scale datasets for a US-based lender, contributing to a 22% reduction in credit risk.",
    ],
  },
  {
    org: "Tata Steel Limited",
    title: "IT Intern",
    period: "May 2023 — Jul 2023",
    bullets: [
      "Built 10+ interactive Tableau dashboards analyzing 10M+ data points for operational decision-making.",
      "Proposed an NLP-based enterprise chatbot to senior leadership — endorsed, and later built at enterprise scale after joining full-time.",
    ],
  },
  {
    org: "MASTH Life",
    title: "Member of Technical Staff & App Developer",
    period: "May 2022 — Dec 2022",
    bullets: [
      "Integrated the MASTH and MASTH Guru mental-health apps with Firebase for real-time data and authentication.",
      "Built biometric-secured notes, media streaming, and user profile systems.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <Container className="max-w-3xl py-16 sm:py-24">
      <p className="eyebrow mb-4">Experience</p>
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl">
        Where I&apos;ve built things.
      </h1>

      <ol className="mt-12 space-y-12">
        {roles.map((role, i) => (
          <li key={role.title + role.period} className="border-t border-[var(--color-line)] pt-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                {role.title}
              </h2>
              <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted)]">
                {String(i + 1).padStart(2, "0")} / {role.period}
              </span>
            </div>
            <p className="mt-1 text-sm text-[var(--color-signal)]">
              {role.org}
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--color-muted)]">
              {role.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 bg-[var(--color-muted)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Container>
  );
}

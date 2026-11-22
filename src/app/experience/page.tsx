import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Basecamp } from "@/components/basecamp";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "My career as a trek route, camp by camp: Tata Steel, Indus Insights and MASTH Life.",
};

const roles = [
  {
    org: "Tata Steel Limited",
    title: "Manager, AI Discovery and Governance",
    period: "Nov 2025 — Present",
    bullets: [
      "Lead architect and developer of the Tata Steel Digital Assistant (TDA), leading a team of 5. Built it from concept to production in 2 months: 13,000+ daily active users (76,000+ rolled out to) across 5 group companies in India and the UK, ~20,000 queries/day.",
      "Re-architected TDA from a chatbot into a governed multi-agent platform that completed 9% more benchmark queries, 23% faster, with 87% fewer agent calls per query. It now runs on web, desktop, mobile, Microsoft Teams, voice, a browser extension and add-ins inside Excel, Word, PowerPoint, Outlook and OneNote, on a 300K+ line TypeScript frontend.",
      "Integrated 150+ enterprise data sources (100+ databases, 50,000+ documents) behind a knowledge graph that cites a source and verdict for every claim; cut policy discovery from 2 business days to under a minute.",
      "Launched live AI dashboards built from plain-language requests, cutting dashboard creation from 2–6 months to minutes and built to replace paid BI licences for everyday reporting. Cut executive presentation work from 10–15 days to hours and ticket resolution from 2–3 days to 10 minutes.",
      "Built TDA Secy, a Teams meeting assistant that writes minutes with decisions and action items, reads the shared screen, and can speak and present in the meeting.",
      "Built the governance proofs of concept on TDA (FinOps, threat monitoring and landscape monitoring) that grew into Tata Steel's AI Governance Platform (AGP) for every AI product and model. Two-tier caching now serves 41% of requests and cut model cost by 26%.",
      "Designing and building Company Graph Studio end to end (in development): a governed way to build the company knowledge graph, where every change is rule-checked, approved by named people and kept in a tamper-evident history.",
      "Reverse mentor to Tata Steel's Chief People Officer under the Reverse Mentoring 2.0 programme, shaping enterprise GenAI strategy with initiatives presented to senior leadership and the Managing Director.",
      "Own platform governance and compliance for the Thailand and Singapore (NYK, Tata Steel's Southeast Asia trading arm) entities, including cross-border data transfer across all four countries.",
      "Launched Zen AI, the low-code platform behind Tata Steel's agent fleet, which scaled past 300 specialized agents in 9 months.",
      "Delivered enterprise-grade security (role-based access control, encryption and independent VAPT penetration-test clearance) at 99% uptime, with weekly syncs with Microsoft, Google and AWS.",
      "TDA won Apex Recognition, Tata Steel's top innovation award, at Innovista 2025 (a team award).",
    ],
  },
  {
    org: "Tata Steel Limited",
    title: "Manager, AI",
    period: "Mar 2025 — Nov 2025",
    bullets: [
      "Delivered an AI-powered development platform used by 700+ developers (React, Flask, Google Cloud Functions, BigQuery, Bedrock), saving 10+ hours per developer per week and projecting INR 2–3 Cr a year in productivity gains.",
      "Built a pipeline converting CXO input into business and functional requirement docs (BRDs/FRDs) and deployment-ready technical documentation, cutting project start time by 85%.",
      "Built an agentic infrastructure-as-code pipeline that reduced development cycles from 6 months to 4 weeks.",
      "Built a project management system for 100,000+ users that tracked ideas enabling INR 400 Cr+ in organization-wide savings.",
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
      "Separately optimized a key finance-metric report generation script, cutting runtime from 6 hours to 4 minutes.",
      "Cut downstream reporting errors by 95% with automated quality frameworks; improved SQL pipeline speed by 73%.",
      "Analyzed large-scale datasets for a US-based lender (~$100M revenue), contributing to a 22% reduction in credit risk.",
      "Designed and built 10 Tableau dashboards spanning 40+ key metrics for a financial-sector client, plus data-optimization work identifying and eliminating redundant tables to speed up storage and retrieval — details of the engagement itself stay under the client NDA.",
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
    <>
      <Container className="max-w-5xl pt-16 sm:pt-24">
        <p className="eyebrow mb-4">Experience</p>
        <Basecamp />
      </Container>

      <Container className="max-w-3xl pb-16 pt-20 sm:pb-24">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.02em]">
          The full route
        </h2>

        <ol className="mt-10 space-y-12">
          {roles.map((role, i) => (
            <li
              key={role.title + role.period}
              className="border-t border-[var(--color-line)] pt-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                  {role.title}
                </h3>
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

        <div className="mt-16 border-t border-[var(--color-line)] pt-10 text-center">
          <p className="text-[var(--color-muted)]">
            Looking for someone to fill a role, not just advise on one?
          </p>
          <Link
            href="/contact?reason=opportunity"
            className="mt-4 inline-block border border-[var(--color-fg)] bg-[var(--color-fg)] px-6 py-3 text-sm font-medium text-[var(--color-bg)] transition-colors hover:border-[var(--color-signal)] hover:bg-[var(--color-signal)]"
          >
            Get in touch
          </Link>
        </div>
      </Container>
    </>
  );
}

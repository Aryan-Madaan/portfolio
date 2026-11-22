"use client";

import Link from "next/link";
import { useState } from "react";

// Career drawn as a trek route. Altitude is responsibility, not metres; the
// caption says so. Facts mirror the roles list on the Experience page.
const camps = [
  {
    label: "Camp 1 · 2022",
    org: "MASTH Life",
    title: "Member of Technical Staff & App Developer",
    period: "May to Dec 2022",
    story:
      "Integrated the MASTH and MASTH Guru mental-health apps with Firebase for real-time data and authentication, and built biometric-secured notes, media streaming and user profiles.",
    carried: "shipping real apps to real users",
    x: 60,
    y: 222,
  },
  {
    label: "Camp 2 · 2023",
    org: "Tata Steel",
    title: "IT Intern",
    period: "May to Jul 2023",
    story:
      "Built 10+ Tableau dashboards over 10M+ data points, and pitched an NLP-based enterprise chatbot to senior leadership. It was endorsed, and I later built it at enterprise scale.",
    carried: "an idea leadership said yes to",
    x: 230,
    y: 182,
  },
  {
    label: "Camp 3 · 2024",
    org: "Indus Insights",
    title: "Junior Associate",
    period: "Jan to Jun 2024",
    story:
      "Cut a weekly report from 11 hours to under 1, took another from 6 hours to 4 minutes, reduced reporting errors by 95%, and helped a US lender cut credit risk by 22%.",
    carried: "automate the boring part first",
    x: 420,
    y: 150,
  },
  {
    label: "Camp 4 · 2024",
    org: "Tata Steel",
    title: "Management Trainee",
    period: "Aug 2024 to Mar 2025",
    story:
      "Rotated across React, C#, R, Python, GCP, SAP and the Google AI Platform.",
    carried: "breadth across the whole stack",
    x: 520,
    y: 132,
  },
  {
    label: "Camp 5 · 2025",
    org: "Tata Steel",
    title: "Manager, AI",
    period: "Mar to Nov 2025",
    story:
      "Delivered an AI-powered development platform used by 700+ developers, and a pipeline turning CXO input into requirement docs and deployment-ready technical documentation.",
    carried: "building for 700 developers at once",
    x: 720,
    y: 78,
  },
  {
    label: "Summit · now",
    org: "Tata Steel",
    title: "Manager, AI Discovery and Governance",
    period: "Nov 2025 to present",
    story:
      "Built the Tata Steel Digital Assistant in 2 months: 76,000+ people, 13,000+ daily active users across 5 group companies. Launched Zen AI, behind a fleet of 300+ agents in 9 months. Won Apex Recognition at Innovista 2025, as a team. Off the build, I reverse-mentor Tata Steel's Chief People Officer under the Reverse Mentoring 2.0 programme, working through AI with her in the context of real people decisions.",
    highlight: {
      label: "What I learned mentoring someone two decades senior to me",
      href: "/blog/reverse-mentoring-a-cpo",
    },
    carried: "governance for a fleet of 300+ agents",
    x: 900,
    y: 26,
  },
];

const climbs: { name: string; href?: string }[] = [
  { name: "Chandrashila · 13,000+ ft", href: "/blog/chopta-chandrashila" },
  { name: "Kedarkantha · Maggi at 12,500 ft", href: "/blog/kedarkantha" },
  { name: "Dayara Bugyal", href: "/blog/dayara-bugyal" },
  { name: "Brahmatal" },
  { name: "Kasol Kheerganga" },
  { name: "Meghalaya · caves, not peaks", href: "/blog/meghalaya" },
];

const ridge =
  "M0 250 L60 222 L150 214 L230 182 L330 168 L420 150 L520 132 L620 96 L720 78 L820 40 L900 26 L960 30";

export function Basecamp() {
  const [picked, setPicked] = useState(camps.length - 1);
  const sel = camps[picked];
  const route = camps.map((c, i) => `${i ? "L" : "M"}${c.x} ${c.y}`).join(" ");

  return (
    <section aria-labelledby="basecamp-title">
      <h1
        id="basecamp-title"
        className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-5xl"
      >
        I plan careers the way I plan treks.
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
        One camp at a time, carrying only what the next climb needs. Pick a
        camp to see what happened there.
      </p>

      <figure className="mt-10 border border-[var(--color-line)] bg-[var(--color-surface)] px-5 pt-5">
        <svg
          viewBox="0 0 960 260"
          role="img"
          aria-label="Career route drawn as a mountain climb, rising from 2022 to the present"
          className="block h-auto w-full"
        >
          <path d={`${ridge} L960 260 L0 260 Z`} fill="var(--color-bg)" />
          <path d={ridge} fill="none" stroke="var(--color-line)" strokeWidth="2" />
          <path
            d={route}
            fill="none"
            stroke="var(--color-signal)"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
          {camps.map((c, i) => (
            <circle
              key={c.label}
              cx={c.x}
              cy={c.y}
              r={i === picked ? 9 : 7}
              fill={i === picked ? "var(--color-signal)" : "var(--color-surface)"}
              stroke="var(--color-signal)"
              strokeWidth="2"
              className="transition-all duration-200"
            />
          ))}
          {["2022", "2023", "2024", "2025"].map((year, i) => {
            const c = camps[[0, 1, 2, 4][i]];
            return (
              <text
                key={year}
                x={c.x}
                y={c.y + 24}
                fill="var(--color-muted)"
                fontSize="12"
                textAnchor="middle"
                className="font-[family-name:var(--font-mono)]"
              >
                {year}
              </text>
            );
          })}
        </svg>
        <figcaption className="py-3 font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted)]">
          Altitude here means responsibility, not metres.
        </figcaption>
      </figure>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {camps.map((c, i) => (
          <button
            key={c.label}
            type="button"
            onClick={() => setPicked(i)}
            aria-pressed={i === picked}
            className={`min-h-16 border px-3 py-2.5 text-left transition-colors ${
              i === picked
                ? "border-[var(--color-signal)] bg-[var(--color-surface)]"
                : "border-[var(--color-line)] hover:border-[var(--color-muted)]"
            }`}
          >
            <span className="block font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted)]">
              {c.label}
            </span>
            <span className="mt-1 block text-sm font-semibold leading-snug">
              {c.org}
            </span>
          </button>
        ))}
      </div>

      <div aria-live="polite" className="mt-5 border border-[var(--color-line)] p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-xl font-semibold">{sel.title}</h2>
          <p className="font-[family-name:var(--font-mono)] text-[0.8125rem] text-[var(--color-signal)]">
            {sel.period}
          </p>
        </div>
        <p className="mt-1 text-[0.9375rem] text-[var(--color-muted)]">{sel.org}</p>
        <p className="mt-4 text-[1.0625rem] leading-relaxed">{sel.story}</p>
        {"highlight" in sel && sel.highlight && (
          <Link
            href={sel.highlight.href}
            className="mt-4 inline-flex min-h-11 items-center gap-2 border border-[var(--color-signal)] px-3.5 text-sm text-[var(--color-signal)] transition-opacity hover:opacity-80"
          >
            <span className="font-[family-name:var(--font-mono)] text-xs">camp highlight</span>
            {sel.highlight.label} →
          </Link>
        )}
        <p className="mt-3 font-[family-name:var(--font-mono)] text-[0.8125rem] text-[var(--color-muted)]">
          packed for the next climb:{" "}
          <span className="text-[var(--color-fg)]">{sel.carried}</span>
        </p>
      </div>

      <div className="mt-10">
        <p className="eyebrow">real climbs, off the clock</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {climbs.map((t) => (
            <li key={t.name}>
              {t.href ? (
                <Link
                  href={t.href}
                  className="inline-flex min-h-11 items-center border border-[var(--color-line)] px-3.5 text-sm transition-colors hover:border-[var(--color-signal)] hover:text-[var(--color-signal)]"
                >
                  {t.name}
                </Link>
              ) : (
                <span className="inline-flex min-h-11 items-center border border-[var(--color-line)] px-3.5 text-sm text-[var(--color-muted)]">
                  {t.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

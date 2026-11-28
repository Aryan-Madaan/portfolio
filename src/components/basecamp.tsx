"use client";

import Link from "next/link";
import { useState } from "react";

// Career drawn as a trek: a mountain with a camp for each role and the summit
// as the current one. Altitude is responsibility, not metres; the caption says
// so. The faint peaks behind are treks actually climbed. Camp markers are real
// buttons positioned over the illustration, so they work with keyboard and
// screen readers; the SVG itself is decorative.
const VB_W = 960;
const VB_H = 380;

type Camp = {
  label: string;
  year: string;
  short: string;
  title: string;
  org: string;
  period: string;
  story: string;
  carried: string;
  highlight?: { label: string; href: string };
  x: number;
  y: number;
};

const camps: Camp[] = [
  {
    label: "Camp 1",
    year: "2022",
    short: "App Developer",
    title: "Member of Technical Staff and App Developer",
    org: "MASTH Life",
    period: "May to Dec 2022",
    story:
      "The largest contributor to the app codebase, with about 43% of the team's commits. Integrated the MASTH and MASTH Guru mental-health apps with Firebase for real-time data and authentication, and built biometric-secured notes, media streaming and user profiles.",
    carried: "shipping real apps to real users",
    x: 90,
    y: 312,
  },
  {
    label: "Camp 2",
    year: "2023",
    short: "IT Intern",
    title: "IT Intern",
    org: "Tata Steel",
    period: "May to Jul 2023",
    story:
      "Built 10+ Tableau dashboards over 10M+ data points, and pitched an NLP enterprise chatbot to senior leadership. It was endorsed, and later became TDA.",
    carried: "an idea leadership said yes to",
    x: 240,
    y: 268,
  },
  {
    label: "Camp 3",
    year: "2024",
    short: "Junior Associate",
    title: "Junior Associate",
    org: "Indus Insights",
    period: "Jan to Jun 2024",
    story:
      "My BITS Pilani Practice School placement, after which Indus asked me to stay on. Cut a weekly report from 11 hours to under 1, took another from 6 hours to 4 minutes, reduced reporting errors by 95%, and helped a US lender cut credit risk by 22%.",
    carried: "automate the boring part first",
    x: 400,
    y: 218,
  },
  {
    label: "Camp 4",
    year: "2024",
    short: "Management Trainee",
    title: "Management Trainee",
    org: "Tata Steel",
    period: "Aug 2024 to Mar 2025",
    story:
      "Rotated across React, C#, R, Python, Google Cloud, SAP and the Google AI Platform.",
    carried: "breadth across the whole stack",
    x: 520,
    y: 182,
  },
  {
    label: "Camp 5",
    year: "2025",
    short: "Manager, AI",
    title: "Manager, AI",
    org: "Tata Steel",
    period: "Mar to Nov 2025",
    story:
      "Delivered an AI development platform used by 700+ developers, saving 10+ hours each a week, and a pipeline that turns CXO input into requirement documents, cutting project start time by 85%.",
    carried: "building for 700 developers at once",
    x: 680,
    y: 124,
  },
  {
    label: "Summit",
    year: "now",
    short: "Manager, AI Discovery and Governance",
    title: "Manager, AI Discovery and Governance",
    org: "Tata Steel",
    period: "Nov 2025 to present",
    story:
      "Lead architect and developer of TDA, rolled out to 76,000+ people across 5 group companies, and governance for a fleet of 300+ agents. Won Apex Recognition at Innovista 2025, as a team. Off the build, I reverse-mentor Tata Steel's Chief People Officer under the Reverse Mentoring 2.0 programme.",
    highlight: {
      label: "What I learned mentoring someone two decades senior to me",
      href: "/blog/reverse-mentoring-a-cpo",
    },
    carried: "governance for a fleet of 300+ agents",
    x: 862,
    y: 48,
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

const stars = [
  [120, 60],
  [260, 34],
  [430, 58],
  [560, 28],
  [700, 40],
  [930, 24],
];

export function Basecamp() {
  const [picked, setPicked] = useState(camps.length - 1);
  const sel = camps[picked];

  return (
    <section aria-labelledby="basecamp-title">
      <h1
        id="basecamp-title"
        className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl"
      >
        Six camps, one climb.
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
        Pick a camp, or walk the trail, to see what happened at each one.
      </p>

      <div className="mt-10 flex flex-col gap-4">
        <figure className="m-0 min-w-0 border border-[var(--color-line)] bg-[var(--color-surface)]">
          <div
            className="relative w-full"
            style={{ aspectRatio: `${VB_W} / ${VB_H}` }}
          >
            <svg
              viewBox={`0 0 ${VB_W} ${VB_H}`}
              aria-hidden="true"
              className="absolute inset-0 block h-full w-full text-[var(--color-fg)]"
            >
              {stars.map(([x, y]) => (
                <circle
                  key={`${x}-${y}`}
                  cx={x}
                  cy={y}
                  r="1.2"
                  fill="var(--color-muted)"
                />
              ))}

              {/* Treks actually climbed, behind the career mountain */}
              <path
                d="M0 380 L0 250 L110 205 L210 165 L330 120 L420 168 L500 150 L600 108 L690 150 L780 175 L880 160 L960 175 L960 380 Z"
                fill="currentColor"
                opacity="0.06"
              />
              <text
                x="330"
                y="108"
                textAnchor="middle"
                fill="var(--color-muted)"
                fontSize="11"
                className="font-[family-name:var(--font-mono)]"
              >
                Chandrashila · 13,000+ ft
              </text>
              <text
                x="600"
                y="96"
                textAnchor="middle"
                fill="var(--color-muted)"
                fontSize="11"
                className="font-[family-name:var(--font-mono)]"
              >
                Kedarkantha · 12,500 ft
              </text>

              {/* The career mountain, snow cap and summit flag */}
              <path
                d="M0 380 L0 345 L90 312 L210 275 L330 236 L450 200 L560 170 L680 128 L780 92 L862 48 L905 78 L960 118 L960 380 Z"
                fill="currentColor"
                opacity="0.12"
              />
              <path
                d="M800 84 L862 48 L898 72 L884 76 L870 66 L856 80 L838 74 L822 86 Z"
                fill="#eceae4"
                opacity="0.9"
              />
              <path
                d="M90 312 L170 300 L150 290 L240 268 L330 250 L312 236 L400 218 L470 206 L452 194 L520 182 L612 160 L594 142 L680 124 L770 100 L752 80 L862 48"
                fill="none"
                stroke="var(--color-signal)"
                strokeWidth="2"
                strokeDasharray="5 6"
              />
              <line
                x1="862"
                y1="48"
                x2="862"
                y2="16"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path d="M862 16 L888 23 L862 30 Z" fill="var(--color-signal)" />
            </svg>

            {camps.map((c, i) => {
              const on = i === picked;
              return (
                <button
                  key={c.label}
                  type="button"
                  onClick={() => setPicked(i)}
                  aria-pressed={on}
                  aria-label={`${c.label}, ${c.year}: ${c.short}`}
                  className="absolute flex min-h-11 min-w-11 -translate-x-1/2 -translate-y-[85%] flex-col items-center gap-0.5 p-1"
                  style={{
                    left: `${(c.x / VB_W) * 100}%`,
                    top: `${(c.y / VB_H) * 100}%`,
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="block h-0 w-0 border-x-[9px] border-b-[14px] border-x-transparent transition-colors"
                    style={{
                      borderBottomColor: on
                        ? "var(--color-signal)"
                        : "var(--color-muted)",
                      filter: on
                        ? "drop-shadow(0 0 6px var(--color-signal))"
                        : "none",
                    }}
                  />
                  <span
                    className="font-[family-name:var(--font-mono)] text-[0.6875rem]"
                    style={{
                      color: on ? "var(--color-signal)" : "var(--color-muted)",
                    }}
                  >
                    {c.year}
                  </span>
                </button>
              );
            })}
          </div>
          <figcaption className="border-t border-[var(--color-line)] px-4 py-3 font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted)]">
            Altitude here means responsibility, not metres. The faint peaks
            behind are treks I&apos;ve actually climbed.
          </figcaption>
        </figure>

        <div
          aria-live="polite"
          className="grid min-w-0 gap-6 border border-[var(--color-line)] p-6 md:grid-cols-[minmax(0,1fr)_18rem]"
        >
          <div className="min-w-0">
            <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-signal)]">
              {sel.label} · {sel.period}
            </p>
            <h2 className="mt-2.5 text-xl font-semibold leading-snug">
              {sel.title}
            </h2>
            <p className="mt-1 text-[0.9375rem] text-[var(--color-muted)]">
              {sel.org}
            </p>
            <p className="mt-4 max-w-3xl leading-relaxed">{sel.story}</p>
          </div>
          <div className="flex min-w-0 flex-col">
            {sel.highlight && (
              <Link
                href={sel.highlight.href}
                className="inline-flex min-h-11 items-center gap-2 self-start border border-[var(--color-signal)] px-3.5 py-2 text-sm text-[var(--color-signal)] transition-opacity hover:opacity-80"
              >
                <span className="font-[family-name:var(--font-mono)] text-xs">
                  camp highlight
                </span>
                {sel.highlight.label} →
              </Link>
            )}
            <p className="mt-3 font-[family-name:var(--font-mono)] text-[0.8125rem] text-[var(--color-muted)]">
              packed for the next climb:{" "}
              <span className="text-[var(--color-fg)]">{sel.carried}</span>
            </p>
            <div className="flex-1" />
            <div className="mt-6 flex justify-between gap-2.5">
              <button
                type="button"
                onClick={() => setPicked((p) => Math.max(0, p - 1))}
                disabled={picked === 0}
                className="min-h-11 border border-[var(--color-line)] px-3.5 text-sm transition-colors hover:border-[var(--color-muted)] disabled:opacity-40"
              >
                ← Down the trail
              </button>
              <button
                type="button"
                onClick={() =>
                  setPicked((p) => Math.min(camps.length - 1, p + 1))
                }
                disabled={picked === camps.length - 1}
                className="min-h-11 bg-[var(--color-signal)] px-3.5 text-sm font-semibold text-[var(--color-signal-contrast)] transition-opacity hover:opacity-90 disabled:opacity-40"
              >
                Up the trail →
              </button>
            </div>
          </div>
        </div>
      </div>

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
              {c.label} · {c.year}
            </span>
            <span className="mt-1 block text-sm font-semibold leading-snug">
              {c.short}
            </span>
          </button>
        ))}
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

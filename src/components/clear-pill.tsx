"use client";

import { useState } from "react";

// A nod to a certain film about a clear pill: the section starts out of focus
// and sharpens on demand to show what TDA changed. The blur is visual only;
// screen readers get the full text either way, and reduced-motion users get an
// instant switch instead of a slow fade.
const rows = [
  { task: "Finding a policy", before: "2 business days", after: "< 1 minute" },
  { task: "A new dashboard", before: "2 to 6 months", after: "minutes" },
  { task: "An executive deck", before: "10 to 15 days", after: "hours" },
  { task: "An IT or HR ticket", before: "2 to 3 days", after: "10 minutes" },
];

export function ClearPill({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;
  const [clear, setClear] = useState(false);
  const fog = clear
    ? "blur-0 saturate-100 opacity-100"
    : "blur-[6px] saturate-[0.15] opacity-60";

  return (
    <div>
      <Heading className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl">
        Most companies use a fraction of what they know.
      </Heading>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
        The knowledge is there. It&apos;s just buried in PDFs, inboxes and
        people&apos;s heads. This is what work looks like before and after TDA.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={() => setClear((c) => !c)}
          aria-pressed={clear}
          className="inline-flex min-h-[52px] items-center gap-3 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] py-0 pl-3.5 pr-5 text-base font-semibold transition-colors hover:border-[var(--color-signal)]"
        >
          <span
            aria-hidden="true"
            className="inline-block h-5 w-11 rounded-full shadow-[0_0_12px_var(--color-signal)]"
            style={{
              background:
                "linear-gradient(90deg, var(--color-fg) 50%, var(--color-signal) 50%)",
            }}
          />
          {clear ? "Back to the fog" : "Take the clear pill"}
        </button>
        <span className="font-[family-name:var(--font-mono)] text-[0.8125rem] text-[var(--color-muted)]">
          {clear ? "everything in focus" : "running in the fog"}
        </span>
      </div>

      <div
        className={`mt-8 grid grid-cols-1 gap-3 transition-[filter,opacity] duration-[900ms] ease-out motion-reduce:transition-none sm:grid-cols-2 lg:grid-cols-4 ${fog}`}
      >
        {rows.map((r) => (
          <div
            key={r.task}
            className="border border-[var(--color-line)] bg-[var(--color-surface)] p-5"
          >
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.08em] text-[var(--color-muted)]">
              {r.task}
            </p>
            <p className="mt-3 text-[0.9375rem] text-[var(--color-muted)]">
              Before: <span className="line-through">{r.before}</span>
            </p>
            <p className="mt-1.5 text-3xl font-semibold tracking-[-0.02em] text-[var(--color-signal)]">
              {r.after}
            </p>
          </div>
        ))}
      </div>

      <p
        className={`mt-6 max-w-2xl leading-relaxed text-[var(--color-muted)] transition-[filter,opacity] duration-[900ms] ease-out motion-reduce:transition-none ${fog}`}
      >
        TDA is rolled out to 76,000+ people across 5 Tata Group companies.
        Every answer shows its sources, so the clarity holds up when someone
        checks.
      </p>
      <p className="mt-8 font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted)]">
        A nod to a certain film about a clear pill. No pill required; this one
        is just good retrieval.
      </p>
    </div>
  );
}

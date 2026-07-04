"use client";

import { useState, type ReactNode } from "react";

export function Spoiler({ children }: { children: ReactNode }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="my-8 border border-[var(--color-line)]">
      <button
        type="button"
        onClick={() => setRevealed((v) => !v)}
        aria-expanded={revealed}
        className="eyebrow flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:text-[var(--color-signal)]"
      >
        <span>{revealed ? "Hide solution" : "Reveal solution"}</span>
        <span aria-hidden="true">{revealed ? "−" : "+"}</span>
      </button>
      {revealed && (
        <div className="prose-schematic border-t border-[var(--color-line)] px-4 py-5">
          {children}
        </div>
      )}
    </div>
  );
}

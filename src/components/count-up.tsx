"use client";

import { useEffect, useRef, useState } from "react";

function parseLeadingNumber(value: string): { num: number; suffix: string } | null {
  const match = value.match(/^([\d,]+)(.*)$/);
  if (!match) return null;
  const num = Number(match[1].replace(/,/g, ""));
  if (Number.isNaN(num)) return null;
  return { num, suffix: match[2] };
}

export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const parsed = parseLeadingNumber(value);

  useEffect(() => {
    if (!parsed) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 900;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(parsed.num * eased);
          setDisplay(`${current.toLocaleString("en-US")}${parsed.suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <span ref={ref}>{display}</span>;
}

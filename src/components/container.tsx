import type { ReactNode } from "react";

// Pages pass their own max-w-* for narrower reading columns. Two max-width
// utilities on one element don't override by order (the generated CSS decides),
// so the default is only applied when the caller hasn't set one.
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const width = /(^|\s)max-w-/.test(className) ? "" : "max-w-6xl";
  return (
    <div className={`mx-auto w-full px-6 ${width} ${className}`}>
      {children}
    </div>
  );
}

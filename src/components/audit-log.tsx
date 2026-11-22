// Decorative, illustrative audit-trail panel for the home hero. These are not
// real log lines from any system; the caption says so on the page.
type Entry = {
  time: string;
  action: string;
  details: string[];
  outcome: "allow" | "approval";
  note: string;
};

const entries: Entry[] = [
  {
    time: "10:42:07",
    action: "retrieve",
    details: ["subject = plant-engineer", "actor   = safety-agent"],
    outcome: "allow",
    note: "3 docs, 1 field redacted",
  },
  {
    time: "10:42:09",
    action: "tool.send_email",
    details: ["input from untrusted source"],
    outcome: "approval",
    note: "trifecta rule",
  },
  {
    time: "10:42:11",
    action: "model.route",
    details: [],
    outcome: "allow",
    note: "in-region deployment",
  },
];

export function AuditLog() {
  return (
    <figure className="m-0 border border-[var(--color-line)] bg-[var(--color-surface)] font-[family-name:var(--font-mono)] text-[0.8125rem] leading-[1.7]">
      <figcaption className="flex justify-between border-b border-[var(--color-line)] px-4 py-3 text-[var(--color-muted)]">
        <span>audit.log</span>
        <span>illustrative</span>
      </figcaption>
      <div className="space-y-3 p-4">
        {entries.map((e) => (
          <div key={e.time}>
            <p className="text-[var(--color-muted)]">
              {e.time} <span className="text-[var(--color-fg)]">{e.action}</span>
            </p>
            {e.details.map((d) => (
              <p key={d} className="whitespace-pre pl-4 text-[var(--color-muted)]">
                {d}
              </p>
            ))}
            <p className="pl-4">
              <span
                className={
                  e.outcome === "allow"
                    ? "text-[var(--color-allow)]"
                    : "text-[var(--color-signal)]"
                }
              >
                {e.outcome === "allow" ? "allow" : "needs approval"}
              </span>{" "}
              <span className="text-[var(--color-muted)]">· {e.note}</span>
            </p>
          </div>
        ))}
      </div>
    </figure>
  );
}

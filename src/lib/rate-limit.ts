// Best-effort in-memory rate limit. On serverless this resets per cold start,
// so it's a secondary defense — Turnstile + the honeypot field carry the real load.
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  hits.set(key, timestamps);

  if (hits.size > 5000) {
    const oldestAllowed = now - WINDOW_MS;
    for (const [k, v] of hits) {
      if (v.every((t) => t < oldestAllowed)) hits.delete(k);
    }
  }

  return timestamps.length > MAX_REQUESTS;
}

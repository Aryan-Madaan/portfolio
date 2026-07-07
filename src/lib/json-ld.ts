// JSON.stringify does not escape "<", so a value containing the literal
// substring "</script>" would prematurely close the surrounding <script> tag
// and let anything after it render as raw HTML. Escaping "<" as a unicode
// sequence keeps the JSON valid while making that breakout impossible.
export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

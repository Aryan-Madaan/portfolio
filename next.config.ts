import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

const csp = [
  "default-src 'self'",
  // React/Turbopack's dev-mode fast refresh needs 'unsafe-eval'; production never uses eval().
  `script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self' data:",
  `connect-src 'self' https://challenges.cloudflare.com${isDev ? " ws://localhost:* http://localhost:*" : ""}`,
  "frame-src https://challenges.cloudflare.com",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  // experimental.sri (Next's built-in Subresource Integrity) was enabled here
  // for defense-in-depth on top of the CSP below, but it broke script loading
  // in production on Vercel — the build-time integrity hash didn't match what
  // Vercel's edge actually served, throwing "Failed integrity metadata check"
  // and preventing hydration entirely. It's an experimental feature by Next's
  // own labeling; disabled rather than debugged live, since the CSP's
  // `script-src 'self'` already restricts scripts to same-origin, which is
  // most of what SRI would add here anyway.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

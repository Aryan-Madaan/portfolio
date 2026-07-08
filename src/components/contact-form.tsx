"use client";

import { useEffect, useState, type FormEvent } from "react";
import Script from "next/script";
import { siteConfig } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";
type TurnstileStatus = "pending" | "solved" | "blocked";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

// Widget has this long to either succeed or error out before we assume something
// (Brave Shields, an ad-blocker, NoScript) is silently preventing it from ever
// calling back at all — which is otherwise indistinguishable from "still loading."
const TURNSTILE_TIMEOUT_MS = 8000;

declare global {
  interface Window {
    __onTurnstileSuccess?: () => void;
    __onTurnstileError?: () => void;
    turnstile?: { reset: (widgetId?: string) => void };
  }
}

export function ContactForm({ defaultReason = "opportunity" }: { defaultReason?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileStatus, setTurnstileStatus] = useState<TurnstileStatus>("pending");

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;

    window.__onTurnstileSuccess = () => setTurnstileStatus("solved");
    window.__onTurnstileError = () => setTurnstileStatus("blocked");

    const timeout = window.setTimeout(() => {
      setTurnstileStatus((current) => (current === "pending" ? "blocked" : current));
    }, TURNSTILE_TIMEOUT_MS);

    return () => {
      window.clearTimeout(timeout);
      delete window.__onTurnstileSuccess;
      delete window.__onTurnstileError;
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const turnstileToken = formData.get("cf-turnstile-response");

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      reason: formData.get("reason"),
      message: formData.get("message"),
      company: formData.get("company") ?? "",
      turnstileToken,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong.");
        // A Turnstile token is single-use — Cloudflare has already consumed it
        // in the verify call above, win or lose. Get a fresh one queued up
        // before the visitor retries, instead of resubmitting a dead token.
        window.turnstile?.reset();
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="border border-[var(--color-line)] p-6">
        <p className="font-[family-name:var(--font-display)] text-lg font-semibold">
          Message sent.
        </p>
        <p className="mt-2 text-sm text-[var(--color-muted)]">
          I read every message myself — I&apos;ll get back to you directly.
        </p>
      </div>
    );
  }

  return (
    <>
      {TURNSTILE_SITE_KEY && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
        />
      )}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Honeypot — hidden via layout, not `type=hidden` or `display:none`, since bots skip those */}
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div>
          <label htmlFor="name" className="eyebrow mb-2 block">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            className="w-full border border-[var(--color-line)] bg-transparent px-3 py-2.5 text-sm focus:border-[var(--color-signal)] focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="eyebrow mb-2 block">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            className="w-full border border-[var(--color-line)] bg-transparent px-3 py-2.5 text-sm focus:border-[var(--color-signal)] focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="reason" className="eyebrow mb-2 block">
            Reason
          </label>
          <select
            id="reason"
            name="reason"
            defaultValue={defaultReason}
            className="w-full border border-[var(--color-line)] bg-[var(--color-bg)] px-3 py-2.5 text-sm focus:border-[var(--color-signal)] focus:outline-none"
          >
            <option value="opportunity">A role or opportunity</option>
            <option value="advisory">An advisory engagement</option>
            <option value="other">Something else</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="eyebrow mb-2 block">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            maxLength={3000}
            rows={6}
            className="w-full border border-[var(--color-line)] bg-transparent px-3 py-2.5 text-sm focus:border-[var(--color-signal)] focus:outline-none"
          />
        </div>

        {TURNSTILE_SITE_KEY && (
          <div>
            <div
              className="cf-turnstile"
              data-sitekey={TURNSTILE_SITE_KEY}
              data-callback="__onTurnstileSuccess"
              data-error-callback="__onTurnstileError"
            />
            <p className="mt-1 text-xs text-[var(--color-muted)]">
              Protected by Cloudflare Turnstile.
            </p>
            {turnstileStatus === "blocked" && (
              <p role="status" className="mt-2 text-xs text-[var(--color-signal)]">
                The verification widget above doesn&apos;t seem to be loading —
                this is common with Brave Shields or a strict ad-blocker. Try
                turning shields off for this site and refreshing, or email me
                directly at{" "}
                <a href={`mailto:${siteConfig.email}`} className="underline">
                  {siteConfig.email}
                </a>
                .
              </p>
            )}
          </div>
        )}

        {status === "error" && (
          <p role="status" aria-live="polite" className="text-sm text-[var(--color-signal)]">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="border border-[var(--color-fg)] bg-[var(--color-fg)] px-6 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-colors hover:border-[var(--color-signal)] hover:bg-[var(--color-signal)] disabled:opacity-50"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
      </form>
    </>
  );
}

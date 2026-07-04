import { NextResponse } from "next/server";
import { z } from "zod";
import { isRateLimited } from "@/lib/rate-limit";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(200),
  reason: z.enum(["opportunity", "advisory", "other"]),
  message: z.string().trim().min(10).max(3000),
  // Honeypot: real users never fill this in — it's hidden via CSS, not `type="hidden"`,
  // since bots specifically skip hidden inputs.
  company: z.string().max(0).optional().or(z.literal("")),
  turnstileToken: z.string().optional(),
});

async function verifyTurnstile(token: string | undefined, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // not configured yet — honeypot + rate limit still apply
  if (!token) return false;

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
    }
  );
  const data = await res.json();
  return Boolean(data.success);
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Try again shortly." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 400 }
    );
  }

  const { name, email, reason, message, company, turnstileToken } = parsed.data;

  // Honeypot tripped — pretend success so the bot doesn't learn anything, but drop it.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  const verified = await verifyTurnstile(turnstileToken, ip);
  if (!verified) {
    return NextResponse.json(
      { error: "Verification failed. Please try again." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured; contact form message dropped.");
    return NextResponse.json(
      { error: "Contact form isn't configured yet. Please email directly." },
      { status: 503 }
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.email;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Portfolio Contact <${fromEmail}>`,
        to: [toEmail],
        reply_to: email,
        subject: `[${reason}] New message from ${name}`,
        text: `From: ${name} <${email}>\nReason: ${reason}\n\n${message}`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend API error:", detail);
      return NextResponse.json(
        { error: "Couldn't send the message. Please try again." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "Couldn't send the message. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

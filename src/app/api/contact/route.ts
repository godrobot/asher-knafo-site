import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// This route runs only on the server. The recipient address is never sent
// to the browser and never appears in the page source — it lives here and,
// preferably, in the CONTACT_TO_EMAIL environment variable set in Vercel.
export const runtime = "nodejs";

const RECIPIENT = process.env.CONTACT_TO_EMAIL || "knafoashbrit@gmail.com";

// --- very small in-memory rate limiter -------------------------------------
// Note: this resets whenever the serverless function cold-starts, so it is a
// light deterrent rather than a hard guarantee. It still stops the common
// case of a script hammering the endpoint on a warm instance.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  hits.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

function countUrls(text: string): number {
  return (text.match(/https?:\/\//gi) || []).length;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      message,
      // Honeypot: a field real visitors never see or fill in.
      website,
      // Anti-bot timing trap: timestamp (ms) captured when the form rendered.
      formRenderedAt,
      // A tiny arithmetic check, generated and shown client-side.
      captchaA,
      captchaB,
      captchaAnswer,
    } = body ?? {};

    // 1. Honeypot — bots tend to fill every field.
    if (typeof website === "string" && website.trim() !== "") {
      return NextResponse.json({ ok: true }); // pretend success, drop silently
    }

    // 2. Basic field validation.
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      name.trim().length < 2 ||
      message.trim().length < 5 ||
      name.length > 200 ||
      email.length > 200 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { ok: false, error: "invalid_fields" },
        { status: 400 }
      );
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { ok: false, error: "invalid_email" },
        { status: 400 }
      );
    }

    // 3. Timing trap — a genuine visitor needs at least a couple of seconds
    //    to read the form and type into it; a submission that arrives faster
    //    is almost certainly scripted. Also reject a very stale timestamp.
    const now = Date.now();
    const renderedAt = Number(formRenderedAt);
    if (
      !Number.isFinite(renderedAt) ||
      now - renderedAt < 2500 ||
      now - renderedAt > 1000 * 60 * 60 * 2
    ) {
      return NextResponse.json({ ok: true }); // pretend success, drop silently
    }

    // 4. Arithmetic challenge, recomputed server-side (no secret needed).
    const a = Number(captchaA);
    const b = Number(captchaB);
    const answer = Number(captchaAnswer);
    if (!Number.isFinite(a) || !Number.isFinite(b) || a + b !== answer) {
      return NextResponse.json(
        { ok: false, error: "captcha_failed" },
        { status: 400 }
      );
    }

    // 5. Crude content heuristic — messages stuffed with links are usually spam.
    if (countUrls(message) > 2) {
      return NextResponse.json({ ok: true }); // pretend success, drop silently
    }

    // 6. Rate limiting by IP.
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { ok: false, error: "rate_limited" },
        { status: 429 }
      );
    }

    // 7. Send the email. Requires GMAIL_USER + GMAIL_APP_PASSWORD to be set
    //    as environment variables in the Vercel project settings.
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailAppPassword) {
      console.error(
        "Contact form: GMAIL_USER / GMAIL_APP_PASSWORD are not configured."
      );
      return NextResponse.json(
        { ok: false, error: "mail_not_configured" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailAppPassword },
    });

    await transporter.sendMail({
      from: `"טופס יצירת קשר — אתר אשר כנפו" <${gmailUser}>`,
      to: RECIPIENT,
      replyTo: email,
      subject: `הודעה חדשה מהאתר מאת ${name}`,
      text: `שם: ${name}\nדוא"ל: ${email}\n\n${message}`,
      html: `<div dir="rtl" style="font-family:sans-serif;font-size:15px;line-height:1.7">
        <p><strong>שם:</strong> ${escapeHtml(name)}</p>
        <p><strong>דוא"ל:</strong> ${escapeHtml(email)}</p>
        <p><strong>הודעה:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      </div>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { ok: false, error: "server_error" },
      { status: 500 }
    );
  }
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

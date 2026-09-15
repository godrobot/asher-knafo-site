"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [renderedAt] = useState(() => Date.now());
  // A tiny arithmetic challenge — generated once per page load via lazy
  // state initialization (the recommended way to call an impure function
  // exactly once, rather than inside useMemo).
  const [captcha] = useState(() => ({
    a: 1 + Math.floor(Math.random() * 8),
    b: 1 + Math.floor(Math.random() * 8),
  }));
  const [captchaInput, setCaptchaInput] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      message: String(data.get("message") || ""),
      website: String(data.get("website") || ""), // honeypot
      formRenderedAt: renderedAt,
      captchaA: captcha.a,
      captchaB: captcha.b,
      captchaAnswer: Number(captchaInput),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus("sent");
        form.reset();
        setCaptchaInput("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" aria-live="polite" className="card-panel p-8 text-center">
        <p className="font-display text-xl font-bold text-gold-300">
          תודה רבה!
        </p>
        <p className="mt-3 text-sepia-200">
          ההודעה נשלחה בהצלחה. נחזור אליכם בהקדם.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-panel space-y-5 p-8">
      {/* Honeypot field — hidden from real visitors via CSS, not just
          off-screen positioning, so it survives most bot heuristics. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="website">אל תמלאו שדה זה</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-sepia-300" htmlFor="name">
          שם מלא
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={200}
          className="w-full rounded-md border border-gold-400/25 bg-sepia-950/60 px-4 py-3 text-sepia-100 outline-none focus:border-gold-400"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm text-sepia-300" htmlFor="email">
          דוא&quot;ל
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={200}
          className="w-full rounded-md border border-gold-400/25 bg-sepia-950/60 px-4 py-3 text-sepia-100 outline-none focus:border-gold-400"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm text-sepia-300" htmlFor="message">
          הודעה
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          maxLength={5000}
          className="w-full rounded-md border border-gold-400/25 bg-sepia-950/60 px-4 py-3 text-sepia-100 outline-none focus:border-gold-400"
        />
      </div>

      <div>
        <label
          className="mb-2 block text-sm text-sepia-300"
          htmlFor="captcha"
        >
          כדי לוודא שאתם לא רובוט: כמה זה {captcha.a} + {captcha.b}?
        </label>
        <input
          id="captcha"
          name="captcha"
          type="number"
          required
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value)}
          className="w-32 rounded-md border border-gold-400/25 bg-sepia-950/60 px-4 py-3 text-sepia-100 outline-none focus:border-gold-400"
        />
      </div>

      {status === "error" ? (
        <p role="alert" className="text-sm text-red-400">
          משהו השתבש בשליחה. אפשר לנסות שוב, או לפנות דרך עמוד הפייסבוק.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full border border-gold-400 bg-gold-400/10 px-8 py-3 text-sm font-medium tracking-wide text-gold-200 transition-colors hover:bg-gold-400 hover:text-sepia-950 disabled:opacity-50"
      >
        {status === "sending" ? "שולח..." : "שליחה"}
      </button>
    </form>
  );
}

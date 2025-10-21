// app/contact/ContactForm.tsx
'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function ContactForm() {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';
  const [tsReady, setTsReady] = useState(false);
  useEffect(() => setTsReady(true), []);

  return (
    <>
      {/* Turnstile loader */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        onReady={() => setTsReady(true)}
      />

      <form
        className="mt-8 grid max-w-2xl gap-5"
        method="post"
        action="/api/contact"
        noValidate
      >
        {/* Where the API should redirect on success */}
        <input type="hidden" name="redirect" value="/contact?sent=1" />

        {/* Honeypot (spam trap) — keep name in sync with API */}
        <input
          type="text"
          name="website"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <label className="block">
          <span className="text-sm font-medium text-zinc-800">Your name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
            placeholder="John Doe"
            aria-required="true"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-zinc-800">Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
            placeholder="you@example.com"
            aria-required="true"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-zinc-800">
            Phone (optional)
          </span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
            placeholder="+234…"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-zinc-800">Message</span>
          <textarea
            name="message"
            rows={6}
            required
            className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
            placeholder="How can we help?"
            aria-required="true"
          />
        </label>

        {/* Turnstile widget (VISIBLE). This injects a hidden input named `cf-turnstile-response`. */}
        {!siteKey && (
          <p className="text-sm text-red-600">
            Captcha not configured (missing NEXT_PUBLIC_TURNSTILE_SITE_KEY).
          </p>
        )}
        {siteKey && tsReady && (
          <div
            className="cf-turnstile"
            data-sitekey={siteKey}
            data-action="contact"
            data-theme="auto"
          />
        )}
        <noscript>
          <div className="text-sm text-zinc-600">
            Please enable JavaScript to verify you’re human before submitting
            this form.
          </div>
        </noscript>

        <div>
          <button
            type="submit"
            className="inline-flex items-center rounded-xl bg-brand px-5 py-3 font-semibold text-white hover:bg-brand/90 focus:outline-none focus:ring-2 focus:ring-brand/40"
          >
            Send
          </button>
        </div>

        <p className="text-xs text-zinc-500">
          Prefer WhatsApp?{' '}
          <a
            className="text-emerald-700 underline"
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '2347026921633'}?text=${encodeURIComponent('Hello Trucast! I need assistance.')}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            Click here
          </a>{' '}
          for a quick chat.
        </p>
      </form>
    </>
  );
}

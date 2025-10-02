// app/contact/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-dynamic'; // skip SSG to prevent prerender errors
export const revalidate = 0;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trucast-ng.com';
const PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '2347026921633';
const WA_CHAT = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  'Hello Trucast! I need assistance.'
)}`;

export const metadata: Metadata = {
  title: 'Contact | Trucast Nigeria',
  description:
    'Contact Trucast Nigeria for quotes, orders or support on electrical accessories, LED lighting & smart devices. Call, WhatsApp or email—fast response nationwide.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Trucast Nigeria',
    description:
      'Talk to Trucast Nigeria: sales & support for electrical accessories, LED lighting, and smart devices.',
    url: '/contact',
  },
};

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'Trucast Nigeria Limited',
    url: SITE_URL,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: `+${PHONE}`,
        email: 'support@trucast-ng.com',
        areaServed: 'NG',
        availableLanguage: ['en'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: `+${PHONE}`,
        email: 'sales@trucast-ng.com',
        areaServed: 'NG',
        availableLanguage: ['en'],
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* SEO: JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      <section className="container py-12">
        <h1 className="text-3xl font-bold">Contact Trucast</h1>
        <p className="mt-2 max-w-2xl text-zinc-600">We’d love to hear from you.</p>

        {/* Quick options */}
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            className="btn-primary"
            href={WA_CHAT}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Chat with Trucast on WhatsApp"
          >
            Chat on WhatsApp
          </a>
          <a className="btn-outline" href="mailto:sales@trucast-ng.com">
            Email Sales
          </a>
          <Link className="btn-outline" href="/returns">
            Returns &amp; Warranty
          </Link>
        </div>

        {/* Contact form (no JS; hook up to /api/contact later if desired) */}
        <form
          className="mt-8 grid max-w-2xl gap-5"
          method="post"
          action="/api/contact" // optional: create this route to handle submits
          noValidate
        >
          {/* Honeypot for spam bots */}
          <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

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
            <span className="text-sm font-medium text-zinc-800">Your email or phone</span>
            <input
              type="text"
              name="contact"
              required
              autoComplete="email"
              className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
              placeholder="you@example.com or +234…"
              aria-required="true"
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

          <div>
            <button
              type="submit"
              className="inline-flex items-center rounded-xl bg-brand px-5 py-3 font-semibold text-white hover:bg-brand/90 focus:outline-none focus:ring-2 focus:ring-brand/40"
            >
              Send
            </button>
          </div>

          {/* Fallback text */}
          <p className="text-xs text-zinc-500">
            Prefer WhatsApp?{' '}
            <a className="text-emerald-700 underline" href={WA_CHAT} target="_blank" rel="noreferrer noopener">
              Click here
            </a>{' '}
            for a quick chat.
          </p>
        </form>
      </section>
    </>
  );
}

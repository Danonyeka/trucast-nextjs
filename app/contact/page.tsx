// app/contact/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from './ContactForm';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trucast-ng.com';
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

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { sent?: string; error?: string };
}) {
  const sent = searchParams?.sent === '1';
  const err = searchParams?.error;

  return (
    <>
      {/* SEO: JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      <section className="container py-12">
        <h1 className="text-3xl font-bold">Contact Trucast</h1>
        <p className="mt-2 max-w-2xl text-zinc-600">
          We’d love to hear from you.
        </p>

        {sent && (
          <div
            role="status"
            aria-live="polite"
            className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800"
          >
            Thanks! Your message was sent. We’ll get back to you shortly.
          </div>
        )}

        {err && (
          <div
            role="alert"
            className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800"
          >
            {decodeURIComponent(err)}
          </div>
        )}

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

        {/* Client-side form with Turnstile */}
        <ContactForm />
      </section>
    </>
  );
}

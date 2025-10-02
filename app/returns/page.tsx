// app/returns/page.tsx
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic'; // skip SSG to prevent prerender error
export const revalidate = 0;

const PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '2347026921633';
const WA_CHAT = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  'Hello Trucast! I need help with a return or warranty.'
)}`;

export const metadata: Metadata = {
  title: 'Returns & Warranty | Trucast Nigeria',
  description:
    'Read Trucast Nigeria’s returns policy and warranty terms for electrical accessories and lighting. Learn how to request returns or exchanges and what’s covered.',
  alternates: { canonical: '/returns' },
  openGraph: {
    title: 'Returns & Warranty | Trucast Nigeria',
    description:
      'How to request a return, exchange, or warranty service for Trucast products.',
    url: '/returns',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long do I have to request a return?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can request a return or exchange within 7 calendar days of delivery or pickup.',
      },
    },
    {
      '@type': 'Question',
      name: 'What items are eligible?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Items must be unused, in original packaging, with all accessories and proof of purchase.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I start a return?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contact Trucast with your order number and reason; our team will guide pickup or drop-off.',
      },
    },
  ],
} as const;

export default function ReturnsPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="container py-10 md:py-14">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">Returns &amp; Refunds Policy</h1>

        <p className="mt-3 max-w-3xl text-zinc-700">
          You can request a return or exchange within <strong>7 calendar days</strong> of delivery or pickup.
          Items must be unused, in original packaging, and include all accessories and proof of purchase.
        </p>

        {/* Value sections */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="card p-5">
            <h3 className="font-semibold">Eligibility</h3>
            <p className="mt-2 text-sm text-zinc-600">
              New, unused condition; all accessories/manuals; proof of purchase within 7 days.
            </p>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold">What’s Covered</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Manufacturing defects and functional faults under normal use (per item warranty).
            </p>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold">Not Covered</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Physical damage, burns, misuse, incorrect installation, or tampering with seals/labels.
            </p>
          </div>
        </div>

        {/* How to start */}
        <div className="mt-10 card p-6">
          <h3 className="font-semibold">Start a Return / Warranty Claim</h3>
          <ol className="mt-2 list-decimal pl-5 text-sm text-zinc-700 space-y-1">
            <li>Provide order number and contact details.</li>
            <li>Describe the issue; attach clear photos/video if applicable.</li>
            <li>We’ll confirm eligibility and share pickup/drop-off instructions.</li>
          </ol>
          <div className="mt-4 flex flex-wrap gap-3">
            <a className="btn-primary" href="mailto:support@trucast-ng.com">
              Email Support
            </a>
            <a
              className="btn-outline"
              href={WA_CHAT}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Chat support on WhatsApp"
            >
              WhatsApp Support
            </a>
          </div>
        </div>

        {/* Refund timeline */}
        <div className="mt-6 text-xs text-zinc-500">
          Refunds (where applicable) are processed to the original payment method after inspection, typically within
          3–7 business days.
        </div>
      </section>
    </>
  );
}

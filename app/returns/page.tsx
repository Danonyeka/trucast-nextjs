// app/returns/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Returns & Refunds Policy (7-Day) | Trucast Nigeria',
  description:
    'Request a return, exchange, or refund within 7 calendar days of delivery or pickup. Learn eligibility, steps and timelines.',
  openGraph: {
    title: 'Returns & Refunds Policy (7-Day) | Trucast Nigeria',
    description:
      'Request a return, exchange, or refund within 7 calendar days of delivery or pickup. Learn eligibility, steps and timelines.',
    url: 'https://www.trucast-ng.com/returns',
    type: 'article',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: '/returns' },
};

function firstEmail(v?: string) {
  if (!v) return 'sales@trucast-ng.com';
  return v.split(/[;,]/)[0].trim();
}

export default function ReturnsPage() {
  const email = firstEmail(site.emailPrimary);
  const waBase = (site.waLink || 'https://wa.me/2347026921633').split('?')[0];
  const waReturnLink = `${waBase}?text=${encodeURIComponent(
    'Return request: Order #_____ • Item(s): _____ • Reason: _____ • Photos: (attach if possible)'
  )}`;

  // JSON-LD (rendered as a plain <script> to avoid client-only imports)
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can I return an item?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Yes. You may request a return or exchange within 7 calendar days of delivery or pickup provided the item is unused, in original packaging with all accessories, and in resalable condition. Faulty or damaged-on-arrival items are covered—contact us within 48 hours.',
        },
      },
      {
        '@type': 'Question',
        name: 'What items cannot be returned?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Final-sale/clearance items, custom orders (e.g. cut-to-length cable), installed or modified items, consumables that show use (e.g. used bulbs), physically damaged items, and items without packaging or missing accessories are not returnable.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who pays for return shipping?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'If we sent a wrong, defective or damaged item, Trucast covers return shipping and replacement. For change-of-mind or customer ordering errors, the customer pays the return cost.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long do refunds take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'After we receive and inspect the returned item (usually within 24–48h of arrival), refunds to bank transfer take 1–3 business days; POS/processor reversals may take 3–10 business days depending on the bank. Store credit is available on request.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if my item is damaged or faulty?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Report within 48 hours of delivery with photos/video. We will arrange a replacement or refund. After 7 days, eligible products continue under the limited warranty period.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="container py-10">
        <h1 className="text-3xl font-bold">Returns &amp; Refunds Policy</h1>
        <p className="mt-2 text-zinc-700 max-w-3xl">
          You can request a return or exchange within <strong>7 calendar days</strong> of delivery or pickup. Items must be
          in <strong>resalable condition</strong>—unused, uninstalled, and in original packaging with all accessories,
          manuals and labels intact.
        </p>

        {/* Actions */}
        <div className="mt-5 flex flex-wrap gap-3">
          <a className="btn-primary" href={waReturnLink} target="_blank" rel="noopener">
            Start a return on WhatsApp
          </a>
          <a className="btn-outline" href={`mailto:${email}?subject=Return%20request%20(7-day)`}>
            Email return request
          </a>
          {/* Mobile-only call shortcut */}
          <a className="btn-outline md:hidden" href={`tel:${site.phone ?? '+2347026921633'}`}>
            Call
          </a>
        </div>

        {/* Policy details */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="card p-5">
            <p className="font-semibold">Eligibility</p>
            <ul className="mt-2 space-y-2 text-sm text-zinc-700">
              <li>• Request within 7 days of delivery/pickup.</li>
              <li>• Item is unused, uninstalled and in original packaging with all accessories.</li>
              <li>• Serial numbers, labels and protective films remain intact.</li>
              <li>• Provide proof of purchase (order number, receipt or invoice).</li>
            </ul>
          </div>

          <div className="card p-5">
            <p className="font-semibold">Not returnable</p>
            <ul className="mt-2 space-y-2 text-sm text-zinc-700">
              <li>• Final-sale/clearance items or custom orders (e.g., cut cables).</li>
              <li>• Installed, modified or physically damaged items.</li>
              <li>• Consumables that show use (e.g., used bulbs, opened batteries).</li>
              <li>• Items missing packaging, parts, or accessories.</li>
            </ul>
          </div>

          <div className="card p-5">
            <p className="font-semibold">Damaged / Faulty on arrival</p>
            <ul className="mt-2 space-y-2 text-sm text-zinc-700">
              <li>• Report within <strong>48 hours</strong> of delivery with photos/video.</li>
              <li>• We arrange a replacement or refund; Trucast covers return shipping for confirmed faults.</li>
              <li>• After 7 days, eligible products continue under our limited warranty window.</li>
            </ul>
          </div>

          <div className="card p-5">
            <p className="font-semibold">How to start a return</p>
            <ol className="mt-2 space-y-2 text-sm text-zinc-700 list-decimal pl-5">
              <li>Contact us by WhatsApp or email with your order number, item(s) and reason.</li>
              <li>Share photos/video (packaging, item condition, and any fault/damage).</li>
              <li>We’ll confirm eligibility and provide the return address or pickup instructions.</li>
              <li>Return the item securely packed; include all accessories and invoice copy.</li>
            </ol>
          </div>

          <div className="card p-5">
            <p className="font-semibold">Return shipping &amp; costs</p>
            <ul className="mt-2 space-y-2 text-sm text-zinc-700">
              <li>• Wrong/defective item sent by Trucast: <strong>we cover</strong> return shipping and replacement.</li>
              <li>• Change-of-mind or ordering error: <strong>customer covers</strong> return shipping.</li>
              <li>• Inspection typically within 24–48h of arrival at our facility.</li>
            </ul>
          </div>

          <div className="card p-5">
            <p className="font-semibold">Refunds &amp; exchanges</p>
            <ul className="mt-2 space-y-2 text-sm text-zinc-700">
              <li>• Refund to original payment method after inspection approval.</li>
              <li>• Bank transfer refunds: 1–3 business days; POS/processor reversals: 3–10 business days (bank-dependent).</li>
              <li>• Store credit or like-for-like exchange available on request.</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm text-zinc-600">
            Drop-offs / courier returns accepted at: <span className="font-medium">{site.address}</span>
          </p>
        </div>

        <p className="mt-8 text-xs text-zinc-500">
          Trucast Nigeria Limited reserves the right to refuse returns that do not meet this policy. This policy does not limit
          your statutory rights. Last updated: {new Date().toLocaleDateString('en-GB')}.
        </p>

        <div className="mt-6">
          <Link href="/" className="link">← Back to Home</Link>
        </div>
      </section>
    </>
  );
}

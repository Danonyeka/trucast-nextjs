// app/returns/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Returns & Refunds Policy (7-Day) | Trucast Nigeria',
  description:
    'Returns & refunds for electrical accessories in Nigeria—request an exchange or refund within 7 days of delivery or pickup. See eligibility, steps and timelines.',
  openGraph: {
    title: 'Returns & Refunds Policy (7-Day) | Trucast Nigeria',
    description:
      'Returns & refunds for electrical accessories in Nigeria—request an exchange or refund within 7 days of delivery or pickup. See eligibility, steps and timelines.',
    url: 'https://www.trucast-ng.com/returns',
    type: 'article',
    images: [{ url: 'https://www.trucast-ng.com/og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Returns & Refunds Policy (7-Day) | Trucast Nigeria',
    description:
      'Returns & refunds for electrical accessories in Nigeria—request an exchange or refund within 7 days of delivery or pickup. See eligibility, steps and timelines.',
    images: ['https://www.trucast-ng.com/og.jpg'],
  },
  alternates: { canonical: 'https://www.trucast-ng.com/returns' },
}

function firstEmail(v?: string) {
  if (!v) return 'sales@trucast-ng.com'
  return v.split(/[;,]/)[0].trim()
}

export default function ReturnsPage() {
  const email = firstEmail(site.emailPrimary)
  const waBase = (site.waLink || 'https://wa.me/2347026921633').split('?')[0]
  const waReturnLink = `${waBase}?text=${encodeURIComponent(
    'Return request: Order #_____ • Item(s): _____ • Reason: _____ • Photos: (attach if possible)'
  )}`

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
  }

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

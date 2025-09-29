// app/returns/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Returns & Warranty | Trucast Nigeria',
  description:
    'Read Trucast Nigeria’s returns policy and warranty terms for electrical accessories and lighting. Learn how to request returns or exchanges and what’s covered.',
}

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
} as const

export default function ReturnsPage() {
  return (
    <>
      {/* JSON-LD (well-formed, self-closed) */}
      <script
        type="application/ld+json"
        // must be a string:
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="container py-10">
        <h1 className="text-3xl font-bold">Returns & Refunds Policy</h1>

        <p className="mt-2 text-zinc-700 max-w-3xl">
          You can request a return or exchange within <strong>7 calendar days</strong> of delivery or
          pickup. Items must be unused, in original packaging, and include all accessories and proof
          of purchase.
        </p>

        {/* ...your existing sections/content here... */}
      </section>
    </>
  )
}

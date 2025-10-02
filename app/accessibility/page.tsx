// app/accessibility/page.tsx
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic'; // avoid prerender errors
export const revalidate = 0;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trucast-ng.com';

export const metadata: Metadata = {
  title: 'Accessibility',
  description:
    'WCAG 2.1 AA at Trucast Nigeria—semantic HTML, keyboard navigation, alt text and clear contrast so everyone can shop electrical accessories in Nigeria.',
  alternates: { canonical: '/accessibility' },
  openGraph: {
    title: 'Accessibility',
    description:
      'Our commitment to WCAG 2.1 AA: semantic HTML, keyboard navigation, alt text and clear contrast.',
    url: '/accessibility',
  },
};

export default async function AccessibilityPage() {
  // Load site data at runtime (not module scope)
  let s: any = {};
  try {
    const mod: any = await import('@/lib/site');
    s = mod?.site || {};
  } catch (e) {
    console.error('[accessibility] failed to load site config:', e);
  }

  const legalName: string = s.legalName || 'Trucast Nigeria Limited';
  const email: string = s.emailPrimary || s.email || 'support@trucast-ng.com';
  const phoneRaw: string =
    s.phone || s.phonePrimary || process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '2347026921633';

  const WA_CHAT =
    s.waLink ||
    `https://wa.me/${String(phoneRaw).replace(/^\+/, '')}?text=${encodeURIComponent(
      'Hello Trucast! I have an accessibility feedback or request.'
    )}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Accessibility Statement',
    url: `${SITE_URL}/accessibility`,
    about: `${legalName} website accessibility commitment`,
  };

  const lastUpdated = new Date().toLocaleDateString('en-NG', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container py-16">
        <h1 className="text-3xl font-bold">Accessibility Statement</h1>
        <p className="mt-2 max-w-2xl text-zinc-600">
          {legalName} aims to meet WCAG 2.1 AA guidelines. We design pages with clear structure,
          keyboard navigation and sufficient color contrast.
        </p>

        <ul className="mt-4 list-disc space-y-1 pl-6 text-sm text-zinc-700">
          <li>Semantic HTML and descriptive link text</li>
          <li>Alt text for non-decorative images</li>
          <li>Focusable controls with visible states</li>
          <li>Logical heading hierarchy</li>
        </ul>

        <p className="mt-6 text-sm">
          If you face any accessibility barriers, email{' '}
          <a className="link" href={`mailto:${email}`}>
            {email}
          </a>{' '}
          or message us on WhatsApp at{' '}
          <a className="link" href={WA_CHAT} target="_blank" rel="noreferrer noopener">
            {phoneRaw}
          </a>
          .
        </p>

        <p className="mt-6 text-xs text-zinc-500">Last updated: {lastUpdated}</p>
      </div>
    </>
  );
}

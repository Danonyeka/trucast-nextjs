
import { site } from '@/lib/site';
export default function AccessibilityPage(){
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold">Accessibility Statement</h1>
      <p className="mt-2 text-zinc-600 max-w-2xl">
        {site.legalName} aims to meet WCAG 2.1 AA guidelines. We design pages with clear structure,
        keyboard navigation and sufficient color contrast.
      </p>
      <ul className="list-disc pl-6 mt-4 text-sm text-zinc-700 space-y-1">
        <li>Semantic HTML and descriptive link text</li>
        <li>Alt text for non‑decorative images</li>
        <li>Focusable controls with visible states</li>
        <li>Logical heading hierarchy</li>
      </ul>
      <p className="mt-6 text-sm">
        If you face any accessibility barriers, email <a className="link" href={`mailto:${site.emailPrimary}`}>{site.emailPrimary}</a> or message us on WhatsApp at <a className="link" href={site.waLink}>{site.phone}</a>.
      </p>
      <p className="text-xs text-zinc-500 mt-6">Last updated: 2025-01-01</p>
    </div>
  );
}

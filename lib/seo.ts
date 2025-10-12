// lib/seo.ts
type Base = { title: string; brand?: string; site?: string; location?: string };

const clamp = (s: string, max = 160) =>
  s.length <= max ? s : s.slice(0, max - 1).replace(/\s+\S*$/, '') + '…';

const clean = (s: string) =>
  s.replace(/\s+/g, ' ').replace(/["'`]/g, '').trim();

export function productMetaDescription(data: {
  title: string;
  brand?: string;
  short?: string;        // 1–2 line summary / selling point
  specs?: string[];      // top 2–4 specs: ['16A', 'LED', 'IP44']
  use?: string;          // primary use case
  location?: string;     // e.g. 'Nigeria'
}) {
  const { title, brand, short, specs = [], use, location } = data;
  const specLine = specs.length ? ` • ${specs.slice(0, 3).join(' • ')}` : '';
  const useLine = use ? ` — ideal for ${use}` : '';
  const loc = location ? ` in ${location}` : '';
  return clamp(
    clean(`${brand ? brand + ' ' : ''}${title}: ${short || ''}${useLine}${specLine}. Buy genuine${loc}.`)
  );
}

export function categoryMetaDescription(data: {
  title: string;
  range?: string[];     // key subtypes in the category
  audience?: string;    // homeowners, contractors, etc.
  usp?: string[];       // your differentiators
  location?: string;
}) {
  const { title, range = [], audience, usp = [], location } = data;
  const rangeLine = range.length ? ` ${range.slice(0, 4).join(', ')}` : '';
  const uspLine = usp.length ? ` • ${usp.slice(0, 2).join(' • ')}` : '';
  const aud = audience ? ` for ${audience}` : '';
  const loc = location ? ` in ${location}` : '';
  return clamp(clean(`${title}${aud}: Shop${rangeLine}.${uspLine}${loc}. Fast delivery.`));
}

export function blogMetaDescription(data: {
  title: string;
  summary?: string;    // 1–2 sentence abstract
  takeaway?: string;   // key takeaway / benefit
}) {
  const { title, summary, takeaway } = data;
  const t = takeaway ? ` Key takeaway: ${takeaway}.` : '';
  return clamp(clean(`${title} — ${summary || ''}${t}`));
}

'use client';
import { useState } from 'react';
import { catalog } from '@/lib/products';
import { productDetails } from '@/lib/product-details';
import { site } from '@/lib/site';
import { track } from '@/lib/analytics';

type Line = { id: number; item: string; quantity: string; unit: string };
export default function ProjectQuoteForm({ initialSku = '' }: { initialSku?: string }) {
  const initial = catalog.find(p => p?.sku === initialSku);
  const [lines, setLines] = useState<Line[]>([{ id: 0, item: initial ? `${productDetails(initial).name} (${initial.sku})` : '', quantity: '1', unit: 'units' }]);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [boq, setBoq] = useState(false);
  const [draft, setDraft] = useState('');
  const field = 'mt-2 w-full rounded-xl border border-zinc-300 bg-white p-3 text-zinc-900';
  function update(id: number, key: keyof Omit<Line, 'id'>, value: string) { setLines(lines.map(line => line.id === id ? { ...line, [key]: value } : line)); setDraft(''); }
  return <form className="card p-5 sm:p-8" onSubmit={event => {
    event.preventDefault();
    if (lines.some(line => !line.item.trim()) || !location.trim()) return;
    setDraft(['Hello Trucast, please prepare a project / wholesale quote.', name.trim() && `Contact: ${name.trim()}`, company.trim() && `Business / project: ${company.trim()}`, `Delivery town / city: ${location.trim()}`, date && `Preferred date (subject to confirmation): ${date}`, '', 'Requirements:', ...lines.map((line, index) => `${index + 1}. ${line.item.trim()} — ${line.quantity} ${line.unit}`), '', notes.trim() && `Additional details: ${notes.trim()}`, boq && 'I will attach my BOQ after sending this brief.', '', 'Please confirm specifications, availability, pricing, delivery charges and applicable warranty.'].filter(Boolean).join('\n'));
    track('project_quote_prepared', { items: lines.length, has_boq: boq });
  }}>
    <h2 className="text-2xl font-semibold">Build your project brief</h2>
    <p className="mt-3 text-sm text-zinc-600">List your requirements, review the brief, then send it through WhatsApp or your email app.</p>
    <div className="mt-5 grid sm:grid-cols-2 gap-4"><label className="text-sm font-medium">Your name (optional)<input autoComplete="name" maxLength={100} value={name} onChange={e => { setName(e.target.value); setDraft(''); }} className={field} /></label><label className="text-sm font-medium">Business / project (optional)<input autoComplete="organization" maxLength={150} value={company} onChange={e => { setCompany(e.target.value); setDraft(''); }} className={field} /></label></div>
    <fieldset className="mt-6"><legend className="font-semibold">Products and quantities</legend>
      <datalist id="quote-products">{catalog.filter(Boolean).map(p => <option key={p.sku} value={`${productDetails(p).name} (${p.sku})`} />)}</datalist>
      {lines.map((line, index) => <div key={line.id} className="mt-4 rounded-xl border p-4"><div className="flex justify-between gap-3"><span className="text-sm font-semibold">Item {index + 1}</span>{lines.length > 1 && <button type="button" className="link text-sm" aria-label={`Remove item ${index + 1}`} onClick={() => { setLines(lines.filter(l => l.id !== line.id)); setDraft(''); }}>Remove</button>}</div><label className="block mt-2 text-sm">Product / SKU or requirement<input required maxLength={200} list="quote-products" value={line.item} onChange={e => update(line.id, 'item', e.target.value)} className={field} placeholder="Choose a product or describe what you need" /></label><div className="mt-3 grid grid-cols-2 gap-3"><label className="text-sm">Quantity<input required type="number" min="0.1" max="1000000" step="0.1" value={line.quantity} onChange={e => update(line.id, 'quantity', e.target.value)} className={field} /></label><label className="text-sm">Unit<select value={line.unit} onChange={e => update(line.id, 'unit', e.target.value)} className={field}><option>units</option><option>metres</option><option>rolls</option><option>sets</option><option>boxes</option></select></label></div></div>)}
      {lines.length < 15 && <button type="button" className="btn-outline mt-4" onClick={() => { setLines([...lines, { id: Math.max(...lines.map(l => l.id)) + 1, item: '', quantity: '1', unit: 'units' }]); setDraft(''); }}>Add another item +</button>}
    </fieldset>
    <div className="mt-5 grid sm:grid-cols-2 gap-4"><label className="text-sm font-medium">Delivery town / city<input required maxLength={150} autoComplete="address-level2" value={location} onChange={e => { setLocation(e.target.value); setDraft(''); }} className={field} /></label><label className="text-sm font-medium">Preferred delivery date (optional)<input type="date" value={date} onChange={e => { setDate(e.target.value); setDraft(''); }} className={field} /></label></div>
    <label className="mt-5 block text-sm font-medium">Additional details (optional)<textarea rows={3} maxLength={1500} value={notes} onChange={e => { setNotes(e.target.value); setDraft(''); }} className={field} placeholder="Finish, colour temperature, model compatibility or installation requirements" /></label>
    <label className="flex items-start gap-3 mt-5 text-sm"><input type="checkbox" className="mt-1" checked={boq} onChange={e => { setBoq(e.target.checked); setDraft(''); }} />I have a bill of quantities or supporting document to attach.</label>
    <p className="mt-2 text-xs text-zinc-600">Attach your PDF, spreadsheet or images in WhatsApp or your email app after opening the draft. Files are not uploaded through this page.</p>
    <button type="submit" className="btn-primary mt-6">Review my quote request</button>
    {draft && <section className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5" aria-label="Prepared quote request"><h3 className="font-semibold">Review and send</h3><textarea aria-label="Quote request draft" readOnly value={draft} rows={12} className={field} /><div className="mt-4 flex flex-wrap gap-3"><a className="btn-primary" target="_blank" rel="noopener noreferrer" href={`https://wa.me/${site.phone.replace(/\D/g, '')}?text=${encodeURIComponent(draft)}`} onClick={() => track('project_quote_whatsapp_click')}>Open WhatsApp draft ↗</a><a className="btn-outline" href={`mailto:${site.emailPrimary}?subject=${encodeURIComponent('Project / wholesale quote request')}&body=${encodeURIComponent(draft)}`} onClick={() => track('project_quote_email_click')}>Open email draft ↗</a></div><p className="mt-3 text-sm">{boq ? 'Remember to attach your BOQ before sending.' : 'Sales will confirm the details before any order is agreed.'}</p></section>}
    <p className="mt-5 text-xs text-zinc-500">This page does not place an order or save your brief to a server. Nothing is sent until you send it in WhatsApp or your email app.</p>
  </form>;
}

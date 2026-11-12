'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { catalog, categories, isOutOfStock } from '@/lib/products';
import { productDetails } from '@/lib/product-details';
import ProductCard from './ProductCard';

export default function CatalogBrowser({ initialCategory = '' }: { initialCategory?: string }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(initialCategory);
  const [series, setSeries] = useState('');
  const [colour, setColour] = useState('');
  const [wattage, setWattage] = useState('');
  const [available, setAvailable] = useState(false);
  const products = useMemo(() => catalog.filter(Boolean).map(product => ({ product, details: productDetails(product) })), []);
  const categoryProducts = products.filter(p => !category || p.product.category === category);
  const options = (field: 'series' | 'colour' | 'wattage') => [...new Set(categoryProducts.map(p => p.details[field]).filter(Boolean))].sort((a,b) => a.localeCompare(b, undefined, { numeric: true }));
  const results = categoryProducts.filter(({ product, details }) => {
    const text = [details.name, product.sku, product.category, details.description, ...details.features].join(' ').toLowerCase();
    return query.toLowerCase().trim().split(/\s+/).every(term => text.includes(term)) && (!series || details.series === series) && (!colour || details.colour === colour) && (!wattage || details.wattage === wattage) && (!available || !isOutOfStock(product));
  });
  function reset() { setQuery(''); setCategory(initialCategory); setSeries(''); setColour(''); setWattage(''); setAvailable(false); }
  const selectClass = 'mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-3 text-sm';
  return <div className="mt-6">
    <div className="rounded-2xl bg-zinc-50 border p-5">
      <label className="block text-sm font-medium" htmlFor="catalog-query">Find a product by name, SKU or specification</label>
      <input id="catalog-query" value={query} onChange={e => setQuery(e.target.value)} type="search" placeholder="e.g. S06 silver, 12W, smart lock" className={selectClass} />
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <label className="text-sm">Category<select aria-label="Category" className={selectClass} value={category} onChange={e => { setCategory(e.target.value); setSeries(''); setColour(''); setWattage(''); }}><option value="">All categories</option>{categories.map(c => <option key={c.slug} value={c.slug}>{c.title}</option>)}</select></label>
        {(['series','colour','wattage'] as const).map(field => <label key={field} className="text-sm capitalize">{field === 'colour' ? 'Listed colour' : field}<select aria-label={field === 'colour' ? 'Listed colour' : field === 'series' ? 'Series' : 'Wattage'} className={selectClass} value={field === 'series' ? series : field === 'colour' ? colour : wattage} onChange={e => (field === 'series' ? setSeries : field === 'colour' ? setColour : setWattage)(e.target.value)}><option value="">All {field === 'colour' ? 'colours' : field === 'series' ? 'series' : 'wattages'}</option>{options(field).map(value => <option key={value}>{value}</option>)}</select></label>)}
      </div>
      <div className="mt-4 flex flex-wrap justify-between gap-4"><label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={available} onChange={e => setAvailable(e.target.checked)} />Show listed available items only</label><button type="button" className="link text-sm" onClick={reset}>Reset filters</button></div>
    </div>
    <p role="status" className="my-5 text-sm text-zinc-600">{results.length} {results.length === 1 ? 'product' : 'products'} found · Confirm current availability with sales.</p>
    {results.length ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{results.map(({ product }) => <ProductCard key={product.sku} product={product} />)}</div> : <div className="card p-8"><h2 className="font-semibold text-xl">No matching products</h2><p className="mt-2 text-zinc-600">Try fewer filters or send your requirements to sales.</p><button className="btn-outline mt-4" onClick={reset}>Reset filters</button> <Link className="btn-primary mt-4" href="/wholesale">Request a project quote</Link></div>}
  </div>;
}

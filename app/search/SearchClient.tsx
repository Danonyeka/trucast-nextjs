// app/search/SearchClient.tsx
'use client';

import { useMemo, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { catalog, Product } from '@/lib/products';

export default function SearchClient() {
  const [q, setQ] = useState('');

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return catalog;

    return catalog.filter((p) => {
      const haystack = [
        p.name,
        p.desc,
        p.sku,
        p.category,
        p.slug ?? '',
        ...(p.features ?? []),
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(s);
    });
  }, [q]);

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">Search</h1>

      <input
        autoFocus
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search all products by name, SKU, or category…"
        className="mt-4 w-full rounded-xl border px-4 py-3"
      />

      <p className="mt-2 text-sm text-zinc-500">{results.length} result(s)</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {results.map((p: Product) => (
          <ProductCard key={p.sku} product={p} />
        ))}
      </div>
    </div>
  );
}

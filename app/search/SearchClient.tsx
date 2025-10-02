// app/search/SearchClient.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { catalog } from '@/lib/products';

function NGN(n: number) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(n);
}

export default function SearchClient() {
  const [q, setQ] = useState('');

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return catalog;
    return catalog.filter(
      (p) =>
        p.name.toLowerCase().includes(s) ||
        p.desc.toLowerCase().includes(s) ||
        p.sku.toLowerCase().includes(s) ||
        p.category.toLowerCase().includes(s)
    );
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

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((p) => (
          <Link key={p.sku} href={`/product/${p.sku}`} className="card overflow-hidden">
            <div className="relative aspect-square bg-zinc-100">
              <Image
                src={p.img}
                alt={p.name}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={false}
              />
            </div>
            <div className="p-4">
              <p className="font-semibold">{p.name}</p>
              <p className="text-xs text-zinc-500">SKU: {p.sku}</p>
              <p className="mt-1 font-bold">{NGN(p.priceNGN)}</p>
              <p className="mt-1 line-clamp-2 text-sm text-zinc-600">{p.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

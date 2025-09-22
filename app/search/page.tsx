'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { catalog } from '@/lib/products';

function NGN(n: number) { return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(n); }

export default function SearchPage(){
  const [q, setQ] = useState('');
  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return catalog;
    return catalog.filter(p =>
      p.name.toLowerCase().includes(s) ||
      p.desc.toLowerCase().includes(s) ||
      p.sku.toLowerCase().includes(s) ||
      p.category.toLowerCase().includes(s)
    );
  }, [q]);

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">Search</h1>
      <input autoFocus value={q} onChange={e=>setQ(e.target.value)} placeholder="Search all products by name, SKU, or category…" className="mt-4 w-full border rounded-xl px-4 py-3" />
      <p className="text-sm text-zinc-500 mt-2">{results.length} result(s)</p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {results.map(p => (
          <Link key={p.sku} href={`/product/${p.sku}`} className="card overflow-hidden">
            <div className="relative aspect-square bg-zinc-100">
              <Image src={p.img} alt={p.name} fill className="object-contain" />
            </div>
            <div className="p-4">
              <p className="font-semibold">{p.name}</p>
              <p className="text-xs text-zinc-500">SKU: {p.sku}</p>
              <p className="mt-1 font-bold">{NGN(p.priceNGN)}</p>
              <p className="text-sm text-zinc-600 mt-1 line-clamp-2">{p.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

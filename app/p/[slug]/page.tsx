'use client';

import React from 'react';
import Link from 'next/link';
import SmartImage from '@/components/SmartImage';
import BuyBox from './BuyBox';

type ProductLite = {
  sku: string;
  slug?: string;
  name: string;
  priceNGN: number;
  img: string;
  alt?: string;
  desc?: string;
  features?: string[];
};

function NGN(n?: number) {
  const val = Number.isFinite(n as number) ? (n as number) : 0;
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(val);
}

function safeDecode(s: string) {
  try {
    return decodeURIComponent(s);
  } catch {
    return s;
  }
}

/** Fallback: extract bullets from desc if features[] not provided */
function featuresFromDesc(desc?: string): string[] {
  try {
    if (!desc) return [];
    const lines = desc.split(/\r?\n/);
    const start = lines.findIndex((l) => /key features\s*:?\s*$/i.test(l.trim()));
    const slice = start >= 0 ? lines.slice(start + 1) : lines;
    return Array.from(
      new Set(
        slice
          .map((l) => l.trim())
          .filter((l) => /^[-•]\s+/.test(l))
          .map((l) => l.replace(/^[-•]\s+/, '').trim())
          .filter(Boolean),
      ),
    );
  } catch {
    return [];
  }
}

export default function ProductBySlug({ params }: { params: { slug: string } }) {
  const slug = safeDecode((params?.slug ?? '').toString()).toLowerCase();

  const [state, setState] = React.useState<{
    loading: boolean;
    product?: ProductLite | null;
    error?: string;
  }>({ loading: true });

  React.useEffect(() => {
    let alive = true;
    (async () => {
      try {
        // ⚡️ Dynamic import ensures any issues in lib/products don’t crash SSR
        const mod = await import('@/lib/products');
        const catalog: ProductLite[] = (mod as any).catalog || [];
        const found =
          catalog.find(
            (p) =>
              (p.slug || '').toLowerCase() === slug ||
              (p.sku || '').toLowerCase() === slug,
          ) || null;

        if (alive) setState({ loading: false, product: found });
      } catch (err: any) {
        if (alive)
          setState({
            loading: false,
            error: err?.message || String(err),
          });
      }
    })();

    return () => {
      alive = false;
    };
  }, [slug]);

  if (state.loading) {
    return (
      <div className="container py-16">
        <h1 className="text-xl font-semibold">Loading product…</h1>
      </div>
    );
  }

  if (state.error) {
    return (
      <div className="container py-16">
        <h1 className="text-2xl font-bold">Couldn’t load product</h1>
        <p className="mt-2 text-zinc-600">
          An error occurred while loading this item.
        </p>
        <pre className="mt-4 p-3 rounded bg-zinc-100 text-xs overflow-auto">
{state.error}
        </pre>
        <div className="mt-6">
          <Link className="btn-outline" href="/shop">
            Back to shop
          </Link>
        </div>
      </div>
    );
  }

  if (!state.product) {
    return (
      <div className="container py-16">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <p className="mt-2 text-zinc-600">
          The item you’re looking for isn’t available. Please browse the shop or search.
        </p>
        <div className="mt-6 flex gap-3">
          <Link className="btn" href="/shop">
            Browse shop
          </Link>
          <Link className="btn-outline" href="/search">
            Search
          </Link>
        </div>
      </div>
    );
  }

  const p = state.product;
  const feats = p.features?.length ? p.features : featuresFromDesc(p.desc);
  const imgSrc = typeof p.img === 'string' && p.img ? p.img : '/og.jpg';

  return (
    <div className="container py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-2xl overflow-hidden bg-zinc-50 border">
          <SmartImage
            src={imgSrc}
            alt={p.alt || p.name}
            width={1200}
            height={900}
            className="w-full h-auto"
            priority
          />
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">{p.name}</h1>
          <p className="mt-1 text-sm text-zinc-500">SKU: {p.sku}</p>

          {/* Price */}
          <div className="mt-4 text-3xl font-bold">{NGN(p.priceNGN)}</div>

          {/* Description directly under price */}
          {p.desc && (
            <div className="mt-4 whitespace-pre-line text-zinc-700 leading-relaxed">
              {p.desc}
            </div>
          )}

          {/* Features */}
          {feats.length > 0 && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold">Key features</h2>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-zinc-700">
                {feats.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Add to cart */}
          <BuyBox
            id={p.sku}
            name={p.name}
            priceNGN={p.priceNGN}
            image={p.img}
          />

          <div className="mt-4">
            <Link className="btn-outline" href="/cart">
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

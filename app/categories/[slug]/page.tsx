'use client';
import SmartImage from '@/components/SmartImage';
import Link from 'next/link';
import { categoryMap, byCategory } from '@/lib/products';
import { useCart } from '@/components/cart/CartContext';
function NGN(n: number) { return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(n); }
export default function CategoryPage({ params }: { params: { slug: string } }){
  const category = (categoryMap as any)[params.slug];
  const { add } = useCart();
  if(!category){
    return (<div className="container py-16"><h1 className="text-2xl font-bold">Category not found</h1><Link href="/categories" className="link mt-4 inline-block">← Back to Categories</Link></div>);
  }
  const items = byCategory(params.slug);
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold">{category}</h1>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map(p => (
          <div key={p.sku} className="card overflow-hidden">
            <div className="relative aspect-square bg-zinc-100">
              <SmartImage src={p.img} alt={p.name} fill className="object-contain" />
            </div>
            <div className="p-4">
              <p className="font-semibold">{p.name}</p>
              <p className="text-xs text-zinc-500">SKU: {p.sku}</p>
              <p className="text-sm text-zinc-600 mt-1">{p.desc}</p>
              <div className="mt-3 flex items-center justify-between">
                <Link href={`/product/${p.sku}`} className="link">View</Link>
                <button className="btn-primary" onClick={() => add(p,1)}>Add — {NGN(p.priceNGN)}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

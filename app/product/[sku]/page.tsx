'use client';
import SmartImage from '@/components/SmartImage';
import Link from 'next/link';
import { catalog } from '@/lib/products';
import { useCart } from '@/components/cart/CartContext';
function NGN(n: number) { return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(n); }
export default function ProductPage({ params }: { params: { sku: string } }){
  const product = catalog.find(p => p.sku === params.sku);
  const { add } = useCart();
  if(!product){
    return (<div className="container py-16"><h1 className="text-2xl font-bold">Product not found</h1><Link href="/categories" className="link mt-4 inline-block">← Back to shop</Link></div>);
  }
  return (
    <div className="container py-16 grid lg:grid-cols-2 gap-8">
      <div className="relative aspect-square bg-zinc-100 rounded-2xl overflow-hidden">
        <SmartImage src={product.img} alt={product.name} fill className="object-contain" />
      </div>
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-zinc-500 mt-1">SKU: {product.sku}</p>
        <p className="text-xl font-bold mt-2">{NGN(product.priceNGN)}</p>
        <p className="mt-4 text-zinc-700">{product.desc}</p>
        <div className="mt-6 flex gap-3">
          <button className="btn-primary" onClick={() => add(product,1)}>Add to Cart</button>
          <Link className="btn-outline" href="/cart">Go to Cart</Link>
        </div>
      </div>
    </div>
  );
}

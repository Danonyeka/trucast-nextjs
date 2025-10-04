import SmartImage from '@/components/SmartImage';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { catalog, Product } from '@/lib/products';
import BuyBox from './BuyBox';

function NGN(n: number) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(n);
}

function featuresFromDesc(desc?: string): string[] {
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
}

export default function ProductBySlug({ params }: { params: { slug: string } }) {
  const slug = decodeURI(params.slug).toLowerCase();
  const product = catalog.find(
    (p) => (p.slug || '').toLowerCase() === slug
  ) as Product | undefined;

  if (!product) notFound();

  const { name, img, alt, priceNGN, desc } = product;
  const features = product.features?.length ? product.features : featuresFromDesc(desc);

  return (
    <div className="container py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-2xl overflow-hidden bg-zinc-50 border">
          <SmartImage
            src={img}
            alt={alt || name}
            width={1200}
            height={900}
            className="w-full h-auto"
            priority
          />
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">{name}</h1>
          <p className="mt-1 text-sm text-zinc-500">SKU: {product.sku}</p>

          <div className="mt-4 text-3xl font-bold">{NGN(priceNGN)}</div>

          {desc && (
            <div className="mt-4 whitespace-pre-line text-zinc-700 leading-relaxed">
              {desc}
            </div>
          )}

          {features.length > 0 && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold">Key features</h2>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-zinc-700">
                {features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          <BuyBox
            id={product.sku}
            name={product.name}
            priceNGN={product.priceNGN}
            image={product.img}
          />

          <div className="mt-4">
            <Link className="btn-outline" href="/cart">Go to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

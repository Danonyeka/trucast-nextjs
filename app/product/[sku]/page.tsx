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

/** Fallback: extract bullets from desc if features[] not provided */
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

export default function ProductPage({ params }: { params: { sku: string } }) {
  const skuParam = decodeURIComponent(params.sku);
  const product = catalog.find(
    (p) => p.sku.toLowerCase() === skuParam.toLowerCase(),
  ) as Product | undefined;

  if (!product) notFound();

  const { name, img, alt, priceNGN, desc } = product;
  const features =
    product.features && product.features.length > 0
      ? product.features
      : featuresFromDesc(desc);

  return (
    <div className="container py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
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

        {/* Content */}
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">{name}</h1>
          <p className="mt-1 text-sm text-zinc-500">SKU: {product.sku}</p>

          {/* Price */}
          <div className="mt-4 text-3xl font-bold">{NGN(priceNGN)}</div>

          {/* Description directly under price */}
          {desc && (
            <div className="mt-4 whitespace-pre-line text-zinc-700 leading-relaxed">
              {desc}
            </div>
          )}

          {/* Features */}
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

          {/* Buy box (client) */}
          <BuyBox
            id={product.sku}
            name={product.name}
            priceNGN={product.priceNGN}
            image={product.img}
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

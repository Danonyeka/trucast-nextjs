import { redirect } from 'next/navigation';
import { catalog } from '@/lib/products';

export default function LegacyProduct({ params }: { params: { sku: string } }) {
  const sku = decodeURI((params.sku || '').replace(/%2E/gi, '.')).toLowerCase();
  const p = catalog.find(
    x => x.sku.toLowerCase() === sku || (x.slug || '').toLowerCase() === sku
  );
  // If we can’t find it, just take them to /shop to avoid a 500.
  if (!p) redirect('/shop');
  redirect(`/p/${encodeURIComponent(p.slug || p.sku)}`);
}

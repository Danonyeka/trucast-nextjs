import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { catalog, findBySlugOrSku, isOutOfStock, categoryMap } from '@/lib/products';
import { productDetails } from '@/lib/product-details';
import imageVariants from '@/lib/product-images.json';
import ProductGallery from '@/components/ProductGallery';
import ProductEnquiryLink from '@/components/ProductEnquiryLink';
import ProductCard from '@/components/ProductCard';

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = findBySlugOrSku(decodeURIComponent(params.slug));
  if (!product) return { title: 'Product not found' };
  const details = productDetails(product);
  const description = `${details.name} — ${categoryMap[product.category] || 'Trucast products'}. SKU ${product.sku}. Enquire for model details, pricing and availability in Nigeria.`;
  return { title: details.name, description, alternates: { canonical: `/p/${product.slug || product.sku}` }, openGraph: { title: details.name, description, images: [product.img] } };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = findBySlugOrSku(decodeURIComponent(params.slug));
  if (!product) notFound();
  const details = productDetails(product);
  const images = (imageVariants as Record<string, string[]>)[product.img] || [product.img];
  const related = catalog.filter(p => p && p.category === product.category && p.sku !== product.sku).slice(0, 3);
  const schema = { '@context': 'https://schema.org', '@type': 'Product', name: details.name, sku: product.sku, image: images.map(src => `https://www.trucast-ng.com${src}`), description: details.description, url: `https://www.trucast-ng.com/p/${product.slug || product.sku}` };
  return <div className="container py-10">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\u003c') }} />
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-zinc-600"><Link className="link" href="/categories">Products</Link> / <Link className="link" href={`/categories/${product.category}`}>{categoryMap[product.category]}</Link> / <span>{details.name}</span></nav>
    <div className="grid md:grid-cols-2 gap-9 items-start"><ProductGallery images={images} name={details.name} /><div>
      <p className="text-xs font-semibold uppercase tracking-widest text-brand">{categoryMap[product.category]}</p>
      <h1 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">{details.name}</h1>
      <p className="mt-3 text-sm text-zinc-500">SKU: {product.sku}</p>
      <p className="mt-4 text-lg font-semibold">Contact us for pricing</p>
      {isOutOfStock(product) && <p className="mt-2 text-sm text-amber-700">Currently listed out of stock. Ask about availability or alternatives.</p>}
      <div className="mt-6 flex flex-wrap gap-3"><ProductEnquiryLink product={{ ...product, name: details.name }} /><Link href={`/wholesale?sku=${encodeURIComponent(product.sku)}`} className="btn-outline">Include in a project quote</Link></div>
      <h2 className="mt-8 text-xl font-semibold">Product details</h2>
      <dl className="mt-3 divide-y rounded-xl border px-4">{details.specs.map(([label, value]) => <div key={label} className="py-3 grid grid-cols-2 gap-3 text-sm"><dt className="text-zinc-600">{label}</dt><dd className="font-medium break-words">{value}</dd></div>)}</dl>
      <p className="mt-3 text-xs text-zinc-500">Specifications shown are taken from the existing catalog. Confirm dimensions, ratings, compatibility and installation requirements before ordering.</p>
    </div></div>
    <section className="mt-12 grid md:grid-cols-2 gap-9"><div><h2 className="text-2xl font-semibold">Overview</h2><p className="mt-4 whitespace-pre-line text-zinc-600">{details.description}</p>{details.features.length > 0 && <><h3 className="mt-6 font-semibold">Catalog features</h3><ul className="mt-3 list-disc pl-5 space-y-2 text-zinc-600">{details.features.map(feature => <li key={feature}>{feature}</li>)}</ul></>}</div><div className="rounded-2xl bg-zinc-50 p-6"><h2 className="text-xl font-semibold">Before you order</h2><ul className="mt-4 list-disc pl-5 space-y-3 text-zinc-600"><li>Share the SKU, quantity and preferred finish.</li><li>Ask sales to confirm current stock, pricing and delivery to your location.</li><li>For smart devices, confirm the app, network, door or electrical compatibility.</li><li>Use a qualified installer for electrical work.</li></ul><Link href="/returns" className="link inline-block mt-5">Read the returns &amp; warranty policy ↗</Link></div></section>
    {related.length > 0 && <section className="mt-14"><h2 className="text-2xl font-semibold">More in this range</h2><div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{related.map(p => <ProductCard product={p} key={p.sku} />)}</div></section>}
  </div>;
}
export function generateStaticParams() { return catalog.filter(Boolean).map(p => ({ slug: encodeURIComponent(p.slug || p.sku) })); }

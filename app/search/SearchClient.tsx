import CatalogBrowser from '@/components/CatalogBrowser';

export default function SearchClient() {
  return <section className="container py-12"><h1 className="text-3xl font-bold">Find your product</h1><p className="mt-3 text-zinc-600">Browse electrical, lighting and smart-home products. Filter the catalog and enquire on WhatsApp.</p><CatalogBrowser /></section>;
}

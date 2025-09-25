import Link from 'next/link';

export const metadata = {
  title: 'Wholesale & Bulk Orders',
  description: 'Bulk pricing for contractors, distributors and projects across Nigeria.',
};

export default function WholesalePage() {
  return (
    <div className="container">
      {/* Hero */}
      <section className="py-10 md:py-14">
        <h1 className="text-2xl md:text-4xl font-bold leading-tight">
          Wholesale & Bulk Orders
        </h1>
        <p className="mt-3 text-zinc-600 max-w-2xl">
          Get factory-level pricing on LED lights, switches, sockets and fittings.
          Ideal for contractors, distributors and large projects.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link className="btn-primary" href="/categories">Browse Catalogue</Link>
          <a className="btn-outline" href="https://wa.me/2347026921633" target="_blank" rel="noreferrer">
            Chat Sales on WhatsApp
          </a>
        </div>
      </section>

      {/* Value props */}
      <section className="grid md:grid-cols-3 gap-4">
        <div className="card p-5">
          <h3 className="font-semibold">Distributor Pricing</h3>
          <p className="mt-2 text-sm text-zinc-600">
            Tiered discounts for volume orders and recurring buys.
          </p>
        </div>
        <div className="card p-5">
          <h3 className="font-semibold">Reliable Stock</h3>
          <p className="mt-2 text-sm text-zinc-600">
            Core SKUs kept in stock for quick turnarounds.
          </p>
        </div>
        <div className="card p-5">
          <h3 className="font-semibold">Warranty & Support</h3>
          <p className="mt-2 text-sm text-zinc-600">
            SON-registered, with responsive after-sales support.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10">
        <div className="card p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold">Ready to place a bulk order?</h3>
            <p className="text-sm text-zinc-600 mt-1">
              Send your BOQ or list to get a same-day quote.
            </p>
          </div>
          <div className="flex gap-3">
            <a className="btn-primary" href="mailto:sales@trucast-ng.com">Email BOQ</a>
            <a className="btn-outline" href="https://wa.me/2347026921633" target="_blank" rel="noreferrer">WhatsApp Sales</a>
          </div>
        </div>
      </section>
    </div>
  );
}

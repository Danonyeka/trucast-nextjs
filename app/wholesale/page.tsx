
import Link from 'next/link';
import { site } from '@/lib/site';
export default function WholesalePage(){
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold">Wholesale & B2B Supply</h1>
      <p className="mt-2 text-zinc-600 max-w-2xl">
        We stock fast‑moving LED lighting, switches & sockets designed for Nigerian power conditions.
        Share your BOQ and project timeline—we’ll respond with pricing, availability and delivery windows.
      </p>

      <div className="mt-8 grid lg:grid-cols-3 gap-6">
        <div className="card p-5">
          <p className="font-semibold">Who we supply</p>
          <ul className="list-disc pl-5 mt-2 text-sm text-zinc-700 space-y-1">
            <li>Electrical wholesalers & retailers</li>
            <li>Real estate developers & contractors</li>
            <li>Facility managers, hotels & schools</li>
            <li>Government & NGO projects</li>
          </ul>
        </div>
        <div className="card p-5">
          <p className="font-semibold">Commercial terms</p>
          <ul className="list-disc pl-5 mt-2 text-sm text-zinc-700 space-y-1">
            <li>MOQ varies by product (cartons or dozens)</li>
            <li>Lead time: same‑day for in‑stock; 3–7 days for bulk</li>
            <li>Payment: bank transfer or POS</li>
            <li>Warranty: 12 months against manufacturing defects</li>
          </ul>
        </div>
        <div className="card p-5">
          <p className="font-semibold">Delivery</p>
          <ul className="list-disc pl-5 mt-2 text-sm text-zinc-700 space-y-1">
            <li>Nationwide dispatch via trusted logistics partners</li>
            <li>Same‑day pick‑up available in Port Harcourt</li>
            <li>Palletized shipping for large orders</li>
            <li>Tracking and POD on request</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href={`mailto:${site.emailPrimary}?cc=${site.emailSecondary}&subject=Wholesale%20Inquiry%20-%20${encodeURIComponent(site.name)}`} className="btn-primary">Email for a Quote</a>
        <a href={site.waLink} target="_blank" className="btn-outline">Chat on WhatsApp</a>
        <Link href="/categories" className="btn-outline">Browse Categories</Link>
      </div>
    </div>
  );
}

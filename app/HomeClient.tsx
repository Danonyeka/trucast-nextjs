// app/HomeClient.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { OrganizationLd, LocalBusinessLd } from '@/components/seo/JsonLd';
import { site } from '@/lib/site';
import { track } from '@/lib/analytics';
import CategoryCard from '@/components/cards/CategoryCard';
import ProductEnquiry from '@/components/ProductEnquiry';

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-4 w-4 text-brand" {...props}>
      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.6a1 1 0 0 1 1.4-1.4l3.3 3.3 6.8-6.8a1 1 0 0 1 1.4 0Z" />
    </svg>
  );
}

export default function HomeClient() {
  const categories = [
    { href: '/categories/switches',       title: 'Switches',           image: '/images/categories/switches.png' },
    { href: '/categories/sockets',        title: 'Sockets',            image: '/images/categories/sockets.png' },
    { href: '/categories/smart-lock',    title: 'Smart Locks',        image: '/images/categories/smart-locks.png' },
    { href: '/categories/recessed-light', title: 'POP / Panel Lights', image: '/images/categories/panel-light.png' },
  ];

  const tel = (site as any).phone ?? '+2347026921633';

  return (
    <>
      {/* JSON-LD */}
      <OrganizationLd name={site.legalName} url="https://www.trucast-ng.com" logo="/og.jpg" sameAs={[]} />
      <LocalBusinessLd
        name={site.legalName}
        url="https://www.trucast-ng.com"
        streetAddress={site.address}
        addressCountry="NG"
        email={site.emailPrimary}
        image="/og.jpg"
        openingHours={site.hours}
      />

      <div>
        {/* HERO */}
        <section className="bg-[#f3f5ed] border-b border-zinc-200">
          <div className="container py-8 lg:py-12 grid lg:grid-cols-2 gap-8 items-center">
            {/* Left column */}
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-brand">• Be Green, Be Smart</p>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Better spaces. Smarter living.
              </h1>
              <p className="mt-3 text-zinc-700 max-w-2xl">
                We supply reliable <strong>mechanical wall switches & sockets</strong>, energy-efficient
                <strong> LED lighting</strong>, and accessories for homes, offices, and projects.
                Retail and <strong>wholesale</strong> support with fast nationwide fulfillment.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/categories" className="btn-primary" onClick={() => track('shop_now_click', { place: 'hero' })}>Shop Now</Link>
                <Link href="/wholesale" className="btn-outline" onClick={() => track('wholesale_enquiry_click', { place: 'hero' })}>Wholesale &amp; Bulk</Link>
                <Link href="#product-enquiry" className="btn-outline" onClick={() => track('contact_sales_click', { place: 'hero' })}>Contact Sales</Link>
              </div>
            </div>

            {/* Right column: Slider */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white"><Image src="/images/hero/hero-1@1280.webp" alt="Trucast switches and electrical accessories" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" /></div>
          </div>
        </section>

        {/* Explore electrical, lighting &amp; smart-home products */}
        <section className="container py-12">
          <h2 className="text-2xl font-semibold">Explore electrical, lighting &amp; smart-home products</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((c) => (<CategoryCard key={c.href} {...c} />))}
          </div>
        </section>

        {/* Catalog QR */}
        <section className="container py-6">
          <div className="card p-6 flex flex-col sm:flex-row items-center gap-6">
            <div className="shrink-0">
              <Image
                src="/images/qr/catalog.png"
                alt="Scan to view the Trucast product catalog"
                width={140}
                height={140}
                loading="lazy"
                className="rounded-md bg-white"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">View our catalog</h3>
              <p className="text-sm text-zinc-600">Scan the QR with your phone, or click the button to open the digital flipbook.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/go/catalog" className="btn-primary" onClick={() => track('catalog_open_click', { place: 'home_qr' })}>Open Catalog</Link>
              </div>
              <p className="text-xs text-zinc-500">Short link: <span className="font-mono">trucast-ng.com/go/catalog</span></p>
            </div>
          </div>
        </section>

        {/* Brands / certifications */}
        <section aria-labelledby="trust" className="bg-zinc-50 border-y border-zinc-200">
          <div className="container py-4 flex flex-wrap items-center justify-between gap-3">
            <p id="trust" className="text-sm text-zinc-600 shrink-0">Brands &amp; certifications</p>
            <ul className="flex items-center gap-6">
              <li aria-label="Standards Organisation of Nigeria (SON) compliant">
                <Image src="/images/certs/son.png" alt="Standards Organisation of Nigeria (SON) compliant" width={96} height={96} className="h-10 w-auto sm:h-12" />
              </li>
            </ul>
          </div>
        </section>

        {/* Why Choose */}
        <section className="container py-14">
          <h2 className="text-2xl font-semibold">Why Choose Trucast</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="card p-5"><p className="font-semibold">Project-Grade Quality</p><p className="text-sm text-zinc-600 mt-1">Durable materials, robust terminals, clean finishing.</p></div>
            <div className="card p-5"><p className="font-semibold">Energy-Efficient Lighting</p><p className="text-sm text-zinc-600 mt-1">POP panels, downlights, bulbs & floodlights with low-glare drivers.</p></div>
            <div className="card p-5"><p className="font-semibold">Wholesale Pricing</p><p className="text-sm text-zinc-600 mt-1">Competitive bulk rates and distributor support nationwide.</p></div>
            <div className="card p-5"><p className="font-semibold">Responsive Support</p><p className="text-sm text-zinc-600 mt-1">Quick assistance via WhatsApp, phone, and email.</p></div>
          </div>
        </section>

        {/* Payments & guarantees */}
        <section aria-labelledby="assurance-title" className="container pb-14">
          <h2 id="assurance-title" className="sr-only">Payments, delivery and guarantees</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card p-5">
              <p className="font-semibold mb-3">Payment &amp; Delivery</p>
              <ul className="space-y-2 text-sm text-zinc-700">
                <li className="flex items-start gap-2"><CheckIcon /> Secure payments (Transfer / POS / Paystack)</li>
                <li className="flex items-start gap-2"><CheckIcon /> Nationwide delivery in 1–5 business days</li>
                <li className="flex items-start gap-2"><CheckIcon /> Pay on delivery in select locations</li>
              </ul>
            </div>
            <div className="card p-5">
              <p className="font-semibold mb-3">Why shop with Trucast</p>
              <ul className="space-y-2 text-sm text-zinc-700">
                <li className="flex items-start gap-2"><CheckIcon /> Genuine products, SON compliant</li>
                <li className="flex items-start gap-2"><CheckIcon /> Warranty: 12-month limited warranty on select items</li>
                <li className="flex items-start gap-2"><CheckIcon /> 7-day returns — <Link href="/returns" className="link">see policy</Link></li>
                <li className="flex items-start gap-2"><CheckIcon /> Dedicated support for projects & wholesale</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#edf4ed] border-y border-zinc-200" id="product-enquiry">
          <div className="container py-14 grid lg:grid-cols-2 gap-10 items-start">
            <div><p className="text-xs uppercase tracking-widest text-brand font-semibold">Retail · Wholesale · Projects</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">A clearer route to your next order.</h2><p className="mt-4 text-zinc-700">Share products, quantities and your delivery location. Our sales team can confirm model specifications, pricing, stock and delivery before you order.</p><p className="mt-4 text-sm">Have a bill of quantities? <a className="link" href={`mailto:${site.emailPrimary}`}>Email your BOQ to sales</a>.</p><p className="mt-4 text-sm text-zinc-600">Visit us in Port Harcourt: {site.address}. Opening hours: {site.hours}.</p></div>
            <ProductEnquiry />
          </div>
        </section>
        <section className="container py-14">
          <div className="rounded-3xl bg-[#183e40] text-white p-7 sm:p-10 grid md:grid-cols-2 gap-8">
            <div><p className="text-xs uppercase tracking-widest text-green-200">A distinct digital service line</p><h2 className="mt-3 text-3xl font-semibold">Less process friction.<br />More time for business.</h2><p className="mt-4 text-green-50">WorkflowKits Digital Technology focuses on business process simplification: clearer workflows, fewer repeated tasks and easier handovers.</p></div>
            <div className="self-center"><h3 className="text-xl font-semibold">WorkflowKits Digital Technology</h3><p className="mt-3 text-green-50">Start with one process that slows your team down. Discuss how it works today and what a simpler way forward could look like.</p><Link className="mt-5 inline-flex rounded-xl bg-white text-[#183e40] px-5 py-3 font-semibold" href="/workflowkits">Explore digital services ↗</Link></div>
          </div>
        </section>

        {/* About strip */}
        <section className="bg-zinc-50 border-y">
          <div className="container py-10 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold">About Trucast</h3>
              <p className="text-sm text-zinc-700 mt-2">
                Trucast Nigeria Limited is an electricals and lighting distributor focused on quality, value, and service.
                We partner with builders, facility managers, and homeowners to deliver dependable products and support.
              </p>
              <p className="mt-3">
                <Link href="/about" className="link inline-flex items-center text-sm font-medium" aria-label="Read more about Trucast">
                  <span aria-hidden className="mr-1">{'>>>'}</span>
                  Click for more
                </Link>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="card p-4"><p className="text-sm text-zinc-600">Coverage</p><p className="font-semibold mt-1">Nationwide delivery</p></div>
              <div className="card p-4"><p className="text-sm text-zinc-600">Returns</p><p className="font-semibold mt-1">Hassle-free exchanges</p></div>
              <div className="card p-4"><p className="text-sm text-zinc-600">Support</p><p className="font-semibold mt-1">WhatsApp &amp; Email</p></div>
              <div className="card p-4"><p className="text-sm text-zinc-600">Pricing</p><p className="font-semibold mt-1">Transparent quotes</p></div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white">
          <div className="container py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-lg font-semibold">Ready to order or become a distributor?</p>
              <p className="text-sm text-zinc-600">Ask for bulk pricing and timelines. We’ll respond quickly.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link className="btn-primary" href="/wholesale">Wholesale Enquiry</Link>
              <a className="btn-outline" href={site.waLink} target="_blank" rel="noopener" onClick={() => track('whatsapp_click', { place: 'cta' })}>Chat on WhatsApp</a>
              <a className="btn-outline md:hidden" href={`tel:${tel}`} aria-label="Call Trucast Nigeria" onClick={() => track('call_click', { place: 'cta' })}>Call</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

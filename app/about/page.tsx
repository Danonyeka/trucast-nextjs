// app/about/page.tsx
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { OrganizationLd, BreadcrumbLd } from '@/components/seo/JsonLd'
import { site } from '@/lib/site'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trucast-ng.com'

export const metadata: Metadata = {
  title: 'About Us | Trucast Nigeria Limited',
  description:
    'Trucast Nigeria Limited supplies reliable electrical accessories, LED lighting, and smart devices for homes, offices, and projects across Nigeria.',
  alternates: { canonical: '/about' },
  openGraph: {
    url: `${SITE_URL}/about`,
    title: 'About Us | Trucast Nigeria Limited',
    description:
      'Learn about Trucast—our story, mission, and commitment to quality electrical accessories, LED lighting, and smart devices.',
    images: [{ url: '/og.jpg' }],
  },
  twitter: { card: 'summary_large_image', title: 'About Trucast', images: ['/og.jpg'] },
}

export default function AboutPage() {
  const tel = (site as any).phone ?? '+2347026921633'

  const teams = [
    {
      name: 'Smart Team',
      desc:
        'Specialists in smart door locks, breakers, motion sensors, and automation. We help spec, configure, and support deployments.',
      img: '/images/about/team-smart.jpg',
      alt: 'Trucast Smart Team configuring smart locks and automation controllers on a workbench',
    },
    {
      name: 'Lighting Team',
      desc:
        'Downlights, POP panels, bulbs and drivers—designed for efficiency and low glare. We assist with layout, wattage and color temp choices.',
      img: '/images/about/team-lighting.jpg',
      alt: 'Trucast Lighting Team preparing LED panel lights and drivers for project delivery',
    },
    {
      name: 'Strip Team',
      desc:
        'LED strip runs for accents and architectural lines: cut, crimp, and test. We supply profiles, connectors, and controllers for clean installs.',
      img: '/images/about/team-strip.jpg',
      alt: 'Trucast Strip Team assembling LED strip lengths with aluminum profiles and connectors',
    },
  ]

  return (
    <>
      {/* JSON-LD */}
      <OrganizationLd name={site.legalName} url={SITE_URL} logo="/og.jpg" sameAs={[]} />
      <BreadcrumbLd
        items={[
          { name: 'Home', item: SITE_URL },
          { name: 'About Us', item: `${SITE_URL}/about` },
        ]}
      />

      <main>
        {/* Hero */}
        <section className="bg-zinc-50 border-b border-zinc-200">
          <div className="container py-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold">About Trucast Nigeria Limited</h1>
              <p className="mt-3 text-zinc-700">
                We’re an electricals and lighting distributor focused on quality, value, and dependable
                service. From <strong>mechanical switches & sockets</strong> to <strong>LED lighting</strong> and
                smart devices, we support homeowners, builders, and facility managers with project-grade
                products and responsive after-sales care.
              </p>
              <div className="mt-6 flex gap-3">
                <Link href="/categories" className="btn-primary">Shop Products</Link>
                <Link href="/wholesale" className="btn-outline">Wholesale &amp; Bulk</Link>
              </div>
            </div>

            <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-white shadow-sm">
              <Image
                src="/images/about/facility.jpg"
                alt="Trucast warehouse facility with packed cartons ready for nationwide delivery"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="container py-12">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="mt-2 text-zinc-700">
            Make reliable electrical accessories and energy-efficient lighting accessible across Nigeria—backed
            by transparent pricing, quick fulfillment, and attentive support.
          </p>

          <h3 className="mt-8 text-xl font-semibold">What we value</h3>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="card p-5">
              <p className="font-semibold">Quality you can trust</p>
              <p className="text-sm text-zinc-600 mt-1">Durable materials, robust terminals, and clean finishing.</p>
            </div>
            <div className="card p-5">
              <p className="font-semibold">Energy savings</p>
              <p className="text-sm text-zinc-600 mt-1">POP panels, bulbs & drivers designed for low-glare efficiency.</p>
            </div>
            <div className="card p-5">
              <p className="font-semibold">Fair, clear pricing</p>
              <p className="text-sm text-zinc-600 mt-1">Retail and wholesale discounts with no surprises.</p>
            </div>
            <div className="card p-5">
              <p className="font-semibold">Responsive support</p>
              <p className="text-sm text-zinc-600 mt-1">Fast assistance via WhatsApp, phone, and email.</p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="bg-zinc-50 border-y">
          <div className="container py-12">
            <h2 className="text-2xl font-semibold">Our Story</h2>
            <ul className="mt-4 space-y-3 text-zinc-700">
              <li><strong>Founded:</strong> Built to solve the reliability gap in everyday electricals and lighting.</li>
              <li><strong>Focus:</strong> Consistent quality for residential and commercial projects, nationwide.</li>
              <li><strong>Today:</strong> 10k+ units shipped, 100+ projects serviced, 24–72h fulfillment window.</li>
            </ul>
          </div>
        </section>

        {/* Teams & Capabilities */}
        <section className="container py-12">
          <h2 className="text-2xl font-semibold">Teams &amp; Capabilities</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((t) => (
              <div key={t.name} className="card p-4">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-zinc-100">
                  <Image
                    src={t.img}
                    alt={t.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                </div>
                <p className="mt-3 font-semibold">{t.name}</p>
                <p className="text-sm text-zinc-600 mt-1">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white">
          <div className="container py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Want to work with us?</h2>
              <p className="text-sm text-zinc-600">Ask for bulk pricing, timelines, or product recommendations.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link className="btn-primary" href="/wholesale">Wholesale Enquiry</Link>
              <a className="btn-outline" href={site.waLink} target="_blank" rel="noopener">Chat on WhatsApp</a>
              <a className="btn-outline md:hidden" href={`tel:${tel}`}>Call</a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

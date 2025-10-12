// app/HomeClient.tsx (CLIENT COMPONENT)
'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Image, { type StaticImageData } from 'next/image'
import { OrganizationLd, LocalBusinessLd } from '@/components/seo/JsonLd'
import { site } from '@/lib/site'
import { track } from '@/lib/analytics'

import CategoryCard from '@/components/cards/CategoryCard'

// ✅ LCP slide: static-import the 1920px WEBP (present in your repo)
import hero1 from '@/public/images/hero/hero-1@1920.webp'

function HeroSlider() {
  // ✅ Point slides at the @1920.webp masters you uploaded
  const slides: { src: StaticImageData | string; alt: string }[] = useMemo(() => ([
    { src: hero1,                             alt: 'Premium Trucast switches' }, // static import = blur + priority
    { src: '/images/hero/hero-2@1920.webp',   alt: 'Sockets and panels' },
    { src: '/images/hero/hero-3@1920.webp',   alt: 'Discount promotion' },
    { src: '/images/hero/hero-4@1920.webp',   alt: 'Wall switches showcase' },
    { src: '/images/hero/hero-5@1920.webp',   alt: 'Panel lights and bulbs' },
    { src: '/images/hero/hero-6@1920.webp',   alt: 'POP panel lights' },
    { src: '/images/hero/hero-7@1920.webp',   alt: 'LED strips and bulbs' },
    { src: '/images/hero/hero-8@1920.webp',   alt: 'Special sales promotion' },
    { src: '/images/hero/hero-9@1920.webp',   alt: 'SON certified quality' },
    { src: '/images/hero/hero-10@1920.webp',  alt: 'Trucast smart devices' },
  ]), [])

  const [i, setI] = useState(0)
  const [reduced, setReduced] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(!!mq?.matches)
    update()
    mq?.addEventListener?.('change', update)
    return () => mq?.removeEventListener?.('change', update)
  }, [])

  useEffect(() => {
    if (reduced || paused) return
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 6000)
    return () => clearInterval(id)
  }, [reduced, paused, slides.length])

  const next = (i + 1) % slides.length
  const visible = [i, next]

  return (
    <div
      className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {visible.map((idx) => {
        const s = slides[idx]
        const isActive = idx === i
        const isFirstSlide = idx === 0

        return (
          <div
            key={`${idx}-${typeof s.src === 'string' ? s.src : 'static'}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              className="object-cover"
              sizes="100vw"            // full-bleed hero; let Next.js pick the right width
              {...(isFirstSlide
                ? { priority: true, placeholder: 'blur' as const }
                : { loading: 'lazy' as const })}
              decoding="async"
            />
          </div>
        )
      })}

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => setI((p) => (p - 1 + slides.length) % slides.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white p-2 hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => setI((p) => (p + 1) % slides.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white p-2 hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        ›
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-3 w-3 rounded-full ${idx === i ? 'bg-white' : 'bg-white/40'} ring-1 ring-black/20`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-4 w-4 text-brand" {...props}>
      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.6a1 1 0 0 1 1.4-1.4l3.3 3.3 6.8-6.8a1 1 0 0 1 1.4 0Z" />
    </svg>
  )
}

export default function HomeClient() {
  const categories = [
    { href: '/categories/switches',       title: 'Switches',           image: '/images/categories/switches.png' },
    { href: '/categories/sockets',        title: 'Sockets',            image: '/images/categories/sockets.png' },
    { href: '/categories/smart-locks',    title: 'Smart Locks',        image: '/images/categories/smart-locks.png' },
    { href: '/categories/recessed-light', title: 'POP / Panel Lights', image: '/images/categories/panel-light.png' },
  ]

  const tel = (site as any).phone ?? '+2347026921633'

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
        <section className="bg-brand/10 border-b border-zinc-200">
          <div className="container py-8 lg:py-12 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-brand">• Be Green, Be Smart</p>
              <h1 className="mt-2 text-4xl font-bold leading-tight">
                Premium Electrical Accessories, LED Lighting & Smart Devices — Built for Nigeria
              </h1>
              <p className="mt-3 text-zinc-700 max-w-2xl">
                We supply reliable <strong>mechanical wall switches & sockets</strong>, energy-efficient
                <strong> LED lighting</strong>, and accessories for homes, offices, and projects.
                Retail and <strong>wholesale</strong> support with fast nationwide fulfillment.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/categories" className="btn-primary" onClick={() => track('shop_now_click', { place: 'hero' })}>Shop Now</Link>
                <Link href="/wholesale" className="btn-outline" onClick={() => track('wholesale_enquiry_click', { place: 'hero' })}>Wholesale &amp; Bulk</Link>
                <Link href="/contact" className="btn-outline" onClick={() => track('contact_sales_click', { place: 'hero' })}>Contact Sales</Link>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div><p className="text-2xl font-bold">10k+</p><p className="text-xs text-zinc-600">Units shipped</p></div>
                <div><p className="text-2xl font-bold">100+</p><p className="text-xs text-zinc-600">Projects serviced</p></div>
                <div><p className="text-2xl font-bold">24–72h</p><p className="text-xs text-zinc-600">Fulfillment window</p></div>
              </div>
            </div>

            <HeroSlider />
          </div>
        </section>

        {/* Catalog QR */}
        <section className="container py-6">
          <div className="card p-6 flex flex-col sm:flex-row items-center gap-6">
            <div className="shrink-0">
              <Image src="/images/qr/catalog.png" alt="Scan to view the Trucast product catalog" width={140} height={140} priority className="rounded-md bg-white" />
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

        {/* Top Categories */}
        <section className="container pb-14">
          <h2 className="text-2xl font-semibold">Top Categories</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((c) => (<CategoryCard key={c.href} {...c} />))}
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
  )
}

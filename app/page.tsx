'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image, { type StaticImageData } from 'next/image';
import { OrganizationLd, LocalBusinessLd } from '@/components/seo/JsonLd';
import { site } from '@/lib/site';

// cards
import CategoryCard from '@/components/cards/CategoryCard';

// hero (slide 1 as static import for blur/LCP)
import hero1 from '@/public/images/hero/hero-1.png';

// ✅ category cover images (exact filenames from /public/images/categories)
import catSwitches   from '@/public/images/categories/switches.png';
import catSockets    from '@/public/images/categories/sockets.png';
import catSmartLocks from '@/public/images/categories/smart-locks.png';
import catPanelLight from '@/public/images/categories/panel-light.png';

/** ---------- Optimized fade slider (LCP-friendly) ---------- */
function HeroSlider() {
  const slides: { src: StaticImageData | string; alt: string }[] = useMemo(() => ([
    { src: hero1, alt: 'Premium Trucast switches' },
    { src: '/images/hero/hero-2.png', alt: 'Sockets and panels' },
    { src: '/images/hero/hero-3.png', alt: 'Discount promotion' },
    { src: '/images/hero/hero-4.png', alt: 'Wall switches showcase' },
    { src: '/images/hero/hero-5.png', alt: 'Panel lights and bulbs' },
    { src: '/images/hero/hero-6.png', alt: 'POP panel lights' },
    { src: '/images/hero/hero-7.png', alt: 'LED strips and bulbs' },
    { src: '/images/hero/hero-8.png', alt: 'Special sales promotion' },
    { src: '/images/hero/hero-9.png', alt: 'SON certified quality' },
    { src: '/images/hero/hero-10.png', alt: 'Trucast smart devices' },
  ]), []);

  const [i, setI] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(!!mq?.matches);
    update();
    mq?.addEventListener?.('change', update);
    return () => mq?.removeEventListener?.('change', update);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setI(p => (p + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [reduced, slides.length]);

  const next = (i + 1) % slides.length;
  const visible = [i, next];

  return (
    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg bg-white">
      {visible.map((idx) => {
        const s = slides[idx];
        const isActive = idx === i;

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
              sizes="100vw"
              quality={75}
              {...(idx === 0 ? { priority: true, placeholder: 'blur' as const } : { loading: 'lazy' })}
            />
          </div>
        );
      })}

      {/* Dots */}
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
  );
}

/** ----------------------- Home Page ----------------------- */
export default function HomePage() {
  // ✅ categories using your PNGs (static imports)
  const categories = [
    { href: '/categories/switches',       title: 'Switches',            image: catSwitches },
    { href: '/categories/sockets',        title: 'Sockets',             image: catSockets },
    { href: '/categories/smart-lock',     title: 'Smart Locks',         image: catSmartLocks },
    { href: '/categories/recessed-light', title: 'POP / Panel Lights',  image: catPanelLight },
  ];

  return (
    <>
      {/* JSON-LD for homepage */}
      <OrganizationLd
        name={site.legalName}
        url="https://trucast-ng.com"
        logo="/og.jpg"
        sameAs={[]}
      />
      <LocalBusinessLd
        name={site.legalName}
        url="https://trucast-ng.com"
        streetAddress={site.address}
        addressCountry="NG"
        email={site.emailPrimary}
        image="/og.jpg"
        openingHours={site.hours}
      />

      <div>
        {/* HERO (slider) */}
        <section className="bg-brand/10 border-b border-zinc-200">
          <div className="container py-8 lg:py-12 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-brand">• Be Green, Be Smart</p>
              <h1 className="mt-2 text-4xl font-bold leading-tight">
                Premium Electrical Accessories & LED Lighting — Built for Nigeria
              </h1>
              <p className="mt-3 text-zinc-700 max-w-2xl">
                We supply reliable <strong>mechanical wall switches & sockets</strong>, energy-efficient
                <strong> LED lighting</strong>, and accessories for homes, offices, and projects.
                Retail and <strong>wholesale</strong> support with fast nationwide fulfillment.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/categories" className="btn-primary">Shop Now</Link>
                <Link href="/wholesale" className="btn-outline">Wholesale &amp; Bulk</Link>
                <Link href="/contact" className="btn-outline">Contact Sales</Link>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold">10k+</p>
                  <p className="text-xs text-zinc-600">Units shipped</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">100+</p>
                  <p className="text-xs text-zinc-600">Projects serviced</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">24–72h</p>
                  <p className="text-xs text-zinc-600">Fulfillment window</p>
                </div>
              </div>
            </div>

            {/* Slider media */}
            <HeroSlider />
          </div>
        </section>

        {/* VALUE PROPS */}
        <section className="container py-14">
          <h2 className="text-2xl font-semibold">Why Choose Trucast</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="card p-5">
              <p className="font-semibold">Project-Grade Quality</p>
              <p className="text-sm text-zinc-600 mt-1">Durable materials, robust terminals, clean finishing.</p>
            </div>
            <div className="card p-5">
              <p className="font-semibold">Energy-Efficient Lighting</p>
              <p className="text-sm text-zinc-600 mt-1">POP panels, downlights, bulbs & floodlights with low-glare drivers.</p>
            </div>
            <div className="card p-5">
              <p className="font-semibold">Wholesale Pricing</p>
              <p className="text-sm text-zinc-600 mt-1">Competitive bulk rates and distributor support nationwide.</p>
            </div>
            <div className="card p-5">
              <p className="font-semibold">Responsive Support</p>
              <p className="text-sm text-zinc-600 mt-1">Quick assistance via WhatsApp, phone, and email.</p>
            </div>
          </div>
        </section>

        {/* CATEGORIES TEASER — now using CategoryCard grid */}
        <section className="container pb-14">
          <h2 className="text-2xl font-semibold">Top Categories</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((c) => (
              <CategoryCard key={c.href} {...c} />
            ))}
          </div>
        </section>

        {/* ABOUT STRIP */}
        <section className="bg-zinc-50 border-y">
          <div className="container py-10 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold">About Trucast</h3>
              <p className="text-sm text-zinc-700 mt-2">
                Trucast Nigeria Limited is an electricals and lighting distributor focused on quality, value, and service.
                We partner with builders, facility managers, and homeowners to deliver dependable products and support.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="card p-4">
                <p className="text-sm text-zinc-600">Coverage</p>
                <p className="font-semibold mt-1">Nationwide delivery</p>
              </div>
              <div className="card p-4">
                <p className="text-sm text-zinc-600">Returns</p>
                <p className="font-semibold mt-1">Hassle-free exchanges</p>
              </div>
              <div className="card p-4">
                <p className="text-sm text-zinc-600">Support</p>
                <p className="font-semibold mt-1">WhatsApp &amp; Email</p>
              </div>
              <div className="card p-4">
                <p className="text-sm text-zinc-600">Pricing</p>
                <p className="font-semibold mt-1">Transparent quotes</p>
              </div>
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
            <div className="flex gap-3">
              <Link className="btn-primary" href="/wholesale">Wholesale Enquiry</Link>
              <Link className="btn-outline" href="/contact">Talk to Sales</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

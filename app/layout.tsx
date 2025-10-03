// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';
import './(site)/_styles/globals.css';
import { site } from '@/lib/site';
import { CartProvider } from '@/components/cart/CartContext';
import { ToastProvider } from '@/components/ui/Toast';
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
import { OrganizationLd, WebSiteLd, LocalBusinessLd } from '@/components/seo/JsonLd';

// ✅ client-only features, but never SSR-rendered
const AnalyticsNoSSR = dynamic(() => import('@/components/analytics/Analytics'), { ssr: false });
const StickyWhatsAppNoSSR = dynamic(() => import('@/components/StickyWhatsApp'), { ssr: false });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trucast-ng.com';
const DEFAULT_TITLE = 'Trucast Nigeria — Electrical Accessories, LED Lighting & Smart Devices';
const DEFAULT_DESC =
  'Shop electrical accessories in Nigeria—premium switches, sockets, LED lighting & smart devices. Retail & wholesale, fast nationwide delivery, SON compliant.';

// Safely read optional fields from `site`
const s: any = site || {};
const sameAs: string[] = Array.isArray(s.social) ? s.social.filter(Boolean) : [];
const addr = s.address || {};
const hasAddress = !!addr.street;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: '%s | Trucast Nigeria',
  },
  description: DEFAULT_DESC,
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Trucast Nigeria',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: DEFAULT_TITLE,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: ['/og.jpg'],
  },
  verification: {
    google: 'b8wUw2zlZ-4qhPLB40QRMOJS1Nk5ctyNk0ql424it84',
    other: { 'msvalidate.01': '4C1D61B1DFA11D28F74422CEABFCC06D' },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#16a34a',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Icons / PWA */}
        <link rel="icon" href="/favicon.ico?v=4" sizes="any" />
        <link rel="icon" href="/icon.svg?v=4" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=4" />
        <link rel="manifest" href="/manifest.json" />

        {/* JSON-LD (SSR) */}
        <OrganizationLd
          name="Trucast Nigeria Limited"
          url={SITE_URL}
          logo="/icon.svg"
          sameAs={sameAs}
          baseUrl={SITE_URL}
        />
        <WebSiteLd name="Trucast Nigeria" url={SITE_URL} searchPath="/search?q={search_term_string}" />
        {hasAddress && (
          <LocalBusinessLd
            name="Trucast Nigeria Limited"
            url={SITE_URL}
            streetAddress={addr.street}
            addressLocality={addr.city}
            addressRegion={addr.state}
            postalCode={addr.postalCode}
            addressCountry="NG"
            telephone={s.phone}
            email={s.email}
            image="/og.jpg"
            openingHours={s.openingHours}
            baseUrl={SITE_URL}
          />
        )}
      </head>
      <body className="antialiased">
        {/* Analytics (client-only, no SSR) */}
        <AnalyticsNoSSR />

        {/* Skip link (styled in globals.css) */}
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        <CartProvider>
          <ToastProvider>
            {/* Anchor for "Back to top" links */}
            <div id="top" />

            {/* FIXED: announcement + header */}
            <div className="fixed inset-x-0 top-0 z-50">
              {/* Announcement bar */}
              <div className="bg-brand text-white text-[11px] sm:text-xs h-6 sm:h-8 flex items-center">
                <div className="container flex items-center gap-3">
                  <span className="font-semibold shrink-0">RC {site.rc}</span>
                  <div className="marquee-wrap flex-1">
                    <div className="marquee-track">
                      <span>{site.announcement} • </span>
                      <span>{site.announcement} • </span>
                      <span>{site.announcement} • </span>
                      <span>{site.announcement} • </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Header */}
              <SiteHeader />
            </div>

            {/* Main */}
            <main id="main-content" tabIndex={-1} className="pt-20 sm:pt-24 scroll-mt-24 sm:scroll-mt-28">
              {children}
            </main>

            {/* Footer */}
            <SiteFooter />

            {/* Sticky WhatsApp chat (client-only, no SSR) */}
            <StickyWhatsAppNoSSR
              // Prefer env: NEXT_PUBLIC_WHATSAPP_PHONE / NEXT_PUBLIC_WHATSAPP_MESSAGE
              // phone="2347026921633"
              // message="Hello Trucast! I need help with an item."
              utm={{ source: 'website', medium: 'cta', campaign: 'sticky_whatsapp' }}
              position="right"
              hideOn={['/checkout', '/cart/confirm']}
              pulse
              compact
            />
          </ToastProvider>
        </CartProvider>
      </body>
    </html>
  );
}

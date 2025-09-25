import type { Metadata, Viewport } from 'next';
import './(site)/_styles/globals.css';
import { site } from '@/lib/site';
import { CartProvider } from '@/components/cart/CartContext';
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.trucast-ng.com'),
  title: {
    default: 'Trucast Nigeria – LED Lights, Switches & Electrical Fittings',
    template: '%s | Trucast Nigeria',
  },
  description: site.tagline,
  openGraph: {
    type: 'website',
    url: 'https://www.trucast-ng.com',
    siteName: 'Trucast Nigeria',
    title: 'Trucast Nigeria – LED Lights, Switches & Electrical Fittings',
    description: site.tagline,
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Trucast Nigeria – LED lights, switches & electrical fittings in Nigeria.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trucast Nigeria – LED Lights, Switches & Electrical Fittings',
    description: site.tagline,
    images: ['/og.jpg'],
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
      </head>
      <body className="antialiased">
        <CartProvider>
          {/* Anchor for "Back to top" links */}
          <div id="top" />

          {/* ANNOUNCEMENT BAR (pairs with .marquee-* CSS you added) */}
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

          {/* Unified header (hamburger on mobile) */}
          <SiteHeader />

          {/* Page content */}
          <main>{children}</main>

          {/* Unified footer */}
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}

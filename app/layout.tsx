import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import './(site)/_styles/globals.css';
import { site } from '@/lib/site';
import { CartProvider } from '@/components/cart/CartContext';
import SiteHeader from '@/components/site/SiteHeader';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.trucast-ng.com'),
  title: {
    default: 'Trucast Nigeria – LED Lights, Switches & Electrical Fittings',
    template: '%s | Trucast Nigeria',
  },
  description: site.tagline,
  openGraph: {
    type: 'website',
    url: 'https://trucast-ng.com',
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
        <link rel="icon" href="/favicon.ico?v=4" sizes="any" />
        <link rel="icon" href="/icon.svg?v=4" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=4" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased">
        <CartProvider>
          {/* ANNOUNCEMENT BAR */}
          <div className="bg-brand text-white text-[11px] sm:text-xs h-6 sm:h-8 flex items-center">
            <div className="container flex items-center gap-3">
              {/* RC number pinned left; never shrinks */}
              <span className="font-semibold shrink-0">RC {site.rc}</span>

              {/* Scroller — fills remaining width only */}
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

          {/* New responsive header with hamburger on mobile */}
          <SiteHeader />

          <main>{children}</main>

          <footer className="mt-16 bg-zinc-900 text-white py-10">
            <div className="container grid sm:grid-cols-2 gap-8">
              <div>
                <p className="font-semibold">{site.legalName}</p>
                <p className="text-sm text-zinc-300 mt-1">{site.address}</p>
                <p className="text-sm text-zinc-300 mt-1">Hours: {site.hours}</p>
                <p className="text-sm text-zinc-300 mt-1">RC: {site.rc}</p>
                <div className="mt-3 flex gap-3">
                  <a className="btn-primary" href={site.waLink} target="_blank">Chat on WhatsApp</a>
                  <a className="btn-outline" href={`mailto:${site.emailPrimary}`}>Email</a>
                </div>
              </div>
              <div>
                <p className="font-semibold">Quick links</p>
                <ul className="mt-2 space-y-2 text-sm text-zinc-300">
                  <li><Link className="footer-link" href="/blog">Blog</Link></li>
                  <li><Link className="footer-link" href="/accessibility">Accessibility Statement</Link></li>
                </ul>
              </div>
            </div>
            <div className="container mt-8 border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm">© 2025 {site.legalName}. All rights reserved.</p>
              <div className="flex items-center gap-5">
                <Link href="#top" className="footer-link" aria-label="Back to top">↑ Back to top</Link>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}

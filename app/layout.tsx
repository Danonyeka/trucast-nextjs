import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import './(site)/_styles/globals.css';
import { site } from '@/lib/site';
import { CartProvider } from '@/components/cart/CartContext';
import CartButton from '@/components/cart/CartButton';
import SmartImage from '@/components/SmartImage';

export const metadata: Metadata = {
  title: 'Trucast Nigeria – LED Lights, Switches & Electrical Fittings',
  description: site.tagline,
  metadataBase: new URL('https://trucast-ng.com'),
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
      {/* No top padding; header is NOT fixed */}
      <body className="antialiased">
        <CartProvider>
          {/* ANNOUNCEMENT BAR (static, slim) */}
          <div className="bg-brand text-white text-[11px] sm:text-xs h-6 sm:h-8 flex items-center">
            <div className="container flex justify-between items-center">
              {/* RC number on the left */}
              <span className="font-semibold">RC {site.rc}</span>

              {/* Marquee message from site.ts */}
              <div className="overflow-hidden flex-1 ml-6">
                <div className="marquee">
                  <span>{site.announcement} • </span>
                  <span>{site.announcement} • </span>
                </div>
              </div>
            </div>
          </div>

          {/* HEADER (not fixed) */}
          <header
            id="top"
            className="border-b border-zinc-200 bg-white/90 backdrop-blur"
          >
            <div className="container flex items-center justify-between py-3 md:py-4 gap-4">
              <Link href="/" className="flex items-center gap-3">
                <SmartImage
                  src="/images/logo.png"
                  alt="Trucast logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <div>
                  <p className="font-bold leading-tight">{site.name}</p>
                  {/* Hide tagline on very small screens to prevent wrapping */}
                  <p className="hidden sm:block text-xs text-zinc-600 leading-tight">
                    {site.tagline}
                  </p>
                </div>
              </Link>

              <nav className="flex items-center gap-5 text-sm">
                <Link href="/" className="link" aria-current="page">Home</Link>
                <Link href="/categories" className="link">Shop</Link>
                <Link href="/search" className="link">Search</Link>
                <Link href="/wholesale" className="link">Wholesale</Link>
                <Link href="/guides" className="link">Guides</Link>
                <Link href="/contact" className="link">Contact</Link>
                <CartButton />
              </nav>
            </div>
          </header>

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

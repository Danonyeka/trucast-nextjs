import Link from 'next/link';
import { site } from '@/lib/site';

export default function SiteFooter() {
  return (
    <footer className="mt-16 bg-zinc-900 text-white py-10">
      <div className="container grid sm:grid-cols-2 gap-8">
        <div>
          <p className="font-semibold">{site.legalName}</p>
          <p className="text-sm text-zinc-300 mt-1">{site.address}</p>
          <p className="text-sm text-zinc-300 mt-1">Hours: {site.hours}</p>
          <p className="text-sm text-zinc-300 mt-1">RC: {site.rc}</p>

          <div className="mt-3 flex flex-wrap gap-3">
            <a className="btn-primary" href={site.waLink} target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>

            {/* Mobile-only Call button */}
            <a
              className="btn-outline md:hidden"
              href={`tel:${(site as any).phone ?? '+2347026921633'}`}
              aria-label="Call Trucast Nigeria"
            >
              Call
            </a>

            <a className="btn-outline" href={`mailto:${site.emailPrimary}`}>
              Email
            </a>
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
  );
}

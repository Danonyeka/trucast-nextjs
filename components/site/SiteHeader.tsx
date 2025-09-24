'use client';

import { useState } from 'react';
import Link from 'next/link';
import SmartImage from '@/components/SmartImage';
import CartButton from '@/components/cart/CartButton';
import { site } from '@/lib/site';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-10 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="container flex items-center justify-between py-2 md:py-4 gap-3">
        <Link href="/" className="flex items-center gap-2">
          <SmartImage
            src="/images/logo.png"
            alt="Trucast logo"
            width={36}
            height={36}
            className="h-9 w-auto md:h-10"
          />
          <div className="leading-tight">
            <p className="font-bold">{site.name}</p>
            <p className="hidden sm:block text-xs text-zinc-600">{site.tagline}</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5 text-sm">
          <Link href="/" className="link" aria-current="page">Home</Link>
          <Link href="/categories" className="link">Shop</Link>
          <Link href="/search" className="link">Search</Link>
          <Link href="/wholesale" className="link">Wholesale</Link>
          <Link href="/guides" className="link">Guides</Link>
          <Link href="/contact" className="link">Contact</Link>
          <CartButton />
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg border border-zinc-300"
          aria-label="Open menu"
          onClick={() => setOpen(v => !v)}
        >
          <div className="w-5 h-0.5 bg-zinc-900 mb-1" />
          <div className="w-5 h-0.5 bg-zinc-900 mb-1" />
          <div className="w-5 h-0.5 bg-zinc-900" />
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-zinc-200 bg-white shadow-sm">
          <div className="container py-3 grid gap-3 text-sm">
            <Link href="/" className="link" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/categories" className="link" onClick={() => setOpen(false)}>Shop</Link>
            <Link href="/search" className="link" onClick={() => setOpen(false)}>Search</Link>
            <Link href="/wholesale" className="link" onClick={() => setOpen(false)}>Wholesale</Link>
            <Link href="/guides" className="link" onClick={() => setOpen(false)}>Guides</Link>
            <Link href="/contact" className="link" onClick={() => setOpen(false)}>Contact</Link>
            <div className="pt-2"><CartButton /></div>
          </div>
        </div>
      )}
    </header>
  );
}

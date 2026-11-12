'use client';

import { useState } from 'react';
import Link from 'next/link';
import SmartImage from '@/components/SmartImage';
import { site } from '@/lib/site';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="container flex items-center justify-between py-2 md:py-4 gap-3">
        {/* Brand block */}
        <Link href="/" className="flex items-center gap-2 min-w-0">
          <SmartImage
            src="/images/logo.png"
            alt="Trucast logo"
            width={36}
            height={36}
            className="h-9 w-auto sm:h-10"
          />
          <div className="leading-tight min-w-0">
            {/* Truncate on tiny screens so it never collides with the menu button */}
            <p className="font-bold truncate sm:whitespace-normal">{site.name}</p>
            <p className="hidden sm:block text-xs text-zinc-600 leading-tight">{site.tagline}</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5 text-sm">
          <Link href="/" className="link">Home</Link>
          <Link href="/categories" className="link">Products</Link>
          <Link href="/search" className="link">Search</Link>
          <Link href="/wholesale" className="link">Wholesale</Link>
          <Link href="/guides" className="link">Guides</Link>
          <Link href="/workflowkits" className="link">WorkflowKits</Link>
          <Link href="/contact" className="link">Contact</Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-lg border border-zinc-300"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(v => !v)}
        >
          <div className="w-5 h-0.5 bg-zinc-900 mb-1" />
          <div className="w-5 h-0.5 bg-zinc-900 mb-1" />
          <div className="w-5 h-0.5 bg-zinc-900" />
        </button>
      </div>

      {/* Mobile slide-down panel */}
      {open && (
        <div id="mobile-navigation" className="lg:hidden border-t border-zinc-200 bg-white shadow-sm">
          <div className="container py-3 grid gap-3 text-sm">
            <Link href="/" className="link" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/categories" className="link" onClick={() => setOpen(false)}>Products</Link>
            <Link href="/search" className="link" onClick={() => setOpen(false)}>Search</Link>
            <Link href="/wholesale" className="link" onClick={() => setOpen(false)}>Wholesale</Link>
            <Link href="/guides" className="link" onClick={() => setOpen(false)}>Guides</Link>
            <Link href="/workflowkits" className="link" onClick={() => setOpen(false)}>WorkflowKits</Link>
            <Link href="/contact" className="link" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}

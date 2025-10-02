// components/StickyWhatsApp.tsx
'use client';

import { useMemo } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

type Props = {
  /** Phone number in international format without + or spaces, e.g. 2347012345678 */
  phone?: string;
  /** Prefill message shown in WhatsApp compose */
  message?: string;
  /** Add simple UTM params for attribution */
  utm?: { source?: string; medium?: string; campaign?: string };
  /** Optional tag appended to message, e.g. "SKU: S06-45A" */
  tag?: string;
  /** Position preset */
  position?: 'right' | 'left';
  /** Hide on these route prefixes */
  hideOn?: string[];
  /** Make button gently pulse to attract attention */
  pulse?: boolean;
  /** Compact style (icon-only on mobile) */
  compact?: boolean;
};

const DEFAULT_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '2347026921633';
const DEFAULT_MSG =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
  'Hello Trucast! I need some help with a product.';

export default function StickyWhatsApp({
  phone = DEFAULT_PHONE,
  message = DEFAULT_MSG,
  utm = { source: 'website', medium: 'cta', campaign: 'whatsapp_sticky' },
  tag,
  position = 'right',
  hideOn = ['/checkout', '/cart/confirm'],
  pulse = true,
  compact = true,
}: Props) {
  const pathname = usePathname();
  const search = useSearchParams();

  // Hide on specified routes
  const shouldHide = useMemo(
    () => hideOn.some((p) => pathname?.startsWith(p)),
    [pathname, hideOn]
  );
  if (shouldHide) return null;

  // Build context tag (page + sku if present)
  const ctxParts = [pathname || '/'];
  const sku = search?.get('sku') || search?.get('id') || '';
  if (sku) ctxParts.push(`SKU: ${sku}`);
  if (tag) ctxParts.push(tag);

  const prefill = useMemo(() => {
    const text = `${message} (from ${ctxParts.join(' | ')})`;
    const base = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    const params = new URLSearchParams();
    if (utm.source) params.set('utm_source', utm.source);
    if (utm.medium) params.set('utm_medium', utm.medium);
    if (utm.campaign) params.set('utm_campaign', utm.campaign);
    const qs = params.toString();
    return qs ? `${base}&${qs}` : base;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phone, message, pathname, sku, tag, utm.source, utm.medium, utm.campaign]);

  const sideClass =
    position === 'left' ? 'left-4 sm:left-6' : 'right-4 sm:right-6';

  const pulseClass = pulse
    ? 'motion-safe:animate-[pulse_2.4s_ease-in-out_infinite]'
    : '';

  // Basic analytics hook (no-op if gtag not present)
  const onClick = () => {
    try {
      // @ts-ignore
      window.gtag?.('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: pathname || '/',
        value: 1,
      });
    } catch {
      /* ignore */
    }
  };

  return (
    <Link
      href={prefill}
      target="_blank"
      aria-label="Chat with Trucast on WhatsApp"
      onClick={onClick}
      className={[
        'fixed bottom-4 sm:bottom-6 z-50 inline-flex items-center gap-2 rounded-full',
        'bg-emerald-600 text-white shadow-lg ring-1 ring-black/10',
        'hover:bg-emerald-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300',
        'transition will-change-transform active:scale-[0.98]',
        sideClass,
        pulseClass,
      ].join(' ')}
    >
      {/* Icon bubble */}
      <span className="flex h-12 w-12 items-center justify-center">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="shrink-0"
        >
          <path
            fill="currentColor"
            d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.46.04.1 5.38.15 11.98c.01 2.11.57 4.18 1.62 6L0 24l6.18-1.73a12 12 0 0 0 5.88 1.55h.05c6.6 0 11.96-5.34 12-11.94a11.9 11.9 0 0 0-3.59-8.4m-8.46 18.2h-.04a9.94 9.94 0 0 1-5.07-1.39l-.36-.21-3.67 1.03.98-3.58l-.23-.37a9.94 9.94 0 0 1-1.53-5.3c-.04-5.46 4.39-9.92 9.84-9.95h.04c2.63 0 5.11 1.03 6.98 2.9a9.84 9.84 0 0 1 2.9 7c-.03 5.45-4.49 9.87-9.84 9.87m5.4-7.4c-.3-.16-1.76-.87-2.03-.96c-.27-.1-.47-.15-.68.15s-.78.95-.96 1.14c-.18.2-.35.22-.65.08s-1.26-.47-2.4-1.5c-.88-.78-1.47-1.74-1.64-2.04c-.17-.3-.02-.47.13-.63c.13-.13.3-.35.45-.52c.15-.17.2-.3.3-.5c.1-.2.06-.37-.03-.53c-.09-.16-.68-1.62-.93-2.22c-.25-.6-.5-.52-.68-.53l-.58-.01c-.2 0-.52.07-.79.37c-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.08 3.17 5.03 4.45c.7.3 1.25.48 1.68.61c.71.23 1.36.2 1.87.12c.57-.08 1.76-.72 2-1.42c.24-.7.24-1.3.17-1.42c-.07-.12-.27-.2-.57-.36"
          />
        </svg>
      </span>

      {/* Label (hidden on small screens if compact) */}
      <span
        className={[
          'pr-4 text-sm font-medium',
          compact ? 'hidden sm:inline' : 'inline',
        ].join(' ')}
      >
        Chat on WhatsApp
      </span>
    </Link>
  );
}

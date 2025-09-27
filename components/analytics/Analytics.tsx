'use client';
import Script from 'next/script';

const PROVIDER = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER;

export default function Analytics() {
  if (PROVIDER !== 'plausible') return null;
  const DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN!;
  return (
    <>
      {/* Core tracking */}
      <Script strategy="lazyOnload" data-domain={DOMAIN} src="https://plausible.io/js/script.js" />
      {/* Tiny helper so window.plausible exists for custom events */}
      <Script id="plausible-polyfill" strategy="lazyOnload">
        {`window.plausible = window.plausible || function(){(window.plausible.q = window.plausible.q || []).push(arguments)}`}
      </Script>
    </>
  );
}

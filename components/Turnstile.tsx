'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function TurnstileWidget({ action = 'contact', theme = 'auto' }:{
  action?: string; theme?: 'auto'|'light'|'dark'
}) {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';
  const [ready, setReady] = useState(false);

  useEffect(() => setReady(true), []);

  if (!siteKey) {
    return <p className="text-red-600 text-sm">Captcha not configured.</p>;
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        onReady={() => setReady(true)}
      />
      {ready && (
        <div
          className="cf-turnstile"
          data-sitekey={siteKey}
          data-theme={theme}
          data-action={action}
        />
      )}
    </>
  );
}

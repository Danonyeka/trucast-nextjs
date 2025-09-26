'use client';

import SmartImage from '@/components/SmartImage';

export default function TrustStrip() {
  return (
    <section aria-labelledby="trust" className="bg-zinc-50 border-y border-zinc-200 py-4">
      <div className="container flex flex-wrap items-center justify-between gap-3">
        <p id="trust" className="text-sm text-zinc-600 shrink-0">
          Brands &amp; certifications
        </p>

        <ul className="flex items-center gap-6">
          <li aria-label="Standards Organisation of Nigeria (SON) compliant">
            <SmartImage
              src="/images/certs/son.png"
              alt="Standards Organisation of Nigeria (SON) compliant"
              width={96}
              height={96}
              className="h-10 w-auto sm:h-12"
            />
          </li>

          {/* Add more logos here later */}
          {/* <li><SmartImage src="/images/brands/philips.svg" alt="Philips" decorative width={80} height={24} /></li> */}
        </ul>
      </div>
    </section>
  );
}


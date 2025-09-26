'use client';

import Link from 'next/link';

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-4 w-4 text-brand" {...props}>
      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.6a1 1 0 0 1 1.4-1.4l3.3 3.3 6.8-6.8a1 1 0 0 1 1.4 0Z" />
    </svg>
  );
}

export default function StoreAssurances() {
  return (
    <section aria-labelledby="assurance-title" className="container my-10">
      <h2 id="assurance-title" className="sr-only">Payments, delivery and guarantees</h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Payments & Delivery */}
        <div className="card p-5">
          <p className="font-semibold mb-3">Payment &amp; Delivery</p>
          <ul className="space-y-2 text-sm text-zinc-700">
            <li className="flex items-start gap-2"><CheckIcon /> Secure payments (Transfer / POS / Paystack)</li>
            <li className="flex items-start gap-2"><CheckIcon /> Nationwide delivery in 1–5 business days</li>
            <li className="flex items-start gap-2"><CheckIcon /> Pay on delivery in select locations</li>
          </ul>
        </div>

        {/* Proof points / Guarantees */}
        <div className="card p-5">
          <p className="font-semibold mb-3">Why shop with Trucast</p>
          <ul className="space-y-2 text-sm text-zinc-700">
            <li className="flex items-start gap-2"><CheckIcon /> Genuine products, SON compliant</li>
            <li className="flex items-start gap-2"><CheckIcon /> Warranty: 12-month limited warranty on select items</li>
            <li className="flex items-start gap-2">
              <CheckIcon /> 7-day returns — <Link href="/returns" className="link">see policy</Link>
            </li>
            <li className="flex items-start gap-2"><CheckIcon /> Dedicated support for projects & wholesale</li>
          </ul>
        </div>
      </div>
    </section>
  );
}


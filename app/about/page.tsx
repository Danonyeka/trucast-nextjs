// app/about/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Trucast Nigeria',
  description:
    'Trucast Nigeria supplies electrical accessories in Nigeria—switches, sockets, LED lighting & smart devices. SON-compliant products, retail & wholesale support.',
}

export default function AboutPage() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold">About Trucast Nigeria</h1>
      <p className="mt-3 max-w-3xl text-zinc-700">
        Trucast Nigeria Limited supplies reliable mechanical wall switches & sockets, energy-efficient
        LED lighting, and smart devices for homes, offices, and projects. We serve retail and wholesale
        customers nationwide with tested, SON-compliant products and fast fulfilment.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <h2 className="font-semibold">What we do</h2>
          <ul className="mt-2 list-disc pl-5 text-zinc-700">
            <li>Switches, sockets, breakers and accessories</li>
            <li>LED bulbs, POP panels, recessed downlights</li>
            <li>Smart locks, smart plugs, motion sensors</li>
            <li>Retail, wholesale & project supply</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold">Why choose us</h2>
          <ul className="mt-2 list-disc pl-5 text-zinc-700">
            <li>SON-compliant quality and 12-month warranty (select items)</li>
            <li>Competitive bulk pricing with dedicated support</li>
            <li>Fast nationwide delivery & secure payments</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

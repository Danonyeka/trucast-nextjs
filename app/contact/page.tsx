// app/contact/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Trucast Nigeria',
  description:
    'Contact Trucast Nigeria for quotes, orders or support on electrical accessories, LED lighting & smart devices. Call, WhatsApp or email—fast response nationwide.',
}

export default function ContactPage() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold">Contact Trucast</h1>
      <p className="mt-2 text-zinc-600 max-w-2xl">We’d love to hear from you.</p>

      <form className="mt-8 grid max-w-2xl gap-5">
        <label className="block">
          <span className="text-sm font-medium text-zinc-800">Your name</span>
          <input
            type="text"
            name="name"
            required
            className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
            placeholder="John Doe"
            aria-required="true"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-zinc-800">Your email or phone</span>
          <input
            type="text"
            name="contact"
            required
            className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
            placeholder="you@example.com or +234…"
            aria-required="true"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-zinc-800">Message</span>
          <textarea
            name="message"
            rows={6}
            required
            className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
            placeholder="How can we help?"
            aria-required="true"
          />
        </label>

        <div>
          <button
            type="submit"
            className="inline-flex items-center rounded-xl bg-brand px-5 py-3 font-semibold text-white hover:bg-brand/90 focus:outline-none focus:ring-2 focus:ring-brand/40"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  )
}

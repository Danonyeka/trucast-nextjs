// app/wholesale/page.tsx
import Link from "next/link";
import { site } from "@/lib/site";

export default function WholesalePage() {
  // Build mailto without ever typing against `emailSecondary`
  const subject = `Wholesale Inquiry - ${site.name}`;

  // Read optional secondary email *at runtime* only
  const ccValue = (site as any)?.emailSecondary as string | undefined;

  // Compose the query string safely
  const qp = new URLSearchParams();
  qp.set("subject", subject);
  if (ccValue) qp.set("cc", ccValue);

  const mailto = `mailto:${site.emailPrimary}?${qp.toString()}`;

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">Wholesale</h1>

      <p className="text-zinc-600 mt-3 max-w-prose">
        For bulk pricing on switches, sockets, LED panels and more, reach out and our
        sales team will get back to you quickly.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href={mailto} className="btn-primary">
          Email for a Quote
        </a>

        <a href={site.waLink} target="_blank" rel="noreferrer" className="btn-outline">
          Chat on WhatsApp
        </a>

        <Link href="/categories" className="btn-outline">
          Browse Categories
        </Link>
      </div>
    </div>
  );
}

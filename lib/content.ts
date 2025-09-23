// lib/content.ts

// ===== Types =====
export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  body?: string;   // optional so builds don't fail if missing
  date?: string;   // optional display date (ISO string preferred)
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  body?: string;   // optional body; list pages can show excerpt
  date?: string;   // optional display date
  author?: string;
  tags?: string[];
};

// ===== Seed Data (edit freely) =====
export const guides: Guide[] = [
  {
    slug: 'getting-started',
    title: 'Getting Started with Trucast',
    excerpt:
      'How to place orders, payment options, delivery, and getting support.',
    body:
      `Welcome to Trucast Nigeria Limited.

This quick guide walks you through:
• Browsing products and using search/filters
• Adding items to cart and requesting quotes
• Payment and delivery options
• How to reach our sales team

Tip: you can WhatsApp us any time via the green button in the header.`,
    date: '2025-09-01',
  },
  {
    slug: 'warranty-and-returns',
    title: 'Warranty & Returns',
    excerpt:
      'Understand our product warranty coverage and the simple steps to request a return or exchange.',
    body:
      `All Trucast products are backed by our quality guarantee.

• Keep your invoice for warranty claims
• Report defects within the warranty window
• We’ll guide you on repair or replacement`,
    // date is optional; omit if not needed
  },
];

export const posts: BlogPost[] = [
  {
    slug: 'bulk-pricing-savings',
    title: 'Save More with Bulk Purchase (Up to 15% Off)',
    excerpt:
      'Get discounted pricing on switches, sockets, LED panels and more when you buy in volume.',
    body:
      `Planning a project or outfitting a property? Trucast offers tiered discounts for bulk purchases across our premium electrical accessories and lighting.

Talk to our sales team for a tailored quote.`,
    date: '2025-08-20',
    tags: ['promotions', 'pricing'],
  },
  {
    slug: 'why-trucast-switches',
    title: 'Why Electricians Prefer Trucast Switches & Sockets',
    excerpt:
      'Safe, durable, reliable — discover what makes our fittings a favorite among installers.',
    body:
      `From materials to design, Trucast switches and sockets are engineered for safety and longevity. Certified and trusted nationwide.`,
    date: '2025-07-10',
    tags: ['product', 'quality'],
  },
];

// ===== Helpers (optional but handy) =====
export function getGuide(slug: string): Guide | undefined {
  return guides.find(g => g.slug === slug);
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find(p => p.slug === slug);
}

// lib/content.ts

export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  body?: string;
  date?: string;
  category?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;   // markdown or html string (we convert on render)
  body?: string;      // plain text fallback
  date?: string;      // original publish date (YYYY-MM-DD)
  updated?: string;   // optional last-updated date (YYYY-MM-DD)
  author?: string;
  tags?: string[];
  cover?: string;     // optional image path (e.g., /images/blog/foo.jpg)
};

// ------- Guides -------
export const guides: Guide[] = [
  {
    slug: 'getting-started',
    title: 'Getting Started with Trucast',
    excerpt:
      'How to place orders, payment options, delivery, and getting support.',
    body: `Welcome to Trucast Nigeria Limited.

This quick guide walks you through:
• Browsing products and using search/filters
• Adding items to cart and requesting quotes
• Payment and delivery options
• How to reach our sales team

Tip: you can WhatsApp us any time via the green button in the header.`,
    date: '2025-09-01',
    category: 'Onboarding',
  },
  {
    slug: 'warranty-and-returns',
    title: 'Warranty & Returns',
    excerpt:
      'Understand our product warranty coverage and the simple steps to request a return or exchange.',
    body: `All Trucast products are backed by our quality guarantee.

• Keep your invoice for warranty claims
• Report defects within the warranty window
• We’ll guide you on repair or replacement`,
    date: '2025-09-05',
    category: 'Support',
  },
];

// ------- Blog -------
export const posts: BlogPost[] = [
  {
    slug: 'bulk-pricing-savings',
    title: 'Save More with Bulk Purchase (Up to 15% Off)',
    excerpt:
      'Get discounted pricing on switches, sockets, LED panels and more when you buy in volume.',
    content: `Planning a project or outfitting a property? **Trucast** offers tiered discounts
for bulk purchases across our premium electrical accessories and lighting.

- Switches & sockets  
- LED panels & strip lights  
- Accessories

> Talk to our sales team for a tailored quote.`,
    body:
      `Planning a project or outfitting a property? Trucast offers tiered discounts for bulk purchases across our premium electrical accessories and lighting.

Talk to our sales team for a tailored quote.`,
    date: '2025-08-20',
    updated: '2025-09-01', // optional; remove or change as needed
    author: 'Trucast Team',
    tags: ['promotions', 'pricing'],
    // cover: '/images/blog/bulk-pricing.jpg',
  },
  {
    slug: 'why-trucast-switches',
    title: 'Why Electricians Prefer Trucast Switches & Sockets',
    excerpt:
      'Safe, durable, reliable — discover what makes our fittings a favorite among installers.',
    content: `From materials to design, **Trucast** switches and sockets are engineered
for safety and longevity. Certified and trusted nationwide.

- Robust internal components  
- Clean, modern styling  
- Excellent value`,
    body:
      `From materials to design, Trucast switches and sockets are engineered for safety and longevity. Certified and trusted nationwide.`,
    date: '2025-07-10',
    updated: '2025-07-15', // optional
    author: 'Trucast Team',
    tags: ['product', 'quality'],
    // cover: '/images/blog/why-switches.jpg',
  },
];

// Helpers
export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

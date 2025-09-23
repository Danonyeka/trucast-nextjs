// lib/content.ts

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;        // ISO date
  author?: string;
  cover?: string;      // public path to an image (optional)
  tags?: string[];
  content: string;     // plain text or simple markdown (##, ###, *, **, lists)
};

export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date?: string;
};

/** --- BLOG POSTS --- */
export const posts: Post[] = [
  {
    slug: "welcome-to-trucast",
    title: "Welcome to Trucast — Quality Electrical Accessories & LED Lighting",
    excerpt:
      "We’ve refreshed our catalog and streamlined ordering for retail and wholesale customers.",
    author: "Trucast Team",
    cover: "/images/hero/hero-5.png",
    tags: ["Company", "Updates"],
    content: `
## Welcome to Trucast

Thanks for visiting! We supply **premium wall switches & sockets**, POP/panel lights, downlights, bulbs and accessories designed for Nigerian homes and projects.

- Wholesale pricing with transparent quotes
- Nationwide delivery within 24–72h
- Responsive support via WhatsApp, phone & email

If you’re a contractor or distributor, check our **Wholesale** page to get started.
    `.trim(),
  },
  {
    slug: "bulk-pricing-and-distributor-support",
    title: "Bulk Pricing & Distributor Support",
    excerpt:
      "Get up to 15% discount on bulk purchases with fast nationwide fulfillment and responsive support.",
    date: "2025-02-01",
    author: "Sales",
    cover: "/images/hero/hero-8.png",
    tags: ["Wholesale", "Pricing"],
    content: `
### Bulk Pricing

We offer tiered discounts for distributors and project buyers. Typical benefits:

- Up to **15%** off on qualifying bulk orders
- Consolidated invoicing
- Delivery coordination to site

Contact Sales for a tailored quote and availability.
    `.trim(),
  },
];

/** --- GUIDES (used by /guides) --- */
export const guides: Guide[] = [
  {
    slug: "choosing-led-lights",
    title: "Choosing the Right LED Lights for Your Home",
    excerpt:
      "How to pick energy-efficient LEDs that fit your space and reduce energy costs.",
    category: "Lighting",
  },
  {
    slug: "smart-home-basics",
    title: "Smart Home Basics with Trucast",
    excerpt:
      "Intro to smart plugs, motion sensors, and smart breakers for modern living.",
    category: "Smart Devices",
  },
  {
    slug: "safe-electrical-install",
    title: "Safe Electrical Installations",
    excerpt:
      "Best practices for installing switches and sockets safely in Nigerian homes.",
    category: "Safety",
  },
];

/** Helpers */
export function getPosts(): Post[] {
  // newest first
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

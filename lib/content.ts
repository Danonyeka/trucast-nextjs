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
  {
    slug: ‘smart-lighting-nigeria’,
title: ‘Transforming Nigerian Homes and Businesses with Smart Lighting’,
excerpt: ‘Discover how Trucast’s smart lighting solutions save energy, enhance comfort, and bring modern style to Nigerian spaces.’,
content: ‘Trucast Nigeria Limited is redefining home and business environments with premium smart lighting and electrical accessories. From energy efficiency to convenience, smart lighting is shaping the future of modern living in Nigeria.’,
body: 
 'In today’s fast-paced world, lighting is no longer just about brightness — it’s about creating comfort, efficiency, and style. At Trucast Nigeria Limited, we believe every Nigerian home and business deserves access to world-class lighting and electrical solutions.

  **Why Smart Lighting Matters**
  Smart lighting allows you to control your lights with ease — from your smartphone, a remote, or even voice assistants. This means you can set the right mood, save energy, and enhance security with just a tap or a voice command.

  **Benefits of Smart Lighting for Nigerian Homes and Businesses**
  - **Energy Savings**: LED smart bulbs and panels use less power, helping reduce electricity bills.
  - **Convenience**: Control lighting from anywhere, whether at home, the office, or on the go.
  - **Security**: Program lights to turn on/off automatically, giving the impression of occupancy even when away.
  - **Style & Ambience**: From warm to cool tones, smart lighting lets you personalize your space.

  **Trucast’s Promise**
  At Trucast, we are committed to bringing **reliable, affordable, and stylish** solutions to Nigeria’s growing demand for modern living. Whether you’re a homeowner, facility manager, or builder, our range of smart devices, switches, and LED lighting is designed to meet your needs.

  Ready to upgrade your space? Visit our [website](https://www.trucast-ng.com) or contact us for wholesale and bulk purchase offers. Enjoy up to **20% discounts on bulk orders**.’,

date: '2025-10-01’
updated: ‘2025-10-01’
author: 'Trucast Team'
tags: ['Smart Lighting', 'Energy Savings', 'Home Automation', 'LED Solutions', 'Nigeria'] 
  },
];

// Helpers
export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

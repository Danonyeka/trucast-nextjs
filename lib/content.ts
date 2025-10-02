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
    slug: "smart-lighting-nigeria",
    title: "Transforming Nigerian Homes and Businesses with Smart Lighting",
    excerpt:
      "Discover how Trucast’s smart lighting solutions save energy, enhance comfort, and bring modern style to Nigerian spaces.",
    content:
      "Trucast Nigeria Limited is redefining home and business environments with premium smart lighting and electrical accessories. From energy efficiency to convenience, smart lighting is shaping the future of modern living in Nigeria.",
    body: `
In today’s fast-paced world, lighting is no longer just about brightness — it’s about creating comfort, efficiency, and style. At **Trucast Nigeria Limited**, we believe every Nigerian home and business deserves access to world-class lighting and electrical solutions.

### Why Smart Lighting Matters
Smart lighting allows you to control your lights with ease — from your smartphone, a remote, or even voice assistants. This means you can set the right mood, save energy, and enhance security with just a tap or a voice command.

### Benefits of Smart Lighting
- **Energy Savings:** LED smart bulbs and panels use less power, helping reduce electricity bills.
- **Convenience:** Control lighting from anywhere — home, office, or on the go.
- **Security:** Program lights to turn on/off automatically, giving the impression of occupancy when away.
- **Style & Ambience:** From warm to cool tones, tailor the feel of your space.

### Trucast’s Promise
We’re committed to **reliable, affordable, and stylish** solutions for Nigeria’s growing demand for modern living. Whether you’re a homeowner, facility manager, or builder, our range of smart devices, switches, and LED lighting is designed to meet your needs.

**Bulk buyers save up to 20%**. Reach out to the Trucast Team for wholesale pricing.
`,
    date: "2025-10-01",
    updated: "2025-10-01",
    author: "Trucast Team",
    tags: ["Smart Lighting", "Energy Savings", "Home Automation", "LED Solutions", "Nigeria"],
  },
  {
    slug: "smart-switches-nigeria",
    title: "Smart Switches and Sockets — Modern Control for Every Nigerian Home",
    excerpt:
      "Upgrade your home and office with Trucast’s stylish smart switches and sockets designed for safety, convenience, and efficiency.",
    content:
      "Trucast offers a premium range of smart switches and sockets that combine safety with modern aesthetics. Control appliances with ease and enjoy the future of electrical fittings in Nigeria.",
    body: `
Switches and sockets are some of the most used items in any building — but they don’t have to be boring. At **Trucast**, we’ve reimagined these essentials with **smart, stylish, and safe** designs for homes, offices, and commercial spaces.

### Why Choose Smart Switches & Sockets?
- **Safety First:** Built to international standards with durable materials.
- **Convenience:** Remotely control appliances and lighting via apps or voice assistants.
- **Energy Management:** Monitor and reduce energy usage.
- **Style Upgrade:** Sleek finishes (silver, white, glass-touch, and more) that suit modern interiors.

### Built for Nigeria
From high-load cooker control switches to everyday sockets, Trucast products are built for **long-lasting reliability** and **aesthetic appeal**.

### Trucast Advantage
- Affordable **bulk/wholesale** prices
- Up to **20% discount** on large orders
- Trusted by builders, facility managers, and homeowners nationwide
`,
    date: "2025-10-01",
    updated: "2025-10-01",
    author: "Trucast Team",
    tags: ["Smart Switches", "Sockets", "Home Automation", "Electrical Accessories", "Nigeria"],
  },
  {
    slug: "wholesale-electrical-accessories-nigeria",
    title: "Wholesale and Bulk Electrical Accessories — Save More with Trucast",
    excerpt:
      "Unbeatable wholesale and bulk deals on lighting, smart devices, and electrical accessories from Trucast Nigeria Limited.",
    content:
      "Builders, contractors, and facility managers across Nigeria can now enjoy cost-effective solutions with Trucast’s wholesale and bulk purchase options.",
    body: `
For large projects, real estate developments, and facility upgrades, cost savings matter as much as quality. That’s why **Trucast** offers **wholesale and bulk purchase options** tailored to your needs.

### Who Benefits from Bulk Orders?
- Builders and contractors (estates, commercial complexes)
- Facility managers upgrading residential or office spaces
- Wholesalers and retailers stocking reliable, in-demand products

### Our Wholesale Promise
- **Discounts up to 20%** on bulk purchases  
- Wide range: switches, sockets, LED bulbs, POP panel lights, smart locks, plugs, and more  
- Consistent availability and timely delivery across Nigeria  
- RC-certified company (**RC 8183115**), trusted for quality and authenticity

**Need a container-load or project supply?** The Trucast Team is ready to support your scope and timelines.
`,
    date: "2025-10-01",
    updated: "2025-10-01",
    author: "Trucast Team",
    tags: ["Wholesale Electricals", "Bulk Purchase", "LED Lighting", "Smart Devices", "Nigeria"],
  },
];


// Helpers
export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

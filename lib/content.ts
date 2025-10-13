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
    content: `**Smarter Savings for Every Project**
Planning a new project, renovation, or property upgrade? **Trucast** helps contractors, retailers, and project owners save more through our **tiered bulk-purchase program.** The more you buy, the more you save — **up to 15% off** on our premium electrical accessories and lighting solutions.
Whether you’re equipping a new development or restocking for resale, Trucast’s bulk pricing ensures you get **high performance, reliable supply, and unbeatable value.**
________________________________________
**Eligible Product Categories**
Our bulk discount program covers nearly all Trucast product lines, giving you flexibility to build a complete solution for your project:
⚡ **Switches & Sockets**
Durable, stylish, and certified for safety. Choose from classic to modern flat-plate designs, all engineered for long life and easy installation.
💡 **LED Lighting**
Energy-efficient **LED bulbs, downlights, recessed lights, panel lights**, and **strip lights** that deliver bright, consistent illumination while reducing energy costs.
🧠 **Smart Home Devices**
Bring intelligence to every space with **smart switches, smart plugs, motion sensors, Wi-Fi relays**, and **smart locks** — all compatible with major automation platforms.
🔌 **Electrical Accessories**
High-quality **extension cords, connectors, cable clips, switch boxes**, and **mounting accessories** — everything you need for clean, reliable installation.
🧱 **Aluminium Profiles & Strip Housings**
Perfect for LED strip integration — our Alu profiles enhance aesthetics, heat dissipation, and longevity, ideal for retail, residential, and hospitality lighting designs.
________________________________________
**Tiered Discount Structure**
We offer progressive discounts based on your total purchase volume
For recurring customers and project-based partnerships, Trucast offers **custom quotes** and **dedicated account support** to simplify your procurement process.
________________________________________
**Why Buy in Bulk from Trucast**
**•	Guaranteed Stock Availability:** Avoid project delays with our ready-to-ship inventory.
**•	Nationwide Delivery:** We deliver anywhere in Nigeria within 24–72 hours.
**•	Verified Quality:** Every item passes internal QC before dispatch.
**•	After-Sales Support:** Our technical team is always available for product guidance.
________________________________________
**How to Order**
Bulk orders can be placed directly through:
📞 **WhatsApp Chat**
📧 **Email:** sales@trucast-ng.com
Or simply fill the **Contact Form** on our website, and our sales team will send a **tailored quotation** within 24 hours.
________________________________________
**Power Every Project with Trucast**
At **Trucast Nigeria Limited**, we understand that professionals need both performance and price advantage. Our bulk purchase program empowers electricians, retailers, and contractors to stay competitive while maintaining the highest standards of safety and style.
**Smart Homes. Smart Living.**
**Save more — build better with Trucast.**
`,
    body:
      `Planning a project or outfitting a property? Trucast offers tiered discounts for bulk purchases across our premium electrical accessories and lighting.

Talk to our sales team for a tailored quote.`,
    date: '2025-10-13',
    updated: '2025-10-13', // optional; remove or change as needed
    author: 'Trucast Team',
    tags: ['promotions', 'pricing'],
    // cover: '/images/blog/bulk-pricing.jpg',
  },
// ...previous posts above

{
  slug: 'why-trucast-switches',
  title: 'Why Electricians Prefer Trucast Switches & Sockets',
  excerpt:
    'Electricians across Nigeria trust Trucast for reliability, safety, and modern design — see why our switches and sockets stand out.',
  content: `
From materials to design, **Trucast** switches and sockets are engineered with electricians in mind — combining safety, reliability, and style. Every product is crafted to meet international standards and certified for use across Nigeria, making Trucast one of the most trusted names in electrical fittings.

Electricians know that high-quality electrical accessories make their work easier, faster, and safer. That’s why Trucast switches and sockets are becoming the top choice on residential, commercial, and industrial projects nationwide.


### **1. Robust Internal Components**  
Behind the clean exterior is superior engineering. Trucast switches and sockets are built with **high-conductivity copper contacts**, **flame-retardant housings**, and **precision-molded parts** that ensure firm connections and consistent performance.  
Once installed, these fittings deliver long-term reliability even in demanding conditions.


### **2. Clean, Modern Styling**  
Beyond performance, Trucast products bring aesthetic appeal to any space. The sleek, minimalist design blends seamlessly with both **modern and traditional interiors**, giving customers a refined finish that enhances the overall look of their homes and offices.  
Available in **matte white, brushed silver, and glossy finishes**, the range offers design flexibility for architects and interior designers.


### **3. Certified for Safety**  
All Trucast switches and sockets undergo **rigorous quality testing** — from electrical endurance to insulation resistance — before they reach the market. Each product meets **Nigerian and international safety standards**, ensuring peace of mind for installers and end users alike.  
This commitment to quality reduces rework, callbacks, and site failures — saving electricians both time and reputation.


### **4. Excellent Value for Professionals and Homeowners**  
Trucast combines premium quality with affordability, giving electricians and project owners excellent value for money. Bulk orders and wholesale options help contractors manage costs without compromising on performance or appearance.  
Whether wiring a new development or upgrading an existing property, Trucast provides the balance of **durability, beauty, and cost-efficiency** that professionals demand.


### **5. Trusted Nationwide**  
From Lagos to Port Harcourt, Abuja to Enugu, Trucast products are distributed through authorized dealers and online platforms. Our growing reputation is built on consistent quality, responsive support, and a genuine understanding of what electricians need in the field.


### **The Trucast Promise**  
At Trucast Nigeria Limited, we believe in empowering electricians with products that make their work safer, smarter, and more rewarding. Every switch, socket, and fitting reflects our promise of **quality you can trust — for years to come.**
`,
  body:
    `Trucast switches and sockets are trusted by electricians across Nigeria for their reliability, safety, and style. Built with high-quality materials and certified to international standards, they deliver lasting performance and value on every project.`,
  date: '2025-07-10',
  updated: '2025-07-15',
  author: 'Trucast Team',
  tags: ['product', 'quality'],
  //cover: '/images/blog/why-switches.jpg',
},
{
  slug: 'smart-lighting-nigeria',
  title: 'Transforming Nigerian Homes and Businesses with Smart Lighting',
  excerpt:
    'Discover how Trucast’s smart lighting solutions save energy, enhance comfort, and modernize spaces.',
  content: `
**Smart lighting** is changing how Nigerians live and work — delivering lower energy bills, better comfort, and modern style.

---

### Why Smart Lighting?
- **Energy Savings:** LEDs and sensors reduce waste and cut monthly costs.  
- **Convenience:** Control lights via app, remote, or voice assistants.  
- **Security:** Schedule scenes and simulate occupancy when away.  
- **Ambience:** Dimmable and tunable-white options set the perfect mood.

---

### Trucast Solutions
- **LED Bulbs & Panels:** High lumen-per-watt, long lifespan.  
- **Recessed Downlights:** Clean ceilings, smooth dimming.  
- **Motion Sensors & Smart Switches:** Automation without rewiring your whole home.  
- **Smart Plugs:** Make legacy lamps and devices “smart” instantly.

---

### Where It Fits Best
Homes, offices, hotels, retail, schools — anywhere lighting impacts comfort and productivity.

---

### Getting Started
1. Begin with high-usage areas (living room, lobby, corridors).  
2. Add sensors and smart switches for automation.  
3. Use scenes (e.g., *Work*, *Relax*, *Night*) for one-tap control.

---

### The Trucast Advantage
Quality components, local support, and fair pricing — all backed by our nationwide distribution.
`,
  body:
    `Trucast smart lighting delivers energy efficiency, convenience, and modern style for homes and businesses in Nigeria. From LED panels and recessed downlights to motion sensors and smart switches, our solutions make spaces smarter and more comfortable.`,
  date: '2025-07-01',
  author: 'Trucast Team',
  tags: ['product', 'smart-lighting'],
  //cover: '/images/blog/smart-lighting.jpg',
},

// ...next posts below

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

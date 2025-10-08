// /lib/categories.ts
export type Category = {
  slug: string;
  title: string;
  image: string;        // path under /public
  subtitle?: string;
};

export const TOP_CATEGORIES: Category[] = [
  { slug: 'switches',     title: 'Switches',           image: '/images/categories/switches.png' },
  { slug: 'sockets',      title: 'Sockets',            image: '/images/categories/sockets.png' },
  { slug: 'smart-locks',  title: 'Smart Locks',        image: '/images/categories/smart-locks.png' },
  { slug: 'recessed-light', title: 'POP / Panel Lights', image: '/images/categories/panel-light.png' },
];

// Optional: full catalog list can live here too later

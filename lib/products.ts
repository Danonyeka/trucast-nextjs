// lib/products.ts

export type StockStatus = 'in_stock' | 'out_of_stock' | 'preorder' | 'discontinued';

export type Product = {
  sku: string;
  name: string;
  desc: string;
  priceNGN: number;
  img: string;

  /** Descriptive alt text for the product image (falls back to name when absent) */
  alt?: string;

  category: string;
  slug?: string;

  // Optional explicit stock info
  stock?: {
    status: StockStatus;
    qty?: number;
    eta?: string;
  };


  /** Bullet features rendered as list on UI */
  features?: string[];
};

export const categoryMap: Record<string, string> = {
  "alu-profile": "Alu Profile",
  "bulbs": "LED Bulbs",
  "motion-sensors": "Motion Sensors",
  "recessed-light": "Recessed Light",
  "smart-breaker": "Smart Breaker",
  "smart-lock": "Smart Lock",
  "smart-plugs": "Smart Plugs",
  "sockets": "Sockets",
  "strip": "Strip",
  "strip-connector": "Strip Connector",
  "strip-controller": "Strip Controller",
  "switches": "Switches & Sockets",
};

export const categories = Object.entries(categoryMap).map(([slug, title]) => ({ slug, title }));

export const catalog: Product[] = [
  { sku: "TRC-SW-S06-1G1W", name: "S06 Switch | 1G; 1W; Silver", desc: `S06 Switch | 1G; 1W; Silver — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s06 switch 1g 1w silver.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 1534, img: "/images/products/TRC-SW-S06-1G1W.png", category: "switches", slug: "s06-switch-1g-1w-silver" },
  ,
  { sku: "TRC-SW-S06-2G1W", name: "S06 Switch | 2G; 1W; Silver", desc: `S06 Switch | 2G; 1W; Silver — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s06 switch 2g 1w silver.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 2000, img: "/images/products/TRC-SW-S06-2G1W.png", category: "switches", slug: "s06-switch-2g-1w-silver" },
  ,
  { sku: "TRC-SW-S06-3G1W", name: "S06 Switch | 3G; 1W; Silver", desc: `S06 Switch | 3G; 1W; Silver — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s06 switch 3g 1w silver.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 2496, img: "/images/products/TRC-SW-S06-3G1W.png", category: "switches", slug: "s06-switch-3g-1w-silver" },
  ,
  { sku: "TRC-SW-S06-4G1W", name: "S06 Switch | 4G; 1W; Silver", desc: `S06 Switch | 4G; 1W; Silver — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s06 switch 4g 1w silver.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 2960, img: "/images/products/TRC-SW-S06-4G1W.png", category: "switches", slug: "s06-switch-4g-1w-silver" },
  ,
  { sku: "TRC-SW-S06-1G2W", name: "S06 Switch | 1G; 2W; Silver", desc: `S06 Switch | 1G; 2W; Silver — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s06 switch 1g 2w silver.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 1566, img: "/images/products/TRC-SW-S06-1G2W.png", category: "switches", slug: "s06-switch-1g-2w-silver" },
  ,
  { sku: "TRC-SW-S06-2G2W", name: "S06 Switch | 2G; 2W; Silver", desc: `S06 Switch | 2G; 2W; Silver — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s06 switch 2g 2w silver.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 2062, img: "/images/products/TRC-SW-S06-2G2W.png", category: "switches", slug: "s06-switch-2g-2w-silver" },
  ,
  { sku: "TRC-SW-S06-3G2W", name: "S06 Switch | 3G; 2W; Silver", desc: `S06 Switch | 3G; 2W; Silver — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s06 switch 3g 2w silver.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 2558, img: "/images/products/TRC-SW-S06-3G2W.png", category: "switches", slug: "s06-switch-3g-2w-silver" },
  ,
  { sku: "TRC-SW-S06-4G2W", name: "S06 Switch | 4G; 2W; Silver", desc: `S06 Switch | 4G; 2W; Silver — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s06 switch 4g 2w silver.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 2992, img: "/images/products/TRC-SW-S06-4G2W.png", category: "switches", slug: "s06-switch-4g-2w-silver" },
  ,
  { sku: "TRC-SW-S06-1G-MW", name: "S06 Switch | 1G; Multi-way; Silver", desc: `S06 Switch | 1G; Multi-way; Silver — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s06 switch 1g multi way silver.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 2062, img: "/images/products/TRC-SW-S06-1G-MW.png", category: "switches", slug: "s06-switch-1g-multi-way-silver" },
  ,
  { sku: "TRC-SW-S06-2G-MW", name: "S06 Switch | 2G; Multi-way; Silver", desc: `S06 Switch | 2G; Multi-way; Silver — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s06 switch 2g multi way silver.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 0, img: "/images/products/TRC-SW-S06-2G-MW.png", category: "switches", slug: "s06-switch-2g-multi-way-silver" },
  ,
  { sku: "TRC-DPS-S06-20A-NE", name: "S06 Switch | 20A + Neon; Silver", desc: `S06 Switch | 20A + Neon; Silver — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s06 switch 20a neon silver.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 2418, img: "/images/products/TRC-DPS-S06-20A-NE.png", category: "switches", slug: "s06-switch-20a-neon-silver" },
  ,
  { sku: "TRC-CKR-S06-45A-DP-NE", name: "S06 Switch | 45A + Neon; Silver", desc: `S06 Switch | 45A + Neon; Silver — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s06 switch 45a neon silver.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 4262, img: "/images/products/TRC-CKR-S06-45A-DP-NE.png", category: "switches", slug: "s06-switch-45a-neon-silver" },
  ,
  { sku: "TRC-TV-S06", name: "S06 Socket | TV socket; Silver", desc: `S06 Socket | TV socket; Silver combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s06 socket tv socket silver.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 1426, img: "/images/products/TRC-TV-S06.png", category: "sockets", slug: "s06-socket-tv-socket-silver" },
  ,
  { sku: "TRC-DBL-S06", name: "S06 Switch | Doorbell Switch; Silver", desc: `S06 Switch | Doorbell Switch; Silver — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s06 switch doorbell switch silver.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 1566, img: "/images/products/TRC-DBL-S06.png", category: "switches", slug: "s06-switch-doorbell-switch-silver" },
  ,
  { sku: "TRC-SK-S06-1G-NE", name: "S06 Socket | 13A Single + Neon; Silver", desc: `S06 Socket | 13A Single + Neon; Silver combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s06 socket 13a single neon silver.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 2154, img: "/images/products/TRC-SK-S06-1G-NE.png", category: "sockets", slug: "s06-socket-13a-single-neon-silver" },
  ,
  { sku: "TRC-SK-S06-15A-NE", name: "S06 Socket | 15A + Neon; Silver", desc: `S06 Socket | 15A + Neon; Silver combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s06 socket 15a neon silver.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 2201, img: "/images/products/TRC-SK-S06-15A-NE.png", category: "sockets", slug: "s06-socket-15a-neon-silver" },
  ,
  { sku: "TRC-SK-S06-1G-MF-NE", name: "S06 Socket | 13A Single; MF + Neon; Silver", desc: `S06 Socket | 13A Single; MF + Neon; Silver combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s06 socket 13a single mf neon silver.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 2201, img: "/images/products/TRC-SK-S06-1G-MF-NE.png", category: "sockets", slug: "s06-socket-13a-single-mf-neon-silver" },
  ,
  { sku: "TRC-SK-S06-1G-MF-2USBA-NE", name: "S06 Socket | 13A Single; MF + 2USB + Neon; Silver", desc: `S06 Socket | 13A Single; MF + 2USB + Neon; Silver combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s06 socket 13a single mf 2usb neon silver.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 8076, img: "/images/products/TRC-SK-S06-1G-MF-2USBA-NE.png", category: "sockets", slug: "s06-socket-13a-single-mf-2usb-neon-silver" },
  ,
  { sku: "TRC-SK-S06-2G-NE", name: "S06 Socket | 13A Double + Neon; Silver", desc: `S06 Socket | 13A Double + Neon; Silver combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s06 socket 13a double neon silver.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 4294, img: "/images/products/TRC-SK-S06-2G-NE.png", category: "sockets", slug: "s06-socket-13a-double-neon-silver" },
  ,
  { sku: "TRC-SK-S06-2G-MF-NE", name: "S06 Socket | 13A Double; MF + Neon; Silver", desc: `S06 Socket | 13A Double; MF + Neon; Silver combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s06 socket 13a double mf neon silver.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 4448, img: "/images/products/TRC-SK-S06-2G-MF-NE.png", category: "sockets", slug: "s06-socket-13a-double-mf-neon-silver" },
  ,
  { sku: "TRC-SK-S06-2G-2USBA-NE", name: "S06 Socket |13A Double + 2USB + Neon; Silver", desc: `S06 Socket |13A Double + 2USB + Neon; Silver combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s06 socket 13a double 2usb neon silver.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 0, img: "/images/products/TRC-SK-S06-2G-2USBA-NE.png", category: "sockets", slug: "s06-socket-13a-double-2usb-neon-silver" },
  ,
  { sku: "TRC-SK-S06-2G-MF-2USBA-NE", name: "S06 Socket | 13A Double; MF + 2USB + Neon; Silver", desc: `S06 Socket | 13A Double; MF + 2USB + Neon; Silver combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s06 socket 13a double mf 2usb neon silver.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 10772, img: "/images/products/TRC-SK-S06-2G-MF-2USBA-NE.png", category: "sockets", slug: "s06-socket-13a-double-mf-2usb-neon-silver" },
  ,
  { sku: "TRC-SK-S06-2G-MF-USBA+TYPEC-NE", name: "S06 Socket | 13A Double; MF + 1USB + 1 Type C + Neon; Silver", desc: `S06 Socket | 13A Double; MF + 1USB + 1 Type C + Neon; Silver combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s06 socket 13a double mf 1usb 1 type c neon silver.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 0, img: "/images/products/TRC-SK-S06-2G-MF-USBA+TYPEC-NE.png", category: "sockets", slug: "s06-socket-13a-double-mf-1usb-1-type-c-neon-silver" },
  ,
  { sku: "TRC-SW-S73-1G1W", name: "S73 Switch | 1G; 1W; Grey", desc: `S73 Switch | 1G; 1W; Grey — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s73 switch 1g 1w grey.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 1488, img: "/images/products/TRC-SW-S73-1G1W.png", category: "switches", slug: "s73-switch-1g-1w-grey" },
  ,
  { sku: "TRC-SW-S73-2G1W", name: "S73 Switch | 2G; 1W; Grey", desc: `S73 Switch | 2G; 1W; Grey — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s73 switch 2g 1w grey.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 1891, img: "/images/products/TRC-SW-S73-2G1W.png", category: "switches", slug: "s73-switch-2g-1w-grey" },
  ,
  { sku: "TRC-SW-S73-3G1W", name: "S73 Switch | 3G; 1W; Grey", desc: `S73 Switch | 3G; 1W; Grey — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s73 switch 3g 1w grey.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 2294, img: "/images/products/TRC-SW-S73-3G1W.png", category: "switches", slug: "s73-switch-3g-1w-grey" },
  ,
  { sku: "TRC-SW-S73-4G1W", name: "S73 Wwitch | 4G; 1W; Grey", desc: `S73 Wwitch | 4G; 1W; Grey — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s73 wwitch 4g 1w grey.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 0, img: "/images/products/TRC-SW-S73-4G1W.png", category: "switches", slug: "s73-wwitch-4g-1w-grey" },
  ,
  { sku: "TRC-SW-S73-1G2W", name: "S73 Switch | 1G; 2W; Grey", desc: `S73 Switch | 1G; 2W; Grey — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s73 switch 1g 2w grey.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 1534, img: "/images/products/TRC-SW-S73-1G2W.png", category: "switches", slug: "s73-switch-1g-2w-grey" },
  ,
  { sku: "TRC-SW-S73-2G2W", name: "S73 Switch | 2G; 2W; Grey", desc: `S73 Switch | 2G; 2W; Grey — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s73 switch 2g 2w grey.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 2092, img: "/images/products/TRC-SW-S73-2G2W.png", category: "switches", slug: "s73-switch-2g-2w-grey" },
  ,
  { sku: "TRC-SW-S73-3G2W", name: "S73 Switch | 3G; 2W; Grey", desc: `S73 Switch | 3G; 2W; Grey — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s73 switch 3g 2w grey.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 2588, img: "/images/products/TRC-SW-S73-3G2W.png", category: "switches", slug: "s73-switch-3g-2w-grey" },
  ,
  { sku: "TRC-SW-S73-4G2W", name: "S73 Switch | 4G; 2W; Grey", desc: `S73 Switch | 4G; 2W; Grey — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s73 switch 4g 2w grey.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 0, img: "/images/products/TRC-SW-S73-4G2W.png", category: "switches", slug: "s73-switch-4g-2w-grey" },
  ,
  { sku: "TRC-SW-S73-1G-MW", name: "S73 Switch | 1G Multi-way; Grey", desc: `S73 Switch | 1G Multi-way; Grey — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s73 switch 1g multi way grey.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 2092, img: "/images/products/TRC-SW-S73-1G-MW.png", category: "switches", slug: "s73-switch-1g-multi-way-grey" },
  ,
  { sku: "TRC-SW-S73-2G-MW", name: "S73 Switch | 2G; Multi-way; Grey", desc: `S73 Switch | 2G; Multi-way; Grey — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s73 switch 2g multi way grey.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 0, img: "/images/products/TRC-SW-S73-2G-MW.png", category: "switches", slug: "s73-switch-2g-multi-way-grey" },
  ,
  { sku: "TRC-DPS-S73-20A-NE", name: "S73 Switch | 20A switch + Neon; Grey", desc: `S73 Switch | 20A switch + Neon; Grey — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s73 switch 20a switch neon grey.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 2868, img: "/images/products/TRC-DPS-S73-20A-NE.png", category: "switches", slug: "s73-switch-20a-switch-neon-grey" },
  ,
  { sku: "TRC-CKR-S73-45A-DP-NE", name: "S73 Switch | 45A switch + Neon Grey", desc: `S73 Switch | 45A switch + Neon Grey — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s73 switch 45a switch neon grey.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 0, img: "/images/products/TRC-CKR-S73-45A-DP-NE.png", category: "switches", slug: "s73-switch-45a-switch-neon-grey" },
  ,
  { sku: "TRC-TV-S73", name: "S73 Socket | TV socket; Grey", desc: `S73 Socket | TV socket; Grey combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s73 socket tv socket grey.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 0, img: "/images/products/TRC-TV-S73.png", category: "sockets", slug: "s73-socket-tv-socket-grey" },
  ,
  { sku: "TRC-DBL-S73", name: "S73 Switch | Doorbell Switch; Grey", desc: `S73 Switch | Doorbell Switch; Grey — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s73 switch doorbell switch grey.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 0, img: "/images/products/TRC-DBL-S73.png", category: "switches", slug: "s73-switch-doorbell-switch-grey" },
  ,
  { sku: "TRC-SK-S73-1G-NE", name: "S73 Socket | 13A Single socket + Neon; Grey", desc: `S73 Socket | 13A Single socket + Neon; Grey combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s73 socket 13a single socket neon grey.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 2154, img: "/images/products/TRC-SK-S73-1G-NE.png", category: "sockets", slug: "s73-socket-13a-single-socket-neon-grey" },
  ,
  { sku: "TRC-SK-S73-15A-NE", name: "S73 Socket | 15A 3 pole + Neon; Grey", desc: `S73 Socket | 15A 3 pole + Neon; Grey combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s73 socket 15a 3 pole neon grey.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 2232, img: "/images/products/TRC-SK-S73-15A-NE.png", category: "sockets", slug: "s73-socket-15a-3-pole-neon-grey" },
  ,
  { sku: "TRC-SK-S73-1G-MF-NE", name: "S73 Socket | 13A Single; MF + Neon; Grey", desc: `S73 Socket | 13A Single; MF + Neon; Grey combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s73 socket 13a single mf neon grey.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 2154, img: "/images/products/TRC-SK-S73-1G-MF-NE.png", category: "sockets", slug: "s73-socket-13a-single-mf-neon-grey" },
  ,
  { sku: "TRC-SK-S73-1G-MF-2USBA-NE", name: "S73 Socket | 13A; MF + 2USB + Neon; Grey", desc: `S73 Socket | 13A; MF + 2USB + Neon; Grey combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s73 socket 13a mf 2usb neon grey.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 0, img: "/images/products/TRC-SK-S73-1G-MF-2USBA-NE.png", category: "sockets", slug: "s73-socket-13a-mf-2usb-neon-grey" },
  ,
  { sku: "TRC-SK-S73-2G-NE", name: "S73 Socket | 13A Double + Neon; Grey", desc: `S73 Socket | 13A Double + Neon; Grey combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s73 socket 13a double neon grey.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 4154, img: "/images/products/TRC-SK-S73-2G-NE.png", category: "sockets", slug: "s73-socket-13a-double-neon-grey" },
  ,
  { sku: "TRC-SK-S73-2G-MF-NE", name: "S73 Socket | 13A Double; MF + Neon; Grey", desc: `S73 Socket | 13A Double; MF + Neon; Grey combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s73 socket 13a double mf neon grey.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 4480, img: "/images/products/TRC-SK-S73-2G-MF-NE.png", category: "sockets", slug: "s73-socket-13a-double-mf-neon-grey" },
  ,
  { sku: "TRC-SK-S73-2G-2USBA-NE", name: "S73 Socket | 13A Double + 2USB + Neon; Grey", desc: `S73 Socket | 13A Double + 2USB + Neon; Grey combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s73 socket 13a double 2usb neon grey.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 0, img: "/images/products/TRC-SK-S73-2G-2USBA-NE.png", category: "sockets", slug: "s73-socket-13a-double-2usb-neon-grey" },
  ,
  { sku: "TRC-SK-S73-2G-MF-2USBA-NE", name: "S73 Socket | 13A Double; MF + 2USB +Neon; Grey", desc: `S73 Socket | 13A Double; MF + 2USB +Neon; Grey combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s73 socket 13a double mf 2usb neon grey.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 8773, img: "/images/products/TRC-SK-S73-2G-MF-2USBA-NE.png", category: "sockets", slug: "s73-socket-13a-double-mf-2usb-neon-grey" },
  ,
  { sku: "TRC-SK-S73-2G-MF-USBA+TYPEC-NE", name: "S73 Socket | 13A Double; MF + 1USB + 1 Type C + Neon; Grey", desc: `S73 Socket | 13A Double; MF + 1USB + 1 Type C + Neon; Grey combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s73 socket 13a double mf 1usb 1 type c neon grey.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 11578, img: "/images/products/TRC-SK-S73-2G-MF-USBA+TYPEC-NE.png", category: "sockets", slug: "s73-socket-13a-double-mf-1usb-1-type-c-neon-grey" },
  ,
  { sku: "TRC-COMB-S73-13A+45A-KITCHEN", name: "S73 Wall socket | 13A socket with 45A Kitchen switch", desc: `S73 Wall socket | 13A socket with 45A Kitchen switch combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s73 wall socket 13a socket with 45a kitchen switch.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 0, img: "/images/products/TRC-COMB-S73-13A+45A-KITCHEN.png", category: "sockets", slug: "s73-wall-socket-13a-socket-with-45a-kitchen-switch" },
  ,
  { sku: "TRC-SW-S01-1G1W", name: "S01 Switch | 1G; 1W; White", desc: `S01 Switch | 1G; 1W; White — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s01 switch 1g 1w white.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 2201, img: "/images/products/TRC-SW-S01-1G1W.png", category: "switches", slug: "s01-switch-1g-1w-white" },
  ,
  { sku: "TRC-SW-S01-2G1W", name: "S01 Switch | 2G; 1W; White", desc: `S01 Switch | 2G; 1W; White — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s01 switch 2g 1w white.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 3022, img: "/images/products/TRC-SW-S01-2G1W.png", category: "switches", slug: "s01-switch-2g-1w-white" },
  ,
  { sku: "TRC-SW-S01-3G1W", name: "S01 Switch | 3G; 1W; White", desc: `S01 Switch | 3G; 1W; White — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s01 switch 3g 1w white.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 3860, img: "/images/products/TRC-SW-S01-3G1W.png", category: "switches", slug: "s01-switch-3g-1w-white" },
  ,
  { sku: "TRC-SW-S01-4G1W", name: "S01 Wwitch | 4G; 1W; White", desc: `S01 Wwitch | 4G; 1W; White — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s01 wwitch 4g 1w white.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 4681, img: "/images/products/TRC-SW-S01-4G1W.png", category: "switches", slug: "s01-wwitch-4g-1w-white" },
  ,
  { sku: "TRC-SW-S01-1G2W", name: "S01 Switch | 1G; 2W; White", desc: `S01 Switch | 1G; 2W; White — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s01 switch 1g 2w white.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 2232, img: "/images/products/TRC-SW-S01-1G2W.png", category: "switches", slug: "s01-switch-1g-2w-white" },
  ,
  { sku: "TRC-SW-S01-2G2W", name: "S01 Switch | 2G; 2W; White", desc: `S01 Switch | 2G; 2W; White — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s01 switch 2g 2w white.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 3084, img: "/images/products/TRC-SW-S01-2G2W.png", category: "switches", slug: "s01-switch-2g-2w-white" },
  ,
  { sku: "TRC-SW-S01-3G2W", name: "S01 Switch | 3G; 2W; White", desc: `S01 Switch | 3G; 2W; White — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s01 switch 3g 2w white.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 3890, img: "/images/products/TRC-SW-S01-3G2W.png", category: "switches", slug: "s01-switch-3g-2w-white" },
  ,
  { sku: "TRC-SW-S01-4G2W", name: "S01 Switch | 4G; 2W; White", desc: `S01 Switch | 4G; 2W; White — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s01 switch 4g 2w white.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 4728, img: "/images/products/TRC-SW-S01-4G2W.png", category: "switches", slug: "s01-switch-4g-2w-white" },
  ,
  { sku: "TRC-SW-S01-1G-MW", name: "S01 Switch | 1G Multi-way; White", desc: `S01 Switch | 1G Multi-way; White — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s01 switch 1g multi way white.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 0, img: "/images/products/TRC-SW-S01-1G-MW.png", category: "switches", slug: "s01-switch-1g-multi-way-white" },
  ,
  { sku: "TRC-SW-S01-2G-MW", name: "S01 Switch | 2G; Multi-way; White", desc: `S01 Switch | 2G; Multi-way; White — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s01 switch 2g multi way white.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 0, img: "/images/products/TRC-SW-S01-2G-MW.png", category: "switches", slug: "s01-switch-2g-multi-way-white" },
  ,
  { sku: "TRC-DPS-S01-20A-NE", name: "S01 Switch | 20A switch + Neon; White", desc: `S01 Switch | 20A switch + Neon; White — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s01 switch 20a switch neon white.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 4324, img: "/images/products/TRC-DPS-S01-20A-NE.png", category: "switches", slug: "s01-switch-20a-switch-neon-white" },
  ,
  { sku: "TRC-CKR-S01-45A-DP-NE", name: "S01 Switch | 45A switch + Neon White", desc: `S01 Switch | 45A switch + Neon White — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s01 switch 45a switch neon white.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 5378, img: "/images/products/TRC-CKR-S01-45A-DP-NE.png", category: "switches", slug: "s01-switch-45a-switch-neon-white" },
  ,
  { sku: "TRC-TV-S01", name: "S01 Socket | TV socket; White", desc: `S01 Socket | TV socket; White combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s01 socket tv socket white.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 1968, img: "/images/products/TRC-TV-S01.png", category: "sockets", slug: "s01-socket-tv-socket-white" },
  ,
  { sku: "TRC-DBL-S01", name: "S01 Switch | Doorbell Switch; White", desc: `S01 Switch | Doorbell Switch; White — a premium wall switch from our S06 Series engineered for everyday reliability and a refined look. The smooth rocker delivers crisp tactile feedback, while the fire-retardant polycarbonate body stands up to heat and impact in demanding Nigerian conditions.

Designed for quick installs and neat finishes, the standard 86×86mm plate integrates cleanly with common wall boxes and matches the entire S06 family for a unified aesthetic across rooms.

Key features:
- Smooth rocker mechanism endurance-tested for long service life
- Fire-retardant, high-strength body with sleek surface finish
- Standard mounting (86×86mm) for fast, fuss-free installation
- Ideal for homes, offices, hotels and renovations
- Coordinates with S06 sockets and accessories

Keywords: electrical fittings Nigeria, wall switch Nigeria, s01 switch doorbell switch white.`,
    features: [ "Smooth rocker mechanism endurance-tested for long service life", "Fire-retardant, high-strength body with sleek surface finish", "Standard mounting (86×86mm) for fast, fuss-free installation", "Ideal for homes, offices, hotels and renovations", "Coordinates with S06 sockets and accessories" ], priceNGN: 2232, img: "/images/products/TRC-DBL-S01.png", category: "switches", slug: "s01-switch-doorbell-switch-white" },
  ,
  { sku: "TRC-SK-S01-1G-NE", name: "S01 Socket | 13A Single socket + Neon; White", desc: `S01 Socket | 13A Single socket + Neon; White combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s01 socket 13a single socket neon white.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 2759, img: "/images/products/TRC-SK-S01-1G-NE.png", category: "sockets", slug: "s01-socket-13a-single-socket-neon-white" },
  ,
  { sku: "TRC-SK-S01-15A-NE", name: "S01 Socket | 15A 3 pole + Neon; White", desc: `S01 Socket | 15A 3 pole + Neon; White combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s01 socket 15a 3 pole neon white.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 2898, img: "/images/products/TRC-SK-S01-15A-NE.png", category: "sockets", slug: "s01-socket-15a-3-pole-neon-white" },
  ,
  { sku: "TRC-SK-S01-1G-MF-NE", name: "S01 Socket | 13A Single; MF + Neon; White", desc: `S01 Socket | 13A Single; MF + Neon; White combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s01 socket 13a single mf neon white.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 2898, img: "/images/products/TRC-SK-S01-1G-MF-NE.png", category: "sockets", slug: "s01-socket-13a-single-mf-neon-white" },
  ,
  { sku: "TRC-SK-S01-1G-MF-2USBA-NE", name: "S01 Socket | 13A; MF + 2USB + Neon; White", desc: `S01 Socket | 13A; MF + 2USB + Neon; White combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s01 socket 13a mf 2usb neon white.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 8649, img: "/images/products/TRC-SK-S01-1G-MF-2USBA-NE.png", category: "sockets", slug: "s01-socket-13a-mf-2usb-neon-white" },
  ,
  { sku: "TRC-SK-S01-2G-NE", name: "S01 Socket | 13A Double + Neon; White", desc: `S01 Socket | 13A Double + Neon; White combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s01 socket 13a double neon white.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 5518, img: "/images/products/TRC-SK-S01-2G-NE.png", category: "sockets", slug: "s01-socket-13a-double-neon-white" },
  ,
  { sku: "TRC-SK-S01-2G-MF-NE", name: "S01 Socket | 13A Double; MF + Neon; White", desc: `S01 Socket | 13A Double; MF + Neon; White combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s01 socket 13a double mf neon white.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 5812, img: "/images/products/TRC-SK-S01-2G-MF-NE.png", category: "sockets", slug: "s01-socket-13a-double-mf-neon-white" },
  ,
  { sku: "TRC-SK-S01-2G-2USBA-NE", name: "S01 Socket | 13A Double + 2USB + Neon; White", desc: `S01 Socket | 13A Double + 2USB + Neon; White combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s01 socket 13a double 2usb neon white.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 0, img: "/images/products/TRC-SK-S01-2G-2USBA-NE.png", category: "sockets", slug: "s01-socket-13a-double-2usb-neon-white" },
  ,
  { sku: "TRC-SK-S01-2G-MF-2USBA-NE", name: "S01 Socket | 13A Double; MF + 2USB +Neon; White", desc: `S01 Socket | 13A Double; MF + 2USB +Neon; White combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s01 socket 13a double mf 2usb neon white.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 11764, img: "/images/products/TRC-SK-S01-2G-MF-2USBA-NE.png", category: "sockets", slug: "s01-socket-13a-double-mf-2usb-neon-white" },
  ,
  { sku: "TRC-SK-S01-2G-MF-USBA+TYPEC-NE", name: "S01 Socket | 13A Double; MF + 1USB + 1 Type C + Neon; White", desc: `S01 Socket | 13A Double; MF + 1USB + 1 Type C + Neon; White combines robust construction with everyday convenience for residential and commercial use. The body is built from high-grade, fire-retardant materials with a smooth, stain-resistant finish that keeps its look over time.

Engineered for safer connections and consistent contact pressure, it integrates seamlessly with standard wall boxes and pairs perfectly with the S06 switch range for a coordinated scheme.

Key features:
- Rugged, fire-retardant body for enhanced safety
- Smooth faceplate resists scratches and discoloration
- Shuttered outlets (where applicable) for added child safety
- Standard mounting for fast installation
- Matches S06 switches for a unified interior

Keywords: electrical fittings Nigeria, 13A wall socket Nigeria, s01 socket 13a double mf 1usb 1 type c neon white.`,
    features: [ "Rugged, fire-retardant body for enhanced safety", "Smooth faceplate resists scratches and discoloration", "Shuttered outlets (where applicable) for added child safety", "Standard mounting for fast installation", "Matches S06 switches for a unified interior" ], priceNGN: 0, img: "/images/products/TRC-SK-S01-2G-MF-USBA+TYPEC-NE.png", category: "sockets", slug: "s01-socket-13a-double-mf-1usb-1-type-c-neon-white" },
  ,
  { sku: "TRC-POP-RES-6W", name: "TRUCAST LumeDisc Recessed Light 6W", desc: `TRUCAST LumeDisc Recessed Light 6W is a slim, recessed POP/ceiling panel designed for smooth, uniform light in modern interiors. The low-profile aluminum frame improves heat dissipation, protecting LEDs for a longer, consistent service life.

Perfect for living rooms, corridors, offices and retail ceilings where a clean, contemporary look is essential.

Key features:
- 6W high-efficiency driver/LED package
- Frosted diffuser for soft, glare-controlled light
- Slim bezel for a minimalist, flush appearance
- Energy-saving versus CFL/downlight alternatives
- Quick cutout and spring-clip installation

Keywords: POP LED panel Nigeria, recessed ceiling light, office lighting, 6W.`,
    features: [ "6W high-efficiency driver/LED package", "Frosted diffuser for soft, glare-controlled light", "Slim bezel for a minimalist, flush appearance", "Energy-saving versus CFL/downlight alternatives", "Quick cutout and spring-clip installation" ], priceNGN: 2496, img: "/images/products/TRC-POP-RES-6W.png", category: "recessed-light", slug: "trucast-lumedisc-recessed-light-6w" },
  ,
  { sku: "TRC-POP-RES-9W", name: "TRUCAST LumeDisc Recessed Light 9W", desc: `TRUCAST LumeDisc Recessed Light 9W is a slim, recessed POP/ceiling panel designed for smooth, uniform light in modern interiors. The low-profile aluminum frame improves heat dissipation, protecting LEDs for a longer, consistent service life.

Perfect for living rooms, corridors, offices and retail ceilings where a clean, contemporary look is essential.

Key features:
- 9W high-efficiency driver/LED package
- Frosted diffuser for soft, glare-controlled light
- Slim bezel for a minimalist, flush appearance
- Energy-saving versus CFL/downlight alternatives
- Quick cutout and spring-clip installation

Keywords: POP LED panel Nigeria, recessed ceiling light, office lighting, 9W.`,
    features: [ "9W high-efficiency driver/LED package", "Frosted diffuser for soft, glare-controlled light", "Slim bezel for a minimalist, flush appearance", "Energy-saving versus CFL/downlight alternatives", "Quick cutout and spring-clip installation" ], priceNGN: 3503, img: "/images/products/TRC-POP-RES-9W.png", category: "recessed-light", slug: "trucast-lumedisc-recessed-light-9w" },
  ,
  { sku: "TRC-POP-RES-12W", name: "TRUCAST LumeDisc Recessed Light 12W", desc: `TRUCAST LumeDisc Recessed Light 12W is a slim, recessed POP/ceiling panel designed for smooth, uniform light in modern interiors. The low-profile aluminum frame improves heat dissipation, protecting LEDs for a longer, consistent service life.

Perfect for living rooms, corridors, offices and retail ceilings where a clean, contemporary look is essential.

Key features:
- 12W high-efficiency driver/LED package
- Frosted diffuser for soft, glare-controlled light
- Slim bezel for a minimalist, flush appearance
- Energy-saving versus CFL/downlight alternatives
- Quick cutout and spring-clip installation

Keywords: POP LED panel Nigeria, recessed ceiling light, office lighting, 12W.`,
    features: [ "12W high-efficiency driver/LED package", "Frosted diffuser for soft, glare-controlled light", "Slim bezel for a minimalist, flush appearance", "Energy-saving versus CFL/downlight alternatives", "Quick cutout and spring-clip installation" ], priceNGN: 3767, img: "/images/products/TRC-POP-RES-12W.png", category: "recessed-light", slug: "trucast-lumedisc-recessed-light-12w" },
  ,
  { sku: "TRC-POP-RES-15W", name: "TRUCAST LumeDisc Recessed Light 15W", desc: `TRUCAST LumeDisc Recessed Light 15W is a slim, recessed POP/ceiling panel designed for smooth, uniform light in modern interiors. The low-profile aluminum frame improves heat dissipation, protecting LEDs for a longer, consistent service life.

Perfect for living rooms, corridors, offices and retail ceilings where a clean, contemporary look is essential.

Key features:
- 15W high-efficiency driver/LED package
- Frosted diffuser for soft, glare-controlled light
- Slim bezel for a minimalist, flush appearance
- Energy-saving versus CFL/downlight alternatives
- Quick cutout and spring-clip installation

Keywords: POP LED panel Nigeria, recessed ceiling light, office lighting, 15W.`,
    features: [ "15W high-efficiency driver/LED package", "Frosted diffuser for soft, glare-controlled light", "Slim bezel for a minimalist, flush appearance", "Energy-saving versus CFL/downlight alternatives", "Quick cutout and spring-clip installation" ], priceNGN: 4820, img: "/images/products/TRC-POP-RES-15W.png", category: "recessed-light", slug: "trucast-lumedisc-recessed-light-15w" },
  ,
  { sku: "TRC-LDB-A55-5W", name: "TRUCAST GlowMax A55-5W LED Bulb", desc: `TRUCAST GlowMax A55-5W LED Bulb delivers bright, energy-efficient illumination with low heat output—ideal for Nigerian homes, shops and offices. Optimized optics provide even light with minimal glare while solid-state design ensures dependable performance through voltage fluctuations.

Replace older lamps and cut energy costs without compromising brightness or comfort. Choose the color temperature that suits your task or mood—K for a crisp, alert ambience.

Key features:
- Energy-saving 5W LED with high lumen efficacy
- Long life rating to reduce maintenance changes
- Stable performance with wide-voltage tolerance
- Low heat, mercury-free and flicker-minimized
- E27/B22 bases available on select models

Keywords: LED bulb Nigeria, energy-saving bulb, 5W LED light, K.`,
    features: [ "Energy-saving 5W LED with high lumen efficacy", "Long life rating to reduce maintenance changes", "Stable performance with wide-voltage tolerance", "Low heat, mercury-free and flicker-minimized", "E27/B22 bases available on select models" ], priceNGN: 1023, img: "/images/products/TRC-LDB-A55-5W.png", category: "bulbs", slug: "trucast-glowmax-a55-5w-led-bulb" },
  ,
  { sku: "TRC-LDB-A60-7W", name: "TRUCAST GlowMax A60-7W LED Bulb", desc: `TRUCAST GlowMax A60-7W LED Bulb delivers bright, energy-efficient illumination with low heat output—ideal for Nigerian homes, shops and offices. Optimized optics provide even light with minimal glare while solid-state design ensures dependable performance through voltage fluctuations.

Replace older lamps and cut energy costs without compromising brightness or comfort. Choose the color temperature that suits your task or mood—K for a crisp, alert ambience.

Key features:
- Energy-saving 7W LED with high lumen efficacy
- Long life rating to reduce maintenance changes
- Stable performance with wide-voltage tolerance
- Low heat, mercury-free and flicker-minimized
- E27/B22 bases available on select models

Keywords: LED bulb Nigeria, energy-saving bulb, 7W LED light, K.`,
    features: [ "Energy-saving 7W LED with high lumen efficacy", "Long life rating to reduce maintenance changes", "Stable performance with wide-voltage tolerance", "Low heat, mercury-free and flicker-minimized", "E27/B22 bases available on select models" ], priceNGN: 1240, img: "/images/products/TRC-LDB-A60-7W.png", category: "bulbs", slug: "trucast-glowmax-a60-7w-led-bulb" },
  ,
  { sku: "TRC-LDB-A60-9W", name: "TRUCAST GlowMax A60-9W LED Bulb", desc: `TRUCAST GlowMax A60-9W LED Bulb delivers bright, energy-efficient illumination with low heat output—ideal for Nigerian homes, shops and offices. Optimized optics provide even light with minimal glare while solid-state design ensures dependable performance through voltage fluctuations.

Replace older lamps and cut energy costs without compromising brightness or comfort. Choose the color temperature that suits your task or mood—K for a crisp, alert ambience.

Key features:
- Energy-saving 9W LED with high lumen efficacy
- Long life rating to reduce maintenance changes
- Stable performance with wide-voltage tolerance
- Low heat, mercury-free and flicker-minimized
- E27/B22 bases available on select models

Keywords: LED bulb Nigeria, energy-saving bulb, 9W LED light, K.`,
    features: [ "Energy-saving 9W LED with high lumen efficacy", "Long life rating to reduce maintenance changes", "Stable performance with wide-voltage tolerance", "Low heat, mercury-free and flicker-minimized", "E27/B22 bases available on select models" ], priceNGN: 1318, img: "/images/products/TRC-LDB-A60-9W.png", category: "bulbs", slug: "trucast-glowmax-a60-9w-led-bulb" },
  ,
  { sku: "TRC-LDB-A60-12W", name: "TRUCAST GlowMax A60-12W LED Bulb", desc: `TRUCAST GlowMax A60-12W LED Bulb delivers bright, energy-efficient illumination with low heat output—ideal for Nigerian homes, shops and offices. Optimized optics provide even light with minimal glare while solid-state design ensures dependable performance through voltage fluctuations.

Replace older lamps and cut energy costs without compromising brightness or comfort. Choose the color temperature that suits your task or mood—K for a crisp, alert ambience.

Key features:
- Energy-saving 12W LED with high lumen efficacy
- Long life rating to reduce maintenance changes
- Stable performance with wide-voltage tolerance
- Low heat, mercury-free and flicker-minimized
- E27/B22 bases available on select models

Keywords: LED bulb Nigeria, energy-saving bulb, 12W LED light, K.`,
    features: [ "Energy-saving 12W LED with high lumen efficacy", "Long life rating to reduce maintenance changes", "Stable performance with wide-voltage tolerance", "Low heat, mercury-free and flicker-minimized", "E27/B22 bases available on select models" ], priceNGN: 1519, img: "/images/products/TRC-LDB-A60-12W.png", category: "bulbs", slug: "trucast-glowmax-a60-12w-led-bulb" },
  ,
  { sku: "TRC-LDB-A60-15W", name: "TRUCAST GlowMax A60-15W LED Bulb", desc: `TRUCAST GlowMax A60-15W LED Bulb delivers bright, energy-efficient illumination with low heat output—ideal for Nigerian homes, shops and offices. Optimized optics provide even light with minimal glare while solid-state design ensures dependable performance through voltage fluctuations.

Replace older lamps and cut energy costs without compromising brightness or comfort. Choose the color temperature that suits your task or mood—K for a crisp, alert ambience.

Key features:
- Energy-saving 15W LED with high lumen efficacy
- Long life rating to reduce maintenance changes
- Stable performance with wide-voltage tolerance
- Low heat, mercury-free and flicker-minimized
- E27/B22 bases available on select models

Keywords: LED bulb Nigeria, energy-saving bulb, 15W LED light, K.`,
    features: [ "Energy-saving 15W LED with high lumen efficacy", "Long life rating to reduce maintenance changes", "Stable performance with wide-voltage tolerance", "Low heat, mercury-free and flicker-minimized", "E27/B22 bases available on select models" ], priceNGN: 1690, img: "/images/products/TRC-LDB-A60-15W.png", category: "bulbs", slug: "trucast-glowmax-a60-15w-led-bulb" },
  ,
  { sku: "TRC-LDB-T80-20W", name: "TRUCAST UltraGlow T80-20W LED Bulb", desc: `TRUCAST UltraGlow T80-20W LED Bulb delivers bright, energy-efficient illumination with low heat output—ideal for Nigerian homes, shops and offices. Optimized optics provide even light with minimal glare while solid-state design ensures dependable performance through voltage fluctuations.

Replace older lamps and cut energy costs without compromising brightness or comfort. Choose the color temperature that suits your task or mood—K for a crisp, alert ambience.

Key features:
- Energy-saving 20W LED with high lumen efficacy
- Long life rating to reduce maintenance changes
- Stable performance with wide-voltage tolerance
- Low heat, mercury-free and flicker-minimized
- E27/B22 bases available on select models

Keywords: LED bulb Nigeria, energy-saving bulb, 20W LED light, K.`,
    features: [ "Energy-saving 20W LED with high lumen efficacy", "Long life rating to reduce maintenance changes", "Stable performance with wide-voltage tolerance", "Low heat, mercury-free and flicker-minimized", "E27/B22 bases available on select models" ], priceNGN: 2883, img: "/images/products/TRC-LDB-T80-20W.png", category: "bulbs", slug: "trucast-ultraglow-t80-20w-led-bulb" },
  ,
  { sku: "TRC-LDB-T100-30W", name: "TRUCAST UltraGlow T100-30W LED Bulb", desc: `TRUCAST UltraGlow T100-30W LED Bulb delivers bright, energy-efficient illumination with low heat output—ideal for Nigerian homes, shops and offices. Optimized optics provide even light with minimal glare while solid-state design ensures dependable performance through voltage fluctuations.

Replace older lamps and cut energy costs without compromising brightness or comfort. Choose the color temperature that suits your task or mood—K for a crisp, alert ambience.

Key features:
- Energy-saving 30W LED with high lumen efficacy
- Long life rating to reduce maintenance changes
- Stable performance with wide-voltage tolerance
- Low heat, mercury-free and flicker-minimized
- E27/B22 bases available on select models

Keywords: LED bulb Nigeria, energy-saving bulb, 30W LED light, K.`,
    features: [ "Energy-saving 30W LED with high lumen efficacy", "Long life rating to reduce maintenance changes", "Stable performance with wide-voltage tolerance", "Low heat, mercury-free and flicker-minimized", "E27/B22 bases available on select models" ], priceNGN: 4418, img: "/images/products/TRC-LDB-T100-30W.png", category: "bulbs", slug: "trucast-ultraglow-t100-30w-led-bulb" },
  ,
  { sku: "TRC-STR-KIT-24V-10M-3000K-WH", name: "Chasing LED Strip: 10m Kit 24V Single, Warm White(3000K)", desc: `Chasing LED Strip: 10m Kit 24V Single, Warm White(3000K) provides flexible, cut-to-length accent or task lighting for cabinets, coves and displays. High-quality LEDs deliver consistent color along the run, while matching channels, drivers and controls make a complete kit.

Great for renovations and new builds seeking atmosphere and efficiency.

Key features:
- Quality LED tape with stable color temperature
- Adhesive backing for quick, tidy installs
- Dimmable/controllable with compatible drivers
- Wide accessory ecosystem: profiles, connectors, controllers
- Options in 12/24V, IP ratings and CCTs

Keywords: LED strip light Nigeria, strip.`,
    features: [ "Quality LED tape with stable color temperature", "Adhesive backing for quick, tidy installs", "Dimmable/controllable with compatible drivers", "Wide accessory ecosystem: profiles, connectors, controllers", "Options in 12/24V, IP ratings and CCTs" ], priceNGN: 38099, img: "/images/products/TRC-STR-KIT-24V-10M-3000K-WH.png", category: "strip", slug: "chasing-led-strip-10m-kit-24v-single-warm-white3000k" },
  ,
  { sku: "TRC-STR-KIT-24V-10M-6000K-WH", name: "Chasing LED Strip: 10m Kit 24V Single, Cold White(6000K)", desc: `Chasing LED Strip: 10m Kit 24V Single, Cold White(6000K) provides flexible, cut-to-length accent or task lighting for cabinets, coves and displays. High-quality LEDs deliver consistent color along the run, while matching channels, drivers and controls make a complete kit.

Great for renovations and new builds seeking atmosphere and efficiency.

Key features:
- Quality LED tape with stable color temperature
- Adhesive backing for quick, tidy installs
- Dimmable/controllable with compatible drivers
- Wide accessory ecosystem: profiles, connectors, controllers
- Options in 12/24V, IP ratings and CCTs

Keywords: LED strip light Nigeria, strip.`,
    features: [ "Quality LED tape with stable color temperature", "Adhesive backing for quick, tidy installs", "Dimmable/controllable with compatible drivers", "Wide accessory ecosystem: profiles, connectors, controllers", "Options in 12/24V, IP ratings and CCTs" ], priceNGN: 38099, img: "/images/products/TRC-STR-KIT-24V-10M-6000K-WH.png", category: "strip", slug: "chasing-led-strip-10m-kit-24v-single-cold-white6000k" },
  ,
  { sku: "TRC-STR-AMP-1TO4", name: "Chasing LED Strip Light amplifier: 1 change 4 signal", desc: `Chasing LED Strip Light amplifier: 1 change 4 signal is designed to expand, connect or control LED strip installations with reliable signal integrity and safe power distribution. Use to amplify longer runs, bridge cable gaps, or add convenient user control depending on the model.

Key features:
- Stable output for extended runs and branching
- Clean connectors and strain relief (model-dependent)
- Compatible with common single/RGB/CCT tapes
- Compact formats for discreet placement

Keywords: LED strip light Nigeria, strip controller.`,
    features: [ "Stable output for extended runs and branching", "Clean connectors and strain relief (model-dependent)", "Compatible with common single/RGB/CCT tapes", "Compact formats for discreet placement" ], priceNGN: 2387, img: "/images/products/TRC-STR-AMP-1TO4.png", category: "strip-controller", slug: "chasing-led-strip-light-amplifier-1-change-4-signal" },
  ,
  { sku: "TRC-STR-220V-FD-5CMCUT-10MROLL-3000K", name: "Strip Light: Free driver - 220V; 5CM/CUT-10M/ROLL-3000K", desc: `Strip Light: Free driver - 220V; 5CM/CUT-10M/ROLL-3000K provides flexible, cut-to-length accent or task lighting for cabinets, coves and displays. High-quality LEDs deliver consistent color along the run, while matching channels, drivers and controls make a complete kit.

Great for renovations and new builds seeking atmosphere and efficiency.

Key features:
- Quality LED tape with stable color temperature
- Adhesive backing for quick, tidy installs
- Dimmable/controllable with compatible drivers
- Wide accessory ecosystem: profiles, connectors, controllers
- Options in 12/24V, IP ratings and CCTs

Keywords: LED strip light Nigeria, strip.`,
    features: [ "Quality LED tape with stable color temperature", "Adhesive backing for quick, tidy installs", "Dimmable/controllable with compatible drivers", "Wide accessory ecosystem: profiles, connectors, controllers", "Options in 12/24V, IP ratings and CCTs" ], priceNGN: 18770, img: "/images/products/TRC-STR-220V-FD-5CMCUT-10MROLL-3000K.png", category: "strip", slug: "strip-light-free-driver-220v-5cmcut-10mroll-3000k" },
  ,
  { sku: "TRC-STR-220V-FD-5CMCUT-10MROLL-6500K", name: "Strip light: Free driver - 220V; 5CM/CUT-10M/ROLL-6500K", desc: `Strip light: Free driver - 220V; 5CM/CUT-10M/ROLL-6500K provides flexible, cut-to-length accent or task lighting for cabinets, coves and displays. High-quality LEDs deliver consistent color along the run, while matching channels, drivers and controls make a complete kit.

Great for renovations and new builds seeking atmosphere and efficiency.

Key features:
- Quality LED tape with stable color temperature
- Adhesive backing for quick, tidy installs
- Dimmable/controllable with compatible drivers
- Wide accessory ecosystem: profiles, connectors, controllers
- Options in 12/24V, IP ratings and CCTs

Keywords: LED strip light Nigeria, strip.`,
    features: [ "Quality LED tape with stable color temperature", "Adhesive backing for quick, tidy installs", "Dimmable/controllable with compatible drivers", "Wide accessory ecosystem: profiles, connectors, controllers", "Options in 12/24V, IP ratings and CCTs" ], priceNGN: 18770, img: "/images/products/TRC-STR-220V-FD-5CMCUT-10MROLL-6500K.png", category: "strip", slug: "strip-light-free-driver-220v-5cmcut-10mroll-6500k" },
  ,
  { sku: "TRC-STR-220V-FD-10CMCUT-3000K", name: "Strip light: Free driver - 220V; 10CM/CUT-3000K", desc: `Strip light: Free driver - 220V; 10CM/CUT-3000K provides flexible, cut-to-length accent or task lighting for cabinets, coves and displays. High-quality LEDs deliver consistent color along the run, while matching channels, drivers and controls make a complete kit.

Great for renovations and new builds seeking atmosphere and efficiency.

Key features:
- Quality LED tape with stable color temperature
- Adhesive backing for quick, tidy installs
- Dimmable/controllable with compatible drivers
- Wide accessory ecosystem: profiles, connectors, controllers
- Options in 12/24V, IP ratings and CCTs

Keywords: LED strip light Nigeria, strip.`,
    features: [ "Quality LED tape with stable color temperature", "Adhesive backing for quick, tidy installs", "Dimmable/controllable with compatible drivers", "Wide accessory ecosystem: profiles, connectors, controllers", "Options in 12/24V, IP ratings and CCTs" ], priceNGN: 11501, img: "/images/products/TRC-STR-220V-FD-10CMCUT-3000K.png", category: "strip", slug: "strip-light-free-driver-220v-10cmcut-3000k" },
  ,
  { sku: "TRC-STR-220V-FD-8MM-10WPM-10CMCUT-6500K", name: "Strip light: Free driver - 220V-8MM-10W/M-10CM/CUT-6500K", desc: `Strip light: Free driver - 220V-8MM-10W/M-10CM/CUT-6500K provides flexible, cut-to-length accent or task lighting for cabinets, coves and displays. High-quality LEDs deliver consistent color along the run, while matching channels, drivers and controls make a complete kit.

Great for renovations and new builds seeking atmosphere and efficiency.

Key features:
- Quality LED tape with stable color temperature
- Adhesive backing for quick, tidy installs
- Dimmable/controllable with compatible drivers
- Wide accessory ecosystem: profiles, connectors, controllers
- Options in 12/24V, IP ratings and CCTs

Keywords: LED strip light Nigeria, strip.`,
    features: [ "Quality LED tape with stable color temperature", "Adhesive backing for quick, tidy installs", "Dimmable/controllable with compatible drivers", "Wide accessory ecosystem: profiles, connectors, controllers", "Options in 12/24V, IP ratings and CCTs" ], priceNGN: 11501, img: "/images/products/TRC-STR-220V-FD-8MM-10WPM-10CMCUT-6500K.png", category: "strip", slug: "strip-light-free-driver-220v-8mm-10wm-10cmcut-6500k" },
  ,
  { sku: "TRC-STR-10MM-TRICRYSTAL-1MCUT-6500K", name: "Strip light: 10MM-tricrystal FLAT-1M/CUT-6500K", desc: `Strip light: 10MM-tricrystal FLAT-1M/CUT-6500K provides flexible, cut-to-length accent or task lighting for cabinets, coves and displays. High-quality LEDs deliver consistent color along the run, while matching channels, drivers and controls make a complete kit.

Great for renovations and new builds seeking atmosphere and efficiency.

Key features:
- Quality LED tape with stable color temperature
- Adhesive backing for quick, tidy installs
- Dimmable/controllable with compatible drivers
- Wide accessory ecosystem: profiles, connectors, controllers
- Options in 12/24V, IP ratings and CCTs

Keywords: LED strip light Nigeria, strip.`,
    features: [ "Quality LED tape with stable color temperature", "Adhesive backing for quick, tidy installs", "Dimmable/controllable with compatible drivers", "Wide accessory ecosystem: profiles, connectors, controllers", "Options in 12/24V, IP ratings and CCTs" ], priceNGN: 12710, img: "/images/products/TRC-STR-10MM-TRICRYSTAL-1MCUT-6500K.png", category: "strip", slug: "strip-light-10mm-tricrystal-flat-1mcut-6500k" },
  ,
  { sku: "TRC-STR-12MM-TRICLINIC-LENS-0.2W-1MCUT-3000K", name: "Strip light: 12MM-0.2W-triclinic -LENS-1M/CUT-3000K", desc: `Strip light: 12MM-0.2W-triclinic -LENS-1M/CUT-3000K provides flexible, cut-to-length accent or task lighting for cabinets, coves and displays. High-quality LEDs deliver consistent color along the run, while matching channels, drivers and controls make a complete kit.

Great for renovations and new builds seeking atmosphere and efficiency.

Key features:
- Quality LED tape with stable color temperature
- Adhesive backing for quick, tidy installs
- Dimmable/controllable with compatible drivers
- Wide accessory ecosystem: profiles, connectors, controllers
- Options in 12/24V, IP ratings and CCTs

Keywords: LED strip light Nigeria, strip.`,
    features: [ "Quality LED tape with stable color temperature", "Adhesive backing for quick, tidy installs", "Dimmable/controllable with compatible drivers", "Wide accessory ecosystem: profiles, connectors, controllers", "Options in 12/24V, IP ratings and CCTs" ], priceNGN: 13624, img: "/images/products/TRC-STR-12MM-TRICLINIC-LENS-0.2W-1MCUT-3000K.png", category: "strip", slug: "strip-light-12mm-02w-triclinic-lens-1mcut-3000k" },
  ,
  { sku: "TRC-STR-12MM-TRICLINIC-LENS-0.2W-1MCUT-6500K", name: "Strip light: 12MM-0.2W-triclinic -LENS-1M/CUT-6500K", desc: `Strip light: 12MM-0.2W-triclinic -LENS-1M/CUT-6500K provides flexible, cut-to-length accent or task lighting for cabinets, coves and displays. High-quality LEDs deliver consistent color along the run, while matching channels, drivers and controls make a complete kit.

Great for renovations and new builds seeking atmosphere and efficiency.

Key features:
- Quality LED tape with stable color temperature
- Adhesive backing for quick, tidy installs
- Dimmable/controllable with compatible drivers
- Wide accessory ecosystem: profiles, connectors, controllers
- Options in 12/24V, IP ratings and CCTs

Keywords: LED strip light Nigeria, strip.`,
    features: [ "Quality LED tape with stable color temperature", "Adhesive backing for quick, tidy installs", "Dimmable/controllable with compatible drivers", "Wide accessory ecosystem: profiles, connectors, controllers", "Options in 12/24V, IP ratings and CCTs" ], priceNGN: 13624, img: "/images/products/TRC-STR-12MM-TRICLINIC-LENS-0.2W-1MCUT-6500K.png", category: "strip", slug: "strip-light-12mm-02w-triclinic-lens-1mcut-6500k" },
  ,
  { sku: "TRC-STR-12MM-TRICLINIC-0.1W-1MCUT-6500K", name: "Strip light: 12MM-0.1W-triclinic FLAT-1M/CUT-6500K", desc: `Strip light: 12MM-0.1W-triclinic FLAT-1M/CUT-6500K provides flexible, cut-to-length accent or task lighting for cabinets, coves and displays. High-quality LEDs deliver consistent color along the run, while matching channels, drivers and controls make a complete kit.

Great for renovations and new builds seeking atmosphere and efficiency.

Key features:
- Quality LED tape with stable color temperature
- Adhesive backing for quick, tidy installs
- Dimmable/controllable with compatible drivers
- Wide accessory ecosystem: profiles, connectors, controllers
- Options in 12/24V, IP ratings and CCTs

Keywords: LED strip light Nigeria, strip.`,
    features: [ "Quality LED tape with stable color temperature", "Adhesive backing for quick, tidy installs", "Dimmable/controllable with compatible drivers", "Wide accessory ecosystem: profiles, connectors, controllers", "Options in 12/24V, IP ratings and CCTs" ], priceNGN: 10602, img: "/images/products/TRC-STR-12MM-TRICLINIC-0.1W-1MCUT-6500K.png", category: "strip", slug: "strip-light-12mm-01w-triclinic-flat-1mcut-6500k" },
  ,
  { sku: "TRC-STR-10MM-2ROWS-1MCUT-3000K", name: "Strip light: 10 MM - 2 rows-FLAT-1M/CUT-3000K", desc: `Strip light: 10 MM - 2 rows-FLAT-1M/CUT-3000K provides flexible, cut-to-length accent or task lighting for cabinets, coves and displays. High-quality LEDs deliver consistent color along the run, while matching channels, drivers and controls make a complete kit.

Great for renovations and new builds seeking atmosphere and efficiency.

Key features:
- Quality LED tape with stable color temperature
- Adhesive backing for quick, tidy installs
- Dimmable/controllable with compatible drivers
- Wide accessory ecosystem: profiles, connectors, controllers
- Options in 12/24V, IP ratings and CCTs

Keywords: LED strip light Nigeria, strip.`,
    features: [ "Quality LED tape with stable color temperature", "Adhesive backing for quick, tidy installs", "Dimmable/controllable with compatible drivers", "Wide accessory ecosystem: profiles, connectors, controllers", "Options in 12/24V, IP ratings and CCTs" ], priceNGN: 7564, img: "/images/products/TRC-STR-10MM-2ROWS-1MCUT-3000K.png", category: "strip", slug: "strip-light-10-mm-2-rows-flat-1mcut-3000k" },
  ,
  { sku: "TRC-STR-10MM-2ROWS-1MCUT-6500K", name: "Strip light: 10 MM - 2 rows-FLAT-1M/CUT-6500K", desc: `Strip light: 10 MM - 2 rows-FLAT-1M/CUT-6500K provides flexible, cut-to-length accent or task lighting for cabinets, coves and displays. High-quality LEDs deliver consistent color along the run, while matching channels, drivers and controls make a complete kit.

Great for renovations and new builds seeking atmosphere and efficiency.

Key features:
- Quality LED tape with stable color temperature
- Adhesive backing for quick, tidy installs
- Dimmable/controllable with compatible drivers
- Wide accessory ecosystem: profiles, connectors, controllers
- Options in 12/24V, IP ratings and CCTs

Keywords: LED strip light Nigeria, strip.`,
    features: [ "Quality LED tape with stable color temperature", "Adhesive backing for quick, tidy installs", "Dimmable/controllable with compatible drivers", "Wide accessory ecosystem: profiles, connectors, controllers", "Options in 12/24V, IP ratings and CCTs" ], priceNGN: 7564, img: "/images/products/TRC-STR-10MM-2ROWS-1MCUT-6500K.png", category: "strip", slug: "strip-light-10-mm-2-rows-flat-1mcut-6500k" },
  ,
  { sku: "TRC-STR-12MM-TRICLINIC-LENS-0.2W-20CMCUT-6500K", name: "Strip light: Wireless; 12MM triclinic - 0.2W-20CM/CUT-LENS-6500K", desc: `Strip light: Wireless; 12MM triclinic - 0.2W-20CM/CUT-LENS-6500K provides flexible, cut-to-length accent or task lighting for cabinets, coves and displays. High-quality LEDs deliver consistent color along the run, while matching channels, drivers and controls make a complete kit.

Great for renovations and new builds seeking atmosphere and efficiency.

Key features:
- Quality LED tape with stable color temperature
- Adhesive backing for quick, tidy installs
- Dimmable/controllable with compatible drivers
- Wide accessory ecosystem: profiles, connectors, controllers
- Options in 12/24V, IP ratings and CCTs

Keywords: LED strip light Nigeria, strip.`,
    features: [ "Quality LED tape with stable color temperature", "Adhesive backing for quick, tidy installs", "Dimmable/controllable with compatible drivers", "Wide accessory ecosystem: profiles, connectors, controllers", "Options in 12/24V, IP ratings and CCTs" ], priceNGN: 15748, img: "/images/products/TRC-STR-12MM-TRICLINIC-LENS-0.2W-20CMCUT-6500K.png", category: "strip", slug: "strip-light-wireless-12mm-triclinic-02w-20cmcut-lens-6500k" },
  ,
  { sku: "TRC-STR-12MM-TRICLINIC-LENS-0.2W-BLUE-BL", name: "Strip light: Wireless; 12MM triclinic - 0.2W-20CMM/CUT-LENS Blue", desc: `Strip light: Wireless; 12MM triclinic - 0.2W-20CMM/CUT-LENS Blue provides flexible, cut-to-length accent or task lighting for cabinets, coves and displays. High-quality LEDs deliver consistent color along the run, while matching channels, drivers and controls make a complete kit.

Great for renovations and new builds seeking atmosphere and efficiency.

Key features:
- Quality LED tape with stable color temperature
- Adhesive backing for quick, tidy installs
- Dimmable/controllable with compatible drivers
- Wide accessory ecosystem: profiles, connectors, controllers
- Options in 12/24V, IP ratings and CCTs

Keywords: LED strip light Nigeria, strip.`,
    features: [ "Quality LED tape with stable color temperature", "Adhesive backing for quick, tidy installs", "Dimmable/controllable with compatible drivers", "Wide accessory ecosystem: profiles, connectors, controllers", "Options in 12/24V, IP ratings and CCTs" ], priceNGN: 15748, img: "/images/products/TRC-STR-12MM-TRICLINIC-LENS-0.2W-BLUE-BL.png", category: "strip", slug: "strip-light-wireless-12mm-triclinic-02w-20cmmcut-lens-blue" },
  ,
  { sku: "TRC-CTR-STR-WIRE", name: "Strip Light Controller: 220V 8MM connection cable", desc: `Strip Light Controller: 220V 8MM connection cable is designed to expand, connect or control LED strip installations with reliable signal integrity and safe power distribution. Use to amplify longer runs, bridge cable gaps, or add convenient user control depending on the model.

Key features:
- Stable output for extended runs and branching
- Clean connectors and strain relief (model-dependent)
- Compatible with common single/RGB/CCT tapes
- Compact formats for discreet placement

Keywords: LED strip light Nigeria, strip controller.`,
    features: [ "Stable output for extended runs and branching", "Clean connectors and strain relief (model-dependent)", "Compatible with common single/RGB/CCT tapes", "Compact formats for discreet placement" ], priceNGN: 279, img: "/images/products/TRC-CTR-STR-WIRE.png", category: "strip-controller", slug: "strip-light-controller-220v-8mm-connection-cable" },
  ,
  { sku: "TRC-CTR-STR-4A-EU-WIRELESS", name: "Strip Light Controller: 4A EU Plug for wireless", desc: `Strip Light Controller: 4A EU Plug for wireless is designed to expand, connect or control LED strip installations with reliable signal integrity and safe power distribution. Use to amplify longer runs, bridge cable gaps, or add convenient user control depending on the model.

Key features:
- Stable output for extended runs and branching
- Clean connectors and strain relief (model-dependent)
- Compatible with common single/RGB/CCT tapes
- Compact formats for discreet placement

Keywords: LED strip light Nigeria, strip controller.`,
    features: [ "Stable output for extended runs and branching", "Clean connectors and strain relief (model-dependent)", "Compatible with common single/RGB/CCT tapes", "Compact formats for discreet placement" ], priceNGN: 760, img: "/images/products/TRC-CTR-STR-4A-EU-WIRELESS.png", category: "strip-controller", slug: "strip-light-controller-4a-eu-plug-for-wireless" },
  ,
  { sku: "TRC-CTR-STR-4A-EU-WIRE", name: "Strip Light Controller: 4A EU Plug for wire", desc: `Strip Light Controller: 4A EU Plug for wire is designed to expand, connect or control LED strip installations with reliable signal integrity and safe power distribution. Use to amplify longer runs, bridge cable gaps, or add convenient user control depending on the model.

Key features:
- Stable output for extended runs and branching
- Clean connectors and strain relief (model-dependent)
- Compatible with common single/RGB/CCT tapes
- Compact formats for discreet placement

Keywords: LED strip light Nigeria, strip controller.`,
    features: [ "Stable output for extended runs and branching", "Clean connectors and strain relief (model-dependent)", "Compatible with common single/RGB/CCT tapes", "Compact formats for discreet placement" ], priceNGN: 760, img: "/images/products/TRC-CTR-STR-4A-EU-WIRE.png", category: "strip-controller", slug: "strip-light-controller-4a-eu-plug-for-wire" },
  ,
  { sku: "TRC-CTR-STR-8A-EU-WIRELESS", name: "Strip Light Controller: 8A EU PLUG for wireless", desc: `Strip Light Controller: 8A EU PLUG for wireless is designed to expand, connect or control LED strip installations with reliable signal integrity and safe power distribution. Use to amplify longer runs, bridge cable gaps, or add convenient user control depending on the model.

Key features:
- Stable output for extended runs and branching
- Clean connectors and strain relief (model-dependent)
- Compatible with common single/RGB/CCT tapes
- Compact formats for discreet placement

Keywords: LED strip light Nigeria, strip controller.`,
    features: [ "Stable output for extended runs and branching", "Clean connectors and strain relief (model-dependent)", "Compatible with common single/RGB/CCT tapes", "Compact formats for discreet placement" ], priceNGN: 1147, img: "/images/products/TRC-CTR-STR-8A-EU-WIRELESS.png", category: "strip-controller", slug: "strip-light-controller-8a-eu-plug-for-wireless" },
  ,
  { sku: "TRC-CTR-STR-8A-EU-WIRE", name: "Strip Light Controller: 8A EU PLUG for wire", desc: `Strip Light Controller: 8A EU PLUG for wire is designed to expand, connect or control LED strip installations with reliable signal integrity and safe power distribution. Use to amplify longer runs, bridge cable gaps, or add convenient user control depending on the model.

Key features:
- Stable output for extended runs and branching
- Clean connectors and strain relief (model-dependent)
- Compatible with common single/RGB/CCT tapes
- Compact formats for discreet placement

Keywords: LED strip light Nigeria, strip controller.`,
    features: [ "Stable output for extended runs and branching", "Clean connectors and strain relief (model-dependent)", "Compatible with common single/RGB/CCT tapes", "Compact formats for discreet placement" ], priceNGN: 1147, img: "/images/products/TRC-CTR-STR-8A-EU-WIRE.png", category: "strip-controller", slug: "strip-light-controller-8a-eu-plug-for-wire" },
  ,
  { sku: "trc-alp-16x10-3m", name: "Alu Profile: Size: L*16*10mm, 3m/pcs", desc: `Alu Profile: Size: L*16*10mm, 3m/pcs is a professional-grade aluminum channel for LED strip installations, built to manage heat and produce a refined, continuous light line. The anodized body resists corrosion while the optional frosted diffuser softens hotspots for a premium, architectural finish.

Use under cabinets, in wardrobes, display shelves or coves to transform simple strips into a durable, elegant luminaire.

Key features:
- Durable anodized aluminum profile ()
- Approx. 10m length for flexible runs
- Supports standard LED tape widths (check model)
- Optional end-caps, brackets and diffusers
- Cleaner aesthetics and improved LED lifespan

Keywords: aluminum LED profile Nigeria, LED strip channel, 10 length.`,
    features: [ "Durable anodized aluminum profile ()", "Approx. 10m length for flexible runs", "Supports standard LED tape widths (check model)", "Optional end-caps, brackets and diffusers", "Cleaner aesthetics and improved LED lifespan" ], priceNGN: 7967, img: "/images/products/trc-alp-16x10-3m.png", category: "alu-profile", slug: "alu-profile-size-l1610mm-3mpcs" },
  ,
  { sku: "trc-alp-FLG-16x10-3m", name: "Alu Profile: Flanged; Size: L*16*10mm, 3m/pcs", desc: `Alu Profile: Flanged; Size: L*16*10mm, 3m/pcs is a professional-grade aluminum channel for LED strip installations, built to manage heat and produce a refined, continuous light line. The anodized body resists corrosion while the optional frosted diffuser softens hotspots for a premium, architectural finish.

Use under cabinets, in wardrobes, display shelves or coves to transform simple strips into a durable, elegant luminaire.

Key features:
- Durable anodized aluminum profile ()
- Approx. 10m length for flexible runs
- Supports standard LED tape widths (check model)
- Optional end-caps, brackets and diffusers
- Cleaner aesthetics and improved LED lifespan

Keywords: aluminum LED profile Nigeria, LED strip channel, 10 length.`,
    features: [ "Durable anodized aluminum profile ()", "Approx. 10m length for flexible runs", "Supports standard LED tape widths (check model)", "Optional end-caps, brackets and diffusers", "Cleaner aesthetics and improved LED lifespan" ], priceNGN: 8556, img: "/images/products/trc-alp-flg-16x10-3m.png", category: "alu-profile", slug: "alu-profile-flanged-size-l1610mm-3mpcs" },
  ,
  { sku: "trc-alp-15.5x6.7-3m", name: "Alu Profile: Size: L*15.5*6.7mm, 3m/pcs", desc: `Alu Profile: Size: L*15.5*6.7mm, 3m/pcs is a professional-grade aluminum channel for LED strip installations, built to manage heat and produce a refined, continuous light line. The anodized body resists corrosion while the optional frosted diffuser softens hotspots for a premium, architectural finish.

Use under cabinets, in wardrobes, display shelves or coves to transform simple strips into a durable, elegant luminaire.

Key features:
- Durable anodized aluminum profile ()
- Approx. 7m length for flexible runs
- Supports standard LED tape widths (check model)
- Optional end-caps, brackets and diffusers
- Cleaner aesthetics and improved LED lifespan

Keywords: aluminum LED profile Nigeria, LED strip channel, 7 length.`,
    features: [ "Durable anodized aluminum profile ()", "Approx. 7m length for flexible runs", "Supports standard LED tape widths (check model)", "Optional end-caps, brackets and diffusers", "Cleaner aesthetics and improved LED lifespan" ], priceNGN: 6216, img: "/images/products/trc-alp-16x7-3m.png", category: "alu-profile", slug: "alu-profile-size-l15567mm-3mpcs" },
  ,
  { sku: "trc-alp-flg-58x15-3m", name: "Alu Profile: Flanged; Size: L*58*15mm, 3m/pcs", desc: `Alu Profile: Flanged; Size: L*58*15mm, 3m/pcs is a professional-grade aluminum channel for LED strip installations, built to manage heat and produce a refined, continuous light line. The anodized body resists corrosion while the optional frosted diffuser softens hotspots for a premium, architectural finish.

Use under cabinets, in wardrobes, display shelves or coves to transform simple strips into a durable, elegant luminaire.

Key features:
- Durable anodized aluminum profile ()
- Approx. 15m length for flexible runs
- Supports standard LED tape widths (check model)
- Optional end-caps, brackets and diffusers
- Cleaner aesthetics and improved LED lifespan

Keywords: aluminum LED profile Nigeria, LED strip channel, 15 length.`,
    features: [ "Durable anodized aluminum profile ()", "Approx. 15m length for flexible runs", "Supports standard LED tape widths (check model)", "Optional end-caps, brackets and diffusers", "Cleaner aesthetics and improved LED lifespan" ], priceNGN: 15702, img: "/images/products/trc-alp-flg-58x15-3m.png", category: "alu-profile", slug: "alu-profile-flanged-size-l5815mm-3mpcs" },
  ,
  { sku: "TRC-CON-8MM-2PIN-SC-S2S", name: "LED Strip connector: 8mm wide 2PIN single color -strip to strip", desc: `LED Strip connector: 8mm wide 2PIN single color -strip to strip offers quick, solderless connections for LED tape—ideal for fast installs and on-site changes. Choose the pin count and width that match your strip type for reliable electrical contact.

Key features:
- Tool-free clip or plug solutions
- Options for 8mm/10mm widths and 2–5 pin strips
- Join strip-to-strip or strip-to-wire (model-dependent)
- Saves time, reduces rework during fit-out

Keywords: LED strip light Nigeria, strip connector.`,
    features: [ "Tool-free clip or plug solutions", "Options for 8mm/10mm widths and 2–5 pin strips", "Join strip-to-strip or strip-to-wire (model-dependent)", "Saves time, reduces rework during fit-out" ], priceNGN: 512, img: "/images/products/TRC-CON-8MM-2PIN-SC-S2S.png", category: "strip-connector", slug: "led-strip-connector-8mm-wide-2pin-single-color-strip-to-strip" },
  ,
  { sku: "TRC-CON-8MM-3PIN-GEN-S2S", name: "LED Strip connector: 8mm wide 3PIN double color -strip to strip", desc: `LED Strip connector: 8mm wide 3PIN double color -strip to strip offers quick, solderless connections for LED tape—ideal for fast installs and on-site changes. Choose the pin count and width that match your strip type for reliable electrical contact.

Key features:
- Tool-free clip or plug solutions
- Options for 8mm/10mm widths and 2–5 pin strips
- Join strip-to-strip or strip-to-wire (model-dependent)
- Saves time, reduces rework during fit-out

Keywords: LED strip light Nigeria, strip connector.`,
    features: [ "Tool-free clip or plug solutions", "Options for 8mm/10mm widths and 2–5 pin strips", "Join strip-to-strip or strip-to-wire (model-dependent)", "Saves time, reduces rework during fit-out" ], priceNGN: 620, img: "/images/products/TRC-CON-8MM-3PIN-GEN-S2S.png", category: "strip-connector", slug: "led-strip-connector-8mm-wide-3pin-double-color-strip-to-strip" },
  ,
  { sku: "TRC-CON-8MM-4PIN-RGB-S2S", name: "LED Strip connector: 8mm wide 4PIN-RGB -strip to strip", desc: `LED Strip connector: 8mm wide 4PIN-RGB -strip to strip offers quick, solderless connections for LED tape—ideal for fast installs and on-site changes. Choose the pin count and width that match your strip type for reliable electrical contact.

Key features:
- Tool-free clip or plug solutions
- Options for 8mm/10mm widths and 2–5 pin strips
- Join strip-to-strip or strip-to-wire (model-dependent)
- Saves time, reduces rework during fit-out

Keywords: LED strip light Nigeria, strip connector.`,
    features: [ "Tool-free clip or plug solutions", "Options for 8mm/10mm widths and 2–5 pin strips", "Join strip-to-strip or strip-to-wire (model-dependent)", "Saves time, reduces rework during fit-out" ], priceNGN: 698, img: "/images/products/TRC-CON-8MM-4PIN-RGB-S2S.png", category: "strip-connector", slug: "led-strip-connector-8mm-wide-4pin-rgb-strip-to-strip" },
  ,
  { sku: "TRC-CON-10MM-2PIN-SC-S2S", name: "LED Strip connector: 10mm wide 2PIN single color -strip to strip", desc: `LED Strip connector: 10mm wide 2PIN single color -strip to strip offers quick, solderless connections for LED tape—ideal for fast installs and on-site changes. Choose the pin count and width that match your strip type for reliable electrical contact.

Key features:
- Tool-free clip or plug solutions
- Options for 8mm/10mm widths and 2–5 pin strips
- Join strip-to-strip or strip-to-wire (model-dependent)
- Saves time, reduces rework during fit-out

Keywords: LED strip light Nigeria, strip connector.`,
    features: [ "Tool-free clip or plug solutions", "Options for 8mm/10mm widths and 2–5 pin strips", "Join strip-to-strip or strip-to-wire (model-dependent)", "Saves time, reduces rework during fit-out" ], priceNGN: 512, img: "/images/products/TRC-CON-10MM-2PIN-SC-S2S.png", category: "strip-connector", slug: "led-strip-connector-10mm-wide-2pin-single-color-strip-to-strip" },
  ,
  { sku: "TRC-CON-10MM-3PIN-CCT-S2S", name: "LED Strip connector: 10mm wide 3PIN CCT -strip to strip", desc: `LED Strip connector: 10mm wide 3PIN CCT -strip to strip offers quick, solderless connections for LED tape—ideal for fast installs and on-site changes. Choose the pin count and width that match your strip type for reliable electrical contact.

Key features:
- Tool-free clip or plug solutions
- Options for 8mm/10mm widths and 2–5 pin strips
- Join strip-to-strip or strip-to-wire (model-dependent)
- Saves time, reduces rework during fit-out

Keywords: LED strip light Nigeria, strip connector.`,
    features: [ "Tool-free clip or plug solutions", "Options for 8mm/10mm widths and 2–5 pin strips", "Join strip-to-strip or strip-to-wire (model-dependent)", "Saves time, reduces rework during fit-out" ], priceNGN: 620, img: "/images/products/TRC-CON-10MM-3PIN-CCT-S2S.png", category: "strip-connector", slug: "led-strip-connector-10mm-wide-3pin-cct-strip-to-strip" },
  ,
  { sku: "TRC-CON-10MM-4PIN-RGB-S2S", name: "LED Strip connector: 10mm wide 4PIN RGB -strip to strip", desc: `LED Strip connector: 10mm wide 4PIN RGB -strip to strip offers quick, solderless connections for LED tape—ideal for fast installs and on-site changes. Choose the pin count and width that match your strip type for reliable electrical contact.

Key features:
- Tool-free clip or plug solutions
- Options for 8mm/10mm widths and 2–5 pin strips
- Join strip-to-strip or strip-to-wire (model-dependent)
- Saves time, reduces rework during fit-out

Keywords: LED strip light Nigeria, strip connector.`,
    features: [ "Tool-free clip or plug solutions", "Options for 8mm/10mm widths and 2–5 pin strips", "Join strip-to-strip or strip-to-wire (model-dependent)", "Saves time, reduces rework during fit-out" ], priceNGN: 698, img: "/images/products/TRC-CON-10MM-4PIN-RGB-S2S.png", category: "strip-connector", slug: "led-strip-connector-10mm-wide-4pin-rgb-strip-to-strip" },
  ,
  { sku: "TRC-CON-8MM-SC-DHEAD-15CM", name: "LED Strip connector: 8mm wide 2 PIN single color double head, cable length 15cm", desc: `LED Strip connector: 8mm wide 2 PIN single color double head, cable length 15cm offers quick, solderless connections for LED tape—ideal for fast installs and on-site changes. Choose the pin count and width that match your strip type for reliable electrical contact.

Key features:
- Tool-free clip or plug solutions
- Options for 8mm/10mm widths and 2–5 pin strips
- Join strip-to-strip or strip-to-wire (model-dependent)
- Saves time, reduces rework during fit-out

Keywords: LED strip light Nigeria, strip connector.`,
    features: [ "Tool-free clip or plug solutions", "Options for 8mm/10mm widths and 2–5 pin strips", "Join strip-to-strip or strip-to-wire (model-dependent)", "Saves time, reduces rework during fit-out" ], priceNGN: 976, img: "/images/products/TRC-CON-8MM-SC-DHEAD-15CM.png", category: "strip-connector", slug: "led-strip-connector-8mm-wide-2-pin-single-color-double-head-cable-length-15cm" },
  ,
  { sku: "TRC-CON-8MM-CCT-DHEAD-S2S-15CM", name: "LED Strip connector: 8mm wide 3 PIN CCT double head, strip to strip, cable length 15cm", desc: `LED Strip connector: 8mm wide 3 PIN CCT double head, strip to strip, cable length 15cm offers quick, solderless connections for LED tape—ideal for fast installs and on-site changes. Choose the pin count and width that match your strip type for reliable electrical contact.

Key features:
- Tool-free clip or plug solutions
- Options for 8mm/10mm widths and 2–5 pin strips
- Join strip-to-strip or strip-to-wire (model-dependent)
- Saves time, reduces rework during fit-out

Keywords: LED strip light Nigeria, strip connector.`,
    features: [ "Tool-free clip or plug solutions", "Options for 8mm/10mm widths and 2–5 pin strips", "Join strip-to-strip or strip-to-wire (model-dependent)", "Saves time, reduces rework during fit-out" ], priceNGN: 1286, img: "/images/products/TRC-CON-8MM-CCT-DHEAD-S2S-15CM.png", category: "strip-connector", slug: "led-strip-connector-8mm-wide-3-pin-cct-double-head-strip-to-strip-cable-length-15cm" },
  ,
  { sku: "TRC-CON-8MM-RGB-DHEAD-S2S-15CM", name: "LED Strip connector: 8mm wide 4 PIN RGB double head, strip to strip, cable length 15cm", desc: `LED Strip connector: 8mm wide 4 PIN RGB double head, strip to strip, cable length 15cm offers quick, solderless connections for LED tape—ideal for fast installs and on-site changes. Choose the pin count and width that match your strip type for reliable electrical contact.

Key features:
- Tool-free clip or plug solutions
- Options for 8mm/10mm widths and 2–5 pin strips
- Join strip-to-strip or strip-to-wire (model-dependent)
- Saves time, reduces rework during fit-out

Keywords: LED strip light Nigeria, strip connector.`,
    features: [ "Tool-free clip or plug solutions", "Options for 8mm/10mm widths and 2–5 pin strips", "Join strip-to-strip or strip-to-wire (model-dependent)", "Saves time, reduces rework during fit-out" ], priceNGN: 1410, img: "/images/products/TRC-CON-8MM-RGB-DHEAD-S2S-15CM.png", category: "strip-connector", slug: "led-strip-connector-8mm-wide-4-pin-rgb-double-head-strip-to-strip-cable-length-15cm" },
  ,
  { sku: "TRC-CON-10MM-SC-DHEAD-S2S-15CM", name: "LED Strip connector: 10mm wide 2 PIN single color double head, strip to strip, cable length 15cm", desc: `LED Strip connector: 10mm wide 2 PIN single color double head, strip to strip, cable length 15cm offers quick, solderless connections for LED tape—ideal for fast installs and on-site changes. Choose the pin count and width that match your strip type for reliable electrical contact.

Key features:
- Tool-free clip or plug solutions
- Options for 8mm/10mm widths and 2–5 pin strips
- Join strip-to-strip or strip-to-wire (model-dependent)
- Saves time, reduces rework during fit-out

Keywords: LED strip light Nigeria, strip connector.`,
    features: [ "Tool-free clip or plug solutions", "Options for 8mm/10mm widths and 2–5 pin strips", "Join strip-to-strip or strip-to-wire (model-dependent)", "Saves time, reduces rework during fit-out" ], priceNGN: 976, img: "/images/products/TRC-CON-10MM-SC-DHEAD-S2S-15CM.png", category: "strip-connector", slug: "led-strip-connector-10mm-wide-2-pin-single-color-double-head-strip-to-strip-cable-length-15cm" },
  ,
  { sku: "TRC-CON-10MM-CCT-DHEAD-S2S-15CM", name: "LED Strip connector: 10mm wide 3 PIN CCT double head, strip to strip, cable length 15cm", desc: `LED Strip connector: 10mm wide 3 PIN CCT double head, strip to strip, cable length 15cm offers quick, solderless connections for LED tape—ideal for fast installs and on-site changes. Choose the pin count and width that match your strip type for reliable electrical contact.

Key features:
- Tool-free clip or plug solutions
- Options for 8mm/10mm widths and 2–5 pin strips
- Join strip-to-strip or strip-to-wire (model-dependent)
- Saves time, reduces rework during fit-out

Keywords: LED strip light Nigeria, strip connector.`,
    features: [ "Tool-free clip or plug solutions", "Options for 8mm/10mm widths and 2–5 pin strips", "Join strip-to-strip or strip-to-wire (model-dependent)", "Saves time, reduces rework during fit-out" ], priceNGN: 1286, img: "/images/products/TRC-CON-10MM-CCT-DHEAD-S2S-15CM.png", category: "strip-connector", slug: "led-strip-connector-10mm-wide-3-pin-cct-double-head-strip-to-strip-cable-length-15cm" },
  ,
  { sku: "TRC-CON-10MM-RGB-DHEAD-S2S-15CM", name: "LED Strip connector: 10mm wide 4 PIN RGB double head, strip to strip, cable length 15cm", desc: `LED Strip connector: 10mm wide 4 PIN RGB double head, strip to strip, cable length 15cm offers quick, solderless connections for LED tape—ideal for fast installs and on-site changes. Choose the pin count and width that match your strip type for reliable electrical contact.

Key features:
- Tool-free clip or plug solutions
- Options for 8mm/10mm widths and 2–5 pin strips
- Join strip-to-strip or strip-to-wire (model-dependent)
- Saves time, reduces rework during fit-out

Keywords: LED strip light Nigeria, strip connector.`,
    features: [ "Tool-free clip or plug solutions", "Options for 8mm/10mm widths and 2–5 pin strips", "Join strip-to-strip or strip-to-wire (model-dependent)", "Saves time, reduces rework during fit-out" ], priceNGN: 1410, img: "/images/products/TRC-CON-10MM-RGB-DHEAD-S2S-15CM.png", category: "strip-connector", slug: "led-strip-connector-10mm-wide-4-pin-rgb-double-head-strip-to-strip-cable-length-15cm" },
  ,

  { sku: "TRC-SLOCK-BK-PWD-CARD-KEY-TTLOCK-BK", name: "K1 - SmartLock: black; password + card + key +TTLOCK", desc: `K1 - SmartLock: black; password + card + key +TTLOCK brings modern access control to homes, offices and short-let apartments with secure, flexible entry options. Engineered with anti-tamper construction and encrypted electronics, it pairs contemporary styling with robust everyday performance.

Enjoy convenient management for users and logs, with temporary codes for guests and emergency key backup for peace of mind.

Key features:
- PIN/password entry, RFID card access, Mechanical key backup, TTLock app control
- Strong metal chassis and secure mortise (model-dependent)
- Visual/low-battery alerts and emergency power interface
- Suited to wood/metal doors; pro or DIY installation
- Ideal for homes, offices, Airbnb/short-let properties

Keywords: smart lock Nigeria, fingerprint door lock, TTLock, RFID lock.`,
    features: [ "PIN/password entry, RFID card access, Mechanical key backup, TTLock app control", "Strong metal chassis and secure mortise (model-dependent)", "Visual/low-battery alerts and emergency power interface", "Suited to wood/metal doors; pro or DIY installation", "Ideal for homes, offices, Airbnb/short-let properties" ], priceNGN: 41866, img: "/images/products/TRC-SLOCK-BK-PWD-CARD-KEY-TTLOCK-BK.png", category: "smart-lock", slug: "smartlock-black-password-card-key-ttlock" },
  ,
  { sku: "TRC-SLOCK-BK-FP-PWD-CARD-KEY-TTLOCK-BK", name: "K1T(TTLOCK）- SmartLock: black; fingerprint + password + card + key +TTLOCK", desc: `K1T(TTLOCK）- SmartLock: black; fingerprint + password + card + key +TTLOCK brings modern access control to homes, offices and short-let apartments with secure, flexible entry options. Engineered with anti-tamper construction and encrypted electronics, it pairs contemporary styling with robust everyday performance.

Enjoy convenient management for users and logs, with temporary codes for guests and emergency key backup for peace of mind.

Key features:
- Fingerprint unlock, PIN/password entry, RFID card access, Mechanical key backup, TTLock app control
- Strong metal chassis and secure mortise (model-dependent)
- Visual/low-battery alerts and emergency power interface
- Suited to wood/metal doors; pro or DIY installation
- Ideal for homes, offices, Airbnb/short-let properties

Keywords: smart lock Nigeria, fingerprint door lock, TTLock, RFID lock.`,
    features: [ "Fingerprint unlock, PIN/password entry, RFID card access, Mechanical key backup, TTLock app control", "Strong metal chassis and secure mortise (model-dependent)", "Visual/low-battery alerts and emergency power interface", "Suited to wood/metal doors; pro or DIY installation", "Ideal for homes, offices, Airbnb/short-let properties" ], priceNGN: 47647, img: "/images/products/TRC-SLOCK-BK-FP-PWD-CARD-KEY-TTLOCK-BK.png", category: "smart-lock", slug: "smartlock-black-fingerprint-password-card-key-ttlock" },
  ,

  // ✅ FIXED: this is the one you wanted to rename to ...BLK (₦53,413) and point to the new ...BLK.png
  {
    sku: "TRC-SLOCK-BK-FP-PWD-CARD-KEY-TUYAWIFI-BLK",
    name: "K1T（TUYAWIFI) - SmartLock: black; fingerprint + password + card + key +TUYAWIFI",
    desc: `K1T（TUYAWIFI) - SmartLock: black; fingerprint + password + card + key +TUYAWIFI brings modern access control to homes, offices and short-let apartments with secure, flexible entry options. Engineered with anti-tamper construction and encrypted electronics, it pairs contemporary styling with robust everyday performance.

Enjoy convenient management for users and logs, with temporary codes for guests and emergency key backup for peace of mind.

Key features:
- Fingerprint unlock, PIN/password entry, RFID card access, Mechanical key backup
- Strong metal chassis and secure mortise (model-dependent)
- Visual/low-battery alerts and emergency power interface
- Suited to wood/metal doors; pro or DIY installation
- Ideal for homes, offices, Airbnb/short-let properties

Keywords: smart lock Nigeria, fingerprint door lock, TTLock, RFID lock.`,
    features: [ "Fingerprint unlock, PIN/password entry, RFID card access, Mechanical key backup", "Strong metal chassis and secure mortise (model-dependent)", "Visual/low-battery alerts and emergency power interface", "Suited to wood/metal doors; pro or DIY installation", "Ideal for homes, offices, Airbnb/short-let properties" ],
    priceNGN: 53413,
    img: "/images/products/TRC-SLOCK-BK-FP-PWD-CARD-KEY-TUYAWIFI-BLK.png",
    category: "smart-lock",
    slug: "smartlock-black-fingerprint-password-card-key-tuyawifi-blk",
  },
  ,

  { sku: "TRC-SLOCK-BK-FP-PWD-CARD-KEY-TUYA-BT-BK", name: "K2 - SmartLock: black; fingerprint + password + card + key +TUYA Bluetooth", desc: `K2 - SmartLock: black; fingerprint + password + card + key +TUYA Bluetooth brings modern access control to homes, offices and short-let apartments with secure, flexible entry options. Engineered with anti-tamper construction and encrypted electronics, it pairs contemporary styling with robust everyday performance.

Enjoy convenient management for users and logs, with temporary codes for guests and emergency key backup for peace of mind.

Key features:
- Fingerprint unlock, PIN/password entry, RFID card access, Mechanical key backup
- Strong metal chassis and secure mortise (model-dependent)
- Visual/low-battery alerts and emergency power interface
- Suited to wood/metal doors; pro or DIY installation
- Ideal for homes, offices, Airbnb/short-let properties

Keywords: smart lock Nigeria, fingerprint door lock, TTLock, RFID lock.`,
    features: [ "Fingerprint unlock, PIN/password entry, RFID card access, Mechanical key backup", "Strong metal chassis and secure mortise (model-dependent)", "Visual/low-battery alerts and emergency power interface", "Suited to wood/metal doors; pro or DIY installation", "Ideal for homes, offices, Airbnb/short-let properties" ], priceNGN: 76508, img: "/images/products/TRC-SLOCK-BK-FP-PWD-CARD-KEY-TUYA-BT-BK.png", category: "smart-lock", slug: "smartlock-black-fingerprint-password-card-key-tuya-bluetooth" },
  ,

  // keep BK + BK2, but give unique slugs
  { sku: "TRC-SLOCK-BK-FP-PWD-CARD-KEY-TUYAWIFI-BK", name: "F16 - SmartLock: black; fingerprint + password + card + key +TUYAWIFI", desc: `F16 - SmartLock: black; fingerprint + password + card + key +TUYAWIFI brings modern access control to homes, offices and short-let apartments with secure, flexible entry options. Engineered with anti-tamper construction and encrypted electronics, it pairs contemporary styling with robust everyday performance.

Enjoy convenient management for users and logs, with temporary codes for guests and emergency key backup for peace of mind.

Key features:
- Fingerprint unlock, PIN/password entry, RFID card access, Mechanical key backup
- Strong metal chassis and secure mortise (model-dependent)
- Visual/low-battery alerts and emergency power interface
- Suited to wood/metal doors; pro or DIY installation
- Ideal for homes, offices, Airbnb/short-let properties

Keywords: smart lock Nigeria, fingerprint door lock, TTLock, RFID lock.`,
    features: [ "Fingerprint unlock, PIN/password entry, RFID card access, Mechanical key backup", "Strong metal chassis and secure mortise (model-dependent)", "Visual/low-battery alerts and emergency power interface", "Suited to wood/metal doors; pro or DIY installation", "Ideal for homes, offices, Airbnb/short-let properties" ], priceNGN: 75066, img: "/images/products/TRC-SLOCK-BK-FP-PWD-CARD-KEY-TUYAWIFI-BK.png", category: "smart-lock", slug: "smartlock-black-fingerprint-password-card-key-tuyawifi-bk" },
  ,
  { sku: "TRC-SLOCK-BK-FP-PWD-CARD-KEY-TUYAWIFI-BK2", name: "K16 - SmartLock: black; fingerprint + password + card + key +TUYAWIFI", desc: `K16 - SmartLock: black; fingerprint + password + card + key +TUYAWIFI brings modern access control to homes, offices and short-let apartments with secure, flexible entry options. Engineered with anti-tamper construction and encrypted electronics, it pairs contemporary styling with robust everyday performance.

Enjoy convenient management for users and logs, with temporary codes for guests and emergency key backup for peace of mind.

Key features:
- Fingerprint unlock, PIN/password entry, RFID card access, Mechanical key backup
- Strong metal chassis and secure mortise (model-dependent)
- Visual/low-battery alerts and emergency power interface
- Suited to wood/metal doors; pro or DIY installation
- Ideal for homes, offices, Airbnb/short-let properties

Keywords: smart lock Nigeria, fingerprint door lock, TTLock, RFID lock.`,
    features: [ "Fingerprint unlock, PIN/password entry, RFID card access, Mechanical key backup", "Strong metal chassis and secure mortise (model-dependent)", "Visual/low-battery alerts and emergency power interface", "Suited to wood/metal doors; pro or DIY installation", "Ideal for homes, offices, Airbnb/short-let properties" ], priceNGN: 69300, img: "/images/products/TRC-SLOCK-BK-FP-PWD-CARD-KEY-TUYAWIFI-BK2.png", category: "smart-lock", slug: "smartlock-black-fingerprint-password-card-key-tuyawifi-bk2" },
  ,

  { sku: "TRC-SLOCK-BK-FP-PWD-CARD-KEY-TTLOCK-BK2", name: "T18 - SmartLock: black; fingerprint + password + card + key +TTLOCK", desc: `T18 - SmartLock: black; fingerprint + password + card + key +TTLOCK brings modern access control to homes, offices and short-let apartments with secure, flexible entry options. Engineered with anti-tamper construction and encrypted electronics, it pairs contemporary styling with robust everyday performance.

Enjoy convenient management for users and logs, with temporary codes for guests and emergency key backup for peace of mind.

Key features:
- Fingerprint unlock, PIN/password entry, RFID card access, Mechanical key backup, TTLock app control
- Strong metal chassis and secure mortise (model-dependent)
- Visual/low-battery alerts and emergency power interface
- Suited to wood/metal doors; pro or DIY installation
- Ideal for homes, offices, Airbnb/short-let properties

Keywords: smart lock Nigeria, fingerprint door lock, TTLock, RFID lock.`,
    features: [ "Fingerprint unlock, PIN/password entry, RFID card access, Mechanical key backup, TTLock app control", "Strong metal chassis and secure mortise (model-dependent)", "Visual/low-battery alerts and emergency power interface", "Suited to wood/metal doors; pro or DIY installation", "Ideal for homes, offices, Airbnb/short-let properties" ], priceNGN: 72184, img: "/images/products/TRC-SLOCK-BK-FP-PWD-CARD-KEY-TTLOCK-BK2.png", category: "smart-lock", slug: "smartlock-black-fingerprint-password-card-key-ttlock" },
  ,
  { sku: "TRC-SLOCK-BK-FACE-FP-PWD-CARD-KEY-TUYAWIFI-BK", name: "K3 - SmartLock: black; 3D face +fingerprint + password + card + key +TUYAWIFI", desc: `K3 - SmartLock: black; 3D face +fingerprint + password + card + key +TUYAWIFI brings modern access control to homes, offices and short-let apartments with secure, flexible entry options. Engineered with anti-tamper construction and encrypted electronics, it pairs contemporary styling with robust everyday performance.

Enjoy convenient management for users and logs, with temporary codes for guests and emergency key backup for peace of mind.

Key features:
- Fingerprint unlock, PIN/password entry, RFID card access, Mechanical key backup
- Strong metal chassis and secure mortise (model-dependent)
- Visual/low-battery alerts and emergency power interface
- Suited to wood/metal doors; pro or DIY installation
- Ideal for homes, offices, Airbnb/short-let properties

Keywords: smart lock Nigeria, fingerprint door lock, TTLock, RFID lock.`,
    features: [ "Fingerprint unlock, PIN/password entry, RFID card access, Mechanical key backup", "Strong metal chassis and secure mortise (model-dependent)", "Visual/low-battery alerts and emergency power interface", "Suited to wood/metal doors; pro or DIY installation", "Ideal for homes, offices, Airbnb/short-let properties" ], priceNGN: 171802, img: "/images/products/TRC-SLOCK-BK-FACE-FP-PWD-CARD-KEY-TUYAWIFI-BK.png", category: "smart-lock", slug: "smartlock-black-3d-face-fingerprint-password-card-key-tuyawifi" },
  ,
  { sku: "TRC-SLOCK-BK-FACE-PALM-FP-PWD-CARD-KEY-REMOTE", name: "K6 - SmartLock: palmprint +Face +Fingerprint +Password +card +key +Remote; mobile app", desc: `K6 - SmartLock: palmprint +Face +Fingerprint +Password +card +key +Remote; mobile app brings modern access control to homes, offices and short-let apartments with secure, flexible entry options. Engineered with anti-tamper construction and encrypted electronics, it pairs contemporary styling with robust everyday performance.

Enjoy convenient management for users and logs, with temporary codes for guests and emergency key backup for peace of mind.

Key features:
- Fingerprint unlock, PIN/password entry, RFID card access, Mechanical key backup
- Strong metal chassis and secure mortise (model-dependent)
- Visual/low-battery alerts and emergency power interface
- Suited to wood/metal doors; pro or DIY installation
- Ideal for homes, offices, Airbnb/short-let properties

Keywords: smart lock Nigeria, fingerprint door lock, TTLock, RFID lock.`,
    features: [ "Fingerprint unlock, PIN/password entry, RFID card access, Mechanical key backup", "Strong metal chassis and secure mortise (model-dependent)", "Visual/low-battery alerts and emergency power interface", "Suited to wood/metal doors; pro or DIY installation", "Ideal for homes, offices, Airbnb/short-let properties" ], priceNGN: 163138, img: "/images/products/TRC-SLOCK-BK-FACE-PALM-FP-PWD-CARD-KEY-REMOTE.png", category: "smart-lock", slug: "smartlock-palmprint-face-fingerprint-password-card-key-remote-mobile-app" },
  ,

  { sku: "TRC-SK-SPLUG-10A", name: "Smart Plug: 10A Wall Smart Socket Remote Control Timing Function Mini Wifi", desc: `Smart Plug: 10A Wall Smart Socket Remote Control Timing Function Mini Wifi turns ordinary appliances into smart, scheduleable devices you can control from your phone or voice assistant. Track usage (on supported models), set timers and create scenes to save energy without changing your daily routine.

Installation is simple: plug in, connect to Wi-Fi and manage via the companion app.

Key features:
- Remote on/off, timers and schedules via app
- Works with popular voice assistants (model-dependent)
- Compact body fits adjacent sockets more easily
- Safety protections: over-current/over-heat (model-dependent)
- Ideal for fans, lamps, routers and small appliances

Keywords: smart plug Nigeria, WiFi socket, app controlled plug.`,
    features: [ "Remote on/off, timers and schedules via app", "Works with popular voice assistants (model-dependent)", "Compact body fits adjacent sockets more easily", "Safety protections: over-current/over-heat (model-dependent)", "Ideal for fans, lamps, routers and small appliances" ], priceNGN: 14523, img: "/images/products/TRC-SK-SPLUG-10A.png", category: "smart-plugs", slug: "smart-plug-10a-wall-smart-socket-remote-control-timing-function-mini-wifi" },
  ,
  { sku: "TRC-SW-MS-86", name: "Motion Sensor: Type 86 human body sensor switch 3-wire system", desc: `Motion Sensor: Type 86 human body sensor switch 3-wire system by Trucast — engineered for reliability and value in Nigerian homes and businesses.

Keywords: Trucast Nigeria, quality electrical accessories.`,
    features: [  ], priceNGN: 7766, img: "/images/products/TRC-SW-MS-86.png", category: "motion-sensors", slug: "motion-sensor-type-86-human-body-sensor-switch-3-wire-system" },
  ,
  { sku: "TRC-SW-MS-MWAVE", name: "Motion Sensor: Surface microwave (radar) Motion Sensor switch", desc: `Motion Sensor: Surface microwave (radar) Motion Sensor switch by Trucast — engineered for reliability and value in Nigerian homes and businesses.

Keywords: Trucast Nigeria, quality electrical accessories.`,
    features: [  ], priceNGN: 9502, img: "/images/products/TRC-SW-MS-MWAVE.png", category: "motion-sensors", slug: "motion-sensor-surface-microwave-radar-motion-sensor-switch" },
  ,
  { sku: "TRC-SW-MS-MINDU", name: "Motion Sensor: Miniature induction motion sensor switch", desc: `Motion Sensor: Miniature induction motion sensor switch by Trucast — engineered for reliability and value in Nigerian homes and businesses.

Keywords: Trucast Nigeria, quality electrical accessories.`,
    features: [  ], priceNGN: 6479, img: "/images/products/TRC-SW-MS-MINDU.png", category: "motion-sensors", slug: "motion-sensor-miniature-induction-motion-sensor-switch" },
  ,
  { sku: "TRC-SW-MS-FLUSH3", name: "Motion Sensor: Flush 3 lines Concealed Human Body motion sensor switch", desc: `Motion Sensor: Flush 3 lines Concealed Human Body motion sensor switch by Trucast — engineered for reliability and value in Nigerian homes and businesses.

Keywords: Trucast Nigeria, quality electrical accessories.`,
    features: [  ], priceNGN: 8200, img: "/images/products/TRC-SW-MS-FLUSH3.png", category: "motion-sensors", slug: "motion-sensor-flush-3-lines-concealed-human-body-motion-sensor-switch" },
  ,
  { sku: "TRC-SW-MS-86MWAVE", name: "Motion Sensor: Type 86 microwave (radar) induction switch", desc: `Motion Sensor: Type 86 microwave (radar) induction switch by Trucast — engineered for reliability and value in Nigerian homes and businesses.

Keywords: Trucast Nigeria, quality electrical accessories.`,
    features: [  ], priceNGN: 8649, img: "/images/products/TRC-SW-MS-86MWAVE.png", category: "motion-sensors", slug: "motion-sensor-type-86-microwave-radar-induction-switch" },
  ,
  { sku: "TRC-SW-MS-PRES", name: "Motion Sensor: Ceiling Microwave Radar Presence Sensor Switch (24G)", desc: `Motion Sensor: Ceiling Microwave Radar Presence Sensor Switch (24G) by Trucast — engineered for reliability and value in Nigerian homes and businesses.

Keywords: Trucast Nigeria, quality electrical accessories.`,
    features: [  ], priceNGN: 19654, img: "/images/products/TRC-SW-MS-PRES.png", category: "motion-sensors", slug: "motion-sensor-ceiling-microwave-radar-presence-sensor-switch-24g" },
  ,
  { sku: "TRC-SW-SMS-WIFI", name: "Smart Motion Sensor Switch WiFi Tuya", desc: `Smart Motion Sensor Switch WiFi Tuya by Trucast — engineered for reliability and value in Nigerian homes and businesses.

Keywords: Trucast Nigeria, quality electrical accessories.`,
    features: [  ], priceNGN: 15732, img: "/images/products/TRC-SW-SMS-WIFI.png", category: "motion-sensors", slug: "smart-motion-sensor-switch-wifi-tuya" },
  ,
  { sku: "TRC-SBRK-10A-1P-TUYA", name: "10A DIN 1P Tongou API Tuya Smart Circuit Breaker", desc: `10A DIN 1P Tongou API Tuya Smart Circuit Breaker by Trucast — engineered for reliability and value in Nigerian homes and businesses.

Keywords: Trucast Nigeria, quality electrical accessories.`,
    features: [  ], priceNGN: 18926, img: "/images/products/TRC-SBRK-10A-1P-TUYA.png", category: "smart-breaker", slug: "10a-din-1p-tongou-api-tuya-smart-circuit-breaker" },
  ,
  { sku: "TRC-SBRK-16A-1P-TUYA", name: "16A DIN 1P Tongou API Tuya Smart Circuit Breaker", desc: `16A DIN 1P Tongou API Tuya Smart Circuit Breaker by Trucast — engineered for reliability and value in Nigerian homes and businesses.

Keywords: Trucast Nigeria, quality electrical accessories.`,
    features: [  ], priceNGN: 20196, img: "/images/products/TRC-SBRK-16A-1P-TUYA.png", category: "smart-breaker", slug: "16a-din-1p-tongou-api-tuya-smart-circuit-breaker" },
  ,
  { sku: "TRC-SBRK-20A-1P-TUYA", name: "20A DIN 1P Tongou API Tuya Smart Circuit Breaker", desc: `20A DIN 1P Tongou API Tuya Smart Circuit Breaker by Trucast — engineered for reliability and value in Nigerian homes and businesses.

Keywords: Trucast Nigeria, quality electrical accessories.`,
    features: [  ], priceNGN: 22723, img: "/images/products/TRC-SBRK-20A-1P-TUYA.png", category: "smart-breaker", slug: "20a-din-1p-tongou-api-tuya-smart-circuit-breaker" },
  ,
  { sku: "TRC-SBRK-32A-1P-TUYA", name: "32A DIN 1P Tongou API Tuya Smart Circuit Breaker", desc: `32A DIN 1P Tongou API Tuya Smart Circuit Breaker by Trucast — engineered for reliability and value in Nigerian homes and businesses.

Keywords: Trucast Nigeria, quality electrical accessories.`,
    features: [  ], priceNGN: 22723, img: "/images/products/TRC-SBRK-32A-1P-TUYA.png", category: "smart-breaker", slug: "32a-din-1p-tongou-api-tuya-smart-circuit-breaker" },
  ,
  { sku: "TRC-SBRK-40A-1P-TUYA", name: "40A DIN 1P Tongou API Tuya Smart Circuit Breaker", desc: `40A DIN 1P Tongou API Tuya Smart Circuit Breaker by Trucast — engineered for reliability and value in Nigerian homes and businesses.

Keywords: Trucast Nigeria, quality electrical accessories.`,
    features: [  ], priceNGN: 22723, img: "/images/products/TRC-SBRK-40A-1P-TUYA.png", category: "smart-breaker", slug: "40a-din-1p-tongou-api-tuya-smart-circuit-breaker" },
  ,
  { sku: "TRC-SBRK-63A-2P-WIFI", name: "63A 2P Tongou WiFi smart Circuit Breaker", desc: `63A 2P Tongou WiFi smart Circuit Breaker by Trucast — engineered for reliability and value in Nigerian homes and businesses.

Keywords: Trucast Nigeria, quality electrical accessories.`,
    features: [  ], priceNGN: 90846, img: "/images/products/TRC-SBRK-63A-2P-WIFI.png", category: "smart-breaker", slug: "63a-2p-tongou-wifi-smart-circuit-breaker" }
];

// -------- Helpers --------
const normalizeSlug = (s: string) => (s || '').toString().trim().toLowerCase();

// Important: filter(Boolean) removes stray `undefined`s caused by trailing commas
export const catalog: Product[] = (catalogRaw as Product[])
  .filter(Boolean)
  .map(p => ({ ...p, alt: p.alt ?? p.name }));

export function byCategory(slug: string) {
  const key = normalizeSlug(slug);
  return catalog.filter(p => normalizeSlug(p.category) === key);
}

// SAFE product resolver that never throws at module load
export function findBySlugOrSku(id: string) {
  const needle = normalizeSlug(id);
  return (
    catalog.find(p =>
      normalizeSlug(p.slug || '') === needle ||
      normalizeSlug(p.sku) === needle ||
      normalizeSlug(p.name) === needle
    ) ?? null
  );
}

export function searchProducts(q: string) {
  const s = (q || '').trim();
  if (!s) return catalog;
  const escaped = s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(escaped, 'i');
  return catalog.filter(p => re.test(p.name) || re.test(p.desc) || re.test(p.sku));
}


// ---------- Helpers for stock handling ----------

// If explicit stock status exists, use it. Otherwise, derive from price:
// - priceNGN > 0   => 'in_stock'
// - priceNGN === 0 => 'out_of_stock'
export const deriveStatus = (p: Product): StockStatus =>
  p.stock?.status ?? (p.priceNGN > 0 ? 'in_stock' : 'out_of_stock');

export const isOutOfStock = (p: Product) => deriveStatus(p) !== 'in_stock';

// If item is not in stock, hide price by returning undefined.
export const displayPriceNGN = (p: Product) =>
  deriveStatus(p) === 'in_stock' ? p.priceNGN : undefined;

// Keep your original byCategory (shows everything)
export function byCategory(slug: string) {
  return catalog.filter(p => p.category === slug);
}

// New: only the items that are actually available
export function byCategoryAvailable(slug: string) {
  return catalog.filter(p => p.category === slug && deriveStatus(p) === 'in_stock');
}

// New: handy list for admin/alerts
export const outOfStockSkus = catalog
  .filter(p => deriveStatus(p) !== 'in_stock')
  .map(p => p.sku);

// lib/products.ts (append near the bottom)

// Helper to normalize slugs consistently
export function normalizeSlug(s: string) {
  return (s || '').toString().trim().toLowerCase();
}

// SAFE product resolver that never throws at module load
export function findBySlugOrSku(id: string) {
  const needle = normalizeSlug(id);

  // Important: filter(Boolean) removes stray undefineds caused by trailing commas
  const list = (catalog as any[]).filter(Boolean);

  for (const item of list) {
    // Guard every access
    if (!item) continue;
    const slug = normalizeSlug(item.slug || item.name);
    const sku  = normalizeSlug(item.sku);
    if (slug === needle || sku === needle) return item;
  }
  return null;
}


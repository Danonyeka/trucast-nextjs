'use client';
import { track } from '@/lib/analytics';
import type { Product } from '@/lib/products';
import { site } from '@/lib/site';

export default function ProductEnquiryLink({ product, className = '' }: { product: Product; className?: string }) {
  const message = `Hello Trucast, I would like to enquire about ${product.name} (SKU: ${product.sku}).\nQuantity: \nDelivery town / city: \nPlease confirm price and availability.`;
  return <a className={`btn-primary ${className}`} href={`https://wa.me/${site.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`} onClick={() => track('product_enquiry_click', { sku: product.sku, category: product.category })} target="_blank" rel="noopener noreferrer" aria-label={`Enquire about ${product.name} on WhatsApp`}>Enquire on WhatsApp ↗</a>;
}

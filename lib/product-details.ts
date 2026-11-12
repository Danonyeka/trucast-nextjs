import type { Product } from './products';
import { categoryMap } from './products';

export function productDetails(product: Product) {
  const name = product.name.replace(/Wwitch/gi, 'Switch');
  const series = product.sku.match(/-(S\d{2})(?:-|$)/)?.[1] || '';
  const clean = (text: string) => {
    let result = text.replace(/Wwitch/gi, 'Switch').split(/Keywords:/i)[0].trim();
    if (series) result = result.replace(/S\d{2}(?= (?:Series|family|sockets))/gi, series);
    return result;
  };
  const colour = name.match(/\b(Silver|Grey|Gray|White|Black|Blue)\b/i)?.[1] || '';
  const wattage = (['bulbs', 'recessed-light', 'strip'].includes(product.category) ? name : '').match(/\b\d+(?:\.\d+)?\s*W\b/i)?.[0].replace(/\s/g, '').toUpperCase() || '';
  const current = name.match(/\b\d+\s*A\b/i)?.[0].replace(/\s/g, '').toUpperCase() || '';
  const temperature = name.match(/\b\d{4}\s*K\b/i)?.[0].replace(/\s/g, '').toUpperCase() || '';
  const configuration = name.match(/\b\dG\s*;\s*\dW\b/i)?.[0] || '';
  const description = clean(product.desc).split(/Key features:/i)[0].trim();
  const features = [...new Set((product.features || []).map(clean).filter(Boolean))];
  const specs = [['SKU', product.sku], ['Category', categoryMap[product.category] || product.category], ['Series', series], ['Colour (listed)', colour], ['Wattage', wattage], ['Current rating', current], ['Colour temperature', temperature], ['Configuration', configuration]].filter(([, value]) => value);
  return { name, series, colour, wattage, current, temperature, description, features, specs };
}

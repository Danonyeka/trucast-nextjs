'use client';
import { useCart } from '@/components/cart/CartContext';

export default function BuyBox(props: {
  id: string; name: string; priceNGN: number; image: string;
}) {
  const { add } = useCart();
  const NGN = (n: number) => new Intl.NumberFormat('en-NG', {
    style: 'currency', currency: 'NGN', maximumFractionDigits: 0,
  }).format(n);

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <button
        className="btn"
        onClick={() => add({ id: props.id, name: props.name, qty: 1, priceNGN: props.priceNGN, image: props.image })}
      >
        Add — {NGN(props.priceNGN)}
      </button>
    </div>
  );
}

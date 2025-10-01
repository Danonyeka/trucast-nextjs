'use client'

import { useCart } from './CartContext'

const NGN = (n: number) =>
  new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(n)

export default function AddToCartButton(props: {
  id: string
  name: string
  priceNGN: number
  image: string
}) {
  const { add } = useCart()
  return (
    <button
      className="btn-primary"
      onClick={() => add({ id: props.id, name: props.name, qty: 1, priceNGN: props.priceNGN, image: props.image })}
    >
      Add — {NGN(props.priceNGN)}
    </button>
  )
}

// app/HeroSlider.tsx
'use client'

import Image, { type StaticImageData } from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'

type Slide = { src: StaticImageData | string; alt: string }

export default function HeroSlider() {
  const slides: Slide[] = useMemo(
    () => [
      { src: '/images/hero/hero-1.png',  alt: 'Premium Trucast switches' },
      { src: '/images/hero/hero-2.png',  alt: 'Sockets and panels' },
      { src: '/images/hero/hero-3.png',  alt: 'Discount promotion' },
      { src: '/images/hero/hero-4.png',  alt: 'Wall switches showcase' },
      { src: '/images/hero/hero-5.png',  alt: 'Panel lights and bulbs' },
      { src: '/images/hero/hero-6.png',  alt: 'POP panel lights' },
      { src: '/images/hero/hero-7.png',  alt: 'LED strips and bulbs' },
      { src: '/images/hero/hero-8.png',  alt: 'Special sales promotion' },
      { src: '/images/hero/hero-9.png',  alt: 'SON certified quality' },
      { src: '/images/hero/hero-10.png', alt: 'Trucast smart devices' },
    ],
    []
  )

  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduced = useRef<boolean>(false)

  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    reduced.current = !!mq?.matches
    const onChange = () => (reduced.current = !!mq?.matches)
    mq?.addEventListener?.('change', onChange)
    return () => mq?.removeEventListener?.('change', onChange)
  }, [])

  useEffect(() => {
    if (reduced.current || paused) return
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 6000)
    return () => clearInterval(id)
  }, [paused, slides.length])

  const go = (n: number) => setI((p) => (p + n + slides.length) % slides.length)

  return (
    <div
      className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg bg-white group"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') go(1)
        if (e.key === 'ArrowLeft') go(-1)
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Homepage promotions"
    >
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === i ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={idx !== i}
        >
          <Image src={s.src} alt={s.alt} fill className="object-cover" sizes="100vw" priority={idx === 0} />
        </div>
      ))}

      {/* Controls */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow focus:outline-none"
        onClick={() => go(-1)}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow focus:outline-none"
        onClick={() => go(1)}
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-2.5 w-2.5 rounded-full ring-1 ring-black/20 ${idx === i ? 'bg-white' : 'bg-white/40'}`}
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={idx === i ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  )
}

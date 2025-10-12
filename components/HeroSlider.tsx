// app/HomeClient.tsx (CLIENT COMPONENT)
'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Image, { type StaticImageData } from 'next/image'
import { OrganizationLd, LocalBusinessLd } from '@/components/seo/JsonLd'
import { site } from '@/lib/site'
import { track } from '@/lib/analytics'

import CategoryCard from '@/components/cards/CategoryCard'

// hero (slide 1 as static import for blur/LCP)
import hero1 from '@/public/images/hero/hero-1@1920.webp'

// (Important) Use string paths for category images to avoid StaticImageData issues

function HeroSlider() {
  const slides: { src: StaticImageData | string; alt: string }[] = useMemo(() => ([
    { src: hero1,                               alt: 'Premium Trucast switches' },
    { src: '/images/hero/hero-2@1920.webp',     alt: 'Sockets and panels' },
    { src: '/images/hero/hero-3@1920.webp',     alt: 'Discount promotion' },
    { src: '/images/hero/hero-4@1920.webp',     alt: 'Wall switches showcase' },
    { src: '/images/hero/hero-5@1920.webp',     alt: 'Panel lights and bulbs' },
    { src: '/images/hero/hero-6@1920.webp',     alt: 'POP panel lights' },
    { src: '/images/hero/hero-7@1920.webp',     alt: 'LED strips and bulbs' },
    { src: '/images/hero/hero-8@1920.webp',     alt: 'Special sales promotion' },
    { src: '/images/hero/hero-9@1920.webp',     alt: 'SON certified quality' },
    { src: '/images/hero/hero-10@1920.webp',    alt: 'Trucast smart devices' },
  ]), [])

  const [i, setI] = useState(0)
  const [reduced, setReduced] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(!!mq?.matches)
    update()
    mq?.addEventListener?.('change', update)
    return () => mq?.removeEventListener?.('change', update)
  }, [])

  useEffect(() => {
    if (reduced || paused) return
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 6000)
    return () => clearInterval(id)
  }, [reduced, paused, slides.length])

  const next = (i + 1) % slides.length
  const visible = [i, next]

  return (
    <div
      className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {visible.map((idx) => {
        const s = slides[idx]
        const isActive = idx === i

        return (
          <div
            key={`${idx}-${typeof s.src === 'string' ? s.src : 'static'}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              className="object-cover"
              sizes="100vw"
              quality={75}
              {...(idx === 0 ? { priority: true, placeholder: 'blur' as const } : { loading: 'lazy' })}
            />
          </div>
        )
      })}

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => setI((p) => (p - 1 + slides.length) % slides.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white p-2 hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => setI((p) => (p + 1) % slides.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white p-2 hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        ›
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-3 w-3 rounded-full ${idx === i ? 'bg-white' : 'bg-white/40'} ring-1 ring-black/20`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function CheckIcon(props: React.SVGProps<SVGSVGEle

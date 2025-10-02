'use client';
import { useEffect, useRef, useState } from 'react';
import SmartImage from '@/components/SmartImage';

type Slide = { src: string; alt: string; href?: string; };

const SLIDE_INTERVAL = 6000; // ms

export default function HeroSlider() {
  const slides: Slide[] = [
    { src: '/images/hero/hero-1.png', alt: 'Premium Trucast switches' },
    { src: '/images/hero/hero-2.png', alt: 'Sockets and panels' },
    { src: '/images/hero/hero-3.png', alt: 'Discount promotion' },
    { src: '/images/hero/hero-4.png', alt: 'Wall switches showcase' },
    { src: '/images/hero/hero-5.png', alt: 'Panel lights and bulbs' },
    { src: '/images/hero/hero-6.png', alt: 'POP panel lights' },
    { src: '/images/hero/hero-7.png', alt: 'LED strips and bulbs' },
    { src: '/images/hero/hero-8.png', alt: 'Special sales promotion' },
    { src: '/images/hero/hero-9.png', alt: 'SON certified quality' },
    { src: '/images/hero/hero-10.png', alt: 'Trucast smart devices' },
  ];

  const [i, setI] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hoveringRef = useRef(false);
  const touchStartX = useRef<number | null>(null);
  const reducedMotion = useRef(false);

  const go = (next: number) => setI((p) => (next + slides.length) % slides.length);
  const next = () => go(i + 1);
  const prev = () => go(i - 1);

  // Auto-play (respects hover, tab visibility, and reduced motion)
  useEffect(() => {
    if (!slides.length) return;

    // respect prefers-reduced-motion
    if (typeof window !== 'undefined') {
      reducedMotion.current = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches || false;
    }
    if (reducedMotion.current) return;

    const start = () => {
      stop(); // clear any existing
      timerRef.current = setInterval(() => {
        if (!hoveringRef.current && document.visibilityState === 'visible') {
          setI((p) => (p + 1) % slides.length);
        }
      }, SLIDE_INTERVAL);
    };

    const stop = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };

    const onVisibility = () => {
      if (document.visibilityState === 'hidden') stop();
      else start();
    };

    start();
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      stop();
      document.removeEventListener('visibilitychange', onVisibility);
    };
    // Only depend on slides length; interval is constant
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length]);

  // Hover pause
  const onMouseEnter = () => {
    hoveringRef.current = true;
  };
  const onMouseLeave = () => {
    hoveringRef.current = false;
  };

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 50) return; // small swipe ignored
    if (delta < 0) next();
    else prev();
  };

  // Keyboard navigation
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    }
  };

  return (
    <section
      role="region"
      aria-label="Homepage promotions"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-lg outline-none"
    >
      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((s, idx) => (
          <div
            key={s.src}
            className={`absolute inset-0 ${reducedMotion.current ? '' : 'transition-opacity duration-700'} ${
              idx === i ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={idx !== i}
          >
            {/* If you add s.href later, wrap SmartImage with <a href={s.href} /> */}
            <SmartImage
              src={s.src}
              alt={s.alt}
              fill
              priority={idx === 0}
              className="object-cover"
            />
            {/* Optional soft gradient for text legibility if you add captions later */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/35 p-2 text-white backdrop-blur hover:bg-black/50 focus:outline-none focus:ring-4 focus:ring-white/40"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/35 p-2 text-white backdrop-blur hover:bg-black/50 focus:outline-none focus:ring-4 focus:ring-white/40"
      >
        ›
      </button>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setI(idx)}
            className={`h-2.5 w-2.5 rounded-full ring-1 ring-black/30 ${
              idx === i ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

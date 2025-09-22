'use client';
import { useEffect, useState } from 'react';
import SmartImage from '@/components/SmartImage';

export default function HeroSlider() {
  const slides = [
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

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 6000); // 6 seconds
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
      {slides.map((s, idx) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? 'opacity-100' : 'opacity-0'}`}
        >
          <SmartImage src={s.src} alt={s.alt} fill className="object-cover" />
        </div>
      ))}

      {/* Navigation dots */}
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
  );
}

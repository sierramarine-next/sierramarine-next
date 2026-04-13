"use client";

import { useState } from "react";
import Link from "next/link";

const slides = [
  {
    src: "/slider1.jpeg",
    alt: "Gemi Donatım",
    href: "/hizmetler/gemi-donatim",
    label: "Gemi Donatım",
  },
  {
    src: "/slider2.jpeg",
    alt: "Emniyet Ekipmanları",
    href: "/hizmetler/emniyet-ekipmanlari",
    label: "Emniyet Ekipmanları",
  },
  {
    src: "/slider3.jpeg",
    alt: "Basılı Harita ve Seyir Yayınları",
    href: "/hizmetler/basili-harita-seyir-yayinlari",
    label: "Basılı Harita ve Seyir Yayınları",
  },
  {
    src: "/slider4.jpeg",
    alt: "Survey Hazırlığı",
    href: "/hizmetler/survey-hazirligi",
    label: "Survey Hazırlığı",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[current];

  return (
    <div className="relative w-full max-h-[280px] my-6 bg-gray-100 rounded-xl overflow-hidden">
      <Link href={currentSlide.href}>
        <div className="cursor-pointer w-full h-full">
          <img
            src={currentSlide.src}
            alt={currentSlide.alt}
            className="w-full h-full object-contain"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
            <h3 className="text-base md:text-lg font-semibold">{currentSlide.label}</h3>
            <p className="text-xs opacity-90">Detaylı bilgi için tıklayın →</p>
          </div>
        </div>
      </Link>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-10 text-sm"
        type="button"
      >
        ❮
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-10 text-sm"
        type="button"
      >
        ❯
      </button>
    </div>
  );
}

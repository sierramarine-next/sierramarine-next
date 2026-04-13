"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Hero() {
  const pathname = usePathname();
  const isEn = pathname?.startsWith("/en") || false;

  const content = {
    title: isEn ? "Perfect Maritime Solutions" : "Denizciliğe Dair Kusursuz Çözümler",
    desc: isEn
      ? "Your expert partner for marine outfitting, digital publications, safety equipment, and survey preparation."
      : "Gemi donatım, dijital yayınlar, emniyet ekipmanları ve survey hazırlığında uzman çözüm ortağınız.",
    cta1: isEn ? "Explore Services" : "Hizmetleri Keşfet",
    cta2: isEn ? "Request a Quote" : "Teklif Al",
    cta1Link: isEn ? "/en/hizmetler" : "/hizmetler",
    cta2Link: isEn ? "/en/iletisim" : "/iletisim",
  };

  return (
    <section className="relative bg-navy-900 text-white overflow-hidden">
      {/* Video arka plan */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-ship.mp4" type="video/mp4" />
        {/* Fallback resim (video yüklenmezse gösterilir) */}
        <img src="/hero-bg.jpg" alt="Hero Background" className="w-full h-full object-cover" />
      </video>

      {/* Koyu overlay – metinlerin okunmasını sağlar */}
      <div className="absolute inset-0 bg-navy-900/70 z-1"></div>

      {/* İçerik */}
      <div className="relative z-2 mx-auto max-w-6xl px-4 py-24 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          {content.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
          {content.desc}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href={content.cta1Link} className="btn-primary">
            {content.cta1}
          </Link>
          <Link href={content.cta2Link} className="btn-outline">
            {content.cta2}
          </Link>
        </div>
      </div>
    </section>
  );
}

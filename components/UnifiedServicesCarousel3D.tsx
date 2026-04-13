"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import FlipCard from "./FlipCard";
import Link from "next/link";

const content = {
  tr: [
    // Uzmanlık Alanları (6 adet)
    {
      type: "expertise",
      title: "Gemi Donatım",
      shortDesc: "Yeni inşa ve mevcut gemiler için güvenlik, konfor ve operasyon odaklı donatım çözümleri.",
      longDesc: "Makine dairesi, güverte, köprüüstü ve yaşam alanları için ihtiyacınız olan her türlü donanımı tek elden temin ediyoruz. Klas ve mevzuata uygun, sertifikalı ürünler.",
      icon: "⚙️",
      link: "/hizmetler/gemi-donatim",
    },
    {
      type: "expertise",
      title: "Emniyet Ekipmanları",
      shortDesc: "SOLAS ve ilgili mevzuata uygun geniş ürün portföyü.",
      longDesc: "Can yelekleri, can salları, yangın söndürme sistemleri, kişisel koruyucu donanımlar. Tüm ekipmanlar uluslararası sertifikalıdır.",
      icon: "🦺",
      link: "/hizmetler/emniyet-ekipmanlari",
    },
    {
      type: "expertise",
      title: "Dijital Yayınlar & Haritalar",
      shortDesc: "AVCS, ADP, ENP dijital seyir yayınları ve harita servisleri.",
      longDesc: "Elcome LLC iş birliğiyle dünyanın en güncel dijital seyir ürünleri. Her zaman en son güncellemelerle.",
      icon: "🌐",
      link: "/hizmetler/dijital-yayinlar",
    },
    {
      type: "expertise",
      title: "Basılı Harita ve Yayınlar",
      shortDesc: "Resmi deniz haritaları, seyir talimatları, ITU yayınları ve Witherby’s ürünleri.",
      longDesc: "UKHO, ITU, IMO ve Witherby's resmi basılı materyalleri. Gemi kütüphaneniz için eksiksiz kaynak.",
      icon: "🗺️",
      link: "/hizmetler/basili-harita-seyir-yayinlari",
    },
    {
      type: "expertise",
      title: "Survey Hazırlığı",
      shortDesc: "Klas, bayrak ve liman devleti kontrolleri öncesi eksikliklerin tespiti ve tedarik desteği.",
      longDesc: "Survey öncesi ihtiyaç listesi hazırlıyor, eksik ekipman ve yayınları hızlıca tedarik ediyoruz.",
      icon: "📋",
      link: "/hizmetler/survey-hazirligi",
    },
    {
      type: "expertise",
      title: "Filo Yönetim Desteği",
      shortDesc: "Gemilerin yayın ve ekipman durumlarının takibi, yenileme planlaması ve raporlama.",
      longDesc: "Dijital takip sistemi ile tüm filonuzun güncellik durumunu anlık izleyin, denetimlere hazır olun.",
      icon: "⚓",
      link: "/hizmetler/filo-yonetim",
    },
    // Hizmet Alanları (4 adet)
    {
      type: "service",
      title: "Gemi Donatım",
      shortDesc: "Yeni inşa ve mevcut gemiler için donatım çözümleri.",
      longDesc: "Makine, güverte, köprüüstü ve yaşam alanları için her türlü donanım. Sertifikalı ürünler.",
      icon: "⚙️",
      link: "/hizmetler/gemi-donatim",
    },
    {
      type: "service",
      title: "Emniyet Ekipmanları",
      shortDesc: "SOLAS uyumlu emniyet ekipmanları.",
      longDesc: "Can yelekleri, can salları, yangın sistemleri, kişisel koruyucu donanımlar.",
      icon: "🦺",
      link: "/hizmetler/emniyet-ekipmanlari",
    },
    {
      type: "service",
      title: "Basılı Harita ve Yayınlar",
      shortDesc: "Resmi deniz haritaları, seyir yayınları.",
      longDesc: "UKHO, ITU, IMO, Witherby's resmi basılı materyalleri.",
      icon: "🗺️",
      link: "/hizmetler/basili-harita-seyir-yayinlari",
    },
    {
      type: "service",
      title: "Survey Hazırlığı",
      shortDesc: "Klas ve liman kontrolleri öncesi eksiklik tespiti.",
      longDesc: "Survey öncesi ihtiyaç listesi ve hızlı tedarik.",
      icon: "📋",
      link: "/hizmetler/survey-hazirligi",
    },
  ],
  en: [
    // Expertise (6)
    {
      type: "expertise",
      title: "Marine Outfitting",
      shortDesc: "Outfitting solutions for newbuild and existing vessels focusing on safety, comfort and operations.",
      longDesc: "We supply all required outfitting items from a single source, including engine room, deck, bridge and accommodation areas. Certified products in line with class and regulations.",
      icon: "⚙️",
      link: "/en/hizmetler/gemi-donatim",
    },
    {
      type: "expertise",
      title: "Safety Equipment",
      shortDesc: "Wide range of SOLAS-compliant safety equipment for crew and vessel safety.",
      longDesc: "Lifejackets, life rafts, fire‑fighting systems, personal protective equipment. All internationally certified.",
      icon: "🦺",
      link: "/en/hizmetler/emniyet-ekipmanlari",
    },
    {
      type: "expertise",
      title: "Digital Publications & Charts",
      shortDesc: "AVCS, ADP, ENP digital navigation publications and chart services.",
      longDesc: "In partnership with Elcome LLC, we provide the world’s most up‑to‑date digital navigation products. Always with the latest updates.",
      icon: "🌐",
      link: "/en/hizmetler/dijital-yayinlar",
    },
    {
      type: "expertise",
      title: "Printed Charts & Publications",
      shortDesc: "Official nautical charts, sailing directions, ITU publications and Witherby’s products.",
      longDesc: "Official printed materials from UKHO, ITU, IMO and Witherby's. Complete source for your ship's library.",
      icon: "🗺️",
      link: "/en/hizmetler/basili-harita-seyir-yayinlari",
    },
    {
      type: "expertise",
      title: "Survey Preparation",
      shortDesc: "Identification and supply of missing items before class, flag or PSC inspections.",
      longDesc: "We prepare the pre‑survey checklist and quickly supply any missing equipment or publications.",
      icon: "📋",
      link: "/en/hizmetler/survey-hazirligi",
    },
    {
      type: "expertise",
      title: "Fleet Management Support",
      shortDesc: "Tracking vessel publications and equipment status, renewal planning and reporting.",
      longDesc: "Real‑time monitoring of your entire fleet’s compliance status via digital tracking system. Always ready for inspections.",
      icon: "⚓",
      link: "/en/hizmetler/filo-yonetim",
    },
    // Services (4)
    {
      type: "service",
      title: "Marine Outfitting",
      shortDesc: "Outfitting solutions for newbuild and existing vessels.",
      longDesc: "All types of equipment for engine, deck, bridge and accommodation. Certified products.",
      icon: "⚙️",
      link: "/en/hizmetler/gemi-donatim",
    },
    {
      type: "service",
      title: "Safety Equipment",
      shortDesc: "SOLAS-compliant safety equipment.",
      longDesc: "Lifejackets, life rafts, fire systems, PPE.",
      icon: "🦺",
      link: "/en/hizmetler/emniyet-ekipmanlari",
    },
    {
      type: "service",
      title: "Printed Charts & Publications",
      shortDesc: "Official nautical charts and publications.",
      longDesc: "Official printed materials from UKHO, ITU, IMO, Witherby's.",
      icon: "🗺️",
      link: "/en/hizmetler/basili-harita-seyir-yayinlari",
    },
    {
      type: "service",
      title: "Survey Preparation",
      shortDesc: "Identification of missing items before inspections.",
      longDesc: "Pre‑survey checklist and fast supply.",
      icon: "📋",
      link: "/en/hizmetler/survey-hazirligi",
    },
  ],
};

export default function UnifiedServicesCarousel3D() {
  const pathname = usePathname();
  const isEn = pathname?.startsWith("/en") || false;
  const items = isEn ? content.en : content.tr;
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = items.length;
  const radius = 340;
  const angleStep = 360 / total;

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.children;
    for (let i = 0; i < total; i++) {
      const angle = i * angleStep;
      const radian = (angle * Math.PI) / 180;
      const x = Math.sin(radian) * radius;
      const z = Math.cos(radian) * radius;
      const card = cards[i] as HTMLElement;
      if (card) {
        card.style.transform = `translateX(${x}px) translateZ(${z}px) rotateY(${angle}deg)`;
      }
    }
  }, [total, radius, angleStep]);

  const rotateContainer = (index: number) => {
    if (!containerRef.current) return;
    const rotation = -index * angleStep;
    containerRef.current.style.transform = `rotateY(${rotation}deg)`;
  };

  const next = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    rotateContainer(currentIndex);
  }, [currentIndex]);

  const renderCard = (item: any, idx: number) => {
    const front = (
      <div className="w-full h-full rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-xl border border-gray-100 flex flex-col items-center justify-center text-center p-5 transition-all hover:shadow-2xl">
        <div className="text-5xl mb-3">{item.icon}</div>
        <h3 className="text-lg font-bold text-navy-800">{item.title}</h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">{item.shortDesc}</p>
        <p className="text-xs text-gold-500 mt-3">{isEn ? "👆 Tap / Click" : "👆 Dokun / Tıkla"}</p>
      </div>
    );
    const back = (
      <div className="w-full h-full rounded-2xl bg-gradient-to-br from-navy-50 to-navy-100 shadow-xl border border-navy-200 flex flex-col justify-between p-5">
        <div>
          <h3 className="text-lg font-bold text-navy-800 mb-2">{item.title}</h3>
          <p className="text-gray-700 text-sm line-clamp-5">{item.longDesc}</p>
        </div>
        <Link href={item.link} className="mt-3 text-gold-600 font-semibold hover:underline inline-flex items-center gap-1 text-sm" onClick={(e) => e.stopPropagation()}>
          {isEn ? "More details →" : "Detaylı bilgi →"}
        </Link>
      </div>
    );
    return <FlipCard key={idx} front={front} back={back} />;
  };

  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-900 mb-12">
          {isEn ? "Our Expertise & Services" : "Uzmanlık Alanlarımız & Hizmetler"}
        </h2>
        <div
          className="relative flex justify-center items-center"
          style={{
            perspective: "1200px",
            perspectiveOrigin: "center 60%",
            minHeight: "420px",
          }}
        >
          <div
            ref={containerRef}
            className="relative transition-transform duration-700 ease-out"
            style={{
              transformStyle: "preserve-3d",
              width: "260px",
              height: "320px",
              margin: "0 auto",
              transform: "rotateX(12deg)",
            }}
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                className="absolute w-full h-full"
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "visible",
                }}
              >
                {renderCard(item, idx)}
              </div>
            ))}
          </div>
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-10">❮</button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-10">❯</button>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, idx) => (
            <button key={idx} onClick={() => setCurrentIndex(idx)} className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? "bg-gold-500 w-4" : "bg-gray-300"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

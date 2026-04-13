"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import FlipCard from "./FlipCard";
import Link from "next/link";

// Veriler: uzmanlık + hizmet alanları birleşik
const unifiedData = {
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
    // Hizmet Alanları (4 adet) - kısa açıklamalar farklı olsun
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

export default function UnifiedServicesCarousel() {
  const pathname = usePathname();
  const isEn = pathname?.startsWith("/en") || false;
  const items = isEn ? unifiedData.en : unifiedData.tr;

  const [current, setCurrent] = useState(0);
  const itemsPerPage = 3;
  const maxIndex = items.length - itemsPerPage;

  const next = () => setCurrent((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
  const visibleItems = items.slice(current, current + itemsPerPage);

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-900 mb-12">
          {isEn ? "Our Expertise & Services" : "Uzmanlık ve Hizmet Alanlarımız"}
        </h2>
        <div className="relative">
          <div className="grid gap-6 md:grid-cols-3">
            {visibleItems.map((item, idx) => (
              <FlipCard
                key={idx}
                front={
                  <div className="card h-full flex flex-col items-center justify-center text-center p-6">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-navy-800">{item.title}</h3>
                    <p className="text-gray-600 mt-2">{item.shortDesc}</p>
                    <p className="text-xs text-gold-500 mt-4">{isEn ? "👆 Tap / Click" : "👆 Dokun / Tıkla"}</p>
                  </div>
                }
                back={
                  <div className="card h-full flex flex-col justify-between p-6 bg-navy-50">
                    <div>
                      <h3 className="text-xl font-bold text-navy-800 mb-2">{item.title}</h3>
                      <p className="text-gray-700 text-sm">{item.longDesc}</p>
                    </div>
                    <Link
                      href={item.link}
                      className="mt-4 text-gold-500 font-semibold hover:underline inline-flex items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {isEn ? "More details →" : "Detaylı bilgi →"}
                    </Link>
                  </div>
                }
              />
            ))}
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            ❮
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            ❯
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === current ? "bg-gold-500 w-4" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { usePathname } from "next/navigation";

const publications = {
  tr: [
    {
      title: "AVCS",
      shortDesc: "Admiralty Vector Chart Service",
      longDesc: "Dünya çapında güncel vektör harita servisi. Elcome LLC alt distribütörlüğü ile sunulmaktadır. Güvenli seyir için en doğru ve güncel haritalar.",
      icon: "🗺️",
    },
    {
      title: "ADP",
      shortDesc: "Admiralty Digital Publications",
      longDesc: "Dijital seyir yayınları, haritalar ve denizcilik dokümanları. Kağıt israfını önler, her zaman günceldir.",
      icon: "📘",
    },
    {
      title: "ENP",
      shortDesc: "Electronic Nautical Publications",
      longDesc: "Elektronik seyir yayınları, mevzuata uygun, anlık güncellemelerle geminizin her zaman uyumlu olmasını sağlar.",
      icon: "🌐",
    },
  ],
  en: [
    {
      title: "AVCS",
      shortDesc: "Admiralty Vector Chart Service",
      longDesc: "Up‑to‑date vector chart service worldwide. Offered under Elcome LLC sub‑distribution. The most accurate charts for safe navigation.",
      icon: "🗺️",
    },
    {
      title: "ADP",
      shortDesc: "Admiralty Digital Publications",
      longDesc: "Digital navigation publications, charts and maritime documents. No paper waste, always up‑to‑date.",
      icon: "📘",
    },
    {
      title: "ENP",
      shortDesc: "Electronic Nautical Publications",
      longDesc: "Regulation‑compliant electronic nautical publications with real‑time updates, keeping your vessel fully compliant.",
      icon: "🌐",
    },
  ],
};

export default function DigitalPublications() {
  const pathname = usePathname();
  const isEn = pathname?.startsWith("/en") || false;
  const data = isEn ? publications.en : publications.tr;

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-center mb-10">
        <p className="text-gold-500 uppercase tracking-wider text-sm font-semibold">
          {isEn ? "Digital Navigation Solutions" : "Dijital Seyir Çözümleri"}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2">
          {isEn ? "Digital Publications & Chart Services" : "Dijital Yayınlar & Harita Servisleri"}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          {isEn
            ? "In partnership with Elcome LLC, we offer Admiralty Digital Publications (ADP, ENP, AVCS) and P.O.D. (Print on Demand) services."
            : "Elcome LLC alt distribütörlüğü ile Admiralty Dijital Yayınları (ADP, ENP, AVCS) ve P.O.D. (Print on Demand) hizmetlerini sunuyoruz."}
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {data.map((pub) => (
          <div key={pub.title} className="card h-full flex flex-col items-center text-center p-6 min-h-[280px]">
            <div className="text-5xl mb-4">{pub.icon}</div>
            <h3 className="text-2xl font-bold text-navy-800">{pub.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{pub.shortDesc}</p>
            <p className="text-xs text-gray-500 mt-4">{pub.longDesc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

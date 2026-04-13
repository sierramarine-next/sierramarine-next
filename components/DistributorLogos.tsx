"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Her logo için hedef URL (ilgili firmanın ana sayfası)
const logos = [
  { src: "/witherbys-logo.png", alt: "Witherby's", width: 100, height: 60, tooltip: "Distribütör", url: "https://www.witherbys.com/" },
  { src: "/elcome-logo.png", alt: "Elcome LLC", width: 100, height: 60, tooltip: "Alt Distribütör", url: "https://elcome.com/" },
  { src: "/imo-logo.png", alt: "IMO", width: 80, height: 60, tooltip: "Reseller", url: "https://www.imo.org/" },
  { src: "/itu-logo.png", alt: "ITU", width: 80, height: 60, tooltip: "Distribütör", url: "https://www.itu.int/" },
];

export default function DistributorLogos() {
  const pathname = usePathname();
  const isEn = pathname?.startsWith("/en") || false;

  return (
    <section className="bg-white py-12 border-y border-gray-100">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center text-sm uppercase tracking-wider text-gray-500 mb-6">
          {isEn ? "Authorized Distributor & Reseller" : "Yetkili Distribütör & Reseller"}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, idx) => (
            <a
              key={idx}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group transition-transform hover:scale-105"
            >
              <div className="grayscale hover:grayscale-0 transition-all">
                <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="object-contain" />
              </div>
              <span className="text-xs text-gray-400 mt-1 group-hover:text-gold-500 transition">
                {logo.tooltip}
              </span>
            </a>
          ))}
        </div>
        <p className="text-center text-xs text-gray-500 mt-6 max-w-2xl mx-auto">
          {isEn
            ? "Sierra Marine is a sub‑distributor of Elcome LLC and a reseller of Admiralty Digital Publications and P.O.D. (Print on Demand). Also distributor of ITU Digital & Hardcopy, reseller of IMO Publications, and distributor of Witherby's."
            : "Sierra Marine, Elcome LLC alt distribütörü olarak Admiralty Dijital yayınları ve P.O.D. için reseller yetkili satıcısıdır. Ayrıca ITU Dijital ve Hardcopy distribütörü, IMO Yayınları reseller’ı ve Witherby's distribütörüdür."}
        </p>
      </div>
    </section>
  );
}

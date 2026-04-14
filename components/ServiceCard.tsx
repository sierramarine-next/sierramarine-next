// components/ServiceCard.tsx (flip'siz, sabit kart)
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ServiceCardProps {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  icon: string;
}

export default function ServiceCard({ slug, title, excerpt, description, icon }: ServiceCardProps) {
  const pathname = usePathname();
  const isEn = pathname?.startsWith("/en") || false;
  const href = isEn ? `/en/hizmetler/${slug}` : `/hizmetler/${slug}`;

  return (
    <Link href={href} className="block h-full">
      <div className="card h-full flex flex-col items-center justify-between text-center p-6 min-h-[280px] transition-all hover:shadow-lg hover:-translate-y-1">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-navy-800">{title}</h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">{excerpt}</p>
        <p className="text-gold-500 text-sm font-semibold mt-4 inline-flex items-center gap-1">
          {isEn ? "More details →" : "Detaylı bilgi →"}
        </p>
      </div>
    </Link>
  );
}

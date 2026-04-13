// components/ServiceCard.tsx (son hali)
import FlipCard from "./FlipCard";
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

  const front = (
    <div className="card h-full flex flex-col items-center justify-center text-center p-6">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-navy-800">{title}</h3>
      <p className="text-gray-600 mt-2">{excerpt}</p>
      <p className="text-xs text-gold-500 mt-4">{isEn ? "👆 Tap / Click" : "👆 Dokun / Tıkla"}</p>
    </div>
  );

  const back = (
    <div className="card h-full flex flex-col justify-between p-6 bg-navy-50">
      <div>
        <h3 className="text-xl font-bold text-navy-800 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
      <Link href={href} className="mt-4 text-gold-500 font-semibold hover:underline inline-flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
        {isEn ? "More details →" : "Detaylı bilgi →"}
      </Link>
    </div>
  );

  return <FlipCard front={front} back={back} />;
}

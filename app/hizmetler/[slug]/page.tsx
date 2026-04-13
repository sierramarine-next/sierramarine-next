import { notFound } from "next/navigation";
import { services } from "@/lib/services";
import Link from "next/link";
import Image from "next/image";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.tr.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.tr.find((s) => s.slug === slug);

  if (!service) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-navy-900 to-navy-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <Link href="/hizmetler" className="inline-flex items-center text-gold-400 hover:text-gold-300 mb-6">
            ← Tüm Hizmetler
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">{service.title}</h1>
          <p className="text-gray-300 mt-4 max-w-2xl">{service.excerpt}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        {service.image && (
          <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-md">
            <Image src={service.image} alt={service.title} fill className="object-cover" />
          </div>
        )}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 prose prose-slate max-w-none">
          <div dangerouslySetInnerHTML={{ __html: service.content }} />
        </div>
        <div className="mt-12 text-center">
          <Link href="/iletisim" className="btn-primary inline-block">Teklif Al</Link>
        </div>
      </section>
    </div>
  );
}

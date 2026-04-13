"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import UnifiedServicesCarousel3D from "@/components/UnifiedServicesCarousel3D";
import DigitalPublications from "@/components/DigitalPublications";
import DistributorLogos from "@/components/DistributorLogos";
import AnketModal from "@/components/AnketModal";
import Gorusler from "@/components/Gorusler";

export default function HomeEnPage() {
  const [anketAcik, setAnketAcik] = useState(false);

  return (
    <>
      <Hero />
      <div className="mx-auto max-w-6xl px-4 py-8">
        <UnifiedServicesCarousel3D />
        <DigitalPublications />
        <DistributorLogos />

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-center text-navy-900 mb-6">
            Customer Reviews
          </h2>
          <Gorusler />
        </section>

        <div className="text-center mt-8 pb-6">
          <button onClick={() => setAnketAcik(true)} className="btn-primary">
            Customer Satisfaction Survey
          </button>
        </div>
      </div>
      <AnketModal isOpen={anketAcik} onClose={() => setAnketAcik(false)} />
    </>
  );
}

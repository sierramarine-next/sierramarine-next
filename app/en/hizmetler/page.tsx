"use client";

import { useState } from "react";
import { services } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard"; // default import

const filters = [
  { key: "all", label: "All" },
  { key: "gemi-donatim", label: "Marine Outfitting" },
  { key: "emniyet-ekipmanlari", label: "Safety Equipment" },
  { key: "basili-harita-seyir-yayinlari", label: "Printed Charts & Publications" },
  { key: "survey-hazirligi", label: "Survey Preparation" },
];

export default function HizmetlerEnPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const serviceList = services.en;
  const filtered = activeFilter === "all" ? serviceList : serviceList.filter((s) => s.slug === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-navy-900 text-white overflow-hidden">
        <video autoPlay loop muted playsInline className="video-background">
          <source src="/hero-ship.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="relative-z-2 mx-auto max-w-6xl px-4 py-20 text-center">
          <p className="text-sm uppercase tracking-wider text-gold-400 mb-2">SERVICES</p>
          <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
          <p className="text-gray-200 max-w-2xl mx-auto mt-4">
            End‑to‑end solutions from marine outfitting to safety equipment, digital publications to survey preparation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 space-y-8">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === f.key
                  ? "bg-gold-500 text-white border-gold-500"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
}

"use client";

export default function AboutEnPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-navy-900 text-white overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src="/hero-ship.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-navy-900/70 z-1"></div>
        <div className="relative z-2 mx-auto max-w-6xl px-4 py-20 text-center">
          <p className="text-sm uppercase tracking-wider text-gold-400 mb-2">ABOUT US</p>
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="text-gray-200 max-w-2xl mx-auto mt-4">
            Sierra Marine – Your reliable partner in marine outfitting and navigation solutions.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 prose prose-slate max-w-none">
          <h2 className="text-xl font-semibold text-navy-800 mb-4">Sierra Marine Marine Outfitting Services Inc.</h2>
          <p>Sierra Marine is a marine outfitting and navigation solutions company established in 2023. The founders’ long‑standing experience in the maritime industry strengthens both the technical competence and the sectoral perspective of the company.</p>
          <p>Our core activities include the supply of outfitting items, safety equipment, paper and digital charts and nautical publications for commercial vessels and yachts. Our goal is to provide most of the required items and documentation from a single, reliable source.</p>
          <p>We closely follow publications and regulations issued by ITU, IMO, Witherby's and national authorities, and keep our portfolio aligned with the latest requirements. Official hydrographic and nautical publications form an important part of the solutions we offer to our clients.</p>
          <p>Our product range covers marine outfitting materials, safety and fire‑fighting equipment, nautical charts and publications, bridge equipment, medical supplies, chemicals and various items related to survey preparation.</p>
          <p>Our priority is to deliver the right product, at the right time, at a competitive cost and in full compliance with regulations. Building long‑term, trust‑based and solution‑oriented relationships with our customers is a key element of our company culture.</p>
        </div>
      </div>
    </div>
  );
}

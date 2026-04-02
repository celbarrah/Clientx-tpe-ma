"use client";
import dynamic from "next/dynamic";
import Image from "next/image";

const LeadConnectorWidget = dynamic(
  () => import("@/components/sections/LeadConnectorWidget"),
  { ssr: false }
);

export default function HeroSection() {
  return (
    <section className="bg-[#f0f0ee] pt-[68px] min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* ── LEFT CONTENT ── */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#111] leading-tight">
              Analysez votre visibilité<br />
              <span className="text-[#32DC32]">digitale en 20 min !</span>
            </h1>

            <div className="relative">
              <Image
                src="/Audit.webp"
                alt="Audit Digital ClientX"
                width={520}
                height={320}
                className="w-full max-w-125 h-auto rounded-2xl object-cover"
                unoptimized
              />
            </div>

            {/* Stats / Social Proof */}
            <div className="space-y-4">
               <p className="text-lg text-[#111]">
                <span className="font-extrabold text-[#32DC32]">200 000 </span> Clients nous font confiance Mds €
              </p>
              <p className="text-lg text-[#111]">
                <span className="font-extrabold text-[#32DC32]">4,2 Mds €</span> générés depuis 2013
              </p>
            </div>
          </div>

          {/* ── RIGHT CONTENT (The Widget Card) ── */}
          <div className="w-full">
            <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden">
              <div className="p-8 text-center border-b border-gray-50">
                <h2 className="text-2xl font-bold text-[#111]">
                  Audit Digital Gratuit
                </h2>
                <p className="text-gray-500 mt-1">Remplissez le formulaire pour commencer</p>
              </div>

              {/* The Widget is now the main hero action */}
              <div className="p-2">
                <LeadConnectorWidget />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
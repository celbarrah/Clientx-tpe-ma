"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PILLARS = [
  {
    num: "01",
    title: "Conseil & Diagnostic d'Acquisition",
    desc: "Nous analysons votre activité, votre zone de chalandise et vos objectifs pour identifier le potentiel réel de génération de leads et de rendez-vous.",
    items: ["Analyse offre & potentiel", "Messages performants", "Tunnel d'acquisition", "Volumes leads & RDV"],
  },
  {
    num: "02",
    title: "Vision & Stratégie de Conversion",
    desc: "Nous construisons une stratégie d'acquisition orientée résultat, reliant chaque étape : contenu → publicité → leads → rendez-vous.",
    items: ["Structurer le tunnel", "Actions à fort impact", "Aligner contenus & IA", "Mesurer la performance"],
  },
  {
    num: "03",
    title: "Pilotage & Accompagnement",
    desc: "Nous pilotons l'exécution au quotidien, optimisons les performances et accompagnons la montée en puissance du dispositif.",
    items: ["Campagnes publicitaires", "Production de contenus", "Traitement des leads (IA)", "Prise de RDV confirmés"],
  },
];

function PillarCard({ pillar, index }: { pillar: (typeof PILLARS)[number]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white border border-gray-100 rounded-2xl p-7 flex flex-col gap-5 shadow-sm"
    >
      <span className="text-5xl font-bold text-gray-100 leading-none select-none">{pillar.num}</span>
      <h3 className="text-lg font-bold text-[#111] leading-snug">{pillar.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{pillar.desc}</p>
      <ul className="flex flex-col gap-2 mt-auto pt-4 border-t border-gray-50">
        {pillar.items.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
            <span className="w-4 h-4 rounded-full bg-[#32DC32]/15 flex items-center justify-center flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#32DC32]" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function PillarsSection() {
  return (
    <section className="bg-white py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-[#27b527] text-xs font-semibold uppercase tracking-widest mb-3">Notre méthode</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#111]">
            3 piliers pour générer<br />des résultats concrets
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PILLARS.map((p, i) => (
            <PillarCard key={p.num} pillar={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

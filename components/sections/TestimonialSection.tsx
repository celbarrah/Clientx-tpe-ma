"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "Meilleure agence digitale au Maroc. Accompagnement pro, campagnes au top, notre marque a eu un grand succès grâce à eux.",
    name: "Marwa Rajiallah",
    role: "Responsable Marketing & Communication",
    company: "Renault Maroc",
  },
  {
    quote: "ClientX est une excellente agence pour développer des leads qualifiés. Sérieux, disponibilité et efficacité sont toujours au rendez-vous.",
    name: "Mamoun Benkirane",
    role: "Responsable Marketing",
    company: "KLK Group",
  },
  {
    quote: "Une équipe dynamique, force de proposition qui se challenge chaque jour. Très réactifs, ils font toujours preuve d'inventivité.",
    name: "Hala Bennani",
    role: "Responsable Marketing & Communication",
    company: "Groupe AutoHall",
  },
  {
    quote: "Great agency, very responsive & creative! Worked with them at Barry Callebaut Morocco for 1 year and counting.",
    name: "Basma Tazi",
    role: "Marketing Manager MENA",
    company: "Barry Callebaut",
  },
  {
    quote: "Je suis satisfaite de la collaboration avec ClientX. Leur équipe est à l'écoute et propose des solutions adaptées à nos besoins.",
    name: "Zaynab Rami",
    role: "Responsable Marketing",
    company: "Groupe Addoha",
  },
  {
    quote: "Une équipe au top et des résultats concrets ! Accompagnement professionnel, réactif et personnalisé. Je recommande vivement.",
    name: "Najma Ali",
    role: "Sales Marketing Coordinator",
    company: "KLK Group",
  },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-[#32DC32]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function TestimonialSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-[#f5f5f5] py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#27b527] text-xs font-semibold uppercase tracking-widest mb-3">Témoignages</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#111]">
            Ce que disent nos clients
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map(({ quote, name, role, company }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4"
            >
              <Stars />
              <p className="text-gray-600 text-sm leading-relaxed flex-1">"{quote}"</p>
              <div className="pt-3 border-t border-gray-50">
                <p className="text-sm font-semibold text-[#111]">{name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{role} · {company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

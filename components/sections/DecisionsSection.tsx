"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { val: "4,2 Mds €",  label: "générés pour nos clients depuis 2013" },
  { val: "50+",        label: "experts créatifs orientés ROI" },
  { val: "70+",        label: "pays utilisent nos solutions" },
];

export default function DecisionsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-[#f5f5f5] py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#111] mb-3">
            La visibilité, c'est de nouveaux clients
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Depuis 2013, ClientX développe des systèmes d'acquisition qui transforment
            contenus, publicité et IA en opportunités business concrètes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {STATS.map(({ val, label }, i) => (
            <motion.div
              key={val}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm text-center"
            >
              <p className="text-4xl font-bold text-[#32DC32] leading-none mb-2">{val}</p>
              <p className="text-gray-500 text-sm leading-snug">{label}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#calendrier"
            className="inline-block bg-[#32DC32] text-black text-sm font-semibold px-8 py-3.5 rounded-md hover:bg-[#27b527] transition-colors"
          >
            Lancer mon audit gratuit
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CtaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-[#111] py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#32DC32] text-xs font-semibold uppercase tracking-widest mb-4">
            Passez à l'action
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Co-créons votre acquisition client.
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Échangeons sur votre projet. Nous concevons et opérons des dispositifs qui transforment
            contenus, publicité et technologie en opportunités business concrètes.
          </p>
          <a
            href="#calendrier"
            className="inline-block bg-[#32DC32] text-black font-semibold text-sm px-8 py-4 rounded-md hover:bg-[#27b527] transition-colors"
          >
            Réserver mon audit gratuit →
          </a>
          <p className="text-gray-600 text-xs mt-3">Aucun engagement — 100% offert</p>
        </motion.div>
      </div>
    </section>
  );
}

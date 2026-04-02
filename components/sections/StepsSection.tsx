const STEPS = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 48 48">
        <rect x="8" y="6" width="32" height="36" rx="4" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="16" x2="32" y2="16" strokeLinecap="round" />
        <line x1="16" y1="22" x2="32" y2="22" strokeLinecap="round" />
        <line x1="16" y1="28" x2="24" y2="28" strokeLinecap="round" />
      </svg>
    ),
    num: "1",
    color: "#32DC32",
    title: (
      <>
        <strong>Complétez le formulaire</strong>
      </>
    ),
    desc: "ci-dessus afin de mieux vous connaître",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 48 48">
        <circle cx="22" cy="22" r="12" strokeLinecap="round" />
        <line x1="30.5" y1="30.5" x2="40" y2="40" strokeLinecap="round" />
        <path d="M16 22 c0-3.3 2.7-6 6-6" strokeLinecap="round" />
      </svg>
    ),
    num: "2",
    color: "#32DC32",
    title: (
      <>
        <strong>Nous analysons</strong> et identifions les forces et faiblesses de votre visibilité
      </>
    ),
    desc: "digitale et de votre présence en ligne",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 48 48">
        <path d="M8 32 A16 16 0 0 1 40 32" strokeLinecap="round" />
        <line x1="24" y1="32" x2="24" y2="20" strokeLinecap="round" />
        <line x1="24" y1="32" x2="34" y2="24" strokeLinecap="round" strokeOpacity={0.4} />
        <circle cx="24" cy="32" r="2.5" fill="currentColor" />
      </svg>
    ),
    num: "3",
    color: "#32DC32",
    title: (
      <>
        <strong>Obtenez votre audit de visibilité</strong>
      </>
    ),
    desc: "personnalisé et des recommandations concrètes sans attendre",
  },
];

export default function StepsSection() {
  return (
    <section className="bg-white py-14 px-6 my-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {STEPS.map((step, idx) => (
            <div key={step.num} className="flex flex-col items-center text-center gap-5">
              {/* Icon */}
              <div className="text-gray-400">{step.icon}</div>

              {/* Numbered connector line */}
              <div className="flex items-center w-full max-w-[200px]">
                <div
                  className="flex-1 h-[1.5px]"
                  style={{ backgroundColor: idx === 0 ? step.color : "#e5e7eb" }}
                />
                <div
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ borderColor: step.color, color: step.color }}
                >
                  {step.num}
                </div>
                <div
                  className="flex-1 h-[1.5px]"
                  style={{ backgroundColor: idx === STEPS.length - 1 ? "#e5e7eb" : step.color }}
                />
              </div>

              {/* Text */}
              <div>
                <p className="text-[15px] text-[#111] leading-snug mb-1">{step.title}</p>
                <p className="text-sm text-gray-500 leading-snug">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

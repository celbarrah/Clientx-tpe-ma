const STATS = [
  {
    val: "97 %",
    desc: "des consommateurs utilisent internet pour trouver un prestataire ou un commerce",
  },
  {
    val: "78 %",
    desc: "des entreprises perdent des clients faute d'une présence digitale optimisée",
  },
  {
    val: "3×",
    desc: "plus de leads générés avec une stratégie digitale bien structurée et pilotée",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-white py-6 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Gray card — exactly like solocal */}
        <div className="bg-[#f0f0ee] rounded-2xl px-8 py-12 mb-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#111] leading-snug">
              Assurer sa visibilité
            </h2>
            <p className="text-2xl md:text-3xl font-normal text-[#111] leading-snug">
              c'est s'assurer de nouveaux clients&nbsp;!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {STATS.map(({ val, desc }) => (
              <div key={val}>
                <p className="text-5xl font-extrabold text-[#32DC32] mb-3">{val}</p>
                <p className="text-sm text-gray-600 leading-relaxed max-w-[220px] mx-auto">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA button — centered, pill shape, like solocal */}
        <div className="text-center mb-8">
          <a
            href="#audit"
            className="inline-block bg-[#32DC32] text-black font-semibold text-base px-15 w-[300px] py-4 rounded-full hover:bg-[#27b527] transition-colors"
          >
            Lancer mon audit gratuit
          </a>
        </div>

      </div>
    </section>
  );
}

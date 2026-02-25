function AsbestosVisual() {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
      <div className="text-slate-400 text-xs uppercase tracking-widest font-medium mb-4">
        Why asbestos kills — the mechanism
      </div>

      <svg viewBox="0 0 660 168" className="w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arr21" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill="#475569" />
          </marker>
          {/* Glow for inflammation dots */}
          <filter id="glow21">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* ─── PANEL 1: THE FIBER ─── */}
        <text x="72" y="16" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="600">① The Fiber</text>

        {/* Fiber body — long thin needle */}
        <polygon points="16,70 20,65 124,65 128,70 124,75 20,75" fill="#94a3b8" />
        {/* Needle tips (tapered) */}
        <polygon points="20,65 9,70 20,75" fill="#cbd5e1" />
        <polygon points="124,65 135,70 124,75" fill="#cbd5e1" />

        {/* Dimension bracket */}
        <line x1="9" y1="82" x2="135" y2="82" stroke="#475569" strokeWidth="0.7" />
        <line x1="9" y1="78" x2="9" y2="86" stroke="#475569" strokeWidth="0.7" />
        <line x1="135" y1="78" x2="135" y2="86" stroke="#475569" strokeWidth="0.7" />
        <text x="72" y="97" textAnchor="middle" fill="#64748b" fontSize="9">~5–20 µm long</text>

        <text x="72" y="116" textAnchor="middle" fill="#94a3b8" fontSize="9">Silicate stone · needle-shaped</text>
        <text x="72" y="130" textAnchor="middle" fill="#94a3b8" fontSize="9">Small enough to reach deep lung</text>
        <text x="72" y="144" textAnchor="middle" fill="#94a3b8" fontSize="9">tissue but rigid — won't dissolve</text>

        {/* Arrow 1 → 2 */}
        <path d="M152,70 L182,70" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr21)" />
        <text x="167" y="63" textAnchor="middle" fill="#64748b" fontSize="9">inhaled</text>

        {/* ─── PANEL 2: MACROPHAGE FAILS ─── */}
        <text x="300" y="16" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="600">② Immune Cell Can't Close</text>

        {/* Macrophage — blue dashed circle (immune cell membrane) */}
        <circle cx="300" cy="72" r="42" fill="#0c1e38" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="6,3" />
        {/* Nucleus */}
        <ellipse cx="300" cy="72" rx="15" ry="12" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="1" />

        {/* Fiber passing THROUGH macrophage — too long, sticks out both sides */}
        <polygon points="220,67 224,63 380,63 384,67 380,71 224,71" fill="#94a3b8" opacity="0.95" />
        <polygon points="224,63 213,67 224,71" fill="#cbd5e1" opacity="0.95" />
        <polygon points="380,63 391,67 380,71" fill="#cbd5e1" opacity="0.95" />

        {/* ✕ marks where fiber exits cell — can't close here */}
        <text x="221" y="58" textAnchor="middle" fill="#ef4444" fontSize="15" fontWeight="bold">✕</text>
        <text x="379" y="58" textAnchor="middle" fill="#ef4444" fontSize="15" fontWeight="bold">✕</text>

        {/* Labels */}
        <text x="300" y="126" textAnchor="middle" fill="#94a3b8" fontSize="9">Macrophage wraps around fiber</text>
        <text x="300" y="139" textAnchor="middle" fill="#94a3b8" fontSize="9">but fiber is too long — membrane</text>
        <text x="300" y="152" textAnchor="middle" fill="#fca5a5" fontSize="9" fontWeight="600">cannot seal. Stuck open. Forever.</text>

        {/* Arrow 2 → 3 */}
        <path d="M408,70 L434,70" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr21)" />
        <text x="421" y="58" textAnchor="middle" fill="#64748b" fontSize="8">months</text>
        <text x="421" y="68" textAnchor="middle" fill="#64748b" fontSize="8">to years</text>

        {/* ─── PANEL 3: CHRONIC INFLAMMATION → CANCER ─── */}
        <text x="560" y="16" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="600">③ Constant Inflammation</text>

        {/* Same macrophage — now glowing orange/red (activated, frustrated) */}
        <circle cx="545" cy="72" r="38" fill="#1a0800" stroke="#f97316" strokeWidth="1.5" strokeDasharray="6,3" />
        <ellipse cx="545" cy="72" rx="13" ry="11" fill="#3d1200" stroke="#f97316" strokeWidth="1" />

        {/* Fiber still stuck through */}
        <polygon points="474,67 478,63 616,63 620,67 616,71 478,71" fill="#94a3b8" opacity="0.9" />
        <polygon points="478,63 467,67 478,71" fill="#cbd5e1" opacity="0.9" />
        <polygon points="616,63 627,67 616,71" fill="#cbd5e1" opacity="0.9" />

        {/* Inflammation signals radiating out — dots and sparks */}
        <circle cx="545" cy="22" r="4" fill="#f97316" opacity="0.9" filter="url(#glow21)" />
        <circle cx="570" cy="30" r="3" fill="#ef4444" opacity="0.8" filter="url(#glow21)" />
        <circle cx="520" cy="27" r="3" fill="#f97316" opacity="0.7" filter="url(#glow21)" />
        <circle cx="588" cy="48" r="2.5" fill="#fbbf24" opacity="0.7" filter="url(#glow21)" />
        <circle cx="502" cy="44" r="2.5" fill="#f97316" opacity="0.7" filter="url(#glow21)" />
        <circle cx="545" cy="122" r="4" fill="#f97316" opacity="0.9" filter="url(#glow21)" />
        <circle cx="568" cy="114" r="3" fill="#ef4444" opacity="0.8" filter="url(#glow21)" />
        <circle cx="522" cy="116" r="3" fill="#f97316" opacity="0.7" filter="url(#glow21)" />
        <circle cx="590" cy="100" r="2" fill="#fbbf24" opacity="0.6" filter="url(#glow21)" />
        <circle cx="500" cy="98" r="2" fill="#f97316" opacity="0.6" filter="url(#glow21)" />

        {/* Labels for signals */}
        <text x="600" y="32" fill="#fb923c" fontSize="8">immune</text>
        <text x="600" y="42" fill="#fb923c" fontSize="8">signals</text>

        {/* Cancer outcome */}
        <text x="560" y="139" textAnchor="middle" fill="#fca5a5" fontSize="9">Cell keeps signalling · DNA damages</text>
        <text x="560" y="153" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="700">→ Mesothelioma / Lung cancer</text>
      </svg>
    </div>
  )
}

export default function Slide21() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-rose-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-900/40 border border-rose-700/50 text-rose-300 text-xs font-medium mb-5 uppercase tracking-widest">
          Paradox 3 — Asbestos
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 leading-tight">
          When the Seed Grows
        </h2>
        <p className="text-slate-400 mb-6">
          Asbestos was called a miracle material — fireproof, cheap, everywhere. But the way it kills is embedded in its physics.
        </p>

        {/* The mechanism visual */}
        <AsbestosVisual />

        {/* Bridge to the business story */}
        <div className="rounded-xl border border-rose-800/40 bg-rose-950/20 p-4 mt-5">
          <p className="text-rose-300 text-sm leading-relaxed">
            Companies had internal documents confirming this mechanism by the <strong className="text-white">1930s</strong>.
            They continued selling for <strong className="text-white">40+ more years</strong>.
            The financial model made honesty economically irrational.
          </p>
        </div>
      </div>
    </div>
  )
}

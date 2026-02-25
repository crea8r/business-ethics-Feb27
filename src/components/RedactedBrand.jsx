/**
 * Redacted case file brand treatment.
 * Signals "real company, real story" with discretion.
 * The instructor can name it verbally — the slide doesn't have to.
 */
export default function RedactedBrand({ compact = false }) {
  if (compact) {
    return (
      <span className="inline-flex items-center gap-2 font-mono text-sm">
        <span className="inline-block h-4 w-20 bg-slate-300 rounded-sm align-middle opacity-90" />
        <span className="inline-block h-4 w-14 bg-slate-300 rounded-sm align-middle opacity-90" />
      </span>
    )
  }

  return (
    <div className="relative inline-block">
      {/* Rotated stamp */}
      <div className="absolute -top-3 -right-3 rotate-12 border-2 border-red-500/80 text-red-500 text-[10px] font-mono font-bold px-2 py-0.5 rounded tracking-widest select-none z-10">
        PERSONAL ACCOUNT
      </div>

      {/* Case file card */}
      <div className="rounded-xl border border-slate-600/60 bg-slate-900/80 p-6 font-mono min-w-72">
        {/* Header row */}
        <div className="flex items-center gap-2 mb-5">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-red-400 text-xs uppercase tracking-widest font-bold">
            Case Study · First-Hand
          </span>
        </div>

        {/* Redacted company name */}
        <div className="flex items-center gap-3 mb-1">
          <div className="h-7 w-32 bg-slate-200 rounded-[2px] shadow-sm" />
          <div className="h-7 w-24 bg-slate-200 rounded-[2px] shadow-sm" />
        </div>
        <div className="text-slate-600 text-[10px] uppercase tracking-widest mb-5">
          Company name redacted
        </div>

        {/* Metadata — enough to jog memory, not enough to Google accidentally */}
        <div className="space-y-1.5 text-xs border-t border-slate-700/60 pt-4">
          <div className="flex justify-between gap-4">
            <span className="text-slate-600">Sector</span>
            <span className="text-slate-400">English EdTech</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-slate-600">Market</span>
            <span className="text-slate-400">Vietnam · ca. 2013</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-slate-600">Peak revenue</span>
            <span className="text-slate-400">$1–2M USD / month</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-slate-600">Source</span>
            <span className="text-emerald-500">Instructor · first-hand</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const rows = [
  { dim: 'Goal', sme: 'Sustainable profit now', startup: 'Rapid scale, future exit' },
  { dim: 'Revenue model', sme: 'Revenue must exceed cost', startup: 'Growth rate trumps margin' },
  { dim: 'Growth speed', sme: 'Steady, sustainable', startup: 'As fast as capital allows' },
  { dim: 'Profit', sme: 'Expected from year 1–2', startup: 'Often negative for years' },
  { dim: 'Success metric', sme: 'Net profit, dividend yield', startup: 'User growth, ARR, market share' },
  { dim: 'Who wins', sme: 'The owner', startup: 'The last investor in' },
  { dim: 'Exit strategy', sme: 'Pass to family or sell at PE', startup: 'M&A or IPO' },
]

export default function Slide06() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="relative z-10 max-w-3xl w-full">
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium mb-6 text-center">
          The comparison
        </p>

        <div className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 px-6 py-3 bg-slate-800/60 text-xs uppercase tracking-widest font-medium">
            <div className="text-slate-500">Dimension</div>
            <div className="text-emerald-400">SME</div>
            <div className="text-indigo-400">Startup</div>
          </div>
          {/* Rows */}
          <div className="divide-y divide-slate-800/50">
            {rows.map(({ dim, sme, startup }) => (
              <div key={dim} className="grid grid-cols-3 px-6 py-3 gap-4">
                <div className="text-slate-500 text-sm font-medium">{dim}</div>
                <div className="text-emerald-300 text-sm">{sme}</div>
                <div className="text-indigo-300 text-sm">{startup}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

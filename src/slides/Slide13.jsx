// At 3,000 new enrollments/month → active students = 9,000
// Revenue = 3,000 × 7,000,000 = 21,000,000,000 VND
// Teacher cost = sessions_per_day × 30 × 210,000
//   At 1 session/day: 9,000 × 1 / 25 = 360 sessions/day → 360 × 30 × 210,000 = 2,268,000,000
//   At 5 sessions/day: 9,000 × 5 / 25 = 1,800 sessions/day → 1,800 × 30 × 210,000 = 11,340,000,000
// Fixed cost = 3,500,000,000
// Net at 1/day: 21B - 2.27B - 3.5B = 15.23B (72.5%)
// Net at 5/day: 21B - 11.34B - 3.5B = 6.16B (29.3%)

const scenarios = [
  {
    label: '1 session / day per student',
    sessionsPerDay: 360,
    teacherCost: '2,268,000,000 VND',
    netProfit: '15,232,000,000 VND',
    margin: '72.5%',
    color: 'border-emerald-800/50 bg-emerald-950/20',
    note: 'Students barely using the product',
  },
  {
    label: '5 sessions / day per student',
    sessionsPerDay: 1800,
    teacherCost: '11,340,000,000 VND',
    netProfit: '6,160,000,000 VND',
    margin: '29.3%',
    color: 'border-amber-800/50 bg-amber-950/20',
    note: 'Students using it moderately',
  },
  {
    label: '16 sessions / day per student',
    sessionsPerDay: 5760,
    teacherCost: '36,288,000,000 VND',
    netProfit: '−18,788,000,000 VND',
    margin: '−89.5%',
    color: 'border-rose-800/50 bg-rose-950/20',
    note: 'Students using full product → company bankrupt',
  },
]

export default function Slide13() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-rose-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl w-full">
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium mb-4">
          What the numbers reveal — 3,000 new enrollments/month
        </p>
        <p className="text-slate-500 text-sm mb-6">Revenue: 21,000,000,000 VND/month &nbsp;·&nbsp; Active students: 9,000 &nbsp;·&nbsp; Fixed costs: 3,500,000,000 VND</p>

        <div className="space-y-3 mb-8">
          {scenarios.map(({ label, teacherCost, netProfit, margin, color, note }) => (
            <div key={label} className={`rounded-xl border ${color} p-4 flex items-center justify-between gap-4 flex-wrap`}>
              <div>
                <div className="text-slate-200 font-semibold text-sm mb-0.5">{label}</div>
                <div className="text-slate-500 text-xs">Teacher cost: <span className="font-mono text-amber-400">{teacherCost}</span></div>
                <div className="text-slate-500 text-xs mt-0.5 italic">{note}</div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">Net profit</div>
                <div className={`font-bold text-lg font-mono ${netProfit.startsWith('−') ? 'text-rose-400' : 'text-emerald-400'}`}>{netProfit}</div>
                <div className="text-xs text-slate-400">{margin} margin</div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <p className="text-white text-xl font-bold leading-snug">
            "If students used what they paid for, the company goes bankrupt."
          </p>
          <p className="text-slate-400 text-base">
            The business model is only viable because students don't show up. That's not a coincidence — it's the design.
          </p>
        </div>
      </div>
    </div>
  )
}

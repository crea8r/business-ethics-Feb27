// Breakeven: price/(3 months) per student ÷ (teacher_cost / students_per_session) per session ÷ 30 days
// = 7,000,000 / 3 / (210,000/25) / 30 = 9.26 sessions/day

const rows = [
  { sessionsPerDay: 16, label: 'Every session, every day', teacherCostPerStudent: 16 * 30 * (210000 / 25), note: 'Company loses heavily' },
  { sessionsPerDay: 9,  label: 'Breakeven point',          teacherCostPerStudent: 9  * 30 * (210000 / 25), note: '≈ breakeven' },
  { sessionsPerDay: 3,  label: '3 sessions per day',       teacherCostPerStudent: 3  * 30 * (210000 / 25), note: 'Company profits' },
  { sessionsPerDay: 1,  label: 'Once a day',               teacherCostPerStudent: 1  * 30 * (210000 / 25), note: 'Very profitable' },
]

const price = 7_000_000
const pricePerMonth = price / 3

function fmt(n) {
  return Math.round(n).toLocaleString('en-US') + ' ₫'
}

export default function Slide11() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="relative z-10 max-w-3xl w-full">
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium mb-6">
          The cost model — the hidden truth
        </p>

        {/* The devastating math */}
        <div className="rounded-xl border border-rose-800/50 bg-rose-950/20 p-5 mb-6">
          <div className="text-rose-400 text-xs uppercase tracking-widest font-medium mb-2">If a student used the full product</div>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-white font-mono text-lg font-bold">16 sessions/day × 90 days × (210,000 ÷ 25 students)</span>
            <span className="text-slate-500">=</span>
            <span className="text-rose-400 font-mono text-2xl font-black">18,144,000 ₫</span>
          </div>
          <p className="text-slate-400 text-sm mt-2">
            Teacher cost per student at full usage: <strong className="text-white">18,144,000 VND</strong> — more than <strong className="text-rose-300">2.6× the enrollment price</strong> of 7,000,000 VND.
          </p>
        </div>

        {/* Breakeven table */}
        <div className="rounded-xl border border-slate-800 overflow-hidden mb-6">
          <div className="grid grid-cols-4 bg-slate-800/60 px-5 py-3 text-xs uppercase tracking-widest font-medium">
            <div className="text-slate-500">Sessions/day</div>
            <div className="text-amber-400">Cost/student/month</div>
            <div className="text-indigo-400">Revenue/student/month</div>
            <div className="text-slate-500">Outcome</div>
          </div>
          {rows.map(({ sessionsPerDay, label, teacherCostPerStudent, note }) => {
            const monthly = teacherCostPerStudent
            const isBreakeven = sessionsPerDay === 9
            const isLoss = monthly > pricePerMonth
            return (
              <div
                key={sessionsPerDay}
                className={`grid grid-cols-4 px-5 py-3 border-t border-slate-800/50 gap-2 ${isBreakeven ? 'bg-slate-800/40' : ''}`}
              >
                <div className="text-slate-300 text-sm">
                  <span className="font-semibold">{sessionsPerDay}</span>
                  <span className="text-slate-500 text-xs ml-1 block">{label}</span>
                </div>
                <div className={`font-mono text-sm font-bold ${isLoss ? 'text-rose-400' : 'text-amber-300'}`}>
                  {fmt(monthly)}
                </div>
                <div className="text-indigo-300 font-mono text-sm">{fmt(pricePerMonth)}</div>
                <div className={`text-xs ${isLoss ? 'text-rose-400' : isBreakeven ? 'text-slate-300' : 'text-emerald-400'}`}>
                  {note}
                </div>
              </div>
            )
          })}
        </div>

        {/* Key insight */}
        <div className="rounded-xl border border-amber-700/50 bg-amber-950/20 p-4">
          <p className="text-white font-bold text-lg leading-snug">
            The model is financially viable only if students attend fewer than ~9 sessions per day.
          </p>
          <p className="text-slate-400 text-sm mt-2">
            Students think they have unlimited access. The business depends on them not using it.
          </p>
        </div>
      </div>
    </div>
  )
}

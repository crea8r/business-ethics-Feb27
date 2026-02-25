const scenarios = [
  { students: 100, revenue: '700,000,000 VND' },
  { students: 1000, revenue: '7,000,000,000 VND' },
  { students: 3000, revenue: '21,000,000,000 VND' },
]

export default function Slide10() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="relative z-10 max-w-2xl w-full">
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium mb-8">
          The revenue model
        </p>

        {/* Operational assumption */}
        <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-5 mb-6">
          <div className="text-slate-500 text-xs uppercase tracking-widest font-medium mb-2">Operational assumption</div>
          <p className="text-slate-200 font-medium">Number of students enrolled per month</p>
        </div>

        {/* Formula */}
        <div className="flex items-center gap-3 mb-8 flex-wrap">
          <div className="px-4 py-2 rounded-lg bg-indigo-950/60 border border-indigo-800/50 text-indigo-300 font-mono text-sm">
            Students
          </div>
          <span className="text-slate-500">×</span>
          <div className="px-4 py-2 rounded-lg bg-indigo-950/60 border border-indigo-800/50 text-indigo-300 font-mono text-sm">
            7,000,000 VND
          </div>
          <span className="text-slate-500">=</span>
          <div className="px-4 py-2 rounded-lg bg-emerald-950/60 border border-emerald-800/50 text-emerald-300 font-mono text-sm font-bold">
            Revenue
          </div>
        </div>

        {/* Table */}
        <div className="rounded-xl border border-slate-800 overflow-hidden mb-8">
          <div className="grid grid-cols-2 bg-slate-800/60 px-6 py-3 text-xs uppercase tracking-widest font-medium">
            <div className="text-slate-500">Students</div>
            <div className="text-indigo-400">Revenue</div>
          </div>
          {scenarios.map(({ students, revenue }) => (
            <div key={students} className="grid grid-cols-2 px-6 py-4 border-t border-slate-800/50">
              <div className="text-slate-300 font-medium">{students.toLocaleString()}</div>
              <div className="text-emerald-400 font-mono text-sm">{revenue}</div>
            </div>
          ))}
        </div>

        <p className="text-slate-400 text-base">
          Revenue is simple. It's a function of one number:{' '}
          <span className="text-white font-semibold">how many students sign up.</span>
        </p>
      </div>
    </div>
  )
}

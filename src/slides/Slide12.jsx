import FinancialTool from '../components/FinancialTool.jsx'

export default function Slide12() {
  return (
    <div className="h-screen w-full flex flex-col p-8 lg:p-16 relative bg-slate-950 overflow-y-auto">
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-900/40 border border-violet-700/50 text-violet-300 text-xs font-medium uppercase tracking-widest">
            Interactive Tool
          </div>
          <p className="text-slate-400 text-sm">Build the projection yourself</p>
        </div>

        {/* The tool */}
        <FinancialTool />
      </div>
    </div>
  )
}

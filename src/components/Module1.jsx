function SectionDivider() {
  return <div className="my-8 border-t border-slate-800" />
}

function ComparisonRow({ label, sme, startup }) {
  return (
    <div className="grid grid-cols-3 gap-4 py-4 border-b border-slate-800 last:border-0">
      <div className="text-slate-400 text-sm font-medium">{label}</div>
      <div className="text-emerald-400 text-sm">{sme}</div>
      <div className="text-indigo-400 text-sm">{startup}</div>
    </div>
  )
}

export default function Module1() {
  return (
    <div className="min-h-screen px-4 py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-emerald-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-indigo-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative">
        {/* Module label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-xs font-medium mb-6 uppercase tracking-widest">
          Module 1 of 3
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
          Startup vs SME
        </h2>
        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
          The same product. The same market. Two completely different financial logics — and two completely different versions of you.
        </p>

        {/* Two-column intro cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          <div className="rounded-xl border border-emerald-800/50 bg-emerald-950/30 p-6">
            <div className="text-emerald-500 font-black text-2xl mb-1">SME</div>
            <div className="text-emerald-300 text-xs uppercase tracking-widest font-medium mb-4">Small & Medium Enterprise</div>
            <p className="text-slate-300 text-sm leading-relaxed">
              You make a product. Customers pay. Revenue comes in, costs go out, profit remains. You take that profit as dividend — <strong className="text-white">today</strong>. You are extracting value from the present.
            </p>
            <div className="mt-4 rounded-lg bg-emerald-950/50 border border-emerald-900 p-3">
              <div className="text-emerald-400 text-sm font-mono">Revenue → Profit → Dividend</div>
              <div className="text-slate-500 text-xs mt-1">You extract value TODAY</div>
            </div>
          </div>

          <div className="rounded-xl border border-indigo-800/50 bg-indigo-950/30 p-6">
            <div className="text-indigo-400 font-black text-2xl mb-1">Startup</div>
            <div className="text-indigo-300 text-xs uppercase tracking-widest font-medium mb-4">Venture-Backed Company</div>
            <p className="text-slate-300 text-sm leading-relaxed">
              You burn cash now — aggressively — to capture market share. You do not plan to profit this year, or next year. Your exit is M&A or IPO. You are selling <strong className="text-white">tomorrow</strong>.
            </p>
            <div className="mt-4 rounded-lg bg-indigo-950/50 border border-indigo-900 p-3">
              <div className="text-indigo-400 text-sm font-mono">Burn → Scale → Exit</div>
              <div className="text-slate-500 text-xs mt-1">You sell value TOMORROW</div>
            </div>
          </div>
        </div>

        <SectionDivider />

        {/* Comparison table */}
        <h3 className="text-white text-xl font-semibold mb-6">How the logic differs</h3>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden mb-12">
          <div className="grid grid-cols-3 gap-4 px-6 py-3 bg-slate-800/50 text-xs uppercase tracking-widest font-medium">
            <div className="text-slate-500">Dimension</div>
            <div className="text-emerald-500">SME</div>
            <div className="text-indigo-400">Startup</div>
          </div>
          <div className="px-6">
            <ComparisonRow
              label="Primary goal"
              sme="Sustainable profit now"
              startup="Rapid scale, future exit"
            />
            <ComparisonRow
              label="Revenue logic"
              sme="Revenue must exceed cost"
              startup="Growth rate trumps margin"
            />
            <ComparisonRow
              label="Capital source"
              sme="Owner equity, bank loans"
              startup="Venture capital, angels"
            />
            <ComparisonRow
              label="Time horizon"
              sme="Months to years"
              startup="5–10 years to exit"
            />
            <ComparisonRow
              label="Success metric"
              sme="Net profit, dividend yield"
              startup="User growth, market share, ARR"
            />
            <ComparisonRow
              label="Who you answer to"
              sme="Yourself, the bank"
              startup="Investors, board, the model"
            />
            <ComparisonRow
              label="Risk tolerance"
              sme="Conservative — you lose real money"
              startup="High — it's mostly other people's money"
            />
          </div>
        </div>

        <SectionDivider />

        {/* Narrative section */}
        <div className="space-y-6 mb-12">
          <h3 className="text-white text-xl font-semibold">Why it matters that they look the same</h3>
          <p className="text-slate-300 leading-relaxed">
            Imagine two coffee shops opening on the same street. Same espresso machine, same beans, same menu, same price.
            One owner plans to build a cozy local business — serve great coffee, pay the staff well, take home a good salary. The other has raised seed funding and wants to franchise to 500 locations in 3 years.
          </p>
          <p className="text-slate-300 leading-relaxed">
            From the outside, they look identical on day one. But their financial logic is completely different. The SME owner will make decisions that maximize <em>today's</em> quality and margin. The startup founder will make decisions that maximize <em>tomorrow's</em> scalability and investor narrative — even when that means sacrificing quality today.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Those different logics lead to different hiring decisions, different product decisions, different ethical decisions. The model you choose before you open your doors shapes every single choice you will make afterwards.
          </p>
        </div>

        {/* Key transition callout */}
        <div className="rounded-2xl border border-indigo-700/50 bg-indigo-950/40 p-8 mb-12">
          <div className="text-indigo-400 text-xs uppercase tracking-widest font-medium mb-4">The transition line</div>
          <blockquote className="text-xl sm:text-2xl font-medium text-white leading-relaxed">
            "If you want to build a startup, you need to sell the future.
            <span className="text-indigo-400"> The future's only concrete form is the financial projection."</span>
          </blockquote>
          <p className="mt-4 text-slate-400 text-sm leading-relaxed">
            A projection is not a prediction. It is a story about what you believe is possible — rendered in numbers so that other people will give you money to make it real. And that story, as we are about to see, has consequences.
          </p>
        </div>

        {/* Key takeaway */}
        <div className="rounded-xl bg-slate-900 border border-slate-700 p-6">
          <div className="text-slate-500 text-xs uppercase tracking-widest font-medium mb-3">Key Takeaway</div>
          <ul className="space-y-3">
            {[
              'SMEs extract value from the present. Startups sell the future.',
              'The same product, under different financial models, produces different decisions.',
              'Choosing a model is not just a financial choice — it is a values choice.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

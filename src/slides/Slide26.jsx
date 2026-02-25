export default function Slide26() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="relative z-10 max-w-2xl w-full text-center">
        <p className="text-slate-500 text-xs uppercase tracking-widest font-medium mb-12">
          Discussion Question 1 of 2
        </p>

        {/* Big question */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-16">
          Which of the three paradoxes surprised you most — and why?
        </h2>

        {/* Space / light prompt */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-6">
          <p className="text-slate-500 text-sm leading-relaxed">
            Is it because you use that product? Because you'd build something similar? Because you never thought about it that way?
          </p>
        </div>
      </div>
    </div>
  )
}

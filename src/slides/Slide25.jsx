export default function Slide25() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-indigo-900/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium mb-10">
          Now It's Your Turn
        </p>

        {/* Reframe */}
        <div className="space-y-5 mb-10">
          <p className="text-2xl text-slate-400 leading-relaxed">
            You came in today thinking:{' '}
            <span className="text-white italic">I just want to make money.</span>
          </p>
          <p className="text-2xl text-slate-300 leading-relaxed">
            You've now seen: the model you choose determines who benefits, who is harmed, and — slowly — who you become.
          </p>
        </div>

        <p className="text-white text-2xl font-bold mb-10">Let's discuss.</p>

        {/* Instruction */}
        <div className="rounded-xl border border-indigo-700/50 bg-indigo-950/30 p-6">
          <p className="text-indigo-300 font-medium">
            Form groups of 4–5. &nbsp;10 minutes. Then we share.
          </p>
        </div>
      </div>
    </div>
  )
}

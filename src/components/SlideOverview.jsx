import { useEffect } from 'react'

export default function SlideOverview({ slides, currentSlide, onJump, onClose }) {
  // Close on Escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-sm flex flex-col"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 shrink-0">
        <div>
          <h2 className="text-white font-semibold text-base">Slide Overview</h2>
          <p className="text-slate-500 text-xs mt-0.5">{slides.length} slides total</p>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white transition-colors text-2xl leading-none px-2"
          aria-label="Close overview"
        >
          ×
        </button>
      </div>

      {/* Scrollable grid */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {slides.map((slide, index) => {
            const isActive = index === currentSlide
            return (
              <button
                key={slide.id}
                onClick={() => { onJump(index); onClose() }}
                className={`text-left rounded-xl border p-4 transition-all duration-150 group ${
                  isActive
                    ? 'border-indigo-500 bg-indigo-950/60 ring-1 ring-indigo-500/50'
                    : 'border-slate-800 bg-slate-900/40 hover:border-slate-600 hover:bg-slate-800/60'
                }`}
              >
                {/* Slide number */}
                <div className={`text-xs font-mono font-bold mb-2 ${isActive ? 'text-indigo-400' : 'text-slate-600 group-hover:text-slate-400'}`}>
                  {String(index + 1).padStart(2, '0')} / {slides.length}
                </div>
                {/* Slide title */}
                <div className={`text-sm font-medium leading-snug ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                  {slide.title}
                </div>
                {/* Active indicator */}
                {isActive && (
                  <div className="mt-2 text-indigo-400 text-xs">Current slide</div>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Footer hint */}
      <div className="shrink-0 px-6 py-3 border-t border-slate-800 text-center text-slate-600 text-xs">
        Press <kbd className="bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-slate-400 text-xs font-mono">O</kbd> or{' '}
        <kbd className="bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-slate-400 text-xs font-mono">Esc</kbd> to close
      </div>
    </div>
  )
}

// Grid icon (SVG) for overview toggle
function GridIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="1" y="1" width="6" height="6" rx="1" fill="currentColor" opacity="0.8"/>
      <rect x="9" y="1" width="6" height="6" rx="1" fill="currentColor" opacity="0.8"/>
      <rect x="1" y="9" width="6" height="6" rx="1" fill="currentColor" opacity="0.8"/>
      <rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor" opacity="0.8"/>
    </svg>
  )
}

export default function Nav({
  slideTitle,
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onOverview,
}) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-950/90 backdrop-blur-sm border-b border-slate-800 h-11 flex items-center px-3 gap-3">
      {/* Slide title — left side, truncate if needed */}
      <div className="flex-1 min-w-0">
        <p className="text-slate-400 text-xs font-medium truncate" title={slideTitle}>
          {slideTitle}
        </p>
      </div>

      {/* Navigation controls — center-ish */}
      <div className="flex items-center gap-1 shrink-0">
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="w-7 h-7 rounded-md flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Previous slide"
        >
          <span className="text-sm leading-none">‹</span>
        </button>

        {/* Counter */}
        <div className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono font-semibold min-w-[4.5rem] text-center">
          {currentSlide + 1} / {totalSlides}
        </div>

        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="w-7 h-7 rounded-md flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Next slide"
        >
          <span className="text-sm leading-none">›</span>
        </button>
      </div>

      {/* Overview button — right side */}
      <button
        onClick={onOverview}
        className="w-7 h-7 rounded-md flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
        aria-label="Slide overview (O)"
        title="Overview (O)"
      >
        <GridIcon />
      </button>
    </nav>
  )
}

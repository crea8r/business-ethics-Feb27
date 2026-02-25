import { useState, useEffect, useCallback, useRef } from 'react'
import Nav from './components/Nav.jsx'
import SlideOverview from './components/SlideOverview.jsx'
import slides from './slides/slides.jsx'

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [overviewOpen, setOverviewOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const transitionRef = useRef(false)
  const totalSlides = slides.length

  // Fade-transition helper
  const goToSlide = useCallback((index) => {
    if (index < 0 || index >= totalSlides) return
    if (transitionRef.current) return
    transitionRef.current = true
    setVisible(false)
    setTimeout(() => {
      setCurrentSlide(index)
      setVisible(true)
      transitionRef.current = false
    }, 200)
  }, [totalSlides])

  const goNext = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide])
  const goPrev = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      // Don't intercept when overview is open (handled by SlideOverview)
      if (overviewOpen) return
      // Don't intercept when focus is on an input/textarea/select
      const tag = document.activeElement?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        goPrev()
      } else if (e.key === ' ') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'o' || e.key === 'O') {
        e.preventDefault()
        setOverviewOpen(true)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [goNext, goPrev, overviewOpen])

  const slide = slides[currentSlide]
  const SlideComponent = slide.component

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen" style={{ height: '100dvh', overflow: 'hidden' }}>
      {/* Top navigation bar */}
      <Nav
        slideTitle={slide.title}
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={goPrev}
        onNext={goNext}
        onOverview={() => setOverviewOpen(true)}
      />

      {/* Slide content — below nav bar, fills remaining viewport */}
      <div
        style={{
          paddingTop: '44px', // nav height
          height: '100dvh',
          transition: 'opacity 0.2s ease',
          opacity: visible ? 1 : 0,
        }}
      >
        <SlideComponent />
      </div>

      {/* Overview panel */}
      {overviewOpen && (
        <SlideOverview
          slides={slides}
          currentSlide={currentSlide}
          onJump={goToSlide}
          onClose={() => setOverviewOpen(false)}
        />
      )}
    </div>
  )
}

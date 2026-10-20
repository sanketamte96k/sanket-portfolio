import { useEffect, useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import './IntroLoader.css'

export interface IntroLoaderProps {
  /**
   * Fired when the intro sequence finishes its progress and begins
   * smoothly fading/sliding away. Ideal for triggering hero entrance animations.
   */
  onStartExit?: () => void
  /**
   * Fired when the overlay has completely faded out and is ready to be unmounted.
   */
  onComplete?: () => void
}

export default function IntroLoader({ onStartExit, onComplete }: IntroLoaderProps) {
  const shouldReduceMotion = useReducedMotion()
  const [isVisible, setIsVisible] = useState(true)
  const [isExiting, setIsExiting] = useState(false)
  const hasTriggeredExitRef = useRef(false)
  const hasCompletedRef = useRef(false)

  const triggerExit = useCallback(() => {
    if (hasTriggeredExitRef.current) return
    hasTriggeredExitRef.current = true
    setIsExiting(true)
    onStartExit?.()
  }, [onStartExit])

  const finishIntro = useCallback(() => {
    if (hasCompletedRef.current) return
    hasCompletedRef.current = true
    setIsVisible(false)
    onComplete?.()
  }, [onComplete])

  const handleSkip = useCallback(() => {
    triggerExit()
    // For manual skip, allow brief 200ms fade or immediate unmount
    setTimeout(finishIntro, 200)
  }, [triggerExit, finishIntro])

  const isPreviewMode =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).get('previewIntro') === 'true'

  // Coordinate timing sequence and safety fallback
  useEffect(() => {
    // If preview mode is requested, keep overlay open indefinitely for review
    if (isPreviewMode) return

    // If the user prefers reduced motion, complete almost instantly
    if (shouldReduceMotion) {
      triggerExit()
      const instantTimer = setTimeout(finishIntro, 60)
      return () => clearTimeout(instantTimer)
    }

    // Lock page scroll and prevent interaction with elements behind overlay
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Keyboard shortcut to skip: Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleSkip()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    // Cinematic sequence timing:
    // 0.0s - 1.85s: reveal monogram, typography, light sweep, and progress line
    // 1.85s: begin exit fade & reveal hero
    const exitTimer = setTimeout(() => {
      triggerExit()
    }, 1850)

    // Complete transition and unmount after overlay exit animation finishes
    const finishTimer = setTimeout(() => {
      finishIntro()
    }, 2400)

    // Hard safety watchdog timer (never trap visitor on intro)
    const safetyTimer = setTimeout(() => {
      triggerExit()
      finishIntro()
    }, 2900)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(finishTimer)
      clearTimeout(safetyTimer)
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [isPreviewMode, shouldReduceMotion, triggerExit, finishIntro, handleSkip])

  return (
    <AnimatePresence onExitComplete={finishIntro}>
      {isVisible && (
        <motion.aside
          className="intro-overlay"
          aria-label="Website entrance animation"
          role="status"
          aria-live="polite"
          initial={{ opacity: 1 }}
          animate={isExiting ? { opacity: 0, y: shouldReduceMotion ? 0 : -20 } : { opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : -24,
            transition: {
              duration: shouldReduceMotion ? 0.05 : 0.55,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
          transition={{
            duration: isExiting ? (shouldReduceMotion ? 0.05 : 0.55) : 0,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* Atmospheric Ambient Lighting & Pattern */}
          <div className="intro-ambient" aria-hidden="true">
            <div className="intro-glow intro-glow-violet" />
            <div className="intro-glow intro-glow-blue" />
            <div className="intro-glow intro-glow-center" />
            <div className="intro-grid-pattern" />
          </div>

          {/* Center Luxury Card / Stage */}
          <motion.div
            className="intro-stage"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0.05 : 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Hairline Editorial Corner Accents */}
            <span className="intro-corner intro-corner-tl" aria-hidden="true" />
            <span className="intro-corner intro-corner-tr" aria-hidden="true" />
            <span className="intro-corner intro-corner-bl" aria-hidden="true" />
            <span className="intro-corner intro-corner-br" aria-hidden="true" />

            {/* Restrained Specular Light Sweep across the stage */}
            <div className="intro-sweep-track" aria-hidden="true">
              <motion.div
                className="intro-sweep-beam"
                initial={{ left: '-30%', opacity: 0 }}
                animate={{
                  left: ['-30%', '130%'],
                  opacity: [0, 0.85, 0],
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 1.35,
                  delay: shouldReduceMotion ? 0 : 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              />
            </div>

            {/* 1. Brand Monogram "SA" */}
            <motion.div
              className="intro-monogram-container"
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.88, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.05 : 0.6,
                delay: shouldReduceMotion ? 0 : 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="intro-monogram-box">
                <span className="intro-monogram-text">SA</span>
                <div className="intro-monogram-glow" aria-hidden="true" />
              </div>
            </motion.div>

            {/* 2 & 3. Typography: "SANKET AMTE" & "JAVA FULL STACK DEVELOPER" */}
            <div className="intro-typography">
              <span className="intro-name-line">
                <motion.h1
                  className="intro-name"
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.05 : 0.65,
                    delay: shouldReduceMotion ? 0 : 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  SANKET AMTE
                </motion.h1>
              </span>

              <span className="intro-role-line">
                <motion.div
                  className="intro-role"
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.05 : 0.55,
                    delay: shouldReduceMotion ? 0 : 0.55,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <span className="intro-role-dot" aria-hidden="true" />
                  <span>JAVA FULL STACK DEVELOPER</span>
                  <span className="intro-role-dot" aria-hidden="true" />
                </motion.div>
              </span>
            </div>

            {/* 4. Thin Electric-Blue Progress Line */}
            <div className="intro-progress-wrapper" aria-hidden="true">
              <div className="intro-progress-bar">
                <motion.div
                  className="intro-progress-line"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{
                    duration: shouldReduceMotion ? 0.05 : 1.4,
                    delay: shouldReduceMotion ? 0 : 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="intro-progress-spark" />
                </motion.div>
              </div>

              {/* Status beacon indicator */}
              <motion.div
                className="intro-status"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{
                  duration: shouldReduceMotion ? 0.05 : 0.45,
                  delay: shouldReduceMotion ? 0 : 0.65,
                }}
              >
                <span className="intro-status-beacon" />
                <span>INITIALIZING PORTFOLIO</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Accessible Skip Button */}
          <button
            type="button"
            className="intro-skip-btn"
            onClick={handleSkip}
            aria-label="Skip entrance animation"
          >
            Skip Intro
          </button>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}

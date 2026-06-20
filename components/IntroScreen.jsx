'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FULL_NAME = 'Shathursima Raveendran'
const TYPE_SPEED = 65   // ms per character
const PAUSE_AFTER = 700 // ms pause after full name typed

export default function IntroScreen({ onDone }) {
  const [displayed, setDisplayed] = useState('')
  const [showButton, setShowButton] = useState(false)
  const [visible, setVisible] = useState(true)
  const [isTouch, setIsTouch] = useState(false)

  // Detect touch device
  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches)
  }, [])

  // Typewriter effect
  useEffect(() => {
    if (displayed.length < FULL_NAME.length) {
      const t = setTimeout(() => {
        setDisplayed(FULL_NAME.slice(0, displayed.length + 1))
      }, TYPE_SPEED)
      return () => clearTimeout(t)
    } else {
      // Name fully typed — pause then reveal button
      const t = setTimeout(() => setShowButton(true), PAUSE_AFTER)
      return () => clearTimeout(t)
    }
  }, [displayed])

  const handleEnter = useCallback(() => {
    if (!showButton) return
    sessionStorage.setItem('introSeen', '1')
    setVisible(false)
    // Give the exit animation time to complete before calling onDone
    setTimeout(onDone, 750)
  }, [showButton, onDone])

  // Keyboard "Enter" to proceed
  useEffect(() => {
    if (!showButton) return
    const handler = (e) => {
      if (e.key === 'Enter') handleEnter()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [showButton, handleEnter])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 3000,
            background: 'var(--bg)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          {/* Subtle noise texture overlay */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse at 50% 50%, rgba(0,168,150,0.06) 0%, transparent 65%)',
          }} />

          {/* Terminal card */}
          <div style={{
            maxWidth: 640,
            width: '100%',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            overflow: 'hidden',
            boxShadow: '0 0 60px rgba(0,168,150,0.08), 0 0 120px rgba(0,168,150,0.04)',
          }}>
            {/* Terminal title bar */}
            <div style={{
              background: 'var(--surface2)',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              borderBottom: '1px solid var(--border)',
            }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 11,
                color: 'var(--muted)', marginLeft: 8, letterSpacing: 1,
              }}>portfolio.sh — zsh</span>
            </div>

            {/* Terminal body */}
            <div style={{ padding: '40px 32px 44px', minHeight: 220 }}>
              {/* System boot line */}
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 12,
                color: 'var(--muted)', marginBottom: 24, letterSpacing: 1,
              }}>
                <span style={{ color: 'var(--accent2)' }}>System</span> boot complete · Welcome
              </div>

              {/* Prompt + typed name */}
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(20px, 5vw, 32px)',
                lineHeight: 1.2,
                letterSpacing: 1,
                marginBottom: 8,
                display: 'flex',
                alignItems: 'baseline',
                flexWrap: 'wrap',
                gap: 4,
              }}>
                {/* ~/  prompt  */}
                <span style={{ color: 'var(--accent)', opacity: 0.75 }}>~/</span>
                <span style={{ color: 'var(--muted)', marginRight: 12 }}>$</span>
                <span style={{ color: 'var(--text)', fontWeight: 500 }}>{displayed}</span>
                {/* Blinking cursor */}
                <span style={{
                  display: 'inline-block',
                  width: 3,
                  height: '1.1em',
                  background: 'var(--accent)',
                  animation: 'blink 1s step-end infinite',
                  verticalAlign: 'middle',
                  marginLeft: 2,
                  borderRadius: 1,
                }} />
              </div>

              {/* CTA — fades in after name is typed */}
              <div style={{
                marginTop: 36,
                opacity: showButton ? 1 : 0,
                transform: showButton ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
              }}>
                {/* "press enter" hint — desktop only */}
                {!isTouch && (
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 12,
                    color: 'var(--muted)', marginBottom: 20,
                    letterSpacing: 1,
                  }}>
                    <span style={{ color: 'var(--accent)' }}>&gt;</span>
                    {' press '}
                    <kbd style={{
                      display: 'inline-block',
                      background: 'var(--surface2)',
                      border: '1px solid var(--border)',
                      padding: '1px 6px',
                      borderRadius: 3,
                      fontSize: 11,
                      color: 'var(--text)',
                    }}>Enter</kbd>
                    {' or click below to continue'}
                  </div>
                )}

                {/* Button */}
                <button
                  onClick={handleEnter}
                  disabled={!showButton}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 13,
                    letterSpacing: 2,
                    textTransform: 'uppercase',
                    color: 'var(--bg)',
                    background: 'var(--accent)',
                    border: '1px solid var(--accent)',
                    padding: '14px 36px',
                    borderRadius: 4,
                    cursor: showButton ? 'pointer' : 'default',
                    transition: 'all 0.3s ease',
                    fontWeight: 600,
                    minHeight: 48,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 0 28px rgba(0,168,150,0.55), 0 0 60px rgba(0,168,150,0.2)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.transform = 'none'
                  }}
                >
                  Enter Portfolio →
                </button>
              </div>
            </div>
          </div>

          {/* Corner version tag */}
          <div style={{
            position: 'absolute', bottom: 24, right: 24,
            fontFamily: 'var(--font-mono)', fontSize: 10,
            color: 'var(--border)', letterSpacing: 2,
          }}>v2.0</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

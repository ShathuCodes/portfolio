'use client'
import { useRef, useCallback } from 'react'

export default function ProfileCard() {
  const cardRef = useRef(null)
  const rafRef = useRef(null)

  // Detect touch device
  const isTouch = typeof window !== 'undefined'
    ? window.matchMedia('(pointer: coarse)').matches
    : false

  const handleMouseMove = useCallback((e) => {
    if (isTouch) return
    const card = cardRef.current
    if (!card) return

    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const maxDeg = 13
      const rotateY = Math.max(-maxDeg, Math.min(maxDeg, (dx / (rect.width / 2)) * maxDeg))
      const rotateX = Math.max(-maxDeg, Math.min(maxDeg, -(dy / (rect.height / 2)) * maxDeg))
      card.style.transition = 'transform 0.1s ease-out'
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
    })
  }, [isTouch])

  const handleMouseLeave = useCallback(() => {
    if (isTouch) return
    const card = cardRef.current
    if (!card) return
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    card.style.transition = 'transform 0.55s cubic-bezier(0.23, 1, 0.32, 1)'
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)'
  }, [isTouch])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          width: 'clamp(180px, 20vw, 260px)',
          height: 'clamp(216px, 24vw, 312px)',
          borderRadius: 16,
          overflow: 'hidden',
          position: 'relative',
          background: 'rgba(2, 43, 53, 0.6)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          border: '1px solid rgba(0, 168, 150, 0.4)',
          boxShadow: `
            0 0 0 1px rgba(0,168,150,0.1),
            0 8px 40px rgba(0,168,150,0.15),
            0 2px 12px rgba(0,0,0,0.6),
            inset 0 1px 0 rgba(255,255,255,0.06)
          `,
          willChange: 'transform',
          cursor: isTouch ? 'default' : 'crosshair',
          flexShrink: 0,
        }}
      >
        {/* Teal top accent bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: 3,
          background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
          zIndex: 3,
        }} />

        {/* Profile image — using plain img to avoid Next.js Image fill issues */}
        <img
          src="/profile.jpeg"
          alt="Shathursima Raveendran"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
          }}
        />

        {/* Bottom vignette */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to top, rgba(1,13,17,0.55) 0%, transparent 55%)',
          pointerEvents: 'none',
        }} />

        {/* Name tag */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          zIndex: 2,
          padding: '10px 14px',
          background: 'rgba(1, 13, 17, 0.72)',
          backdropFilter: 'blur(8px)',
          borderTop: '1px solid rgba(0,168,150,0.2)',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 9,
            color: 'var(--accent)', letterSpacing: 3,
            textTransform: 'uppercase', marginBottom: 2,
          }}>~/shathursima</div>
          <div style={{
            fontFamily: 'var(--font-display)', fontSize: 11,
            color: 'var(--muted)', letterSpacing: 0.5,
          }}>CE · UoP · 2nd Year</div>
        </div>
      </div>
    </div>
  )
}

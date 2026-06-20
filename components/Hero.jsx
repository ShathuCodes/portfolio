'use client'
import { useEffect, useRef, useState } from 'react'
import ParticleBackground from './ParticleBackground'
import ProfileCard from './ProfileCard'

const roles = [
  'ML/AI Enthusiast',
  'Full Stack Developer',
  'Passionate in Designing',
  'Cybersecurity Learner'
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  // Typewriter
  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section id="home">
      <ParticleBackground color="rgba(0, 168, 150, 0.4)" lineColor="rgba(0, 168, 150, 0.15)" />

      {/* Gradient overlays */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'radial-gradient(ellipse at 20% 50%, rgba(0, 168, 150, 0.1) 0%, transparent 60%)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', zIndex: 1,
        background: 'linear-gradient(to top, var(--bg), transparent)',
      }} />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '100px' }}>
        <span className="section-label" style={{ animation: 'fadeUp 0.6s ease forwards' }}>
          ✦ Second year computer engineering undergraduate ✦
        </span>

        {/* Two-column: left = text content, right = profile card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 'clamp(32px, 5vw, 72px)',
          alignItems: 'flex-start',
        }} className="hero-grid">

          {/* LEFT — Name + typewriter + tagline + CTAs + stats */}
          <div>
            {/* Reduced name: was clamp(52px,12vw,160px) → clamp(36px,6vw,88px) */}
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 6vw, 88px)',
              lineHeight: 0.95,
              letterSpacing: '-1.5px',
              marginBottom: 12,
              animation: 'fadeUp 0.6s ease 0.1s both',
            }}>
              SHATHURSIMA<br />
              <span style={{ color: 'var(--accent)' }}>RAVEENDRAN</span>
            </h1>

            {/* Typewriter */}
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 'clamp(13px, 1.6vw, 18px)',
              color: 'var(--muted)', marginBottom: 28,
              animation: 'fadeUp 0.6s ease 0.2s both',
              minHeight: 28,
            }}>
              <span style={{ color: 'var(--accent2)' }}>$ </span>
              {displayed}
              <span style={{ animation: 'blink 1s infinite', color: 'var(--accent)' }}>|</span>
            </div>

            {/* Tagline */}
            <p style={{
              fontSize: 'clamp(14px, 1.4vw, 17px)', color: 'var(--muted)', maxWidth: 480,
              lineHeight: 1.7, marginBottom: 36,
              animation: 'fadeUp 0.6s ease 0.3s both',
            }}>
              I am a second-year Computer Engineering undergraduate
              with a strong interest in{' '}
              <span style={{ backgroundColor: 'var(--surface2)', color: 'var(--accent)', padding: '2px 6px', borderRadius: '4px' }}>machine learning</span>,{' '}
              <span style={{ backgroundColor: 'var(--surface2)', color: 'var(--accent)', padding: '2px 6px', borderRadius: '4px' }}>computer vision</span>,
              and{' '}
              <span style={{ backgroundColor: 'var(--surface2)', color: 'var(--accent)', padding: '2px 6px', borderRadius: '4px' }}>system design</span>.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex', gap: 16, flexWrap: 'wrap',
              animation: 'fadeUp 0.6s ease 0.4s both',
            }} className="hero-ctas">
              <a href="#projects" style={{
                display: 'inline-flex', alignItems: 'center',
                background: 'var(--accent)', color: 'var(--bg)',
                padding: '13px 32px', textDecoration: 'none',
                fontFamily: 'var(--font-mono)', fontSize: 12,
                letterSpacing: 2, textTransform: 'uppercase',
                fontWeight: 500, transition: 'all 0.3s',
                minHeight: 48, borderRadius: 2,
              }}
                onMouseEnter={e => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 20px 40px rgba(0, 168, 150, 0.2)' }}
                onMouseLeave={e => { e.target.style.transform = 'none'; e.target.style.boxShadow = 'none' }}>
                View Projects →
              </a>
              <a href="/resume.pdf" target="_blank" style={{
                display: 'inline-flex', alignItems: 'center',
                border: '1px solid var(--border)', color: 'var(--text)',
                padding: '13px 32px', textDecoration: 'none',
                fontFamily: 'var(--font-mono)', fontSize: 12,
                letterSpacing: 2, textTransform: 'uppercase',
                transition: 'all 0.3s',
                minHeight: 48, borderRadius: 2,
              }}
                onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)' }}
                onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text)' }}>
                Download CV
              </a>
            </div>

            {/* Stats bar */}
            <div style={{
              display: 'flex', gap: 'clamp(20px, 4vw, 48px)', marginTop: 52,
              paddingTop: 32, borderTop: '1px solid var(--border)',
              animation: 'fadeUp 0.6s ease 0.5s both',
              flexWrap: 'wrap',
            }}>
              {[
                { num: '5+', label: 'Projects Built' },
                { num: '4+', label: 'Certifications' },
                { num: '3+', label: 'Organizations' },
                { num: '2nd', label: 'Year @ UoP' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3.5vw, 38px)',
                    color: 'var(--accent)', lineHeight: 1,
                  }}>{s.num}</div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10,
                    color: 'var(--muted)', letterSpacing: 2,
                    textTransform: 'uppercase', marginTop: 4,
                  }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Profile Card */}
          <div className="hero-profile" style={{ animation: 'fadeUp 0.6s ease 0.2s both' }}>
            <ProfileCard />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" style={{
        position: 'absolute', bottom: 40, right: 40, zIndex: 2,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        animation: 'float 3s ease infinite',
      }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 10,
          color: 'var(--muted)', letterSpacing: 2,
          writingMode: 'vertical-lr', textTransform: 'uppercase',
        }}>Scroll</div>
        <div style={{
          width: 1, height: 60,
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
        }} />
      </div>

      <style>{`
        /* On mobile: stack vertically, card goes under name */
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .hero-profile {
            display: flex;
            justify-content: center;
          }
        }
        @media (max-width: 480px) {
          .hero-ctas { flex-direction: column !important; }
          .hero-ctas a { text-align: center; justify-content: center; }
          .scroll-indicator { display: none !important; }
        }
      `}</style>
    </section>
  )
}
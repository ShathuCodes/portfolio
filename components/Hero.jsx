'use client'
import { useEffect, useRef, useState } from 'react'

const roles = [
  'ML/AI Enthusiast',
  'Full Stack Developer',
  'Passionate in Designing',
  'Cybersecurity Learner'

]

import Tilt from 'react-parallax-tilt';

import ParticleBackground from './ParticleBackground'

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
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '120px' }}>
        <span className="section-label" style={{ animationDelay: '0s', animation: 'fadeUp 0.6s ease forwards' }}>
          ✦ Second year computer engineering undergraduate ✦
        </span>


        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(72px, 12vw, 160px)',
          lineHeight: 0.9,
          letterSpacing: '-2px',
          marginBottom: 8,
          animation: 'fadeUp 0.6s ease 0.1s both',
        }}>
          SHATHURSIMA<br />
          <span style={{ color: 'var(--accent)', WebkitTextStroke: '0px' }}>RAVEENDRAN</span>
        </h1>

        {/* Typewriter */}
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 'clamp(14px, 2vw, 20px)',
          color: 'var(--muted)', marginBottom: 40,
          animation: 'fadeUp 0.6s ease 0.2s both',
          minHeight: 32,
        }}>
          <span style={{ color: 'var(--accent2)' }}>$ </span>
          {displayed}
          <span style={{ animation: 'blink 1s infinite', color: 'var(--accent)' }}>|</span>
        </div>

        {/* Tagline */}
        <p style={{
          fontSize: 18, color: 'var(--muted)', maxWidth: 500,
          lineHeight: 1.7, marginBottom: 48,
          animation: 'fadeUp 0.6s ease 0.3s both',
        }}>
          I am a second-year Computer Engineering undergraduate
          with a strong interest in <span style={{ backgroundColor: 'var(--surface2)', color: 'var(--accent)', padding: '2px 6px', borderRadius: '4px' }}>machine learning</span>,
          <span style={{ backgroundColor: 'var(--surface2)', color: 'var(--accent)', padding: '2px 6px', borderRadius: '4px' }}>computer vision </span>,
          and <span style={{ backgroundColor: 'var(--surface2)', color: 'var(--accent)', padding: '2px 6px', borderRadius: '4px' }}>system design</span>. I enjoy solving real-world problems through technology
          while continuously improving my technical skills.
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex', gap: 16, flexWrap: 'wrap',
          animation: 'fadeUp 0.6s ease 0.4s both',
        }}>
          <a href="#projects" style={{
            display: 'inline-block',
            background: 'var(--accent)', color: 'var(--bg)',
            padding: '16px 40px', textDecoration: 'none',
            fontFamily: 'var(--font-mono)', fontSize: 13,
            letterSpacing: 2, textTransform: 'uppercase',
            fontWeight: 500, transition: 'all 0.3s',
          }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 20px 40px rgba(0, 168, 150, 0.2)' }}
            onMouseLeave={e => { e.target.style.transform = 'none'; e.target.style.boxShadow = 'none' }}>
            View Projects →
          </a>
          <a href="/resume.pdf" target="_blank" style={{
            display: 'inline-block',
            border: '1px solid var(--border)', color: 'var(--text)',
            padding: '16px 40px', textDecoration: 'none',
            fontFamily: 'var(--font-mono)', fontSize: 13,
            letterSpacing: 2, textTransform: 'uppercase',
            transition: 'all 0.3s',
          }}
            onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)' }}
            onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text)' }}>
            Download CV
          </a>
        </div>

        {/* Stats bar */}
        <div style={{
          display: 'flex', gap: 48, marginTop: 80,
          paddingTop: 40, borderTop: '1px solid var(--border)',
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
                fontFamily: 'var(--font-display)', fontSize: 40,
                color: 'var(--accent)', lineHeight: 1,
              }}>{s.num}</div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 11,
                color: 'var(--muted)', letterSpacing: 2,
                textTransform: 'uppercase', marginTop: 4,
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
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
    </section >
  )
}
'use client'
import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact']

function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        background: 'var(--surface2)',
        border: '1px solid var(--border)',
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        transition: 'all 0.3s ease',
        flexShrink: 0,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--accent)'
        e.currentTarget.style.boxShadow = '0 0 12px rgba(0, 168, 150, 0.3)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <span style={{ fontSize: 16, transition: 'transform 0.4s ease', display: 'block' }}>
        {isDark ? '☀️' : '🌙'}
      </span>
    </button>
  )
}

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const dark = saved ? saved === 'dark' : prefersDark
    setIsDark(dark)
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light')
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  // Close drawer on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '0 min(5vw, 60px)',
        height: '70px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(1, 13, 17, 0.88)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0, 168, 150, 0.15)',
        transition: 'all 0.3s ease',
      }}>
        {/* Logo */}
        <a href="#home" style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 19,
          textDecoration: 'none',
          letterSpacing: '1px',
          fontWeight: 500,
          zIndex: 1001,
          display: 'flex',
          alignItems: 'center',
          transition: 'all 0.3s ease',
          color: 'var(--text)',
        }}
        onClick={() => setOpen(false)}
        onMouseEnter={e => {
          e.currentTarget.style.letterSpacing = '3px'
          e.currentTarget.querySelector('.logo-slash').style.color = 'var(--accent2)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.letterSpacing = '1px'
          e.currentTarget.querySelector('.logo-slash').style.color = 'var(--accent)'
        }}>
          <span style={{ color: 'var(--accent)', opacity: 0.7 }}>~</span>
          <span className="logo-slash" style={{ color: 'var(--accent)', transition: '0.3s' }}>/</span>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            textTransform: 'lowercase',
            marginLeft: '2px'
          }}>shathursima</span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: 'clamp(16px, 2.5vw, 40px)', alignItems: 'center' }}
          className="desktop-nav">
          {links.map(link => {
            const isActive = activeSection === link.toLowerCase()
            return (
              <a key={link} href={`#${link.toLowerCase()}`} style={{
                fontFamily: 'var(--font-mono)', fontSize: 11,
                letterSpacing: 2, textTransform: 'uppercase',
                color: isActive ? 'var(--accent)' : 'var(--muted)',
                textDecoration: 'none',
                position: 'relative',
                padding: '8px 0',
                transition: 'color 0.3s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => { if (!isActive) e.target.style.color = 'var(--muted)' }}>
                {link}
                {isActive && (
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    height: 2, background: 'var(--accent)',
                    boxShadow: '0 0 10px var(--accent)',
                    borderRadius: 2
                  }} />
                )}
              </a>
            )
          })}

          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

          <a href="#contact" style={{
            fontFamily: 'var(--font-mono)', fontSize: 10,
            letterSpacing: 2, textTransform: 'uppercase',
            color: 'var(--bg)',
            background: 'var(--accent)',
            padding: '10px 28px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 600,
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => {
            e.target.style.background = 'var(--text)'
            e.target.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={e => {
            e.target.style.background = 'var(--accent)'
            e.target.style.transform = 'none'
          }}>
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle — accessible, large touch target */}
        <div style={{ display: 'none', alignItems: 'center', gap: 12 }} className="mobile-controls">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            style={{
              background: 'none', border: 'none',
              cursor: 'pointer', zIndex: 1001,
              padding: '12px', margin: '-12px',
              minWidth: 48, minHeight: 48,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
            }}
          >
            <div style={{
              width: 24, height: 2, background: 'var(--text)',
              marginBottom: 6, transition: '0.3s',
              transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none'
            }} />
            <div style={{
              width: 24, height: 2, background: 'var(--text)',
              transition: '0.3s',
              opacity: open ? 0 : 1
            }} />
            <div style={{
              width: 24, height: 2, background: 'var(--text)',
              marginTop: 6, transition: '0.3s',
              transform: open ? 'rotate(-45deg) translate(6px, -7px)' : 'none'
            }} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 999,
        background: 'var(--bg)',
        backdropFilter: 'blur(20px)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: 28,
        overflowY: 'auto',
        padding: '80px 20px 40px',
        transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'all' : 'none',
      }}>
        {links.map((link, i) => (
          <a key={link} href={`#${link.toLowerCase()}`}
            onClick={() => setOpen(false)}
            style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 8vw, 36px)',
              color: activeSection === link.toLowerCase() ? 'var(--accent)' : 'var(--text)',
              textDecoration: 'none',
              transition: 'color 0.3s, transform 0.35s',
              transform: open ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: `${i * 0.07}s`,
              padding: '8px 0',
              minHeight: 48,
              display: 'flex', alignItems: 'center',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = activeSection === link.toLowerCase() ? 'var(--accent)' : 'var(--text)'}>
            {link}
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}
          style={{
            marginTop: 12,
            padding: '16px 48px', background: 'var(--accent)',
            color: 'var(--bg)', borderRadius: '4px',
            textDecoration: 'none', fontFamily: 'var(--font-mono)',
            fontSize: 14, letterSpacing: 2, fontWeight: 600,
            minHeight: 52, display: 'flex', alignItems: 'center',
          }}>
          HIRE ME
        </a>
      </div>

      <style>{`
        /* Desktop nav visible above 768px, hamburger hidden */
        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
          .mobile-controls { display: none !important; }
        }
        /* Mobile: hide desktop nav, show hamburger */
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-controls { display: flex !important; }
        }
      `}</style>
    </>
  )
}
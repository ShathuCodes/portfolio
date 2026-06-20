'use client'
import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact']

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false)

  const isHome = activeSection === 'home' || !activeSection

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '0 min(5vw, 60px)',
        height: '80px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(1, 13, 17, 0.85)',
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
        <div style={{ display: 'flex', gap: 'clamp(20px, 3vw, 48px)', alignItems: 'center' }}
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
              onMouseLeave={e => { if(!isActive) e.target.style.color = 'var(--muted)' }}>
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

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} style={{
          display: 'none', background: 'none', border: 'none',
          cursor: 'pointer', zIndex: 1001, padding: 10,
        }} className="mobile-toggle">
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
      </nav>

      {/* Mobile Drawer */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 999,
        background: 'rgba(1, 13, 17, 0.95)',
        backdropFilter: 'blur(20px)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: 32,
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'all' : 'none',
      }}>
        {links.map((link, i) => (
          <a key={link} href={`#${link.toLowerCase()}`} 
            onClick={() => setOpen(false)}
            style={{
              fontFamily: 'var(--font-display)', fontSize: 32,
              color: activeSection === link.toLowerCase() ? 'var(--accent)' : 'var(--text)',
              textDecoration: 'none',
              transition: '0.3s',
              transform: open ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: `${i * 0.1}s`
            }}>
            {link}
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}
          style={{
            marginTop: 20,
            padding: '16px 40px', background: 'var(--accent)',
            color: 'var(--bg)', borderRadius: '4px',
            textDecoration: 'none', fontFamily: 'var(--font-mono)',
            fontSize: 14, letterSpacing: 2, fontWeight: 600,
          }}>
          HIRE ME
        </a>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </>
  )
}
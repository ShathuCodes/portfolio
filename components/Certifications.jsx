'use client'

const certs = [
  {
    title: 'Google AI Essentials',
    issuer: 'Google',
    date: 'Oct 2025',
    color: '#02c39a',
    icon: '🤖',
  },
  {
    title: 'Get Started with Databricks for Machine Learning',
    issuer: 'Simplilearn',
    date: '2025',
    color: '#00a896',
    icon: '⚡',
  },
  {
    title: 'Introduction to Python',
    issuer: 'Sololearn',
    date: 'Jun 2024',
    color: '#05668d',
    icon: '🐍',
  },
  {
    title: 'Java Programming',
    issuer: 'Great Learning',
    date: 'Nov 2024',
    color: '#5a189a',
    icon: '☕',
  },
  {
    title: 'Python for Beginners',
    issuer: 'University of Moratuwa',
    date: '2024',
    color: '#02c39a',
    icon: '📘',
  },
]

import ParticleBackground from './ParticleBackground'

export default function Certifications() {
  return (
    <section id="certifications">
      <ParticleBackground color="rgba(0, 168, 150, 0.2)" lineColor="rgba(0, 168, 150, 0.1)" />
      <div className="container" style={{ paddingTop: '100px' }}>
        <span className="section-label">Continuous Learning</span>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(48px, 6vw, 72px)',
          marginBottom: 64, letterSpacing: -1,
        }}>
          LICENSES &<br /><span style={{ color: 'var(--accent)' }}>CERTIFICATIONS</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 2,
        }}>
          {certs.map((cert, i) => (
            <div key={i} style={{
              background: 'var(--bg)', padding: '32px',
              borderTop: `3px solid ${cert.color}`,
              transition: 'all 0.3s',
              position: 'relative', overflow: 'hidden',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = `0 20px 40px ${cert.color}15`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'none'
              e.currentTarget.style.boxShadow = 'none'
            }}>
              <div style={{
                position: 'absolute', top: 20, right: 20,
                fontSize: 32, opacity: 0.15,
              }}>{cert.icon}</div>

              <div style={{
                fontSize: 32, marginBottom: 20,
              }}>{cert.icon}</div>

              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 10,
                color: cert.color, letterSpacing: 3,
                textTransform: 'uppercase', marginBottom: 8,
              }}>{cert.issuer}</div>

              <h3 style={{
                fontSize: 16, fontWeight: 700,
                lineHeight: 1.4, marginBottom: 12,
                color: 'var(--text)',
              }}>{cert.title}</h3>

              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 11,
                color: 'var(--muted)',
              }}>Issued {cert.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
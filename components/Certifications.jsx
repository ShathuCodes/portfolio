'use client'
import { useState } from 'react'
import ParticleBackground from './ParticleBackground'

const certs = [
  {
    title: 'Google AI Essentials',
    issuer: 'Google',
    date: 'Oct 2025',
    color: '#02c39a',
    icon: '🤖',
    url: 'https://www.coursera.org/learn/google-ai-essentials',
    type: 'Certificate',
  },
  {
    title: 'Get Started with Databricks for Machine Learning',
    issuer: 'Simplilearn',
    date: '2025',
    color: '#00a896',
    icon: '⚡',
    url: 'https://www.simplilearn.com/getting-started-with-databricks-for-machine-learning-free-course-skillup',
    type: 'Certificate',
  },
  {
    title: 'Introduction to Python',
    issuer: 'Sololearn',
    date: 'Jun 2024',
    color: '#05668d',
    icon: '🐍',
    url: 'https://www.sololearn.com/certificates/',
    type: 'Certificate',
  },
  {
    title: 'Java Programming',
    issuer: 'Great Learning',
    date: 'Nov 2024',
    color: '#5a189a',
    icon: '☕',
    url: 'https://www.mygreatlearning.com/certificate/',
    type: 'Certificate',
  },
  {
    title: 'Python for Beginners',
    issuer: 'University of Moratuwa',
    date: '2024',
    color: '#02c39a',
    icon: '📘',
    url: 'https://online.uom.lk/',
    type: 'Course',
  },
]

function CertCard({ cert, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={cert.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--surface)',
        padding: '28px 24px',
        borderTop: `3px solid ${hovered ? cert.color : cert.color + '55'}`,
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        textDecoration: 'none',
        transform: hovered ? 'translateY(-6px)' : 'none',
        boxShadow: hovered ? `0 20px 40px ${cert.color}20` : 'none',
        cursor: 'pointer',
        minHeight: 200,
      }}
    >
      {/* Glow orb on hover */}
      <div style={{
        position: 'absolute', top: -40, right: -40,
        width: 120, height: 120,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${cert.color}22, transparent 70%)`,
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s ease',
        pointerEvents: 'none',
      }} />

      {/* Background icon */}
      <div style={{
        position: 'absolute', bottom: 12, right: 16,
        fontSize: 52, opacity: hovered ? 0.12 : 0.07,
        transition: 'opacity 0.3s, transform 0.3s',
        transform: hovered ? 'scale(1.15) rotate(-5deg)' : 'none',
        pointerEvents: 'none',
        lineHeight: 1,
      }}>{cert.icon}</div>

      {/* Front icon */}
      <div style={{
        fontSize: 28, marginBottom: 16, lineHeight: 1,
        transition: 'transform 0.3s',
        transform: hovered ? 'scale(1.1)' : 'none',
        display: 'inline-block',
        width: 'fit-content',
      }}>{cert.icon}</div>

      {/* Issuer */}
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 10,
        color: cert.color, letterSpacing: 3,
        textTransform: 'uppercase', marginBottom: 8,
        transition: 'letter-spacing 0.3s',
      }}>{cert.issuer}</div>

      {/* Title */}
      <h3 style={{
        fontSize: 15, fontWeight: 700,
        lineHeight: 1.4, marginBottom: 'auto',
        color: 'var(--text)',
        paddingBottom: 16,
        flexGrow: 1,
      }}>{cert.title}</h3>

      {/* Footer row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16,
        borderTop: `1px solid ${cert.color}22`,
        paddingTop: 12,
      }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 10,
          color: 'var(--muted)',
        }}>Issued {cert.date}</div>

        {/* View CTA */}
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 9,
          letterSpacing: 2, textTransform: 'uppercase',
          color: cert.color,
          display: 'flex', alignItems: 'center', gap: 4,
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(-8px)',
          transition: 'opacity 0.3s, transform 0.3s',
        }}>
          View {cert.type} <span style={{ fontSize: 12 }}>↗</span>
        </div>
      </div>
    </a>
  )
}

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
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
          alignItems: 'stretch',
        }} className="cert-grid">
          {certs.map((cert, i) => (
            <CertCard key={i} cert={cert} index={i} />
          ))}
        </div>

        {/* Helper note */}
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: 11,
          color: 'var(--muted)', marginTop: 24,
          letterSpacing: 1,
        }}>
          💡 Click any card to open the course or certificate page
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cert-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .cert-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
        }
      `}</style>
    </section>
  )
}
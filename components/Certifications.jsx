'use client'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ParticleBackground from './ParticleBackground'

const certs = [
  {
    title: 'Google AI Essentials',
    issuer: 'Google',
    date: 'Oct 2025',
    color: '#02c39a',
    icon: '🤖',
    image: './certificates/google_ai_essentials.jpg',
    type: 'Certificate',
  },
  {
    title: 'Get Started with Databricks for Machine Learning',
    issuer: 'Simplilearn',
    date: '2025',
    color: '#00a896',
    icon: '⚡',
    image: './certificates/databricks.jpg',

    type: 'Certificate',
  },
  {
    title: 'Introduction to Python',
    issuer: 'Sololearn',
    date: 'Jun 2024',
    color: '#05668d',
    icon: '🐍',
    image: './certificates/introduction_to_python.jpg',

    type: 'Certificate',
  },
  {
    title: 'Java Programming',
    issuer: 'Great Learning',
    date: 'Nov 2024',
    color: '#5a189a',
    icon: '☕',
    image: './certificates/java_programming.jpg',

    type: 'Certificate',
  },
  {
    title: 'Python for Beginners',
    issuer: 'University of Moratuwa',
    date: '2024',
    color: '#02c39a',
    icon: '📘',
    image: './certificates/python_for_beginners.jpg',

    type: 'Course',
  },
]

function CertCard({ cert, index, onClick }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onClick={onClick}
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

      {/* Front Image */}
      <div style={{
        marginBottom: 16,
        borderRadius: 4,
        overflow: 'hidden',
        height: 140,
        position: 'relative',
        background: 'var(--surface2)',
      }}>
        {cert.image ? (
          <img
            src={cert.image}
            alt={cert.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease',
              transform: hovered ? 'scale(1.05)' : 'none',
            }}
          />
        ) : (
          <div style={{
            fontSize: 48,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.3s',
            transform: hovered ? 'scale(1.1)' : 'none',
          }}>
            {cert.icon}
          </div>
        )}
      </div>

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
    </div>
  )
}

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null)

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selectedCert])

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
            <CertCard key={i} cert={cert} index={i} onClick={() => setSelectedCert(cert)} />
          ))}
        </div>

        {/* Helper note */}
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: 11,
          color: 'var(--muted)', marginTop: 24,
          letterSpacing: 1,
        }}>
          💡 Click any card to view the certificate
        </p>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 2000,
              background: 'rgba(1, 13, 17, 0.85)',
              backdropFilter: 'blur(10px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '24px', cursor: 'pointer',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'var(--surface)',
                border: `1px solid ${selectedCert.color}40`,
                padding: '8px',
                borderRadius: '8px',
                position: 'relative',
                maxWidth: '900px',
                width: '100%',
                maxHeight: '90vh',
                display: 'flex', flexDirection: 'column',
                boxShadow: `0 20px 60px ${selectedCert.color}20`,
                cursor: 'default',
              }}
            >
              <button
                onClick={() => setSelectedCert(null)}
                style={{
                  position: 'absolute', top: -16, right: -16,
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'var(--accent)', color: 'var(--bg)',
                  border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20, zIndex: 10, boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                ×
              </button>

              <div style={{
                flexGrow: 1, overflow: 'hidden', borderRadius: '4px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--surface2)', minHeight: '300px'
              }}>
                {selectedCert.image ? (
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'contain',
                      maxHeight: 'calc(90vh - 80px)'
                    }}
                  />
                ) : (
                  <div style={{ fontSize: 64 }}>{selectedCert.icon}</div>
                )}
              </div>

              <div style={{
                padding: '20px 16px 12px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                flexWrap: 'wrap', gap: 12
              }}>
                <div>
                  <h3 style={{ fontSize: 20, color: 'var(--text)', marginBottom: 4 }}>{selectedCert.title}</h3>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: selectedCert.color }}>
                    {selectedCert.issuer} · {selectedCert.date}
                  </div>
                </div>
                {selectedCert.url && (
                  <a
                    href={selectedCert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '8px 16px', background: `${selectedCert.color}15`,
                      color: selectedCert.color, borderRadius: '4px', textDecoration: 'none',
                      fontFamily: 'var(--font-mono)', fontSize: 12,
                      border: `1px solid ${selectedCert.color}30`,
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = selectedCert.color;
                      e.currentTarget.style.color = 'var(--bg)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = `${selectedCert.color}15`;
                      e.currentTarget.style.color = selectedCert.color;
                    }}
                  >
                    View Original ↗
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
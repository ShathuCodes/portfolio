'use client'

import ParticleBackground from './ParticleBackground'

export default function About() {
  return (
    <section id="about">
      <ParticleBackground color="rgba(5, 102, 141, 0.4)" lineColor="rgba(5, 102, 141, 0.15)" />
      <div className="container" style={{ paddingTop: '100px' }}>
        {/* Marquee */}
        <div style={{
          overflow: 'hidden', marginBottom: 80,
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          padding: '16px 0',
        }}>
          <div style={{
            display: 'flex', gap: 40, width: 'max-content',
            animation: 'marquee 20s linear infinite',
            fontFamily: 'var(--font-display)', fontSize: 18,
            color: 'var(--muted)', letterSpacing: 4,
          }}>
            {Array(6).fill(['MACHINE LEARNING', '✦', '3D GRAPHICS', '✦', 'SYSTEMS PROGRAMMING', '✦', 'WEB DEVELOPMENT', '✦']).flat().map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80,
          alignItems: 'start',
        }} className="about-grid">
          {/* Left */}
          <div>
            <span className="section-label">About Me</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 6vw, 80px)',
              lineHeight: 1, marginBottom: 32,
              letterSpacing: -1,
            }}>
              I BUILD<br />
              <span style={{ color: '#05668d' }}>THINGS</span><br />
              FROM<br />SCRATCH
            </h2>

            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: 20, fontSize: 16 }}>
              I'm a dedicated computer engineering student at the University of Peradeniya
              with a deep curiosity about networks, intelligent systems, and low-level computing.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: 32, fontSize: 16 }}>
              Whether it's implementing logistic regression from scratch using NumPy,
              writing a 3D rendering engine in C, or building a real-time news intelligence
              dashboard — I approach every problem with a growth mindset and a desire to
              understand how things truly work under the hood.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: 16 }}>
              As a Casual Instructor for CO1010 at UoP, I also believe in giving back
              to the community by helping others build strong foundations in programming.
            </p>
          </div>

          {/* Right - Info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { label: 'University', value: 'University of Peradeniya', sub: 'Computer Engineering — 2nd Year' },
              { label: 'Current Role', value: 'Casual Instructor', sub: 'CO1010 Programming for Engineers — E24 Batch' },
              { label: 'Organisations', value: 'IEEE WIE · SEDS Pera · AIESEC', sub: 'Design, Editorial & IR Teams' },
              { label: 'Interests', value: 'ML / AI · Systems · Graphics', sub: 'Low-level programming & intelligent systems' },
              { label: 'Looking For', value: 'Internships & Freelance', sub: 'Open to both technical and research roles' },
            ].map(item => (
              <div key={item.label} style={{
                background: 'var(--surface2)', border: '1px solid var(--border)',
                padding: '20px 24px',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#05668d'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10,
                  color: '#05668d', letterSpacing: 3,
                  textTransform: 'uppercase', marginBottom: 6,
                }}>{item.label}</div>
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 2 }}>{item.value}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)' }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
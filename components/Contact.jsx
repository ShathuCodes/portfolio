'use client'
import { useState } from 'react'
import ParticleBackground from './ParticleBackground'
import Footer from './Footer'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  const inputStyle = {
    width: '100%', padding: '16px', marginBottom: 16,
    background: 'var(--surface2)', border: '1px solid var(--border)',
    color: 'var(--text)', fontFamily: 'var(--font-body)', fontSize: 15,
    outline: 'none', transition: 'border-color 0.3s',
    borderRadius: 2,
    // min height for touch targets
    minHeight: 52,
  }

  return (
    <section id="contact">
      <ParticleBackground color="rgba(123, 44, 191, 0.4)" lineColor="rgba(123, 44, 191, 0.15)" />
      <div className="container" style={{ paddingTop: '100px' }}>
        <span className="section-label">Get In Touch</span>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(40px, 6vw, 72px)',
          marginBottom: 16, letterSpacing: -1,
        }}>
          LET'S<br /><span style={{ color: '#7b2cbf' }}>CONNECT</span>
        </h2>

        <p style={{
          color: 'var(--muted)', fontSize: 16, marginBottom: 64,
          maxWidth: 500,
        }}>
          Open to internships, freelance projects, research collaborations,
          or just a good conversation about tech.
        </p>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80,
        }} className="contact-grid">
          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Name + Email row — collapses to 1-col at ≤480px via .contact-input-row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
              className="contact-input-row">
              <input
                placeholder="Name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
                required
              />
              <input
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
                required
              />
            </div>
            <textarea
              placeholder="Your message..."
              rows={6}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              style={{ ...inputStyle, resize: 'vertical', display: 'block' }}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
              required
            />
            <button type="submit" style={{
              background: 'var(--accent)',
              color: 'var(--bg)',
              padding: '16px 48px', border: 'none',
              fontFamily: 'var(--font-mono)', fontSize: 13,
              letterSpacing: 2, textTransform: 'uppercase',
              fontWeight: 500, cursor: 'pointer',
              transition: 'all 0.3s',
              minHeight: 52, borderRadius: 2,
              width: '100%',
            }}
              onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 10px 30px rgba(0, 168, 150, 0.2)' }}
              onMouseLeave={e => { e.target.style.transform = 'none'; e.target.style.boxShadow = 'none' }}>
              {sent ? '✓ Message Sent!' : 'Send Message →'}
            </button>
          </form>

          {/* Links */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                { label: 'Email', value: 'shathursimaraveendran04@gmail.com', href: 'mailto:shathursimaraveendran04@gmail.com', color: '#02c39a' },
                { label: 'LinkedIn', value: 'linkedin.com/in/shathursima-raveendran', href: 'https://www.linkedin.com/in/shathursima-raveendran-a53b4729b', color: '#0077b5' },
                { label: 'GitHub', value: 'github.com/ShathuCodes', href: 'https://github.com/ShathuCodes', color: '#00a896' },
              ].map(link => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'block', padding: '24px 28px',
                    background: 'var(--surface)',
                    textDecoration: 'none',
                    borderLeft: `3px solid transparent`,
                    transition: 'all 0.3s',
                    minHeight: 80,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderLeftColor = link.color
                    e.currentTarget.style.background = 'var(--surface2)'
                    e.currentTarget.style.transform = 'translateX(8px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderLeftColor = 'transparent'
                    e.currentTarget.style.background = 'var(--surface)'
                    e.currentTarget.style.transform = 'none'
                  }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10,
                    color: link.color, letterSpacing: 3,
                    textTransform: 'uppercase', marginBottom: 6,
                  }}>{link.label}</div>
                  <div style={{
                    color: 'var(--text)', fontSize: 14,
                    wordBreak: 'break-all',
                  }}>{link.value}</div>
                </a>
              ))}
            </div>

            {/* Location */}
            <div style={{
              marginTop: 32, padding: '24px',
              border: '1px solid var(--border)',
              fontFamily: 'var(--font-mono)', fontSize: 12,
            }}>
              <div style={{ color: 'var(--muted)', letterSpacing: 2, marginBottom: 4 }}>BASED IN</div>
              <div style={{ color: 'var(--text)', fontSize: 16 }}>Peradeniya, Sri Lanka 🇱🇰</div>
              <div style={{ color: 'var(--accent)', marginTop: 8 }}>
                🟢 Open to remote & on-site opportunities
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 480px) {
          .contact-input-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <Footer />
    </section>
  )
}
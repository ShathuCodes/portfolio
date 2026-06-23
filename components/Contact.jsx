'use client'
import { useState, useRef } from 'react'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import ParticleBackground from './ParticleBackground'
import Footer from './Footer'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const captchaRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    if (captchaRef.current) {
      captchaRef.current.execute()
    } else {
      setStatus('error')
      setErrorMsg('Captcha is not loaded yet. Please wait a moment and try again.')
    }
  }

  const onVerifyCaptcha = async (token) => {
    const formData = new FormData()
    formData.append('access_key', '2da10ac9-e0fb-4728-ba0a-1011f43bc5f1')
    formData.append('name', form.name)
    formData.append('email', form.email)
    formData.append('message', form.message)
    formData.append('subject', `Portfolio Contact from ${form.name}`)
    formData.append('from_name', 'Portfolio Contact Form')
    formData.append('h-captcha-response', token)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
        captchaRef.current.resetCaptcha()
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setErrorMsg(data.message || 'Something went wrong. Please try again.')
        captchaRef.current.resetCaptcha()
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
      setErrorMsg('Network error — please check your connection and try again.')
      captchaRef.current.resetCaptcha()
    }
  }

  const onCaptchaError = (err) => {
    console.error('Captcha error:', err)
    setStatus('error')
    setErrorMsg('Captcha verification failed or expired. Please try again.')
    captchaRef.current.resetCaptcha()
  }

  const onCaptchaClose = () => {
    // If the user closes the captcha challenge manually
    setStatus('idle')
  }

  const inputStyle = {
    width: '100%', padding: '16px', marginBottom: 16,
    background: 'var(--surface2)', border: '1px solid var(--border)',
    color: 'var(--text)', fontFamily: 'var(--font-body)', fontSize: 15,
    outline: 'none', transition: 'border-color 0.3s',
    borderRadius: 2,
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

          <form onSubmit={handleSubmit}>
            <input
              type="checkbox"
              name="botcheck"
              style={{ display: 'none' }}
              tabIndex="-1"
              autoComplete="off"
            />
            <input type="hidden" name="subject" value="Portfolio Contact Form" />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="contact-input-row">
              <input
                placeholder="Name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
                required
                disabled={status === 'sending'}
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
                disabled={status === 'sending'}
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
              disabled={status === 'sending'}
            />

            <div style={{ marginBottom: 16 }}>
              <HCaptcha
                ref={captchaRef}
                sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                size="invisible"
                theme="dark"
                onVerify={onVerifyCaptcha}
                onError={onCaptchaError}
                onClose={onCaptchaClose}
              />
            </div>

            {status === 'error' && (
              <div style={{
                background: 'rgba(220, 38, 38, 0.1)',
                border: '1px solid rgba(220, 38, 38, 0.3)',
                borderRadius: 4,
                padding: '12px 16px',
                marginBottom: 16,
                fontFamily: 'var(--font-mono)', fontSize: 12,
                color: '#f87171',
              }}>
                ⚠ {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              style={{
                background: status === 'success' ? '#02c39a' : 'var(--accent)',
                color: 'var(--bg)',
                padding: '16px 48px', border: 'none',
                fontFamily: 'var(--font-mono)', fontSize: 13,
                letterSpacing: 2, textTransform: 'uppercase',
                fontWeight: 500,
                cursor: (status === 'sending' || status === 'success') ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s',
                minHeight: 52, borderRadius: 2,
                width: '100%',
                opacity: status === 'sending' ? 0.7 : 1,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              }}
              onMouseEnter={e => {
                if (status === 'idle' || status === 'error') {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 168, 150, 0.2)'
                }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {status === 'sending' && (
                <span style={{
                  width: 14, height: 14, border: '2px solid transparent',
                  borderTopColor: 'var(--bg)', borderRadius: '50%',
                  display: 'inline-block',
                  animation: 'spin 0.7s linear infinite',
                }} />
              )}
              {status === 'sending' ? 'Sending...' : status === 'success' ? '✓ Message Sent!' : 'Send Message →'}
            </button>
          </form>

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

            <div style={{
              marginTop: 32, padding: '24px 28px',
              background: 'var(--surface)',
              borderLeft: '3px solid transparent',
              fontFamily: 'var(--font-mono)', fontSize: 12,
            }}>
              <div style={{ color: 'var(--muted)', letterSpacing: 2, marginBottom: 4 }}>BASED IN</div>
              <div style={{ color: 'var(--text)', fontSize: 16 }}>Peradeniya, Sri Lanka 🇱🇰</div>
              <div style={{ color: 'var(--accent)', marginTop: 8 }}>
                🟢 Open to remote &amp; on-site opportunities
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
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
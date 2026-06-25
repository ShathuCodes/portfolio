export default function Footer() {
  return (
    <footer style={{
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      padding: '40px',
      display: 'flex', flexDirection: 'column', gap: 24,
    }} className="site-footer">
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 16, width: '100%'
      }} className="footer-top">
        <div style={{
          fontFamily: 'var(--font-display)', fontSize: 24,
          color: 'var(--accent)', letterSpacing: 2,
        }}>
          SR<span style={{ color: 'var(--text)' }}>.</span>
        </div>

        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="https://github.com/ShathuCodes" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)', transition: 'color 0.3s', display: 'flex', alignItems: 'center' }} onMouseEnter={e => e.currentTarget.style.color = '#00a896'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/shathursima-raveendran-a53b4729b" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)', transition: 'color 0.3s', display: 'flex', alignItems: 'center' }} onMouseEnter={e => e.currentTarget.style.color = '#0077b5'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 13,
            color: 'var(--text)', marginLeft: 8,
          }}>
            📞 +94 74 276 4543
          </div>
        </div>
      </div>

      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 16, width: '100%', borderTop: '1px solid var(--surface2)', paddingTop: 24,
      }} className="footer-bottom">
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11,
          color: 'var(--muted)', letterSpacing: 2, textTransform: 'uppercase',
        }}>
          © {new Date().getFullYear()}
        </div>

        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11,
          color: 'var(--muted)', letterSpacing: 1,
        }}>
          University of Peradeniya · CE Dept
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .footer-top {
            flex-direction: column !important;
            text-align: center !important;
            justify-content: center !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            text-align: center !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </footer>
  )
}
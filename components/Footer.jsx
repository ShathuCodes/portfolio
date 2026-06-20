export default function Footer() {
  return (
    <footer style={{
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      padding: '40px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: 16,
    }}>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: 24,
        color: 'var(--accent)', letterSpacing: 2,
      }}>
        SR<span style={{ color: 'var(--text)' }}>.</span>
      </div>

      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 11,
        color: 'var(--muted)', letterSpacing: 2, textTransform: 'uppercase',
        textAlign: 'center',
      }}>
        Built with Next.js & ♥ — {new Date().getFullYear()}
      </div>

      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 11,
        color: 'var(--muted)', letterSpacing: 1,
      }}>
        University of Peradeniya · CE Dept
      </div>
    </footer>
  )
}
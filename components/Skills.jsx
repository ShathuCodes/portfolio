'use client'

const skillGroups = [
  {
    category: 'AI / Machine Learning',
    color: '#02c39a', // Light Teal
    skills: ['Python', 'NumPy', 'Machine Learning', 'NLP (spaCy)', 'Sentence-BERT', 'K-Means Clustering', 'Sentiment Analysis (VADER)', 'Databricks', 'Logistic Regression'],
  },
  {
    category: 'Systems & Low-Level',
    color: '#00a896', // Mid Teal
    skills: ['C', 'ARM32 Assembly', '3D Graphics (Software)', 'Linear Algebra', 'Memory Management', 'System Calls', 'Makefile'],
  },
  {
    category: 'Web Development',
    color: '#05668d', // Deep Blue
    skills: ['Next.js', 'React', 'JavaScript', 'HTML & CSS', 'Flask', 'Docker', 'PHP', 'Tailwind CSS'],
  },
  {
    category: 'Tools & Other',
    color: '#3c096c', // Dark Purple
    skills: ['Git & GitHub', 'Canva', 'Arduino', 'Adobe Photoshop', 'Visual Basic .NET', 'Microsoft Office Suite', 'Content Writing'],
  },
]

import ParticleBackground from './ParticleBackground'

export default function Skills() {
  return (
    <section id="skills">
      <ParticleBackground color="rgba(2, 195, 154, 0.3)" lineColor="rgba(2, 195, 154, 0.1)" />
      <div className="container" style={{ paddingTop: '100px' }}>
        <span className="section-label">What I Work With</span>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(48px, 6vw, 72px)',
          marginBottom: 64, letterSpacing: -1,
        }}>
          SKILLS &<br /><span style={{ color: 'var(--accent)' }}>TECHNOLOGIES</span>
        </h2>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2,
        }} className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.category} style={{
              background: 'var(--surface)',
              padding: 40,
              borderLeft: `3px solid ${group.color}`,
              transition: 'background 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--surface2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--surface)'}>
              <h3 style={{
                fontFamily: 'var(--font-mono)', fontSize: 12,
                letterSpacing: 3, textTransform: 'uppercase',
                color: group.color, marginBottom: 24,
              }}>
                {group.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {group.skills.map(skill => (
                  <span key={skill} style={{
                    padding: '6px 14px',
                    border: `1px solid ${group.color}22`,
                    background: `${group.color}10`,
                    fontFamily: 'var(--font-mono)', fontSize: 12,
                    color: 'var(--text)',
                    transition: 'all 0.2s',
                    display: 'inline-block',
                  }}
                  onMouseEnter={e => {
                    e.target.style.background = group.color
                    e.target.style.color = 'var(--bg)'
                  }}
                  onMouseLeave={e => {
                    e.target.style.background = `${group.color}10`
                    e.target.style.color = 'var(--text)'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
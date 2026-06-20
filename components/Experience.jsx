'use client'

const experiences = [
  {
    title: 'Casual Instructor',
    org: 'Department of Computer Engineering, University of Peradeniya',
    period: 'Nov 2025 – Present · 6 mos',
    desc: 'Teaching CO1010 Programming for Engineers I to the E24 batch — covering foundational programming concepts and problem-solving.',
    type: 'Work',
    color: '#02c39a',
  },
  {
    title: 'Design Team Member',
    org: 'IEEE WIE Affinity Group – University of Peradeniya',
    period: 'Feb 2026 – Present · 3 mos',
    desc: 'Creating visual designs and promotional materials using Canva for IEEE WIE events and campaigns.',
    type: 'Leadership',
    color: '#05668d',
  },
  {
    title: 'Editorial Team Member',
    org: 'IEEE WIE Affinity Group – University of Peradeniya',
    period: 'Jan 2025 – Present · 1 yr 4 mos',
    desc: 'Content writing and editorial work for IEEE WIE publications and communications.',
    type: 'Leadership',
    color: '#05668d',
  },
  {
    title: 'Editorial Team Member',
    org: 'SEDS Pera',
    period: 'Feb 2026 – Present · 3 mos',
    desc: 'Creating and editing content for SEDS Pera, a student space exploration and development society.',
    type: 'Leadership',
    color: '#00a896',
  },
  {
    title: 'OGV IR Member',
    org: 'AIESEC in Sri Lanka',
    period: 'Aug 2025 – Present · 9 mos',
    desc: 'International Relations role at AIESEC, University of Peradeniya — facilitating global youth leadership programs.',
    type: 'Leadership',
    color: '#3c096c',
  },
]

const volunteering = [
  {
    title: 'Invigilator & Technical Team Member',
    org: 'ICPC Foundation – ICPC Sri Lanka Peradeniya Regional Contest 2025/26',
    period: 'Jan 2026',
    desc: 'Served as invigilator and technical team member at the ICPC Sri Lanka – Peradeniya Regional Contest.',
  },
  {
    title: 'Educational Volunteer',
    org: 'IEEE WIE – InnovateX\'25',
    period: '2025',
    desc: 'Contributed to InnovateX\'25 organized by Women in Engineering (WIE) – University of Peradeniya.',
  },
  {
    title: 'Coordinator',
    org: 'IEEE Women in Engineering – Code With WIE\'25',
    period: '2025',
    desc: 'Coordinated on behalf of the university for the competition organized by IEEE WIE.',
  },
  {
    title: 'Volunteer',
    org: 'Yarl IT Hub – Innovation Festival 2025',
    period: '2025',
    desc: 'Managed the student and mini expo sections at Yarl IT Hub Innovation Festival 2025.',
  },
]

import ParticleBackground from './ParticleBackground'

export default function Experience() {
  return (
    <section id="experience">
      <ParticleBackground color="rgba(90, 24, 154, 0.3)" lineColor="rgba(90, 24, 154, 0.1)" />
      <div className="container" style={{ paddingTop: '100px' }}>
        <span className="section-label">Background</span>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(48px, 6vw, 72px)',
          marginBottom: 80, letterSpacing: -1,
        }}>
          EXPERIENCE &<br /><span style={{ color: '#5a189a' }}>INVOLVEMENT</span>
        </h2>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80,
        }} className="exp-grid">
          {/* Experience */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-mono)', fontSize: 12,
              letterSpacing: 3, textTransform: 'uppercase',
              color: 'var(--muted)', marginBottom: 40,
              paddingBottom: 16, borderBottom: '1px solid var(--border)',
            }}>Roles & Experience</h3>

            <div style={{ position: 'relative' }}>
              {/* Timeline line */}
              <div style={{
                position: 'absolute', left: 7, top: 0, bottom: 0,
                width: 1, background: 'var(--border)',
              }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
                {experiences.map((exp, i) => (
                  <div key={i} style={{ paddingLeft: 32, position: 'relative' }}>
                    {/* Dot */}
                    <div style={{
                      position: 'absolute', left: 0, top: 4,
                      width: 15, height: 15, borderRadius: '50%',
                      border: `2px solid ${exp.color}`,
                      background: 'var(--bg)',
                    }} />

                    <div style={{
                      fontFamily: 'var(--font-mono)', fontSize: 10,
                      letterSpacing: 2, textTransform: 'uppercase',
                      color: exp.color, marginBottom: 4,
                    }}>{exp.type}</div>

                    <h4 style={{ fontWeight: 700, fontSize: 16, marginBottom: 2 }}>{exp.title}</h4>
                    <div style={{
                      fontFamily: 'var(--font-mono)', fontSize: 12,
                      color: 'var(--muted)', marginBottom: 4,
                    }}>{exp.org}</div>
                    <div style={{
                      fontFamily: 'var(--font-mono)', fontSize: 11,
                      color: exp.color, marginBottom: 8,
                    }}>{exp.period}</div>
                    <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.6 }}>{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Volunteering */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-mono)', fontSize: 12,
              letterSpacing: 3, textTransform: 'uppercase',
              color: 'var(--muted)', marginBottom: 40,
              paddingBottom: 16, borderBottom: '1px solid var(--border)',
            }}>Volunteering & Community</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {volunteering.map((v, i) => (
                <div key={i} style={{
                  background: 'var(--surface)', padding: '24px',
                  borderLeft: '2px solid var(--accent2)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--surface2)'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--surface)'
                  e.currentTarget.style.transform = 'none'
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10,
                    color: 'var(--accent2)', marginBottom: 6, letterSpacing: 2,
                  }}>{v.period}</div>
                  <h4 style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{v.title}</h4>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 12,
                    color: 'var(--muted)', marginBottom: 8,
                  }}>{v.org}</div>
                  <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              ))}
            </div>

            {/* Honors */}
            <h3 style={{
              fontFamily: 'var(--font-mono)', fontSize: 12,
              letterSpacing: 3, textTransform: 'uppercase',
              color: 'var(--muted)', marginTop: 48, marginBottom: 24,
              paddingBottom: 16, borderBottom: '1px solid var(--border)',
            }}>Honors & Awards</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                'Exhibitor recognition at Techno 2025 — Gas Leakage Detection System',
                'Certificate of service as Invigilator & Technical Team Member — ICPC Sri Lanka Peradeniya Regional 2025/26',
              ].map((award, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 16, alignItems: 'flex-start',
                  padding: '16px 20px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                }}>
                  <span style={{ color: 'var(--accent)', fontSize: 18, marginTop: 2 }}>★</span>
                  <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.6 }}>{award}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
      `}</style>
    </section>
  )
}
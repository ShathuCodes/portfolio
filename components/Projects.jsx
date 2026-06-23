'use client'
import { useState, useEffect } from 'react'
import ParticleBackground from './ParticleBackground'

const projects = [
  {
    id: '01',
    title: 'SignalMon',
    subtitle: 'Signal Intelligence Dashboard',
    description: 'Automated open-source intelligence system that monitors, processes, and visualizes real-time socio-economic signals from 15+ Sri Lankan news RSS feeds using advanced NLP pipelines.',
    details: 'SignalMon is a full end-to-end ETL pipeline that ingests RSS feeds from 15+ Sri Lankan news sources every 30 minutes. Raw text is cleaned and processed through a spaCy NLP pipeline for Named Entity Recognition, then encoded via Sentence-BERT into semantic vector embeddings. K-Means clustering groups thematically similar articles, VADER provides per-article sentiment scores, and TF-IDF extracts the top keywords. All processed signals are stored in a PostgreSQL database and visualized through an interactive Flask dashboard with real-time charts.',
    highlights: ['ETL Pipeline', 'Named Entity Recognition', 'Sentence-BERT Embeddings', 'K-Means Clustering', 'VADER Sentiment Analysis', 'TF-IDF Keyword Extraction'],
    tech: ['Python', 'Flask', 'spaCy', 'Docker', 'ML Algorithms', 'PostgreSQL', 'Sentence-BERT'],
    color: '#02c39a',
    status: 'Featured',
    github: 'https://github.com/ShathuCodes',
    demo: null,
    images: [],
  },
  {
    id: '02',
    title: 'Dementia AI',
    subtitle: 'Dementia Risk Prediction Model',
    description: 'Custom Logistic Regression model built from scratch using only NumPy — no high-level ML libraries. Trained using gradient descent with interactive user-input prediction module.',
    details: 'This project implements binary logistic regression entirely from scratch using only NumPy arrays and matrix operations — no scikit-learn, no TensorFlow. The model uses mini-batch gradient descent with sigmoid activation, feature normalization (z-score), and binary cross-entropy loss. It was trained on a dementia clinical dataset to predict risk levels based on cognitive test scores, MRI volume measurements, and demographic data. A CLI prediction module lets users input their own values and receive a risk assessment.',
    highlights: ['From-Scratch Implementation', 'Gradient Descent', 'Feature Scaling', 'Binary Cross-Entropy Loss', 'CLI Prediction Module'],
    tech: ['Python', 'NumPy', 'Machine Learning', 'Data Analysis', 'Logistic Regression'],
    color: '#00a896',
    status: 'Hackathon',
    github: 'https://github.com/ShathuCodes',
    demo: null,
    images: [],
  },
  {
    id: '03',
    title: 'Libtiny3D',
    subtitle: 'Building 3D Graphics Engine in C',
    description: 'Lightweight 3D software rendering engine built entirely from scratch without OpenGL or DirectX. Complete rendering pipeline with custom math library, Bézier animations, and Lambertian lighting.',
    details: 'Libtiny3D is a software rasteriser written in C that implements a complete 3D rendering pipeline from scratch. The engine features a custom linear algebra library (vectors, matrices, quaternions), a perspective projection system, DDA line drawing, triangle rasterisation with barycentric interpolation, and Lambertian (diffuse) lighting. Bézier curve animations are used for smooth camera paths. All rendering is done in CPU memory and output to a framebuffer — no GPU or graphics API is used.',
    highlights: ['Software Rendering Pipeline', 'Custom 3D Math Library', 'Perspective Projection', 'Lambertian Lighting', 'Bézier Animation', 'DDA Line Drawing'],
    tech: ['C', 'Makefile', 'Linear Algebra', '3D Geometry', 'Rasterisation'],
    color: '#05668d',
    status: 'Academic',
    github: 'https://github.com/ShathuCodes',
    demo: null,
    images: [],
  },
  {
    id: '04',
    title: 'Mini Command line Shell',
    subtitle: 'ARM32 Assembly Command-Line Shell',
    description: 'Functional command-line shell written in ARM32 Assembly supporting commands like hello, help, clear, exit, len, and upper with low-level I/O and memory management.',
    details: 'This shell is written in pure ARM32 assembly, running on a Raspberry Pi under Linux. It uses Linux system calls (SVC) directly for I/O operations — no C standard library. The shell implements a read-eval-print loop (REPL) that reads user input character-by-character into a buffer, parses the command string, and dispatches to the appropriate handler routine. Commands include: hello (greeting), help (command list), clear (clears terminal), len (string length), upper (converts input to uppercase), and exit. Memory is managed manually using stack allocation and register discipline.',
    highlights: ['ARM32 Assembly', 'System Calls', 'Memory Management', 'I/O Handling', 'Linux Shell Simulation', 'REPL Loop'],
    tech: ['ARM Assembly', 'Computer Systems', 'Low-level Programming', 'Linux Syscalls'],
    color: '#5a189a',
    status: 'Academic',
    github: 'https://github.com/ShathuCodes',
    demo: null,
    images: [],
  },
  {
    id: '05',
    title: 'EE1010 Coursework',
    subtitle: 'Line Following Robot',
    description: 'As part of our EE1010 coursework, we designed and implemented an autonomous line-following robot using Arduino. The robot uses sensors to detect and follow a predefined path while controlling motor movements in real time.',
    details: 'A two-wheeled autonomous robot designed and built for the EE1010 module at the University of Peradeniya. The robot uses IR reflectance sensors to detect a black tape line on a white surface. Sensor readings are processed by an Arduino Uno microcontroller running a PID control algorithm that adjusts the speed of the left and right DC motors via a dual H-bridge motor driver (L298N). The PID tuning was done empirically on the test track. The chassis was built from acrylic sheet, and all electronic components were soldered onto a custom PCB.',
    highlights: ['Arduino', 'PID Control', 'Motor Control', 'Sensor Interfacing', 'Embedded Systems', 'Real-time Control', 'PCB Design'],
    tech: ['Arduino', 'C++', 'Motor Control', 'Sensor Interfacing', 'PID Algorithm'],
    color: '#1581bbff',
    status: 'Academic',
    github: null,
    demo: null,
    images: [],
  },
]

// ─── Project Modal ───────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        background: 'rgba(1, 13, 17, 0.92)',
        backdropFilter: 'blur(16px)',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
        animation: 'fadeIn 0.25s ease',
        padding: '70px 0 0',
        overflowY: 'auto',
      }}
    >
      {/* Panel */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 900,
          background: 'var(--surface)',
          borderTop: `3px solid ${project.color}`,
          borderRadius: '12px 12px 0 0',
          padding: 'clamp(28px, 5vw, 56px)',
          animation: 'slideUp 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          maxHeight: 'calc(100vh - 70px)',
          overflowY: 'auto',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close project detail"
          style={{
            position: 'absolute', top: 20, right: 20,
            background: 'var(--surface2)',
            border: '1px solid var(--border)',
            borderRadius: '50%',
            width: 40, height: 40,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--muted)', fontSize: 18,
            transition: 'all 0.2s',
            flexShrink: 0,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = project.color
            e.currentTarget.style.color = project.color
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border)'
            e.currentTarget.style.color = 'var(--muted)'
          }}
        >
          ✕
        </button>

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 6 }}>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 10,
              color: project.color, letterSpacing: 3, textTransform: 'uppercase',
            }}>{project.id}</span>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 10,
              letterSpacing: 2, textTransform: 'uppercase',
              padding: '3px 10px',
              border: `1px solid ${project.color}44`,
              color: project.color,
            }}>{project.status}</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 5vw, 48px)',
            color: project.color,
            letterSpacing: -1,
            marginBottom: 6,
          }}>{project.title}</h2>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 13,
            color: 'var(--muted)',
          }}>{project.subtitle}</div>
        </div>

        {/* Two-column layout on larger screens */}
        <div className="modal-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 40,
          marginBottom: 32,
        }}>
          {/* Description */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 9,
              letterSpacing: 3, textTransform: 'uppercase',
              color: 'var(--muted)', marginBottom: 12,
            }}>Overview</div>
            <p style={{
              color: 'var(--text)', fontSize: 15, lineHeight: 1.8,
              marginBottom: 20,
            }}>{project.details}</p>
          </div>

          {/* Highlights + Tech */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 9,
              letterSpacing: 3, textTransform: 'uppercase',
              color: 'var(--muted)', marginBottom: 12,
            }}>Key Features</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
              {project.highlights.map(h => (
                <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: project.color, flexShrink: 0,
                    boxShadow: `0 0 8px ${project.color}88`,
                  }} />
                  <span style={{ color: 'var(--text)', fontSize: 14 }}>{h}</span>
                </div>
              ))}
            </div>

            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 9,
              letterSpacing: 3, textTransform: 'uppercase',
              color: 'var(--muted)', marginBottom: 12,
            }}>Tech Stack</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {project.tech.map(t => (
                <span key={t} style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  padding: '5px 14px',
                  background: `${project.color}18`,
                  color: project.color,
                  border: `1px solid ${project.color}33`,
                  borderRadius: 4,
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Image Gallery placeholder — replace when you add real images */}
        {project.images.length > 0 ? (
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 9,
              letterSpacing: 3, textTransform: 'uppercase',
              color: 'var(--muted)', marginBottom: 16,
            }}>Screenshots</div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: 12,
            }}>
              {project.images.map((src, i) => (
                <img key={i} src={src} alt={`${project.title} screenshot ${i + 1}`} style={{
                  width: '100%', borderRadius: 6,
                  border: `1px solid ${project.color}33`,
                  objectFit: 'cover', aspectRatio: '16/9',
                }} />
              ))}
            </div>
          </div>
        ) : (
          <div style={{
            border: `1px dashed ${project.color}44`,
            borderRadius: 8,
            padding: '32px 24px',
            textAlign: 'center',
            background: `${project.color}08`,
            marginBottom: 8,
          }}>
            <div style={{ fontSize: 32, marginBottom: 8, opacity: 0.5 }}>🖼️</div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              color: 'var(--muted)', letterSpacing: 1,
            }}>
              Drop project screenshots into <code style={{ color: project.color }}>/public/projects/</code> and add their paths to the images array
            </div>
          </div>
        )}

        {/* Links */}
        <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)', fontSize: 12,
                letterSpacing: 2, textTransform: 'uppercase',
                padding: '12px 28px',
                background: 'transparent',
                border: `1px solid ${project.color}`,
                color: project.color,
                textDecoration: 'none',
                borderRadius: 4,
                transition: 'all 0.2s',
                display: 'flex', alignItems: 'center', gap: 8,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = `${project.color}22`
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.transform = 'none'
              }}
            >
              GitHub ↗
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)', fontSize: 12,
                letterSpacing: 2, textTransform: 'uppercase',
                padding: '12px 28px',
                background: project.color,
                color: '#010d11',
                textDecoration: 'none',
                borderRadius: 4,
                fontWeight: 600,
                transition: 'all 0.2s',
                display: 'flex', alignItems: 'center', gap: 8,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.opacity = '0.85'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.opacity = '1'
                e.currentTarget.style.transform = 'none'
              }}
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(60px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @media (max-width: 600px) {
          .modal-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Projects() {
  const [hovered, setHovered] = useState(null)
  const [selected, setSelected] = useState(null)

  return (
    <>
      <section id="projects">
        <ParticleBackground color="rgba(5, 102, 141, 0.3)" lineColor="rgba(5, 102, 141, 0.1)" />
        <div className="container" style={{ paddingTop: '100px' }}>
          <span className="section-label">What I've Built</span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 6vw, 72px)',
            marginBottom: 64, letterSpacing: -1,
          }}>
            FEATURED<br /><span style={{ color: 'var(--accent)' }}>PROJECTS</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {projects.map((project, i) => (
              <div key={project.id}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelected(project)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'clamp(44px, 8vw, 80px) 1fr auto',
                  gap: 'clamp(16px, 3vw, 40px)', alignItems: 'start',
                  padding: hovered === i ? '40px 32px' : '40px 0',
                  borderBottom: '1px solid var(--border)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  background: hovered === i ? 'var(--surface2)' : 'transparent',
                  borderRadius: hovered === i ? 4 : 0,
                }}
                className="project-row"
              >
                {/* Number */}
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(32px, 6vw, 56px)',
                  color: hovered === i ? project.color : 'var(--border)',
                  lineHeight: 1, transition: 'color 0.3s',
                }}>{project.id}</div>

                {/* Content */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 8 }}>
                    <h3 style={{
                      fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 4vw, 36px)',
                      letterSpacing: -0.5, color: hovered === i ? project.color : 'var(--text)',
                      transition: 'color 0.3s',
                    }}>{project.title}</h3>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: 10,
                      letterSpacing: 2, textTransform: 'uppercase',
                      padding: '4px 10px',
                      border: `1px solid ${project.color}44`,
                      color: project.color,
                      whiteSpace: 'nowrap',
                    }}>{project.status}</span>
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 13,
                    color: 'var(--muted)', marginBottom: 12,
                  }}>{project.subtitle}</div>
                  <p style={{
                    color: 'var(--muted)', fontSize: 15, lineHeight: 1.7,
                    maxWidth: 600, marginBottom: 20,
                    maxHeight: hovered === i ? '200px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease',
                  }}>{project.description}</p>
                  <div style={{
                    display: 'flex', flexWrap: 'wrap', gap: 8,
                    maxHeight: hovered === i ? '100px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease',
                  }}>
                    {project.tech.map(t => (
                      <span key={t} style={{
                        fontFamily: 'var(--font-mono)', fontSize: 11,
                        padding: '4px 12px',
                        background: `${project.color}15`,
                        color: project.color,
                      }}>{t}</span>
                    ))}
                  </div>

                  {/* Click hint */}
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10,
                    letterSpacing: 2, textTransform: 'uppercase',
                    color: project.color, marginTop: 12,
                    opacity: hovered === i ? 1 : 0,
                    transition: 'opacity 0.3s',
                  }}>
                    Click to view details →
                  </div>
                </div>

                {/* Arrow */}
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 'clamp(18px, 3vw, 24px)',
                  color: hovered === i ? project.color : 'var(--border)',
                  transition: 'all 0.3s',
                  transform: hovered === i ? 'translate(5px, -5px)' : 'none',
                  paddingTop: 8,
                }}>↗</div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 480px) {
            .project-row {
              grid-template-columns: 44px 1fr !important;
              gap: 12px !important;
              padding: 28px 0 !important;
            }
            .project-row > div:last-child { display: none; }
          }
        `}</style>
      </section>

      {/* Modal portal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}
'use client'
import { useState, useEffect } from 'react'
import ParticleBackground from './ParticleBackground'

const projects = [
  {
    id: '01',
    title: 'SignalMon',
    subtitle: 'Signal Intelligence Dashboard',
    description: 'Automated open-source intelligence system designed to monitor, process, and visualize real-time socio-economic and operational signals from Sri Lankan news sources. Bridges the gap between raw data and strategic decision-making by transforming unstructured news text into actionable insights.',
    details: 'Built a robust automated ETL pipeline ingesting real-time data from 15+ RSS feeds, cleaning unstructured text (HTML stripping, regex normalization), and structuring it for analysis. The Flask backend uses a modular architecture (Services, Routes, Data Layer) with a Singleton Pattern for efficient ML model management and automated task scheduling. NLP pipeline: spaCy for Named Entity Recognition (geolocation extraction), Sentence-BERT for dense vector embeddings, K-Means Clustering to group similar stories into topics, VADER for sentiment analysis contributing to a Risk vs. Opportunity score, TF-IDF for dynamic keyword extraction, and statistical event detection using Mean + Standard Deviation thresholds to classify Major or Emerging events.',
    highlights: ['Automated ETL Pipeline', 'Named Entity Recognition', 'Sentence-BERT Embeddings', 'K-Means Clustering', 'VADER Sentiment Analysis', 'TF-IDF Keyword Extraction', 'Statistical Event Detection'],
    tech: ['Python', 'Flask', 'spaCy', 'Docker', 'ML Algorithms', 'PostgreSQL', 'Sentence-BERT'],
    color: '#02c39a',
    status: 'Featured',
    github: 'https://github.com/DakshayaniRamanesh/news_SIGNALS',
    demo: null,
    images: ['/projects/signal mon/pic1.jpg', '/projects/signal mon/pic2.jpg', '/projects/signal mon/pic3.jpg', '/projects/signal mon/pic4.jpg', '/projects/signal mon/pic5.jpg', '/projects/signal mon/pic6.jpg', '/projects/signal mon/pic7.jpg', '/projects/signal mon/pic8.jpg'],
  },
  {
    id: '02',
    title: 'Dementia AI',
    subtitle: 'Dementia Risk Prediction Model',
    description: 'Machine learning-based project developed during a hackathon to predict the likelihood of dementia using non-medical factors — demographic, lifestyle, and cognitive assessment data.',
    details: 'A real-world CSV dataset containing clinical and behavioural attributes was carefully cleaned, validated, and normalized before model training. A custom Logistic Regression model was implemented from scratch using NumPy — without relying on high-level ML libraries. Trained using gradient descent, with performance evaluated through training accuracy and loss visualization. Feature scaling and validation rules were applied to ensure data quality. Includes an interactive user-input prediction module where users enter health and lifestyle details to receive a dementia probability score. The trained model was serialized using Pickle for reuse and deployment readiness.',
    highlights: ['Custom Logistic Regression', 'Gradient Descent', 'Feature Scaling', 'NumPy From Scratch', 'Interactive Prediction Module', 'Pickle Serialization'],
    tech: ['Python', 'NumPy', 'Machine Learning', 'Data Analysis', 'Logistic Regression'],
    color: '#00a896',
    status: 'Hackathon',
    github: 'https://github.com/ShathuCodes/ModelX_Hackathon',
    demo: null,
    images: [],
  },
  {
    id: '03',
    title: 'Libtiny3D',
    subtitle: 'Building a 3D Graphics Engine from Scratch in C',
    description: 'Lightweight 3D software rendering engine built entirely from the ground up — without relying on OpenGL or DirectX. Implements a complete rendering pipeline including a custom math library, projection matrices, Lambertian lighting, and Bézier-based animation.',
    details: 'Developed a software-based 3D rendering pipeline with floating-point precision canvas and DDA line drawing. Built a custom 3D vector and matrix math engine for all transformations. Implemented perspective projection with viewport clipping, Lambertian (diffuse) lighting model, and a smooth Bézier animation framework. All rendering is done in CPU memory and output to a framebuffer — no GPU or graphics API used. Gained deep hands-on experience with low-level graphics programming, mathematical modeling, and system-level design through building a fully functional 3D engine demo.',
    highlights: ['Software Rendering Pipeline', 'DDA Line Drawing', 'Custom 3D Math Engine', 'Perspective Projection', 'Lambertian Lighting', 'Bézier Animation'],
    tech: ['C', 'Makefile', 'Linear Algebra', '3D Geometry', 'Rasterisation'],
    color: '#05668d',
    status: 'Academic',
    demo: null,
    images: [],
  },
  {
    id: '04',
    title: 'Mini Command Line Shell',
    subtitle: 'CO1020 – Computer Systems Programming',
    description: 'Functional command-line shell developed in ARM32 Assembly supporting commands like hello, help, clear, exit, len, and upper. Implemented low-level I/O handling, memory management, and system calls to simulate a minimal Linux shell environment.',
    details: 'This shell is written in pure ARM32 assembly and uses Linux system calls (SVC) directly for I/O operations — no C standard library. Implements a read-eval-print loop (REPL) that reads user input character-by-character into a buffer, parses the command string, and dispatches to the appropriate handler. Commands: hello (greeting), help (command list), clear (terminal clear), len (string length), upper (converts to uppercase), and exit. Memory is managed manually using stack allocation and register discipline.',
    highlights: ['ARM32 Assembly', 'Linux System Calls', 'Memory Management', 'I/O Handling', 'Linux Shell Simulation', 'REPL Loop'],
    tech: ['ARM Assembly', 'Computer Systems', 'Low-level Programming', 'Linux Syscalls'],
    color: '#5a189a',
    status: 'Academic',
    demo: null,
    images: [],
  },
  {
    id: '05',
    title: 'EE1010 Coursework',
    subtitle: 'Line Following Robot — University of Peradeniya',
    description: 'As part of our EE1010 coursework, we designed and implemented an autonomous line-following robot using Arduino. The robot uses sensors to detect and follow a predefined path while controlling motor movements in real time.',
    details: 'Designed and built a two-wheeled autonomous robot for the EE1010 module at the University of Peradeniya. The robot uses IR reflectance sensors to detect a black tape line on a white surface, processed by an Arduino Uno microcontroller that controls motor movements in real time. This project enhanced our understanding of embedded systems, sensor interfacing, motor control, and Arduino programming',
    highlights: ['Arduino', 'Motor Control', 'Sensor Interfacing', 'Embedded Systems', 'Real-time Control'],
    tech: ['Arduino', 'C++', 'Motor Control', 'Sensor Interfacing', 'PID Algorithm'],
    color: '#1581bbff',
    status: 'Academic',
    demo: null,
    images: ['/projects/line following robot/pic.jpg'],
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

        {/* Image Gallery */}
        {project.images && project.images.length > 0 && (
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
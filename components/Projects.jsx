'use client'
import { useState } from 'react'

const projects = [
  {
    id: '01',
    title: 'SignalMon',
    subtitle: 'Signal Intelligence Dashboard',
    description: 'Automated open-source intelligence system that monitors, processes, and visualizes real-time socio-economic signals from 15+ Sri Lankan news RSS feeds using advanced NLP pipelines.',
    highlights: ['ETL Pipeline', 'Named Entity Recognition', 'Sentence-BERT Embeddings', 'K-Means Clustering', 'VADER Sentiment Analysis', 'TF-IDF Keyword Extraction'],
    tech: ['Python', 'Flask', 'spaCy', 'Docker', 'ML Algorithms'],
    color: '#02c39a',
    status: 'Featured',
  },
  {
    id: '02',
    title: 'Dementia AI',
    subtitle: 'Risk Prediction Model',
    description: 'Custom Logistic Regression model built from scratch using only NumPy — no high-level ML libraries. Trained using gradient descent with interactive user-input prediction module.',
    highlights: ['From-Scratch Implementation', 'Gradient Descent', 'Feature Scaling', 'Pickle Serialization', 'Loss Visualization'],
    tech: ['Python', 'NumPy', 'Machine Learning', 'Data Analysis'],
    color: '#00a896',
    status: 'Hackathon',
  },
  {
    id: '03',
    title: 'Libtiny3D',
    subtitle: '3D Graphics Engine in C',
    description: 'Lightweight 3D software rendering engine built entirely from scratch without OpenGL or DirectX. Complete rendering pipeline with custom math library, Bézier animations, and Lambertian lighting.',
    highlights: ['Software Rendering Pipeline', 'Custom 3D Math Library', 'Perspective Projection', 'Lambertian Lighting', 'Bézier Animation', 'DDA Line Drawing'],
    tech: ['C', 'Makefile', 'Linear Algebra', '3D Geometry'],
    color: '#05668d',
    status: 'Academic',
  },
  {
    id: '04',
    title: 'Mini Shell',
    subtitle: 'ARM32 Assembly Command-Line Shell',
    description: 'Functional command-line shell written in ARM32 Assembly supporting commands like hello, help, clear, exit, len, and upper with low-level I/O and memory management.',
    highlights: ['ARM32 Assembly', 'System Calls', 'Memory Management', 'I/O Handling', 'Linux Shell Simulation'],
    tech: ['ARM Assembly', 'Computer Systems', 'Low-level Programming'],
    color: '#5a189a',
    status: 'Academic',
  },
]

import ParticleBackground from './ParticleBackground'

export default function Projects() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="projects">
      <ParticleBackground color="rgba(5, 102, 141, 0.3)" lineColor="rgba(5, 102, 141, 0.1)" />
      <div className="container" style={{ paddingTop: '100px' }}>
        <span className="section-label">What I've Built</span>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(48px, 6vw, 72px)',
          marginBottom: 64, letterSpacing: -1,
        }}>
          FEATURED<br /><span style={{ color: 'var(--accent)' }}>PROJECTS</span>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {projects.map((project, i) => (
            <div key={project.id}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto',
                gap: 40, alignItems: 'start',
                padding: '40px 0',
                borderBottom: '1px solid var(--border)',
                cursor: 'default',
                transition: 'all 0.3s',
                background: hovered === i ? 'var(--surface2)' : 'transparent',
                padding: hovered === i ? '40px 32px' : '40px 0',
              }}>
              {/* Number */}
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: 56,
                color: hovered === i ? project.color : 'var(--border)',
                lineHeight: 1, transition: 'color 0.3s',
              }}>{project.id}</div>

              {/* Content */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontSize: 36,
                    letterSpacing: -0.5, color: hovered === i ? project.color : 'var(--text)',
                    transition: 'color 0.3s',
                  }}>{project.title}</h3>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10,
                    letterSpacing: 2, textTransform: 'uppercase',
                    padding: '4px 10px',
                    border: `1px solid ${project.color}44`,
                    color: project.color,
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
              </div>

              {/* Arrow */}
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 24,
                color: hovered === i ? project.color : 'var(--border)',
                transition: 'all 0.3s',
                transform: hovered === i ? 'translate(5px, -5px)' : 'none',
                paddingTop: 8,
              }}>↗</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
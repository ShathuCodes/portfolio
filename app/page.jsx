'use client'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'
import IntroScreen from '../components/IntroScreen'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  // Start as null (unknown) to avoid flash before sessionStorage check
  const [showIntro, setShowIntro] = useState(null)

  // Check sessionStorage on mount
  useEffect(() => {
    const seen = sessionStorage.getItem('introSeen')
    setShowIntro(!seen)
  }, [])

  // Intersection observer — only run after intro is dismissed
  useEffect(() => {
    if (showIntro) return

    const hash = window.location.hash.replace('#', '')
    if (hash) setActiveSection(hash)

    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact']

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [showIntro])

  // Prevent scroll while intro is active
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [showIntro])

  // Still loading sessionStorage — render nothing to avoid flash
  if (showIntro === null) return null

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <IntroScreen onDone={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ pointerEvents: showIntro ? 'none' : 'auto' }}
      >
        <Navbar activeSection={activeSection} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </main>
      </motion.div>
    </>
  )
}
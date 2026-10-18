import { useState, useRef, type MouseEvent } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  MapPin,
  Terminal,
  Code2,
  Sparkles,
  Layers,
  GraduationCap
} from 'lucide-react'
import './App.css'

// Inline Brand Icons (Lucide purposefully excludes third-party commercial brand marks)
function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export default function App() {
  const shouldReduceMotion = useReducedMotion()
  const [imageError, setImageError] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  // Subtle 3D portrait perspective tilt
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    // Limit rotation to max +/- 7 degrees for refined feel
    const rotateY = (x / (rect.width / 2)) * 7
    const rotateX = -(y / (rect.height / 2)) * 7
    setTilt({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  // Animation variants respecting prefers-reduced-motion
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.05 : 0.8,
        delay: shouldReduceMotion ? 0 : custom * 0.12,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  }

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  }


  return (
    <div className="portfolio-canvas">
      {/* Cinematic Ambient Backdrop Lighting & Grid */}
      <div className="ambient-layer" aria-hidden="true">
        <div className="ambient-glow ambient-glow-violet" />
        <div className="ambient-glow ambient-glow-blue" />
        <div className="ambient-glow ambient-glow-center" />
        <div className="canvas-grid" />
      </div>

      {/* 1. Minimal Navigation Bar */}
      <header className="navbar">
        <nav className="nav-container" aria-label="Main Navigation">
          <a href="#" className="nav-brand" aria-label="Sanket Amte Portfolio Home">
            <div className="brand-monogram">SA</div>
            <div className="brand-info">
              <span className="brand-name">Sanket Amte</span>
              <span className="brand-role">Java Full Stack Dev</span>
            </div>
          </a>

          {/* Availability Indicator */}
          <div className="availability-chip" role="status" aria-label="Availability Status">
            <span className="status-dot-wrapper" aria-hidden="true">
              <span className="status-dot-ping" />
              <span className="status-dot-solid" />
            </span>
            <span>Available for roles & internships</span>
          </div>

          {/* Nav & Contact Links */}
          <div className="nav-links">
            <a href="#work" className="nav-link">Work</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-cta-btn">
              <span>Contact</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </nav>
      </header>

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section" id="hero" aria-label="Hero Introduction">
          <div className="hero-grid">
            {/* Left Column: Headlines, Bio, Actions, Tech Strip */}
            <motion.div
              className="hero-left"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Academic & Role Badge */}
              <motion.div className="hero-badge-row" variants={fadeInUp} custom={1}>
                <div className="academic-badge">
                  <span className="academic-badge-dot" aria-hidden="true" />
                  <GraduationCap size={14} aria-hidden="true" />
                  <span>Zeal College of Engineering & Research, Pune</span>
                </div>
              </motion.div>

              {/* 2. Large Animated Headline */}
              <div className="hero-headline-container">
                <h1 className="hero-title" aria-label="Java Full Stack Developer">
                  <motion.span className="title-line title-line-1" variants={fadeInUp} custom={2}>
                    JAVA
                  </motion.span>
                  <motion.span className="title-line title-line-2" variants={fadeInUp} custom={3}>
                    FULL STACK
                  </motion.span>
                  <motion.span className="title-line title-line-3" variants={fadeInUp} custom={4}>
                    DEVELOPER<span className="title-period">.</span>
                  </motion.span>
                </h1>
              </div>

              {/* 3. Concise Introduction */}
              <motion.p className="hero-bio" variants={fadeInUp} custom={5}>
                Hi, I'm <strong>Sanket Amte</strong> — a B.Tech Information Technology student at{' '}
                <span className="highlight-violet">Zeal College of Engineering and Research, Pune</span>.
                I build high-performance Java enterprise backend microservices and craft sleek,
                responsive web applications. Actively seeking full-stack developer jobs and
                high-impact internships.
              </motion.p>

              {/* 4. Working Anchor Links & CTAs */}
              <motion.div className="hero-actions" variants={fadeInUp} custom={6}>
                <a href="#work" className="btn-primary" id="cta-explore-work">
                  <span>Explore My Work</span>
                  <ArrowDown size={16} aria-hidden="true" />
                </a>
                <a href="#about" className="btn-secondary" id="cta-about-me">
                  <Code2 size={16} aria-hidden="true" />
                  <span>About Me</span>
                </a>
                <a href="#contact" className="btn-outline" id="cta-contact">
                  <Mail size={16} aria-hidden="true" />
                  <span>Contact</span>
                </a>
              </motion.div>

              {/* Core Technologies Matrix */}
              <motion.div className="hero-tech-strip" variants={fadeInUp} custom={7}>
                <span className="tech-strip-label">Core Engineering Stack</span>
                <div className="tech-tags">
                  <span className="tech-tag">Java 17+</span>
                  <span className="tech-tag">Spring Boot</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">RESTful APIs</span>
                  <span className="tech-tag">Docker</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: 5. & 6. Cinematic 3D Portrait Area with Orbits & Fallback */}
            <motion.div
              className="hero-right"
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="portrait-scene"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* Orbit Outlines with Subtle Floating Lighting */}
                <div className="orbit-system" aria-hidden="true">
                  <div className="orbit-ring orbit-ring-1">
                    <span className="orbit-node" />
                  </div>
                  <div className="orbit-ring orbit-ring-2">
                    <span className="orbit-node orbit-node-blue" />
                  </div>
                </div>

                {/* Portrait Card with 3D Depth */}
                <div
                  ref={cardRef}
                  className="portrait-card-wrapper"
                  style={{
                    transform: shouldReduceMotion
                      ? 'none'
                      : `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  }}
                >
                  <div className="portrait-card-inner">
                    {!imageError ? (
                      <img
                        src="/images/sanket-portrait.png"
                        alt="Sanket Amte — Java Full Stack Developer Portrait"
                        className="portrait-image"
                        onError={() => setImageError(true)}
                        loading="eager"
                      />
                    ) : (
                      /* Tasteful Designed Placeholder if image is missing */
                      <div className="portrait-placeholder">
                        <div className="placeholder-grid" aria-hidden="true" />
                        <div className="placeholder-avatar-ring">
                          <span className="placeholder-initials">SA</span>
                        </div>
                        <span className="placeholder-badge">Developer Portrait</span>
                        <h2 className="placeholder-name">Sanket Amte</h2>
                        <p className="placeholder-desc">
                          Java Full Stack Engineer • Zeal College of Engineering, Pune
                        </p>
                      </div>
                    )}
                    {/* Cinematic Rim Lighting / Vignette Overlay */}
                    <div className="portrait-lighting-overlay" aria-hidden="true" />
                  </div>

                  {/* Floating Badges */}
                  <div className="floating-glass-card floating-badge-bottom">
                    <div className="floating-badge-icon">
                      <Terminal size={16} aria-hidden="true" />
                    </div>
                    <div className="floating-badge-content">
                      <span className="floating-badge-title">Enterprise Backend</span>
                      <span className="floating-badge-subtitle">Java • Spring • SQL</span>
                    </div>
                  </div>

                  <div className="floating-glass-card floating-badge-top">
                    <div className="floating-badge-icon">
                      <Sparkles size={16} aria-hidden="true" />
                    </div>
                    <div className="floating-badge-content">
                      <span className="floating-badge-title">2026 Opportunities</span>
                      <span className="floating-badge-subtitle">Full-Time & Intern</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Working Anchor Targets for Work, About, and Contact */}
        <section id="work" className="preview-section" aria-label="Work Section Preview">
          <div className="preview-section-card">
            <span className="preview-section-tag">
              <Layers size={14} aria-hidden="true" />
              <span>Anchor Target • Explore My Work</span>
            </span>
            <h2 className="preview-section-title">Selected Engineering Projects</h2>
            <p className="preview-section-desc">
              High-concurrency Java microservices, Spring Boot backends, and responsive React web
              applications. Full project showcases and deep-dive case studies will be integrated in
              the next phase.
            </p>
          </div>
        </section>

        <section id="about" className="preview-section" aria-label="About Section Preview">
          <div className="preview-section-card">
            <span className="preview-section-tag">
              <Code2 size={14} aria-hidden="true" />
              <span>Anchor Target • About Me</span>
            </span>
            <h2 className="preview-section-title">Background & Academic Profile</h2>
            <p className="preview-section-desc">
              Pursuing B.Tech in Information Technology at Zeal College of Engineering and Research,
              Pune. Focused on system architecture, data structures, algorithms, and clean full-stack
              engineering.
            </p>
          </div>
        </section>

        <section id="contact" className="preview-section" aria-label="Contact Section Preview">
          <div className="preview-section-card">
            <span className="preview-section-tag">
              <Mail size={14} aria-hidden="true" />
              <span>Anchor Target • Get In Touch</span>
            </span>
            <h2 className="preview-section-title">Let's Connect</h2>
            <p className="preview-section-desc">
              Looking for a motivated full-stack engineer ready to add immediate value? Feel free to
              reach out directly or connect on professional channels.
            </p>
            <div className="preview-contact-grid">
              <a
                href="mailto:sanketamte.dev@gmail.com"
                className="preview-contact-item"
              >
                <Mail size={16} className="highlight-violet" aria-hidden="true" />
                <span>sanketamte.dev@gmail.com</span>
              </a>
              <div className="preview-contact-item">
                <MapPin size={16} className="highlight-violet" aria-hidden="true" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 7. Footer with clearly identified placeholder URLs */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <span className="footer-brand-title">Sanket Amte</span>
              <span className="footer-brand-sub">
                Java Full Stack Developer • Zeal College of Engineering and Research, Pune
              </span>
            </div>

            <div className="footer-social-links" aria-label="Social and Professional Profiles">
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="GitHub Profile (Placeholder URL — replace with your username)"
              >
                <GitHubIcon size={15} />
                <span>GitHub</span>
                <span className="social-link-tag">Placeholder</span>
              </a>

              <a
                href="https://linkedin.com/in/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="LinkedIn Profile (Placeholder URL — replace with your username)"
              >
                <LinkedInIcon size={15} />
                <span>LinkedIn</span>
                <span className="social-link-tag">Placeholder</span>
              </a>

              <a
                href="mailto:sanketamte.dev@gmail.com"
                className="social-link"
                title="Direct Email"
              >
                <Mail size={15} aria-hidden="true" />
                <span>Email</span>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Sanket Amte. All rights reserved.</span>
            <span>Cinematic 3D Developer Portfolio • v1.0</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

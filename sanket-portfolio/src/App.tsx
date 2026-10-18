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
  GraduationCap,
  ExternalLink,
  ShieldAlert,
  Cpu,
  ShoppingBag,
  Info,
  Clock
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

  const cardEntrance: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.05 : 0.7,
        delay: shouldReduceMotion ? 0 : custom * 0.15,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
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

            {/* Right Column: Cinematic 3D Portrait Area with Orbits & Fallback */}
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

        {/* ==========================================================================
            SELECTED ENGINEERING PROJECTS SHOWCASE (#work)
            ========================================================================== */}
        <section id="work" className="projects-section" aria-label="Featured Projects Showcase">
          <div className="section-header-block">
            <div className="section-eyebrow">
              <Layers size={14} aria-hidden="true" />
              <span>Selected Engineering Projects</span>
            </div>
            <h2 className="section-title">
              Featured Software &amp; <span className="section-title-gradient">System Architectures</span>
            </h2>
            <p className="section-subtitle">
              Verified real-world implementations across cybersecurity forensics, system concurrency, and production e-commerce architectures.
            </p>
          </div>

          <motion.div
            className="projects-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {/* PROJECT 1: ForensiMail */}
            <motion.article
              className="project-card"
              variants={cardEntrance}
              custom={1}
              aria-labelledby="project-forensimail-title"
            >
              {/* CSS-Based Visual Preview */}
              <div className="card-visual-preview" aria-hidden="true">
                <div className="preview-window-bar">
                  <div className="window-dots">
                    <span className="window-dot dot-red" />
                    <span className="window-dot dot-yellow" />
                    <span className="window-dot dot-green" />
                  </div>
                  <span className="window-title">Forensic Inspector</span>
                  <span className="window-badge">RFC-822 / MIME</span>
                </div>
                <div className="preview-body">
                  <div className="forensics-threat-bar">
                    <span className="threat-score-label">
                      <ShieldAlert size={12} />
                      AI Threat Score
                    </span>
                    <span className="threat-score-val">84 / 100 [CRITICAL]</span>
                  </div>
                  <div className="forensics-auth-row">
                    <span className="auth-badge">SPF: PASS</span>
                    <span className="auth-badge">DKIM: PASS</span>
                    <span className="auth-badge">DMARC: ALIGNED</span>
                  </div>
                  <div className="route-trace-mini">
                    <span>Origin: <span className="trace-node">185.220.101.5</span></span>
                    <span>➔</span>
                    <span>Relay Hop</span>
                    <span>➔</span>
                    <span className="trace-node">Target MX</span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="card-content-area">
                <div className="card-category-badge">
                  <ShieldAlert size={14} aria-hidden="true" />
                  <span>Cybersecurity &amp; Threat Forensics</span>
                </div>

                <div className="card-title-group">
                  <h3 id="project-forensimail-title" className="card-project-title">ForensiMail</h3>
                  <span className="card-project-tagline">AI-Powered Email Threat Detection &amp; GeoLocation Platform</span>
                </div>

                <p className="card-project-description">
                  Investigates suspicious emails, brand impersonations, and malicious mail relays with evidence-backed attribution. Implements RFC/MIME email parsing, SPF/DKIM/DMARC authentication verification, sequential hop route tracing with IP geolocation, typosquatting domain detection, multi-factor NLP risk scoring (0–100), and automated forensic PDF report generation.
                </p>

                <div className="card-tech-list" aria-label="Technologies used in ForensiMail">
                  <span className="card-tech-pill">FastAPI</span>
                  <span className="card-tech-pill">Python</span>
                  <span className="card-tech-pill">React 18</span>
                  <span className="card-tech-pill">TypeScript</span>
                  <span className="card-tech-pill">TailwindCSS</span>
                  <span className="card-tech-pill">Recharts</span>
                  <span className="card-tech-pill">OAuth 2.0</span>
                  <span className="card-tech-pill">jsPDF</span>
                </div>

                <div className="card-action-bar">
                  <span className="action-status-badge">
                    <Info size={13} aria-hidden="true" />
                    <span>Local Platform • Repository Upload Pending</span>
                  </span>
                </div>
              </div>
            </motion.article>

            {/* PROJECT 2: ThreadX */}
            <motion.article
              className="project-card"
              variants={cardEntrance}
              custom={2}
              aria-labelledby="project-threadx-title"
            >
              {/* CSS-Based Visual Preview */}
              <div className="card-visual-preview" aria-hidden="true">
                <div className="preview-window-bar">
                  <div className="window-dots">
                    <span className="window-dot dot-red" />
                    <span className="window-dot dot-yellow" />
                    <span className="window-dot dot-green" />
                  </div>
                  <span className="window-title">Thread Engine Monitor</span>
                  <span className="window-badge">JVM Runtime</span>
                </div>
                <div className="preview-body">
                  <div className="thread-terminal-header">
                    <span>Worker Thread Pool</span>
                    <span>Max Capacity: 8</span>
                  </div>
                  <div className="thread-list-mock">
                    <div className="thread-row">
                      <span className="thread-name">Worker-Thread-01</span>
                      <span className="thread-state-pill state-running">RUNNING</span>
                    </div>
                    <div className="thread-row">
                      <span className="thread-name">Worker-Thread-02</span>
                      <span className="thread-state-pill state-idle">IDLE</span>
                    </div>
                    <div className="thread-row">
                      <span className="thread-name">Worker-Thread-03</span>
                      <span className="thread-state-pill state-running">RUNNING</span>
                    </div>
                  </div>
                  <div className="thread-metrics-bar">
                    <span>Active: 2 Tasks</span>
                    <span>Queue: 0 Tasks</span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="card-content-area">
                <div className="card-category-badge">
                  <Cpu size={14} aria-hidden="true" />
                  <span>Systems &amp; Java Core</span>
                </div>

                <div className="card-title-group">
                  <h3 id="project-threadx-title" className="card-project-title">ThreadX</h3>
                  <span className="card-project-tagline">Concurrency &amp; Multi-Threaded Execution Engine</span>
                </div>

                <p className="card-project-description">
                  Engineered around multi-threaded processing, task scheduling, and concurrency control. Implementation files and public repository link are currently awaiting upload from the developer.
                </p>

                <div className="card-tech-list" aria-label="Technologies used in ThreadX">
                  <span className="card-tech-pill">Java</span>
                  <span className="card-tech-pill">Concurrency</span>
                  <span className="card-tech-pill">Multithreading</span>
                  <span className="card-tech-pill">OOP</span>
                  <span className="card-tech-pill">Task Scheduling</span>
                </div>

                <div className="card-action-bar">
                  <span className="action-status-badge">
                    <Clock size={13} aria-hidden="true" />
                    <span>In Development • Details Pending Input</span>
                  </span>
                </div>
              </div>
            </motion.article>

            {/* PROJECT 3: Flipkart Clone Pro */}
            <motion.article
              className="project-card"
              variants={cardEntrance}
              custom={3}
              aria-labelledby="project-flipkart-title"
            >
              {/* CSS-Based Visual Preview */}
              <div className="card-visual-preview" aria-hidden="true">
                <div className="preview-window-bar">
                  <div className="window-dots">
                    <span className="window-dot dot-red" />
                    <span className="window-dot dot-yellow" />
                    <span className="window-dot dot-green" />
                  </div>
                  <span className="window-title">Storefront &amp; Admin</span>
                  <span className="window-badge">Railway Deployed</span>
                </div>
                <div className="preview-body">
                  <div className="ecommerce-search-mock">
                    <ShoppingBag size={12} />
                    <span>Search products, brands and categories...</span>
                  </div>
                  <div className="category-chips-mock">
                    <span className="cat-chip">Mobiles</span>
                    <span className="cat-chip">Laptops</span>
                    <span className="cat-chip">Fashion</span>
                    <span className="cat-chip">Electronics</span>
                  </div>
                  <div className="product-card-mock">
                    <div className="mock-price-group">
                      <span className="mock-price">₹49,999</span>
                      <span className="mock-discount">-35% OFF</span>
                    </div>
                    <span className="mock-cart-btn">Add to Cart</span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="card-content-area">
                <div className="card-category-badge">
                  <ShoppingBag size={14} aria-hidden="true" />
                  <span>Full-Stack E-Commerce</span>
                </div>

                <div className="card-title-group">
                  <h3 id="project-flipkart-title" className="card-project-title">Flipkart Clone Pro</h3>
                  <span className="card-project-tagline">Full-Stack E-Commerce Platform &amp; Admin Management Portal</span>
                </div>

                <p className="card-project-description">
                  A full-stack e-commerce web platform inspired by Flipkart. Implements secure Bcrypt user authentication, dynamic product catalog with real-time search &amp; multi-tier filtering, persistent shopping cart &amp; wishlist, multi-step checkout with mock payments, and a role-based administrative portal for complete order, customer, and inventory management.
                </p>

                <div className="card-tech-list" aria-label="Technologies used in Flipkart Clone Pro">
                  <span className="card-tech-pill">Python (Flask)</span>
                  <span className="card-tech-pill">SQLAlchemy</span>
                  <span className="card-tech-pill">MySQL</span>
                  <span className="card-tech-pill">Vanilla JS</span>
                  <span className="card-tech-pill">HTML5 / CSS3</span>
                  <span className="card-tech-pill">Docker</span>
                  <span className="card-tech-pill">Railway</span>
                </div>

                <div className="card-action-bar">
                  <a
                    href="https://flipkart-clone-production-0c44.up.railway.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn-primary"
                    aria-label="Open Flipkart Clone Live Demo in a new tab"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>

                  <a
                    href="https://github.com/sanketamte96k/Flipkart-clone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn-secondary"
                    aria-label="View Flipkart Clone repository on GitHub in a new tab"
                  >
                    <GitHubIcon size={14} />
                    <span>View on GitHub</span>
                  </a>
                </div>
              </div>
            </motion.article>
          </motion.div>
        </section>

        {/* ==========================================================================
            ABOUT SECTION (Preserved)
            ========================================================================== */}
        <section id="about" className="preview-section" aria-label="About Section Preview">
          <div className="preview-section-card">
            <span className="preview-section-tag">
              <Code2 size={14} aria-hidden="true" />
              <span>Academic &amp; Engineering Profile • About Me</span>
            </span>
            <h2 className="preview-section-title">Background &amp; Academic Focus</h2>
            <p className="preview-section-desc">
              Pursuing a B.Tech in Information Technology at Zeal College of Engineering and Research,
              Pune (CGPA: 8.86). Specialized in core Java, OOP, data structures, and database architectures,
              with hands-on project experience in full-stack web platforms, Python/Flask backends, and modern
              reactive user interfaces.
            </p>
          </div>
        </section>

        {/* ==========================================================================
            CONTACT SECTION (Preserved & Enhanced with Verified Contact Info)
            ========================================================================== */}
        <section id="contact" className="preview-section" aria-label="Contact Section Preview">
          <div className="preview-section-card">
            <span className="preview-section-tag">
              <Mail size={14} aria-hidden="true" />
              <span>Get In Touch • Open for Opportunities</span>
            </span>
            <h2 className="preview-section-title">Let's Connect</h2>
            <p className="preview-section-desc">
              Actively seeking full-stack developer roles and high-impact software engineering internships.
              Feel free to reach out directly via email or connect on LinkedIn and GitHub.
            </p>
            <div className="preview-contact-grid">
              <a
                href="mailto:sanketamte6584@gmail.com"
                className="preview-contact-item"
                title="Send an email to Sanket Amte"
              >
                <Mail size={16} className="highlight-violet" aria-hidden="true" />
                <span>sanketamte6584@gmail.com</span>
              </a>
              <div className="preview-contact-item">
                <MapPin size={16} className="highlight-violet" aria-hidden="true" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==========================================================================
          FOOTER (With Verified URLs & Identified Status)
          ========================================================================== */}
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
                href="https://github.com/sanketamte96k"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Sanket Amte on GitHub"
              >
                <GitHubIcon size={15} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/sanket-amte-a55a61332/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Sanket Amte on LinkedIn"
              >
                <LinkedInIcon size={15} />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:sanketamte6584@gmail.com"
                className="social-link"
                title="Send direct email"
              >
                <Mail size={15} aria-hidden="true" />
                <span>Email</span>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Sanket Amte. All rights reserved.</span>
            <span>Cinematic 3D Developer Portfolio</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

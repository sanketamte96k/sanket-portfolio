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
  ShoppingBag,
  TrendingUp,
  Activity,
  Building2,
  Copy,
  Check,
  Cpu
} from 'lucide-react'
import {
  JavaIcon,
  PythonIcon,
  FlaskIcon,
  MySQLIcon,
  JavaScriptIcon,
  HTML5Icon,
  CSS3Icon,
  SQLAlchemyIcon,
  PandasIcon,
  GitIcon,
  GitHubTechIcon,
  SpringBootIcon,
  ReactIcon,
  TypeScriptIcon,
  PostgreSQLIcon,
  DockerIcon,
} from './TechIcons'
import './App.css'

// Technology lists for animated marquee
const techRow1 = [
  { name: 'Java', category: 'Core Language', icon: <JavaIcon /> },
  { name: 'Python', category: 'Backend & Data', icon: <PythonIcon /> },
  { name: 'Spring Boot', category: 'Enterprise Framework', icon: <SpringBootIcon /> },
  { name: 'Flask', category: 'Web Framework', icon: <FlaskIcon /> },
  { name: 'PostgreSQL', category: 'Relational DB', icon: <PostgreSQLIcon /> },
  { name: 'MySQL', category: 'Relational DB', icon: <MySQLIcon /> },
  { name: 'Docker', category: 'Containerization', icon: <DockerIcon /> },
  { name: 'Git', category: 'Version Control', icon: <GitIcon /> },
]

const techRow2 = [
  { name: 'React', category: 'UI Architecture', icon: <ReactIcon /> },
  { name: 'TypeScript', category: 'Typed JavaScript', icon: <TypeScriptIcon /> },
  { name: 'JavaScript', category: 'Frontend Logic', icon: <JavaScriptIcon /> },
  { name: 'HTML5', category: 'Semantic Web', icon: <HTML5Icon /> },
  { name: 'CSS3', category: 'Modern Styling', icon: <CSS3Icon /> },
  { name: 'SQLAlchemy', category: 'ORM & Modeling', icon: <SQLAlchemyIcon /> },
  { name: 'Pandas', category: 'Data Analysis', icon: <PandasIcon /> },
  { name: 'GitHub', category: 'CI/CD & Git', icon: <GitHubTechIcon /> },
]

// Duplicate arrays to create continuous seamless marquee looping
const row1Marquee = [...techRow1, ...techRow1]
const row2Marquee = [...techRow2, ...techRow2]

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
  const [copiedEmail, setCopiedEmail] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('sanketamte6584@gmail.com')
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2400)
    } catch {
      setCopiedEmail(false)
    }
  }

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
            <a href="#technologies" className="nav-link">Skills</a>
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
            TECHNOLOGIES I WORK WITH SECTION (#technologies)
            Premium dual-row infinite marquee
            ========================================================================== */}
        <section id="technologies" className="technologies-section" aria-label="Technologies I Work With">
          <div className="section-header-block text-center">
            <div className="section-eyebrow justify-center">
              <Cpu size={14} aria-hidden="true" />
              <span>Core Stack &amp; Tooling</span>
            </div>
            <h2 className="section-title">
              Technologies I <span className="section-title-gradient">Work With</span>
            </h2>
            <p className="section-subtitle centered-subtitle">
              Tools I use to build, develop, and ship projects.
            </p>
          </div>

          <div className="marquee-container" aria-label="Animated list of technologies">
            {/* Row 1: Leftward moving track */}
            <div className="marquee-row" aria-label="Technology stack row 1">
              <div className="marquee-track track-left">
                {row1Marquee.map((tech, idx) => (
                  <div key={`r1-${idx}`} className="tech-marquee-card" tabIndex={0} role="group" aria-label={tech.name}>
                    <div className="tech-marquee-icon">{tech.icon}</div>
                    <div className="tech-marquee-info">
                      <span className="tech-marquee-name">{tech.name}</span>
                      <span className="tech-marquee-role">{tech.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Rightward moving track */}
            <div className="marquee-row" aria-label="Technology stack row 2">
              <div className="marquee-track track-right">
                {row2Marquee.map((tech, idx) => (
                  <div key={`r2-${idx}`} className="tech-marquee-card" tabIndex={0} role="group" aria-label={tech.name}>
                    <div className="tech-marquee-icon">{tech.icon}</div>
                    <div className="tech-marquee-info">
                      <span className="tech-marquee-name">{tech.name}</span>
                      <span className="tech-marquee-role">{tech.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            SELECTED ENGINEERING PROJECTS SHOWCASE (#work)
            Exact 3 Projects: SignalForge, College Management System, Flipkart Clone
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
              Verified real-world software implementations across quantitative market research, full-stack college administration, and production e-commerce.
            </p>
          </div>

          <motion.div
            className="projects-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.02 }}
          >
            {/* PROJECT 1: SignalForge */}
            <motion.article
              className="project-card"
              variants={cardEntrance}
              custom={1}
              aria-labelledby="project-signalforge-title"
            >
              {/* Custom CSS Market Analytics Dashboard Preview */}
              <div className="card-visual-preview" aria-hidden="true">
                <div className="preview-window-bar">
                  <div className="window-dots">
                    <span className="window-dot dot-red" />
                    <span className="window-dot dot-yellow" />
                    <span className="window-dot dot-green" />
                  </div>
                  <span className="window-title">Market Analytics Engine</span>
                  <span className="window-badge">Historical Replay</span>
                </div>
                <div className="preview-body">
                  <div className="signalforge-timeframe-bar">
                    <div className="timeframe-chips">
                      <span className="tf-chip">1m</span>
                      <span className="tf-chip">5m</span>
                      <span className="tf-chip active">15m</span>
                      <span className="tf-chip">1D</span>
                    </div>
                    <span className="market-regime-tag">
                      <Activity size={11} />
                      Regime: Trending
                    </span>
                  </div>
                  <div className="signalforge-chart-mock">
                    <div className="candle-col"><div className="candle-wick" style={{ height: '8px' }} /><div className="candle-body green" style={{ height: '22px' }} /><div className="candle-wick" style={{ height: '6px' }} /></div>
                    <div className="candle-col"><div className="candle-wick" style={{ height: '6px' }} /><div className="candle-body green" style={{ height: '28px' }} /><div className="candle-wick" style={{ height: '8px' }} /></div>
                    <div className="candle-col"><div className="candle-wick" style={{ height: '10px' }} /><div className="candle-body red" style={{ height: '18px' }} /><div className="candle-wick" style={{ height: '4px' }} /></div>
                    <div className="candle-col"><div className="candle-wick" style={{ height: '5px' }} /><div className="candle-body green" style={{ height: '26px' }} /><div className="candle-wick" style={{ height: '9px' }} /></div>
                    <div className="candle-col"><div className="candle-wick" style={{ height: '7px' }} /><div className="candle-body red" style={{ height: '14px' }} /><div className="candle-wick" style={{ height: '6px' }} /></div>
                    <div className="candle-col"><div className="candle-wick" style={{ height: '4px' }} /><div className="candle-body green" style={{ height: '34px' }} /><div className="candle-wick" style={{ height: '7px' }} /></div>
                    <div className="candle-col"><div className="candle-wick" style={{ height: '9px' }} /><div className="candle-body green" style={{ height: '38px' }} /><div className="candle-wick" style={{ height: '5px' }} /></div>
                  </div>
                  <div className="signalforge-signal-bar">
                    <span>Signal: BUY [Paper Test]</span>
                    <span className="signal-meta">Slippage: 0.02% • Sim Only</span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="card-content-area">
                <div className="card-category-badge">
                  <TrendingUp size={14} aria-hidden="true" />
                  <span>Market Research &amp; Simulation</span>
                </div>

                <div className="card-title-group">
                  <h3 id="project-signalforge-title" className="card-project-title">SignalForge</h3>
                  <span className="card-project-tagline">Quantitative Market Research &amp; Paper-Trading System</span>
                </div>

                <p className="card-project-description">
                  A Python-based quantitative market research and strategy simulation platform. Engineered for multi-timeframe market data analysis and systematic backtesting using historical market-data replay. Incorporates technical-indicator strategy validation, market regime classification, and cost/slippage modeling. Operating purely in simulated paper-trading mode with strict manual decision guardrails, it does not execute live broker orders nor promise predictive financial returns.
                </p>

                <div className="card-tech-list" aria-label="Technologies used in SignalForge">
                  <span className="card-tech-pill">Python</span>
                  <span className="card-tech-pill">Pandas</span>
                  <span className="card-tech-pill">NumPy</span>
                  <span className="card-tech-pill">pytest</span>
                  <span className="card-tech-pill">Historical Data Replay</span>
                  <span className="card-tech-pill">Technical Indicators</span>
                  <span className="card-tech-pill">Multi-Timeframe Analysis</span>
                  <span className="card-tech-pill">Paper Trading</span>
                </div>

                <div className="card-action-bar">
                  <a
                    href="https://github.com/sanketamte96k/SignalForge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn-secondary"
                    aria-label="View SignalForge repository on GitHub in a new tab"
                  >
                    <GitHubIcon size={14} />
                    <span>View on GitHub</span>
                  </a>
                </div>
              </div>
            </motion.article>

            {/* PROJECT 2: College Management System */}
            <motion.article
              className="project-card"
              variants={cardEntrance}
              custom={2}
              aria-labelledby="project-cms-title"
            >
              {/* Custom CSS College Administration Dashboard Preview */}
              <div className="card-visual-preview" aria-hidden="true">
                <div className="preview-window-bar">
                  <div className="window-dots">
                    <span className="window-dot dot-red" />
                    <span className="window-dot dot-yellow" />
                    <span className="window-dot dot-green" />
                  </div>
                  <span className="window-title">ERP Admin Portal</span>
                  <span className="window-badge">Admission Workflow</span>
                </div>
                <div className="preview-body">
                  <div className="college-admin-metric-bar">
                    <span className="admin-metric-item">
                      <GraduationCap size={12} />
                      Active Admissions: 48
                    </span>
                    <span className="admin-metric-item">Verification: In Progress</span>
                  </div>
                  <div className="college-workflow-table">
                    <div className="workflow-row">
                      <span className="workflow-zprn">ZPRN: 124BT10420</span>
                      <span>B.Tech IT</span>
                      <span className="workflow-status-badge status-verified">VERIFIED</span>
                    </div>
                    <div className="workflow-row">
                      <span className="workflow-zprn">ZPRN: 124BT10421</span>
                      <span>Fee: Ledger Paid</span>
                      <span className="workflow-status-badge status-paid">PDF RECEIPT</span>
                    </div>
                  </div>
                  <div className="college-capacity-bar">
                    <span>Intake Capacity: 92%</span>
                    <span>Academic Year: 2026-27</span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="card-content-area">
                <div className="card-category-badge">
                  <Building2 size={14} aria-hidden="true" />
                  <span>Institutional Administration &amp; ERP</span>
                </div>

                <div className="card-title-group">
                  <h3 id="project-cms-title" className="card-project-title">College Management System</h3>
                  <span className="card-project-tagline">Institutional ERP &amp; Student Admission Platform</span>
                </div>

                <p className="card-project-description">
                  A centralized full-stack institutional administration platform developed to manage core college workflows. Streamlines student admission application processing, automated institutional ID (ZPRN) assignment, document verification workflows, academic department and intake capacity management, student fee ledgers with downloadable PDF receipts, and administrative oversight.
                </p>

                <div className="card-tech-list" aria-label="Technologies used in College Management System">
                  <span className="card-tech-pill">Python (Flask)</span>
                  <span className="card-tech-pill">MySQL</span>
                  <span className="card-tech-pill">HTML5 / CSS3</span>
                  <span className="card-tech-pill">JavaScript</span>
                  <span className="card-tech-pill">ReportLab (PDF)</span>
                  <span className="card-tech-pill">Docker</span>
                </div>

                <div className="card-action-bar">
                  <a
                    href="https://github.com/sanketamte96k/College-Management-Administration-System"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn-secondary"
                    aria-label="View College Management System repository on GitHub in a new tab"
                  >
                    <GitHubIcon size={14} />
                    <span>View on GitHub</span>
                  </a>
                </div>
              </div>
            </motion.article>

            {/* PROJECT 3: Flipkart Clone */}
            <motion.article
              className="project-card"
              variants={cardEntrance}
              custom={3}
              aria-labelledby="project-flipkart-title"
            >
              {/* Custom CSS E-Commerce Storefront Preview */}
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
                  <h3 id="project-flipkart-title" className="card-project-title">Flipkart Clone</h3>
                  <span className="card-project-tagline">Full-Stack E-Commerce Platform &amp; Admin Management Portal</span>
                </div>

                <p className="card-project-description">
                  A full-stack e-commerce web platform inspired by Flipkart with complete customer shopping workflows and an administrative portal. Implements secure Bcrypt password hashing and session management, dynamic multi-category product catalog with real-time search &amp; multi-tier filtering, persistent shopping cart &amp; wishlist, multi-step checkout simulation, and a role-based admin portal for inventory, order status updates, and customer records.
                </p>

                <div className="card-tech-list" aria-label="Technologies used in Flipkart Clone">
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
            ABOUT SECTION (Editorial Layout)
            ========================================================================== */}
        <section id="about" className="about-section" aria-label="About Sanket Amte">
          <div className="section-header-block">
            <div className="section-eyebrow">
              <Code2 size={14} aria-hidden="true" />
              <span>Academic &amp; Engineering Profile</span>
            </div>
            <h2 className="section-title">
              Engineering Background &amp; <span className="section-title-gradient">Core Competencies</span>
            </h2>
            <p className="section-subtitle">
              Combining strong computer science fundamentals with hands-on full-stack development across Java enterprise backends, Python architectures, and reactive user interfaces.
            </p>
          </div>

          <div className="about-grid">
            {/* Left Card: Verified Academic Profile */}
            <div className="about-card about-card-primary">
              <div className="about-card-badge">
                <GraduationCap size={15} aria-hidden="true" />
                <span>Formal Education</span>
              </div>
              <h3 className="about-card-title">B.Tech in Information Technology</h3>
              <p className="about-institution">
                Zeal College of Engineering and Research, Pune
              </p>
              <div className="about-metric-pill">
                <span className="metric-label">Cumulative GPA</span>
                <span className="metric-value">8.86 / 10.0</span>
              </div>
              <p className="about-card-desc">
                Specialized in Core Java, Object-Oriented Programming, Data Structures &amp; Algorithms, Database Management Systems, and Web Architectures. Focused on building clean, high-performance software systems with verifiable reliability.
              </p>
            </div>

            {/* Right Card: Technical Competency Matrix */}
            <div className="about-card about-card-secondary">
              <div className="about-card-badge">
                <Terminal size={15} aria-hidden="true" />
                <span>Technical Stack</span>
              </div>
              <h3 className="about-card-title">Verified Engineering Competencies</h3>
              
              <div className="competency-group">
                <span className="competency-group-title">Enterprise Backend &amp; Architecture</span>
                <div className="competency-pills">
                  <span className="competency-pill">Java 17+</span>
                  <span className="competency-pill">Spring Boot</span>
                  <span className="competency-pill">PostgreSQL</span>
                  <span className="competency-pill">MySQL</span>
                  <span className="competency-pill">RESTful APIs</span>
                </div>
              </div>

              <div className="competency-group">
                <span className="competency-group-title">Frontend &amp; Reactive UI</span>
                <div className="competency-pills">
                  <span className="competency-pill">React</span>
                  <span className="competency-pill">TypeScript</span>
                  <span className="competency-pill">HTML5 / CSS3</span>
                  <span className="competency-pill">Vanilla JS</span>
                </div>
              </div>

              <div className="competency-group">
                <span className="competency-group-title">Tooling, DevOps &amp; Testing</span>
                <div className="competency-pills">
                  <span className="competency-pill">Docker</span>
                  <span className="competency-pill">Git / GitHub</span>
                  <span className="competency-pill">ReportLab</span>
                  <span className="competency-pill">pytest</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            CONTACT SECTION (Luxury Interaction Hub)
            ========================================================================== */}
        <section id="contact" className="contact-section" aria-label="Contact Section">
          <div className="contact-card">
            <div className="contact-header">
              <div className="section-eyebrow">
                <Mail size={14} aria-hidden="true" />
                <span>Get In Touch • Open for Opportunities</span>
              </div>
              <h2 className="section-title">
                Let's Build <span className="section-title-gradient">Something Exceptional</span>
              </h2>
              <p className="section-subtitle">
                Actively seeking full-stack developer roles and high-impact software engineering internships. Feel free to reach out directly via email or connect on LinkedIn and GitHub.
              </p>
            </div>

            <div className="contact-body">
              <div className="contact-primary-row">
                <div className="contact-email-box">
                  <span className="contact-label">Direct Email</span>
                  <a
                    href="mailto:sanketamte6584@gmail.com"
                    className="contact-email-link"
                    title="Send an email to Sanket Amte"
                  >
                    <Mail size={18} className="highlight-violet" aria-hidden="true" />
                    <span>sanketamte6584@gmail.com</span>
                  </a>
                </div>

                <div className="contact-actions-row">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className={`contact-copy-btn ${copiedEmail ? 'copied' : ''}`}
                    aria-label="Copy email address to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={15} aria-hidden="true" />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={15} aria-hidden="true" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                  <span className="sr-only" aria-live="polite">
                    {copiedEmail ? 'Email address copied to clipboard' : ''}
                  </span>

                  <a
                    href="mailto:sanketamte6584@gmail.com"
                    className="contact-send-btn"
                    title="Send direct email"
                  >
                    <span>Send Message</span>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="contact-meta-row">
                <div className="contact-meta-item">
                  <MapPin size={15} className="highlight-violet" aria-hidden="true" />
                  <span>Pune, Maharashtra, India</span>
                </div>
                <div className="contact-social-chips">
                  <a
                    href="https://github.com/sanketamte96k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-chip"
                    aria-label="View Sanket Amte on GitHub in a new tab"
                  >
                    <GitHubIcon size={14} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sanket-amte-a55a61332/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-chip"
                    aria-label="View Sanket Amte on LinkedIn in a new tab"
                  >
                    <LinkedInIcon size={14} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==========================================================================
          FOOTER (Preserved With Verified URLs)
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

import { useState, useRef, useEffect, type MouseEvent } from 'react'
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
  Copy,
  Cpu,
  Compass,
  CheckCircle2,
  Check,
  ArrowRight
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
import IntroLoader from './IntroLoader'

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

// Interactive 3D Perspective Card with dynamic specular glare
function About3DCard({
  children,
  className = '',
  glowColor = 'violet',
}: {
  children: React.ReactNode
  className?: string
  glowColor?: 'violet' | 'blue'
}) {
  const shouldReduceMotion = useReducedMotion()
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none) and (pointer: coarse)').matches) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Restrained, subtle 3D tilt: max 5 degrees
    const rotateX = -((y - centerY) / centerY) * 5
    const rotateY = ((x - centerX) / centerX) * 5

    setRotate({ x: rotateX, y: rotateY })
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.16,
    })
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
    setGlare({ x: 50, y: 50, opacity: 0 })
  }

  return (
    <div
      ref={cardRef}
      className={`about-3d-card-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: shouldReduceMotion
          ? 'none'
          : `perspective(1100px) rotateX(${rotate.x.toFixed(2)}deg) rotateY(${rotate.y.toFixed(2)}deg)`,
      }}
    >
      <div className="about-3d-card-inner">
        {children}
        {!shouldReduceMotion && (
          <div
            className="about-3d-glare"
            style={{
              background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(${glowColor === 'violet' ? '167, 139, 250' : '96, 165, 250'}, ${glare.opacity}), transparent 65%)`,
            }}
            aria-hidden="true"
          />
        )}
        <div className={`about-3d-rim-light about-rim-${glowColor}`} aria-hidden="true" />
      </div>
    </div>
  )
}

// Compact Technology Execution Roadmap Interface & Data
interface CompactRoadmapStage {
  number: string
  title: string
  statusBadge: string
  statusType: 'active' | 'completed' | 'applied' | 'planned'
  note: string
  techs: { name: string; icon: React.ReactNode }[]
}

const compactRoadmapStages: CompactRoadmapStage[] = [
  {
    number: '01',
    title: 'Frontend',
    statusBadge: 'Applied in Projects',
    statusType: 'applied',
    note: 'Modern reactive UI architecture & typed component state.',
    techs: [
      { name: 'HTML5', icon: <HTML5Icon /> },
      { name: 'CSS3', icon: <CSS3Icon /> },
      { name: 'JavaScript', icon: <JavaScriptIcon /> },
      { name: 'React', icon: <ReactIcon /> },
      { name: 'TypeScript', icon: <TypeScriptIcon /> },
    ],
  },
  {
    number: '02',
    title: 'Backend',
    statusBadge: 'Core Mastered • Collections Active',
    statusType: 'active',
    note: 'Core Java & OOP completed; Collections Framework in progress.',
    techs: [
      { name: 'Java', icon: <JavaIcon /> },
      { name: 'Spring Boot', icon: <SpringBootIcon /> },
      { name: 'REST APIs', icon: <Terminal size={12} /> },
    ],
  },
  {
    number: '03',
    title: 'Database',
    statusBadge: 'MySQL Applied • JDBC Next',
    statusType: 'applied',
    note: 'Relational schema design, SQL querying & JDBC connectivity.',
    techs: [
      { name: 'SQL', icon: <PostgreSQLIcon /> },
      { name: 'MySQL', icon: <MySQLIcon /> },
      { name: 'JDBC', icon: <Layers size={12} /> },
    ],
  },
  {
    number: '04',
    title: 'Tools & DevOps',
    statusBadge: 'Applied in Workflows',
    statusType: 'applied',
    note: 'Version control, GitHub collaboration & cloud deployment.',
    techs: [
      { name: 'Git', icon: <GitIcon /> },
      { name: 'GitHub', icon: <GitHubTechIcon /> },
      { name: 'Deployment', icon: <DockerIcon /> },
    ],
  },
  {
    number: '05',
    title: 'DSA & Interview Prep',
    statusBadge: 'Foundations Planned',
    statusType: 'planned',
    note: 'Time/space complexity, core data structures & problem-solving.',
    techs: [
      { name: 'Complexity', icon: <TrendingUp size={12} /> },
      { name: 'Data Structures', icon: <Code2 size={12} /> },
      { name: 'Problem Solving', icon: <Activity size={12} /> },
    ],
  },
  {
    number: '06',
    title: 'Full Stack Projects',
    statusBadge: 'Portfolio Systems',
    statusType: 'applied',
    note: 'End-to-end full-stack integration, testing & placement readiness.',
    techs: [
      { name: 'Integration', icon: <Layers size={12} /> },
      { name: 'Testing', icon: <CheckCircle2 size={12} /> },
      { name: 'Deployment', icon: <ExternalLink size={12} /> },
    ],
  },
]

// Duplicate array to enable seamless infinite moving marquee looping
const roadmapMarqueeStages = [...compactRoadmapStages, ...compactRoadmapStages]

// Compact 3D Roadmap Card Component with Restrained Tilt
function CompactRoadmap3DCard({ stage }: { stage: CompactRoadmapStage }) {
  const shouldReduceMotion = useReducedMotion()
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none) and (pointer: coarse)').matches) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    // Restrained, subtle tilt: max 2.5 degrees
    const rotateX = -(y / (rect.height / 2)) * 6
    const rotateY = (x / (rect.width / 2)) * 6
    setTilt({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <div
      ref={cardRef}
      className={`compact-roadmap-card status-${stage.statusType}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: shouldReduceMotion
          ? 'none'
          : `perspective(800px) rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg)`,
      }}
    >
      <div className="compact-card-header">
        <div className="compact-step-indicator">
          <span className="compact-step-node" aria-hidden="true" />
          <span className="compact-step-number">{stage.number}</span>
          <h3 className="compact-step-title">{stage.title}</h3>
        </div>

        <span className={`compact-status-badge badge-${stage.statusType}`}>
          {stage.statusType === 'active' && <span className="active-mini-pulse" aria-hidden="true" />}
          {stage.statusBadge}
        </span>
      </div>

      <div className="compact-tech-chips-row" aria-label={`Technologies in ${stage.title}`}>
        {stage.techs.map((tech, idx) => (
          <div key={idx} className="compact-tech-chip">
            <span className="compact-tech-chip-icon" aria-hidden="true">
              {tech.icon}
            </span>
            <span className="compact-tech-chip-label">{tech.name}</span>
          </div>
        ))}
      </div>

      <p className="compact-step-note">{stage.note}</p>
    </div>
  )
}

// Interactive 3D Perspective Card for Featured Projects with subtle tilt & specular glow
function Project3DCard({
  children,
  className = '',
  glowColor = 'violet',
}: {
  children: React.ReactNode
  className?: string
  glowColor?: 'violet' | 'blue'
}) {
  const shouldReduceMotion = useReducedMotion()
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none) and (pointer: coarse)').matches) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Restrained subtle tilt: max 2.5 degrees for premium stability
    const rotateX = -((y - centerY) / centerY) * 2.5
    const rotateY = ((x - centerX) / centerX) * 2.5

    setTilt({ x: rotateX, y: rotateY })
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.14,
    })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setGlare({ x: 50, y: 50, opacity: 0 })
  }

  return (
    <div
      ref={cardRef}
      className={`project-card-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: shouldReduceMotion
          ? 'none'
          : `perspective(1000px) rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg)`,
      }}
    >
      <div className="project-card-inner">
        {children}
        {!shouldReduceMotion && (
          <div
            className="project-card-glare"
            style={{
              background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(${glowColor === 'violet' ? '167, 139, 250' : '96, 165, 250'
                }, ${glare.opacity}), transparent 60%)`,
            }}
            aria-hidden="true"
          />
        )}
        <div className={`project-card-rim-light rim-${glowColor}`} aria-hidden="true" />
      </div>
    </div>
  )
}

// Stable current year to avoid calling new Date() during render
const currentYear = new Date().getFullYear()

export default function App() {
  const shouldReduceMotion = useReducedMotion()
  const [imageError, setImageError] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [copiedEmail, setCopiedEmail] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Cinematic Entrance Intro State
  const [showIntro, setShowIntro] = useState(() => !shouldReduceMotion)
  const [heroReady, setHeroReady] = useState(() => Boolean(shouldReduceMotion))
  const [introKey, setIntroKey] = useState(0)

  // Safety fallback watchdog: ensure hero is always visible even if animation stalls
  useEffect(() => {
    const isPreview =
      typeof window !== 'undefined' &&
      new URLSearchParams(window.location.search).get('previewIntro') === 'true'
    if (isPreview || shouldReduceMotion) return

    const fallbackSafetyTimer = setTimeout(() => {
      setHeroReady(true)
      setShowIntro(false)
    }, 3200)

    return () => clearTimeout(fallbackSafetyTimer)
  }, [shouldReduceMotion])

  const handleIntroStartExit = () => {
    setHeroReady(true)
  }

  const handleIntroComplete = () => {
    setShowIntro(false)
  }

  const handleReplayIntro = () => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    setHeroReady(false)
    setShowIntro(true)
    setIntroKey((k) => k + 1)
  }

  const handleCopyEmail = async () => {
    const email = 'sanketamte6584@gmail.com'
    let copied = false

    // Attempt navigator.clipboard with a 300ms timeout so it never hangs in restricted contexts
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      try {
        await Promise.race([
          navigator.clipboard.writeText(email),
          new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 300)),
        ])
        copied = true
      } catch {
        copied = false
      }
    }

    // Fallback using textarea if navigator.clipboard failed or timed out
    if (!copied && typeof document !== 'undefined') {
      try {
        const textArea = document.createElement('textarea')
        textArea.value = email
        textArea.setAttribute('readonly', '')
        textArea.style.position = 'fixed'
        textArea.style.left = '-9999px'
        textArea.style.top = '-9999px'
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
      } catch {
        // graceful fallback
      }
    }

    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2400)
  }

  // Subtle 3D portrait perspective tilt
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none) and (pointer: coarse)').matches) return
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const rotateY = (x / (rect.width / 2)) * 6
    const rotateX = -(y / (rect.height / 2)) * 6
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
      {/* Luxury Cinematic Website Entrance Overlay */}
      {showIntro && (
        <IntroLoader
          key={introKey}
          onStartExit={handleIntroStartExit}
          onComplete={handleIntroComplete}
        />
      )}

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
          <a
            href="#hero"
            className="nav-brand"
            aria-label="Sanket Amte Portfolio Home (Click to replay entrance animation)"
            onClick={(e) => {
              e.preventDefault()
              handleReplayIntro()
            }}
          >
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
            <a href="#roadmap" className="nav-link">Roadmap</a>
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
            {/* Left Column: Editorial Headline, Identity, Bio, Actions, Tech Strip */}
            <motion.div
              className="hero-left"
              variants={staggerContainer}
              initial="hidden"
              animate={heroReady ? 'visible' : 'hidden'}
            >
              {/* Status & Academic Identity Badges */}
              <motion.div className="hero-meta-row" variants={fadeInUp} custom={1}>
                <div className="hero-status-pill">
                  <span className="hero-status-ping" aria-hidden="true" />
                  <span className="hero-status-text">Available for Roles &amp; Internships • 2026</span>
                </div>
                <div className="hero-academic-pill">
                  <GraduationCap size={13} aria-hidden="true" />
                  <span>Zeal College of Engineering, Pune (8.34 CGPA)</span>
                </div>
              </motion.div>

              {/* Dramatic Editorial Headline */}
              <div className="hero-headline-container">
                <motion.div className="hero-identity-kicker" variants={fadeInUp} custom={2}>
                  <span className="identity-lead">SANKET AMTE</span>
                  <span className="identity-divider" aria-hidden="true">/</span>
                  <span className="identity-role">JAVA FULL STACK SOFTWARE ENGINEER</span>
                </motion.div>

                <h1
                  className="hero-title hero-title-interactive"
                  aria-label="Sanket Amte — Java Full Stack Developer"
                  tabIndex={0}
                >
                  <motion.span className="title-line title-line-1" variants={fadeInUp} custom={3}>
                    <span className="title-text-shimmer">JAVA FULL STACK</span>
                  </motion.span>
                  <motion.span className="title-line title-line-2" variants={fadeInUp} custom={4}>
                    <span className="title-gradient-hero title-text-shimmer">DEVELOPER</span>
                  </motion.span>
                </h1>
              </div>

              {/* Concise Factual Introduction */}
              <motion.p className="hero-bio" variants={fadeInUp} custom={5}>
                Information Technology engineering undergraduate at{' '}
                <strong className="text-white">Zeal College of Engineering and Research, Pune</strong> (CGPA 8.34).
                Specialized in architecting high-performance Java backend microservices with Spring Boot,
                robust relational databases, and crafting sleek, modern web experiences.
              </motion.p>

              {/* Refined Action CTAs */}
              <motion.div className="hero-actions" variants={fadeInUp} custom={6}>
                <a href="#work" className="btn-primary-hero" id="cta-explore-work">
                  <span>Explore My Work</span>
                  <ArrowDown size={15} aria-hidden="true" className="btn-down-arrow" />
                </a>
                <a href="#about" className="btn-secondary-hero" id="cta-about-me">
                  <Code2 size={15} aria-hidden="true" />
                  <span>About Me</span>
                </a>
                <a href="#contact" className="btn-secondary-hero" id="cta-contact">
                  <Mail size={15} aria-hidden="true" />
                  <span>Contact</span>
                </a>
              </motion.div>


            </motion.div>

            {/* Right Column: High-End Cinematic 3D Portrait Stage (Significantly Larger) */}
            <motion.div
              className="hero-right"
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.92, y: shouldReduceMotion ? 0 : 20 }}
              animate={
                heroReady
                  ? { opacity: 1, scale: 1, y: 0 }
                  : { opacity: 0, scale: shouldReduceMotion ? 1 : 0.92, y: shouldReduceMotion ? 0 : 20 }
              }
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="portrait-scene"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* Soft Animated Radial Glow Behind Portrait */}
                <div className="portrait-ambient-glow" aria-hidden="true" />

                {/* Precision Astronomical Orbit System (Behind Card) */}
                <div className="orbit-system" aria-hidden="true">
                  <div className="orbit-ring orbit-ring-1">
                    <span className="orbit-node node-violet" />
                  </div>
                  <div className="orbit-ring orbit-ring-2">
                    <span className="orbit-node node-blue" />
                  </div>
                </div>

                {/* 3D Perspective Card Container (Significantly Enlarged) */}
                <div
                  ref={cardRef}
                  className="portrait-card-wrapper"
                  style={{
                    transform: shouldReduceMotion
                      ? 'none'
                      : `perspective(1100px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
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
                      /* Tasteful Designed Fallback if image fails to load */
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
                    {/* Cinematic Studio Lighting Rim & Vignette Overlays */}
                    <div className="portrait-rim-light" aria-hidden="true" />
                    <div className="portrait-lighting-overlay" aria-hidden="true" />
                  </div>

                  {/* Refined Floating Glass Badges */}
                  <div className="floating-glass-card floating-badge-top">
                    <div className="floating-badge-icon icon-academic">
                      <GraduationCap size={15} aria-hidden="true" />
                    </div>
                    <div className="floating-badge-content">
                      <span className="floating-badge-title">8.34 CGPA • Merit</span>
                      <span className="floating-badge-subtitle">B.Tech IT • Zeal Pune</span>
                    </div>
                  </div>

                  <div className="floating-glass-card floating-badge-bottom">
                    <div className="floating-badge-icon icon-backend">
                      <Terminal size={15} aria-hidden="true" />
                    </div>
                    <div className="floating-badge-content">
                      <span className="floating-badge-title">Enterprise Backend</span>
                      <span className="floating-badge-subtitle">Java • Spring Boot • SQL</span>
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
            COMPACT TECHNOLOGY EXECUTION ROADMAP (#roadmap)
            Compact sequential technology timeline with glowing connectors
            ========================================================================== */}
        <section id="roadmap" className="roadmap-section compact-roadmap-section" aria-label="Java Full Stack Developer Execution Roadmap">
          <div className="section-header-block text-center compact-header-block">
            <div className="section-eyebrow justify-center">
              <Compass size={13} aria-hidden="true" />
              <span>Core Execution Roadmap</span>
            </div>
            <h2 className="section-title compact-title">
              Java Full Stack Developer — <span className="section-title-gradient">Execution Roadmap</span>
            </h2>
            <p className="section-subtitle centered-subtitle compact-subtitle">
              Six sequential engineering milestones bridging core systems, reactive interfaces, and production deployment.
            </p>
          </div>

          {/* One-Line Continuous Moving Animation Track */}
          <div className="roadmap-marquee-container" aria-label="Animated execution roadmap sequence">
            <div className="roadmap-marquee-row">
              <div className="roadmap-marquee-track track-roadmap">
                {roadmapMarqueeStages.map((stage, idx) => (
                  <div key={`roadmap-stage-${stage.number}-${idx}`} className="roadmap-marquee-item">
                    <CompactRoadmap3DCard stage={stage} />
                    <div className="roadmap-flow-arrow" aria-hidden="true">
                      <span className="flow-line" />
                      <ArrowRight size={13} className="flow-arrow-icon" />
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
          {/* Studio Editorial Section Header */}
          <div className="section-header-block">
            <div className="section-eyebrow">
              <Layers size={13} aria-hidden="true" />
              <span>Selected Works // 2025–2026</span>
            </div>
            <div className="section-title-row">
              <h2 className="section-title">
                Featured Software &amp; <span className="section-title-gradient">System Architectures</span>
              </h2>
              <div className="section-meta-chip" aria-hidden="true">
                <span className="meta-pulse-dot" />
                <span>3 PRODUCTION REPOSITORIES</span>
              </div>
            </div>
            <p className="section-subtitle">
              Verified software engineering implementations spanning quantitative market research, full-stack enterprise administration, and production e-commerce.
            </p>
          </div>

          <motion.div
            className="editorial-showcase-container"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.01, margin: "100px 0px" }}
          >
            {/* ================================================================
                PROJECT 01 (FLAGSHIP): SIGNALFORGE
                Panoramic Software Preview Centerpiece + Compact Narrative Dossier
                ================================================================ */}
            <motion.article
              className="flagship-showcase-article"
              variants={cardEntrance}
              custom={1}
              aria-labelledby="project-signalforge-title"
            >
              <Project3DCard className="flagship-showcase-card" glowColor="violet">
                {/* 1. Flagship Meta Bar */}
                <div className="flagship-header-bar">
                  <div className="flagship-index-group">
                    <span className="editorial-num">01</span>
                    <span className="editorial-divider" aria-hidden="true">/</span>
                    <span className="flagship-category">QUANTITATIVE RESEARCH &amp; BACKTESTING ENGINE</span>
                  </div>
                  <div className="flagship-header-actions">
                    <span className="flagship-mode-pill">Paper Simulation Mode</span>
                    <a
                      href="https://github.com/sanketamte96k/SignalForge"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-icon-link"
                      aria-label="View SignalForge code on GitHub"
                    >
                      <GitHubIcon size={14} />
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                  </div>
                </div>

                {/* 2. Visual Centerpiece: Panoramic Trading Terminal Viewport */}
                <div className="panoramic-preview-viewport" aria-hidden="true">
                  <div className="terminal-titlebar">
                    <div className="terminal-dots">
                      <span className="dot dot-close" />
                      <span className="dot dot-min" />
                      <span className="dot dot-max" />
                    </div>
                    <span className="terminal-path">signalforge // multi_timeframe_replay.py</span>
                    <div className="terminal-quote-strip">
                      <span className="ticker-code">NIFTY50</span>
                      <span className="ticker-price">24,682.40</span>
                      <span className="ticker-change">+1.34%</span>
                    </div>
                  </div>

                  <div className="panoramic-chart-stage">
                    {/* Price Axes Guide */}
                    <div className="chart-y-axis">
                      <span>24,800.00</span>
                      <span>24,650.00</span>
                      <span>24,500.00</span>
                      <span>24,350.00</span>
                    </div>

                    {/* SVG Spline Mesh */}
                    <svg className="panoramic-svg-chart" viewBox="0 0 900 170" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="panoramicChartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0.22" />
                          <stop offset="45%" stopColor="#8b5cf6" stopOpacity="0.08" />
                          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
                        </linearGradient>
                        <linearGradient id="panoramicSplineStroke" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="35%" stopColor="#8b5cf6" />
                          <stop offset="70%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#34d399" />
                        </linearGradient>
                      </defs>

                      {/* Reference Gridlines */}
                      <line x1="0" y1="35" x2="900" y2="35" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />
                      <line x1="0" y1="80" x2="900" y2="80" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />
                      <line x1="0" y1="125" x2="900" y2="125" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />

                      {/* Area Fill */}
                      <path
                        d="M 0 140 Q 120 125, 240 110 T 480 82 T 700 48 T 900 25 L 900 170 L 0 170 Z"
                        fill="url(#panoramicChartGradient)"
                      />
                      {/* Animated Spline Path */}
                      <path
                        d="M 0 140 Q 120 125, 240 110 T 480 82 T 700 48 T 900 25"
                        fill="none"
                        stroke="url(#panoramicSplineStroke)"
                        strokeWidth="2.4"
                        className="panoramic-animated-spline"
                      />
                    </svg>

                    {/* Realistic Candlestick Price Action */}
                    <div className="panoramic-candles-row">
                      <div className="candle-col"><div className="candle-wick" style={{ height: '7px' }} /><div className="candle-body green" style={{ height: '18px' }} /><div className="candle-wick" style={{ height: '5px' }} /></div>
                      <div className="candle-col"><div className="candle-wick" style={{ height: '5px' }} /><div className="candle-body green" style={{ height: '24px' }} /><div className="candle-wick" style={{ height: '6px' }} /></div>
                      <div className="candle-col"><div className="candle-wick" style={{ height: '8px' }} /><div className="candle-body red" style={{ height: '14px' }} /><div className="candle-wick" style={{ height: '4px' }} /></div>
                      <div className="candle-col"><div className="candle-wick" style={{ height: '4px' }} /><div className="candle-body green" style={{ height: '22px' }} /><div className="candle-wick" style={{ height: '7px' }} /></div>
                      <div className="candle-col"><div className="candle-wick" style={{ height: '6px' }} /><div className="candle-body red" style={{ height: '11px' }} /><div className="candle-wick" style={{ height: '5px' }} /></div>
                      <div className="candle-col"><div className="candle-wick" style={{ height: '5px' }} /><div className="candle-body green" style={{ height: '28px' }} /><div className="candle-wick" style={{ height: '6px' }} /></div>
                      <div className="candle-col"><div className="candle-wick" style={{ height: '4px' }} /><div className="candle-body green" style={{ height: '32px' }} /><div className="candle-wick" style={{ height: '4px' }} /></div>
                      <div className="candle-col"><div className="candle-wick" style={{ height: '7px' }} /><div className="candle-body red" style={{ height: '10px' }} /><div className="candle-wick" style={{ height: '4px' }} /></div>
                      <div className="candle-col"><div className="candle-wick" style={{ height: '4px' }} /><div className="candle-body green" style={{ height: '36px' }} /><div className="candle-wick" style={{ height: '5px' }} /></div>
                      <div className="candle-col"><div className="candle-wick" style={{ height: '5px' }} /><div className="candle-body green" style={{ height: '40px' }} /><div className="candle-wick" style={{ height: '4px' }} /></div>
                    </div>

                    {/* Base Volume Histogram */}
                    <div className="panoramic-volume-bars">
                      <span className="vol-bar green" style={{ height: '9px' }} />
                      <span className="vol-bar green" style={{ height: '16px' }} />
                      <span className="vol-bar red" style={{ height: '11px' }} />
                      <span className="vol-bar green" style={{ height: '20px' }} />
                      <span className="vol-bar red" style={{ height: '10px' }} />
                      <span className="vol-bar green" style={{ height: '24px' }} />
                      <span className="vol-bar green" style={{ height: '28px' }} />
                      <span className="vol-bar red" style={{ height: '12px' }} />
                      <span className="vol-bar green" style={{ height: '32px' }} />
                      <span className="vol-bar green" style={{ height: '35px' }} />
                    </div>

                    {/* Time Ticks */}
                    <div className="chart-time-ticks">
                      <span>09:15</span>
                      <span>10:30</span>
                      <span>12:00</span>
                      <span>13:30</span>
                      <span>15:00</span>
                      <span>CLOSE</span>
                    </div>
                  </div>
                </div>

                {/* 3. Compact Editorial Dossier Footer */}
                <div className="flagship-dossier-row">
                  <div className="dossier-identity">
                    <h3 id="project-signalforge-title" className="dossier-title">SignalForge</h3>
                    <p className="dossier-description">
                      A quantitative strategy backtesting platform engineered for multi-timeframe market data replay. Incorporates technical-indicator validation, regime classification, and cost/slippage modeling in a strict paper-trading simulation environment.
                    </p>
                  </div>

                  <div className="dossier-actions-col">
                    <div className="dossier-tech-tags" aria-label="Technologies used in SignalForge">
                      <span className="tech-badge">Python</span>
                      <span className="tech-badge">Pandas</span>
                      <span className="tech-badge">NumPy</span>
                      <span className="tech-badge">pytest</span>
                      <span className="tech-badge">Data Replay</span>
                    </div>

                    <a
                      href="https://github.com/sanketamte96k/SignalForge"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="studio-primary-link"
                      aria-label="View SignalForge repository on GitHub in a new tab"
                    >
                      <GitHubIcon size={14} />
                      <span>View on GitHub</span>
                      <ArrowUpRight size={13} className="btn-arrow" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </Project3DCard>
            </motion.article>

            {/* ================================================================
                ROW 2: BALANCED SUPPORTING SHOWCASES (CMS & FLIPKART)
                2-Column Asymmetric Grid with Distinctive Previews
                ================================================================ */}
            <div className="supporting-showcase-grid">
              {/* PROJECT 02: College Management System */}
              <motion.article
                className="supporting-project-article"
                variants={cardEntrance}
                custom={2}
                aria-labelledby="project-cms-title"
              >
                <Project3DCard className="supporting-project-card" glowColor="blue">
                  {/* Meta Bar */}
                  <div className="supporting-header-bar">
                    <div className="supporting-index-group">
                      <span className="editorial-num">02</span>
                      <span className="editorial-divider" aria-hidden="true">/</span>
                      <span className="supporting-category">INSTITUTIONAL WORKFLOW ERP</span>
                    </div>
                    <a
                      href="https://github.com/sanketamte96k/College-Management-Administration-System"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-icon-link"
                      aria-label="View College Management System code on GitHub"
                    >
                      <GitHubIcon size={14} />
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                  </div>

                  {/* Software Preview: Clean Enterprise Admin Matrix */}
                  <div className="supporting-preview-stage stage-erp" aria-hidden="true">
                    <div className="erp-console-header">
                      <span className="erp-app-label">ZEAL ERP • Student Administration</span>
                      <span className="erp-status-indicator">Queue: Active</span>
                    </div>

                    <div className="erp-tabular-matrix">
                      <div className="erp-row erp-header-row">
                        <span className="col-prn">APPLICANT ID</span>
                        <span className="col-dept">DEPARTMENT</span>
                        <span className="col-status">VERIFICATION</span>
                      </div>
                      <div className="erp-row">
                        <span className="col-prn text-white">ZPRN: 124BT10420</span>
                        <span className="col-dept">B.Tech IT</span>
                        <span className="col-status"><span className="status-dot green" /> Verified</span>
                      </div>
                      <div className="erp-row">
                        <span className="col-prn text-white">ZPRN: 124BT10421</span>
                        <span className="col-dept">Fee Ledger</span>
                        <span className="col-status"><span className="status-dot violet" /> Paid [PDF]</span>
                      </div>
                    </div>

                    <div className="erp-meter-row">
                      <div className="meter-labels">
                        <span>DEPARTMENT INTAKE CAPACITY</span>
                        <span className="meter-val">92%</span>
                      </div>
                      <div className="meter-track">
                        <div className="meter-fill" style={{ width: '92%' }} />
                      </div>
                    </div>
                  </div>

                  {/* Narrative Body */}
                  <div className="supporting-body">
                    <div className="supporting-title-group">
                      <h3 id="project-cms-title" className="supporting-title">College Management System</h3>
                      <span className="supporting-tagline">Institutional ERP &amp; Automated Student Admission System</span>
                    </div>

                    <p className="supporting-description">
                      A centralized institutional administration platform managing core college workflows. Streamlines student admission processing, automated ZPRN assignment, document verification, academic intake capacity, and fee ledgers with downloadable PDF receipts.
                    </p>

                    <div className="supporting-tech-tags" aria-label="Technologies used in College Management System">
                      <span className="tech-badge">Python (Flask)</span>
                      <span className="tech-badge">MySQL</span>
                      <span className="tech-badge">HTML5 / JS</span>
                      <span className="tech-badge">ReportLab (PDF)</span>
                      <span className="tech-badge">Docker</span>
                    </div>

                    <div className="supporting-actions-bar">
                      <a
                        href="https://github.com/sanketamte96k/College-Management-Administration-System"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="studio-secondary-link"
                        aria-label="View College Management System repository on GitHub in a new tab"
                      >
                        <GitHubIcon size={14} />
                        <span>View on GitHub</span>
                        <ArrowUpRight size={13} className="btn-arrow" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </Project3DCard>
              </motion.article>

              {/* PROJECT 03: Flipkart Clone */}
              <motion.article
                className="supporting-project-article"
                variants={cardEntrance}
                custom={3}
                aria-labelledby="project-flipkart-title"
              >
                <Project3DCard className="supporting-project-card" glowColor="violet">
                  {/* Meta Bar */}
                  <div className="supporting-header-bar">
                    <div className="supporting-index-group">
                      <span className="editorial-num">03</span>
                      <span className="editorial-divider" aria-hidden="true">/</span>
                      <span className="supporting-category">FULL-STACK COMMERCE // PRODUCTION</span>
                    </div>
                    <a
                      href="https://github.com/sanketamte96k/Flipkart-clone"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-icon-link"
                      aria-label="View Flipkart Clone code on GitHub"
                    >
                      <GitHubIcon size={14} />
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                  </div>

                  {/* Software Preview: Clean E-Commerce Storefront */}
                  <div className="supporting-preview-stage stage-commerce" aria-hidden="true">
                    <div className="store-search-bar">
                      <ShoppingBag size={11} className="store-search-icon" />
                      <span className="store-search-placeholder">Search electronics, laptops, mobiles...</span>
                      <span className="store-live-pill"><span className="pulse-dot green" /> Railway Live</span>
                    </div>

                    <div className="store-product-micro">
                      <div className="product-info-left">
                        <span className="product-category-text">ELECTRONICS &amp; COMPUTERS</span>
                        <span className="product-name-text">ASUS ROG Gaming Rig</span>
                      </div>
                      <div className="product-pricing-box">
                        <div className="pricing-col">
                          <span className="product-price">₹49,999</span>
                          <span className="product-discount">-35% OFF</span>
                        </div>
                        <span className="cart-chip">In Cart</span>
                      </div>
                    </div>

                    <div className="store-category-bar">
                      <div className="category-pills">
                        <span className="cat-pill active">Mobiles</span>
                        <span className="cat-pill">Laptops</span>
                        <span className="cat-pill">Fashion</span>
                      </div>
                      <span className="auth-indicator">Bcrypt Session Auth</span>
                    </div>
                  </div>

                  {/* Narrative Body */}
                  <div className="supporting-body">
                    <div className="supporting-title-group">
                      <h3 id="project-flipkart-title" className="supporting-title">Flipkart Clone</h3>
                      <span className="supporting-tagline">Production E-Commerce Platform &amp; Role-Based Admin Portal</span>
                    </div>

                    <p className="supporting-description">
                      A full-stack e-commerce web platform inspired by Flipkart with complete customer shopping workflows and an administrative portal. Implements Bcrypt session authentication, dynamic multi-tier filtering, persistent cart/wishlist, and a role-based admin portal for inventory and order management.
                    </p>

                    <div className="supporting-tech-tags" aria-label="Technologies used in Flipkart Clone">
                      <span className="tech-badge">Python (Flask)</span>
                      <span className="tech-badge">SQLAlchemy</span>
                      <span className="tech-badge">MySQL</span>
                      <span className="tech-badge">Docker</span>
                      <span className="tech-badge">Railway</span>
                    </div>

                    <div className="supporting-actions-bar dual-actions">
                      <a
                        href="https://flipkart-clone-production-0c44.up.railway.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="studio-live-btn"
                        aria-label="Open Flipkart Clone Live Demo in a new tab"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={13} aria-hidden="true" />
                      </a>

                      <a
                        href="https://github.com/sanketamte96k/Flipkart-clone"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="studio-secondary-link"
                        aria-label="View Flipkart Clone repository on GitHub in a new tab"
                      >
                        <GitHubIcon size={14} />
                        <span>View on GitHub</span>
                      </a>
                    </div>
                  </div>
                </Project3DCard>
              </motion.article>
            </div>
          </motion.div>
        </section>

        {/* ==========================================================================
            ABOUT SECTION (Premium Cinematic 3D Experience)
            ========================================================================== */}
        <section id="about" className="about-section" aria-label="About Sanket Amte">
          <div className="section-header-block text-center">
            <div className="section-eyebrow justify-center">
              <Sparkles size={14} aria-hidden="true" />
              <span>Academic &amp; Engineering Profile</span>
            </div>
            <h2 className="section-title">
              A Little <span className="section-title-gradient">About Me</span>
            </h2>
            <p className="section-subtitle centered-subtitle">
              Information Technology undergraduate at Zeal College of Engineering and Research, Pune, specializing in Java enterprise backend systems, data engineering, and modern reactive architectures.
            </p>
          </div>

          <motion.div
            className="about-3d-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {/* Left 3D Card: Academic Pedigree */}
            <motion.div variants={cardEntrance} custom={1} className="about-card-col">
              <About3DCard className="about-education-card" glowColor="violet">
                {/* Decorative Subtle Orbit Ring inside card */}
                <div className="card-orbit-accent" aria-hidden="true">
                  <div className="card-orbit-ring" />
                  <span className="card-orbit-dot" />
                </div>

                <div className="about-card-badge">
                  <GraduationCap size={15} aria-hidden="true" />
                  <span>Academic Pedigree</span>
                </div>

                <div className="about-card-heading-group">
                  <h3 className="about-card-title">B.Tech in Information Technology</h3>
                  <p className="about-institution">
                    Zeal College of Engineering and Research, Pune
                  </p>
                </div>

                <div className="about-metric-grid">
                  <div className="about-metric-card">
                    <span className="metric-card-label">Cumulative GPA</span>
                    <span className="metric-card-value">
                      8.34 <span className="metric-scale">/ 10.0</span>
                    </span>
                    <span className="metric-subtext">Verified Academic Standing</span>
                  </div>

                  <div className="about-metric-card">
                    <span className="metric-card-label">Academic Status</span>
                    <span className="metric-card-value status-badge">Class of 2026</span>
                    <span className="metric-subtext">Active Engineering Scholar</span>
                  </div>
                </div>

                <div className="academic-coursework-panel">
                  <span className="panel-title">Core Rigorous Coursework:</span>
                  <div className="coursework-chips">
                    <span className="coursework-chip">Object-Oriented Programming</span>
                    <span className="coursework-chip">Data Structures &amp; Algorithms</span>
                    <span className="coursework-chip">Database Management Systems</span>
                    <span className="coursework-chip">Web Architectures</span>
                  </div>
                </div>

                <p className="about-card-desc">
                  Focused on software engineering fundamentals, algorithm optimization, and building robust, maintainable backend systems with clean architectural patterns.
                </p>
              </About3DCard>
            </motion.div>

            {/* Right 3D Card: Verified Technical Competencies */}
            <motion.div variants={cardEntrance} custom={2} className="about-card-col">
              <About3DCard className="about-competency-card" glowColor="blue">
                {/* Decorative Terminal Dots Accent */}
                <div className="card-terminal-accent" aria-hidden="true">
                  <span className="terminal-dot" />
                  <span className="terminal-dot" />
                  <span className="terminal-dot" />
                  <span className="terminal-accent-tag">SYSTEMS • ARCH</span>
                </div>

                <div className="about-card-badge">
                  <Terminal size={15} aria-hidden="true" />
                  <span>Technical Specialization</span>
                </div>

                <div className="about-card-heading-group">
                  <h3 className="about-card-title">Engineering Focus &amp; Architecture</h3>
                  <p className="about-institution">
                    Applied in real-world systems, quantitative research, and web platforms
                  </p>
                </div>

                <div className="competencies-stack-panel">
                  {/* Domain 1: Enterprise Backend */}
                  <div className="competency-tier">
                    <div className="tier-header">
                      <span className="tier-name">Enterprise Backend &amp; Architecture</span>
                      <span className="tier-badge">Java • Spring</span>
                    </div>
                    <div className="competency-pills">
                      <span className="competency-pill">Java 17+</span>
                      <span className="competency-pill">Spring Boot</span>
                      <span className="competency-pill">PostgreSQL</span>
                      <span className="competency-pill">MySQL</span>
                      <span className="competency-pill">RESTful APIs</span>
                    </div>
                  </div>

                  {/* Domain 2: Systems, Data & Analytics */}
                  <div className="competency-tier">
                    <div className="tier-header">
                      <span className="tier-name">Data Analytics &amp; Python Services</span>
                      <span className="tier-badge">Python • Flask</span>
                    </div>
                    <div className="competency-pills">
                      <span className="competency-pill">Python</span>
                      <span className="competency-pill">Flask</span>
                      <span className="competency-pill">SQLAlchemy</span>
                      <span className="competency-pill">Pandas</span>
                      <span className="competency-pill">NumPy</span>
                    </div>
                  </div>

                  {/* Domain 3: Reactive UI & Tooling */}
                  <div className="competency-tier">
                    <div className="tier-header">
                      <span className="tier-name">Frontend Architecture &amp; DevOps</span>
                      <span className="tier-badge">React • Docker</span>
                    </div>
                    <div className="competency-pills">
                      <span className="competency-pill">React</span>
                      <span className="competency-pill">TypeScript</span>
                      <span className="competency-pill">Docker</span>
                      <span className="competency-pill">Git / GitHub</span>
                      <span className="competency-pill">pytest</span>
                    </div>
                  </div>
                </div>
              </About3DCard>
            </motion.div>
          </motion.div>
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
            <span>© {currentYear} Sanket Amte. All rights reserved.</span>
            <span>Cinematic 3D Developer Portfolio</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

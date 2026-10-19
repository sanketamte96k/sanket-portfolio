import type { SVGProps } from 'react'

export type IconProps = SVGProps<SVGSVGElement>

// 1. Java (Duke Coffee & Steam)
export function JavaIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
      <path
        d="M7.5 17.5c0 .6 2 1.1 4.5 1.1s4.5-.5 4.5-1.1-2-1.1-4.5-1.1-4.5.5-4.5 1.1z"
        stroke="#EA580C"
        strokeWidth="1.5"
      />
      <path
        d="M5 20.5c0 .7 3.1 1.3 7 1.3s7-.6 7-1.3-3.1-1.3-7-1.3-7 .6-7 1.3z"
        stroke="#EA580C"
        strokeWidth="1.5"
      />
      <path
        d="M11 2c-2.8 3.5.5 5.5-1.2 8.5"
        stroke="#3B82F6"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M14 3.2c-2.2 2.5.5 4.5-1 7.2"
        stroke="#3B82F6"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M6.5 14.5c3.2 1 7.8 1 11 0"
        stroke="#EA580C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

// 2. Python (Interlocking Dual Snakes)
export function PythonIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
      <path
        d="M11.9 2c-3.1 0-4.9.7-4.9 2.1v2.1h5v.7H5.2c-2 0-3.6 1.4-3.6 3.6 0 2.1 1.4 3.4 3.3 3.6v-1.7c0-2 1.6-3.6 3.6-3.6h5c1.4 0 2.5-1.1 2.5-2.5V4.1c0-1.4-1.8-2.1-4.1-2.1zm-2.7 1.4c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
        fill="#387EB8"
      />
      <path
        d="M12.1 22c3.1 0 4.9-.7 4.9-2.1v-2.1h-5v-.7h6.8c2 0 3.6-1.4 3.6-3.6 0-2.1-1.4-3.4-3.3-3.6v1.7c0 2-1.6 3.6-3.6 3.6h-5c-1.4 0-2.5 1.1-2.5 2.5v4.7c0 1.4 1.8 2.1 4.1 2.1zm2.7-1.4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"
        fill="#FFE052"
      />
    </svg>
  )
}

// 3. Flask (Minimalist Laboratory Chemistry Vessel)
export function FlaskIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
      <path
        d="M9 3h6m-4 0v6.2L5.4 18.4A2.5 2.5 0 007.4 22h9.2a2.5 2.5 0 002-3.6L13 9.2V3"
        stroke="#E2E8F0"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 16h10"
        stroke="#A78BFA"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

// 4. MySQL (Dolphin Brand Wave)
export function MySQLIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
      <path
        d="M18.5 12.5c-.3 0-.6-.2-.7-.5-.4-1.2-1.4-2-2.6-2-.7 0-1.4.3-1.9.8l-.4.4c-.4.4-.8.7-1.2.9-.8.4-1.8.5-2.7.4-1.6-.2-3-1.2-3.6-2.6-.2-.5-.3-1-.3-1.6 0-.3.2-.5.5-.5s.5.2.5.5c0 .4.1.8.3 1.2.5 1.2 1.6 2 2.9 2.1.8.1 1.7 0 2.4-.4.4-.2.7-.5 1-.8l.4-.4c.7-.6 1.6-.9 2.5-.9 1.7 0 3.1 1.1 3.6 2.7.1.3 0 .6-.3.7z"
        fill="#00758F"
      />
      <path
        d="M21.5 15.5c-.3 0-.6-.2-.7-.5-.9-2.8-3.5-4.8-6.6-4.8-1.3 0-2.6.4-3.7 1.1l-.5.3c-.4.2-.9.5-1.4.7-1 .3-2.1.3-3.1 0-2.1-.7-3.7-2.3-4.3-4.4-.2-.8-.2-1.7 0-2.6.1-.3.4-.5.7-.4.3.1.5.4.4.7-.2.7-.2 1.5 0 2.2.5 1.8 1.8 3.1 3.6 3.7.9.3 1.8.3 2.7 0 .4-.1.8-.3 1.2-.5l.5-.3c1.2-.7 2.6-1.1 4.1-1.1 3.6 0 6.7 2.3 7.7 5.7.1.3-.1.6-.4.7z"
        fill="#F29111"
      />
    </svg>
  )
}

// 5. JavaScript (Official JS Shield)
export function JavaScriptIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        d="M6.8 17.5c0 1.5.9 2.3 2.4 2.3 1.3 0 2.2-.7 2.2-2v-6.5h-1.8v6.4c0 .5-.3.8-.8.8-.4 0-.7-.3-.7-.8v-3.5H6.8v3.3zm6.4-1.8c.6.9 1.5 1.5 2.7 1.5 1.1 0 1.8-.5 1.8-1.2 0-.8-.7-1.1-1.9-1.5-1.6-.5-2.6-1.2-2.6-2.5 0-1.4 1.2-2.4 2.8-2.4 1.2 0 2.1.4 2.7 1.3l-1.3 1c-.4-.5-.9-.8-1.5-.8-.6 0-1 .3-1 .8 0 .6.5.9 1.7 1.3 1.8.6 2.8 1.3 2.8 2.7 0 1.6-1.3 2.6-3.1 2.6-1.5 0-2.6-.6-3.2-1.7l1.3-1.1z"
        fill="#000000"
      />
    </svg>
  )
}

// 6. HTML5 (Official Shield)
export function HTML5Icon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
      <path d="M3 2l1.8 19 7.2 2 7.2-2L21 2H3z" fill="#E34F26" />
      <path d="M12 21.8l5.8-1.6L19.2 4H12v17.8z" fill="#EF652A" />
      <path
        d="M12 8.5H7.7l.3 3.5h4V8.5zm0 6.2l-.1.1-2.4-.6-.2-1.8H7.3l.3 3.3 4.4 1.2V14.7zm0-9.7v1.8h7.2l-.2 1.8H12v.1h4.8l-.5 5.8-4.3 1.2V18l2.9-.8.3-3.4h-3.2v-1.8h5.3l-.4 4.5-4.8 1.3V5z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

// 7. CSS3 (Official Shield)
export function CSS3Icon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
      <path d="M3 2l1.8 19 7.2 2 7.2-2L21 2H3z" fill="#1572B6" />
      <path d="M12 21.8l5.8-1.6L19.2 4H12v17.8z" fill="#33A9DC" />
      <path
        d="M12 8.5H7.7l.2 2h4.1V8.5zm0 4.5H9.6l.2 2.2 2.2.6v2.1l-4.1-1.1-.3-3.8h4.4V13zm0-7.8v2h7.2l-.2 2.2H12v2h4.8l-.5 5.7-4.3 1.2v2.1l6.2-1.7.5-6h-6.7v-2h6.9l.2-2H12V5.2z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

// 8. SQLAlchemy (Alchemist Flask & Core)
export function SQLAlchemyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
      <circle cx="12" cy="12" r="10" fill="#2E3440" />
      <path
        d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10.5c-2.5 0-4.5-2-4.5-4.5S9.5 7.5 12 7.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5z"
        fill="#D71F00"
      />
      <circle cx="12" cy="12" r="2.5" fill="#FFE066" />
    </svg>
  )
}

// 9. Pandas (Multidimensional Data Frames)
export function PandasIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
      <rect x="3" y="3" width="4.5" height="9" rx="1.5" fill="#150458" />
      <rect x="3" y="14" width="4.5" height="7" rx="1.5" fill="#E70488" />
      <rect x="9.75" y="8" width="4.5" height="13" rx="1.5" fill="#150458" />
      <rect x="9.75" y="3" width="4.5" height="3.5" rx="1.5" fill="#FFD43B" />
      <rect x="16.5" y="3" width="4.5" height="18" rx="1.5" fill="#E70488" />
    </svg>
  )
}

// 10. Git (Branching Diamond Nodes)
export function GitIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
      <path
        d="M22.6 10.7l-9.3-9.3c-.6-.6-1.5-.6-2 0L9.2 3.5l2.6 2.6c.6-.2 1.3 0 1.8.5.5.5.7 1.2.5 1.8l2.5 2.5c.6-.2 1.3 0 1.8.5.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.6-.6-.7-1.4-.4-2.1L12.9 9.4v5.3c.2.2.3.5.3.8 0 .9-.8 1.7-1.7 1.7-.9 0-1.7-.8-1.7-1.7 0-.7.4-1.3 1-1.6V9.2c-.6-.3-1-.9-1-1.6 0-.4.1-.7.3-1L7.2 4 1.4 9.8c-.6.6-.6 1.5 0 2.1l9.3 9.3c.6.6 1.5.6 2 0l9.9-9.9c.6-.6.6-1.5 0-2.1z"
        fill="#F05032"
      />
    </svg>
  )
}

// 11. GitHub (Octocat Mark)
export function GitHubTechIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

// 12. Spring Boot (Spring Leaf Emblem)
export function SpringBootIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
      <circle cx="12" cy="12" r="10" fill="rgba(109, 179, 63, 0.15)" stroke="#6DB33F" strokeWidth="1.5" />
      <path
        d="M10.2 16.5c-.5.3-1.1.1-1.4-.4l-2.2-3.8c-.3-.5-.1-1.1.4-1.4.5-.3 1.1-.1 1.4.4l2.2 3.8c.3.5.1 1.1-.4 1.4zm5.4-3.6l-3.8 2.2c-.5.3-1.1.1-1.4-.4-.3-.5-.1-1.1.4-1.4l3.8-2.2c.5-.3 1.1-.1 1.4.4.3.5.1 1.1-.4 1.4zm.9-3.8c-.3-.5-.1-1.1.4-1.4.5-.3 1.1-.1 1.4.4.3.5.1 1.1-.4 1.4-.5.3-1.1.1-1.4-.4z"
        fill="#6DB33F"
      />
    </svg>
  )
}

// 13. React (Atomic Orbital Nucleus)
export function ReactIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
      <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
    </svg>
  )
}

// 14. TypeScript (Official TS Shield)
export function TypeScriptIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        d="M5.5 10.2h5.8V12H9.3v6.7H7.5V12H5.5v-1.8zm7 5.1c.5.8 1.4 1.3 2.4 1.3 1 0 1.6-.4 1.6-1 0-.6-.6-.9-1.6-1.3-1.4-.5-2.4-1.1-2.4-2.2 0-1.3 1.1-2.2 2.5-2.2 1.1 0 1.9.4 2.4 1.2l-1.2.9c-.3-.4-.7-.7-1.3-.7-.5 0-.9.3-.9.7 0 .5.4.7 1.5 1.1 1.6.5 2.5 1.2 2.5 2.4 0 1.4-1.2 2.3-2.8 2.3-1.4 0-2.3-.5-2.9-1.5l1.2-1z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

// 15. PostgreSQL (Elephant Emblem)
export function PostgreSQLIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
      <circle cx="12" cy="12" r="10" fill="#336791" />
      <path
        d="M16.5 15.2c-.8.8-2 1.3-3.2 1.3-2.4 0-4.3-1.8-4.3-4.1s1.9-4.1 4.3-4.1c1.2 0 2.3.5 3.1 1.3l-1.2 1.2c-.5-.5-1.2-.8-1.9-.8-1.4 0-2.6 1.1-2.6 2.4s1.2 2.4 2.6 2.4c.8 0 1.5-.4 1.9-.9l1.3 1.2z"
        fill="#FFFFFF"
      />
      <circle cx="15.5" cy="10.5" r="1" fill="#FFE066" />
    </svg>
  )
}

// 16. Docker (Whale & Containers)
export function DockerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
      <path
        d="M13 8.5h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm6-3h2v2h-2zm-3 0h2v2h-2zm9 6c-.3 0-.6.1-.9.2-.5-.9-1.4-1.5-2.5-1.7l-.4-.1-.3.3c-.6.6-1.5.9-2.4.9H2.5c-.3 0-.5.2-.5.5 0 2.2.8 4.2 2.2 5.6 1.4 1.4 3.3 2.2 5.3 2.2 6.1 0 10.7-4.2 11.4-9.8.7.2 1.5 0 2.1-.5.7-.6 1-1.4 1-2.3v-.3h-.3c-1.2 0-2.3.5-3.1 1.1-.3-.1-.5-.1-.8-.1z"
        fill="#2496ED"
      />
    </svg>
  )
}

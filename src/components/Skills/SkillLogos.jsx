import React from 'react'

export function DotNetLogo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="24" fill="#512BD4" />
      <path
        d="M26 84V44h11v40H26zm21 0V44h22v9.5H58v6h17V69H58v15H47zm32 0V44h22v9.5H90v6h17V69H90v15H79zm29 0a5 5 0 100-10 5 5 0 000 10z"
        fill="#FFFFFF"
      />
      <text
        x="64"
        y="78"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="40"
        fontWeight="900"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="-1"
      >
        .NET
      </text>
    </svg>
  )
}

export function JavaScriptLogo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="20" fill="#F7DF1E" />
      <path
        d="M67.3 104c3.1 5.1 7.2 8.7 14.5 8.7 6.1 0 10.1-3.1 10.1-7.4 0-5.1-4.1-6.9-10.9-9.9l-3.8-1.6c-11-4.7-18.2-10.5-18.2-22.9 0-11.4 8.9-20.1 22.8-20.1 9.9 0 17 3.5 21.6 11.6l-10.5 6.7c-2.7-4.8-5.7-6.8-11.1-6.8-4.5 0-7.7 2.9-7.7 6.6 0 4.4 2.8 6.2 9.2 9l3.8 1.6c13 5.6 20.3 11.1 20.3 23.7 0 13.5-10.5 21.3-25.5 21.3-13.6 0-22.4-6.4-26.6-15.6l12-6.9zM24.8 104c2.4 4.1 5.4 7.5 10.8 7.5 5.5 0 9.1-2.1 9.1-10.8V51.7h14.7v49.1c0 16.7-9.8 24-23.7 24-11.7 0-19.1-5.9-22.9-14.1l12-6.7z"
        fill="#000000"
      />
    </svg>
  )
}

export function WebDevLogo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="24" fill="#2563EB" />
      <rect x="18" y="24" width="92" height="80" rx="10" fill="#1E293B" />
      <circle cx="32" cy="36" r="4" fill="#EF4444" />
      <circle cx="44" cy="36" r="4" fill="#F59E0B" />
      <circle cx="56" cy="36" r="4" fill="#10B981" />
      <line x1="18" y1="46" x2="110" y2="46" stroke="#334155" strokeWidth="2" />
      <path
        d="M38 62L26 74L38 86M60 88L68 60M90 62L102 74L90 86"
        stroke="#60A5FA"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function HtmlLogo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
      <path d="M19 12h90l-8.2 92.3L64 116 27.2 104.3L19 12z" fill="#E34F26" />
      <path d="M64 20v87.5l29.6-8.2L99.7 20H64z" fill="#EF652A" />
      <path
        d="M64 45.4H42.7l-1.3-14.7H64V18H28.4l4.2 46.9H64V45.4zm0 30.6l-.2.1-15.6-4.2-1-11.2H34.4l1.9 21.8 27.7 7.7V76z"
        fill="#FFFFFF"
      />
      <path
        d="M64 45.4v19.5h20l-1.9 21.2-18.1 4.9V103l27.7-7.7 3.1-34.8H64zm0-27.4v12.7h34.3l1.1-12.7H64z"
        fill="#ECECEC"
      />
    </svg>
  )
}

export function CSharpEfLogo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
      <path
        d="M64 6L114.2 35v58L64 122 13.8 93V35L64 6z"
        fill="#512BD4"
      />
      <path
        d="M56 42c-15 0-24 10-24 22s9 22 24 22c8 0 14-3 18-8l-7-6c-3 4-7 6-11 6-8 0-13-5-13-14s5-14 13-14c4 0 8 2 11 6l7-6c-4-5-10-8-18-8z"
        fill="#FFFFFF"
      />
      <path
        d="M74 48h5v12h12V48h5v12h6v5h-6v12h-5V65H84v12h-5V65h-5v-5h5V48zm10 17h12V60H84v5z"
        fill="#239120"
      />
    </svg>
  )
}

export function MySqlLogo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="24" fill="#00758F" />
      <path
        d="M98 75c-3-12-14-18-26-17-7 1-13 4-18 9l-4-5C43 56 32 55 24 61l-2 2v20h10V68c4-3 10-3 14 0l6 7 2-2c4-4 9-6 15-6 8 0 15 4 17 12h-19v8h27v-12zM32 78h-8v-8h8v8z"
        fill="#F29111"
      />
      <path
        d="M64 24c-20 0-36 12-36 28 0 8 5 15 13 20l-4 16 18-9c3 1 6 1 9 1 20 0 36-12 36-28S84 24 64 24zm0 46c-16 0-28-9-28-20s12-20 28-20 28 9 28 20-12 20-28 20z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

export function CssLogo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
      <path d="M19 12h90l-8.2 92.3L64 116 27.2 104.3L19 12z" fill="#1572B6" />
      <path d="M64 20v87.5l29.6-8.2L99.7 20H64z" fill="#33A9DC" />
      <path
        d="M64 45.4H42.7l-1.3-14.7H64V18H28.4l4.2 46.9H64V45.4zm0 30.6l-.2.1-15.6-4.2-1-11.2H34.4l1.9 21.8 27.7 7.7V76z"
        fill="#FFFFFF"
      />
      <path
        d="M64 45.4v12.7h18.9l-1.8 20.3-17.1 4.6V96l27.7-7.7 3.5-39.2H64zm0-27.4v12.7h34.3l1.1-12.7H64z"
        fill="#ECECEC"
      />
    </svg>
  )
}

export function AgileLogo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="24" fill="#0052CC" />
      <path
        d="M64 24A40 40 0 10104 64h-14a26 26 0 11-26-26v14l24-18L64 16v8z"
        fill="#FFFFFF"
      />
      <path
        d="M84 64a20 20 0 11-40 0 20 20 0 0140 0z"
        fill="#2684FF"
      />
    </svg>
  )
}

export function ElasticSearchLogo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="24" fill="#005571" />
      <path d="M30 30h32v32H30V30z" fill="#FED100" />
      <path d="M66 30h32v32H66V30z" fill="#00BFB3" />
      <path d="M30 66h32v32H30V66z" fill="#E54C3C" />
      <path d="M66 66h32v32H66V66z" fill="#1F90ED" />
      <circle cx="64" cy="64" r="14" fill="#005571" />
    </svg>
  )
}

export function GitLogo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
      <path
        d="M121 57.5L70.5 7a12 12 0 00-17 0L7 57.5a12 12 0 000 17l50.5 50.5a12 12 0 0017 0l50.5-50.5a12 12 0 000-17z"
        fill="#F05032"
      />
      <path
        d="M88.5 61.5a8 8 0 00-11-2.5l-13 8v-20a8 8 0 10-8 0v27.5a8 8 0 109 7.5v-1.5l12.5-7.5a8 8 0 0010.5-11.5z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

export function DevOpsLogo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="24" fill="#0F172A" />
      <path
        d="M42 44C29.8 44 20 53.8 20 66s9.8 22 22 22c9.5 0 17.7-6 20.7-14.3h.6C66.3 82 74.5 88 84 88c12.2 0 22-9.8 22-22s-9.8-22-22-22c-9.5 0-17.7 6-20.7 14.3h-.6C59.7 50 51.5 44 42 44zm0 12c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10zm42 0c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10z"
        fill="url(#devops-grad)"
      />
      <defs>
        <linearGradient id="devops-grad" x1="20" y1="44" x2="106" y2="88" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0DB7ED" />
          <stop offset="1" stopColor="#0078D7" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function ApiLogo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="24" fill="#6C63FF" />
      <circle cx="38" cy="64" r="14" fill="#FFFFFF" />
      <circle cx="90" cy="38" r="14" fill="#FFFFFF" />
      <circle cx="90" cy="90" r="14" fill="#FFFFFF" />
      <path d="M50 58l28-14M50 70l28 14" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
      <text
        x="38"
        y="69"
        textAnchor="middle"
        fill="#6C63FF"
        fontSize="12"
        fontWeight="900"
        fontFamily="sans-serif"
      >
        API
      </text>
    </svg>
  )
}

export function SqlLogo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="24" fill="#336791" />
      <ellipse cx="64" cy="36" rx="36" ry="14" fill="#CC292B" />
      <path d="M28 36v24c0 7.7 16.1 14 36 14s36-6.3 36-14V36" stroke="#FFFFFF" strokeWidth="6" fill="none" />
      <path d="M28 60v24c0 7.7 16.1 14 36 14s36-6.3 36-14V60" stroke="#FFFFFF" strokeWidth="6" fill="none" />
      <text
        x="64"
        y="114"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="22"
        fontWeight="900"
        fontFamily="sans-serif"
        letterSpacing="2"
      >
        SQL
      </text>
    </svg>
  )
}

export function PhpLogo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
      <ellipse cx="64" cy="64" rx="58" ry="36" fill="#777BB4" />
      <text
        x="64"
        y="75"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="44"
        fontWeight="800"
        fontStyle="italic"
        fontFamily="sans-serif"
      >
        php
      </text>
    </svg>
  )
}

export function JQueryLogo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="24" fill="#0769AD" />
      <path
        d="M78 28c-12 0-22 8-26 18-2-4-6-7-11-7-7 0-13 6-13 13 0 4 2 8 5 10l-12 36h14l8-24c2 1 5 1 7 1 12 0 22-8 26-18 2 4 6 7 11 7 7 0 13-6 13-13 0-13-10-23-22-23zm-30 35c-4 0-7-3-7-7s3-7 7-7 7 3 7 7-3 7-7 7zm30 0c-4 0-7-3-7-7s3-7 7-7 7 3 7 7-3 7-7 7z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

export function CLogo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
      <path d="M64 6L114.2 35v58L64 122 13.8 93V35L64 6z" fill="#00599C" />
      <path
        d="M78 46c-5-4-11-6-18-6-15 0-25 11-25 24s10 24 25 24c7 0 13-2 18-6l5 8c-6 5-14 8-23 8-21 0-36-15-36-34s15-34 36-34c9 0 17 3 23 8l-5 8z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

export function getSkillLogo(name, size = 36) {
  if (!name) return null
  const clean = name.toLowerCase().replace(/[^a-z0-9]/g, '')

  // Built-in exact matches or normalized matches
  if (clean.includes('dotnet') || clean === 'net') return <DotNetLogo size={size} />
  if (clean === 'javascript' || clean === 'js') return <JavaScriptLogo size={size} />
  if (clean.includes('html')) return <HtmlLogo size={size} />
  if (clean.includes('css')) return <CssLogo size={size} />
  if (clean.includes('csharp') || clean.includes('entityframework') || clean === 'c') return <CSharpEfLogo size={size} />
  if (clean.includes('mysql')) return <MySqlLogo size={size} />
  if (clean.includes('agile') || clean.includes('scrum')) return <AgileLogo size={size} />
  if (clean.includes('elastic')) return <ElasticSearchLogo size={size} />
  if (clean.includes('git') && !clean.includes('digital')) return <GitLogo size={size} />
  if (clean.includes('devops') || clean.includes('docker') || clean.includes('kubernetes')) return <DevOpsLogo size={size} />
  if (clean.includes('api') || clean.includes('rest')) return <ApiLogo size={size} />
  if (clean.includes('sql') && !clean.includes('mysql')) return <SqlLogo size={size} />
  if (clean.includes('php')) return <PhpLogo size={size} />
  if (clean.includes('jquery')) return <JQueryLogo size={size} />
  if (clean === 'c' || clean === 'clang') return <CLogo size={size} />
  if (clean.includes('web')) return <WebDevLogo size={size} />

  // Dynamic Devicon logo map for auto-detection
  const deviconMap = {
    react: 'react/react-original.svg',
    reactjs: 'react/react-original.svg',
    typescript: 'typescript/typescript-original.svg',
    ts: 'typescript/typescript-original.svg',
    python: 'python/python-original.svg',
    node: 'nodejs/nodejs-original.svg',
    nodejs: 'nodejs/nodejs-original.svg',
    vue: 'vuejs/vuejs-original.svg',
    vuejs: 'vuejs/vuejs-original.svg',
    angular: 'angularjs/angularjs-original.svg',
    java: 'java/java-original.svg',
    cpp: 'cplusplus/cplusplus-original.svg',
    cplusplus: 'cplusplus/cplusplus-original.svg',
    go: 'go/go-original-wordmark.svg',
    golang: 'go/go-original-wordmark.svg',
    rust: 'rust/rust-original.svg',
    mongodb: 'mongodb/mongodb-original.svg',
    mongo: 'mongodb/mongodb-original.svg',
    postgres: 'postgresql/postgresql-original.svg',
    postgresql: 'postgresql/postgresql-original.svg',
    redis: 'redis/redis-original.svg',
    aws: 'amazonwebservices/amazonwebservices-original-wordmark.svg',
    azure: 'azure/azure-original.svg',
    firebase: 'firebase/firebase-plain.svg',
    tailwind: 'tailwindcss/tailwindcss-original.svg',
    tailwindcss: 'tailwindcss/tailwindcss-original.svg',
    sass: 'sass/sass-original.svg',
    bootstrap: 'bootstrap/bootstrap-original.svg',
    flutter: 'flutter/flutter-original.svg',
    swift: 'swift/swift-original.svg',
    kotlin: 'kotlin/kotlin-original.svg',
    nextjs: 'nextjs/nextjs-original.svg',
    github: 'github/github-original.svg',
  }

  const foundDevicon = Object.keys(deviconMap).find((key) => clean.includes(key))
  if (foundDevicon) {
    return (
      <img
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${deviconMap[foundDevicon]}`}
        alt={name}
        width={size}
        height={size}
        style={{ objectFit: 'contain' }}
      />
    )
  }

  // Generic fallback badge
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="24" fill="#2563EB" />
      <text
        x="64"
        y="76"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="36"
        fontWeight="800"
        fontFamily="sans-serif"
      >
        {name.slice(0, 3).toUpperCase()}
      </text>
    </svg>
  )
}


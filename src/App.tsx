import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, ChevronDown } from 'lucide-react'

function IconGitHub({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function IconX({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.856L2.25 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  )
}

function IconLinkedIn({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

// ── Types ─────────────────────────────────────────────────────────────────────

interface TimelineItem {
  period: string
  org: string
  role: string
  detail?: string
  type: 'work' | 'edu'
}

interface SkillGroup {
  label: string
  skills: string[]
}

// ── Data ──────────────────────────────────────────────────────────────────────

const ROLES = ['Software Engineer', 'Android Developer', 'Web Developer', 'AI Enthusiast']

const SKILL_GROUPS: SkillGroup[] = [
  { label: 'Languages', skills: ['TypeScript', 'Go', 'Python', 'Java', 'Kotlin', 'PHP', 'C#', 'Dart', 'Shell'] },
  { label: 'Frontend', skills: ['React', 'Vue.js', 'Tailwind CSS', 'Redux Toolkit'] },
  { label: 'Backend / Infra', skills: ['Spring Boot', 'Laravel', 'REST API', 'Git'] },
  { label: 'Mobile', skills: ['Android (Jetpack)', 'Flutter', 'Hilt', 'Room', 'Coroutines'] },
  { label: 'AI / ML', skills: ['RAG', 'LLM Integration', 'Claude API', 'Sentiment Analysis'] },
]

const TIMELINE: TimelineItem[] = [
  {
    period: '2025.04 – Present',
    org: 'Excite Japan Co., Ltd.',
    role: 'Engineer',
    detail: 'Joined as a new graduate engineer.',
    type: 'work',
  },
  {
    period: '2024.01 – 2025.01',
    org: 'Memoaca Inc.',
    role: 'Mobile Engineer (Part-time)',
    detail: 'Code design & implementation for mobile game.',
    type: 'work',
  },
  {
    period: '2023.09 – 2023.10',
    org: 'Excite Japan Co., Ltd.',
    role: 'Intern – Mobile App Dev',
    type: 'work',
  },
  {
    period: '2023.08',
    org: 'Cybozu Inc.',
    role: 'Intern',
    type: 'work',
  },
  {
    period: '2023.04 – 2025.03',
    org: 'Aizu University Graduate School',
    role: 'M.S. – Information Technology & Project Management',
    detail: 'Research: Integrated Coding Environment for Programming Exercise (ICE)',
    type: 'edu',
  },
  {
    period: '2019.04 – 2023.03',
    org: 'Aizu University',
    role: 'B.S. – Computer Science & Engineering',
    detail: 'Developed online coding editor for Aizu Online Judge using TypeScript + Vue.js.',
    type: 'edu',
  },
]

const LINKS = [
  { icon: IconGitHub, label: 'GitHub', href: 'https://github.com/buno15' },
  { icon: IconX, label: 'X (Twitter)', href: 'https://x.com/buno15' },
  { icon: IconLinkedIn, label: 'LinkedIn', href: 'https://www.linkedin.com/in/kiyohiro-murai' },
  { icon: ExternalLink, label: 'Wantedly', href: 'https://www.wantedly.com/id/kiyohiro_murai' },
]

// ── Hooks ─────────────────────────────────────────────────────────────────────

function useTypingEffect(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    const id = setTimeout(
      () => {
        if (!deleting) {
          setDisplay(current.slice(0, charIdx + 1))
          if (charIdx + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause)
          } else {
            setCharIdx((c) => c + 1)
          }
        } else {
          setDisplay(current.slice(0, charIdx - 1))
          if (charIdx - 1 === 0) {
            setDeleting(false)
            setCharIdx(0)
            setWordIdx((i) => (i + 1) % words.length)
          } else {
            setCharIdx((c) => c - 1)
          }
        }
      },
      deleting ? speed / 2 : speed,
    )
    return () => clearTimeout(id)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function FadeSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <h2 className="text-2xl font-semibold text-white whitespace-nowrap">{children}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
    </div>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const typedRole = useTypingEffect(ROLES)

  return (
    <div className="min-h-screen bg-[#0f1117] text-slate-200">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 max-w-2xl"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest mb-4 uppercase">Hi, I'm</p>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-2 gradient-text">
            buno15
          </h1>

          <p className="text-slate-500 text-base mb-6">村井 清寛 / Kiyohiro Murai</p>

          <div className="h-10 flex items-center justify-center mb-8">
            <span className="text-xl md:text-2xl font-mono text-cyan-300">{typedRole}</span>
            <span className="animate-[blink_1s_step-end_infinite] text-cyan-300 text-2xl ml-0.5">|</span>
          </div>

          <p className="text-slate-400 leading-relaxed mb-10 max-w-lg mx-auto text-sm md:text-base">
            1999年生まれ。会津大学大学院修了（情報技術・PM専攻）。
            オンラインジャッジシステムの研究、Androidアプリ開発、
            AIを活用したプロダクト開発に取り組んでいます。
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            {LINKS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 glow-border text-sm text-slate-300 hover:text-white transition-colors"
              >
                <Icon size={15} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 text-slate-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <ChevronDown size={24} className="animate-bounce" />
        </motion.div>
      </section>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-6 pb-24 space-y-24">
        {/* Skills */}
        <FadeSection>
          <SectionHeading>Skills</SectionHeading>
          <div className="space-y-7">
            {SKILL_GROUPS.map((group) => (
              <div key={group.label}>
                <p className="text-xs font-mono text-cyan-500/80 tracking-widest uppercase mb-3">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm bg-white/5 glow-border text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeSection>

        {/* Timeline */}
        <FadeSection>
          <SectionHeading>Experience &amp; Education</SectionHeading>
          <div className="relative">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/40 via-violet-500/20 to-transparent" />
            <div className="space-y-6 pl-10">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="relative group"
                >
                  <div
                    className={`absolute -left-[1.85rem] top-2 w-3 h-3 rounded-full border-2 transition-transform group-hover:scale-125 duration-200
                      ${item.type === 'work'
                        ? 'border-cyan-500 bg-cyan-500/20'
                        : 'border-violet-400 bg-violet-500/20'
                      }`}
                  />
                  <div className="glow-border rounded-xl p-4 bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <p className="font-semibold text-white text-sm md:text-base">{item.org}</p>
                        <p className="text-sm text-slate-400">{item.role}</p>
                      </div>
                      <span className="font-mono text-xs text-cyan-600/80 whitespace-nowrap pt-1">
                        {item.period}
                      </span>
                    </div>
                    {item.detail && (
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">{item.detail}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeSection>

        {/* Contact */}
        <FadeSection className="text-center">
          <SectionHeading>Contact</SectionHeading>
          <p className="text-slate-400 text-sm mb-8">お気軽にご連絡ください。</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {LINKS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-5 rounded-xl bg-white/[0.03] glow-border hover:bg-white/[0.07] transition-colors group w-24"
              >
                <Icon size={20} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
                <span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </FadeSection>
      </div>

      <footer className="text-center py-8 text-slate-600 text-xs font-mono border-t border-white/5">
        © 2026 buno15
      </footer>
    </div>
  )
}

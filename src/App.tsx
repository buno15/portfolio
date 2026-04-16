import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

function IconGitHub({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function IconX({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.856L2.25 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  )
}


// ── Types ─────────────────────────────────────────────────────────────────────

interface SkillGroup {
  label: string
  skills: string[]
}

// ── Data ──────────────────────────────────────────────────────────────────────

const SKILL_GROUPS: SkillGroup[] = [
  { label: 'Languages', skills: ['TypeScript', 'Go', 'Python', 'Java', 'Kotlin', 'PHP', 'C#', 'Dart', 'Shell'] },
  { label: 'Frontend', skills: ['React', 'Vue.js', 'Tailwind CSS', 'Redux Toolkit'] },
  { label: 'Backend / Infra', skills: ['Spring Boot', 'Laravel', 'REST API', 'Git'] },
  { label: 'Mobile', skills: ['Android (Jetpack)', 'Flutter', 'Hilt', 'Room', 'Coroutines'] },
  { label: 'AI / ML', skills: ['RAG', 'LLM Integration', 'Claude API', 'Sentiment Analysis'] },
]


const LINKS = [
  { icon: IconGitHub, label: 'GitHub', href: 'https://github.com/buno15' },
  { icon: IconX, label: 'X (Twitter)', href: 'https://x.com/buno15' },
]

// ── Hooks ─────────────────────────────────────────────────────────────────────


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

          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 gradient-text">
            buno15
          </h1>

          <div className="flex items-center justify-center gap-3 flex-wrap mt-8">
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

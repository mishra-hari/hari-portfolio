import { profile } from '@/lib/profile'

export default function Experience() {
  return (
    <section id="experience" className="py-24 max-w-5xl mx-auto px-6">
      <SectionLabel label="Career" />
      <h2 className="text-3xl font-bold mb-4">
        Professional <span className="text-gradient">Experience</span>
      </h2>
      <p className="text-zinc-500 text-sm mb-14 max-w-xl">
        11+ years across marketing analytics, telecom, and financial services domains.
      </p>

      <div className="relative">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="space-y-6">
          {profile.experience.map((job, i) => (
            <div key={i} className="md:pl-10 relative group">
              {/* Dot */}
              <div className="absolute left-0 top-1 w-7 h-7 rounded-full border-2 border-accent bg-surface hidden md:flex items-center justify-center text-xs font-mono text-accent-soft group-hover:bg-accent/20 transition-colors">
                {profile.experience.length - i}
              </div>

              <div className="rounded-xl border border-border bg-card p-5 hover:border-accent/40 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-base font-semibold text-white">{job.role}</h3>
                    <p className="text-accent-soft font-medium text-sm">{job.company}</p>
                    <p className="text-xs text-muted mt-0.5">{job.location}</p>
                  </div>
                  <div className="text-right text-xs text-zinc-500 font-mono shrink-0">
                    <div className="text-zinc-400">{job.period}</div>
                    <div className="text-muted">{job.duration}</div>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {job.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 text-sm text-zinc-400">
                      <span className="text-accent mt-0.5 shrink-0">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="w-6 h-px bg-accent"/>
      <span className="text-xs font-mono text-accent uppercase tracking-widest">{label}</span>
    </div>
  )
}

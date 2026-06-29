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
        {/* Timeline main line */}
        <div className="absolute left-3 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="space-y-12">
          {profile.experience.map((companyBlock, i) => (
            <div key={i} className="md:pl-10 relative group">
              
              {/* Timeline Node Dot (Represents the Company Block) */}
              <div className="absolute left-0 top-1 w-7 h-7 rounded-full border-2 border-accent bg-surface hidden md:flex items-center justify-center text-xs font-mono text-accent-soft group-hover:bg-accent/20 transition-colors z-10">
                {profile.experience.length - i}
              </div>

              {/* Company Header Info Block */}
              <div className="mb-4 pl-1 md:pl-0 flex flex-col md:flex-row md:justify-between md:items-center gap-1 md:gap-4">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {companyBlock.company}
                </h3>
                <p className="text-xs text-muted font-medium flex items-center gap-1 shrink-0">
                  <span>📍</span> {companyBlock.location}
                </p>
              </div>

              {/* Roles Container within the Company */}
              <div className="space-y-4">
                {companyBlock.roles.map((role, j) => (
                  <div 
                    key={j} 
                    className="rounded-xl border border-border bg-card p-5 hover:border-accent/40 transition-colors relative"
                  >
                    {/* Role Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                      <div>
                        <h4 className="text-base font-semibold text-white group-hover:text-accent transition-colors">
                          {role.title}
                        </h4>
                        {/* {j === 0 && companyBlock.roles.length > 1 && (
                          <span className="inline-flex items-center mt-1 px-2 py-0.5 rounded text-[10px] font-medium bg-accent/10 text-accent font-mono">
                            Latest Promotion
                          </span>
                        )} */}
                      </div>
                      <div className="text-right text-xs font-mono shrink-0">
                        <div className="text-zinc-400 font-semibold">{role.period}</div>
                        <div className="text-muted text-[11px] mt-0.5">{role.duration}</div>
                      </div>
                    </div>

                    {/* Role Bullet Points */}
                    <ul className="space-y-2">
                      {role.highlights.map((h, k) => (
                        <li key={k} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                          <span className="text-accent mt-1 shrink-0 text-xs">▸</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
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

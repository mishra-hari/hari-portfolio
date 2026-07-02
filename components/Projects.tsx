import { SectionLabel } from './Experience'
import { UserProfile } from '@/types/profile'

const categoryOrder = [
  'Enterprise Data Architecture Platforms',
  'Next-Gen Frameworks & Low-Code Systems',
  'Core Automation Products'
]

export default function Projects({ profile }: { profile: UserProfile }) {
  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    items: profile.projects.filter((p) => p.category === cat),
  }))

  return (
    <section id="projects" className="py-24 bg-card/30 border-y border-border">
      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel label="Work" />
        <h2 className="text-3xl font-bold mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-zinc-500 text-sm mb-14 max-w-xl">
          Enterprise-scale platforms across marketing analytics, automation, and financial technology.
        </p>

        {grouped.map(({ category, items }) => (
          <div key={category} className="mb-14">
            {/* Category label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="text-xs font-mono text-accent uppercase tracking-widest">{category}</div>
              <div className="flex-1 h-px bg-border"/>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map((project, i) => (
                <div
                  key={i}
                  className="group rounded-xl border border-border bg-card p-5 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <h3 className="text-base font-semibold text-white mb-2">{project.name}</h3>
                  <p className="text-xs text-zinc-500 mb-3 leading-relaxed flex-1">{project.description}</p>

                  {/* Key features */}
                  <div className="mb-3">
                    <div className="text-xs text-muted mb-1.5 uppercase tracking-wide">Key features</div>
                    <ul className="space-y-0.5">
                      {project.features.slice(0, 4).map((f, j) => (
                        <li key={j} className="text-xs text-zinc-500 flex gap-1.5">
                          <span className="text-accent mt-0.5">▸</span>
                          {f}
                        </li>
                      ))}
                      {/* {project.features.length > 3 && (
                        <li className="text-xs text-muted">+{project.features.length - 3} more</li>
                      )} */}
                    </ul>
                  </div>

                  {/* Role */}
                  <p className="text-xs text-accent-soft/70 italic mb-3">{project.role}</p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

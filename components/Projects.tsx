import { profile } from '@/lib/profile'
import { SectionLabel } from './Experience'

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-card/30 border-y border-border">
      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel label="Work" />
        <h2 className="text-3xl font-bold mb-14">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {profile.projects.map((project, i) => (
            <div
              key={i}
              className="group rounded-xl border border-border bg-card p-6 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Number */}
              <div className="text-4xl font-bold font-mono text-subtle mb-4 group-hover:text-accent/20 transition-colors">
                0{i + 1}
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">{project.name}</h3>
              <p className="text-sm text-zinc-500 mb-4 leading-relaxed">{project.description}</p>
              <p className="text-xs text-zinc-600 mb-4 italic">{project.role}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Patent highlight */}
        <div className="mt-10 rounded-xl border border-accent/30 bg-accent/5 p-6 flex flex-col md:flex-row md:items-center gap-4">
          <div className="text-3xl">📜</div>
          <div className="flex-1">
            <div className="text-xs font-mono text-accent mb-1 uppercase tracking-wider">Patent Issued</div>
            <h3 className="font-semibold text-white mb-1">{profile.patent.title}</h3>
            <p className="text-xs text-zinc-500">
              {profile.patent.publicationNo} · Published {profile.patent.publicationDate}
            </p>
          </div>
          <a
            href={profile.patent.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 rounded-lg border border-accent/40 text-accent hover:bg-accent hover:text-white text-sm transition-all"
          >
            View Patent ↗
          </a>
        </div>
      </div>
    </section>
  )
}

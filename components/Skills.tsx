import { SectionLabel } from './Experience'
import { UserProfile } from '@/types/profile'

export default function Skills({ profile }: { profile: UserProfile }) {
  return (
    <section id="skills" className="py-24 max-w-5xl mx-auto px-6">
      <SectionLabel label="Expertise" />
      <h2 className="text-3xl font-bold mb-14">
        Skills & <span className="text-gradient">Technologies</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(profile.skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-xl border border-border bg-card p-5 hover:border-accent/30 transition-colors"
          >
            <h3 className="text-sm font-mono text-accent-soft mb-3 uppercase tracking-wide">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill: any) => (
                <span
                  key={skill}
                  className="text-xs px-2.5 py-1 rounded-md bg-subtle text-zinc-300 border border-border hover:border-accent/40 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div className="mt-14">
        <h3 className="text-xl font-semibold mb-6 text-zinc-300">Achievements</h3>
        <div className="flex flex-col sm:flex-row gap-4">
          {profile.achievements.map((a, i) => (
            <div
              key={i}
              className="flex-1 rounded-xl border border-border bg-card p-4 flex items-start gap-3"
            >
              <span className="text-xl">🏆</span>
              <span className="text-sm text-zinc-400">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

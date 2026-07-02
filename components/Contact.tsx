import { SectionLabel } from './Experience'
import { UserProfile } from '@/types/profile'

export default function Contact({ profile }: { profile: UserProfile }) {
  return (
    <section id="contact" className="py-24 border-t border-border bg-card/20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel label="Contact" />
        <h2 className="text-3xl font-bold mb-4">
          Let's <span className="text-gradient">work together</span>
        </h2>
        <p className="text-zinc-400 mb-12 max-w-lg">
          Open to senior frontend architecture roles, engineering leadership, and consulting. 
          Have an interesting problem? Let's talk.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          <ContactCard
            icon="✉"
            label="Email"
            value={profile.email}
            href={`mailto:${profile.email}`}
          />
          <ContactCard
            icon="in"
            label="LinkedIn"
            value="hari-mishra"
            href={profile.links.linkedin}
            external
          />
          <ContactCard
            icon="⚲"
            label="Location"
            value={profile.location}
            href="#"
          />
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-xs font-mono text-muted">
            © {new Date().getFullYear()} {profile.shortName} · Built with Next.js + Claude AI
          </p>
          <div className="flex gap-6">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-500 hover:text-white animated-link transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={profile.patent.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-500 hover:text-white animated-link transition-colors"
            >
              Patent
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-xs text-zinc-500 hover:text-white animated-link transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: string
  label: string
  value: string
  href: string
  external?: boolean
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-accent/40 transition-all"
    >
      <div className="w-9 h-9 rounded-lg bg-subtle flex items-center justify-center text-sm font-mono text-accent-soft group-hover:bg-accent/20 transition-colors">
        {icon}
      </div>
      <div>
        <div className="text-xs text-muted mb-0.5">{label}</div>
        <div className="text-sm text-zinc-300 group-hover:text-white transition-colors break-all">
          {value}
        </div>
      </div>
    </a>
  )
}

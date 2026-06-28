'use client'

import { useEffect, useState } from 'react'
import { profile } from '@/lib/profile'

const roles = [
  'Frontend Architect',
  'Engineering Lead',
  'Micro-Frontend Expert',
  'Team Builder',
  'UI Systems Designer',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: NodeJS.Timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center bg-grid overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 pt-28 pb-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div>
            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-xs font-mono text-accent-soft">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow"/>
              Available for new opportunities
            </div>

            <h1 className="animate-fade-up delay-100 text-4xl md:text-4xl font-bold leading-tight mb-2">
              {profile.shortName}
            </h1>

            {/* Typewriter */}
            <div className="animate-fade-up delay-200 h-10 flex items-center mb-6">
              <span className="text-xl md:text-2xl text-accent-soft font-mono">
                {displayed}
                <span className="animate-blink">|</span>
              </span>
            </div>

            <p className="animate-fade-up delay-300 text-zinc-400 text-base leading-relaxed mb-8 max-w-md">
              {profile.summary}
            </p>

            {/* Stats row */}
            <div className="animate-fade-up delay-400 grid grid-cols-3 gap-4 mb-8">
              {[
                { val: '11', label: 'Years exp.' },
                { val: '95%', label: 'Code reuse' },
                { val: '70%', label: 'Dev time ↓' },
              ].map(({ val, label }) => (
                <div key={label} className="text-center p-3 rounded-lg bg-card border border-border">
                  <div className="text-2xl font-bold text-gradient">{val}</div>
                  <div className="text-xs text-zinc-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="animate-fade-up delay-500 flex flex-wrap gap-3">
              <a
                href="mailto:hari.mishra.in@gmail.com"
                className="px-5 py-2.5 rounded-lg bg-accent hover:bg-accent/90 text-white text-sm font-medium transition-all glow-accent"
              >
                Get in touch
              </a>
              <a
                href={profile.patent.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg border border-border hover:border-accent/60 text-zinc-300 hover:text-white text-sm font-medium transition-all"
              >
                View Patent ↗
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg border border-border hover:border-accent/60 text-zinc-300 hover:text-white text-sm font-medium transition-all"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Right: terminal card */}
          <div className="animate-fade-up delay-300 hidden md:block">
            <div className="rounded-xl border border-border bg-card overflow-hidden shadow-2xl">
              {/* Terminal titlebar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-subtle">
                <span className="w-3 h-3 rounded-full bg-red-500/80"/>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"/>
                <span className="w-3 h-3 rounded-full bg-green-500/80"/>
                <span className="ml-3 text-xs font-mono text-muted">hari@portfolio ~ </span>
              </div>
              {/* Terminal body */}
              <div className="p-5 font-mono text-sm space-y-2">
                <TermLine prompt="$" cmd="whoami" delay={0}/>
                <TermOut text={`> ${profile.shortName}`} delay={300}/>
                <TermLine prompt="$" cmd="cat role.txt" delay={600}/>
                <TermOut text="> Associate Manager & Frontend Architect" delay={900}/>
                <TermLine prompt="$" cmd="ls achievements/" delay={1200}/>
                <TermOut text="> 📜 patent-US12210855B2" delay={1500}/>
                <TermOut text="> 🏆 og-star-q3-2025" delay={1700}/>
                <TermOut text="> 🏆 og-star-q4-2025" delay={1900}/>
                <TermLine prompt="$" cmd="cat stack.json | head" delay={2200}/>
                <TermOut text='> ["Angular", "React", "Lit",' delay={2500}/>
                <TermOut text='    "Micro Frontend", "NX"]' delay={2600}/>
                <TermLine prompt="$" cmd="_" delay={2800}/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function TermLine({ prompt, cmd, delay }: { prompt: string; cmd: string; delay: number }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])
  if (!visible) return null
  return (
    <div className="flex gap-2">
      <span className="text-accent-soft">{prompt}</span>
      <span className="text-white">{cmd}</span>
    </div>
  )
}

function TermOut({ text, delay }: { text: string; delay: number }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])
  if (!visible) return null
  return <div className="text-zinc-400 pl-4">{text}</div>
}

import { profile } from '@/lib/profile'
import PrintButton from './PrintButton'

export const metadata = {
  title: `${profile.name} — Resume`,
}

export default function ResumePage() {
  return (
    <div className="bg-gray-100 min-h-screen py-8 print:bg-white print:p-0 print:m-0">

      {/* Print / Download button — hidden when printing */}
      <div className="print:hidden flex justify-center gap-3 mb-6">
        <PrintButton />
        <a
          href="/"
          className="px-4 py-2 text-sm rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
        >
          ← Back to Portfolio
        </a>
      </div>

      {/* Resume Paper */}
      <div
        id="resume"
        className="
          bg-white mx-auto shadow-lg
          w-[794px] min-h-[1123px]
          px-10 py-8
          print:shadow-none print:w-full print:min-h-0 print:px-8 print:py-6
          text-[#4a4a4a] text-[13px] leading-[1.4]
          font-sans
        "
      >

        {/* ── HEADER ── */}
        <div className="text-center mb-4">
          <h1 className="text-[22px] font-semibold tracking-wide uppercase text-[#4a4a4a]">
            {profile.name}
          </h1>
          <p className="text-[13px] text-[#4a4a4a] mt-0.5">{profile.title}</p>

          {/* Contact row */}
          <div className="flex items-center justify-center flex-wrap gap-x-1 mt-2 text-[12px] text-[#4a4a4a]">
            <span>{profile.email}</span>
            <span className="mx-1">•</span>
            <span>{profile.phone}</span>
            <span className="mx-1">•</span>
            <span>{profile.links.linkedin}</span>
            <span className="mx-1">•</span>
            <span>{profile.location}</span>
          </div>
        </div>

        <Divider />

        {/* ── PROFESSIONAL SUMMARY ── */}
        <Section title="Professional Summary">
          <p className="text-[12.5px] leading-relaxed">{profile.summary}</p>
        </Section>

        <Divider />

        {/* ── CORE COMPETENCIES ── */}
        <Section title="Core Competencies">
          <div className="grid grid-cols-2 gap-x-8 gap-y-1">
            {Object.entries(profile.skills).map(([cat, items]) => (
              <div key={cat} className="text-[12px]">
                <span className="font-semibold">{cat}: </span>
                <span className="text-[#4a4a4a]">{items.join(', ')}</span>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* ── PROFESSIONAL EXPERIENCE ── */}
        <Section title="Professional Experience">
          {profile.experience.map((job, i) => (
            <div key={i} className={i > 0 ? 'mt-4' : ''}>
              {/* Company + period */}
              <div className="flex justify-between items-baseline">
                <span className="font-semibold text-[13px]">{job.company}</span>
                <span className="text-[11.5px] text-gray-500 italic">{job.period} ({job.duration})</span>
              </div>
              {/* Role + location */}
              <div className="flex justify-between items-baseline">
                <span className="font-semibold text-[12.5px] italic">{job.role}</span>
                <span className="text-[11.5px] text-gray-500">{job.location}</span>
              </div>
              {/* Highlights */}
              <ul className="mt-1 space-y-0.5 ml-3">
                {job.highlights.map((h, j) => (
                  <li key={j} className="text-[12px] relative pl-3 before:content-['•'] before:absolute before:left-0">
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <Divider />

        {/* ── KEY PROJECTS ── */}
        <Section title="Key Projects">
          {profile.projects.map((project, i) => (
            <div key={i} className={`${i > 0 ? 'mt-3' : ''}`}>
              <p className="text-[12.5px]">
                <span className="font-semibold">{project.name}</span>
                <span className="text-gray-400 text-[11px] ml-2">({project.category})</span>
                {' — '}
                <span>{project.description}</span>
              </p>
              <p className="text-[11.5px] text-gray-500 mt-0.5">
                <span className="font-medium">Tech: </span>{project.tech.join(', ')}
                {' · '}
                <span className="italic">{project.role}</span>
              </p>
            </div>
          ))}
        </Section>

        <Divider />

        {/* ── EDUCATION ── */}
        <Section title="Education">
          <div className="flex justify-between items-baseline">
            <span className="font-semibold">{profile.education.institution}</span>
            <span className="text-[11.5px] italic text-gray-500">{profile.education.period}</span>
          </div>
          <p className="text-[12px]">
            {profile.education.degree} · {profile.education.affiliation}
          </p>
        </Section>

        <Divider />

        {/* ── PATENTS & ACHIEVEMENTS ── */}
        <Section title="Patents & Achievements">
          <ul className="space-y-1 ml-3">
            <li className="text-[12px] relative pl-3 before:content-['•'] before:absolute before:left-0">
              <span className="font-semibold">Patent (Issued): </span>
              {profile.patent.title}
              <ul className="ml-4 mt-0.5 space-y-0.5">
                <li className="text-[11.5px] text-gray-600">Application No.: {profile.patent.applicationNo}</li>
                <li className="text-[11.5px] text-gray-600">Publication No.: {profile.patent.publicationNo}</li>
                <li className="text-[11.5px] text-gray-600">Publication Date: {profile.patent.publicationDate}</li>
              </ul>
            </li>
            {profile.achievements.filter(a => !a.includes('Patent')).map((a, i) => (
              <li key={i} className="text-[12px] relative pl-3 before:content-['•'] before:absolute before:left-0">
                {a}
              </li>
            ))}
          </ul>
        </Section>

        <Divider />

        {/* ── LANGUAGES ── */}
        <Section title="Languages">
          <ul className="flex gap-6 ml-3">
            {profile.languages.map((lang, i) => (
              <li key={i} className="text-[12px] relative pl-3 before:content-['•'] before:absolute before:left-0">
                {lang}
              </li>
            ))}
          </ul>
        </Section>

      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0.6cm 0.8cm;
          }
          body {
            background: white !important;
          }
          #resume {
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  )
}

// ── Reusable section wrapper ──
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-3">
      <h2 className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#4a4a4a] mb-2 relative">
        {title}
      </h2>
      {children}
    </div>
  )
}

// ── Horizontal rule matching original style ──
function Divider() {
  return <hr className="border-t border-gray-300 my-3" />
}
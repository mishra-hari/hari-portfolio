import { getProfile } from '@/lib/getProfile'
import PrintButton from './PrintButton'
import { UserProfile } from '@/types/profile'

export const dynamic = 'force-dynamic' 

export async function generateMetadata() {
  const profile: UserProfile = await getProfile()
  return {
    title: `${profile.name} — Resume`,
    description: `Resume of ${profile.name}, ${profile.title}`,
  }
}

export default async function ResumePage() {
  const profile: UserProfile = await getProfile()
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
        <div className="text-center mb-5">
          <h1 className="text-[22px] font-semibold tracking-wide uppercase text-[#4a4a4a]">
            {profile.name}
          </h1>

          {/* Contact row with immediate joiner signal */}
          <div className="flex items-center justify-center flex-wrap gap-y-1 mt-2 text-[12px] text-[#4a4a4a]">
            <span>{profile.location}</span>
            <span className="mx-1.5 text-gray-300">•</span>
            <span>{profile.email}</span>
            <span className="mx-1.5 text-gray-300">•</span>
            <span>{profile.phone}</span>
            <span className="mx-1.5 text-gray-300">•</span>
            <span>{profile.links.portfolio}</span>
            <span className="mx-1.5 text-gray-300">•</span>
            <span className="font-bold text-emerald-700 font-mono uppercase tracking-wider text-[11px]">
              Available Immediately
            </span>
          </div>
        </div>

        {/* ── PROFESSIONAL SUMMARY ── */}
        <Section title="Professional Summary">
          <p className="text-[12.5px] leading-relaxed text-gray-600">{profile.summary}</p>
        </Section>

        {/* ── CORE COMPETENCIES (ATS Flat Stack Optimization) ── */}
        <Section title="Core Competencies">
          <div className="space-y-0.5">
            {Object.entries(profile.skills).map(([cat, items]) => (
              <div key={cat} className="text-[12px] leading-relaxed text-gray-600">
                <span className="font-bold text-gray-800">{cat}: </span>
                <span>{items.join(', ')}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── PROFESSIONAL EXPERIENCE ── */}
        <Section title="Professional Experience">
          {profile.experience.map((companyBlock, i) => (
            <div key={i} className={i > 0 ? 'mt-4' : ''}>
              
              {/* Parent Company Metadata Header Row */}
              <div className="flex justify-between items-baseline mb-1">
                <span className="font-bold text-[11.5px] tracking-wide text-gray-900 uppercase">
                  {companyBlock.company}
                </span>
                <span className="text-[11.5px] text-gray-500 font-medium font-mono">
                  📍 {companyBlock.location}
                </span>
              </div>

              {/* Nested Iteration for Promoted Roles */}
              <div className="space-y-3">
                {companyBlock.roles.map((role, j) => (
                  <div key={j} className="pl-0.5">
                    {/* Role Title + Runtime Periods */}
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-semibold text-[12.5px] text-gray-800 italic">
                        {role.title}
                      </span>
                      <span className="text-[11.5px] text-gray-500 italic shrink-0 font-mono">
                        {role.period} ({role.duration})
                      </span>
                    </div>

                    {/* Bullet Highlights */}
                    <ul className="space-y-1 ml-3">
                      {role.highlights.map((h, k) => (
                        <li key={k} className="text-[12px] relative pl-3 before:content-['•'] before:absolute before:left-0 text-gray-600 leading-relaxed">
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </Section>

        {/* ── KEY PROJECTS (Streamlined Top 4) ── */}
        <Section title="Key Projects">
          {profile.projects.map((project, i) => project.showOnResume && (
            <div key={i} className={i > 0 ? 'mt-3.5' : ''}>
              <div className="flex justify-between items-baseline mb-0.5">
                <span className="font-bold text-[12.5px] text-gray-800">{project.name}</span>
                <span className="text-gray-400 text-[10.5px] font-mono uppercase tracking-wider">
                  [{project.category}]
                </span>
              </div>
              <p className="text-[12px] text-gray-600 leading-relaxed">
                {project.description}
              </p>
              <p className="text-[11.5px] text-gray-500 mt-1">
                <span className="font-semibold text-gray-700">Tech Stack:</span> {project.tech.join(', ')}
                {' · '}
                <span className="italic font-medium text-gray-600">{project.role}</span>
              </p>
            </div>
          ))}
        </Section>

        {/* ── EDUCATION ── */}
        <Section title="Education">
          <div className="flex justify-between items-baseline">
            <span className="font-semibold text-gray-800">{profile.education.institution}</span>
            <span className="text-[11.5px] italic text-gray-500 font-mono">{profile.education.period}</span>
          </div>
          <p className="text-[12px] text-gray-600 mt-0.5">
            {profile.education.degree} · {profile.education.affiliation}
          </p>
        </Section>

        {/* ── PATENTS & ACHIEVEMENTS ── */}
        <Section title="Patents & Achievements">
          <ul className="space-y-0.5 ml-3">
            <li className="text-[12px] relative pl-3 before:content-['•'] before:absolute before:left-0 text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-800">Patent: </span>
              <span>{profile.patent.title} </span>
              <span className="font-mono text-[11.5px]">
                (<a 
                  href="https://patents.google.com/patent/US12210855B2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-semibold"
                >
                  US12210855B2
                </a>)
              </span>
            </li>
            {profile.achievements.filter(a => !a.includes('Patent')).map((a, i) => (
              <li key={i} className="text-[12px] relative pl-3 before:content-['•'] before:absolute before:left-0 text-gray-600">
                {a}
              </li>
            ))}
          </ul>
        </Section>

        {/* ── LANGUAGES ── */}
        <Section title="Languages">
          <ul className="flex gap-6 ml-3">
            {profile.languages.map((lang, i) => (
              <li key={i} className="text-[12px] relative pl-3 before:content-['•'] before:absolute before:left-0 text-gray-600">
                {lang}
              </li>
            ))}
          </ul>
        </Section>

      </div>

      {/* Global CSS Print Drivers */}
      <style>
        {`
            @media print {
                @page {
                size: A4;
                margin: 0.4cm 0.5cm; /* Optimized padding threshold */
                }
                body {
                background: white !important;
                -webkit-print-color-adjust: exact;
                }
                #resume {
                box-shadow: none !important;
                padding-bottom: 0px !important;
                }
            }
        `}
      </style>
    </div>
  )
}

// ── Reusable section wrapper with an expanding horizontal line ──
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      {/* Header flex row containing structural rule */}
      <div className="mb-2">
        <h2 className="text-[12px] font-bold uppercase tracking-[0.1em] text-gray-800 shrink-0 border-b border-gray-300">
          {title}
        </h2>
        {/* <div className="flex-1 h-px bg-gray-300" /> */}
      </div>
      
      {/* Render Box Content */}
      <div className="pl-0.5">
        {children}
      </div>
    </div>
  )
}

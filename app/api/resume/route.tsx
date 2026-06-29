import { NextRequest } from 'next/server'
import { renderToBuffer, Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer'
import { profile } from '@/lib/profile'

// Register standard fonts explicitly to handle bold and italic weights natively
Font.register({
  family: 'Helvetica-Custom',
  fonts: [
    { src: 'https://jsdelivr.net', fontWeight: 'normal' },
    { src: 'https://jsdelivr.net', fontWeight: 'bold' },
    { src: 'https://jsdelivr.net', fontStyle: 'italic' },
    { src: 'https://jsdelivr.net', fontWeight: 'bold', fontStyle: 'italic' },
  ],
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 32, // print:px-8
    paddingVertical: 24,   // print:py-6
    color: '#4a4a4a',
    fontFamily: 'Helvetica', // Default clean font fallback
  },
  
  // Header section styles
  header: {
    textAlign: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 13,
    marginTop: 10,
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 8,
    fontSize: 12,
  },
  bulletSpacer: {
    marginHorizontal: 4,
  },

  // Divider line
  divider: {
    borderTopWidth: 1,
    borderTopColor: '#d1d5db', // border-gray-300
    marginVertical: 12,
  },

  // Base section styles
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },

  // Core Competencies layout (Flexbox replacement for original Grid)
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridItem: {
    width: '50%', // Simulates grid-cols-2
    fontSize: 12,
    marginBottom: 4,
  },
  boldLabel: {
    fontWeight: 'bold',
  },

  // Professional Experience / Projects structures
  rowJustifyBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  jobSpacing: {
    marginTop: 16,
  },
  projectSpacing: {
    marginTop: 12,
  },
  companyName: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  jobPeriod: {
    fontSize: 11.5,
    color: '#6b7280', // text-gray-500
    fontStyle: 'italic',
  },
  roleText: {
    fontSize: 12.5,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  locationText: {
    fontSize: 11.5,
    color: '#6b7280',
  },

  // List implementations
  listContainer: {
    marginTop: 4,
  },
  listItem: {
    flexDirection: 'row',
    fontSize: 12,
    marginBottom: 2,
    paddingLeft: 12,
  },
  listBullet: {
    width: 12,
    marginLeft: -12,
  },
  listContent: {
    flex: 1,
    lineHeight: 1.4,
  },
  
  // Patent sublist tracking
  nestedListContainer: {
    marginLeft: 16,
    marginTop: 2,
  },
  nestedListItem: {
    fontSize: 11.5,
    color: '#4b5563', // text-gray-600
    marginBottom: 2,
  },

  // Paragraph blocks
  bodyText: {
    fontSize: 12.5,
    lineHeight: 1.4,
  },
  subText: {
    fontSize: 11.5,
    color: '#6b7280',
    marginTop: 2,
  },
  metaText: {
    color: '#9ca3af', // text-gray-400
    fontSize: 11,
  },
  
  // Languages row structure
  langContainer: {
    flexDirection: 'row',
    gap: 24, // Keep original gap-6 spacing 
  }
});

// Reusable Section Component
const Section = (props: any) => (
  <View style={styles.section} wrap={false}>
    <Text style={styles.sectionTitle}>{props.title}</Text>
    {props.children}
  </View>
);

// Reusable Divider Component
const Divider = () => <View style={styles.divider} />;


export async function GET(req: NextRequest) {
  const buffer = await renderToBuffer(
    <Document title={`${profile.name} — Resume`}>
      <Page size="A4" style={styles.page}>
        
        {/* ── HEADER ── */}
        <View style={styles.header}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.title}>{profile.title}</Text>
          
          <View style={styles.contactRow}>
            <Text>{profile.email}</Text>
            <Text style={styles.bulletSpacer}>•</Text>
            <Text>{profile.phone}</Text>
            <Text style={styles.bulletSpacer}>•</Text>
            <Text>{profile.links.linkedin}</Text>
            <Text style={styles.bulletSpacer}>•</Text>
            <Text>{profile.location}</Text>
          </View>
        </View>

        <Divider />

        {/* ── PROFESSIONAL SUMMARY ── */}
        <Section title="Professional Summary">
          <Text style={styles.bodyText}>{profile.summary}</Text>
        </Section>

        <Divider />

        {/* ── CORE COMPETENCIES ── */}
        <Section title="Core Competencies">
          <View style={styles.gridContainer}>
            {Object.entries(profile.skills).map(([cat, items]) => (
              <View key={cat} style={styles.gridItem}>
                <Text>
                  <Text style={styles.boldLabel}>{cat}: </Text>
                  <Text>{items.join(', ')}</Text>
                </Text>
              </View>
            ))}
          </View>
        </Section>

        <Divider />

        {/* ── PROFESSIONAL EXPERIENCE ── */}
        <Section title="Professional Experience">
          {profile.experience.map((job, i) => (
            <View key={i} style={i > 0 ? styles.jobSpacing : {}}>
              <View style={styles.rowJustifyBetween}>
                <Text style={styles.companyName}>{job.company}</Text>
                <Text style={styles.jobPeriod}>{job.period} ({job.duration})</Text>
              </View>
              <View style={styles.rowJustifyBetween}>
                <Text style={styles.roleText}>{job.role}</Text>
                <Text style={styles.locationText}>{job.location}</Text>
              </View>
              
              <View style={styles.listContainer}>
                {job.highlights.map((h, j) => (
                  <View key={j} style={styles.listItem}>
                    <Text style={styles.listBullet}>•</Text>
                    <Text style={styles.listContent}>{h}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </Section>

        <Divider />

        {/* ── KEY PROJECTS ── */}
        <Section title="Key Projects">
          {profile.projects.map((project, i) => (
            <View key={i} style={i > 0 ? styles.projectSpacing : {}}>
              <Text style={styles.bodyText}>
                <Text style={styles.boldLabel}>{project.name}</Text>
                <Text style={styles.metaText}> ({project.category})</Text>
                <Text> — {project.description}</Text>
              </Text>
              <Text style={styles.subText}>
                <Text style={styles.boldLabel}>Tech: </Text>
                <Text>{project.tech.join(', ')} · </Text>
                <Text style={{ fontStyle: 'italic' }}>{project.role}</Text>
              </Text>
            </View>
          ))}
        </Section>

        <Divider />

        {/* ── EDUCATION ── */}
        <Section title="Education">
          <View style={styles.rowJustifyBetween}>
            <Text style={styles.companyName}>{profile.education.institution}</Text>
            <Text style={styles.jobPeriod}>{profile.education.period}</Text>
          </View>
          <Text style={styles.bodyText}>
            {profile.education.degree} · {profile.education.affiliation}
          </Text>
        </Section>

        <Divider />

        {/* ── PATENTS & ACHIEVEMENTS ── */}
        <Section title="Patents & Achievements">
          <View style={styles.listContainer}>
            
            {/* Patent block */}
            <View style={styles.listItem}>
              <Text style={styles.listBullet}>•</Text>
              <View style={styles.listContent}>
                <Text style={styles.boldLabel}>Patent (Issued): </Text>
                <Text>{profile.patent.title}</Text>
                
                <View style={styles.nestedListContainer}>
                  <Text style={styles.nestedListItem}>Application No.: {profile.patent.applicationNo}</Text>
                  <Text style={styles.nestedListItem}>Publication No.: {profile.patent.publicationNo}</Text>
                  <Text style={styles.nestedListItem}>Publication Date: {profile.patent.publicationDate}</Text>
                </View>
              </View>
            </View>

            {/* Achievements filter mapping */}
            {profile.achievements.filter(a => !a.includes('Patent')).map((a, i) => (
              <View key={i} style={styles.listItem}>
                <Text style={styles.listBullet}>•</Text>
                <Text style={styles.listContent}>{a}</Text>
              </View>
            ))}
          </View>
        </Section>

        <Divider />

        {/* ── LANGUAGES ── */}
        <Section title="Languages">
          <View style={styles.langContainer}>
            {profile.languages.map((lang, i) => (
              <View key={i} style={styles.listItem}>
                <Text style={styles.listBullet}>•</Text>
                <Text style={styles.listContent}>{lang}</Text>
              </View>
            ))}
          </View>
        </Section>

      </Page>
    </Document>
  )

  return new Response(new Uint8Array(buffer), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Hari_Mishra_Resume.pdf"',
    },
  })
}
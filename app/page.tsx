import { getProfile } from '@/lib/getProfile'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import ChatWidget from '@/components/ChatWidget'
import { UserProfile } from '@/types/profile'

export const dynamic = 'force-dynamic' 

export default async function Home() {
  const profile: any | UserProfile = await getProfile() // Fetch profile data from MongoDB or fallback to static data
  return (
    <>
      <Navbar />
      <main>
        <Hero profile={profile} />
        <Experience profile={profile} />
        <Projects profile={profile} />
        <Skills profile={profile} />
        <Contact profile={profile} />
      </main>
      <ChatWidget />
    </>
  )
}

import clientPromise from '@/lib/mongodb'
import { profile as staticProfile } from '@/lib/profile'
import { UserProfile } from '@/types/profile'

export async function getProfile() {
  try {
    const client = await clientPromise
    const db = client.db('portfolio')
    const data: UserProfile | null = await db.collection<UserProfile>('profile').findOne(
      {}, { projection: { _id: 0 } } // exclude MongoDB _id field
    )
    return data ?? staticProfile // fallback to static if DB empty
  } catch (err) {
    console.error('DB fetch failed, using static profile:', err)
    return staticProfile // fallback to static if DB down
  }
}
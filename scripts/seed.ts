import { config } from 'dotenv'
import { resolve } from 'path'

// load .env.local before anything else
config({ path: resolve(process.cwd(), '.env.local') })

import clientPromise from '../lib/mongodb'
import { profile } from '../lib/profile'

async function seed() {
  try {
    const client = await clientPromise
    const db = client.db('portfolio')
    await db.collection('profile').deleteMany({})
    await db.collection('profile').insertOne({ ...profile })
    console.log('✅ Profile seeded successfully!')
    process.exit(0)
  } catch (err) {
    console.error('❌ Seed failed:', err)
    process.exit(1)
  }
}

seed()
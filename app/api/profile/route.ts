// app/api/profile/route.ts
import { getProfile } from '@/lib/getProfile'
import clientPromise from '@/lib/mongodb'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const profile = await getProfile()
  return NextResponse.json(profile)
}

export async function PUT(req: NextRequest) {
  const updates = await req.json()
  const client = await clientPromise
  const db = client.db('portfolio')
  await db.collection('profile').updateOne({}, { $set: updates })
  return NextResponse.json({ success: true })
}
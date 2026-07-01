// app/admin/page.tsx — password protect this!
'use client'
import { useState, useEffect } from 'react'
import  styles from './page.module.css'

export default function AdminPage() {
  const [profile, setProfile] = useState<any>(null)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch('/api/profile').then(r => r.json()).then(setProfile)
  }, [])

  const save = async () => {
    setSaving(true)
    await fetch('/api/profile', {
      method: 'PUT',
      body: JSON.stringify(profile),
    })
    setSaving(false)
  }

  if (!profile) return <div>Loading...</div>

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1>Edit Profile</h1>
      <input
        value={profile.name}
        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        className={`${styles.input} border p-2 w-full`}
      />
      <textarea
        value={profile.summary}
        onChange={(e) => setProfile({ ...profile, summary: e.target.value })}
        className={`${styles.textarea} border p-2 w-full mt-4`}
        rows={4}
      />
      {/* repeat for other fields */}
      <button onClick={save} disabled={saving} className="bg-indigo-600 text-white px-4 py-2 mt-4">
        {saving ? 'Saving...' : 'Save Changes'}
      </button>
    </div>
  )
}
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Hari Prapanna Mishra — Frontend Architect'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0f',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Left: text */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{
            fontSize: 18,
            color: '#6366f1',
            letterSpacing: 4,
            marginBottom: 16,
            textTransform: 'uppercase',
          }}>
            Frontend Architect
          </div>
          <div style={{
            fontSize: 64,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: 16,
          }}>
            Hari Prapanna Mishra
          </div>
          <div style={{ fontSize: 24, color: '#71717a', marginBottom: 32 }}>
            11 years · Micro-Frontend · Angular · React
          </div>
          <div style={{
            display: 'flex',
            gap: 12,
          }}>
            {['Patent Holder', 'OG-Star Award', 'Team Lead'].map(tag => (
              <div key={tag} style={{
                padding: '8px 16px',
                borderRadius: 8,
                border: '1px solid #6366f1',
                color: '#818cf8',
                fontSize: 14,
              }}>
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Right: profile photo */}
        <div style={{
          width: 220,
          height: 220,
          borderRadius: '50%',
          overflow: 'hidden',
          border: '3px solid #6366f1',
          marginLeft: 60,
          display: 'flex',
        }}>
          <img
            src="https://harimishra.com/profile.jpg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    ),
    { ...size }
  )
}
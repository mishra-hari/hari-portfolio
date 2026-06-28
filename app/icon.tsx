export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new Response(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect width="32" height="32" rx="8" fill="#6366f1"/>
      <text
        x="16"
        y="22"
        text-anchor="middle"
        font-family="sans-serif"
        font-weight="700"
        font-size="13"
        fill="white"
        letter-spacing="-0.5"
      >HM</text>
    </svg>`,
    { headers: { 'Content-Type': 'image/svg+xml' } }
  )
}
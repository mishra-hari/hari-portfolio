import { NextRequest } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { profile } from '@/lib/profile'

export const runtime = 'edge'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

const systemPrompt = `You are an AI assistant representing ${profile.name}, a ${profile.title} based in ${profile.location}.

Your job is to answer questions about Hari warmly, accurately, and in first person where appropriate.
Keep answers concise (2-4 sentences), friendly, and professional.
Do NOT make up anything not in the profile below. If unsure, say so and suggest they email Hari directly.

--- PROFILE DATA ---
${JSON.stringify(profile, null, 2)}
--- END PROFILE ---

Key things to know:
- Hari has 11 years of frontend experience
- He specialises in micro-frontend architecture, Angular, and Web Components (Lit)
- He holds a US patent for dynamic UI rendering
- He's won the OG-Star of the Quarter award twice in 2025
- He's currently Associate Manager at Omnicom Global Solutions
- He's open to new senior engineering / architecture roles
`

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    const stream = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 512,
      system: systemPrompt,
      messages: messages.slice(-10), // keep last 10 turns
      stream: true,
    })

    // Return SSE stream
    const encoder = new TextEncoder()
    const readable = new ReadableStream({
      async start(controller) {
        for await (const event of stream) {
          if (
            event.type === 'content_block_delta' &&
            event.delta.type === 'text_delta'
          ) {
            const data = JSON.stringify({ delta: { text: event.delta.text } })
            controller.enqueue(encoder.encode(`data: ${data}\n\n`))
          }
        }
        controller.enqueue(encoder.encode('data: [DONE]\n\n'))
        controller.close()
      },
    })

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    })
  } catch (err) {
    console.error('Chat API error:', err)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

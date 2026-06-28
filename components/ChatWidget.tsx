'use client'

import { useState, useRef, useEffect } from 'react'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

const SUGGESTIONS = [
  'What tech stack does Hari specialise in?',
  'Tell me about his patent',
  'What projects has he led?',
  'Is he open to new roles?',
]

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Hari's AI assistant. Ask me anything about his experience, skills, or projects. 👋",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const send = async (text?: string) => {
    const msg = (text ?? input).trim()
    if (!msg || loading) return
    setInput('')
    const updated: Message[] = [...messages, { role: 'user', content: msg }]
    setMessages(updated)
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updated.map((m) => ({ role: m.role, content: m.content })),
        }),
      })

      if (!res.ok) throw new Error('API error')

      const reader = res.body?.getReader()
      const decoder = new TextDecoder()
      let reply = ''
      setMessages((prev) => [...prev, { role: 'assistant', content: '' }])

      while (reader) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value)
        // SSE format: data: <text>
        const lines = chunk.split('\n').filter(l => l.startsWith('data: '))
        for (const line of lines) {
          const data = line.slice(6)
          if (data === '[DONE]') break
          try {
            const parsed = JSON.parse(data)
            const delta = parsed?.delta?.text ?? parsed?.choices?.[0]?.delta?.content ?? ''
            if (delta) {
              reply += delta
              setMessages((prev) => {
                const next = [...prev]
                next[next.length - 1] = { role: 'assistant', content: reply }
                return next
              })
            }
          } catch {}
        }
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent hover:bg-accent/90 text-white shadow-lg flex items-center justify-center transition-all hover:scale-105"
        aria-label="Chat with Hari's AI"
      >
        {open ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
          </svg>
        )}
      </button>

      {/* Badge */}
      {!open && (
        <div className="fixed bottom-[82px] right-6 z-50 bg-card border border-border rounded-full px-3 py-1 text-xs text-zinc-400 shadow-md pointer-events-none">
          Ask me anything ✨
        </div>
      )}

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl border border-border bg-card shadow-2xl flex flex-col overflow-hidden chat-bubble">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-subtle">
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm">🤖</div>
            <div>
              <div className="text-sm font-medium text-white">Hari's AI</div>
              <div className="text-xs text-muted flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400"/>
                Online
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 max-h-80">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[82%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-accent text-white rounded-br-sm'
                      : 'bg-subtle text-zinc-300 rounded-bl-sm'
                  }`}
                >
                  {m.content || (loading && i === messages.length - 1 ? (
                    <span className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: '0ms' }}/>
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: '150ms' }}/>
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: '300ms' }}/>
                    </span>
                  ) : '')}
                </div>
              </div>
            ))}
            <div ref={bottomRef}/>
          </div>

          {/* Suggestions (only at start) */}
          {messages.length === 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-xs px-2.5 py-1.5 rounded-lg bg-subtle border border-border text-zinc-400 hover:text-white hover:border-accent/40 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="flex gap-2 px-4 py-3 border-t border-border">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Ask about Hari…"
              disabled={loading}
              className="flex-1 bg-subtle border border-border rounded-xl px-3 py-2 text-sm text-white placeholder-muted focus:outline-none focus:border-accent/60 disabled:opacity-50"
            />
            <button
              onClick={() => send()}
              disabled={loading || !input.trim()}
              className="px-3 py-2 rounded-xl bg-accent hover:bg-accent/90 text-white text-sm disabled:opacity-40 transition-all"
            >
              ↑
            </button>
          </div>
        </div>
      )}
    </>
  )
}

# Hari Mishra — AI-Powered Portfolio

A modern, AI-enabled personal portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Claude AI.

## ✨ Features

- **AI Chat Widget** — visitors can chat with an AI that knows everything about Hari
- **Streaming responses** — real-time Claude AI replies via SSE
- **Typewriter hero** — animated role cycling in the hero section
- **Terminal card** — animated terminal showing profile highlights
- **Responsive** — mobile-first, works on all screen sizes
- **Dark, professional design** — deep navy/indigo palette

## 🚀 Quick Start

### 1. Clone & install

```bash
git clone https://github.com/YOUR_USERNAME/hari-portfolio.git
cd hari-portfolio
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
# Edit .env.local and add your Anthropic API key
```

Get your key at: https://console.anthropic.com

### 3. Run locally

```bash
npm run dev
# Open http://localhost:3000
```

---

## 🌐 Deploy to Vercel (Free)

### Option A — Vercel CLI (fastest)

```bash
npm install -g vercel
vercel login
vercel
# Follow prompts → it detects Next.js automatically
```

Then add your environment variable:
```bash
vercel env add ANTHROPIC_API_KEY
# Paste your key, select all environments
vercel --prod
```

### Option B — Vercel Dashboard (easiest)

1. Push this repo to GitHub
2. Go to https://vercel.com/new
3. Import your GitHub repo
4. Under **Environment Variables**, add:
   - `ANTHROPIC_API_KEY` = `sk-ant-your-key`
5. Click **Deploy**

### Point your domain (harimishra.com)

In Vercel dashboard → Project → Settings → Domains:
1. Add `harimishra.com`
2. Copy the provided DNS records (usually an A record or CNAME)
3. Update them in your domain registrar (GoDaddy / Namecheap / etc.)
4. Wait 5–30 minutes for propagation ✅

---

## 📁 Project Structure

```
hari-portfolio/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Main page (assembles all sections)
│   ├── globals.css         # Global styles
│   └── api/
│       └── chat/
│           └── route.ts    # Claude AI API route (streaming)
├── components/
│   ├── Navbar.tsx          # Sticky navigation
│   ├── Hero.tsx            # Hero with typewriter + terminal card
│   ├── Experience.tsx      # Timeline of work experience
│   ├── Projects.tsx        # Featured projects + patent
│   ├── Skills.tsx          # Skills grid + achievements
│   ├── Contact.tsx         # Contact cards + footer
│   └── ChatWidget.tsx      # Floating AI chat widget
├── lib/
│   └── profile.ts          # ← ALL YOUR DATA IS HERE
├── .env.example            # Template for env vars
└── vercel.json             # Vercel config
```

## 🛠 Customisation

### Update your data

Edit `lib/profile.ts` — this is the single source of truth for all content AND what the AI knows about you.

### Add GitHub stats (Phase 2)

1. Add `GITHUB_TOKEN` to `.env.local`
2. Create `lib/github.ts` to fetch repos
3. Import into `Projects.tsx`

### Styling

- Colors defined in `tailwind.config.js` and `globals.css`
- Main accent: `#6366f1` (indigo)
- Background: `#0a0a0f` (near-black)

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| AI | Claude via `@anthropic-ai/sdk` |
| Streaming | Edge Runtime + SSE |
| Hosting | Vercel |

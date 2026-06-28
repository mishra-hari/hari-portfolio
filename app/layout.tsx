import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hari Prapanna Mishra — Frontend Architect',
  description:
    'Associate Manager & Frontend Architect with 11 years building enterprise-scale web applications. Expert in micro-frontend architecture, Angular, React, and Web Components.',
  keywords: ['Frontend Architect', 'Associate Manager', 'Angular', 'React', 'Micro Frontend', 'TypeScript'],
  authors: [{ name: 'Hari Prapanna Mishra' }],
  openGraph: {
    title: 'Hari Prapanna Mishra — Frontend Architect',
    description: '11 years building enterprise-scale web applications.',
    url: 'https://harimishra.com',
    siteName: 'Hari Mishra Portfolio',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-surface text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}

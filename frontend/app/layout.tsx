import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'AgriPulse - AI Powered Crop Disease Prediction',
  description:
    'AgriPulse uses advanced artificial intelligence and deep learning to detect and predict crop diseases from leaf images in real-time. Protect your harvest with AI.',
}

export const viewport: Viewport = {
  themeColor: '#0a1a10',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}

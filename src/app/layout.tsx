import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import { siteConfig } from '@/lib/constants/config'
import { Header } from '@/components/layout/Header/Header'
import { Footer } from '@/components/layout/Footer/Footer'
import { CookieConsentBanner } from '@/components/common/CookieConsentBanner'
import { FloatingCTA } from '@/components/common/FloatingCTA'
import { InvestmentActivityNotification } from '@/components/common/InvestmentActivityNotification'
import { MarketTicker } from '@/components/common/MarketTicker'
import './globals.css'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen bg-background font-sans antialiased`}>
        <LanguageProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <MarketTicker />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CookieConsentBanner />
          <FloatingCTA />
          <InvestmentActivityNotification />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}

import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://quantarasecurity.co.uk'),
  title: {
    template: '%s | Quantara Security - Professional Security Services',
    default: 'Quantara Security - Professional Security Services in UK',
  },
  description: 'Premium security services in London & Essex. Manned guarding, mobile patrols, event security, key holding, alarm response & CCTV monitoring. Trusted by businesses.',
  keywords: 'security services, manned guarding, mobile patrols, event security, CCTV monitoring, key holding, alarm response, London security, Essex security',
  generator: 'Next.js',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://quantarasecurity.co.uk',
    siteName: 'Quantara Security',
    title: 'Quantara Security - Professional Security Services',
    description: 'Premium security services across London & Essex. Manned guarding, mobile patrols, event & corporate security.',
    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Quantara Security Group Ltd',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quantara Security - Professional Security Services',
    description: 'Premium security services in London & Essex. Manned guarding, mobile patrols, event security & more.',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  icons: {
    icon: [
      {
        url: '/logo.jpeg',
        sizes: 'any',
      },
    ],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} data-scroll-behavior="smooth">
      <head>
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Quantara Security Group Ltd',
            description: 'Professional security services in London and Essex',
            url: 'https://quantarasecurity.co.uk',
            telephone: '+44',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'London',
              addressRegion: 'London',
              addressCountry: 'GB',
            },
            sameAs: [],
          })}
        </script>
      </head>
      <body className="font-sans antialiased bg-black text-white flex flex-col min-h-screen">
        {/* Emergency Banner */}
        <div className="bg-red-700 text-white text-center py-2 px-4 text-sm font-medium sticky top-0 z-[60]">
          Need urgent security cover? Call Quantara Security 24/7 on <a href="tel:07762308545" className="underline hover:text-red-200">020 3718 1599</a>
        </div>
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const siteUrl = 'https://redwan-shiddiki.vercel.app'
const description =
  'Md. Redwan Shiddiki — AI & Machine Learning Researcher specializing in Computer Vision, Deep Learning, and Intelligent Software Systems. IEEE-published, research-focused, and building intelligent solutions for real-world challenges.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Md. Redwan Shiddiki — AI & ML Researcher',
    template: '%s — Md. Redwan Shiddiki',
  },
  description,
  keywords: [
    'Md. Redwan Shiddiki',
    'AI Researcher',
    'Machine Learning',
    'Computer Vision',
    'Deep Learning',
    'Research Assistant',
    'Software Engineer',
    'Bangladesh',
    'IEEE',
  ],
  authors: [{ name: 'Md. Redwan Shiddiki' }],
  creator: 'Md. Redwan Shiddiki',
  generator: 'v0.app',
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Md. Redwan Shiddiki — AI & Machine Learning Researcher',
    description,
    siteName: 'Md. Redwan Shiddiki',
    locale: 'en_US',
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Md. Redwan Shiddiki',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md. Redwan Shiddiki — AI & Machine Learning Researcher',
    description,
    images: ['/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0c0f18',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Md. Redwan Shiddiki',
  jobTitle: 'AI & Machine Learning Researcher',
  email: 'mailto:seyam07redwan@gmail.com',
  url: siteUrl,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dhaka',
    addressCountry: 'Bangladesh',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Manarat International University',
  },
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'Computer Vision',
    'Deep Learning',
    'Natural Language Processing',
  ],
  sameAs: [
    'https://github.com/22redwan07',
    'https://www.linkedin.com/in/md-redwan-shiddiki',
    'https://scholar.google.com/citations?user=TYgvMHUAAAAJ&hl=en',
    'https://www.researchgate.net/profile/Redwan-S',
    'https://orcid.org/0009-0004-0447-3750',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

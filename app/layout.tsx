import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clarence - Your Private AI Insurance Broker',
  description: 'Find better coverage, manage renewals, and save time. No calls, no paperwork, no stress.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


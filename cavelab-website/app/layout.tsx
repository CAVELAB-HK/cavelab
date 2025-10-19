import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CAVELAB - Making Healthcare Accessible',
  description: 'Founded by HKU students, CAVELAB builds innovative healthcare solutions that empower patients to take control of their wellbeing.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

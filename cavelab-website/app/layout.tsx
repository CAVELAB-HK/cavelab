import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CAVELAB',
  description: 'Founded by HKU students, CAVELAB builds innovative healthcare solutions that empower patients to take control of their wellbeing.',
  icons: {
    icon: '/cavelab logo (pic).png',
  },
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

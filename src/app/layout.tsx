import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Virtus Tricot',
  description: 'Sifatli to\'qimachilik aksessuarlar ishlab chiqarish va sotish korxonasi.',
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

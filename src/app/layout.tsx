import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'

export const raleway = Raleway({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Finalist',
  description:
    'Sjabloon voor Next.js met Tailwind CSS, Tailwind Typography, en DaisyUI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='nl' data-theme='finalist'>
      <body className={raleway.className}>{children}</body>
    </html>
  )
}

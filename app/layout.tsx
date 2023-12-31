import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ScriptBazaar',
  description: 'A marketplace for scripts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="">
      <head>
      <script async defer src="https://scripts.withcabin.com/hello.js"></script>
      </head>
      <ClerkProvider>
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>{children}</body>
      </ClerkProvider>
    </html>
  )
}

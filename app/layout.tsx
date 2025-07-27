import type React from "react"
import type { Viewport, Metadata } from "next"
import { Geist } from "next/font/google"
import { Providers } from "@/context"
import { ClientComponents } from "@/components/client-components"
import StructuredData from "./structured-data"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: true,
})

export const dynamic = "force-static"
export const revalidate = 30

export const viewport: Viewport = {
  maximumScale: 1, // Disable auto-zoom on mobile Safari
}

export const metadata: Metadata = {
  metadataBase: new URL('https://web01.tech'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  themeColor: '#ffffff',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Nassreddine Larbi Aissa',
  },
  formatDetection: {
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.className} antialiased max-w-screen min-h-svh bg-slate-1 text-slate-12 opacity-0 duration-75 transition-opacity`}
      >
        <Providers defaultTheme="system" forcedTheme={null}>
          <ClientComponents />
          <div className="max-w-screen-sm mx-auto w-full relative z-[1] flex flex-col min-h-screen">
            <div className="px-5 gap-8 flex flex-col flex-1 py-[12vh]">
              <main className="flex justify-center">{children}</main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}

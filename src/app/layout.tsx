
import './globals.css'
import type { Metadata } from 'next'
import {  Saira_Stencil_One } from 'next/font/google'

const saira = Saira_Stencil_One({ weight: "400",preload:false })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.glowingphoenix.co'),
  title: 'Glowing Phoenix Banda de Metal',
  description: 'Glowing Phoenix, banda de thrash metal originaria de Bogotá D.C.',
  keywords: 'banda, metal, metal colombia, banda de metal, toques, musicos, conciertos, metallica, toques en vivo, artistas colombianos',
  openGraph: { 
    type: 'website',
    url: 'https://www.glowingphoenix.co',
    siteName: 'Glowing Phoenix',
    locale: 'es-CO',
    title: 'Glowing Phoenix Banda de Metal',
    description: 'Glowing Phoenix, banda de thrash metal originaria de Bogotá D.C.',
    countryName: 'Colombia',
    images: [{
      url: '/glowing_big.png',
      width: 1200,
      height: 630
    }, {
      url: '/glowing_mid.png',
      width: 800,
      height: 420
    }, {
      url: '/glowing_small.png',
      width: 600,
      height: 315
    }]
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  },
  robots: 'index, follow',
  authors: {name: 'Glowing Phoenix', url: 'https://www.glowingphoenix.co'}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
      <link rel="canonical" href="https://www.glowingphoenix.co" />
      </head>
      <body className={saira.className + " w-screen h-screen"}>
        {children}

        </body>
    </html>
  )
}

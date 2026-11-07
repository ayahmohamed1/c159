import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://agiftforyouuu.vercel.app'),
  title: '¡Feliz cumpleaños, Sofía! 🎂',
  description: 'Un regalo de cumpleaños hecho con todo mi amor para Sofía ❤️',
  openGraph: {
    title: '¡Feliz cumpleaños, Sofía! 🎂',
    description: 'Un regalo de cumpleaños hecho con todo mi amor para Sofía ❤️',
    url: 'https://agiftforyouuu.vercel.app',
    siteName: 'Un regalo de cumpleaños',
    type: 'website',
    images: [
      {
        url: 'https://agiftforyouuu.vercel.app/images/og-cat.jpg',
        secureUrl: 'https://agiftforyouuu.vercel.app/images/og-cat.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Feliz cumpleaños, Sofía 🐱🎂',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '¡Feliz cumpleaños, Sofía! 🎂',
    description: 'Un regalo de cumpleaños hecho con todo mi amor para Sofía ❤️',
    images: ['https://agiftforyouuu.vercel.app/images/og-cat.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Nunito:wght@300;400;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}

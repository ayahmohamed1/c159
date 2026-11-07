import type { Metadata } from 'next'
import giftData from '@/lib/giftData'
import GiftClient from '@/components/GiftClient'

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

export default function Home() {
  const data = giftData.ahmed || giftData.amir
  return <GiftClient data={data} />
}
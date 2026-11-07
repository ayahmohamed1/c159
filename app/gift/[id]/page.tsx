import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import giftData from '@/lib/giftData'
import GiftClient from '@/components/GiftClient'

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const data = giftData[params.id.toLowerCase()]
  if (!data) return { title: 'Regalo no encontrado' }
  
  return {
    title: `¡Feliz cumpleaños, ${data.receiverName}! 🎂`,
    description: `Un regalo de cumpleaños hecho con todo mi amor para ${data.receiverName} ❤️`,
    openGraph: {
      title: `¡Feliz cumpleaños, ${data.receiverName}! 🎂`,
      description: `Un regalo de cumpleaños hecho con todo mi amor para ${data.receiverName} ❤️`,
      url: `https://agiftforyouuu.vercel.app/gift/${params.id.toLowerCase()}`,
      siteName: 'Un regalo de cumpleaños',
      type: 'website',
      images: [
        {
          url: 'https://agiftforyouuu.vercel.app/images/og-cat.jpg',
          secureUrl: 'https://agiftforyouuu.vercel.app/images/og-cat.jpg',
          width: 1200,
          height: 630,
          type: 'image/jpeg',
          alt: `Feliz cumpleaños, ${data.receiverName} 🐱🎂`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `¡Feliz cumpleaños, ${data.receiverName}! 🎂`,
      description: `Un regalo de cumpleaños hecho con todo mi amor para ${data.receiverName} ❤️`,
      images: ['https://agiftforyouuu.vercel.app/images/og-cat.jpg'],
    },
  }
}

export default function GiftPage({ params }: { params: { id: string } }) {
  const data = giftData[params.id.toLowerCase()]
  if (!data) return notFound()
  
  return <GiftClient data={data} />
}

import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function DestinationDetailPage({ params }: PageProps) {
  // En Next.js 15+, los parámetros de ruta son promesas y deben resolverse con await
  const { slug } = await params

  // Consultar el destino específico filtrando por su slug
  const { data: destination, error } = await supabase
    .from('destinations')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error || !destination) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Botón para volver al inicio */}
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 mb-8 transition-colors"
        >
          ← Volver al catálogo
        </Link>

        {/* Tarjeta de Detalle */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* Imagen Principal */}
          <div className="relative h-80 sm:h-96 w-full">
            <Image
              src={destination.image_url}
              alt={destination.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>

          {/* Información del Destino */}
          <div className="p-8 sm:p-12">
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
              <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full">
                {destination.location}
              </span>
              <span className="text-3xl font-extrabold text-gray-900">
                ${destination.price} USD
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
              {destination.title}
            </h1>

            <div className="border-t border-gray-100 pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Descripción del lugar</h3>
              <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                {destination.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import Image from 'next/image'

// Forzamos renderizado dinámico para asegurar datos frescos desde Supabase
export const revalidate = 0

export default async function Home() {
  // Consulta a Supabase para obtener todos los destinos ordenados
  const { data: destinations, error } = await supabase
    .from('destinations')
    .select('*')
    .order('title', { ascending: true })

  if (error) {
    console.error('Error al cargar destinos:', error.message)
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Catálogo de Turismo
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Explora los destinos más fascinantes del mundo y planifica tu próxima gran aventura.
          </p>
        </div>

        {/* Cuadrícula de Destinos */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {destinations?.map((destination) => (
            <div 
              key={destination.id} 
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Imagen del Destino */}
              <div className="relative h-56 w-full">
                <Image
                  src={destination.image_url}
                  alt={destination.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                      {destination.location}
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      ${destination.price} USD
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {destination.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {destination.description}
                  </p>
                </div>

                {/* Enlace a la Ruta Dinámica */}
                <Link
                  href={`/destinos/${destination.slug}`}
                  className="w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-xl transition-colors duration-200"
                >
                  Ver Detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
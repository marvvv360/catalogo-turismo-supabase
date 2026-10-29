# Catálogo de Turismo - Next.js y Supabase

Aplicación web moderna y responsiva desarrollada como un catálogo de destinos turísticos, construida con Next.js (App Router), Tailwind CSS, TypeScript y Supabase como base de datos backend.

## Descripción del Proyecto
Este proyecto permite a los usuarios explorar un listado dinámico de destinos turísticos con imágenes optimizadas y consultar la información detallada de cada ubicación a través de rutas dinámicas. Cuenta con conexión en tiempo real a una base de datos PostgreSQL alojada en Supabase y está optimizado para su despliegue en Vercel.

---

## Requisitos Previos

- Node.js >= 18.x
- npm
- Cuenta de Supabase configurada

---

## Instalación y Configuración

1. Clonar el repositorio:
   git clone <https://github.com/marvvv360/catalogo-turismo-supabase.git>
   cd catalogo-turismo

2. Instalar dependencias:
   npm install

3. Configurar variables de entorno:
   Crea un archivo llamado `.env.local` en la raíz del proyecto basándote en la siguiente estructura de variables necesarias:

   NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase_aqui
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_publica_anon_aqui

4. Iniciar el servidor local:
   npm run dev

   La aplicación estará corriendo en http://localhost:3000.
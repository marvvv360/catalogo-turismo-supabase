# Catálogo de Turismo - Next.js, Supabase & LocalStack

Aplicación web moderna y responsiva desarrollada como un catálogo de destinos turísticos, construida con Next.js (App Router), Tailwind CSS, TypeScript y Supabase como base de datos backend, complementada con un entorno de emulación de infraestructura cloud local mediante LocalStack.

## Descripción del Proyecto
Este proyecto permite a los usuarios explorar un listado dinámico de destinos turísticos con imágenes optimizadas y consultar la información detallada de cada ubicación a través de rutas dinámicas. Cuenta con conexión a una base de datos PostgreSQL alojada en Supabase y cumple con los requerimientos académicos de emulación de servicios AWS a costo cero mediante LocalStack ejecutado en contenedores Docker.

---

## Arquitectura y Requisitos del Entorno
- Frontend / Framework: Next.js (App Router) con TypeScript y Tailwind CSS.
- Base de Datos / Backend: Supabase (PostgreSQL en la nube).
- Emulación de Infraestructura (AWS / Cloud): LocalStack (v3.4.0) ejecutado localmente a través de Docker y Docker Compose en el puerto estándar 4566.
- Políticas: Cero costos, sin necesidad de pagos ni tarjetas de crédito o activación de servicios de pago en la nube.

---

## Requisitos Previos

- Node.js >= 18.x
- npm
- Docker y Docker Desktop activos en el sistema
- Cuenta de Supabase configurada

---

## Instalación y Configuración

1. Clonar el repositorio:
   git clone https://github.com/marvvv360/catalogo-turismo-supabase.git
   cd catalogo-turismo

2. Instalar dependencias:
   npm install

3. Configurar variables de entorno:
   Crea un archivo llamado .env.local en la raíz del proyecto basándote en la siguiente estructura:

   NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase_aqui
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_publica_anon_aqui

---

## Ejecución de la Infraestructura Cloud Local (LocalStack)

Para emular los servicios de AWS requeridos sin ningún costo ni registro de tarjetas de crédito:

1. Asegúrate de contar con el archivo docker-compose.yml en la raíz del proyecto con la configuración de LocalStack:

```services:
localstack:
image: localstack/localstack:3.4.0
ports:
- "4566:4566"
environment:
- AWS_DEFAULT_REGION=us-east-1
volumes:
- "./localstack-data:/var/lib/localstack"
```

2. Iniciar el contenedor de LocalStack:
   docker compose up -d

3. Verificar el estado del contenedor:
   docker ps

   (Asegúrate de que el servicio localstack aparezca con estado Up y saludable en el puerto 4566).

---

## Ejecución de la Aplicación

1. Iniciar el servidor de desarrollo:
   npm run dev

2. Acceder a la aplicación:
   Abre tu navegador e ingresa a http://localhost:3000 (o el puerto asignado automáticamente como http://localhost:3001 en caso de uso concurrente).
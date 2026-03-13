# Escribania Schroder

Sitio publico en Next.js para la nueva version de escribaniaschroder.com.ar, orientado a SEO local, conversion por servicio y accesibilidad.

## Requisitos

- Node.js 22+
- npm 10+

## Scripts

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run start`

## Variables de entorno

- `NEXT_PUBLIC_SITE_URL`: dominio canonico base. Permite cambiar entre `www` y `no-www` sin tocar las paginas.
- `NEXT_PUBLIC_CONTACT_EMAIL`: email publico mostrado en el sitio.
- `CONTACT_WEBHOOK_URL`: webhook opcional para enviar consultas del formulario a un servicio externo.

## Estructura

- `app/`: rutas y API de contacto.
- `components/`: layout, cards, FAQ, formulario y modulos reutilizables.
- `content/services/`: contenido editorial en Markdown para cada servicio.
- `lib/`: tipos, parser Markdown, metadata, schema y validaciones.
- `public/og/`: imagen social base.

## Notas de operacion

- El formulario funciona sin webhook y responde OK para permitir pruebas locales. Para entrega real conviene conectar `CONTACT_WEBHOOK_URL`.
- `robots.ts` y `sitemap.ts` generan los assets SEO tecnico.
- La canonicalizacion se controla desde `NEXT_PUBLIC_SITE_URL`.

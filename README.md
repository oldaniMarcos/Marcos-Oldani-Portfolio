# Portfolio

Portfolio personal desarrollado con Angular 21. Es una página de una sola vista con secciones de presentación, perfil, proyectos y contacto; la navegación desplaza entre secciones y los proyectos muestran sus enlaces.

## Contenido

- `src/app/`: aplicación y componentes de cada sección.
- `src/app/data/projects.data.ts`: información de los proyectos.
- `public/projects/`: imágenes referenciadas desde los datos de proyectos.

## Desarrollo

Requiere Node.js y npm. Instalar dependencias y levantar el servidor local:

```bash
npm ci
npm start
```

Otros comandos:

```bash
npm run build # Build de producción
npm test      # Pruebas unitarias con Vitest
```

## Deploy

El sitio se publica en Cloudflare Pages. El build de producción se genera con `npm run build`; el directorio de salida es `dist/portfolio/browser`.

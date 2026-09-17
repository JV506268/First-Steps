# First Steps

Portal estático de onboarding para Enterprise Architecture, Azure y Azure Landing Zones. El contenido general de Azure se distingue de la información interna de Profuturo, que permanece marcada como pendiente de validación.

## Stack

React, TypeScript, Vite y Lucide React. No requiere backend, variables secretas ni servicios externos.

## Requisitos y ejecución local

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

Para validar producción:

```bash
npm run build
npm run preview
```

## Estructura

- `src/content`: glosario, rutas y recursos editables.
- `src/components`: navegación y piezas visuales reutilizables.
- `src/pages`: vistas principales del portal.
- `src/styles`: lenguaje visual global.
- `.github/workflows`: despliegue a GitHub Pages.

## Contenido y publicación

La navegación usa el hash de la URL para funcionar en GitHub Pages sin servidor de reescritura. Vite usa `/First-Steps/` como base por defecto; para otro nombre de repositorio puede usarse `BASE_PATH=/nombre/ npm run build`.

En GitHub, habilita **Settings > Pages > Source: GitHub Actions**. Cada push a `main` ejecutará el workflow y publicará `dist`.

Para agregar contenido, actualiza los arreglos tipados en `src/content/index.ts` y añade una tarjeta o vista en `src/App.tsx`. Los diagramas actuales son CSS y texto alternativo; pueden evolucionar a Mermaid cuando el contenido necesite más detalle.

## Seguridad y mantenimiento

No introducir secretos, credenciales, direcciones internas, datos personales ni decisiones no confirmadas. Usa `Pendiente de validación` para información específica de Profuturo y revisa las fuentes oficiales antes de publicar cambios.

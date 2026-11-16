# LANKAMAR — Portfolio profesional

Sitio profesional de Marcelo Omar Lancry Kamycki. Presenta trayectoria en Enfermería, gestión hospitalaria, docencia, tecnología educativa e inteligencia artificial aplicada, junto con proyectos, publicaciones y un registro documental de formación continua.

## Arquitectura del sitio

- **Interfaz:** React, TypeScript y Vite.
- **Datos de trayectoria y contadores:** `data.ts`.
- **Catálogo de formación continua:** `public/certificaciones.json`; su búsqueda pública se encuentra en `/credenciales/`.
- **Fichas documentales locales:** `public/credenciales/<identificador>/`. Estas fichas son descripciones del archivo documental y no sustituyen la validación de una institución emisora.
- **Currículums:** tres perfiles (tecnología/IA, salud/gestión y académico) disponibles mediante el circuito de solicitud y verificación por correo. Los PDF privados y el servicio de descarga se administran en infraestructura separada y no se incorporan al repositorio público.
- **Construcción:** `npm run build`, con generación de rutas estáticas y control de archivos públicos mediante `scripts/check-public.py`.
- **Publicación:** integración del repositorio con el despliegue web; el servicio de solicitudes de CV utiliza un backend independiente.

## Estructura principal

- `pages/`: vistas principales de la aplicación.
- `components/`: componentes reutilizables.
- `public/`: recursos estáticos y catálogo de credenciales.
- `seo/`: metadatos de las rutas públicas.
- `scripts/`: construcción, validación y preparación del despliegue.
- `CV-001_ESTADO.md`: bitácora del circuito de solicitud de CV.

## Desarrollo local

Requisitos: Node.js compatible con las versiones fijadas en `package.json`.

```bash
npm ci
npm run dev
```

Para comprobar el artefacto público:

```bash
npm run build
```

No se deben publicar secretos, documentos personales originales, bases de datos ni archivos privados del servicio de CV.

## Procedencia técnica

El repositorio se creó originalmente mediante una plantilla de Google AI Studio, como indica la referencia histórica «Generated from» que GitHub presenta en su interfaz. La plantilla identifica el punto de partida del repositorio; no describe la autoría de los contenidos académicos, los desarrollos posteriores ni la administración actual del sitio LANKAMAR.

## Verificación documental

Las constancias se clasifican según su naturaleza (título, curso, participación, actividad académica). Un enlace a una ficha documental local no debe confundirse con un mecanismo de comprobación institucional oficial.

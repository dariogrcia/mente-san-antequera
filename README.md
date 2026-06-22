# Dra. Isabel Contreras Pérez — Web profesional

Web personal de la **Dra. Isabel Contreras Pérez**, psiquiatra, para dar a
conocer su actividad y captar consulta privada. Incluye presentación, servicios,
una sección amplia de **CV / trayectoria**, contacto y avisos legales.

🔗 **En producción:** https://dariogrcia.github.io/mente-san-antequera/

---

## Stack

| Capa | Tecnología |
| --- | --- |
| Framework | [TanStack Start](https://tanstack.com/start) (React) + [TanStack Router](https://tanstack.com/router) (file-based routing) |
| Build | [Vite](https://vitejs.dev/) |
| Estilos | [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (Radix UI) |
| Gestor de paquetes | [Bun](https://bun.sh/) (lockfile `bun.lock`) |
| Origen | Generado y editable en [Lovable](https://lovable.dev/) |

### Páginas

`/` · `/sobre-mi` · `/servicios` · `/cv` · `/contacto` · `/aviso-legal` ·
`/politica-de-privacidad` · `/sitemap.xml`

---

## Desarrollo local

Requisitos: **Node 22+** y **Bun** (o npm).

```bash
bun install        # instalar dependencias
bun run dev        # servidor de desarrollo
bun run build      # build de producción
bun run lint       # eslint
```

---

## Despliegue — GitHub Pages

El sitio se publica automáticamente en **GitHub Pages** en cada push a `main`,
mediante el workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Por qué hay un paso de "prerender"

TanStack Start es **SSR**: `vite build` produce los assets de cliente
(`dist/client`) **más** un handler de servidor (`dist/server/server.js`), pero
**no genera HTML estático**, y GitHub Pages solo sirve ficheros estáticos.

[`scripts/prerender.mjs`](scripts/prerender.mjs) convierte el sitio a HTML
estático (**SSG**): ejecuta el handler de servidor ya compilado en proceso,
**rastrea los enlaces internos** desde la home (descubriendo todas las páginas) y
vuelca el HTML en `dist/client/<ruta>/index.html`. Además:

- Renderiza la ruta de servidor **`/sitemap.xml`** a un fichero estático.
- Genera **`404.html`** (copia de la home) como *fallback* SPA para rutas
  desconocidas, y **`.nojekyll`** para publicar los ficheros tal cual.

### ⚠️ Formulario de contacto

El formulario usa una **función de servidor** (`src/lib/api/send-contact.ts`,
`sendContact`) que envía un email vía Gmail/nodemailer. **Esto requiere un
servidor y NO funciona en GitHub Pages** (hosting estático): el envío fallará.

Opciones para que el contacto funcione en estático (pendiente de decidir):
- Convertirlo a `mailto:` (abre el correo prerrellenado a `isacompe@gmail.com`).
- Convertirlo a WhatsApp (mensaje prerrellenado).
- Usar un servicio de formularios externo (Formspree, Web3Forms…).
- Desplegar en un host con servidor (p. ej. Cloudflare Pages, el target nativo
  del proyecto) en lugar de GitHub Pages.

Mientras tanto, el resto de vías de contacto (email/teléfono mostrados en la web)
sí funcionan.

### Base path

Al ser un *project site*, la web se sirve desde `/mente-san-antequera/`. El
workflow define `BASE_PATH=/<nombre-del-repo>/`, que Vite usa como `base` y el
router como `basepath` (ver `vite.config.ts` y `src/router.tsx`). En local
`BASE_PATH` no está definido, así que el `base` es `/`.

### Reproducir el build de Pages en local

```bash
BASE_PATH=/mente-san-antequera/ bun run build
BASE_PATH=/mente-san-antequera/ bun run prerender
# salida estática lista para servir en: dist/client/
```

### Configuración del repositorio (una sola vez)

En **Settings → Pages**, *Source* = **GitHub Actions**. El workflow hace el resto.

---

## Flujo de despliegue

```
push a main
   └─► GitHub Actions (.github/workflows/deploy.yml)
        ├─ bun install
        ├─ vite build                  → dist/client + dist/server (SSR)
        ├─ node scripts/prerender.mjs   → HTML estático + sitemap.xml + 404.html + .nojekyll
        ├─ upload-pages-artifact (dist/client)
        └─ deploy-pages                 → https://dariogrcia.github.io/mente-san-antequera/
```

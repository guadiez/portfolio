# Gua Diez — Portfolio

Sitio web del portfolio de **Guadalupe Diez**, filmmaker y fotógrafa, construido
como una reproducción fiel del PDF original (`React + Vite + Tailwind CSS +
Framer Motion`), listo para publicarse en GitHub Pages.

## Stack

- React 18 + Vite 5
- Tailwind CSS
- Framer Motion (animaciones y scroll-reveal)
- React Icons

## Empezar en local

```bash
npm install
npm run dev
```

Abrí `http://localhost:5173`.

## Build de producción

```bash
npm run build
npm run preview   # para previsualizar el build localmente
```

## Publicar en GitHub Pages

1. Creá un repositorio en GitHub, por ejemplo `portfolio`, y subí este
   proyecto.
2. Abrí `vite.config.js` y verificá que `base` coincida con el nombre exacto
   de tu repositorio:

   ```js
   base: '/portfolio/',
   ```

   Si vas a publicar en una página de usuario/organización
   (`tuusuario.github.io`) o un dominio propio, usá `base: '/'`.

3. Instalá dependencias y desplegá:

   ```bash
   npm install
   npm run deploy
   ```

   Esto genera el build (`npm run build`) y lo publica en la rama `gh-pages`
   gracias al paquete `gh-pages`.

4. En GitHub, andá a **Settings → Pages** y elegí la rama `gh-pages` como
   fuente (si no se configuró automáticamente).

Tu sitio quedará publicado en:
`https://tuusuario.github.io/portfolio/`

## Estructura del proyecto

```
src/
  components/   Navbar, Hero, About, Skills, Projects, ProjectGallery,
                WorkSection, Contact, Footer, Loader, Reveal, Stagger,
                BurstShape, PageBadge
  pages/        Home.jsx (compone todas las secciones)
  data/         content.js (textos) e images.js (imágenes)
  hooks/        useActiveSection, useScrolled
  assets/       imágenes optimizadas extraídas del PDF original
  App.jsx
  main.jsx
  index.css
```

## Notas sobre tipografías

El sitio usa **Poppins** (texto general) y **Pagkaki** (títulos, la
tipografía de "papel recortado" del diseño original), incluida directamente
en `src/assets/fonts/PAGKAKI-Regular.ttf` y declarada vía `@font-face` en
`src/index.css`. Como respaldo, si por algún motivo el archivo no carga, el
sitio cae automáticamente en **Henny Penny** (Google Fonts) y luego en
Poppins, para que los títulos nunca se vean rotos.

## Créditos

Fotografías y contenido © Guadalupe Diez.

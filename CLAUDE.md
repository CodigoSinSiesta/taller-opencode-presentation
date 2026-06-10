# Taller OpenCode — Presentación

Deck de la charla **"Agentes de codificación con OpenCode"** de Código Sin Siesta.
Acompaña al repo de prácticas `taller-opencode-starter`.

## Stack

- Astro 5 + Svelte 5 + Tailwind 4 + GSAP 3 + TypeScript estricto.
- pnpm + Node ≥ 20. Cada presentación es **independiente** (sin paquete `theme`).

## Arquitectura

```
src/
├── components/
│   ├── Navigation.svelte       # control de slides (teclado, hash, swipe)
│   ├── CopyKey.svelte          # botón "copiar API key" de DeepSeek
│   └── slides/                 # 13 slides: Slide01..Slide13
├── config/workshop.ts          # ⚠️ DEEPSEEK_KEY y datos de la edición
├── layouts/PresentationLayout.astro
├── styles/global.css           # tokens + "slide kit" de clases compartidas
├── utils/animations.ts         # helpers GSAP
└── pages/index.astro           # registra las 13 slides
guia/                           # notas del ponente, NN-slug.md por slide
```

## Reglas duras

- Una slide = un fichero `SlideNN<Nombre>.svelte` con raíz `class="swiper-slide slide-base"`.
- Usa las clases del **slide kit** de `global.css` (`.slide-content`, `.eyebrow`,
  `.slide-title`, `.grid-2/3`, `.feature-card`, `.code-block`, `.bullet-list`, `.callout`,
  `.pill`). Evita CSS bespoke salvo en la hero.
- Iconos: SVG inline. NO `lucide-svelte`.
- Svelte 5: `$state()`, `$effect()`, `onclick=` (sin `on:click`).
- Tailwind 4: temas vía CSS custom properties en `global.css`, no `tailwind.config`.

## La API key de DeepSeek

- Vive **solo** en `src/config/workshop.ts` (`DEEPSEEK_KEY`). El ponente la pega
  justo antes del taller y la rota después.
- **Nunca** commitees la key real: deja el placeholder en git.
- La slide 05 (`Slide05DeepSeekKey`) la muestra con `CopyKey.svelte` (botón copiar).

## Cuándo NO actuar sin preguntar

- Cambiar `astro.config.mjs:base` (impacta el deploy en GitHub Pages).
- Sustituir `gsap` por otra librería.
- Tocar los tokens de color sin documentar.

## Dev

```bash
pnpm install
pnpm dev      # http://localhost:4329
pnpm build    # astro check && astro build
```

## Deploy

GitHub Pages: `https://codigosinsiesta.github.io/taller-opencode-presentation`
(base en `astro.config.mjs`). Workflow en `.github/workflows/deploy.yml`.

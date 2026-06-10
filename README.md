# Taller OpenCode — Presentación

Deck de la charla **"Agentes de codificación con OpenCode"** de Código Sin Siesta.
Es la parte teórica del taller; la práctica está en
[`taller-opencode-starter`](https://github.com/CodigoSinSiesta/taller-opencode-starter).

13 slides: por qué OpenCode → cómo funciona → instalación → **conectar DeepSeek
(con botón de copiar la API key)** → AGENTS.md → contexto/subagentes → OpenSpec →
el flujo del taller → buenas prácticas → harness → manos a la obra → cierre.

## Antes de presentar: pega la API key

Edita **una línea** en `src/config/workshop.ts`:

```ts
export const DEEPSEEK_KEY = "sk-...";   // la key efímera de esta edición
```

La slide 5 la mostrará con un botón **"Copiar API key"**. No la dejes commiteada:
restaura el placeholder y rota la key en DeepSeek al terminar.

## Desarrollo

```bash
pnpm install
pnpm dev        # http://localhost:4329
pnpm build      # astro check && astro build
pnpm preview
```

Requisitos: Node ≥ 20, pnpm.

## Estructura

- `src/components/slides/` — las 13 slides (`Slide01Hero` … `Slide13Cierre`).
- `src/components/CopyKey.svelte` — botón de copiar la key de DeepSeek.
- `src/config/workshop.ts` — key + datos de la edición.
- `src/styles/global.css` — tokens de marca + "slide kit" de clases compartidas.
- `guia/` — notas del ponente, una por slide.

## Deploy

GitHub Pages vía `.github/workflows/deploy.yml` →
`https://codigosinsiesta.github.io/taller-opencode-presentation`.

## Navegación

`←` / `→` o botones laterales · `#/slide-name` para enlazar · contador abajo a la derecha.

Licencia: contenido de Código Sin Siesta · Alejandro de la Fuente.

<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide slide-base" bind:this={slideElement}>
  <div class="slide-bg"></div>
  <div class="slide-content">
    <div class="eyebrow"><span class="eyebrow-dot"></span><span>El contrato</span></div>
    <h2 class="slide-title"><span class="hl">AGENTS.md</span>: el system prompt de tu repo</h2>
    <p class="lead">OpenCode lee <code>AGENTS.md</code> en cada sesión. Es donde defines arquitectura, reglas y qué NO hacer.</p>

    <div class="grid-2" style="align-items:start;">
      <pre class="code-block"><span class="c"># AGENTS.md</span>
## Propósito
Mini gestor de tareas. Practicamos SDD.

## Convenciones
- ESM, TypeScript estricto, sin any
- Tests con node:test

## Qué NO hacer
- No ampliar task.ts a mano
- No commitear .env ni la API key</pre>

      <ul class="bullet-list">
        <li>Estándar abierto: lo leen OpenCode, Codex, Cursor… (Claude usa <code>CLAUDE.md</code>, un wrapper).</li>
        <li>Sin él, el agente no conoce tu arquitectura y rompe tus patrones.</li>
        <li>Cuesta 500–5.000 tokens, pero sube muchísimo la calidad y la consistencia.</li>
        <li>Empieza pequeño y hazlo crecer con cada fricción que detectes.</li>
      </ul>
    </div>
  </div>
</div>

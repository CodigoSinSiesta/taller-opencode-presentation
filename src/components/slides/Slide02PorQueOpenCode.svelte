<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide slide-base" bind:this={slideElement}>
  <div class="slide-bg"></div>
  <div class="slide-content">
    <div class="eyebrow"><span class="eyebrow-dot"></span><span>Por qué OpenCode</span></div>
    <h2 class="slide-title">El panorama, y por qué elegimos <span class="hl">OpenCode</span></h2>
    <p class="lead">Todos los agentes comparten la misma idea (LLM + herramientas + bucle). Cambian la filosofía y el lock-in.</p>

    <div class="grid-3">
      <div class="feature-card">
        <span class="fc-title">IDE-native</span>
        <span class="fc-body">Cursor, Windsurf. Fluido e integrado, pero atado al editor y con cierto lock-in.</span>
      </div>
      <div class="feature-card">
        <span class="fc-title">Cloud</span>
        <span class="fc-body">Antigravity, Gemini CLI. Cómodos, pero tu contexto vive en su nube.</span>
      </div>
      <div class="feature-card accent">
        <span class="fc-title">Terminal-first</span>
        <span class="fc-body">Claude Code, Codex y <strong>OpenCode</strong>. Flexible, scriptable, cerca del repo.</span>
      </div>
    </div>

    <div class="callout">
      <strong>OpenCode</strong> (sst/opencode) es <strong>open source</strong>, <strong>multi-modelo</strong>
      (Claude, DeepSeek, locales…) y <strong>sin vendor lock-in</strong>. Lee <code>AGENTS.md</code>, habla MCP
      y se configura por fichero. Por eso es nuestra base para el taller.
    </div>
  </div>
</div>

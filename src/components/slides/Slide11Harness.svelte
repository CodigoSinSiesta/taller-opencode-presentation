<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide slide-base" bind:this={slideElement}>
  <div class="slide-bg"></div>
  <div class="slide-content">
    <div class="eyebrow"><span class="eyebrow-dot"></span><span>El cambio de juego</span></div>
    <h2 class="slide-title">El repo como <span class="hl">prompt persistente</span></h2>
    <p class="lead">Si construyes agentes, ya eres harness engineer. Cada lint, test y spec es un prompt que se reactiva solo.</p>

    <div class="grid-2">
      <div class="feature-card">
        <span class="fc-title">"El código es barato"</span>
        <span class="fc-body">Implementar deja de ser lo escaso. Lo escaso es tu tiempo, tu atención y el contexto.</span>
      </div>
      <div class="feature-card accent">
        <span class="fc-title">OpenSpec encaja aquí</span>
        <span class="fc-body">La spec viva (changes archivados, AGENTS.md) es el harness que guía al próximo agente sin que tú repitas.</span>
      </div>
    </div>

    <div class="callout">
      "Cada vez que tienes que decirle al agente <em>'continúa'</em> es un fallo del harness."
      <span class="source-note"> — Ryan Lopopolo (OpenAI), Harness Engineering</span>
    </div>
    <p class="source-note">Puente a la charla "Harness Engineering" de la serie · openai.com/index/harness-engineering</p>
  </div>
</div>

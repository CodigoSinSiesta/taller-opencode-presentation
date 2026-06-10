<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide slide-base" bind:this={slideElement}>
  <div class="slide-bg"></div>
  <div class="slide-content">
    <div class="eyebrow"><span class="eyebrow-dot"></span><span>Para llevarte a casa</span></div>
    <h2 class="slide-title">5 ideas y a practicar</h2>

    <ul class="bullet-list" style="font-size:1.05rem;">
      <li><strong>OpenCode</strong>: agente open source, multi-modelo y sin lock-in.</li>
      <li><strong>AGENTS.md</strong> es el contrato: sin él, no hay resultados predecibles.</li>
      <li><strong>DeepSeek</strong> como motor: configurable por fichero, key en el entorno.</li>
      <li><strong>Spec-Driven con OpenSpec</strong>: acuerda el qué antes del cómo, y versiónalo.</li>
      <li><strong>Harness engineering</strong>: estructura el repo como prompt persistente.</li>
    </ul>

    <div class="pill-row">
      <span class="pill">opencode.ai</span>
      <span class="pill">openspec.dev</span>
      <span class="pill">platform.deepseek.com</span>
      <span class="pill on">github.com/CodigoSinSiesta</span>
    </div>

    <div class="callout">
      Repite el ciclo <code>propose → apply → verify → archive</code> sobre una feature pequeña de
      <strong>tu propio repo</strong>. Ahí es donde esto demuestra (o no) su valor. 🚀
    </div>
  </div>
</div>

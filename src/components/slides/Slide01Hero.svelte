<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide slide-base" bind:this={slideElement}>
  <div class="slide-bg"></div>

  <div class="slide-content hero">
    <div class="eyebrow">
      <span class="eyebrow-dot"></span>
      <span>Taller · Agentes de codificación · 2026</span>
    </div>

    <h1 class="big-title">
      Tu agente de código<br />
      con <span class="hl">OpenCode</span>
    </h1>

    <p class="lead">
      Open source, multi-modelo y terminal-first. Hoy lo montamos, lo conectamos a
      DeepSeek y construimos una feature dirigiendo specs con OpenSpec.
    </p>

    <div class="pill-row">
      <span class="pill">OpenCode</span>
      <span class="pill">DeepSeek</span>
      <span class="pill">AGENTS.md</span>
      <span class="pill">OpenSpec</span>
      <span class="pill on">Spec-Driven</span>
    </div>

    <div class="author-card card-glass">
      <img src="https://www.gravatar.com/avatar/8461e0b8674185c1df153079e820504b?s=120" alt="Alejandro de la Fuente" class="author-avatar" />
      <div>
        <p class="author-name">Alejandro de la Fuente</p>
        <p class="author-role">Technical Leader · NTT Data · GDNE</p>
      </div>
    </div>
  </div>

  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
</div>

<style>
  .hero { gap: var(--spacing-xl); }
  .big-title {
    font-family: var(--font-display);
    font-size: clamp(3rem, 8vw, 6.5rem);
    font-weight: 900;
    line-height: 1.0;
    color: var(--color-neutral-light);
    margin: 0;
  }
  .author-card { display: flex; align-items: center; gap: var(--spacing-lg); padding: var(--spacing-lg) var(--spacing-xl); }
  .author-avatar { width: 52px; height: 52px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
  .author-name { font-size: 1.1rem; font-weight: 700; margin: 0 0 2px; }
  .author-role { font-size: 0.9rem; color: var(--color-electric); font-family: var(--font-mono); margin: 0; opacity: 0.85; }
  .orb { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; z-index: 0; }
  .orb-1 { width: 480px; height: 480px; background: rgba(59,130,246,0.08); top: -120px; right: -100px; }
  .orb-2 { width: 280px; height: 280px; background: rgba(167,139,250,0.06); bottom: -60px; left: 60px; }
</style>

<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide slide-base" bind:this={slideElement}>
  <div class="slide-bg"></div>
  <div class="slide-content">
    <div class="eyebrow"><span class="eyebrow-dot"></span><span>El flujo del taller</span></div>
    <h2 class="slide-title">explorar → proponer → aplicar → verificar → archivar</h2>
    <p class="lead">El ciclo completo dentro de OpenCode, sobre el mini gestor de tareas del starter.</p>

    <div class="steps">
      <div class="step"><span class="num">1</span><div><strong>/opsx:propose</strong><p>Describe la feature (prioridad de tareas). Genera el change + sus specs.</p></div></div>
      <div class="step"><span class="num">2</span><div><strong>/opsx:apply</strong><p>El agente implementa las tareas y escribe los tests. Tú revisas el diff.</p></div></div>
      <div class="step"><span class="num">3</span><div><strong>/opsx:verify</strong><p>Contrasta la implementación con la spec. Si hay huecos, vuelve al paso 2.</p></div></div>
      <div class="step"><span class="num">4</span><div><strong>/opsx:archive</strong><p>Archiva el change y sincroniza las specs vigentes. Feature cerrada.</p></div></div>
    </div>
  </div>
</div>

<style>
  .steps { display: flex; flex-direction: column; gap: var(--spacing-md); }
  .step {
    display: flex; gap: var(--spacing-lg); align-items: flex-start;
    background: rgba(30, 58, 138, 0.15);
    border: 1px solid rgba(96, 165, 250, 0.2);
    border-left: 3px solid var(--color-accent-bright);
    border-radius: var(--radius-md);
    padding: var(--spacing-md) var(--spacing-lg);
  }
  .step .num {
    flex-shrink: 0; width: 38px; height: 38px; border-radius: 50%;
    background: rgba(59, 130, 246, 0.25); border: 1px solid var(--color-accent-bright);
    display: flex; align-items: center; justify-content: center;
    font-family: var(--font-mono); font-weight: 700; color: var(--color-neutral-light);
  }
  .step strong { font-family: var(--font-mono); color: var(--color-electric); }
  .step p { margin: 2px 0 0; opacity: 0.82; font-size: 0.95rem; }
</style>

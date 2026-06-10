<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide slide-base" bind:this={slideElement}>
  <div class="slide-bg"></div>
  <div class="slide-content">
    <div class="eyebrow"><span class="eyebrow-dot"></span><span>Contexto y subagentes</span></div>
    <h2 class="slide-title">El contexto es el recurso escaso</h2>
    <p class="lead">La ventana de contexto es finita. Gestionarla bien es lo que separa un agente útil de uno que "olvida".</p>

    <div class="grid-2">
      <div class="feature-card">
        <span class="fc-title">Capas del contexto</span>
        <span class="fc-body">
          AGENTS.md (base) · historial · ficheros leídos · resultados de tools. Todo suma y compite por el mismo presupuesto.
        </span>
      </div>
      <div class="feature-card accent">
        <span class="fc-title">Subagentes</span>
        <span class="fc-body">
          Delega tareas acotadas (tests, revisión, refactor) a un contexto separado y enfocado. El agente principal coordina.
        </span>
      </div>
    </div>

    <ul class="bullet-list">
      <li>Da el contexto <strong>por adelantado</strong> en vez de dejar que el agente lo adivine.</li>
      <li>Tareas largas → trocéalas; el contexto se degrada con el tamaño.</li>
      <li>Un subagente por responsabilidad evita que un único hilo se sature.</li>
    </ul>
  </div>
</div>

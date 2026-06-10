<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide slide-base" bind:this={slideElement}>
  <div class="slide-bg"></div>
  <div class="slide-content">
    <div class="eyebrow"><span class="eyebrow-dot"></span><span>Buenas prácticas</span></div>
    <h2 class="slide-title">Alucinaciones: se previenen, no se aceptan</h2>
    <p class="lead">El agente genera texto probable, no verdad verificada. ~30% del código generado puede traer errores sutiles.</p>

    <div class="grid-2">
      <div class="feature-card">
        <span class="fc-title">✅ Haz</span>
        <span class="fc-body">
          <ul class="bullet-list">
            <li>Da contexto explícito (AGENTS.md).</li>
            <li>Pide criterios de éxito claros.</li>
            <li>Ejecuta los tests tú mismo.</li>
            <li>Itera en pasos pequeños.</li>
          </ul>
        </span>
      </div>
      <div class="feature-card">
        <span class="fc-title">⛔ Evita</span>
        <span class="fc-body">
          <ul class="bullet-list">
            <li>Copiar APIs/paquetes sin verificar.</li>
            <li>Aprobar el plan a ciegas.</li>
            <li>Sobrecargar una sola tarea.</li>
            <li>Usar el agente como sustituto de entender.</li>
          </ul>
        </span>
      </div>
    </div>

    <div class="callout">
      <strong>Lee el código del diff, no solo el plan.</strong> 1.000 líneas de plan ≈ 1.000 de código:
      no hay atajo real (Horthy, 2026). El código no es tuyo hasta que lo entiendes.
    </div>
  </div>
</div>

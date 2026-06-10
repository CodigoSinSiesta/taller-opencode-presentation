<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide slide-base" bind:this={slideElement}>
  <div class="slide-bg"></div>
  <div class="slide-content">
    <div class="eyebrow"><span class="eyebrow-dot"></span><span>Cómo funciona por dentro</span></div>
    <h2 class="slide-title">El bucle del agente</h2>
    <p class="lead">Un chatbot <em>habla</em>; un agente <em>actúa</em>. OpenCode cierra este ciclo en tu terminal, sobre tu repo.</p>

    <div class="grid-2">
      <div class="feature-card"><span class="fc-title">1 · Recibe</span><span class="fc-body">Tu instrucción + el contexto del repo (AGENTS.md, ficheros leídos).</span></div>
      <div class="feature-card"><span class="fc-title">2 · Razona</span><span class="fc-body">El LLM (DeepSeek) planifica y decide qué herramienta usar.</span></div>
      <div class="feature-card"><span class="fc-title">3 · Ejecuta</span><span class="fc-body">Lee/escribe ficheros, corre shell, tests, git… vía sus tools y MCP.</span></div>
      <div class="feature-card"><span class="fc-title">4 · Itera</span><span class="fc-body">Observa el resultado y repite hasta cumplir el criterio de éxito.</span></div>
    </div>

    <ul class="bullet-list">
      <li><strong>Sesiones y modos</strong>: builds, planes y subagentes para tareas acotadas.</li>
      <li><strong>Providers</strong>: el mismo bucle con Claude, DeepSeek o un modelo local.</li>
      <li><strong>MCP</strong>: extiende sus herramientas (BBDD, APIs, buscadores) sin tocar el core.</li>
    </ul>
  </div>
</div>

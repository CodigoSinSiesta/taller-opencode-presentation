<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide slide-base" bind:this={slideElement}>
  <div class="slide-bg"></div>
  <div class="slide-content">
    <div class="eyebrow"><span class="eyebrow-dot"></span><span>Spec-Driven Development</span></div>
    <h2 class="slide-title"><span class="hl">OpenSpec</span>: acordar el qué antes del cómo</h2>
    <p class="lead">Una capa de specs ligera. En vez de <em>vibe coding</em>, el agente y tú acordáis la spec, y el código sigue.</p>

    <div class="grid-2" style="align-items:start;">
      <pre class="code-block"><span class="c"># estructura</span>
openspec/
  project.md   <span class="c"># contexto</span>
  specs/       <span class="c"># specs vigentes</span>
  changes/     <span class="c"># propuestas en curso</span>
    archive/   <span class="c"># completadas</span></pre>

      <ul class="bullet-list">
        <li>El <em>change</em> queda <strong>versionado</strong> en el repo: revisable como cualquier PR.</li>
        <li>La spec viva es el contexto que hereda el próximo agente.</li>
        <li>Funciona dentro de OpenCode vía comandos <code>/opsx:*</code>.</li>
        <li>Se instala con <code>openspec init --tools opencode</code> (ya hecho en el starter).</li>
      </ul>
    </div>

    <p class="source-note">Fission-AI/OpenSpec · openspec.dev</p>
  </div>
</div>

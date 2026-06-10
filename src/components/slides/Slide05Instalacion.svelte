<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide slide-base" bind:this={slideElement}>
  <div class="slide-bg"></div>
  <div class="slide-content">
    <div class="eyebrow"><span class="eyebrow-dot"></span><span>Instalación</span></div>
    <h2 class="slide-title">Arrancar OpenCode en 30 segundos</h2>

    <div class="grid-2">
      <div style="display:flex; flex-direction:column; gap:1rem;">
        <pre class="code-block"><span class="c"># 1. Instala el CLI</span>
<span class="k">curl</span> -fsSL https://opencode.ai/install | bash

<span class="c"># 2. Lánzalo en tu repo</span>
<span class="k">opencode</span>

<span class="c"># 3. Conecta un proveedor</span>
<span class="k">/connect</span>  <span class="c"># → deepseek</span></pre>
        <p class="source-note">opencode.ai/docs · sst/opencode</p>
      </div>

      <ul class="bullet-list">
        <li>En el <strong>devcontainer</strong> del taller ya viene instalado: solo abres y listo.</li>
        <li>Sin contenedor, el <strong>setup.sh</strong> del starter lo instala por ti.</li>
        <li>El modelo se fija en <code>opencode.json</code> (lo vemos en la siguiente slide).</li>
        <li>La key vive en <code>DEEPSEEK_API_KEY</code> (env o <code>.env</code>), nunca en el repo.</li>
      </ul>
    </div>

    <div class="callout">Objetivo de hoy: que <code>opencode</code> arranque contra DeepSeek y veas el modelo activo abajo a la derecha.</div>
  </div>
</div>

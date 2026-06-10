<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  import { STARTER_REPO } from '@/config/workshop';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide slide-base" bind:this={slideElement}>
  <div class="slide-bg"></div>
  <div class="slide-content">
    <div class="eyebrow"><span class="eyebrow-dot"></span><span>Manos a la obra</span></div>
    <h2 class="slide-title">Monta el entorno y empezamos</h2>
    <p class="lead">Elige una vía. En 3 minutos tendrás OpenCode hablando con DeepSeek sobre el starter.</p>

    <div class="grid-3">
      <div class="feature-card accent">
        <span class="fc-title">A · Codespaces</span>
        <span class="fc-body">Abre el repo → Create codespace. Todo se instala solo. Pega la key y <code>opencode</code>.</span>
      </div>
      <div class="feature-card">
        <span class="fc-title">B · Dev Container</span>
        <span class="fc-body">VS Code → Reopen in Container. El <code>postCreate</code> corre <code>setup.sh</code>.</span>
      </div>
      <div class="feature-card">
        <span class="fc-title">C · Script</span>
        <span class="fc-body">Sin contenedor: <code>./scripts/setup.sh</code> (acepta una ruta a montar).</span>
      </div>
    </div>

    <pre class="code-block"><span class="c"># Vía C — máquina pelada, indícale la ruta</span>
<span class="k">git clone</span> {STARTER_REPO}
<span class="k">cd</span> taller-opencode-starter
<span class="k">./scripts/setup.sh</span> .            <span class="c"># instala OpenCode + OpenSpec + deps</span>
<span class="k">export</span> DEEPSEEK_API_KEY=<span class="s">"sk-…"</span>  <span class="c"># la key de la slide 6</span>
<span class="k">opencode</span></pre>

    <div class="callout">Abre <code>ejercicios/01-setup.md</code> y empezamos por el Paso 0.</div>
  </div>
</div>

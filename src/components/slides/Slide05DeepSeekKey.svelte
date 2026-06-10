<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  import CopyKey from '@/components/CopyKey.svelte';
  import { DEEPSEEK_MODEL } from '@/config/workshop';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide slide-base" bind:this={slideElement}>
  <div class="slide-bg"></div>
  <div class="slide-content">
    <div class="eyebrow"><span class="eyebrow-dot"></span><span>Conecta DeepSeek</span></div>
    <h2 class="slide-title">El motor de hoy: <span class="hl">DeepSeek</span></h2>
    <p class="lead">Esta es la API key de la sesión. Cópiala con el botón y expórtala en tu terminal.</p>

    <div class="grid-2" style="align-items:start;">
      <CopyKey client:load />

      <div style="display:flex; flex-direction:column; gap:1rem;">
        <pre class="code-block"><span class="c"># Exporta la key copiada</span>
<span class="k">export</span> DEEPSEEK_API_KEY=<span class="s">"sk-…"</span>

<span class="c"># opencode.json (ya en el starter)</span>
{'{'}
  <span class="s">"model"</span>: <span class="s">"{DEEPSEEK_MODEL}"</span>
{'}'}</pre>
        <div class="callout" style="font-size:0.9rem;">
          🔒 Key <strong>efímera</strong>: válida solo para el taller. No la subas a git; se rota al terminar.
        </div>
      </div>
    </div>
  </div>
</div>

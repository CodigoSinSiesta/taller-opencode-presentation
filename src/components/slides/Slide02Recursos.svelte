<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  import { STARTER_REPO, PRESENTATION_URL } from '@/config/workshop';
  let slideElement: HTMLElement;
  // BASE_URL puede venir con o sin barra final segun astro.config; normalizamos.
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide slide-base" bind:this={slideElement}>
  <div class="slide-bg"></div>
  <div class="slide-content">
    <div class="eyebrow"><span class="eyebrow-dot"></span><span>Recursos · escanea y arranca</span></div>
    <h2 class="slide-title">Clónalo ahora, que el contenedor tarda</h2>
    <p class="lead">Mientras presentamos, abre el repo y lanza el entorno. Para cuando lleguemos a "manos a la obra" lo tendrás listo.</p>

    <div class="grid-2">
      <div class="feature-card accent qr-card">
        <span class="fc-title">Taller · starter</span>
        <div class="qr-panel"><img src={`${base}/qr/starter.svg`} alt="QR al repositorio del taller" /></div>
        <a class="qr-url" href={STARTER_REPO} target="_blank" rel="noreferrer">github.com/CodigoSinSiesta/taller-opencode-starter</a>
        <span class="fc-body">Ábrelo → <code>Create codespace</code> y deja que construya.</span>
      </div>
      <div class="feature-card qr-card">
        <span class="fc-title">Esta presentación</span>
        <div class="qr-panel"><img src={`${base}/qr/presentation.svg`} alt="QR a la presentación" /></div>
        <a class="qr-url" href={PRESENTATION_URL} target="_blank" rel="noreferrer">codigosinsiesta.github.io/taller-opencode-presentation</a>
        <span class="fc-body">Sigue las slides desde tu móvil o portátil.</span>
      </div>
    </div>

    <div class="callout">El Codespace tarda <strong>~3-5 min</strong> en construirse la primera vez. Escanéalo ya y sigue la charla mientras tanto.</div>
  </div>
</div>

<style>
  .qr-card { align-items: center; text-align: center; gap: var(--spacing-md); }
  .qr-panel {
    background: #fff;
    padding: var(--spacing-md);
    border-radius: var(--radius-md);
    width: min(220px, 60%);
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .qr-panel img { width: 100%; height: 100%; display: block; image-rendering: pixelated; }
  .qr-url {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--color-electric);
    word-break: break-all;
    text-decoration: none;
  }
  .qr-url:hover { text-decoration: underline; }
</style>

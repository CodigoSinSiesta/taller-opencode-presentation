<script lang="ts">
  import { DEEPSEEK_KEY, KEY_READY } from '@/config/workshop';

  let copied = $state(false);
  let revealed = $state(false);

  function masked(key: string): string {
    if (!KEY_READY) return key;
    if (key.length <= 10) return key;
    return `${key.slice(0, 6)}${'•'.repeat(Math.max(8, key.length - 10))}${key.slice(-4)}`;
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(DEEPSEEK_KEY);
      copied = true;
      setTimeout(() => (copied = false), 2000);
    } catch {
      // Fallback para navegadores sin permiso de clipboard
      const ta = document.createElement('textarea');
      ta.value = DEEPSEEK_KEY;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      copied = true;
      setTimeout(() => (copied = false), 2000);
    }
  }
</script>

<div class="copy-key card-glass">
  <div class="key-row">
    <code class="key-value">{revealed ? DEEPSEEK_KEY : masked(DEEPSEEK_KEY)}</code>
    {#if KEY_READY}
      <button class="reveal-btn" title="Mostrar / ocultar" onclick={() => (revealed = !revealed)}>
        {revealed ? '🙈' : '👁️'}
      </button>
    {/if}
  </div>

  <button class="copy-btn" class:copied onclick={copy} disabled={!KEY_READY}>
    {#if !KEY_READY}
      ⏳ La key se publicará al empezar el taller
    {:else if copied}
      ✅ ¡Copiada!
    {:else}
      📋 Copiar API key
    {/if}
  </button>

  <p class="hint">
    Pégala con <code>export DEEPSEEK_API_KEY="…"</code> o en tu <code>.env</code>.
  </p>
</div>

<style>
  .copy-key {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    padding: var(--spacing-xl);
    max-width: 560px;
    width: 100%;
  }

  .key-row {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    background: rgba(10, 22, 40, 0.6);
    border: 1px solid rgba(96, 165, 250, 0.25);
    border-radius: var(--radius-md);
    padding: var(--spacing-md) var(--spacing-lg);
  }

  .key-value {
    font-family: var(--font-mono);
    font-size: 1rem;
    color: var(--color-electric);
    word-break: break-all;
    flex: 1;
  }

  .reveal-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    line-height: 1;
    opacity: 0.8;
  }
  .reveal-btn:hover { opacity: 1; }

  .copy-btn {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 1.05rem;
    padding: var(--spacing-md) var(--spacing-xl);
    border-radius: var(--radius-md);
    border: 2px solid var(--color-accent-bright);
    background: rgba(59, 130, 246, 0.2);
    color: var(--color-neutral-light);
    cursor: pointer;
    transition: all var(--transition-base);
    min-height: 52px;
  }

  .copy-btn:hover:not(:disabled) {
    background: rgba(59, 130, 246, 0.4);
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
    transform: translateY(-2px);
  }

  .copy-btn.copied {
    background: rgba(34, 197, 94, 0.25);
    border-color: #22c55e;
  }

  .copy-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .hint {
    font-size: 0.85rem;
    color: var(--color-neutral-light);
    opacity: 0.7;
    margin: 0;
  }
  .hint code {
    font-family: var(--font-mono);
    color: var(--color-electric);
  }
</style>

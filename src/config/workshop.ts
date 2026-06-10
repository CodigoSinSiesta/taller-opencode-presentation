/**
 * Configuración del taller que cambia entre ediciones.
 *
 * ⚠️ LA API KEY DE DEEPSEEK SE PEGA AQUÍ JUSTO ANTES DEL TALLER.
 *    - Sustituye el placeholder por la key efímera repartida para la sesión.
 *    - NO hagas commit de la key real (déjala como placeholder en git).
 *    - Rota/anula la key en https://platform.deepseek.com/api_keys al terminar.
 *
 * La slide 05 ("Conecta DeepSeek") muestra esta key con un botón de copiar.
 */
export const DEEPSEEK_KEY = "__PEGA_LA_KEY_DE_DEEPSEEK_ANTES_DEL_TALLER__";

/** Modelo por defecto que usarán los asistentes en OpenCode. */
export const DEEPSEEK_MODEL = "deepseek/deepseek-chat";

/** Repos del taller (para la slide de "manos a la obra"). */
export const STARTER_REPO = "https://github.com/CodigoSinSiesta/taller-opencode-starter";

/** ¿La key ya está pegada? (controla el aviso en la slide 05). */
export const KEY_READY = !DEEPSEEK_KEY.startsWith("__PEGA");

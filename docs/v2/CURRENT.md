# CURRENT

Estado: `ACCEPTED_LOCKED`

## Tarea autorizada

FASE 5.5 — Accesibilidad.

## Resultado observable

La foundation visual de Valhalla queda usable mediante teclado, con foco perceptible, targets táctiles adecuados, semántica nativa correcta y contraste suficiente, sin depender únicamente del color ni degradar la identidad `Linear Calm`.

## Baseline preservada

Se conserva:

- FASE 5.1 — Identidad: `ACCEPTED_LOCKED`;
- FASE 5.2 — Sistema visual: `ACCEPTED_LOCKED`;
- FASE 5.3 — Componentes: `ACCEPTED_LOCKED`;
- FASE 5.4 — Motion: `ACCEPTED_LOCKED`;
- `Linear Calm`;
- responsive foundation;
- i18n ES / EN;
- reduced-motion;
- arquitectura actual de componentes.

No rediseñar la interfaz.

## Principios

Priorizar HTML y comportamiento nativo antes que ARIA adicional.

No añadir ARIA cuando el elemento HTML ya comunique correctamente su función.

La accesibilidad debe mantenerse aunque:

- no exista hover;
- el usuario navegue solo con teclado;
- reduced-motion esté activo;
- no pueda distinguirse un estado únicamente por color.

## Contraste

Realizar una comprobación cuantitativa sobre los valores reales de `Linear Calm`.

Comprobar como mínimo:

### Texto

- foreground sobre background;
- foreground sobre surface;
- muted sobre background;
- muted sobre surface;
- primary sobre background/surface cuando se utilice como texto;
- primary-foreground sobre primary;
- success sobre surface;
- warning sobre surface;
- danger sobre surface.

Objetivo para texto normal:

- WCAG AA >= 4.5:1.

### Controles y foco

Comprobar los contrastes relevantes de:

- borde de TextInput;
- borde de Button secondary;
- outline de foco;
- estados de error;
- cualquier límite visual necesario para identificar un control.

Cuando una frontera visual sea necesaria para reconocer un componente:

- objetivo mínimo de contraste no textual: 3:1 respecto al color adyacente.

No modificar la paleta por intuición.

Si algún caso incumple realmente el criterio, aplicar la corrección mínima y semánticamente coherente.

Un cambio de token de `Linear Calm` solo está autorizado si el análisis cuantitativo demuestra que es necesario para accesibilidad.

Documentar el motivo si ocurre.

## Foco visible

Todos los elementos interactivos de la foundation deben mostrar foco perceptible mediante teclado.

Revisar especialmente:

- Button;
- TextInput;
- marca/enlace Valhalla;
- navegación Home / Inicio;
- LanguageSwitcher.

`AppShell` y `LanguageSwitcher` deben recibir tratamiento `focus-visible` coherente con Button y TextInput.

No eliminar el outline del navegador sin proporcionar uno equivalente o superior.

El foco debe seguir siendo visible con reduced-motion.

## Targets táctiles

Mejorar la foundation para evitar targets innecesariamente pequeños.

Como dirección de producto:

- controles principales y campos deben tender a un área de interacción de aproximadamente 44 CSS px de alto;
- los controles compactos de navegación deben conservar una superficie táctil suficientemente cómoda;
- ampliar el área clicable mediante padding/min-size, no mediante texto artificialmente grande.

Revisar:

- Button;
- TextInput;
- enlace de marca Valhalla;
- Home / Inicio;
- ES;
- EN.

No romper el header a 360 CSS px.

## TextInput

Preservar:

- label visible;
- asociación `for` / `id`;
- `required` nativo;
- `disabled` nativo;
- `aria-invalid`;
- `aria-describedby`;
- ayuda y error asociados.

El asterisco visual de required puede seguir con `aria-hidden` porque el atributo HTML `required` comunica el estado semánticamente.

No sustituir labels por placeholders.

## Button

Preservar:

- `<button>` para acciones;
- `<a>` para navegación;
- disabled únicamente en botones;
- foco visible;
- motion/reduced-motion aceptados.

Revisar target táctil sin introducir tamaños múltiples ni nueva API innecesaria.

## AppShell

Revisar:

- foco visible de los enlaces;
- orden natural de tabulación;
- tamaño de target;
- `aria-current` de la ruta actual.

No crear navegación funcional nueva.

No añadir tabindex manual salvo necesidad demostrable.

## LanguageSwitcher

Preservar:

- navegación nativa mediante enlaces;
- label accesible del conjunto;
- URLs ES / EN.

Corregir la semántica de estado actual si `aria-current="page"` no representa correctamente el significado de la selección de idioma.

Preferir un valor ARIA válido que indique el elemento actual del conjunto sin afirmar incorrectamente que el enlace siempre representa la página actual.

Añadir metadatos de idioma del enlace únicamente si aportan semántica real.

Revisar además:

- foco visible;
- targets táctiles;
- comportamiento a 360 CSS px.

## FeedbackState

Preservar:

- error con `role="alert"`;
- loading con `aria-live="polite"`;
- loading con `aria-busy`;
- contenido comprensible sin depender exclusivamente del color.

No añadir anuncios ARIA adicionales sin necesidad.

## Estructura de documento

Preservar:

- `html lang`;
- un área `<main>`;
- headings comprensibles;
- landmarks de navegación etiquetados.

No añadir skip-link mientras la navegación siga siendo mínima salvo que la prueba de teclado demuestre una necesidad real.

## Teclado

Validar manualmente como mínimo en `/`:

- Tab desde el inicio;
- marca Valhalla;
- Home / Inicio;
- ES;
- EN;
- Button primary;
- Button secondary;
- Button disabled debe omitirse del orden de foco;
- TextInput normal;
- TextInput help;
- TextInput error.

Comprobar:

- orden lógico;
- foco siempre visible;
- activación mediante teclado de enlaces y botones;
- ausencia de trampas de foco.

No introducir JavaScript para gestionar foco.

## Reduced motion

Preservar íntegramente FASE 5.4.

La ausencia de transición con `prefers-reduced-motion: reduce` no puede eliminar:

- foco;
- selección;
- error;
- hover;
- estado actual;
- cualquier otro feedback funcional.

## Documentación

Consolidar en `DESIGN.md` únicamente las reglas reutilizables que resulten confirmadas por esta fase:

- contraste;
- foco;
- teclado;
- targets;
- labels/semántica;
- reduced-motion.

Mantener la sección concisa.

## Scope excluido

- nuevas dependencias;
- librerías de auditoría añadidas al proyecto;
- React;
- JavaScript cliente;
- focus traps;
- modales;
- nuevos controles;
- nuevas rutas;
- funcionalidades de producto;
- cambios de branding;
- rediseño de paleta no justificado por contraste;
- Production;
- Cloudflare.

## Criterio de aceptación

- contraste textual relevante cumple WCAG AA;
- límites visuales necesarios de controles cumplen contraste no textual adecuado;
- todos los controles interactivos visibles disponen de foco perceptible;
- navegación mediante teclado tiene orden lógico;
- Button disabled no entra en la secuencia de foco;
- labels y errores de TextInput mantienen asociaciones accesibles;
- estado actual del LanguageSwitcher utiliza semántica correcta;
- targets táctiles son adecuados sin romper 360 CSS px;
- los estados no dependen únicamente del color;
- reduced-motion conserva feedback funcional;
- `/` y `/en/` mantienen paridad;
- no hay overflow horizontal;
- no se añaden dependencias;
- `npm run check` finaliza con 0 errores;
- `npm run build` finaliza correctamente;
- `npm audit --omit=dev` mantiene 0 vulnerabilidades;
- `git diff --check` está limpio.

## Validación visual y manual requerida

Revisar:

- 360 CSS px;
- desktop;
- navegación por Tab;
- foco visible;
- targets;
- estado normal y error de TextInput;
- primary / secondary / disabled;
- selector ES / EN;
- reduced-motion.

## Estado previo

- FASE 4 — Fundación técnica: `ACCEPTED_LOCKED`.
- FASE 5.1 — Identidad: `ACCEPTED_LOCKED`.
- FASE 5.2 — Sistema visual: `ACCEPTED_LOCKED`.
- FASE 5.3 — Componentes: `ACCEPTED_LOCKED`.
- FASE 5.4 — Motion: `ACCEPTED_LOCKED`.

## Responsable principal

Gemini implementa y documenta las correcciones autorizadas.

ChatGPT revisa contraste, semántica, foco, teclado, targets y límites de scope.

Oskar realiza la validación visual y manual.

## Después de aceptar

FASE 5 — Identidad visual y UX base queda completa.

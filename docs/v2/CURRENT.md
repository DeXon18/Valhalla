# CURRENT

Estado: `AWAITING_OWNER_REVIEW`

## Tarea autorizada

FASE 5.4 — Motion.

## Resultado observable

Los controles interactivos de Valhalla proporcionan feedback visual breve y funcional durante hover, foco, selección y presión, sin introducir animación ornamental y respetando `prefers-reduced-motion`.

## Baseline preservada

Se conserva:

- FASE 5.1 — Identidad: `ACCEPTED_LOCKED`;
- FASE 5.2 — Sistema visual: `ACCEPTED_LOCKED`;
- FASE 5.3 — Componentes: `ACCEPTED_LOCKED`;
- `Linear Calm`;
- geometría y jerarquía actuales;
- responsive foundation;
- semántica y accesibilidad foundation existentes;
- comportamiento funcional de Button, TextInput, AppShell y LanguageSwitcher.

Motion no debe alterar layout, navegación, contenido ni funcionalidad.

## Principios

El motion de Valhalla debe ser:

- breve;
- funcional;
- discreto;
- predecible;
- subordinado a claridad y usabilidad.

El movimiento debe comunicar principalmente:

- interactividad;
- cambio de estado;
- foco;
- selección;
- presión de una acción.

No debe utilizarse para decorar una pantalla estática.

## Transiciones

Los controles interactivos pueden utilizar transiciones breves, aproximadamente en el rango de `120–180ms`.

Usar una duración consistente cuando no exista una razón específica para otra.

Las transiciones deben limitarse a propiedades justificadas, como:

- color;
- background-color;
- border-color;
- opacity;
- transform únicamente cuando comunique interacción.

Evitar `transition-all`.

No animar propiedades de layout como:

- width;
- height;
- padding;
- margin;
- position;

salvo necesidad futura demostrada.

## Button

`Button` debe proporcionar feedback visual para estados interactivos.

Mantener:

- primary;
- secondary;
- disabled;
- button;
- anchor.

Añadir:

- transición breve de las propiedades visuales actualmente utilizadas;
- microinteracción de presión muy sutil cuando el control sea interactivo.

La microinteracción:

- no debe producir desplazamientos perceptibles del layout;
- no debe aplicarse a botones disabled;
- debe desaparecer con `prefers-reduced-motion`.

No añadir:

- ripple;
- bounce;
- elastic easing;
- glow;
- animaciones decorativas;
- loading animation.

## TextInput

`TextInput` puede transicionar brevemente:

- borde;
- color relacionado con foco/error cuando corresponda.

No animar:

- tamaño;
- label;
- placeholder;
- mensajes de ayuda/error mediante entrada/salida automática.

Mantener foco claramente visible incluso sin motion.

## AppShell y LanguageSwitcher

Los enlaces interactivos actuales pueden transicionar brevemente sus cambios de color o selección.

No introducir:

- navegación animada;
- page transitions;
- sliding navigation;
- indicadores móviles animados;
- JavaScript cliente.

## Card y FeedbackState

`Card` no requiere motion propio.

`FeedbackState` no requiere animación propia en esta fase.

La variante loading puede permanecer estática.

No añadir spinner únicamente para satisfacer FASE 5.4.

Las acciones de `FeedbackState` heredan el comportamiento de `Button`.

## Reduced motion

Todo motion no esencial introducido por esta fase debe respetar:

`prefers-reduced-motion: reduce`.

Cuando el usuario solicita reducción de movimiento:

- eliminar transiciones no esenciales;
- eliminar transforms de presión;
- conservar inmediatamente los estados visuales finales;
- conservar foco, hover, selección, error y demás información necesaria.

Reduced motion no significa eliminar feedback funcional.

## Documentación

Actualizar `DESIGN.md` únicamente para consolidar reglas reutilizables de motion.

Debe quedar explícito:

- motion breve y funcional;
- rango temporal orientativo;
- evitar `transition-all`;
- movimiento reservado a cambios de estado/interacción;
- ausencia de animación ambiental o decorativa;
- reduced-motion obligatorio.

No convertir `DESIGN.md` en una especificación extensa de animación.

## Scope técnico esperado

Revisar únicamente cuando sea necesario:

- `src/components/Button.astro`;
- `src/components/TextInput.astro`;
- `src/components/AppShell.astro`;
- `src/components/LanguageSwitcher.astro`;
- `DESIGN.md`.

No modificar `Card` o `FeedbackState` salvo contradicción demostrable.

## Scope excluido

- nuevas dependencias;
- React;
- librerías de motion;
- View Transitions;
- page transitions;
- animaciones de entrada de páginas;
- scroll animations;
- parallax;
- loaders animados;
- skeleton animations;
- modal transitions;
- toast animations;
- charts;
- cambios de paleta;
- cambios de tipografía;
- cambios de spacing;
- nuevas rutas;
- funcionalidades de producto;
- Production;
- Cloudflare.

## Criterio de aceptación

- controles interactivos dejan de depender de `transition-none` como comportamiento general;
- las transiciones son breves y limitadas a propiedades justificadas;
- Button dispone de una microinteracción de presión discreta;
- disabled no presenta motion interactivo;
- TextInput conserva foco y error claros;
- AppShell y LanguageSwitcher mantienen comportamiento actual;
- `prefers-reduced-motion` elimina motion no esencial;
- no se usa `transition-all`;
- no se añaden dependencias;
- no hay cambios de layout;
- `/` y `/en/` siguen siendo funcionalmente equivalentes;
- no aparece overflow horizontal;
- `npm run check` finaliza con 0 errores;
- `npm run build` finaliza correctamente;
- `npm audit --omit=dev` mantiene 0 vulnerabilidades;
- `git diff --check` está limpio.

## Validación visual requerida

Revisar como mínimo:

- Button primary;
- Button secondary;
- Button disabled;
- TextInput;
- LanguageSwitcher;
- navegación del App Shell.

Comprobar tanto:

- comportamiento normal;
- `prefers-reduced-motion: reduce`.

La validación visual debe confirmar que el movimiento se percibe como feedback y no como animación decorativa.

## Estado previo

- FASE 4 — Fundación técnica: `ACCEPTED_LOCKED`.
- FASE 5.1 — Identidad: `ACCEPTED_LOCKED`.
- FASE 5.2 — Sistema visual: `ACCEPTED_LOCKED`.
- FASE 5.3 — Componentes: `ACCEPTED_LOCKED`.

## Responsable principal

Gemini implementa el motion autorizado.

ChatGPT revisa alcance, comportamiento y reduced-motion.

Oskar realiza la aceptación visual.

## Después de aceptar

Siguiente candidato: FASE 5.5 — Accesibilidad.

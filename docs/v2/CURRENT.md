# CURRENT

Estado: `AWAITING_OWNER_REVIEW`

## Tarea autorizada

FASE 5.3 — Componentes.

## Resultado observable

Valhalla dispone de una foundation mínima de componentes visuales reutilizables y coherentes con `Linear Calm`, visible en la muestra técnica actual y preparada para ser utilizada posteriormente por las pantallas reales del producto.

La fase debe reducir duplicación visual existente sin crear una librería de componentes generalista ni anticipar necesidades de producto todavía inexistentes.

## Baseline preservada

Se conserva:

- FASE 5.1 — Identidad: `ACCEPTED_LOCKED`;
- FASE 5.2 — Sistema visual: `ACCEPTED_LOCKED`;
- `Linear Calm`;
- tokens cromáticos existentes;
- tipografía de sistema;
- geometría simple y radios contenidos;
- superficies predominantemente planas;
- profundidad mediante luminosidad, bordes y espacio;
- responsive foundation;
- App Shell existente;
- i18n ES / EN;
- comportamiento de routing aceptado;
- `FeedbackState` como foundation de loading / empty / error;
- `LanguageSwitcher` como selector de idioma.

No rediseñar esas decisiones.

## Principio de implementación

Crear componentes solo cuando exista una necesidad real observable.

En esta fase se justifican:

- `Button`;
- `Card`;
- `TextInput`.

No crear una librería completa ni componentes genéricos para necesidades futuras hipotéticas.

## Button

Crear un componente reutilizable equivalente a:

- `src/components/Button.astro`.

Debe cubrir como mínimo:

- variante primaria;
- variante secundaria;
- uso como `<button>`;
- uso como enlace cuando exista `href`;
- estado `disabled` únicamente cuando semánticamente corresponda a un botón;
- foco visible;
- hover existente;
- contenido mediante slot;
- estilos basados exclusivamente en tokens semánticos existentes.

La API debe ser pequeña.

No introducir variantes únicamente porque podrían ser útiles en el futuro.

No crear:

- icon buttons;
- loading buttons;
- split buttons;
- tamaños múltiples salvo necesidad demostrada;
- componentes React;
- JavaScript cliente.

Cuando sea razonable, reutilizar `Button` en acciones foundation ya existentes que actualmente duplican el mismo patrón visual, especialmente:

- `FeedbackState`;
- 404.

No forzar la reutilización si empeora la semántica.

## Card

Crear un componente reutilizable equivalente a:

- `src/components/Card.astro`.

Debe representar el contenedor visual básico de Valhalla:

- superficie;
- borde;
- radio contenido;
- padding;
- slot de contenido.

Puede permitir `surface` / `raised` únicamente si esa distinción resulta útil para los usos actuales.

No añadir:

- shadows por defecto;
- headers complejos;
- footers;
- actions API;
- layouts internos;
- variantes temáticas;
- geometría ornamental.

La semántica HTML del contenido debe seguir perteneciendo al consumidor cuando sea necesario.

## TextInput

Crear una primitive de campo de texto equivalente a:

- `src/components/TextInput.astro`.

Debe cubrir como mínimo:

- `id`;
- `name`;
- label visible;
- tipo de input razonablemente necesario;
- placeholder opcional;
- required;
- disabled;
- texto de ayuda opcional;
- mensaje de error opcional;
- foco visible;
- estado de error mediante token `danger`;
- relación accesible entre input, ayuda y error;
- `aria-invalid` cuando exista error.

La label no puede sustituirse únicamente por placeholder.

No crear:

- validación JavaScript;
- formularios funcionales;
- lógica de negocio;
- integración con base de datos;
- floating labels;
- máscaras;
- autocomplete avanzado;
- select;
- textarea;
- checkbox;
- radio;
- date picker.

Esos controles se crearán cuando exista una necesidad funcional real.

## Navegación

La foundation actual ya dispone de:

- `AppShell`;
- navegación Home / Inicio;
- `LanguageSwitcher`;
- estado actual mediante `aria-current`.

No crear destinos ni navegación de producto inexistentes.

No crear un componente `NavLink` genérico únicamente para abstraer un único enlace actual.

Solo ajustar navegación si existe una inconsistencia visual objetiva con el sistema aceptado.

## Feedback

`FeedbackState` sigue siendo la foundation para:

- loading;
- empty;
- error.

Preservar:

- semántica accesible;
- `aria-live`;
- `aria-busy`;
- `role="alert"` cuando corresponda;
- acción opcional.

Puede reutilizar `Button` para su acción si ello reduce duplicación sin alterar comportamiento.

No crear sistemas de toast, snackbar, modal o notificaciones globales.

## Muestra visual

Actualizar `UiFoundationDemo.astro` para que la muestra técnica consuma los componentes foundation reales en vez de duplicar sus estilos.

La muestra debe permitir inspeccionar visualmente, como mínimo:

- Button primary;
- Button secondary;
- Button disabled;
- Card;
- TextInput normal;
- TextInput con ayuda;
- TextInput con error;
- Feedback loading;
- Feedback empty;
- Feedback error.

Debe seguir disponible en:

- `/`;
- `/en/`.

Todo texto visible debe mantener paridad ES / EN mediante la infraestructura i18n existente.

La muestra sigue siendo técnica.

No convertirla en Dashboard, landing ni pantalla ficticia de producto.

## Componentes no requeridos

No formalizar todavía componentes para:

- badges;
- tabs;
- modal;
- dialog;
- dropdown;
- tooltip;
- toast;
- table;
- pagination;
- sidebar;
- breadcrumbs;
- avatar;
- chart;
- accordion;
- command palette;
- date picker.

Su existencia futura debe estar justificada por una necesidad real.

## Diseño

Los componentes deben respetar `DESIGN.md`.

En particular:

- jerarquía antes que decoración;
- un solo acento de marca dominante;
- `primary` no se usa como decoración general;
- superficies antes que sombras;
- bordes discretos;
- radios pequeños y contenidos;
- claridad antes que metáfora;
- affordances convencionales;
- sin estética RPG, gamer o ornamental.

Actualizar `DESIGN.md` únicamente si resulta necesario documentar reglas reutilizables de componentes que no estén ya cubiertas.

No duplicar documentación existente.

## Scope excluido

- nuevas rutas de producto;
- Dashboard;
- rutinas;
- ejercicios;
- entrenamientos;
- progreso;
- perfil;
- settings;
- autenticación;
- datos ficticios de producto;
- nuevas tablas;
- nuevas migraciones;
- cambios de paleta;
- nuevos tokens cromáticos;
- fuentes externas;
- iconografía;
- logo;
- motion;
- animaciones;
- nuevas dependencias;
- React;
- client-side router;
- Production;
- Cloudflare.

## Criterio de aceptación

- existe `Button` reutilizable;
- existe `Card` reutilizable;
- existe `TextInput` reutilizable;
- `FeedbackState` continúa funcionando;
- navegación existente continúa funcionando;
- la muestra técnica consume las primitives reales;
- `/` y `/en/` mantienen paridad visual y funcional;
- no se inventan funcionalidades de producto;
- no se introducen nuevas dependencias;
- no existe overflow horizontal a 360 CSS px;
- la foundation funciona correctamente en desktop;
- navegación por teclado y foco siguen siendo utilizables;
- `npm run check` finaliza con 0 errores;
- `npm run build` finaliza correctamente;
- `npm audit --omit=dev` mantiene 0 vulnerabilidades;
- `git diff --check` está limpio.

## Validación visual requerida

Antes de aceptación final revisar como mínimo:

- viewport móvil real de 360 CSS px;
- desktop de 1440 CSS px;
- `/`;
- `/en/`;
- estados normal, disabled y error visibles en la muestra.

La validación debe comprobar:

- jerarquía;
- spacing;
- legibilidad;
- consistencia entre componentes;
- ausencia de overflow;
- que la interfaz sigue sintiéndose `Linear Calm`.

## Estado previo

- FASE 4 — Fundación técnica: `ACCEPTED_LOCKED`.
- FASE 5.1 — Identidad: `ACCEPTED_LOCKED`.
- FASE 5.2 — Sistema visual: `ACCEPTED_LOCKED`.

## Responsable principal

Gemini implementa los componentes y la muestra técnica.

ChatGPT apoya en arquitectura de componentes, semántica, accesibilidad foundation y revisión de scope.

Oskar realiza la aceptación visual y funcional.

## Después de aceptar

Siguiente candidato: FASE 5.4 — Motion.

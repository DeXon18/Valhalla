# CURRENT

Estado: `IN_PROGRESS`

## Tarea autorizada

FASE 5.2 — Sistema visual.

## Resultado observable

La identidad aceptada de Valhalla queda traducida a un sistema visual coherente y suficientemente concreto para orientar los componentes de FASE 5.3 sin rediseñar la foundation técnica ya aceptada.

## Baseline preservada

Se conserva:

- FASE 5.1 — Identidad: `ACCEPTED_LOCKED`;
- `Linear Calm` como sistema cromático;
- valores actuales de `src/styles/themes.css`;
- uso exclusivo de tokens cromáticos semánticos en la UI;
- jerarquía de superficies:
  - background;
  - surface;
  - raised;
- acento primario azul-violeta desaturado;
- success, warning y danger como colores semánticos y no de marca;
- spacing base de `0.25rem`;
- Responsive Foundation aceptada;
- ausencia de glow, neón y grandes superficies saturadas.

No se reabre ninguna de estas decisiones salvo contradicción demostrable.

## Scope incluido

Consolidar principalmente `DESIGN.md` para definir:

### Paleta

Documentar la función de los roles cromáticos existentes sin modificar sus valores.

Debe quedar claro:

- `background` es el plano base;
- `surface` agrupa contenido;
- `raised` proporciona un nivel adicional de separación cuando sea necesario;
- `border` y `border-subtle` separan estructura sin dominar visualmente;
- `foreground` contiene información principal;
- `muted` contiene información secundaria;
- `primary` identifica acción, selección, foco o énfasis relevante;
- `primary-subtle` permite énfasis contenido;
- success, warning y danger solo comunican estado semántico.

No usar `primary` como decoración general.

Los valores concretos continúan teniendo como fuente de verdad `src/styles/themes.css`.

### Tipografía

Ratificar como baseline:

- pila tipográfica de sistema actualmente definida para `font-heading` y `font-body`;
- no añadir fuentes externas;
- títulos robustos mediante jerarquía, peso y espaciado;
- cuerpo e interfaz prioritariamente legibles;
- diferenciación entre heading y body mediante tratamiento tipográfico, no necesariamente mediante familias diferentes;
- uppercase y tracking amplio solo cuando exista una función clara de jerarquía o etiquetado;
- evitar tipografías rúnicas, medievales o decorativas en la interfaz funcional.

No convertir las escalas concretas de la muestra técnica en reglas universales del producto.

### Geometría

Definir como dirección visual:

- geometría simple y contemporánea;
- radios pequeños y contenidos como baseline;
- bordes discretos de baja presencia visual;
- superficies predominantemente planas;
- evitar formas excesivamente redondeadas;
- evitar geometría agresiva o ornamental;
- no utilizar escudos, cortes angulares o formas nórdicas como estructura obligatoria de controles;
- la geometría temática solo puede aparecer como acento cuando tenga sentido contextual.

No crear todavía un sistema complejo de tokens de radius si los componentes actuales no lo necesitan.

### Elevación y profundidad

La profundidad debe depender principalmente de:

- luminosidad de las superficies;
- bordes;
- composición y separación espacial.

Las sombras no forman parte de la baseline por defecto.

Solo deben incorporarse posteriormente cuando comuniquen elevación o interacción de forma funcional.

### Lenguaje visual

Valhalla debe sentirse:

- oscuro pero legible;
- fuerte pero no agresivo;
- preciso;
- contenido;
- contemporáneo;
- denso solo cuando la información lo requiera;
- reconocible por jerarquía y coherencia, no por ornamentación.

Reglas:

- un solo acento de marca dominante;
- jerarquía antes que decoración;
- contraste antes que efectos;
- superficies antes que sombras;
- espacio antes que separadores innecesarios;
- temática nórdica como acento;
- evitar gradientes decorativos, glow y ruido visual;
- no transformar cada elemento de interfaz en una pieza de branding.

### Relación con la implementación actual

Auditar:

- `src/styles/themes.css`;
- `src/styles/global.css`;
- componentes foundation existentes.

Si ya cumplen las decisiones anteriores, no modificarlos.

No hacer cambios de código únicamente para “formalizar” algo que ya funciona.

## Scope excluido

- nuevos colores;
- cambios de valores de `Linear Calm`;
- temas adicionales;
- fuente externa;
- logo;
- logotipo;
- emblema definitivo;
- iconografía concreta;
- ilustraciones;
- componentes nuevos;
- rediseño de App Shell;
- cambios responsive;
- motion;
- microinteracciones;
- validación WCAG exhaustiva;
- componentes de producto;
- rutas funcionales.

FASE 5.3 definirá componentes.

FASE 5.4 definirá motion.

FASE 5.5 realizará la consolidación de accesibilidad.

## Criterio de aceptación

- `Linear Calm` permanece sin cambios;
- los roles cromáticos quedan documentados;
- la estrategia tipográfica queda explícita;
- la geometría queda definida sin tematización excesiva;
- queda definida la estrategia de profundidad/elevación;
- el lenguaje visual queda suficientemente concreto para orientar FASE 5.3;
- no se confunden decisiones de la muestra técnica con reglas universales;
- no se introducen dependencias;
- no se realizan cambios de código innecesarios;
- `git diff --check` está limpio.

## Estado previo

- FASE 4 — Fundación técnica: `ACCEPTED_LOCKED`.
- FASE 5.1 — Identidad: `ACCEPTED_LOCKED`.

## Responsable principal

Oskar acepta las decisiones visuales.

Gemini consolida la documentación e implementación estrictamente necesaria.

ChatGPT apoya en coherencia del sistema, límites de scope y revisión técnica.

## Después de aceptar

Siguiente candidato: FASE 5.3 — Componentes.

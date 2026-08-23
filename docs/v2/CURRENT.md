# CURRENT

Estado: `IN_PROGRESS`

## Tarea autorizada

FASE 4.3 — Responsive Foundation.

## Resultado observable

La UI base de Valhalla se adapta correctamente desde móvil hasta escritorio sin overflow horizontal, pérdida de legibilidad ni controles inutilizables.

La implementación sigue un enfoque mobile-first y conserva desktop como experiencia first-class.

## Scope incluido

- adaptar la muestra técnica existente para móvil, tablet y desktop;
- mantener mobile-first;
- validar específicamente móvil en:
  - 360 px;
  - 390 px;
  - 430 px;
- validar una transición fluida en tablet;
- validar desktop en:
  - 1280 px;
  - 1440 px;
- ajustar únicamente cuando resulte necesario:
  - ancho de contenido;
  - padding;
  - gaps;
  - columnas;
  - wrapping;
  - tamaño/disposición de controles;
- mantener legibilidad y jerarquía visual en todos los tamaños;
- evitar overflow horizontal;
- conservar la baseline visual y los tokens aceptados en FASE 4.2.

## Scope excluido

- App Shell;
- sidebar o navegación real;
- componentes de producto;
- landing pública;
- i18n;
- persistencia;
- autenticación;
- nuevos tokens cromáticos;
- rediseñar Linear Calm;
- selector de temas;
- motion;
- breakpoints personalizados sin necesidad demostrada;
- Production.

## Criterio de aceptación

- la página funciona correctamente a 360, 390 y 430 px;
- la adaptación intermedia de tablet no presenta roturas ni overflow;
- la página aprovecha correctamente 1280 y 1440 px sin quedar artificialmente estirada;
- los controles siguen siendo utilizables y legibles;
- no existe scroll horizontal provocado por la UI;
- las superficies y contenidos cambian de disposición solo cuando aporta valor;
- `npm run build` finaliza correctamente;
- no se ha adelantado trabajo de FASE 4.4 o posteriores.

## Estado previo

- FASE 4.1 — Bootstrap Astro: `ACCEPTED_LOCKED`.
- FASE 4.2 — UI base: `ACCEPTED_LOCKED`.

## Responsable principal

Gemini implementa CURRENT.

Oskar revisa visualmente móvil, tablet y desktop.

ChatGPT apoya en decisiones responsive o bloqueos técnicos reales.

## Después de aceptar

Siguiente candidato: FASE 4.4 — Internacionalización.

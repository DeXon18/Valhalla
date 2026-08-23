# CURRENT

Estado: `AWAITING_OWNER_REVIEW`

## Tarea autorizada

FASE 4.2 — UI base.

## Resultado observable

Valhalla dispone de una base visual mínima y reutilizable sobre Astro mediante Tailwind CSS, con tokens explícitos para color, tipografía, espaciado y estados.

## Scope incluido

- integrar Tailwind CSS con Astro/Vite;
- verificar antes de instalar las versiones estables compatibles de:
  - `tailwindcss`;
  - `@tailwindcss/vite`;
- crear la hoja de estilos global mínima necesaria;
- definir design tokens básicos coherentes con `DESIGN.md`;
- establecer tipografía base para títulos y cuerpo/UI;
- establecer una escala de spacing mínima;
- definir estados visuales básicos reutilizables;
- aplicar la base visual a la página mínima existente para comprobarla;
- validar instalación y build.

## Scope excluido

- Responsive Foundation de FASE 4.3;
- layouts específicos de móvil, tablet o desktop;
- App Shell;
- navegación;
- i18n;
- persistencia;
- autenticación;
- componentes de producto;
- identidad visual definitiva o decoración nórdica avanzada;
- motion;
- Production;
- tooling adicional sin necesidad concreta.

## Criterio de aceptación

- Tailwind está integrado mediante la vía compatible con el stack actual;
- las dependencias quedan fijadas y reproducibles en `package-lock.json`;
- existe una fuente única y comprensible para los tokens básicos;
- la página mínima demuestra color, tipografía, spacing y estados sin convertirse en una pantalla de producto;
- `npm run build` finaliza correctamente;
- no se ha adelantado trabajo de FASE 4.3 o posteriores.

## Estado previo

FASE 4.1 — Bootstrap Astro: `ACCEPTED_LOCKED`.

## Responsable principal

Gemini implementa CURRENT.

Oskar decide cualquier elección visual que cambie materialmente la identidad definida.

ChatGPT apoya en compatibilidad técnica, arquitectura o bloqueos reales.

## Después de aceptar

Siguiente candidato: FASE 4.3 — Responsive Foundation.

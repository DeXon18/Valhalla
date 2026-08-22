# CURRENT

Estado: `AWAITING_OWNER_REVIEW`

## Tarea autorizada

Corrección de baseline — consolidar el sistema de agentes bajo una única raíz `.agents/`.

## Motivo

La estructura aceptada mantenía Rules y Workflows bajo dos raíces distintas.

La corrección unifica el contexto operativo del workspace para evitar ambigüedad.

## Resultado observable

Existe una única raíz `.agents/`:

- `.agents/rules/`
- `.agents/workflows/`
- `.agents/skills/` cuando sea necesaria;
- `.agents/integrations/` cuando sea necesaria.

La raíz legacy singular ha sido eliminada.

## Scope incluido

- mover las cuatro Rules existentes a `.agents/rules/`;
- actualizar `VALHALLA.md` para reflejar una única raíz `.agents/`;
- comprobar que no quedan referencias activas a la raíz legacy.

## Scope excluido

- modificar contenido funcional de las Rules;
- modificar Workflows;
- crear Skills;
- crear Integrations o MCP;
- Bootstrap Astro;
- cualquier cambio de producto.

## Criterio de aceptación

- existe una única raíz `.agents/`;
- las cuatro Rules existen bajo `.agents/rules/`;
- los Workflows existentes permanecen bajo `.agents/workflows/`;
- no quedan referencias a la raíz legacy;
- `git diff --check` finaliza sin errores.

## Estado previo

- FASE 3.1 — Contratos principales: `ACCEPTED_LOCKED`.
- FASE 3.2 — Rules: `ACCEPTED_LOCKED`, reabierta únicamente para esta corrección estructural.
- FASE 3.3 — Workflows: `ACCEPTED_LOCKED`.

FASE 4.1 permanece pausada hasta integrar esta corrección.

## Después de aceptar

Reanudar FASE 4.1 — Bootstrap Astro.

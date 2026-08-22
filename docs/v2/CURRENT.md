# CURRENT

Estado: `AWAITING_OWNER_REVIEW`

## Tarea autorizada

FASE 0.2 — Responsabilidades.

## Resultado observable

Las responsabilidades quedan delimitadas sin solapamientos innecesarios:

- Oskar decide producto, prioridades, alcance y aceptación final.
- ChatGPT prepara servidor, arquitectura, sistema de agentes y soporte técnico cuando corresponda.
- Gemini es el agente principal de implementación y construcción de Valhalla.

## Límites

### Oskar

- Autoriza `CURRENT`.
- Decide cambios de producto y prioridades.
- Acepta o rechaza resultados.
- Puede ordenar `REPLANIFICAMOS`.

### ChatGPT

- Prepara infraestructura y entorno cuando `CURRENT` lo autorice.
- Define o revisa arquitectura y sistema de agentes cuando sean necesarios.
- Ayuda a analizar bloqueos, riesgos y decisiones técnicas.
- No desarrolla Valhalla por defecto.

### Gemini

- Implementa `CURRENT`.
- Opera el workspace y ejecuta las validaciones pertinentes.
- Usa GitHub conforme al flujo definido cuando esté preparado.
- No amplía scope ni decide producto por su cuenta.

## Scope excluido

- Crear todavía `AGENTS.md` o `GEMINI.md`.
- Preparar servidor o infraestructura.
- Configurar GitHub.
- Instalar skills, MCP o tooling.
- Implementar producto.

## Criterio de aceptación

El propietario confirma que esta división de responsabilidades refleja cómo debe operar Valhalla.

## Estado previo

FASE 0.1 — Gobierno del proyecto: `ACCEPTED_LOCKED`.

## Después de aceptar

Siguiente candidato: FASE 0.3 — Flujo de ejecución.

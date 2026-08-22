# Agentes de Valhalla

Este repositorio se gobierna mediante `RUMBO.md` y `docs/v2/CURRENT.md`.

## Orden de lectura

Antes de trabajar:

1. Leer `RUMBO.md`.
2. Leer `docs/v2/CURRENT.md`.
3. Consultar `PRODUCT.md`, `DESIGN.md` y `docs/v2/SECTIONS.md` solo cuando sean relevantes para CURRENT.
4. Consultar `docs/v2/BACKLOG.md` únicamente como registro de ideas, nunca como trabajo autorizado.

## Autoridad

1. Oskar decide producto, prioridades, alcance y aceptación.
2. `RUMBO.md` define la disciplina general de trabajo.
3. `docs/v2/CURRENT.md` contiene la única tarea autorizada.
4. El resto de documentos aporta contexto, diseño, mapa o procedimiento.

El mapa de Valhalla no es una lista de tareas.

## Responsabilidades

### Oskar

- Decide producto y prioridades.
- Autoriza CURRENT.
- Acepta o rechaza resultados.
- Puede ordenar `REPLANIFICAMOS`.

### ChatGPT

- Prepara servidor, arquitectura y sistema de agentes cuando corresponda.
- Ayuda con decisiones técnicas, riesgos y bloqueos.
- No desarrolla Valhalla por defecto.

### Gemini

- Implementa CURRENT.
- Opera el workspace y ejecuta las validaciones necesarias.
- Usa GitHub según el flujo acordado.
- No amplía scope ni decide producto.

## Reglas operativas

- Una idea nueva no modifica CURRENT.
- Una idea útil fuera de CURRENT va a BACKLOG.
- No instalar herramientas, skills, MCP o infraestructura «por si acaso».
- Aplicar la solución mínima técnicamente sensata.
- Validar de forma proporcional al riesgo.
- Si un paso falla, detener los pasos que dependían de él.
- Tras cuatro correcciones fallidas sobre el mismo bloqueo: STOP y handoff.
- No tocar comportamiento `ACCEPTED_LOCKED` sin causa autorizada.
- GitHub es la fuente de verdad del código integrado.
- Production solo se prepara o modifica cuando esté expresamente autorizada.

## Cierre de tarea

Una tarea no termina por haber modificado archivos.

Debe existir:

- resultado observable;
- validación suficiente;
- estado Git coherente;
- presentación al propietario;
- `AWAITING_OWNER_REVIEW`.

La aceptación final corresponde a Oskar.

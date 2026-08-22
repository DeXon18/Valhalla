# Gemini en Valhalla

Gemini es el agente principal de implementación de Valhalla.

## Antes de empezar

Leer, en este orden:

1. `RUMBO.md`
2. `AGENTS.md`
3. `docs/v2/CURRENT.md`

No implementar nada que no esté autorizado por CURRENT.

## Entorno de trabajo

Development:

/opt/web-projects/Valhalla/development

Rama integrada de Development:

develop

GitHub es la fuente de verdad del código.

No trabajar directamente sobre `main` ni preparar Production salvo autorización explícita.

## Forma de trabajo

Para cada CURRENT:

1. Entender el resultado observable.
2. Comprobar estado y entorno antes de modificar.
3. Crear una rama temporal cuando exista trabajo que integrar.
4. Implementar solo el alcance autorizado.
5. Validar lo necesario para el riesgo real.
6. Revisar el diff.
7. Hacer staging selectivo.
8. Commit y push.
9. Integrar mediante GitHub cuando el flujo esté disponible.
10. Dejar el resultado en Development.
11. Marcar `AWAITING_OWNER_REVIEW`.
12. Detenerse para revisión de Oskar.

## Límites

Gemini no debe:

- convertir BACKLOG en trabajo;
- ampliar CURRENT;
- crear funcionalidades futuras;
- refactorizar fuera de alcance;
- instalar tooling sin necesidad real;
- preparar Production anticipadamente;
- saltarse GitHub para integrar cambios;
- continuar una secuencia dependiente después de un fallo;
- modificar una baseline `ACCEPTED_LOCKED` sin motivo autorizado.

Si aparece una idea útil fuera de alcance, registrarla brevemente en BACKLOG y volver a CURRENT.

Si aparece una duda que cambia materialmente producto, alcance o riesgo, consultar a Oskar. ChatGPT puede apoyar en análisis técnico cuando sea necesario.

# Envío de cambio

## Objetivo

Integrar en Development únicamente el cambio autorizado y validado.

## Procedimiento

1. Confirmar que el trabajo corresponde a CURRENT.
2. Ejecutar la validación pertinente.
3. Revisar el diff.
4. Comprobar `git diff --check`.
5. Cuando el resultado esté listo para revisión, cambiar CURRENT a `AWAITING_OWNER_REVIEW`.
6. Hacer staging selectivo.
7. Revisar exactamente qué queda preparado para commit.
8. Crear un commit coherente.
9. Publicar la rama temporal.
10. Crear Pull Request hacia `develop`.
11. Comprobar que la PR puede integrarse y que no existen checks relevantes fallidos.
12. Integrar mediante GitHub.
13. Sincronizar `develop`.
14. Confirmar working tree limpio.

No usar merge local para saltarse GitHub.

No integrar cambios fuera de CURRENT.

# CURRENT

Estado: `IN_PROGRESS`

## Tarea autorizada

FASE 4.5 — Persistencia.

## Resultado observable

Valhalla dispone de una foundation mínima y tipada para conectarse desde Astro/Node a PostgreSQL mediante Drizzle ORM y gestionar futuras evoluciones de schema mediante migraciones versionadas.

## Scope incluido

- utilizar el PostgreSQL Development existente:
  - base de datos: `valhalla_dev`;
- utilizar Drizzle ORM con `node-postgres`;
- verificar antes de instalar las versiones disponibles de:
  - `drizzle-orm`;
  - `drizzle-kit`;
  - `pg`;
  - `@types/pg`;
- fijar versiones exactas en `package.json`;
- crear configuración central de Drizzle;
- crear conexión reutilizable a PostgreSQL;
- leer `DATABASE_URL` únicamente desde entorno;
- crear `src/db/schema.ts` como entrypoint central del schema;
- preparar directorio y flujo versionado de migraciones;
- validar conexión real mediante Drizzle;
- validar el flujo de migraciones contra Development;
- mantener TypeScript strict;
- mantener secretos fuera de Git;
- documentar únicamente nombres de variables de entorno cuando sea necesario.

## Principio de schema mínimo

Esta fase NO autoriza diseñar por anticipado el modelo completo del producto.

No crear tablas ficticias únicamente para demostrar que Drizzle funciona.

En particular, no definir todavía:

- usuarios/cuentas;
- sesiones de autenticación;
- perfiles;
- ejercicios;
- rutinas;
- entrenamientos;
- métricas corporales.

Esas entidades se incorporarán cuando su fase funcional las necesite.

Si la herramienta exige una tabla real para poder validar correctamente el flujo de migraciones, detenerse y comunicarlo antes de inventar una entidad.

## Scope excluido

- Better Auth;
- tablas de autenticación;
- modelado completo de dominio;
- seed de datos;
- importación del dataset de ejercicios;
- CRUD;
- endpoints de producto;
- App Shell;
- health endpoint;
- Production;
- `valhalla_prod`;
- backups de Production;
- Docker;
- PostgreSQL MCP;
- cambios UI;
- cambios i18n.

## Seguridad

- ninguna contraseña o URL con credenciales entra en Git;
- no imprimir el valor de `DATABASE_URL`;
- no modificar `valhalla_prod`;
- no ejecutar operaciones destructivas sobre bases no verificadas;
- antes de aplicar una migración comprobar explícitamente que el destino es `valhalla_dev`.

## Criterio de aceptación

- PostgreSQL Development responde;
- Drizzle conecta realmente a `valhalla_dev`;
- una consulta mínima mediante Drizzle finaliza correctamente;
- existe un único entrypoint de conexión reutilizable;
- existe un entrypoint central de schema;
- Drizzle Kit queda configurado para PostgreSQL;
- el flujo de migraciones está preparado y se puede ejecutar de forma reproducible;
- no se han creado tablas de dominio especulativas;
- ninguna credencial aparece en el repositorio;
- `npm run build` finaliza correctamente;
- `git diff --check` está limpio.

## Estado previo

- FASE 4.1 — Bootstrap Astro: `ACCEPTED_LOCKED`.
- FASE 4.2 — UI base: `ACCEPTED_LOCKED`.
- FASE 4.3 — Responsive Foundation: `ACCEPTED_LOCKED`.
- FASE 4.4 — Internacionalización: `ACCEPTED_LOCKED`.

## Responsable principal

Gemini implementa CURRENT.

ChatGPT apoya en PostgreSQL, Drizzle, arquitectura de persistencia y revisión de migraciones.

Oskar acepta el resultado funcional.

## Después de aceptar

Siguiente candidato: FASE 4.6 — App Shell.

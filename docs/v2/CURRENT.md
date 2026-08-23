# CURRENT

Estado: `IN_PROGRESS`

## Tarea autorizada

FASE 4.6 — App Shell.

## Resultado observable

Valhalla dispone de una estructura de aplicación compartida, responsive, localizada y accesible sobre la que puedan incorporarse posteriormente las pantallas funcionales del producto.

## Scope incluido

- crear un layout compartido para las páginas de aplicación;
- crear un App Shell reutilizable;
- incorporar:
  - cabecera;
  - identidad Valhalla mínima;
  - área de navegación;
  - área principal de contenido;
- trasladar el selector ES / EN al shell compartido;
- mantener navegación únicamente hacia rutas que realmente existan;
- no inventar todavía secciones funcionales del producto;
- conservar la UI técnica actual como contenido temporal dentro del shell;
- mantener ES y EN funcionalmente equivalentes;
- mantener rutas actuales:
  - `/`
  - `/en/`;
- crear estados reutilizables:
  - loading;
  - empty;
  - error;
- los estados deben ser accesibles y no depender de JavaScript;
- crear endpoint:
  - `/api/health`;
- health debe comprobar:
  - aplicación operativa;
  - conectividad real con PostgreSQL;
- respuesta healthy:
  - HTTP 200;
- fallo de PostgreSQL:
  - HTTP 503;
- no incluir credenciales ni detalles internos sensibles en la respuesta;
- crear una experiencia 404 propia;
- localizar 404 cuando sea razonablemente posible mediante la infraestructura i18n existente;
- ofrecer enlace de retorno a una ruta válida;
- preservar Linear Calm;
- preservar responsive foundation;
- preservar persistencia e i18n ya aceptadas;
- mantener `astro check` y build limpios.

## Arquitectura esperada

La implementación debe tender a una estructura equivalente a:

- `src/layouts/BaseLayout.astro`
- `src/components/AppShell.astro`
- `src/components/LanguageSwitcher.astro`
- componente reutilizable para estados de feedback;
- `src/pages/api/health.ts`
- `src/pages/404.astro`

Los nombres exactos pueden variar si existe una alternativa claramente más simple.

## Navegación

No crear enlaces a funcionalidades todavía inexistentes.

En esta fase basta con una navegación mínima y real.

No crear por anticipado:

- Dashboard;
- Rutinas;
- Entrenamientos;
- Ejercicios;
- Progreso;
- Perfil;
- Ajustes.

Esos destinos aparecerán cuando sus fases funcionales estén autorizadas.

## Health endpoint

`/api/health` debe realizar una consulta mínima a PostgreSQL.

La respuesta no debe exponer:

- `DATABASE_URL`;
- host;
- puerto;
- usuario;
- versión exacta de PostgreSQL;
- stack traces;
- mensajes internos del driver.

Formato mínimo healthy equivalente a:

```json
{
  "status": "ok",
  "database": "ok"
}
```

En fallo de base de datos, formato equivalente a:

```json
{
  "status": "degraded",
  "database": "unavailable"
}
```

## Estados

Loading, empty y error deben ser componentes foundation reutilizables, no pantallas funcionales inventadas.

Deben contemplar como mínimo:

- semántica accesible adecuada;
- título;
- descripción opcional;
- espacio para acción cuando proceda;
- integración con tokens existentes.

No introducir animaciones complejas ni nuevas dependencias.

## 404

Debe:

- utilizar el diseño del App Shell cuando sea viable;
- presentar mensaje comprensible;
- ofrecer regreso a `/` o `/en/` según locale;
- no mostrar detalles internos de routing.

## Scope excluido

- autenticación;
- Better Auth;
- Dashboard funcional;
- navegación de producto definitiva;
- sidebar funcional de producto;
- CRUD;
- ejercicios;
- rutinas;
- entrenamientos;
- métricas;
- perfil;
- settings;
- datos ficticios de producto;
- loading derivado de navegación SPA;
- client-side router;
- nuevas dependencias;
- nuevas tablas;
- nuevas migraciones de dominio;
- Production;
- systemd;
- reverse proxy;
- cambios de paleta;
- rediseño de Linear Calm.

## Criterio de aceptación

- `/` y `/en/` utilizan el mismo layout y App Shell;
- no existe duplicación significativa de estructura entre idiomas;
- selector ES / EN funciona desde el shell;
- navegación solo apunta a destinos existentes;
- loading, empty y error existen como foundation reutilizable;
- `/api/health` devuelve 200 con PostgreSQL operativo;
- `/api/health` devuelve 503 cuando PostgreSQL no está disponible;
- health no filtra información sensible;
- existe 404 personalizada;
- 404 ofrece una vía válida de regreso;
- layout funciona en móvil y desktop;
- no hay overflow horizontal;
- `npm run check` finaliza con 0 errores;
- `npm run build` finaliza correctamente;
- `npm audit --omit=dev` mantiene 0 vulnerabilidades;
- `git diff --check` está limpio.

## Estado previo

- FASE 4.1 — Bootstrap Astro: `ACCEPTED_LOCKED`.
- FASE 4.2 — UI base: `ACCEPTED_LOCKED`.
- FASE 4.3 — Responsive Foundation: `ACCEPTED_LOCKED`.
- FASE 4.4 — Internacionalización: `ACCEPTED_LOCKED`.
- FASE 4.5 — Persistencia: `ACCEPTED_LOCKED`.

## Responsable principal

Gemini implementa CURRENT.

ChatGPT apoya en arquitectura del shell, health endpoint, accesibilidad y revisión técnica.

Oskar acepta el resultado funcional y visual.

## Después de aceptar

FASE 4 — Fundación técnica queda completa.

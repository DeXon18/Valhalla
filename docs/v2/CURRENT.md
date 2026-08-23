# CURRENT

Estado: `ACCEPTED_LOCKED`

## Tarea autorizada

PUENTE INFRA — Servicio persistente de Development.

## Resultado observable

Valhalla Development funciona como servicio `systemd` persistente bajo el usuario `gemini`, ejecutando el artefacto SSR compilado en `127.0.0.1:4321`, cargando la configuración de PostgreSQL desde el archivo de secretos existente y recuperándose automáticamente ante reinicios o fallos del proceso.

## Baseline preservada

Se conserva:

- FASE 5 completa: `ACCEPTED_LOCKED`;
- rama de integración `develop`;
- Node.js instalado en `/usr/local/bin/node`;
- proyecto en `/opt/web-projects/Valhalla/development`;
- secretos fuera del repositorio;
- PostgreSQL actual;
- Astro SSR con `@astrojs/node`;
- Development en `127.0.0.1:4321`;
- Production aplazada.

No modificar funcionalidad, diseño, dependencias ni código de producto salvo que una incompatibilidad real del runtime lo haga imprescindible.

## Servicio

Crear un servicio:

`valhalla-dev.service`

Debe:

- ejecutarse como usuario `gemini`;
- usar `/opt/web-projects/Valhalla/development` como directorio de trabajo;
- cargar variables desde `/opt/web-projects/Valhalla/.secrets/postgres-dev.env`;
- ejecutar `/usr/local/bin/node dist/server/entry.mjs`;
- fijar `HOST=127.0.0.1`;
- fijar `PORT=4321`;
- arrancar automáticamente con el sistema;
- reiniciarse ante fallo del proceso;
- no exponer secretos en el unit file, logs ni repositorio.

## Build

El servicio ejecuta el artefacto ya compilado.

No añadir un build automático dentro de `ExecStart`.

Los despliegues posteriores deberán seguir explícitamente la secuencia:

1. actualizar código;
2. instalar dependencias cuando corresponda;
3. ejecutar build;
4. reiniciar el servicio;
5. validar health.

No automatizar todavía ese flujo.

## Validación

Comprobar como mínimo:

- `systemctl enable` correcto;
- `systemctl start` correcto;
- estado `active (running)`;
- listener exclusivamente en `127.0.0.1:4321`;
- `/` devuelve HTTP 200;
- `/en/` devuelve HTTP 200;
- `/api/health` devuelve HTTP 200 con aplicación y base de datos saludables;
- ruta inexistente devuelve HTTP 404;
- reinicio manual del servicio correcto;
- recuperación automática tras terminar el proceso principal;
- logs sin secretos;
- working tree Git limpio respecto a cambios de infraestructura del host.

## Fuera de alcance

No realizar en esta tarea:

- instalación de `cloudflared`;
- configuración del Cloudflare Tunnel;
- DNS;
- HTTPS público;
- `dev-valha.dxpro.es`;
- Production;
- reverse proxy adicional;
- Docker;
- CI/CD;
- cambios de base de datos;
- cambios de producto;
- nuevas dependencias npm.

Cloudflare será una tarea separada después de aceptar este servicio.

## Criterio de cierre

La tarea pasa a `AWAITING_OWNER_REVIEW` únicamente cuando el servicio persista correctamente, sobreviva a reinicios/fallos del proceso y todas las comprobaciones locales definidas hayan pasado.

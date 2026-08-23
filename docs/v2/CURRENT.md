# CURRENT

Estado: `AWAITING_OWNER_REVIEW`

## Tarea autorizada

PUENTE INFRA — Cloudflare Tunnel para Development.

## Resultado observable

Valhalla Development queda accesible externamente mediante:

`https://dev-valha.dxpro.es`

El tráfico público entra por Cloudflare Tunnel y llega al servicio local existente:

`http://127.0.0.1:4321`

El origen no se expone directamente a Internet ni cambia su bind local.

## Baseline preservada

Se conserva:

- FASE 5 completa: `ACCEPTED_LOCKED`;
- servicio persistente de Development: `ACCEPTED_LOCKED`;
- `valhalla-dev.service`;
- Development en `127.0.0.1:4321`;
- PostgreSQL y secretos actuales;
- rama de integración `develop`;
- Production aplazada.

No modificar código de producto, diseño, base de datos ni dependencias npm.

## Cloudflared

Instalar `cloudflared` desde el repositorio estable oficial de Cloudflare para Debian.

No utilizar builds nightly.

El conector debe:

- ejecutarse como servicio persistente;
- arrancar automáticamente;
- recuperarse ante fallo;
- conectar exclusivamente con el Tunnel de Development proporcionado por el owner;
- dirigir el hostname público a `http://127.0.0.1:4321`.

## Tunnel token

El Tunnel token es secreto.

Nunca:

- incluirlo en Git;
- incluirlo en `CURRENT.md`;
- incluirlo en documentación;
- pegarlo en chat;
- imprimirlo con `echo`, `cat` o logs;
- escribirlo literalmente en un comando que quede en el historial del shell.

La introducción del token deberá hacerse mediante entrada oculta en terminal.

Después de instalar el servicio se debe verificar que:

- el token se almacena fuera del repositorio;
- sus permisos son restrictivos;
- el unit de systemd no contiene el valor del token;
- `ExecStart` utiliza un token file o mecanismo equivalente seguro.

Si la versión instalada intenta persistir el token literalmente en el unit de systemd, detener la tarea y no continuar.

## Red y exposición

Mantener:

`valhalla-dev.service -> 127.0.0.1:4321`

No cambiar a `0.0.0.0`.

No abrir puertos HTTP/HTTPS entrantes en el LXC para resolver el túnel.

El conector Cloudflare establece la conexión saliente necesaria.

## Hostname

Hostname objetivo:

`dev-valha.dxpro.es`

El hostname deberá estar asociado únicamente al Tunnel de Development.

No configurar todavía:

- `valha.dxpro.es`;
- Production;
- otros subdominios.

## Validación

Comprobar como mínimo:

- `cloudflared` instalado desde fuente oficial;
- versión instalada identificada;
- servicio habilitado y activo;
- Tunnel conectado;
- recuperación del servicio tras reinicio;
- `valhalla-dev.service` continúa activo;
- Valhalla continúa escuchando solo en `127.0.0.1:4321`;
- `https://dev-valha.dxpro.es/` devuelve HTTP 200;
- `/en/` devuelve HTTP 200;
- `/api/health` devuelve HTTP 200 con aplicación y base de datos saludables;
- ruta inexistente devuelve HTTP 404;
- certificado HTTPS válido;
- no hay secretos visibles en Git, unit files ni logs revisados;
- working tree limpio salvo documentación o infraestructura autorizada.

## Reproducibilidad

Versionar únicamente configuración o documentación de infraestructura que no contenga secretos.

No versionar el Tunnel token ni archivos que lo contengan.

## Fuera de alcance

No realizar en esta tarea:

- Production;
- `valha.dxpro.es`;
- Cloudflare Access;
- WAF personalizado;
- reglas de caché;
- Workers;
- reverse proxy adicional;
- Docker;
- CI/CD;
- cambios de aplicación;
- cambios de PostgreSQL;
- nuevas dependencias npm.

Estas capacidades requieren tareas separadas si llegan a ser necesarias.

## Criterio de cierre

La tarea pasa a `AWAITING_OWNER_REVIEW` únicamente cuando Development sea accesible de forma estable mediante `https://dev-valha.dxpro.es`, el origen siga siendo privado y las comprobaciones locales, externas y de secretos hayan pasado.

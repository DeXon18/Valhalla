# CURRENT

Estado: `IN_PROGRESS`

## Tarea autorizada

FASE 7.2 — Logout seguro de la sesión activa.

## Resultado observable

Un usuario que haya iniciado sesión mediante FASE 7.1 puede cerrar de forma explícita su sesión actual.

El cierre utiliza Better Auth y provoca que la sesión utilizada hasta ese momento deje de autenticar al usuario.

La interfaz vuelve a un estado público/de acceso equivalente al locale actual.

Debe funcionar en:

- español;
- inglés.

No se requiere dashboard ni zona privada para demostrar el flujo.

## Baseline preservada

Se conserva:

- FASE 5 completa: `ACCEPTED_LOCKED`;
- FASE 7.1 Login: `ACCEPTED_LOCKED`;
- Better Auth `1.7.1`;
- adaptador oficial Drizzle;
- PostgreSQL `valhalla_dev`;
- schema y migraciones Better Auth actuales;
- cuenta Development ya aprovisionada;
- signup público deshabilitado;
- API Better Auth existente bajo `/api/auth/[...all]`;
- login ES `/login`;
- login EN `/en/login/`;
- i18n ES / EN;
- AppShell y UI foundation;
- accesibilidad;
- responsive foundation;
- servicio persistente Development;
- Cloudflare Tunnel Development;
- `https://dev-valha.dxpro.es`;
- Production aplazada.

FASE 6.1 permanece pausada.

No mezclar su WIP en FASE 7.

## Alcance autorizado

Implementar únicamente el cierre de la sesión actual.

Utilizar el mecanismo de logout/sign-out proporcionado por Better Auth.

Reutilizar la infraestructura de autenticación ya integrada.

La acción de logout debe estar disponible de forma natural después de que el usuario haya iniciado sesión.

No crear una API de logout paralela si Better Auth ya proporciona el comportamiento necesario mediante el handler existente.

No añadir dependencias, plugins, tablas o migraciones salvo que aparezca un bloqueo técnico real y demostrado.

## UI

Extender el flujo actual de login únicamente lo necesario para poder cerrar la sesión recién autenticada.

La experiencia mínima debe permitir:

1. iniciar sesión;
2. observar un estado autenticado mínimo;
3. ejecutar logout;
4. volver al estado de acceso público.

No inventar dashboard, perfil, navegación privada ni contenido de aplicación únicamente para alojar el botón de logout.

El logout debe preservar el locale actual.

Copy funcional mediante i18n:

ES:

- `Cerrar sesión`
- `Cerrando sesión…`
- error comprensible si el cierre no puede completarse.

EN:

- `Sign out`
- `Signing out…`
- equivalent error copy.

No utilizar metáforas nórdicas para esta acción.

## Comportamiento

Cuando existe una sesión activa:

- el usuario puede solicitar logout;
- Better Auth procesa el cierre;
- la sesión utilizada deja de ser válida;
- el cliente deja de representar al usuario como autenticado;
- la UI vuelve al flujo de acceso del locale correspondiente.

Después del logout, reutilizar la cookie/token anterior no debe producir una sesión autenticada válida.

Si el logout falla:

- no mostrar éxito falso;
- mostrar feedback accesible;
- no revelar tokens, cookies, secrets ni detalles internos.

No implementar "cerrar todas las sesiones".

## i18n

Mantener equivalencia funcional entre:

- `/login`
- `/en/login/`

La acción de logout y sus estados deben obtener el copy desde las traducciones centralizadas.

El cambio ES ↔ EN debe seguir conservando la ruta equivalente.

## Accesibilidad

Preservar:

- navegación por teclado;
- foco visible;
- targets táctiles;
- feedback accesible;
- `aria-live` o equivalente cuando aporte información dinámica;
- controles deshabilitados únicamente durante operaciones activas;
- contraste;
- reduced-motion.

No dejar el control bloqueado después de un error.

## Seguridad

No manipular manualmente tokens o cookies si Better Auth ya ofrece el mecanismo de sign-out correspondiente.

No:

- imprimir session tokens;
- registrar cookies;
- exponer secrets;
- incluir credenciales en scripts o Git;
- abrir signup público;
- crear endpoints administrativos;
- implementar logout global de todas las sesiones.

El cierre debe afectar únicamente a la sesión actual.

Mantener los secretos existentes fuera de Git.

## Fases posteriores

### 7.3 Sesión persistente

No cerrar todavía la validación de persistencia entre:

- navegación;
- reload;
- reapertura del navegador;
- expiración.

La existencia técnica de una cookie o sesión durante 7.2 no autoriza cerrar 7.3.

### 7.4 Rutas privadas

No añadir:

- middleware global;
- guards;
- redirects de páginas privadas;
- nuevas páginas privadas.

### 7.5 Registro público cerrado

Mantener `disableSignUp: true`.

No modificar la política actual.

### 7.6 Backlog

No implementar:

- OAuth;
- roles;
- recuperación avanzada;
- MFA;
- magic links;
- passkeys;
- organizaciones;
- Admin plugin.

## Fuera de alcance

No realizar:

- dashboard;
- perfil;
- onboarding;
- rutas privadas;
- middleware global de autorización;
- gestión de múltiples sesiones;
- cierre de todas las sesiones;
- recuperación de contraseña;
- verificación de email;
- OAuth;
- roles;
- registro público;
- cambios de schema;
- nuevas migraciones;
- cambios de Production;
- cambios Cloudflare;
- trabajo de FASE 6;
- nuevas capacidades de producto.

## Validación

Comprobar como mínimo:

- login válido con la cuenta Development existente;
- acción de logout accesible en ES;
- acción de logout accesible en EN;
- Better Auth procesa el logout correctamente;
- la sesión utilizada deja de autenticar;
- reutilizar la cookie anterior no devuelve usuario autenticado;
- el estado persistido de Better Auth refleja que esa sesión ya no es válida;
- la UI vuelve al estado de acceso correspondiente;
- signup público continúa rechazado;
- `/api/health` continúa en 200;
- `/login` continúa en 200;
- `/en/login/` continúa en 200;
- no aparecen nuevas dependencias;
- no aparecen nuevas migraciones;
- no aparecen secrets ni tokens en Git o logs revisados;
- `npm run check`;
- `npm run build`;
- `git diff --check`;
- no hay cambios de Production.

## Criterio de cierre

FASE 7.2 pasa a `AWAITING_OWNER_REVIEW` únicamente cuando una sesión Development real pueda cerrarse desde la experiencia ES y EN mediante Better Auth, la sesión anterior deje de autenticar, la UI regrese al estado público/de acceso correspondiente y no se hayan introducido capacidades pertenecientes a fases posteriores.

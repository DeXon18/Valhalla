# CURRENT

Estado: `AWAITING_OWNER_REVIEW`

## Tarea autorizada

FASE 7.1 — Login con correo electrónico y contraseña.

## Resultado observable

Valhalla dispone de autenticación self-hosted real mediante Better Auth y PostgreSQL.

Un usuario previamente aprovisionado puede acceder mediante:

- `/login`
- `/en/login/`

utilizando correo electrónico y contraseña.

Las credenciales válidas producen autenticación real mediante Better Auth.

Las credenciales inválidas son rechazadas sin revelar información sensible.

No existe registro público.

## Baseline preservada

Se conserva:

- FASE 5 completa: `ACCEPTED_LOCKED`;
- servicio persistente Development: `ACCEPTED_LOCKED`;
- Cloudflare Tunnel Development: `ACCEPTED_LOCKED`;
- PostgreSQL `valhalla_dev`;
- Drizzle ORM y Drizzle Kit actuales;
- SSR Astro;
- i18n ES / EN;
- AppShell y UI foundation;
- accesibilidad;
- responsive foundation;
- Development en `127.0.0.1:4321`;
- `https://dev-valha.dxpro.es`;
- Production aplazada.

FASE 6.1 permanece pausada y no forma parte de esta rama.

No mezclar su WIP en FASE 7.

## Stack autorizado

Utilizar:

- Better Auth;
- email + password;
- adaptador oficial Drizzle;
- PostgreSQL existente;
- Astro SSR existente.

Baseline objetivo del roadmap:

`better-auth 1.7.1`

Antes de instalar, verificar en npm:

- disponibilidad exacta de `better-auth@1.7.1`;
- versión compatible del adaptador oficial Drizzle;
- peer dependencies relevantes.

No actualizar otras dependencias por conveniencia.

No utilizar versiones beta, RC o nightly salvo autorización explícita.

## Configuración de autenticación

Crear una instancia Better Auth server-side.

Debe:

- usar PostgreSQL mediante el adaptador Drizzle oficial;
- habilitar email + password;
- deshabilitar signup público;
- usar un secret propio de Development;
- usar una base URL explícita de Development;
- no inferir secretos ni URLs desde datos del request cuando exista configuración explícita.

Configuración obligatoria conceptualmente:

- `emailAndPassword.enabled = true`;
- `emailAndPassword.disableSignUp = true`.

No añadir:

- OAuth;
- roles;
- Admin plugin;
- recuperación avanzada;
- magic links;
- OTP;
- passkeys;
- organizaciones;
- plugins no requeridos por 7.1.

## Secretos

Development necesita como mínimo:

- `DATABASE_URL`;
- `BETTER_AUTH_SECRET`;
- `BETTER_AUTH_URL`.

URL Development:

`https://dev-valha.dxpro.es`

Los valores reales viven exclusivamente fuera de Git.

Actualizar o crear `.env.example` únicamente con nombres y valores de ejemplo/no secretos.

El archivo de secretos utilizado por `valhalla-dev.service` puede ampliarse para incluir las variables necesarias.

Nunca:

- pegar secretos en chat;
- escribir contraseñas o secrets literalmente en comandos que queden en history;
- incluir secretos en Git;
- imprimir secretos en logs;
- mostrar valores mediante `cat`, `echo`, `env` o similares durante validaciones.

`BETTER_AUTH_SECRET` deberá generarse con entropía criptográfica suficiente mediante una herramienta apropiada y guardarse directamente en el almacén de secretos sin mostrarse.

## Base de datos

La baseline actual contiene únicamente la migración de persistencia vacía y `src/db/schema.ts` sin tablas de dominio.

Añadir únicamente el esquema requerido por Better Auth para email/password y sesiones.

Usar el flujo oficial compatible con Drizzle:

1. configurar Better Auth;
2. generar el schema requerido;
3. revisar el schema generado;
4. generar migración versionada mediante Drizzle Kit;
5. revisar SQL;
6. aplicar migración a `valhalla_dev`;
7. verificar idempotencia/estado de migraciones.

No crear manualmente una implementación paralela del esquema si la herramienta oficial puede generarlo correctamente.

No usar `db push` para sustituir las migraciones versionadas.

No tocar `valhalla_prod`.

## API

Montar el handler oficial de Better Auth mediante Astro bajo:

`/api/auth/[...all]`

No crear una API de autenticación paralela si Better Auth ya cubre el comportamiento requerido.

## Login UI

Crear:

- `/login`
- `/en/login/`

Formulario mínimo:

- correo electrónico;
- contraseña;
- acción de iniciar sesión;
- estado de error accesible.

Reutilizar foundation existente siempre que resulte natural:

- `BaseLayout`;
- `AppShell`;
- `TextInput`;
- `Button`;
- `FeedbackState` cuando sea apropiado.

Mantener lenguaje funcional directo:

ES:
- Correo electrónico
- Contraseña
- Iniciar sesión

EN:
- Email
- Password
- Sign in

No utilizar metáforas nórdicas para campos, errores o acción de login.

## Comportamiento

Credenciales válidas:

- Better Auth autentica al usuario;
- se produce la cookie/sesión necesaria para representar ese login.

Credenciales inválidas:

- no autentican;
- muestran un error comprensible;
- no revelan si un correo concreto existe más allá de lo que Better Auth exponga de forma segura.

No implementar todavía una experiencia completa posterior al login.

Hasta que exista FASE 8 no hay dashboard real.

No inventar dashboard, perfil ni zona privada falsa únicamente para tener un destino visual.

La implementación podrá usar una respuesta/estado mínimo verificable después del login si es necesario para demostrar éxito, sin convertirlo en una nueva sección de producto.

## Cuenta inicial de Development

Para probar 7.1 debe existir al menos una cuenta Development real.

No abrir signup público para conseguirla.

No añadir Admin plugin únicamente para aprovisionar esta cuenta.

El método de aprovisionamiento deberá:

- utilizar mecanismos de Better Auth para generar correctamente las credenciales/password hash;
- ejecutarse de forma controlada;
- no exponer un endpoint público permanente de creación;
- no persistir la contraseña en scripts versionados;
- solicitar cualquier contraseña mediante entrada oculta;
- dejar signup deshabilitado en la configuración desplegada.

El owner proporcionará correo/nombre/contraseña cuando llegue el paso de aprovisionamiento.

No solicitar ni registrar esas credenciales antes de necesitarlas.

## Signup público

Aunque la revisión formal del registro público corresponde a FASE 7.5, desde FASE 7.1 queda prohibido desplegar un endpoint funcional de alta pública.

Verificar explícitamente que un intento público de signup es rechazado.

Esto evita introducir una exposición temporal entre FASE 7.1 y FASE 7.5.

## Sesiones y fases posteriores

FASE 7.1 puede crear la sesión que Better Auth necesita para completar un login.

No cerrar todavía:

### 7.2 Logout

No implementar UI/flujo específico de cierre de sesión.

### 7.3 Sesión persistente

No desarrollar todavía la revisión completa de persistencia entre:

- navegación;
- reload;
- reapertura del navegador;
- expiración.

### 7.4 Rutas privadas

No proteger todavía páginas de producto.

No crear middleware global de autorización sin necesidad de 7.1.

### 7.5 Registro público cerrado

La política ya debe ser segura desde 7.1, pero la sección 7.5 seguirá reservada para su validación/formalización específica.

### 7.6 Backlog

No implementar:

- OAuth;
- roles;
- recuperación avanzada.

## i18n

Mantener ES / EN.

La estructura debe ser equivalente en:

- `/login`
- `/en/login/`

Añadir copy mediante las traducciones centralizadas.

No cerrar otras fases de internacionalización.

## Accesibilidad

Preservar:

- labels visibles;
- asociación `label` / `input`;
- errores accesibles;
- `aria-invalid` y `aria-describedby` cuando proceda;
- navegación por teclado;
- foco visible;
- targets táctiles;
- contraste;
- reduced-motion.

No deshabilitar controles de forma que el usuario pierda contexto durante un error.

## Seguridad mínima

No implementar seguridad ornamental.

Sí verificar los riesgos reales de 7.1:

- secretos fuera de Git;
- contraseñas nunca almacenadas en texto plano;
- cookies gestionadas por Better Auth;
- signup público rechazado;
- respuestas de error sin secretos;
- SQL generado revisado antes de migrar;
- no registrar passwords;
- no exponer DATABASE_URL o BETTER_AUTH_SECRET.

Usar defaults seguros de Better Auth salvo razón demostrada para cambiarlos.

No sustituir el password hashing de Better Auth por una implementación propia.

## Fuera de alcance

No realizar:

- logout UI;
- dashboard;
- perfil;
- rutas privadas;
- middleware global de autorización;
- roles;
- Admin plugin;
- OAuth;
- recuperación de contraseña;
- verificación de email;
- MFA;
- magic links;
- passkeys;
- registro público;
- Production;
- cambios Cloudflare;
- trabajo de FASE 6;
- nuevas capacidades de producto.

## Validación

Comprobar como mínimo:

- versiones instaladas y bloqueadas en package-lock;
- schema Better Auth revisado;
- migración Drizzle versionada y aplicada;
- tablas auth esperadas presentes;
- API Better Auth montada;
- `/login` devuelve 200;
- `/en/login/` devuelve 200;
- formulario accesible por teclado;
- credenciales inválidas son rechazadas;
- credenciales válidas autentican una cuenta Development real;
- signup público es rechazado;
- contraseña no aparece en DB en texto plano;
- secrets no aparecen en Git ni logs revisados;
- `/api/health` continúa en 200;
- `/` y `/en/` no sufren regresiones;
- `npm run check`;
- `npm run build`;
- `npm audit --omit=dev`;
- `git diff --check`;
- no hay cambios de Production.

## Criterio de cierre

FASE 7.1 pasa a `AWAITING_OWNER_REVIEW` únicamente cuando un usuario Development previamente aprovisionado pueda iniciar sesión realmente mediante correo + contraseña en ES y EN, un login incorrecto falle de forma segura, signup público esté bloqueado y la integración Better Auth + Drizzle + PostgreSQL esté migrada, reproducible y sin secretos versionados.

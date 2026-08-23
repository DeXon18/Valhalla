# CURRENT

Estado: `IN_PROGRESS`

## Tarea autorizada

FASE 6.1 — Landing pública de Valhalla.

## Resultado observable

La ruta pública principal deja de ser una muestra técnica de componentes y pasa a presentar Valhalla como producto mediante una landing clara, sobria y reconocible.

La landing debe comunicar:

- qué es Valhalla;
- para quién y para qué se está construyendo;
- su foco en entrenamiento de fuerza y progresión;
- su naturaleza self-hosted;
- que los datos permanecen bajo control del usuario;
- la dirección funcional del producto sin presentar funcionalidades futuras como ya disponibles.

## Baseline preservada

Se conserva:

- FASE 5 completa: `ACCEPTED_LOCKED`;
- servicio persistente de Development: `ACCEPTED_LOCKED`;
- Cloudflare Tunnel Development: `ACCEPTED_LOCKED`;
- `DESIGN.md`;
- sistema visual `Linear Calm`;
- componentes foundation existentes;
- accesibilidad foundation;
- reduced-motion;
- i18n ES / EN;
- SSR Astro;
- responsive foundation;
- PostgreSQL y arquitectura actual.

No rediseñar la foundation ni sustituir el sistema visual aprobado.

## Dirección de producto

Valhalla es un:

`Strength & Progression Tracker`

Producto self-hosted orientado al registro y seguimiento del entrenamiento de fuerza y su evolución.

La landing puede explicar la dirección futura del producto, pero debe distinguir claramente entre:

- lo que Valhalla es;
- lo que se está construyendo;
- lo que todavía no está disponible.

No presentar funcionalidades futuras como funcionalidades actualmente operativas.

## Arquitectura aprobada

La landing tendrá una estructura contenida.

### 1. Header

Mantener:

- marca Valhalla;
- navegación mínima;
- selector ES / EN.

No añadir navegación hacia páginas que todavía no existen.

### 2. Hero

Eyebrow:

`Strength & Progression Tracker`

Mensaje principal ES:

`Forja tu fuerza. Haz visible tu progreso.`

Descripción base ES:

`Valhalla es un tracker de entrenamiento de fuerza self-hosted, diseñado para convertir cada sesión en una historia clara de progreso.`

El hero debe:

- explicar el producto rápidamente;
- contener una única acción principal;
- poder incorporar una pieza visual original si aporta identidad;
- mantener la jerarquía antes que la decoración.

### 3. Qué es Valhalla

Mensaje conceptual:

`Tu entrenamiento. Tu progreso. Tus datos.`

Explicar de forma breve:

- entrenamiento de fuerza;
- progreso como eje del producto;
- self-hosted;
- datos bajo control del usuario.

No usar claims absolutos o no demostrables.

### 4. Qué estamos construyendo

Presentar como dirección del producto, no como funciones disponibles:

- rutinas y ejercicios;
- registro de sesiones e historial;
- progresión y métricas.

La redacción debe dejar inequívocamente claro que estas capacidades forman parte de lo que Valhalla está construyendo.

### 5. Cierre

Cerrar la landing con un mensaje breve de identidad y continuidad.

No implementar autenticación.

No crear un falso CTA de login.

El acceso real llegará en FASE 7.

## CTA

Durante FASE 6.1 la acción principal será interna a la landing.

Debe llevar a una sección informativa real de la misma página.

Ejemplos de intención válidos:

- `Descubrir Valhalla`;
- `Conocer Valhalla`.

No crear enlaces muertos.

No crear `/login`.

No adelantar Better Auth.

## Claims prohibidos

No utilizar por ahora expresiones absolutas como:

- `el diario de entrenamiento definitivo`;
- `sin límites`;
- `la mejor aplicación`;
- claims equivalentes que requieran evidencia inexistente.

La comunicación debe ser ambiciosa pero verificable.

## Recursos visuales

Gemini está autorizado a generar recursos visuales originales cuando aporten valor real a la landing.

Para FASE 6.1:

- preferir una sola pieza visual fuerte para el Hero;
- no añadir imágenes simplemente porque sea posible generarlas;
- el diseño debe seguir `DESIGN.md`;
- mantener `Linear Calm`;
- fitness moderno;
- fuerza sobria;
- identidad nórdica sutil.

Evitar:

- estética gamer;
- RPG;
- cyberpunk;
- neón;
- fuego;
- rayos;
- texturas pesadas;
- culturismo stock genérico;
- cascos vikingos usados como cliché;
- runas decorativas;
- símbolos históricos no investigados y validados.

Prohibido generar falsas capturas, dashboards, gráficas, datos, rutinas o pantallas de funcionalidades inexistentes.

La imagen no debe contener el copy principal de la landing. El contenido textual debe permanecer como HTML real.

Si se genera un asset:

- almacenarlo localmente en el proyecto;
- no depender de hotlinks externos;
- optimizarlo razonablemente para web;
- definir tratamiento accesible adecuado;
- utilizar `alt` si comunica información;
- tratarlo como decorativo si no aporta información necesaria.

Si ninguna imagen mejora realmente el resultado, la landing puede resolverse sin ella.

La generación de imágenes no amplía el scope.

## UI Foundation Demo

La home pública ya no debe renderizar `UiFoundationDemo`.

No eliminar todavía el componente ni otros elementos de foundation únicamente porque dejen de aparecer en `/`.

Su eliminación, si alguna vez procede, requiere justificación separada.

## Componentización

Crear únicamente los componentes necesarios para mantener la landing clara y mantenible.

No convertir cada bloque visual en una abstracción independiente sin necesidad.

Se permite un componente de landing compartido entre locales si reduce duplicación de forma natural.

## Idiomas

La arquitectura existente ES / EN debe seguir funcionando.

La estructura de la landing debe utilizar las traducciones centralizadas existentes y evitar strings funcionales importantes duplicadas entre páginas.

`/` y `/en/` no deben quedar rotos.

FASE 6.2 sigue reservada para la revisión específica de idiomas, equivalencia de contenido y calidad de localización.

Implementar el mínimo necesario en inglés para mantener la landing funcional no implica cerrar FASE 6.2.

## Responsive

Preservar la foundation responsive existente.

La landing no puede introducir overflow ni regresiones evidentes en móvil.

FASE 6.3 seguirá siendo la tarea específica de revisión y refinamiento responsive.

No intentar cerrar ahora todo el trabajo responsive futuro.

## Accesibilidad

Preservar los criterios ya aceptados:

- jerarquía semántica correcta;
- un único `h1`;
- navegación por teclado;
- foco visible;
- targets táctiles adecuados;
- contraste WCAG de la foundation;
- reduced-motion;
- imágenes con tratamiento accesible;
- significado no dependiente únicamente del color.

## Fuera de alcance

No realizar en FASE 6.1:

- autenticación;
- Better Auth;
- `/login`;
- registro de usuarios;
- dashboard;
- perfil;
- catálogo real de ejercicios;
- rutinas funcionales;
- sesiones de entrenamiento;
- historial real;
- métricas reales;
- gráficas reales;
- mockups falsos de esas funciones;
- nuevas páginas legales;
- manifiesto;
- About;
- Production;
- cambios Cloudflare;
- cambios PostgreSQL;
- nuevas dependencias salvo bloqueo técnico demostrado y autorizado.

## Validación

Comprobar como mínimo:

- `/` presenta la landing y no la muestra técnica;
- `/en/` continúa funcional;
- la estructura semántica es correcta;
- no existen enlaces muertos introducidos por la landing;
- no se afirma como disponible ninguna función futura;
- no se introduce `/login`;
- no hay overflow evidente a 360 CSS px;
- desktop mantiene una composición coherente;
- navegación por teclado y foco siguen funcionando;
- reduced-motion se preserva;
- cualquier imagen local está correctamente integrada;
- `npm run check`;
- `npm run build`;
- `npm audit --omit=dev`;
- `/api/health` continúa saludable;
- `git diff --check`;
- no hay cambios inesperados de dependencias.

## Criterio de cierre

FASE 6.1 pasa a `AWAITING_OWNER_REVIEW` únicamente cuando la home deje de ser una demo técnica y comunique Valhalla como producto de forma clara, honesta, coherente con `DESIGN.md` y sin adelantar funcionalidades de fases posteriores.

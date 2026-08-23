# CURRENT

Estado: `IN_PROGRESS`

## Tarea autorizada

FASE 4.4 — Internacionalización.

## Resultado observable

La misma UI base de Valhalla está disponible en español e inglés utilizando la internacionalización nativa de Astro, con rutas, traducciones y fallback explícitos.

## Scope incluido

- utilizar las capacidades i18n nativas de Astro;
- registrar centralmente los locales soportados;
- español como locale por defecto;
- inglés como segundo locale;
- español accesible sin prefijo:
  - `/`
- inglés accesible con prefijo:
  - `/en/`
- fallback explícito de inglés a español para rutas sin traducción;
- crear traducciones ES/EN para todo el texto visible de la muestra técnica;
- evitar strings funcionales importantes hardcodeadas en las páginas;
- utilizar claves semánticas estables;
- mantener una única implementación visual compartida entre idiomas;
- establecer correctamente el atributo `lang` del documento;
- añadir un selector ES/EN sin JavaScript;
- mantener la ruta equivalente cuando exista;
- preservar UI, Linear Calm y responsive aceptados.

## Estructura objetivo mínima

- `src/i18n/config.ts`
- `src/i18n/es.ts`
- `src/i18n/en.ts`
- componente compartido para la muestra UI;
- rutas Astro mínimas para `/` y `/en/`.

## Scope excluido

- paquetes i18n de terceros;
- detección automática del navegador;
- persistencia de la preferencia de idioma;
- localStorage o cookies;
- selector de idioma de perfil;
- más idiomas;
- traducciones de funcionalidades que todavía no existen;
- App Shell;
- persistencia;
- autenticación;
- cambios visuales;
- cambios responsive;
- Production.

## Criterio de aceptación

- `/` renderiza la muestra en español;
- `/en/` renderiza la misma muestra en inglés;
- ambas rutas utilizan la misma implementación visual compartida;
- `<html lang>` coincide con el idioma activo;
- existe un registro central de locales;
- existe fallback explícito a español;
- el selector permite cambiar entre ES y EN;
- no se duplica el markup completo para cada idioma;
- `npm run build` finaliza correctamente;
- la UI aceptada en FASE 4.2 y 4.3 no cambia materialmente.

## Estado previo

- FASE 4.1 — Bootstrap Astro: `ACCEPTED_LOCKED`.
- FASE 4.2 — UI base: `ACCEPTED_LOCKED`.
- FASE 4.3 — Responsive Foundation: `ACCEPTED_LOCKED`.

## Responsable principal

Gemini implementa CURRENT.

ChatGPT apoya en arquitectura i18n o bloqueos técnicos reales.

Oskar revisa que ES y EN sean funcionalmente equivalentes.

## Después de aceptar

Siguiente candidato: FASE 4.5 — Persistencia.

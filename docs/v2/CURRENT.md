# CURRENT

Estado: `AWAITING_OWNER_REVIEW`

## Tarea autorizada

FASE 4.1 — Bootstrap Astro.

## Resultado observable

Existe una primera aplicación Valhalla ejecutable en Development usando Astro SSR con adaptador Node y TypeScript estricto.

## Scope incluido

- inicializar el proyecto Astro en el repositorio existente;
- configurar modo SSR;
- usar `@astrojs/node`;
- configurar TypeScript strict;
- crear la estructura mínima necesaria bajo `src/`;
- definir scripts npm mínimos para desarrollo y build;
- generar y versionar `package-lock.json`;
- incluir una página mínima que permita comprobar que la aplicación arranca;
- validar que el proyecto puede ejecutarse y compilarse.

Las versiones exactas de Astro, `@astrojs/node` y dependencias deberán verificarse contra documentación oficial antes de instalarlas.

## Scope excluido

- Tailwind y sistema visual;
- diseño definitivo;
- responsive;
- internacionalización ES/EN;
- Drizzle o integración PostgreSQL;
- autenticación;
- App Shell completa;
- tests adicionales sin comportamiento que proteger;
- Production;
- Cloudflare;
- Skills o MCP sin necesidad concreta.

## Criterio de aceptación

- `npm install` produce dependencias reproducibles mediante `package-lock.json`;
- Astro está configurado como SSR con Node;
- TypeScript utiliza configuración estricta;
- la aplicación mínima arranca correctamente en Development;
- `npm run build` finaliza correctamente;
- no se ha incorporado funcionalidad perteneciente a fases posteriores.

## Estado previo

FASE 3 — Sistema de agentes base: `ACCEPTED_LOCKED`.

Las Skills e integraciones del catálogo permanecen diferidas y se crearán únicamente cuando una tarea real las necesite.

## Responsable principal

Gemini implementa CURRENT.

ChatGPT apoya en verificación técnica, arquitectura o bloqueos reales.

## Después de aceptar

Siguiente candidato: FASE 4.2 — UI base.

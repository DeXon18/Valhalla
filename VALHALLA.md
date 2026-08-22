========================================================================================
                       VALHALLA | STRENGTH & PROGRESSION TRACKER
                    «Forja tu fuerza. Domina cada levantamiento.»
       «El diario de entrenamiento definitivo: sin límites, sin suscripciones
                              y 100% bajo tu control.»
========================================================================================


VALHALLA_V2
│
│
├── 🧭 RUMBO.md [GOVERNANCE GLOBAL] [ Oskar ] [ ChatGpt ] [ Gemini ]
│   │
│   ├── Tipo:
│   │   └── contrato general de trabajo HUMANO + ASISTENTE
│   │
│   ├── Alcance:
│   │   ├── reutilizable en cualquier proyecto
│   │   ├── no contiene reglas específicas de Valhalla
│   │   └── se aplica antes de interpretar el trabajo del proyecto
│   │
│   ├── Objetivo:
│   │   ├── mantener el rumbo acordado
│   │   ├── impedir scope creep accidental
│   │   ├── guardar ideas sin implementarlas automáticamente
│   │   ├── evitar sobreingeniería
│   │   ├── evitar sobretesting
│   │   ├── mantener complejidad proporcional al problema real
│   │   ├── proteger cambios de riesgo
│   │   └── permitir replanificar cuando sea una decisión consciente
│   │
│   ├── Principios:
│   │   ├── IDEA ≠ TAREA
│   │   ├── BACKLOG ≠ AUTORIZACIÓN
│   │   ├── MAPA ≠ SCOPE
│   │   ├── DISPONIBLE ≠ NECESARIO
│   │   ├── REFERENCIADO ≠ INSTALADO
│   │   ├── INSTALADO ≠ USAR SIEMPRE
│   │   ├── POSIBLE PROBLEMA FUTURO ≠ TRABAJO ACTUAL
│   │   ├── TEST POSIBLE ≠ TEST NECESARIO
│   │   └── COMPLEJIDAD DEBE GANARSE
│   │
│   ├── Regla de idea nueva:
│   │   │
│   │   └── IDEA
│   │       ↓
│   │      ¿aporta valor?
│   │       ├── NO → descartar
│   │       └── SÍ → BACKLOG
│   │                  ↓
│   │              continuar CURRENT
│   │
│   ├── Una idea solo altera CURRENT si:
│   │   ├── descubre que el plan actual es incorrecto
│   │   ├── evita un riesgo importante inmediato
│   │   └── propietario ordena explícitamente REPLANIFICAR
│   │
│   ├── Comandos humanos:
│   │   │
│   │   ├── «Aplica RUMBO»
│   │   │   └── activa explícitamente el contrato de trabajo
│   │   │
│   │   ├── «RUMBO»
│   │   │   └── detener deriva y revisar scope, tooling,
│   │   │       testing, complejidad y objetivo actual
│   │   │
│   │   └── «REPLANIFICAMOS»
│   │       └── autoriza revisar conscientemente el plan vigente
│   │
│   ├── Regla de testing:
│   │   ├── probar problemas reales o razonablemente plausibles
│   │   ├── no construir suites para escenarios inexistentes
│   │   ├── no perseguir cobertura por cobertura
│   │   ├── bug real puede ganarse un test de regresión
│   │   └── seguridad/testing proporcional al riesgo
│   │
│   ├── Regla de las dos sesiones:
│   │   └── dos sesiones consecutivas sin mejora visible/utilizable
│   │       → revisar alcance antes de abrir una tercera igual
│   │
│   ├── Límite de correcciones:
│   │   └── 4 intentos correctivos fallidos sobre el mismo bloqueo
│   │       → STOP + handoff
│   │
│   └── Regla final:
│       └── No construir de más.
│           No probar de más.
│           No cambiar de rumbo por impulso.
│           Tampoco construir mal.
│
│
├── ⚡ 0. PLATAFORMA_Y_ENTORNO [PLATFORM] [ Oskar ] [ ChatGpt ] [ Gemini ]
│   │
│   ├── 0.0 REGLA_DE_INTERPRETACIÓN
│   │   ├── este bloque define arquitectura objetivo
│   │   ├── NO implica instalar todo durante bootstrap
│   │   └── RUMBO + CURRENT determinan qué se implementa realmente
│   │
│   ├── 📦 0.1 APLICACIÓN
│   │   ├── Nombre: Valhalla
│   │   ├── Producto:
│   │   │   └── Strength & Progression Tracker
│   │   ├── Versión inicial:
│   │   │   └── 0.1.0
│   │   ├── Tipo:
│   │   │   └── aplicación web SSR responsive
│   │   ├── Mobile-first: SÍ
│   │   ├── Desktop first-class: SÍ
│   │   ├── Multi-idioma desde el inicio: SÍ
│   │   ├── Self-hosted: SÍ
│   │   └── Descripción:
│   │       └── Aplicación para registrar entrenamiento de fuerza,
│   │           rutinas, ejercicios, progresión, historial,
│   │           métricas corporales y evolución.
│   │
│   ├── 🌐 0.2 FRONTEND_Y_SSR
│   │   │
│   │   ├── Astro
│   │   │   ├── Baseline objetivo inicial: 7.2.4
│   │   │   ├── Verificación:
│   │   │   │   └── confirmar compatibilidad antes del bootstrap
│   │   │   └── Descripción:
│   │   │       └── Framework principal para páginas, SSR,
│   │   │           componentes y endpoints.
│   │   │
│   │   ├── @astrojs/node
│   │   │   ├── Baseline objetivo inicial: 11.1.4
│   │   │   └── Descripción:
│   │   │       └── Ejecuta Astro como servidor Node persistente.
│   │   │
│   │   ├── Node.js
│   │   │   ├── Requisito:
│   │   │   │   └── LTS compatible con stack y >=22.18.0
│   │   │   ├── Versión exacta:
│   │   │   │   └── verificar y fijar durante bootstrap
│   │   │   └── Descripción:
│   │   │       └── Runtime de aplicación y herramientas.
│   │   │
│   │   ├── TypeScript
│   │   │   ├── Configuración:
│   │   │   │   └── strict
│   │   │   └── Descripción:
│   │   │       └── Tipado estático para contratos, datos y lógica.
│   │   │
│   │   └── package-lock.json
│   │       ├── Obligatorio: SÍ
│   │       └── Descripción:
│   │           └── Hace reproducibles Development, CI y Production.
│   │
│   ├── 🎨 0.3 UI
│   │   ├── Tailwind CSS
│   │   │   ├── Baseline objetivo inicial: 4.3.3
│   │   │   └── Descripción:
│   │   │       └── Sistema principal de estilos y responsive.
│   │   └── @tailwindcss/vite
│   │       ├── Baseline objetivo inicial: 4.3.3
│   │       └── Descripción:
│   │           └── Integración de Tailwind con Astro/Vite.
│   │
│   ├── 🗄️ 0.4 PERSISTENCIA
│   │   │
│   │   ├── PostgreSQL
│   │   │   ├── Tipo:
│   │   │   │   └── instalación nativa en LXC
│   │   │   ├── Uso:
│   │   │   │   └── exclusivo Valhalla
│   │   │   ├── Development:
│   │   │   │   └── valhalla_dev
│   │   │   ├── Production:
│   │   │   │   └── valhalla_prod
│   │   │   ├── Versión:
│   │   │   │   └── estable compatible, verificar y fijar durante bootstrap
│   │   │   └── Descripción:
│   │   │       └── Persistencia relacional de cuentas, rutinas,
│   │   │           sesiones, métricas e historial.
│   │   │
│   │   ├── Drizzle ORM
│   │   │   ├── Baseline objetivo inicial: 0.45.2
│   │   │   ├── GitHub:
│   │   │   │   └── https://github.com/drizzle-team/drizzle-orm
│   │   │   └── Descripción:
│   │   │       └── Acceso tipado a PostgreSQL.
│   │   │
│   │   ├── drizzle-kit
│   │   │   ├── Baseline objetivo inicial: 0.31.10
│   │   │   └── Descripción:
│   │   │       └── Gestión de migraciones.
│   │   │
│   │   └── pg
│   │       ├── Baseline objetivo inicial: 8.23.0
│   │       └── Descripción:
│   │           └── Driver PostgreSQL de Node.
│   │
│   ├── 🔐 0.5 AUTENTICACIÓN
│   │   ├── Better Auth
│   │   │   ├── Baseline objetivo inicial: 1.7.1
│   │   │   ├── GitHub:
│   │   │   │   └── https://github.com/better-auth/better-auth
│   │   │   └── Descripción:
│   │   │       └── Credenciales y sesiones.
│   │   └── Adaptación Drizzle
│   │       └── Descripción:
│   │           └── Persistencia de autenticación en PostgreSQL.
│   │
│   ├── 🧪 0.6 EJECUCIÓN_DE_TESTS
│   │   ├── tsx
│   │   │   ├── Baseline objetivo inicial: 4.19.3
│   │   │   └── Descripción:
│   │   │       └── Ejecuta scripts/tests TypeScript.
│   │   └── RUMBO:
│   │       └── no construir una suite extensa antes de que
│   │           existan comportamientos que merezcan protegerse
│   │
│   ├── 📱 0.7 RESPONSIVE
│   │   ├── Móvil [PRIMARY PRIORITY]
│   │   │   ├── 360 px
│   │   │   ├── 390 px
│   │   │   ├── 430 px
│   │   │   └── Optimizado para uso real durante entrenamiento.
│   │   ├── Tablet
│   │   │   └── Adaptación fluida intermedia.
│   │   └── Desktop [FIRST-CLASS]
│   │       ├── 1280 px
│   │       ├── 1440 px
│   │       └── Mayor densidad/columnas cuando aporten valor.
│   │
│   ├── 🌍 0.8 INTERNACIONALIZACIÓN [CORE]
│   │   │
│   │   ├── Base:
│   │   │   ├── i18n desde la primera interfaz
│   │   │   ├── evitar strings funcionales importantes hardcodeadas
│   │   │   ├── claves semánticas estables
│   │   │   ├── registro central de locales
│   │   │   ├── fallback explícito
│   │   │   └── misma aplicación para todos los idiomas
│   │   │
│   │   ├── Español
│   │   │   ├── locale: es
│   │   │   ├── ruta: /
│   │   │   └── fallback inicial
│   │   │
│   │   ├── Inglés
│   │   │   ├── locale: en
│   │   │   └── ruta: /en/...
│   │   │
│   │   ├── Idiomas futuros
│   │   │   └── registrar locale + traducciones + validación visual
│   │   │
│   │   ├── Estructura conceptual:
│   │   │   ├── src/i18n/config.ts
│   │   │   ├── src/i18n/es.ts
│   │   │   ├── src/i18n/en.ts
│   │   │   └── src/i18n/<locale>.ts
│   │   │
│   │   ├── Selector de idioma
│   │   │   └── mantiene la ruta equivalente cuando sea posible
│   │   │
│   │   └── Detección navegador
│   │       └── puede sugerir; nunca anula la elección del usuario
│   │
│   ├── 🏠 0.9 ENTRENAMIENTO_EN_CASA [PRODUCT CAPABILITY]
│   │   ├── Peso corporal
│   │   │   └── utiliza clasificación del dataset
│   │   ├── Sin material estricto [RESEARCH]
│   │   │   └── subconjunto curado; Body Weight no equivale
│   │   │       automáticamente a cero equipamiento
│   │   ├── Contexto Casa [LATER]
│   │   │   └── facilita descubrir rutinas adecuadas al entorno
│   │   └── Descripción:
│   │       └── El mismo motor de entrenamiento puede utilizarse
│   │           tanto en gimnasio como en casa.
│   │
│   └── 📲 0.10 CAPACIDADES_FUTURAS
│       ├── PWA
│       │   └── implementación canónica → SECCIÓN 17
│       ├── Offline
│       │   └── problema diferente de instalación PWA
│       └── Regla RUMBO:
│           └── estar en el mapa no autoriza implementarlo ahora
│
│
├── 🖥️ 1. INFRAESTRUCTURA [TARGET SERVER] [ Oskar ] [ ChatGpt ] [ Gemini ]
│   │
│   ├── 1.1 SERVIDOR
│   │   ├── Tipo:
│   │   │   └── LXC dedicado
│   │   ├── Host:
│   │   │   └── Proxmox
│   │   ├── Hostname:
│   │   │   └── srv-valhalla
│   │   ├── IP:
│   │   │   └── 192.168.50.62
│   │   ├── OS:
│   │   │   └── Debian 13
│   │   └── Usuario:
│   │       └── gemini
│   │
│   ├── 1.2 ACCESO
│   │   ├── SSH
│   │   └── gemini@192.168.50.62
│   │
│   ├── 1.3 PRINCIPIO_DE_EJECUCIÓN
│   │   ├── cliente:
│   │   │   └── IDE / Antigravity / navegador
│   │   └── servidor:
│   │       └── Git, npm, DB, builds y runtime
│   │
│   ├── 1.4 ENTORNOS
│   │   │
│   │   ├── Development
│   │   │   ├── workspace:
│   │   │   │   └── /opt/web-projects/Valhalla/development
│   │   │   ├── branch:
│   │   │   │   └── develop
│   │   │   └── uso:
│   │   │       └── integración + owner review
│   │   │
│   │   └── Production [TARGET / DEFERRED]
│   │       ├── workspace:
│   │       │   └── /opt/web-projects/Valhalla/production
│   │       ├── branch:
│   │       │   └── main
│   │       ├── uso:
│   │       │   └── únicamente releases aceptadas
│   │       └── RUMBO:
│   │           └── arquitectura definida no significa que
│   │               haya que configurarla antes de necesitarla
│   │
│   ├── 1.5 WORKTREES [TARGET]
│   │   ├── repositorio único
│   │   ├── development → develop
│   │   ├── production → main
│   │   └── objetivo:
│   │       └── impedir confundir ramas/entornos
│   │
│   ├── 🧪 1.6 DEVELOPMENT
│   │   ├── DB:
│   │   │   └── valhalla_dev
│   │   ├── listener:
│   │   │   └── 127.0.0.1:4321
│   │   ├── servicio:
│   │   │   └── valhalla-dev.service
│   │   ├── URL:
│   │   │   └── https://dev-valha.dxpro.es
│   │   └── regla:
│   │       └── ejecutar únicamente código publicado/integrado
│   │           conforme al flujo GitHub
│   │
│   ├── 🚀 1.7 PRODUCTION [DEFERRED UNTIL AUTHORIZED]
│   │   ├── DB:
│   │   │   └── valhalla_prod
│   │   ├── listener propuesto:
│   │   │   └── 127.0.0.1:4322
│   │   ├── servicio:
│   │   │   └── valhalla-prod.service
│   │   ├── URL:
│   │   │   └── https://valha.dxpro.es
│   │   ├── runtime:
│   │   │   └── independiente de Development
│   │   └── regla:
│   │       └── únicamente commit/tag exacto autorizado
│   │
│   ├── ☁️ 1.8 CLOUDFLARE [WHEN NEEDED]
│   │   ├── Development
│   │   │   └── dev-valha.dxpro.es → 127.0.0.1:4321
│   │   └── Production
│   │       └── valha.dxpro.es → 127.0.0.1:4322
│   │
│   ├── 🔐 1.9 SECRETOS
│   │   ├── .env.example:
│   │   │   └── nombres, nunca valores reales
│   │   ├── Development:
│   │   │   └── secretos propios
│   │   ├── Production:
│   │   │   └── secretos propios
│   │   └── nunca:
│   │       └── credenciales en Git
│   │
│   ├── 🧭 1.9.1 DATOS_OPERATIVOS_AÑADIDOS
│   │   ├── IP/CIDR:
│   │   │   └── 192.168.50.62/24
│   │   ├── Proyecto:
│   │   │   └── Valhalla
│   │   ├── Ruta proyecto:
│   │   │   └── /opt/web-projects/Valhalla
│   │   ├── Ruta Docker [IF USED]:
│   │   │   └── /var/lib/Docker
│   │   ├── Ruta containerd [IF USED]:
│   │   │   └── /var/lib/containerd
│   │   └── SSH:
│   │       └── ssh gemini@192.168.50.62
│   │
│   └── 💾 1.10 BACKUPS
│       ├── Código:
│       │   └── GitHub + commits + tags
│       ├── Development DB:
│       │   └── backup cuando exista riesgo real
│       ├── Production DB:
│       │   └── obligatorio antes de cambios que puedan alterar datos/schema
│       ├── Snapshot LXC:
│       │   └── solo para cambios de infraestructura de riesgo elevado
│       └── Restore:
│           └── debe existir procedimiento verificable cuando el backup importe
│
│
├── 🐙 2. GITHUB_Y_CONTROL_DE_VERSIONES [SOURCE OF TRUTH] [ Oskar ] [ ChatGpt ] [ Gemini ]
│   │
│   ├── 2.1 PRINCIPIO
│   │   ├── GitHub = fuente de verdad del código
│   │   ├── integración mediante GitHub
│   │   ├── no parches directos Production
│   │   └── Git protege el producto; no debe convertirse en protagonista
│   │
│   ├── 2.2 REPOSITORIO
│   │   ├── Owner:
│   │   │   └── DeXon18
│   │   ├── develop
│   │   │   ├── git config user.name "DeXon"
│   │   │   └── git config user.email "DeXon18@gmail.com"
│   │   ├── Repo:
│   │   │   └── Valhalla
│   │   ├── Visibilidad:
│   │   │   └── privado
│   │   ├── Acceso:
│   │   │   └── SSH
│   │   └── Remote:
│   │       └── git@github-valhalla:DeXon18/Valhalla.git
│   │
│   ├── 2.3 RAMAS_PERMANENTES
│   │   ├── develop
│   │   │   └── estado integrado de Development
│   │   └── main
│   │       └── estado exacto de Production
│   │
│   ├── 2.4 RAMAS_TEMPORALES
│   │   ├── feature/<section>-<task>
│   │   ├── fix/<section>-<bug>
│   │   ├── regression/<section>-<bug>
│   │   ├── docs/<change>
│   │   └── release/<version> [ONLY IF JUSTIFIED]
│   │
│   ├── 2.5 PROTECCIÓN
│   │   ├── develop
│   │   │   ├── PR
│   │   │   ├── checks mínimos
│   │   │   └── sin force push
│   │   └── main
│   │       ├── PR
│   │       ├── checks
│   │       ├── autorización owner
│   │       └── sin force push
│   │
│   ├── 2.6 MERGE
│   │   ├── feature/fix → develop
│   │   │   └── squash recomendado
│   │   ├── develop → main
│   │   │   └── PR explícita de release
│   │   └── no usar merge local para saltarse GitHub
│   │
│   ├── 2.7 COMMITS
│   │   ├── pequeños
│   │   ├── coherentes
│   │   ├── staging selectivo
│   │   ├── mensaje descriptivo
│   │   └── evitar git add . automático
│   │
│   ├── 2.8 PULL_REQUEST
│   │   ├── objetivo
│   │   ├── scope incluido
│   │   ├── scope excluido
│   │   ├── validaciones
│   │   ├── riesgos reales
│   │   ├── migraciones si existen
│   │   └── referencia CURRENT
│   │
│   ├── 2.9 CI [MINIMAL / EARNED COMPLEXITY]
│   │   ├── npm ci
│   │   ├── tests pertinentes
│   │   ├── typecheck
│   │   ├── build
│   │   ├── i18n cuando aplique
│   │   └── Regla RUMBO:
│   │       └── no añadir checks simplemente porque puedan existir
│   │
│   ├── 2.10 VERSIONADO
│   │   ├── SemVer
│   │   ├── v0.x.x durante evolución inicial
│   │   └── Production → tag único
│   │
│   ├── 2.11 GITHUB_RELEASES [PRODUCTION]
│   │   ├── versión
│   │   ├── tag
│   │   ├── commit
│   │   ├── cambios
│   │   └── PR
│   │
│   ├── 2.12 ENVIRONMENTS
│   │   ├── Development
│   │   └── Production [WHEN IT EXISTS]
│   │
│   ├── 2.13 REGISTRO_DEPLOYMENTS
│   │   ├── GitHub:
│   │   │   └── fuente operacional
│   │   └── docs/v2/DEPLOYMENTS.md:
│   │       └── mirror humano cuando exista información útil que conservar
│   │
│   └── 2.14 PROHIBICIONES
│       ├── direct push main
│       ├── force push
│       ├── deploy desde working tree sucio
│       ├── Production de commit local no publicado
│       ├── ignorar CI rojo relevante
│       └── patch directo Production
│
│
├── 🤖 3. SISTEMA_DE_AGENTES [AGENT SYSTEM] [ Oskar ] [ ChatGpt ] [ Gemini ]
│   │
│   ├── 3.0 PRINCIPIO_RUMBO
│   │   ├── árbol = catálogo, no obligación de crear cada archivo ahora
│   │   ├── rules/workflows/skills se generan cuando aporten valor
│   │   ├── no construir un framework de agentes antes de necesitarlo
│   │   ├── Identificar roles y responsabilidades.
│   │   └── RUMBO.md se referencia; no se duplica
│   │
│   ├── 3.0.1 ROLES_Y_RESPONSABILIDADES
│   │   │
│   │   ├── PROPIETARIO [ Oskar ]
│   │   │   ├── decide producto y prioridades
│   │   │   ├── autoriza CURRENT
│   │   │   ├── acepta/rechaza resultados
│   │   │   └── autoriza REPLANIFICAR
│   │   │
│   │   ├── CHATGPT [ ChatGpt ]
│   │   │   ├── realiza instalación y puesta a punto del servidor
│   │   │   ├── prepara entorno, workspace y herramientas necesarias
│   │   │   ├── asesor estratégico y técnico del propietario
│   │   │   ├── apoya a Gemini cuando existan dudas reales
│   │   │   ├── ayuda a analizar rumbo, scope, CURRENT y decisiones técnicas
│   │   │   ├── detecta riesgos, contradicciones y sobreingeniería
│   │   │   ├── investiga/verifica información cuando haga falta
│   │   │   ├── revisa propuestas, bloqueos o resultados cuando se le consulte
│   │   │   └── NO instala, configura ni desarrolla Valhalla por defecto
│   │   │
│   │   └── ANTIGRAVITY / GEMINI [ Gemini ]
│   │       ├── agente principal de ejecución e implementación
│   │       ├── crea y mantiene la estructura operativa del proyecto
│   │       ├── desarrolla CURRENT y el producto Valhalla
│   │       ├── opera el workspace y servidor
│   │       ├── ejecuta Git, npm, builds y tests pertinentes
│   │       ├── crea ramas/commits/PR según flujo
│   │       ├── despliega Development cuando corresponda
│   │       ├── informa del resultado al propietario
│   │       ├── consulta al propietario y usa apoyo de ChatGPT si existe una duda real
│   │       └── NO amplía scope ni decide producto por su cuenta
│   │
│   ├── 📂 3.1 ESTRUCTURA_RAÍZ [ ChatGpt ] [ Gemini ]
│   │   │
│   │   ├── RUMBO.md
│   │   │   └── disciplina general HUMANO + ASISTENTE
│   │   │
│   │   ├── AGENTS.md
│   │   │   ├── contrato específico Valhalla
│   │   │   └── debe ordenar:
│   │   │       ├── leer RUMBO.md
│   │   │       ├── respetar CURRENT
│   │   │       ├── no convertir BACKLOG en scope
│   │   │       └── usar complejidad proporcional
│   │   │
│   │   ├── GEMINI.md
│   │   │   └── instrucciones específicas Antigravity el es quien pilotara el proyecto
│   │   │
│   │   ├── PRODUCT.md
│   │   │   └── identidad estable de Valhalla
│   │   │
│   │   ├── DESIGN.md
│   │   │   └── identidad visual y UX
│   │   │
│   │   ├── docs/v2/
│   │   │   ├── PRODUCT.md
│   │   │   │   └── mapa de producto
│   │   │   ├── SECTIONS.md
│   │   │   │   └── estado/baseline de secciones
│   │   │   ├── CURRENT.md
│   │   │   │   └── ÚNICA tarea autorizada
│   │   │   ├── BACKLOG.md
│   │   │   │   └── ideas guardadas; no scope
│   │   │   └── DEPLOYMENTS.md
│   │   │       └── historial útil cuando exista
│   │   │
│   │   └── .agents/
│   │       ├── rules/
│   │       │   └── reglas específicas del workspace que realmente se necesiten
│   │       ├── skills/
│   │       │   └── skills instaladas/propias necesarias
│   │       ├── workflows/
│   │       │   └── procedimientos operativos necesarios
│   │       └── integrations/
│   │           └── definición portable de integraciones
│   │
│   ├── 📏 3.2 RULES [OWN CATALOG / GENERATE AS NEEDED] [ ChatGpt ] [ Gemini ]
│   │   ├── project.md
│   │   │   └── producto primero + una tarea activa
│   │   ├── execution-environment.md
│   │   │   └── servidor/workspace correctos
│   │   ├── github-source-of-truth.md
│   │   │   └── GitHub antes de integrar/desplegar
│   │   ├── section-scope.md
│   │   │   └── CURRENT limita scope
│   │   ├── accepted-locked.md
│   │   │   └── protege comportamiento aceptado
│   │   ├── git-checkpoint.md
│   │   │   └── staging/commit/push controlados
│   │   ├── task-completion.md
│   │   │   └── definición de cierre
│   │   ├── decision-evidence.md
│   │   │   └── verificar hechos de impacto
│   │   ├── responsive-ux.md
│   │   │   └── móvil + desktop
│   │   ├── accessibility.md
│   │   │   └── accesibilidad transversal
│   │   ├── destructive-actions.md
│   │   │   └── confirmación/undo proporcional
│   │   ├── no-opportunistic-refactor.md
│   │   │   └── no refactor fuera de CURRENT
│   │   ├── idea-proposal.md
│   │   │   └── analizar una idea sin implementarla
│   │   ├── idea-register.md
│   │   │   └── guardar idea útil
│   │   ├── idea-apply.md
│   │   │   └── activar únicamente con autorización
│   │   ├── mcp-safety.md
│   │   │   └── permisos mínimos en integraciones
│   │   └── production-safety.md
│   │       └── backup/checks/rollback proporcional al riesgo
│   │
│   ├── 🔄 3.3 WORKFLOWS [OWN CATALOG / GENERATE AS NEEDED] [ ChatGpt ] [ Gemini ]
│   │   ├── start-session.md
│   │   │   └── RUMBO → CURRENT → entorno → tarea
│   │   ├── submit-change.md
│   │   │   └── validar → commit → push → PR
│   │   ├── deploy-development.md
│   │   │   └── desplegar commit integrado
│   │   ├── end-session.md
│   │   │   └── review técnico → Development → owner review → STOP
│   │   ├── owner-review.md
│   │   │   └── presentar qué probar
│   │   ├── accept-section.md
│   │   │   └── baseline + ACCEPTED_LOCKED
│   │   ├── fix-regression.md
│   │   │   └── restaurar comportamiento aceptado
│   │   ├── blocked-handoff.md
│   │   │   └── handoff tras bloqueo real/4 correcciones fallidas
│   │   ├── resume-blocked.md
│   │   │   └── continuar sin repetir hipótesis descartadas
│   │   ├── capture-idea.md
│   │   │   └── IDEA → BACKLOG → volver a CURRENT
│   │   ├── activate-idea.md
│   │   │   └── autorización → CURRENT
│   │   ├── promote-production.md
│   │   │   └── release autorizada
│   │   └── rollback-production.md
│   │       └── volver a release estable
│   │
│   ├── 🧩 3.4 SKILLS_DE_STACK [ ChatGpt ] [ Gemini ]
│   │   │
│   │   ├── drizzle-postgres [OWN / GENERATE WHEN USED]
│   │   │   ├── referencia upstream:
│   │   │   │   └── https://github.com/drizzle-team/drizzle-orm
│   │   │   └── convenciones Valhalla para schema/query/migración
│   │   │
│   │   ├── better-auth [OWN / GENERATE WHEN USED]
│   │   │   ├── referencia upstream:
│   │   │   │   └── https://github.com/better-auth/better-auth
│   │   │   └── convenciones auth/session/rutas privadas
│   │   │
│   │   ├── fitness-math [OWN / GENERATE WHEN USED]
│   │   │   ├── referencia externa:
│   │   │   │   └── no localizada
│   │   │   └── fórmulas deportivas centralizadas
│   │   │
│   │   └── Astro
│   │       ├── usar documentación oficial
│   │       ├── skill externa solo si aporta valor real y se verifica
│   │       └── i18n basado en capacidades actuales de Astro,
│   │           no en una skill/package de terceros asumido
│   │
│   ├── 🎨 3.5 UI_Y_COMPRENSIÓN [ Oskar ] [ Gemini ]
│   │   │
│   │   ├── Impeccable [PRIMARY UI]
│   │   │   ├── shape
│   │   │   ├── adapt
│   │   │   ├── critique
│   │   │   ├── audit
│   │   │   ├── polish
│   │   │   ├── GitHub:
│   │   │   │   └── https://github.com/pbakaus/impeccable
│   │   │   └── usar cuando exista una decisión UI real
│   │   │
│   │   ├── Graphify [ON-DEMAND]
│   │   │   ├── relaciones/impacto/codebase
│   │   │   ├── pin por tag/commit verificado
│   │   │   ├── GitHub:
│   │   │   │   └── https://github.com/Graphify-Labs/graphify
│   │   │   └── no utilizar por rutina en un codebase trivial
│   │   │
│   │   ├── valhalla-ui-workflow [OWN / GENERATE WHEN NEEDED]
│   │   │   ├── origen:
│   │   │   │   └── interna Valhalla
│   │   │   └── CURRENT → DESIGN → Impeccable sin ampliar scope
│   │   │
│   │   ├── Amicro [DEFERRED REFERENCE]
│   │   │   ├── inspiración para microinteracciones
│   │   │   ├── GitHub:
│   │   │   │   └── https://github.com/Subhan-code/Amicro--Micro-transitions-
│   │   │   └── no añadir React/Motion solo para usarlo
│   │   │
│   │   └── UI-UX Pro Max [SECONDARY REFERENCE]
│   │       ├── GitHub:
│   │       │   └── https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
│   │       └── usar solo cuando las fuentes principales no resuelvan la decisión
│   │
│   ├── 🧑‍💻 3.6 ADDY_OSMANI_AGENT_SKILLS [ONLY 5] [ ChatGpt ] [ Gemini ]
│   │   ├── GitHub:
│   │   │   └── https://github.com/addyosmani/agent-skills
│   │   ├── source-driven-development
│   │   │   └── verificar fuentes/APIs cambiantes
│   │   ├── test-driven-development
│   │   │   └── usar tests donde el comportamiento merezca protección
│   │   ├── api-and-interface-design
│   │   │   └── contratos claros
│   │   ├── security-and-hardening
│   │   │   └── seguridad proporcional al riesgo
│   │   └── code-review-and-quality
│   │       └── revisión final pertinente
│   │
│   ├── 🧹 3.7 NO_MISTAKES [OPTIONAL] [ ChatGpt ] [ Gemini ]
│   │   ├── release
│   │   ├── cambios de riesgo
│   │   ├── Production
│   │   ├── GitHub:
│   │   │   └── https://github.com/kunchenguid/no-mistakes
│   │   └── NO obligatorio en cada tarea Development
│   │
│   ├── 🧩 3.8 BRIDGE_SKILLS [OWN / ONLY IF THEY ADD VALUE] [ ChatGpt ] [ Gemini ]
│   │   ├── start-session
│   │   ├── submit-change
│   │   ├── deploy-development
│   │   ├── end-session
│   │   ├── owner-review
│   │   ├── accept-section
│   │   ├── fix-regression
│   │   ├── blocked-handoff
│   │   ├── resume-blocked
│   │   ├── capture-idea
│   │   ├── activate-idea
│   │   ├── promote-production
│   │   └── rollback-production
│   │
│   ├── 🔌 3.9 MCP_E_INTEGRACIONES [ ChatGpt ] [ Gemini ]
│   │   │
│   │   ├── Principio RUMBO:
│   │   │   ├── no instalar MCP por colección
│   │   │   ├── configurarlos cuando una tarea real los necesite
│   │   │   └── permisos mínimos
│   │   │
│   │   ├── Configuración local Antigravity:
│   │   │   └── ~/.gemini/config/mcp_config.json
│   │   │
│   │   ├── Portabilidad multi-equipo [ON-DEMAND]
│   │   │   └── .agents/integrations/mcp/
│   │   │       ├── README.md
│   │   │       ├── mcp_config.template.json
│   │   │       ├── github-mcp.md
│   │   │       ├── playwright-mcp.md
│   │   │       └── cloudflare-mcp.md
│   │   │
│   │   ├── Bootstrap multi-equipo [GENERATE WHEN NEEDED]
│   │   │   ├── scripts/setup-antigravity-mcp
│   │   │   └── scripts/check-antigravity-mcp
│   │   │
│   │   ├── GitHub MCP [CORE WHEN WORKING WITH GITHUB]
│   │   │   ├── repo
│   │   │   ├── PR
│   │   │   ├── Actions
│   │   │   ├── commits
│   │   │   └── releases
│   │   │
│   │   ├── Playwright MCP [WHEN THERE IS UI TO VALIDATE]
│   │   │   ├── navegación
│   │   │   ├── formularios
│   │   │   ├── smoke
│   │   │   ├── responsive
│   │   │   └── accessibility tree
│   │   │
│   │   ├── Cloudflare MCP [CONDITIONAL]
│   │   │   ├── DNS
│   │   │   ├── Tunnel
│   │   │   ├── diagnóstico
│   │   │   └── escritura únicamente con autorización de infraestructura
│   │   │
│   │   └── NO INCLUIR DE INICIO
│   │       ├── PostgreSQL MCP
│   │       ├── Filesystem MCP
│   │       ├── Shell MCP genérico
│   │       └── n8n MCP
│   │
│   └── 3.10 PLUGINS [ ChatGpt ] [ Gemini ]
│       ├── obligatorios inicialmente:
│       │   └── ninguno
│       └── regla:
│           └── instalar únicamente para resolver un problema concreto
│
│
├── 🎨 4. IDENTIDAD_DISEÑO_Y_UX [DESIGN SUPPORT] [ Oskar ] [ Gemini ]
│   │
│   ├── 4.1 CONCEPTO
│   │   └── fitness moderno + identidad vikinga sutil
│   │
│   ├── 4.2 PERSONALIDAD
│   │   ├── fuerte
│   │   ├── sobria
│   │   ├── limpia
│   │   ├── moderna
│   │   ├── épica con moderación
│   │   └── accesible para principiantes
│   │
│   ├── 4.3 PALETA
│   │   ├── negro / AMOLED
│   │   ├── gris piedra
│   │   ├── marrón oscuro
│   │   ├── dorado
│   │   └── rojo controlado
│   │
│   ├── 4.4 TIPOGRAFÍA
│   │   ├── títulos robustos
│   │   └── cuerpo/UI altamente legible
│   │
│   ├── 4.5 IDENTIDAD NÓRDICA
│   │   ├── escudos discretos
│   │   ├── emblemas
│   │   ├── geometría nórdica
│   │   ├── piedra/metal sutil
│   │   └── símbolos históricos solo tras investigar significado
│   │
│   ├── 4.6 PROHIBICIONES
│   │   ├── no rune clutter
│   │   ├── no RPG
│   │   ├── no texturas pesadas
│   │   ├── no todos los botones como escudos
│   │   └── no sacrificar usabilidad por temática
│   │
│   ├── 4.7 LENGUAJE DE MARCA
│   │   ├── Conquistas
│   │   ├── Tu Saga
│   │   ├── La Carga de tu Saga
│   │   └── Peso conquistado
│   │
│   ├── 4.8 MOTION
│   │   ├── breve
│   │   ├── funcional
│   │   └── reduced-motion
│   │
│   ├── 4.9 ACCESIBILIDAD [CORE]
│   │   ├── contraste
│   │   ├── targets táctiles
│   │   ├── labels
│   │   ├── teclado
│   │   ├── focus
│   │   ├── no depender solo de color
│   │   └── texto legible
│   │
│   └── 4.10 ACCIONES_DESTRUCTIVAS
│       ├── undo si resulta natural
│       ├── confirmación si el daño es importante
│       └── evitar pérdida por toque accidental
│
│
├── 🧱 5. BASE_TÉCNICA_Y_APP_SHELL [SECTION] [ Oskar ] [ Gemini ]
│   │
│   ├── Estado:
│   │   └── NOT_STARTED
│   │
│   ├── 5.1 APP_SHELL
│   │   ├── Descripción:
│   │   │   └── Define el contenedor visual común de la aplicación: estructura de página, cabecera, navegación y zonas persistentes.
│   │   └── marco global de navegación/layout
│   │
│   ├── 5.2 NAVEGACIÓN_MÍNIMA
│   │   ├── Descripción:
│   │   │   └── Expone solo las áreas que ya existen para evitar enlaces muertos, pantallas vacías o funcionalidades todavía no implementadas.
│   │   └── mostrar únicamente secciones implementadas
│   │
│   ├── 5.3 RESPONSIVE_FOUNDATION
│   │   ├── Descripción:
│   │   │   └── Establece una base adaptable para que la misma interfaz funcione correctamente en móvil, tablet y escritorio.
│   │   └── una app móvil/tablet/desktop
│   │
│   ├── 5.4 DESIGN_TOKENS
│   │   ├── Descripción:
│   │   │   └── Centraliza las decisiones visuales reutilizables —colores, tipografía, espaciado y estados— para mantener coherencia en toda la aplicación.
│   │   └── colores, typography, spacing y estados esenciales
│   │
│   ├── 5.5 I18N_FOUNDATION
│   │   ├── Descripción:
│   │   │   └── Prepara la aplicación para español e inglés desde la base, evitando que la internacionalización sea un añadido posterior.
│   │   └── ES + EN desde el inicio
│   │
│   ├── 5.6 HEALTH_ENDPOINT
│   │   ├── Descripción:
│   │   │   └── Ofrece una comprobación mínima de disponibilidad para confirmar que el servidor de Valhalla está levantado y responde.
│   │   └── liveness mínimo
│   │
│   ├── 5.7 POSTGRES_CONNECTION
│   │   ├── Descripción:
│   │   │   └── Establece la conexión mínima y tipada con PostgreSQL que utilizarán las funcionalidades que necesiten persistencia.
│   │   └── conexión mínima necesaria
│   │
│   ├── 5.8 ERROR_STATES
│   │   ├── Descripción:
│   │   │   └── Define cómo mostrar fallos de forma comprensible y accionable sin exponer detalles técnicos innecesarios al usuario.
│   │   └── errores comprensibles
│   │
│   ├── 5.9 LOADING_STATES
│   │   ├── Descripción:
│   │   │   └── Proporciona feedback visible durante cargas y operaciones para que el usuario sepa que la aplicación está trabajando.
│   │   └── feedback de operaciones
│   │
│   ├── 5.10 EMPTY_STATES
│   │   ├── Descripción:
│   │   │   └── Explica qué puede hacer el usuario cuando una vista todavía no contiene datos, evitando pantallas sin contexto.
│   │   └── orientar cuando no hay datos
│   │
│   ├── 5.11 404
│   │   ├── Descripción:
│   │   │   └── Muestra una página coherente con Valhalla cuando se solicita una ruta que no existe y facilita volver a una zona válida.
│   │   └── ruta inexistente coherente
│   │
│   └── 5.12 DEFINITION_OF_VISIBLE_PROGRESS
│       ├── Descripción:
│       │   └── Fija el criterio observable que demuestra que la base técnica ya produce una aplicación real y utilizable en móvil y escritorio.
│       └── al terminar:
│           "puedo abrir Valhalla y utilizar su base real
│            en móvil y desktop"
│
│
├── 🌐 6. SITIO_WEB_PÚBLICO [SECTION] [ Oskar ] [ Gemini ]
│   │
│   ├── Estado:
│   │   └── NOT_STARTED
│   │
│   ├── 6.1 LANDING
│   │   ├── Descripción:
│   │   │   └── Presenta Valhalla, su propuesta de valor y las capacidades realmente disponibles, terminando en una llamada clara al acceso.
│   │   ├── Hero
│   │   ├── Qué es Valhalla
│   │   ├── funcionalidades publicadas
│   │   ├── gimnasio/casa cuando realmente exista
│   │   └── CTA login
│   │
│   ├── 6.2 IDIOMAS
│   │   ├── Descripción:
│   │   │   └── Permite consumir el sitio público en español o inglés utilizando la misma estructura y contenido equivalente.
│   │   ├── ES
│   │   └── EN
│   │
│   ├── 6.3 RESPONSIVE
│   │   ├── Descripción:
│   │   │   └── Adapta la landing y sus bloques para ofrecer una experiencia cuidada tanto en pantallas pequeñas como en escritorio.
│   │   ├── móvil
│   │   └── desktop
│   │
│   └── 6.4 FUTURO
│       ├── Descripción:
│       │   └── Reserva contenidos institucionales y legales para incorporarlos únicamente cuando el producto necesite publicarlos.
│       ├── manifiesto
│       ├── about
│       ├── privacidad
│       └── legal
│
│
├── 🔐 7. AUTENTICACIÓN [SECTION] [ Oskar ] [ Gemini ]
│   │
│   ├── Estado:
│   │   └── NOT_STARTED
│   │
│   ├── 7.1 LOGIN
│   │   ├── Descripción:
│   │   │   └── Permite iniciar sesión mediante correo electrónico y contraseña contra el sistema de autenticación self-hosted de Valhalla.
│   │   └── email + password
│   ├── 7.2 LOGOUT
│   │   └── Descripción:
│   │       └── Cierra de forma segura la sesión activa y devuelve al usuario a una zona pública o de acceso.
│   ├── 7.3 SESIÓN_PERSISTENTE
│   │   └── Descripción:
│   │       └── Mantiene la identidad autenticada entre navegación y reaperturas del navegador mientras la sesión siga siendo válida.
│   ├── 7.4 RUTAS_PRIVADAS
│   │   └── Descripción:
│   │       └── Impide acceder sin autenticación a páginas y endpoints que contienen datos o funciones privadas del usuario.
│   ├── 7.5 REGISTRO_PÚBLICO_CERRADO
│   │   └── Descripción:
│   │       └── Mantiene deshabilitado el alta pública de cuentas mientras el propietario no autorice explícitamente esa capacidad.
│   └── 7.6 BACKLOG
│       ├── Descripción:
│       │   └── Agrupa ampliaciones futuras de autenticación que no forman parte del alcance inicial, como OAuth, roles o recuperación avanzada.
│       ├── OAuth
│       ├── roles
│       └── recuperación avanzada
│
│
├── 🏠 8. INICIO_Y_DASHBOARD [SECTION] [ Oskar ] [ Gemini ]
│   │
│   ├── Estado:
│   │   └── NOT_STARTED
│   │
│   ├── Objetivo:
│   │   └── responder «¿qué quiero hacer ahora?»
│   │
│   ├── 8.1 CONTINUAR_ENTRENAMIENTO
│   │   ├── Descripción:
│   │   │   └── Da prioridad a reanudar una sesión que quedó en progreso para reducir el riesgo de perder o duplicar un entrenamiento.
│   │   └── prioridad si existe in_progress
│   │
│   ├── 8.2 EMPEZAR_ENTRENAMIENTO
│   │   ├── Descripción:
│   │   │   └── Ofrece un acceso directo para seleccionar una rutina e iniciar una nueva sesión con el menor número de pasos posible.
│   │   └── elegir rutina rápidamente
│   │
│   ├── 8.3 RUTINAS_RECIENTES
│   │   └── Descripción:
│   │       └── Muestra las rutinas utilizadas recientemente para facilitar repetir rápidamente los entrenamientos habituales.
│   ├── 8.4 ÚLTIMO_ENTRENAMIENTO
│   │   ├── Descripción:
│   │   │   └── Resume la sesión completada más reciente con sus métricas principales y los récords conseguidos.
│   │   ├── duración
│   │   ├── volumen
│   │   └── PR
│   │
│   ├── 8.5 SNAPSHOT_SEMANAL
│   │   ├── Descripción:
│   │   │   └── Presenta una lectura compacta de la actividad de la semana para entender de un vistazo frecuencia, volumen y último récord.
│   │   ├── sesiones
│   │   ├── volumen
│   │   └── último PR
│   │
│   └── 8.6 EMPTY_STATE
│       ├── Descripción:
│       │   └── Orienta al usuario sin actividad previa hacia la primera acción útil en lugar de mostrar un dashboard vacío.
│       └── orientar al usuario nuevo
│
│
├── 🧬 9. PERFIL [SECTION] [ Oskar ] [ Gemini ]
│   │
│   ├── Estado:
│   │   └── NOT_STARTED
│   │
│   ├── 9.1 ONBOARDING
│   │   ├── Descripción:
│   │   │   └── Recoge de forma progresiva los datos necesarios para personalizar Valhalla, permitiendo omitir aquello que no sea imprescindible.
│   │   ├── idioma
│   │   ├── unidades
│   │   ├── nombre
│   │   ├── fecha nacimiento
│   │   ├── sexo para fórmula
│   │   ├── altura
│   │   ├── peso
│   │   ├── actividad
│   │   └── omitir datos no imprescindibles
│   │
│   ├── 9.2 IDENTIDAD
│   │   ├── Descripción:
│   │   │   └── Gestiona los datos básicos con los que el usuario se identifica dentro de la aplicación y deriva automáticamente la edad cuando procede.
│   │   ├── nombre
│   │   ├── avatar
│   │   ├── nacimiento
│   │   └── edad derivada
│   │
│   ├── 9.3 BIOMETRÍA
│   │   ├── Descripción:
│   │   │   └── Centraliza los datos corporales y de actividad necesarios para métricas personales y cálculos posteriores.
│   │   ├── sexo fórmula
│   │   ├── altura
│   │   ├── peso actual
│   │   └── actividad
│   │
│   ├── 9.4 UNIDADES
│   │   ├── Descripción:
│   │   │   └── Permite elegir la presentación métrica o imperial manteniendo un formato interno canónico que evita inconsistencias de cálculo.
│   │   ├── métrico
│   │   ├── imperial
│   │   └── canónico interno kg/cm
│   │
│   └── 9.5 METABOLISMO
│       ├── Descripción:
│       │   └── Calcula indicadores metabólicos orientativos a partir de los datos del perfil mediante fórmulas explícitamente definidas.
│       ├── BMI
│       ├── BMR
│       ├── TDEE
│       └── Revised Harris-Benedict
│
│
├── 📚 10. EJERCICIOS [SECTION] [ Oskar ] [ Gemini ]
│   │
│   ├── Estado:
│   │   └── NOT_STARTED
│   │
│   ├── 10.1 DATASET
│   │   ├── Descripción:
│   │   │   └── Define la fuente de ejercicios importada, su alcance, idiomas disponibles y las restricciones de licencia del contenido multimedia.
│   │   ├── fuente:
│   │   │   └── hasaneyldrm/exercises-dataset
│   │   ├── ejercicios:
│   │   │   └── 1.324
│   │   ├── instrucciones:
│   │   │   └── 10 idiomas
│   │   ├── Body Weight:
│   │   │   └── 325 clasificados
│   │   ├── aproximadamente:
│   │   │   └── 25 % descritos upstream como sin equipamiento
│   │   ├── código/estructura/instrucciones:
│   │   │   └── MIT según fuente verificada
│   │   └── multimedia:
│   │       ├── © Gym visual
│   │       ├── licencia separada
│   │       └── no reutilizar hasta validar condiciones
│   │
│   ├── 10.2 CATÁLOGO
│   │   ├── Descripción:
│   │   │   └── Permite explorar el catálogo mediante listado, búsqueda y filtros por zona corporal, equipamiento y contexto de entrenamiento.
│   │   ├── lista
│   │   ├── búsqueda
│   │   ├── filtro body part
│   │   ├── filtro equipment
│   │   ├── Body Weight
│   │   ├── Casa
│   │   └── Sin material estricto [CURATED]
│   │
│   ├── 10.3 FICHA
│   │   ├── Descripción:
│   │   │   └── Muestra la información útil de un ejercicio: nombre, músculos objetivo y secundarios, equipamiento e instrucciones disponibles.
│   │   ├── nombre
│   │   │   └── dataset tiene campo único de nombre;
│   │   │       nombres localizados son responsabilidad de Valhalla si se añaden
│   │   ├── target
│   │   ├── secundarios
│   │   ├── equipamiento
│   │   └── instrucciones localizadas cuando existan
│   │
│   ├── 10.4 MULTIMEDIA [RESEARCH]
│   │   ├── Descripción:
│   │   │   └── Reserva la incorporación de imágenes o animaciones hasta verificar de forma explícita su licencia, atribución y condiciones de reutilización.
│   │   ├── miniatura
│   │   ├── GIF
│   │   └── licencia/atribución primero
│   │
│   ├── 10.5 NOTAS_PERSONALES [LATER]
│   │   ├── Descripción:
│   │   │   └── Permitirá guardar observaciones personales sobre técnica, agarre o ajustes sin alterar la definición global del ejercicio.
│   │   └── técnica/agarre/ajustes
│   │
│   └── 10.6 BACKLOG
│       ├── Descripción:
│       │   └── Conserva ampliaciones futuras del catálogo —ejercicios propios, equivalencias y favoritos— fuera del alcance actual.
│       ├── ejercicios personalizados
│       ├── equivalentes
│       └── favoritos
│
│
├── 📋 11. RUTINAS [SECTION] [ Oskar ] [ Gemini ]
│   │
│   ├── Estado:
│   │   └── NOT_STARTED
│   │
│   ├── 11.1 GESTIÓN
│   │   ├── Descripción:
│   │   │   └── Cubre el ciclo de vida de una rutina: consultar, crear, modificar, eliminar y reorganizar su contenido.
│   │   ├── listar
│   │   ├── crear
│   │   ├── editar
│   │   ├── eliminar
│   │   └── reordenar ejercicios
│   │
│   ├── 11.2 CONFIGURACIÓN
│   │   ├── Descripción:
│   │   │   └── Define los ejercicios y parámetros objetivo de cada rutina, incluyendo series, repeticiones y descansos previstos.
│   │   ├── añadir ejercicio
│   │   ├── retirar ejercicio
│   │   ├── sets objetivo
│   │   ├── reps objetivo
│   │   └── descanso
│   │
│   ├── 11.3 SELECTOR_EJERCICIOS
│   │   ├── Descripción:
│   │   │   └── Proporciona una selección de ejercicios rápida y contextual, a pantalla completa en móvil y con mayor densidad de información en escritorio.
│   │   ├── fullscreen móvil
│   │   ├── layout desktop
│   │   ├── búsqueda
│   │   ├── filtros
│   │   ├── Casa / Body Weight
│   │   └── ficha breve
│   │
│   ├── 11.4 NOTAS [LATER]
│   │   ├── Descripción:
│   │   │   └── Permitirá añadir contexto general a una rutina, como indicaciones de ejecución, objetivo o consideraciones personales.
│   │   └── contexto de rutina
│   │
│   └── 11.5 BACKLOG
│       ├── Descripción:
│       │   └── Agrupa mejoras futuras de planificación y reutilización de rutinas sin convertirlas en alcance de la primera versión.
│       ├── Duplicar rutina
│       │   └── copia editable sin modificar la original
│       ├── Carpetas
│       │   └── organización por día/objetivo/bloque
│       ├── Plantillas
│       │   └── puntos de partida reutilizables
│       ├── Plantillas gimnasio
│       │   └── equipamiento completo
│       ├── Plantillas casa
│       │   └── material limitado
│       ├── Plantillas peso corporal
│       │   └── principalmente Body Weight
│       ├── Mesociclos
│       │   └── planificación de varias semanas
│       └── Generador IA
│           └── propuesta de rutina según restricciones;
│               nunca sobrescribe sin consentimiento
│
│
├── 🏋️ 12. ENTRENAMIENTO [SECTION] [ Oskar ] [ Gemini ]
│   │
│   ├── Estado:
│   │   └── NOT_STARTED
│   │
│   ├── 12.1 CICLO_SESIÓN
│   │   ├── Descripción:
│   │   │   └── Controla los estados principales de una sesión real: comenzar, continuar una existente, cancelar o finalizar el entrenamiento.
│   │   ├── iniciar
│   │   ├── reanudar
│   │   ├── cancelar
│   │   └── finalizar
│   │
│   ├── 💾 12.2 AUTOGUARDADO_Y_RECUPERACIÓN [CORE]
│   │   ├── Descripción:
│   │   │   └── Guarda progresivamente el trabajo realizado para que un refresco, cierre del navegador o interrupción no destruya una sesión en curso.
│   │   ├── persistencia progresiva
│   │   ├── refresh seguro
│   │   ├── cerrar/reabrir navegador
│   │   └── recuperar in_progress
│   │
│   ├── 12.3 SERIES
│   │   ├── Descripción:
│   │   │   └── Representa y edita cada serie del ejercicio mostrando referencia anterior, carga, repeticiones y estado de completado.
│   │   ├── UI:
│   │   │   └── SERIE | ANTERIOR | KG | REPS | ✓
│   │   ├── peso
│   │   ├── reps
│   │   ├── completar
│   │   ├── desmarcar
│   │   ├── añadir
│   │   └── eliminar
│   │
│   ├── 12.4 PROTECCIÓN
│   │   ├── Descripción:
│   │   │   └── Protege las acciones que pueden provocar pérdida accidental de trabajo mediante undo, confirmaciones o avisos contextuales.
│   │   ├── eliminar → undo/confirmación
│   │   ├── cancelar → confirmación
│   │   └── finalizar incompleto → aviso contextual
│   │
│   ├── 12.5 GHOST
│   │   ├── Descripción:
│   │   │   └── Usa como referencia la última sesión completada del mismo usuario y ejercicio para mostrar, serie a serie, qué hizo anteriormente.
│   │   ├── misma persona
│   │   ├── mismo ejercicio
│   │   ├── última sesión completed
│   │   ├── set por set
│   │   └── sets extra → último ghost
│   │
│   ├── 12.6 SOBRECARGA_PROGRESIVA
│   │   ├── Descripción:
│   │   │   └── Detecta progreso cuando el usuario mueve más peso o consigue más repeticiones manteniendo una carga comparable.
│   │   ├── más peso
│   │   └── mismo peso + más reps
│   │
│   ├── 12.7 PR
│   │   ├── Descripción:
│   │   │   └── Identifica un récord personal cuando una serie completada supera el mayor peso absoluto registrado anteriormente para ese ejercicio.
│   │   └── mayor peso absoluto de set completed
│   │
│   ├── 12.8 VOLUMEN
│   │   ├── Descripción:
│   │   │   └── Calcula la carga de trabajo de las series con reglas explícitas según el tipo de ejercicio y evita asumir equivalencias no definidas.
│   │   ├── general:
│   │   │   └── peso × reps
│   │   ├── mancuerna bilateral:
│   │   │   └── 2 × peso × reps
│   │   └── dominadas/fondos:
│   │       └── carga añadida en MVP
│   │
│   ├── 12.9 TEMPORIZADOR
│   │   ├── Descripción:
│   │   │   └── Gestiona el descanso entre series con inicio automático, ajustes rápidos, omisión y avisos compatibles con el dispositivo.
│   │   ├── auto-start
│   │   ├── ±15 s
│   │   ├── skip
│   │   ├── sonido
│   │   └── vibración
│   │
│   ├── 12.10 NOTAS [LATER]
│   │   ├── Descripción:
│   │   │   └── Permitirá registrar observaciones durante la sesión o asociadas a un ejercicio concreto sin interrumpir el flujo de entrenamiento.
│   │   ├── sesión
│   │   └── ejercicio
│   │
│   └── 12.11 UTILIDADES [BACKLOG]
│       ├── Descripción:
│       │   └── Conserva utilidades de entrenamiento candidatas para el futuro y solo las incorpora cuando resuelvan una necesidad real durante la sesión.
│       ├── Quick Weight Buttons
│       │   └── incrementos rápidos de carga
│       ├── Memoria asiento/pin
│       │   └── recuerda configuración de máquina
│       ├── Selector barra/lastre
│       │   └── separa barra/carga añadida
│       ├── Máquina ocupada
│       │   └── sustitución temporal sin destruir rutina
│       ├── Reordenación dinámica
│       │   └── cambia orden durante sesión
│       ├── Warmup generator
│       │   └── series de aproximación
│       ├── Tipos de serie
│       │   └── normal/warmup/drop/etc.
│       ├── RPE / RIR
│       │   └── contexto de esfuerzo
│       ├── Wake Lock
│       │   └── mantener pantalla activa
│       ├── Workout ETA
│       │   └── estimación de fin
│       ├── Volumen en vivo
│       │   └── volumen acumulado durante sesión
│       ├── Heatmap muscular
│       │   └── músculos implicados
│       ├── Banner PR
│       │   └── feedback inmediato de récord
│       ├── Timer superseries
│       │   └── alternancia A/B y descansos
│       ├── Calculadora discos
│       │   └── discos por lado para carga objetivo
│       └── Calculadora 1RM
│           └── estimación claramente identificada
│
│
├── 📊 13. RESUMEN_HISTORIAL_Y_EVOLUCIÓN [SECTION] [ Oskar ] [ Gemini ]
│   │
│   ├── Estado:
│   │   └── NOT_STARTED
│   │
│   ├── 13.1 POST_WORKOUT
│   │   ├── Descripción:
│   │   │   └── Resume inmediatamente una sesión finalizada con duración, trabajo realizado, ejercicios y récords, comparándola cuando exista una referencia válida.
│   │   ├── duración
│   │   ├── volumen
│   │   ├── reps
│   │   ├── sets
│   │   ├── ejercicios
│   │   ├── PR
│   │   └── comparación sesión comparable anterior
│   │
│   ├── 13.2 HISTORIAL_SESIONES
│   │   ├── Descripción:
│   │   │   └── Permite localizar y revisar sesiones pasadas mediante calendario, cronología, detalle y filtros combinables.
│   │   ├── calendario
│   │   ├── timeline
│   │   ├── detalle
│   │   ├── filtro fecha
│   │   ├── filtro rutina
│   │   ├── filtro ejercicio
│   │   └── comparar dos sesiones [LATER]
│   │
│   ├── 13.3 HISTORIAL_EJERCICIO
│   │   ├── Descripción:
│   │   │   └── Reúne el historial completo de un ejercicio para analizar cargas, repeticiones, volumen y evolución de récords a lo largo del tiempo.
│   │   ├── todas las apariciones
│   │   ├── peso máximo
│   │   ├── reps en cargas comparables
│   │   ├── volumen
│   │   └── timeline PR
│   │
│   ├── 13.4 EVOLUCIÓN
│   │   ├── Descripción:
│   │   │   └── Convierte el historial acumulado en tendencias de fuerza, volumen, frecuencia y consistencia para distintos periodos de análisis.
│   │   ├── fuerza
│   │   ├── volumen semanal
│   │   ├── volumen mensual
│   │   ├── frecuencia
│   │   ├── consistencia descriptiva
│   │   ├── 7d
│   │   ├── 30d
│   │   ├── 90d
│   │   ├── all-time
│   │   ├── cambio vs periodo comparable
│   │   └── gráficas
│   │
│   ├── 13.5 RÉCORDS_Y_TOPS
│   │   ├── Descripción:
│   │   │   └── Destaca las mejores marcas y extremos relevantes del historial, como series más pesadas, mayor volumen o ejercicios más frecuentes.
│   │   ├── top PR
│   │   ├── set más pesado
│   │   ├── set mayor volumen
│   │   ├── sesión mayor volumen
│   │   ├── ejercicio más frecuente
│   │   ├── mejores marcas
│   │   └── mejor periodo [LATER]
│   │
│   ├── 🐘 13.6 EQUIVALENCIAS_DE_VOLUMEN [LATER]
│   │   ├── Descripción:
│   │   │   └── Traduce de forma lúdica el volumen acumulado a referencias visuales aproximadas, dejando claro que no constituye una métrica científica.
│   │   ├── propósito:
│   │   │   └── entretenimiento/visualización, no métrica científica
│   │   ├── referencias:
│   │   │   ├── automóvil
│   │   │   ├── elefante
│   │   │   ├── furgoneta
│   │   │   ├── camión
│   │   │   └── contenedor
│   │   └── reglas:
│   │       ├── tabla curada
│   │       ├── fuente conservada
│   │       ├── «aprox.»
│   │       ├── sin falsa precisión
│   │       └── referencia apropiada a la magnitud
│   │
│   ├── 13.7 RESÚMENES_COMPARTIBLES [LATER]
│   │   ├── Descripción:
│   │   │   └── Prepara resúmenes de distintas escalas —sesión, ejercicio, rutina, semana o mes— para su posterior presentación o compartición.
│   │   ├── sesión
│   │   ├── PR
│   │   ├── top set
│   │   ├── progreso
│   │   ├── volumen/equivalencia
│   │   ├── ejercicio
│   │   ├── rutina
│   │   ├── semanal
│   │   └── mensual
│   │
│   ├── ⚔️ 13.8 TU_SAGA [LATER]
│   │   ├── Descripción:
│   │   │   └── Construye una narrativa periódica de progreso que agrupa sesiones, volumen, récords, ejercicios y otros hitos bajo la identidad de Valhalla.
│   │   ├── semanal
│   │   ├── mensual
│   │   ├── anual
│   │   ├── sesiones
│   │   ├── volumen
│   │   ├── PR
│   │   ├── ejercicios
│   │   ├── mejor periodo
│   │   ├── equivalencias
│   │   └── cuerpo opcional
│   │
│   └── 📧 13.9 INFORME_MENSUAL [BACKLOG]
│       ├── Descripción:
│       │   └── Define el contenido de un informe mensual generado a partir de las métricas de la sección 13 y deja el envío por correo como capacidad opcional.
│       ├── generación pertenece a sección 13
│       ├── sesiones
│       ├── días
│       ├── duración
│       ├── volumen
│       ├── sets
│       ├── reps
│       ├── PR
│       ├── ejercicios frecuentes
│       ├── mejores marcas
│       ├── comparación mes anterior
│       ├── Tu Saga
│       ├── email opcional
│       └── proveedor de correo:
│           └── NO seleccionar hasta autorizar esta feature
│
│
├── ⚙️ 14. AJUSTES_Y_DATOS [SECTION] [ Oskar ] [ Gemini ]
│   │
│   ├── Estado:
│   │   └── NOT_STARTED
│   │
│   ├── 14.1 CUENTA
│   │   └── Descripción:
│   │       └── Centraliza las opciones vinculadas a la cuenta del usuario y sirve de punto de entrada para su gestión.
│   ├── 14.2 UNIDADES
│   │   ├── Descripción:
│   │   │   └── Permite cambiar cómo se muestran pesos, medidas y otras magnitudes sin modificar el formato canónico almacenado internamente.
│   │   ├── métrico
│   │   └── imperial
│   ├── 14.3 IDIOMA
│   │   ├── Descripción:
│   │   │   └── Permite seleccionar y persistir el idioma preferido para que la experiencia se mantenga entre sesiones.
│   │   ├── selector
│   │   └── preferencia persistente
│   ├── 14.4 ENTRENAMIENTO
│   │   ├── Descripción:
│   │   │   └── Agrupa únicamente preferencias de entrenamiento correspondientes a funciones que ya estén implementadas en el producto.
│   │   └── solo preferencias de funciones implementadas
│   ├── 14.5 INFORMES_Y_COMUNICACIONES [BACKLOG]
│   │   ├── Descripción:
│   │   │   └── Reserva la configuración de comunicaciones periódicas para cuando exista realmente un sistema de informes y envío autorizado.
│   │   ├── email mensual ON/OFF
│   │   ├── idioma de email
│   │   └── opt-in explícito
│   ├── 14.6 MIS_DATOS
│   │   ├── Descripción:
│   │   │   └── Da al usuario control sobre sus datos mediante exportaciones y, más adelante, importación y eliminación cuando correspondan.
│   │   ├── export JSON
│   │   ├── export CSV
│   │   ├── import JSON [LATER]
│   │   └── eliminación de cuenta/datos cuando corresponda
│   └── 14.7 PREFERENCIAS_NOTIFICACIÓN [BACKLOG]
│       ├── Descripción:
│       │   └── Centraliza el consentimiento y los canales de las futuras notificaciones, manteniendo independientes sus distintas categorías.
│       ├── Recordatorios
│       │   └── avisos voluntarios de entrenamiento
│       ├── Informe mensual
│       │   └── disponibilidad/envío opcional
│       ├── Rachas
│       │   └── solo si existe la mecánica
│       ├── Comunicaciones futuras
│       │   └── categorías independientes
│       └── Canales [LATER]
│           ├── in-app
│           ├── email
│           └── push
│
│
├── 📐 15. MÉTRICAS_CORPORALES [SECTION / BACKLOG] [ Oskar ] [ Gemini ]
│   │
│   ├── 15.1 PESO
│   │   ├── Descripción:
│   │   │   └── Permite registrar el peso corporal y consultar su evolución histórica, incluyendo una media móvil para suavizar variaciones diarias.
│   │   ├── registrar
│   │   ├── histórico
│   │   └── media móvil 7d
│   │
│   ├── 15.2 MEDIDAS
│   │   ├── Descripción:
│   │   │   └── Permite registrar perímetros corporales de forma independiente para seguir cambios físicos más allá del peso total.
│   │   ├── cuello
│   │   ├── hombros
│   │   ├── pecho
│   │   ├── bíceps
│   │   ├── cintura
│   │   ├── cadera
│   │   ├── muslo
│   │   └── gemelo
│   │
│   ├── 15.3 COMPOSICIÓN
│   │   ├── Descripción:
│   │   │   └── Reserva métricas de composición corporal para cuando las fórmulas y supuestos hayan sido validados antes de implementarlos.
│   │   ├── grasa corporal
│   │   ├── masa magra
│   │   └── fórmula:
│   │       └── validar antes de implementar
│   │
│   ├── 15.4 FOTOS
│   │   ├── Descripción:
│   │   │   └── Permite conservar fotografías privadas de progreso y compararlas entre momentos distintos sin hacerlas públicas por defecto.
│   │   ├── privadas
│   │   └── antes/después
│   │
│   └── 15.5 HISTORIAL_Y_EVOLUCIÓN
│       ├── Descripción:
│       │   └── Combina mediciones y fechas para mostrar cambios absolutos, porcentuales y tendencias en distintos horizontes temporales.
│       ├── peso
│       ├── medida individual
│       ├── comparación fechas
│       ├── delta absoluto
│       ├── delta porcentual
│       ├── 30d
│       ├── 90d
│       ├── 1y
│       ├── all-time
│       ├── tendencias neutrales
│       └── foto + medida cuando exista
│
│
├── 🔗 16. COMPARTIR [SECTION / BACKLOG] [ Oskar ] [ Gemini ]
│   │
│   ├── Responsabilidad:
│   │   └── salida/compartir;
│   │       cálculos permanecen en sección 13
│   │
│   ├── 16.1 FORMATOS
│   │   ├── Descripción:
│   │   │   └── Ofrece formatos visuales adaptados a los destinos habituales de compartición, priorizando Story y cuadrado.
│   │   ├── Story 9:16
│   │   ├── Square 1:1
│   │   └── landscape [LATER]
│   │
│   ├── 16.2 CONTENIDO
│   │   ├── Descripción:
│   │   │   └── Define qué información de entrenamiento puede convertirse en una pieza visual compartible sin recalcular métricas fuera de su sección responsable.
│   │   ├── Sesión
│   │   │   └── datos principales de workout
│   │   ├── Volumen
│   │   │   └── carga acumulada
│   │   ├── Equivalencia visual
│   │   │   └── comparación aproximada
│   │   ├── Top Series
│   │   │   └── series destacadas
│   │   ├── PR
│   │   │   └── récord concreto
│   │   ├── Evolución
│   │   │   └── progreso frente a referencia
│   │   ├── Gráfica
│   │   │   └── tendencia visual
│   │   ├── Rutina
│   │   │   └── resumen de rutina
│   │   ├── Semana
│   │   │   └── recap semanal
│   │   ├── Mes
│   │   │   └── recap mensual
│   │   └── Tu Saga
│   │       └── resumen narrativo Valhalla
│   │
│   ├── 16.3 PRIVACIDAD
│   │   ├── Descripción:
│   │   │   └── Permite decidir qué datos aparecen antes de compartir, ocultando por defecto la información corporal e identificativa sensible.
│   │   ├── elegir métricas
│   │   ├── medidas corporales ocultas por defecto
│   │   ├── nombre/email ocultos por defecto
│   │   └── preview
│   │
│   ├── 16.4 ACCIONES
│   │   ├── Descripción:
│   │   │   └── Proporciona las acciones de salida disponibles, como compartir mediante el sistema del dispositivo o generar una imagen PNG.
│   │   ├── Web Share
│   │   ├── PNG
│   │   └── copiar imagen [LATER]
│   │
│   ├── 16.5 RUTINAS
│   │   ├── Descripción:
│   │   │   └── Reserva la posibilidad de compartir rutinas mediante enlaces públicos para una fase posterior del producto.
│   │   └── enlace público [BACKLOG]
│   │
│   └── 16.6 EXPORTACIÓN
│       ├── Descripción:
│       │   └── Permite extraer datos estructurados en formatos reutilizables como CSV o Excel.
│       ├── CSV
│       └── Excel
│
│
├── 📲 17. PWA [SECTION / BACKLOG] [ Oskar ] [ Gemini ]  ← ÚNICA FUENTE CANÓNICA
│   │
│   ├── 17.1 INSTALACIÓN
│   │   ├── Descripción:
│   │   │   └── Define la instalación de Valhalla como aplicación web en plataformas compatibles, manteniendo la validación real por dispositivo cuando sea necesaria.
│   │   ├── Android
│   │   ├── iOS/iPadOS
│   │   │   └── target soportado;
│   │   │       verificación física owner pendiente
│   │   └── Desktop opcional
│   │
│   ├── 17.2 APP_MODE
│   │   ├── Descripción:
│   │   │   └── Configura la presentación instalada de la PWA mediante manifest, iconografía y ejecución en modo standalone.
│   │   ├── Web App Manifest
│   │   ├── iconos
│   │   └── standalone
│   │
│   ├── 17.3 PUSH [LATER]
│   │   ├── Descripción:
│   │   │   └── Reserva las notificaciones push para casos de uso concretos que justifiquen su complejidad y permisos.
│   │   └── solo si existe caso de uso real
│   │
│   ├── 17.4 OFFLINE [SEPARATE PROBLEM]
│   │   ├── Descripción:
│   │   │   └── Trata la operación sin conexión como un problema propio que requiere caché, almacenamiento local, cola de cambios y sincronización fiable.
│   │   ├── cache
│   │   ├── IndexedDB
│   │   ├── cola offline
│   │   └── sync
│   │
│   └── Regla:
│       └── PWA no implica automáticamente offline fiable
│
│
├── 📈 18. ANALÍTICA_AVANZADA [SECTION / BACKLOG] [ Oskar ] [ Gemini ]
│   │
│   ├── 18.1 FUERZA
│   │   ├── Descripción:
│   │   │   └── Amplía el análisis de fuerza con tendencias, récords históricos y estimaciones adicionales cuando exista suficiente información fiable.
│   │   ├── gráficas avanzadas
│   │   ├── lifetime PR
│   │   ├── trends
│   │   └── e1RM [LATER]
│   │
│   ├── 18.2 PROGRAMACIÓN
│   │   ├── Descripción:
│   │   │   └── Analiza patrones de planificación a medio plazo para detectar estancamientos y representar estructuras como mesociclos.
│   │   ├── estancamientos
│   │   └── mesociclos
│   │
│   ├── 18.3 MUSCULATURA
│   │   ├── Descripción:
│   │   │   └── Representa visualmente la musculatura implicada a partir de los ejercicios y datos disponibles.
│   │   └── heatmaps
│   │
│   └── 18.4 COMPARACIONES
│       ├── Descripción:
│       │   └── Permite contrastar periodos, rutinas o ejercicios cuando sus métricas sean suficientemente compatibles para una comparación útil.
│       ├── periodos
│       ├── rutinas
│       └── ejercicios compatibles
│
│
├── 🤖 19. INTELIGENCIA_ARTIFICIAL [SECTION / BACKLOG] [ Oskar ] [ Gemini ]
│   │
│   ├── 19.1 SMART_DELOAD
│   │   ├── Descripción:
│   │   │   └── Propone una descarga de entrenamiento basada en señales disponibles sin presentarla como diagnóstico ni prescripción médica.
│   │   └── sugerencia, no prescripción médica
│   │
│   └── 19.2 GENERADOR_POR_RESTRICCIONES
│       ├── Descripción:
│       │   └── Genera propuestas de entrenamiento respetando restricciones explícitas de tiempo, molestias, equipamiento, disponibilidad y objetivo del usuario.
│       ├── Tiempo disponible
│       │   └── ajusta volumen/ejercicios/descansos
│       ├── Molestias
│       │   └── excluye según indicación del usuario;
│       │       no diagnostica
│       ├── Equipamiento disponible
│       │   └── solo movimientos posibles
│       ├── Ejercicio ocupado
│       │   └── alternativa razonable
│       ├── Entrenamiento en casa
│       │   └── bodyweight/material mínimo
│       ├── Objetivo
│       │   └── restricción explícita
│       └── Regla:
│           └── IA propone;
│               usuario decide;
│               no modifica automáticamente historial/rutina
│
│
├── 🔔 20. NOTIFICACIONES_Y_RECORDATORIOS [SECTION / BACKLOG] [ Oskar ] [ Gemini ]
│   │
│   ├── Condición:
│   │   └── no construir hasta existir suficientes eventos útiles
│   │
│   ├── 20.1 CENTRO_NOTIFICACIONES
│   │   ├── Descripción:
│   │   │   └── Centralizará avisos dentro de Valhalla únicamente cuando exista un volumen suficiente de eventos que justifique una bandeja propia.
│   │   └── solo cuando esté justificado
│   │
│   ├── 20.2 RECORDATORIOS
│   │   ├── Descripción:
│   │   │   └── Permite programar avisos voluntarios vinculados al entrenamiento o a mecanismos de continuidad que realmente existan.
│   │   ├── entrenamiento
│   │   └── racha
│   │
│   ├── 20.3 INFORMES
│   │   ├── Descripción:
│   │   │   └── Reserva las notificaciones relacionadas con informes periódicos, empezando por el resumen mensual cuando sea implementado.
│   │   └── mensual
│   │
│   ├── 20.4 SYNC
│   │   ├── Descripción:
│   │   │   └── Comunica al usuario el estado relevante de sincronización cuando existan capacidades offline que puedan dejar cambios pendientes.
│   │   └── estado offline
│   │
│   └── 20.5 PREFERENCIAS
│       ├── Descripción:
│       │   └── Permite controlar por categoría qué avisos se reciben, mediante qué canal y siempre bajo consentimiento explícito cuando corresponda.
│       ├── categoría
│       ├── canal
│       └── opt-in
│
│
├── 👥 21. SOCIAL [SECTION / BACKLOG] [ Oskar ] [ Gemini ]
│   │
│   ├── 21.1 CÍRCULO_PRIVADO
│   │   ├── Descripción:
│   │   │   └── Crea un espacio social limitado a personas invitadas mediante códigos y un feed privado, evitando una red pública abierta.
│   │   ├── códigos
│   │   └── feed privado
│   │
│   ├── 21.2 COMPARACIÓN
│   │   ├── Descripción:
│   │   │   └── Permite comparar dos usuarios únicamente mediante métricas equivalentes y compatibles para evitar conclusiones engañosas.
│   │   └── 1 vs 1 con métricas compatibles
│   │
│   └── 21.3 CONTINUIDAD
│       ├── Descripción:
│       │   └── Agrupa mecanismos sociales de continuidad y recapitulación, como rachas, avisos de rescate y un resumen anual de Tu Saga.
│       ├── streaks
│       ├── rescue notifications
│       └── Wrapped / Tu Saga anual
│
│
└── 📜 22. SOBRE_VALHALLA_Y_LEGAL [SECTION / BACKLOG] [ Oskar ] [ Gemini ]
    │
    ├── 22.1 IDENTIDAD
    │   ├── Descripción:
    │   │   └── Explica la identidad, propósito y principios de Valhalla mediante un manifiesto y una presentación del proyecto.
    │   ├── Manifiesto
    │   └── Sobre Valhalla
    │
    ├── 22.2 PRIVACIDAD
    │   ├── Descripción:
    │   │   └── Reúne la información sobre tratamiento de datos y las obligaciones de privacidad aplicables cuando el servicio lo requiera.
    │   ├── privacidad
    │   └── RGPD cuando corresponda
    │
    └── 22.3 LEGAL
        ├── Descripción:
        │   └── Contiene los términos, avisos médicos y política de cookies solo en la medida en que sean necesarios para el funcionamiento real del servicio.
        ├── términos
        ├── descargo médico
        └── cookies únicamente si realmente se utilizan


========================================================================================
                       JERARQUÍA FINAL DE AUTORIDAD
========================================================================================

PROPIETARIO
    │
    ├── decide producto
    ├── acepta/rechaza
    └── puede ordenar REPLANIFICAMOS
            │
            ▼
RUMBO.md
    │
    ├── disciplina general
    ├── evita scope creep
    ├── evita sobreingeniería
    ├── evita sobretesting
    ├── ideas → BACKLOG
    └── complejidad proporcional
            │
            ▼
CURRENT.md
    │
    └── ÚNICA tarea autorizada AHORA
            │
            ▼
PRODUCT / SECTIONS
    │
    └── mapa de lo que puede hacer Valhalla
            │
            ▼
DESIGN.md
    │
    └── cómo debe verse y sentirse
            │
            ▼
AGENTS.md + RULES
    │
    └── límites operativos específicos Valhalla
            │
            ▼
WORKFLOWS
    │
    └── procedimiento
            │
            ▼
SKILLS
    │
    └── método técnico cuando sea necesario
            │
            ▼
MCP / INTEGRACIONES
    │
    └── acceso controlado a servicios externos
            │
            ▼
REFERENCIAS
    │
    └── evidencia/contexto


GITHUB
    │
    └── fuente de verdad de:
        código
        commits
        PR
        CI
        tags
        releases


BACKLOG
    │
    └── memoria de ideas
        ≠ CURRENT
        ≠ autorización


ÁRBOL MAESTRO
    │
    └── mapa
        ≠ roadmap obligatorio
        ≠ lista de instalación
        ≠ lista de tareas


========================================================================================
                         START SESSION CON RUMBO
========================================================================================

INICIO
  │
  ▼
leer RUMBO.md
  │
  ▼
leer CURRENT.md
  │
  ▼
pregunta:
«¿Qué resultado observable está autorizado ahora?»
  │
  ▼
verificar entorno
  │
  ├── hostname
  ├── workspace
  ├── branch
  └── git status
  │
  ▼
seleccionar SOLO herramientas necesarias
  │
  ├── Graphify si hay impacto real que entender
  ├── Impeccable si existe decisión UI
  ├── TDD si hay lógica/bug que merezca protección
  ├── Playwright si existe flujo real que validar
  └── no instalar herramientas «por si acaso»
  │
  ▼
UNA TAREA


========================================================================================
                   FLUJO DE IDEA DURANTE EL TRABAJO
========================================================================================

CURRENT ACTIVO
     │
     ▼
«Se me ocurre X»
     │
     ▼
¿X es necesaria para completar correctamente CURRENT?
     │
  ┌──┴───────────┐
  │              │
 SÍ              NO
  │              │
  ▼              ▼
evaluar       guardar en
scope         BACKLOG
mínimo           │
                 ├── idea
                 ├── problema
                 ├── valor
                 ├── sección
                 └── estado IDEA
                     │
                     ▼
               VOLVER A CURRENT


EXCEPCIÓN:

«REPLANIFICAMOS»
        │
        ▼
analizar conscientemente:
        │
        ├── qué entra
        ├── por qué
        ├── qué sale/se pospone
        ├── coste
        └── nuevo CURRENT
        │
        ▼
decisión owner


========================================================================================
                         DESARROLLO CON RUMBO
========================================================================================

CURRENT
   │
   ▼
resultado observable
   │
   ▼
solución mínima técnicamente sensata
   │
   ▼
implementar
   │
   ▼
validación proporcional al riesgo
   │
   ├── UI reversible
   │      └── mirar + interactuar + build
   │
   ├── lógica crítica
   │      └── test dirigido
   │
   ├── bug real
   │      └── reproducir + test regresión si aporta valor + fix
   │
   └── operación peligrosa
          └── precheck + backup + cambio + validación + rollback
   │
   ▼
¿resultado correcto?
   │
 ┌─┴─────────────┐
 │               │
NO               SÍ
 │               │
 ▼               ▼
diagnóstico     continuar cierre
mínimo
 │
 ▼
una corrección
 │
 ▼
validar
 │
 ├── tras 4 correcciones fallidas
 │      └── STOP + HANDOFF
 │
 └── no continuar plan original si el paso previo falló


========================================================================================
                FLUJO GITHUB DE UNA TAREA DE DEVELOPMENT
========================================================================================

OWNER AUTORIZA
      │
      ▼
RUMBO
      │
      ▼
CURRENT
      │
      ▼
rama feature/fix
      │
      ▼
implementar UNA tarea
      │
      ▼
validar lo necesario
      │
      ▼
staging selectivo
      │
      ▼
commit
      │
      ▼
push GitHub
      │
      ▼
PR → develop
      │
      ▼
CI mínimo relevante
      │
   ┌──┴──────────┐
   │             │
 FAIL            OK
   │             │
   ▼             ▼
corregir       merge GitHub
   │             │
   └─────────────┘
                 │
                 ▼
        deploy Development
                 │
                 ▼
               health
                 │
                 ▼
          smoke pertinente
                 │
            ┌────┴─────┐
            │          │
           FAIL        OK
            │          │
            ▼          ▼
        corregir     CURRENT
                   AWAITING_OWNER_REVIEW
                         │
                         ▼
                     OWNER REVIEW
                         │
                        STOP


========================================================================================
                       OWNER REVIEW CON RUMBO
========================================================================================

AWAITING_OWNER_REVIEW
        │
        ▼
OWNER PRUEBA PRODUCTO
        │
        ├── funcionalidad
        ├── móvil
        ├── desktop
        ├── ES
        └── EN cuando aplique
        │
        ├────────────────────┬────────────────────┐
        │                    │                    │
      ME GUSTA             HAY BUG             IDEA NUEVA
        │                    │                    │
        ▼                    ▼                    ▼
accept-section         fix-regression       capture-idea
        │                    │                    │
        ▼                    ▼                    ▼
ACCEPTED_LOCKED        CURRENT limitado       BACKLOG
        │                    │                    │
        │                    ▼                    └── no altera plan
        │               volver a review
        │
       STOP


========================================================================================
                    PROTECCIÓN ACCEPTED_LOCKED
========================================================================================

ACCEPTED_LOCKED
      │
      ▼
NO TOCAR

Solo reabrir por:

1. bug demostrado
2. mejora autorizada
3. compatibilidad necesaria y explicada antes

        │
        ▼
cambio mínimo
        │
        ▼
Development
        │
        ▼
owner review
        │
        ▼
nuevo baseline
        │
        ▼
ACCEPTED_LOCKED


========================================================================================
                    DETECTOR DE SOBREINGENIERÍA
========================================================================================

ALARMA SI:

- dos sesiones sin mejora visible
- documentación crece más rápido que producto
- tooling consume más tiempo que feature
- instalamos MCP/skills sin caso de uso
- escribimos tests para problemas imaginarios
- construimos compatibilidad que no soportamos aún
- añadimos abstracciones para una sola implementación
- preparamos Production sin producto que publicar
- hacemos infraestructura «por si acaso»
- CURRENT aumenta durante su ejecución
- una idea provoca rediseño completo del roadmap
- Git se convierte en trabajo del owner
- arreglamos tooling durante horas sin mejorar producto


RESPUESTA:

«Riesgo de sobreingeniería.»
          │
          ▼
¿qué podemos?
          │
          ├── eliminar
          ├── posponer
          ├── simplificar
          ├── simular
          └── dejar en BACKLOG
          │
          ▼
volver al incremento visible más pequeño


========================================================================================
                    REGLA DE LAS DOS SESIONES
========================================================================================

SESIÓN 1
   │
   └── no hay mejora utilizable

SESIÓN 2
   │
   └── tampoco hay mejora utilizable
          │
          ▼
STOP
          │
          ▼
NO abrir automáticamente sesión 3 igual
          │
          ▼
revisar:
          ├── objetivo
          ├── alcance
          ├── tooling
          ├── testing
          ├── infraestructura
          └── complejidad
          │
          ▼
definir incremento visible menor


========================================================================================
                      CIERRE DE SESIÓN CON RUMBO
========================================================================================

PRODUCTO VISIBLE
└── ¿Qué puedes hacer ahora que antes no podías?


DEUDA / PENDIENTES
└── ¿Qué hemos decidido posponer?


IDEAS CAPTURADAS
└── ¿Qué ideas aparecieron y quedaron en BACKLOG?


COMPLEJIDAD AÑADIDA
└── ¿Qué nueva abstracción, herramienta o infraestructura
    añadimos y qué problema REAL resolvió?


VALIDACIÓN
└── ¿Qué comprobamos y por qué era suficiente
    para el riesgo actual?


SIGUIENTE PASO
└── ¿Cuál es el incremento útil más pequeño?


ESTADO
└── AWAITING_OWNER_REVIEW → STOP


========================================================================================
                     RELEASE / PRODUCTION CON RUMBO
========================================================================================

CONDICIÓN PREVIA:
Production solo entra cuando existe una razón real para publicarla.

release aceptada
      │
      ▼
commit exacto
      │
      ▼
CI verde
      │
      ▼
autorización owner
      │
      ▼
PR develop → main
      │
      ▼
merge GitHub
      │
      ▼
tag
      │
      ▼
evaluar riesgo DB
      │
      ├── sin cambio riesgoso
      │      └── no inventar ceremonia innecesaria
      │
      └── schema/datos en riesgo
             └── backup + checksum + rollback target
      │
      ▼
deploy Production
      │
      ▼
health
      │
      ▼
smoke crítico
      │
   ┌──┴──────────┐
   │             │
 FAIL            OK
   │             │
   ▼             ▼
rollback       release SUCCESS
                 │
                 ▼
             registrar resultado


========================================================================================
                         PRINCIPIO DE PROGRESO
========================================================================================

NO ES PROGRESO:

más archivos
más reglas
más skills
más MCP
más tests
más infraestructura
más documentación
más commits
más diagramas


PROGRESO ES PRINCIPALMENTE:

«Ahora puedo hacer algo útil con Valhalla
que antes no podía.»


========================================================================================
                      VALHALLA V2 — BASELINE FINAL
========================================================================================

RUMBO
  +
UN MAPA DE PRODUCTO COMPLETO
  +
UNA ÚNICA TAREA ACTIVA
  +
IDEAS QUE SE GUARDAN SIN DESVIAR EL PLAN
  +
DESARROLLO VISIBLE E INCREMENTAL
  +
TESTING PROPORCIONAL
  +
SEGURIDAD PROPORCIONAL
  +
GITHUB COMO FUENTE DE VERDAD
  +
OWNER REVIEW
  +
ACCEPTED_LOCKED
  +
PRODUCTION SOLO CUANDO EXISTA MOTIVO
  +
COMPLEJIDAD QUE DEBE GANARSE


MAPA COMPLETO
≠
CONSTRUIR TODO


BUENA IDEA
≠
HACERLA AHORA


POSIBLE PROBLEMA
≠
PREPARARNOS DURANTE TRES DÍAS PARA ÉL


CURRENT
=
LO ÚNICO QUE IMPORTA IMPLEMENTAR AHORA

========================================================================================
                         PLAN_MAESTRO_DE_EJECUCIÓN
========================================================================================

ESTADOS:

[NOT_STARTED]
      │
      ▼
[IN_PROGRESS]
      │
      ▼
[AWAITING_OWNER_REVIEW]
      │
      ▼
[ACCEPTED_LOCKED]


RESPONSABLES:

[ Oskar ]
└── producto, prioridades, alcance y aceptación final

[ ChatGpt ]
└── servidor, arquitectura, sistema de agentes y soporte técnico

[ Gemini ]
└── implementación, construcción, validación y operación del producto


VALHALLA — PLAN MAESTRO DE EJECUCIÓN
│
│
├── FASE 0 — GOBIERNO, ALCANCE Y FORMA DE TRABAJO
│   │   [IN_PROGRESS] [ Oskar ] [ ChatGpt ]
│   │
│   │   Descripción:
│   │   └── Define cómo se gobierna Valhalla antes de desarrollar producto:
│   │       quién decide, quién prepara, quién implementa, qué trabajo está
│   │       autorizado y cómo se evita que ideas nuevas desvíen el proyecto.
│   │
│   ├── 0.1 Gobierno del proyecto
│   │   │   [IN_PROGRESS] [ Oskar ] [ ChatGpt ]
│   │   ├── RUMBO.md
│   │   ├── PRODUCT.md
│   │   ├── DESIGN.md
│   │   ├── SECTIONS.md
│   │   ├── CURRENT.md
│   │   └── BACKLOG.md
│   │
│   ├── 0.2 Responsabilidades
│   │   │   [IN_PROGRESS] [ Oskar ] [ ChatGpt ] [ Gemini ]
│   │   ├── Oskar
│   │   │   └── producto, prioridades, alcance y aceptación
│   │   ├── ChatGPT
│   │   │   └── servidor, arquitectura, agentes y soporte técnico
│   │   └── Gemini
│   │       └── implementación y construcción de Valhalla
│   │
│   ├── 0.3 Flujo de ejecución
│   │   │   [IN_PROGRESS] [ Oskar ] [ ChatGpt ]
│   │   ├── una tarea CURRENT
│   │   ├── implementación
│   │   ├── validación
│   │   ├── owner review
│   │   ├── ACCEPTED_LOCKED
│   │   └── ideas → BACKLOG
│   │
│   └── 0.4 Criterios de calidad
│       │   [IN_PROGRESS] [ Oskar ] [ ChatGpt ] [ Gemini ]
│       ├── complejidad proporcional
│       ├── testing proporcional
│       ├── protección de comportamiento aceptado
│       └── control de scope creep
│
│
├── FASE 1 — INFRAESTRUCTURA Y SERVIDOR
│   │   [NOT_STARTED] [ ChatGpt ] [ Oskar ]
│   │
│   │   Descripción:
│   │   └── Preparar el LXC de Valhalla y dejar disponible un entorno
│   │       reproducible, seguro y preparado para que Gemini pueda desarrollar
│   │       y ejecutar la aplicación.
│   │
│   ├── 1.1 Preparación del LXC
│   │   │   [NOT_STARTED] [ ChatGpt ]
│   │   ├── Debian 13
│   │   ├── hostname
│   │   ├── usuario gemini
│   │   ├── IP / red
│   │   ├── SSH
│   │   └── permisos
│   │
│   ├── 1.2 Estructura de almacenamiento
│   │   │   [NOT_STARTED] [ ChatGpt ]
│   │   ├── /opt/web-projects/Valhalla
│   │   ├── development
│   │   ├── production
│   │   ├── /var/lib/Docker si se utiliza
│   │   └── /var/lib/containerd si se utiliza
│   │
│   ├── 1.3 Runtime
│   │   │   [NOT_STARTED] [ ChatGpt ]
│   │   ├── Node.js
│   │   ├── npm
│   │   ├── package-lock.json
│   │   └── variables de entorno
│   │
│   ├── 1.4 PostgreSQL
│   │   │   [NOT_STARTED] [ ChatGpt ]
│   │   ├── instalación
│   │   ├── servicio
│   │   ├── valhalla_dev
│   │   ├── valhalla_prod
│   │   ├── usuarios
│   │   └── permisos
│   │
│   ├── 1.5 Servicios de aplicación
│   │   │   [NOT_STARTED] [ ChatGpt ] [ Gemini ]
│   │   ├── listener Development
│   │   ├── valhalla-dev.service
│   │   ├── listener Production
│   │   └── valhalla-prod.service
│   │
│   └── 1.6 Exposición web
│       │   [NOT_STARTED] [ ChatGpt ] [ Oskar ]
│       ├── Cloudflare
│       ├── dev-valha.dxpro.es
│       ├── valha.dxpro.es
│       └── TLS / Tunnel / proxy cuando corresponda
│
│
├── FASE 2 — GITHUB Y MODELO DE ENTREGA
│   │   [NOT_STARTED] [ ChatGpt ] [ Gemini ] [ Oskar ]
│   │
│   │   Descripción:
│   │   └── Establecer GitHub como fuente de verdad y definir cómo pasa
│   │       una modificación desde el trabajo de Gemini hasta Development
│   │       y posteriormente Production.
│   │
│   ├── 2.1 Repositorio
│   │   │   [NOT_STARTED] [ ChatGpt ] [ Oskar ]
│   │   ├── remote SSH
│   │   ├── develop
│   │   └── main
│   │
│   ├── 2.2 Worktrees y entornos
│   │   │   [NOT_STARTED] [ ChatGpt ]
│   │   ├── development → develop
│   │   └── production → main
│   │
│   ├── 2.3 Flujo de ramas
│   │   │   [NOT_STARTED] [ ChatGpt ] [ Gemini ]
│   │   ├── feature/*
│   │   ├── fix/*
│   │   ├── regression/*
│   │   ├── docs/*
│   │   └── release/* cuando esté justificado
│   │
│   ├── 2.4 Pull Requests
│   │   │   [NOT_STARTED] [ Gemini ] [ ChatGpt ]
│   │   ├── scope
│   │   ├── validaciones
│   │   ├── riesgos
│   │   └── referencia CURRENT
│   │
│   ├── 2.5 CI mínimo
│   │   │   [NOT_STARTED] [ Gemini ] [ ChatGpt ]
│   │   ├── npm ci
│   │   ├── typecheck
│   │   ├── tests pertinentes
│   │   ├── build
│   │   └── i18n cuando aplique
│   │
│   └── 2.6 Releases
│       │   [NOT_STARTED] [ Oskar ] [ ChatGpt ] [ Gemini ]
│       ├── SemVer
│       ├── tags
│       ├── GitHub Releases
│       └── registro de deployments
│
│
├── FASE 3 — SISTEMA DE AGENTES
│   │   [NOT_STARTED] [ ChatGpt ] [ Oskar ] [ Gemini ]
│   │
│   │   Descripción:
│   │   └── Construir el entorno operativo que permitirá a Gemini trabajar
│   │       de forma autónoma pero controlada, siguiendo CURRENT, RUMBO,
│   │       GitHub y las decisiones del propietario.
│   │
│   ├── 3.1 Contratos principales
│   │   │   [NOT_STARTED] [ ChatGpt ] [ Oskar ]
│   │   ├── AGENTS.md
│   │   ├── GEMINI.md
│   │   └── referencia RUMBO.md
│   │
│   ├── 3.2 Rules
│   │   │   [NOT_STARTED] [ ChatGpt ]
│   │   ├── project
│   │   ├── execution-environment
│   │   ├── github-source-of-truth
│   │   ├── section-scope
│   │   ├── accepted-locked
│   │   ├── git-checkpoint
│   │   ├── task-completion
│   │   ├── decision-evidence
│   │   ├── responsive-ux
│   │   ├── accessibility
│   │   ├── destructive-actions
│   │   ├── no-opportunistic-refactor
│   │   ├── idea-proposal
│   │   ├── idea-register
│   │   ├── idea-apply
│   │   ├── mcp-safety
│   │   └── production-safety
│   │
│   ├── 3.3 Workflows
│   │   │   [NOT_STARTED] [ ChatGpt ] [ Gemini ]
│   │   ├── start-session
│   │   ├── submit-change
│   │   ├── deploy-development
│   │   ├── end-session
│   │   ├── owner-review
│   │   ├── accept-section
│   │   ├── fix-regression
│   │   ├── blocked-handoff
│   │   ├── resume-blocked
│   │   ├── capture-idea
│   │   ├── activate-idea
│   │   ├── promote-production
│   │   └── rollback-production
│   │
│   ├── 3.4 Skills técnicas
│   │   │   [NOT_STARTED] [ ChatGpt ] [ Gemini ]
│   │   ├── Better Auth
│   │   ├── Drizzle ORM
│   │   ├── fitness-math
│   │   └── Astro
│   │
│   ├── 3.5 Skills UI
│   │   │   [NOT_STARTED] [ ChatGpt ] [ Gemini ]
│   │   ├── Impeccable
│   │   ├── Graphify
│   │   ├── Amicro
│   │   ├── UI-UX Pro Max
│   │   └── valhalla-ui-workflow
│   │
│   ├── 3.6 Skills de ingeniería
│   │   │   [NOT_STARTED] [ ChatGpt ] [ Gemini ]
│   │   ├── source-driven-development
│   │   ├── test-driven-development
│   │   ├── api-and-interface-design
│   │   ├── security-and-hardening
│   │   └── code-review-and-quality
│   │
│   └── 3.7 MCP e integraciones
│       │   [NOT_STARTED] [ ChatGpt ] [ Gemini ]
│       ├── GitHub MCP
│       ├── Playwright MCP
│       ├── Cloudflare MCP
│       └── otros únicamente cuando exista necesidad real
│
│
├── FASE 4 — FUNDACIÓN TÉCNICA DE LA APLICACIÓN
│   │   [NOT_STARTED] [ Gemini ] [ ChatGpt ] [ Oskar ]
│   │
│   │   Descripción:
│   │   └── Crear la primera Valhalla ejecutable sobre la que se construirán
│   │       todas las funcionalidades posteriores.
│   │
│   ├── 4.1 Bootstrap Astro
│   │   │   [NOT_STARTED] [ Gemini ]
│   │   ├── Astro SSR
│   │   ├── @astrojs/node
│   │   ├── TypeScript strict
│   │   └── estructura src
│   │
│   ├── 4.2 UI base
│   │   │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│   │   ├── Tailwind CSS
│   │   ├── design tokens
│   │   ├── tipografía
│   │   ├── spacing
│   │   └── estados
│   │
│   ├── 4.3 Responsive Foundation
│   │   │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│   │   ├── móvil
│   │   ├── tablet
│   │   └── desktop
│   │
│   ├── 4.4 Internacionalización
│   │   │   [NOT_STARTED] [ Gemini ]
│   │   ├── ES
│   │   ├── EN
│   │   ├── fallback
│   │   └── selector de idioma
│   │
│   ├── 4.5 Persistencia
│   │   │   [NOT_STARTED] [ Gemini ] [ ChatGpt ]
│   │   ├── Drizzle
│   │   ├── PostgreSQL
│   │   ├── schema
│   │   └── migraciones
│   │
│   └── 4.6 App Shell
│       │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│       ├── layout
│       ├── navegación
│       ├── health endpoint
│       ├── loading states
│       ├── error states
│       ├── empty states
│       └── 404
│
│
├── FASE 5 — IDENTIDAD VISUAL Y UX BASE
│   │   [NOT_STARTED] [ Oskar ] [ Gemini ]
│   │
│   │   Descripción:
│   │   └── Convertir la identidad conceptual de Valhalla en un sistema
│   │       visual consistente, reconocible y usable.
│   │
│   ├── 5.1 Identidad
│   │   │   [NOT_STARTED] [ Oskar ] [ Gemini ]
│   │   ├── fitness moderno
│   │   └── identidad vikinga sutil
│   │
│   ├── 5.2 Sistema visual
│   │   │   [NOT_STARTED] [ Oskar ] [ Gemini ]
│   │   ├── paleta
│   │   ├── tipografía
│   │   ├── geometría
│   │   └── lenguaje visual
│   │
│   ├── 5.3 Componentes
│   │   │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│   │   ├── botones
│   │   ├── cards
│   │   ├── inputs
│   │   ├── navegación
│   │   └── feedback
│   │
│   ├── 5.4 Motion
│   │   │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│   │   ├── transiciones
│   │   ├── microinteracciones
│   │   └── reduced-motion
│   │
│   └── 5.5 Accesibilidad
│       │   [NOT_STARTED] [ Gemini ] [ ChatGpt ]
│       ├── contraste
│       ├── teclado
│       ├── focus
│       ├── targets táctiles
│       └── labels
│
│
├── FASE 6 — WEB PÚBLICA
│   │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│   │
│   │   Descripción:
│   │   └── Crear la cara pública de Valhalla y explicar de forma clara
│   │       qué es el producto antes de acceder al área privada.
│   │
│   ├── 6.1 Landing
│   │   │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│   │   ├── Hero
│   │   ├── propuesta de valor
│   │   ├── funcionalidades publicadas
│   │   └── CTA
│   │
│   ├── 6.2 Idiomas
│   │   │   [NOT_STARTED] [ Gemini ]
│   │   ├── ES
│   │   └── EN
│   │
│   ├── 6.3 Responsive
│   │   │   [NOT_STARTED] [ Gemini ]
│   │   ├── móvil
│   │   └── desktop
│   │
│   └── 6.4 Páginas futuras
│       │   [NOT_STARTED] [ Oskar ] [ Gemini ]
│       ├── manifiesto
│       ├── about
│       ├── privacidad
│       └── legal
│
│
├── FASE 7 — AUTENTICACIÓN Y CUENTA
│   │   [NOT_STARTED] [ Gemini ] [ ChatGpt ]
│   │
│   │   Descripción:
│   │   └── Implantar identidad de usuario, sesiones persistentes y protección
│   │       de las áreas privadas utilizando Better Auth y PostgreSQL.
│   │
│   ├── 7.1 Better Auth
│   │   │   [NOT_STARTED] [ Gemini ] [ ChatGpt ]
│   │   ├── schema
│   │   ├── adapter Drizzle
│   │   └── sesiones
│   │
│   ├── 7.2 Login
│   │   │   [NOT_STARTED] [ Gemini ]
│   │   ├── email
│   │   └── password
│   │
│   ├── 7.3 Logout
│   │   │   [NOT_STARTED] [ Gemini ]
│   │
│   ├── 7.4 Sesión persistente
│   │   │   [NOT_STARTED] [ Gemini ]
│   │
│   ├── 7.5 Rutas privadas
│   │   │   [NOT_STARTED] [ Gemini ] [ ChatGpt ]
│   │
│   └── 7.6 Registro público cerrado
│       │   [NOT_STARTED] [ Gemini ]
│
│
├── FASE 8 — PERFIL Y ONBOARDING
│   │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│   │
│   │   Descripción:
│   │   └── Crear el perfil personal que contextualiza la experiencia,
│   │       las unidades y los cálculos utilizados por Valhalla.
│   │
│   ├── 8.1 Onboarding
│   │   │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│   │   ├── idioma
│   │   ├── unidades
│   │   ├── nombre
│   │   ├── nacimiento
│   │   ├── sexo para fórmula
│   │   ├── altura
│   │   ├── peso
│   │   └── actividad
│   │
│   ├── 8.2 Identidad
│   │   │   [NOT_STARTED] [ Gemini ]
│   │
│   ├── 8.3 Biometría
│   │   │   [NOT_STARTED] [ Gemini ]
│   │
│   ├── 8.4 Unidades
│   │   │   [NOT_STARTED] [ Gemini ]
│   │
│   └── 8.5 Metabolismo
│       │   [NOT_STARTED] [ Gemini ] [ ChatGpt ]
│       ├── BMI
│       ├── BMR
│       └── TDEE
│
│
├── FASE 9 — CATÁLOGO DE EJERCICIOS
│   │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│   │
│   │   Descripción:
│   │   └── Incorporar y presentar el catálogo de movimientos sobre el que
│   │       se construirán posteriormente las rutinas y entrenamientos.
│   │
│   ├── 9.1 Dataset
│   │   │   [NOT_STARTED] [ Gemini ] [ ChatGpt ]
│   │   ├── importación
│   │   ├── normalización
│   │   ├── instrucciones
│   │   └── licencias
│   │
│   ├── 9.2 Catálogo
│   │   │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│   │   ├── listado
│   │   ├── búsqueda
│   │   ├── filtros
│   │   ├── Body Weight
│   │   ├── Casa
│   │   └── Sin material
│   │
│   ├── 9.3 Ficha de ejercicio
│   │   │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│   │
│   └── 9.4 Multimedia
│       │   [NOT_STARTED] [ Gemini ] [ ChatGpt ]
│       ├── miniatura
│       ├── GIF
│       └── validación de licencia
│
│
├── FASE 10 — RUTINAS
│   │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│   │
│   │   Descripción:
│   │   └── Permitir que el usuario construya y mantenga planes de
│   │       entrenamiento reutilizables a partir del catálogo de ejercicios.
│   │
│   ├── 10.1 Gestión
│   │   │   [NOT_STARTED] [ Gemini ]
│   │   ├── listar
│   │   ├── crear
│   │   ├── editar
│   │   ├── eliminar
│   │   └── reordenar
│   │
│   ├── 10.2 Configuración
│   │   │   [NOT_STARTED] [ Gemini ]
│   │
│   ├── 10.3 Selector de ejercicios
│   │   │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│   │   ├── fullscreen móvil
│   │   ├── layout desktop
│   │   ├── búsqueda
│   │   ├── filtros
│   │   ├── Casa / Body Weight
│   │   └── ficha breve
│   │
│   └── 10.4 Evolución futura
│       │   [NOT_STARTED] [ Oskar ] [ Gemini ]
│       ├── duplicar
│       ├── carpetas
│       ├── plantillas
│       └── mesociclos
│
│
├── FASE 11 — DASHBOARD
│   │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│   │
│   │   Descripción:
│   │   └── Crear el punto de entrada al área privada y presentar al usuario
│   │       la acción más útil según su situación actual.
│   │
│   ├── 11.1 Continuar entrenamiento
│   │   │   [NOT_STARTED] [ Gemini ]
│   ├── 11.2 Empezar entrenamiento
│   │   │   [NOT_STARTED] [ Gemini ]
│   ├── 11.3 Rutinas recientes
│   │   │   [NOT_STARTED] [ Gemini ]
│   ├── 11.4 Último entrenamiento
│   │   │   [NOT_STARTED] [ Gemini ]
│   ├── 11.5 Snapshot semanal
│   │   │   [NOT_STARTED] [ Gemini ]
│   └── 11.6 Empty state
│       │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│
│
├── FASE 12 — MOTOR DE ENTRENAMIENTO
│   │   [NOT_STARTED] [ Gemini ] [ Oskar ] [ ChatGpt ]
│   │
│   │   Descripción:
│   │   └── Construir el núcleo de Valhalla: registrar una sesión real,
│   │       conservarla de forma segura y proporcionar información útil
│   │       durante el entrenamiento.
│   │
│   ├── 12.1 Ciclo de sesión
│   │   │   [NOT_STARTED] [ Gemini ]
│   │   ├── iniciar
│   │   ├── reanudar
│   │   ├── cancelar
│   │   └── finalizar
│   │
│   ├── 12.2 Autoguardado y recuperación
│   │   │   [NOT_STARTED] [ Gemini ] [ ChatGpt ]
│   │   ├── persistencia progresiva
│   │   ├── refresh seguro
│   │   ├── cerrar / abrir navegador
│   │   └── recuperar in_progress
│   │
│   ├── 12.3 Series
│   │   │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│   │
│   ├── 12.4 Protección
│   │   │   [NOT_STARTED] [ Gemini ] [ ChatGpt ]
│   │
│   ├── 12.5 Ghost
│   │   │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│   │   ├── misma persona
│   │   ├── mismo ejercicio
│   │   ├── última sesión completed
│   │   ├── set por set
│   │   └── sets extra → último ghost
│   │
│   ├── 12.6 Sobrecarga progresiva
│   │   │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│   │
│   ├── 12.7 PR
│   │   │   [NOT_STARTED] [ Gemini ]
│   │
│   ├── 12.8 Volumen
│   │   │   [NOT_STARTED] [ Gemini ] [ ChatGpt ]
│   │
│   ├── 12.9 Temporizador
│   │   │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│   │
│   └── 12.10 Utilidades posteriores
│       │   [NOT_STARTED] [ Oskar ] [ Gemini ]
│       ├── quick weight
│       ├── memoria máquina
│       ├── warmup
│       ├── RPE / RIR
│       ├── Wake Lock
│       ├── ETA
│       ├── heatmap
│       ├── PR banner
│       ├── superseries
│       ├── calculadora discos
│       └── 1RM
│
│
├── FASE 13 — HISTORIAL, RESUMEN Y EVOLUCIÓN
│   │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│   │
│   │   Descripción:
│   │   └── Transformar las sesiones almacenadas en información útil para
│   │       comprender rendimiento, progreso, récords y tendencias.
│   │
│   ├── 13.1 Post-workout
│   │   │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│   ├── 13.2 Historial de sesiones
│   │   │   [NOT_STARTED] [ Gemini ]
│   ├── 13.3 Historial por ejercicio
│   │   │   [NOT_STARTED] [ Gemini ]
│   ├── 13.4 Evolución
│   │   │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│   ├── 13.5 Récords y tops
│   │   │   [NOT_STARTED] [ Gemini ]
│   ├── 13.6 Equivalencias
│   │   │   [NOT_STARTED] [ Oskar ] [ Gemini ]
│   ├── 13.7 Resúmenes compartibles
│   │   │   [NOT_STARTED] [ Oskar ] [ Gemini ]
│   ├── 13.8 Tu Saga
│   │   │   [NOT_STARTED] [ Oskar ] [ Gemini ]
│   └── 13.9 Informe mensual
│       │   [NOT_STARTED] [ Oskar ] [ Gemini ]
│
│
├── FASE 14 — AJUSTES Y CONTROL DE DATOS
│   │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│   │
│   │   Descripción:
│   │   └── Dar al usuario control sobre su cuenta, idioma, unidades,
│   │       configuración y los datos almacenados por Valhalla.
│   │
│   ├── 14.1 Cuenta
│   │   │   [NOT_STARTED] [ Gemini ]
│   ├── 14.2 Unidades
│   │   │   [NOT_STARTED] [ Gemini ]
│   ├── 14.3 Idioma
│   │   │   [NOT_STARTED] [ Gemini ]
│   ├── 14.4 Entrenamiento
│   │   │   [NOT_STARTED] [ Gemini ]
│   ├── 14.5 Comunicaciones
│   │   │   [NOT_STARTED] [ Oskar ] [ Gemini ]
│   ├── 14.6 Mis datos
│   │   │   [NOT_STARTED] [ Gemini ] [ ChatGpt ]
│   └── 14.7 Preferencias de notificación
│       │   [NOT_STARTED] [ Oskar ] [ Gemini ]
│
│
├── FASE 15 — MÉTRICAS CORPORALES
│   │   [NOT_STARTED] [ Oskar ] [ Gemini ]
│   │
│   │   Descripción:
│   │   └── Incorporar seguimiento corporal separado del rendimiento
│   │       deportivo, manteniendo historial y evolución temporal.
│   │
│   ├── 15.1 Peso
│   │   │   [NOT_STARTED] [ Gemini ]
│   ├── 15.2 Medidas
│   │   │   [NOT_STARTED] [ Gemini ]
│   ├── 15.3 Composición
│   │   │   [NOT_STARTED] [ Gemini ] [ ChatGpt ]
│   ├── 15.4 Fotos
│   │   │   [NOT_STARTED] [ Gemini ]
│   └── 15.5 Historial y evolución
│       │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│
│
├── FASE 16 — COMPARTIR
│   │   [NOT_STARTED] [ Oskar ] [ Gemini ]
│   │
│   │   Descripción:
│   │   └── Permitir generar representaciones visuales de sesiones,
│   │       progreso y logros sin exponer información privada por defecto.
│   │
│   ├── 16.1 Formatos
│   │   │   [NOT_STARTED] [ Oskar ] [ Gemini ]
│   ├── 16.2 Contenido
│   │   │   [NOT_STARTED] [ Oskar ] [ Gemini ]
│   ├── 16.3 Privacidad
│   │   │   [NOT_STARTED] [ Oskar ] [ Gemini ] [ ChatGpt ]
│   ├── 16.4 Web Share / PNG
│   │   │   [NOT_STARTED] [ Gemini ]
│   ├── 16.5 Rutinas públicas
│   │   │   [NOT_STARTED] [ Oskar ] [ Gemini ]
│   └── 16.6 Exportaciones
│       │   [NOT_STARTED] [ Gemini ]
│
│
├── FASE 17 — PWA
│   │   [NOT_STARTED] [ Gemini ] [ ChatGpt ] [ Oskar ]
│   │
│   │   Descripción:
│   │   └── Evolucionar Valhalla desde una aplicación web hacia una
│   │       experiencia instalable, manteniendo offline como problema
│   │       independiente.
│   │
│   ├── 17.1 Instalación
│   │   │   [NOT_STARTED] [ Gemini ]
│   ├── 17.2 Manifest / App Mode
│   │   │   [NOT_STARTED] [ Gemini ]
│   ├── 17.3 Push
│   │   │   [NOT_STARTED] [ Oskar ] [ Gemini ]
│   └── 17.4 Offline
│       │   [NOT_STARTED] [ Gemini ] [ ChatGpt ]
│       ├── cache
│       ├── IndexedDB
│       ├── cola offline
│       └── sync
│
│
├── FASE 18 — ANALÍTICA AVANZADA
│   │   [NOT_STARTED] [ Oskar ] [ Gemini ]
│   │
│   │   Descripción:
│   │   └── Añadir análisis más profundo cuando exista suficiente historial
│   │       real como para que las conclusiones aporten valor.
│   │
│   ├── 18.1 Fuerza
│   │   │   [NOT_STARTED] [ Gemini ]
│   ├── 18.2 Programación
│   │   │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│   ├── 18.3 Musculatura
│   │   │   [NOT_STARTED] [ Gemini ]
│   └── 18.4 Comparaciones
│       │   [NOT_STARTED] [ Gemini ]
│
│
├── FASE 19 — INTELIGENCIA ARTIFICIAL
│   │   [NOT_STARTED] [ Oskar ] [ Gemini ] [ ChatGpt ]
│   │
│   │   Descripción:
│   │   └── Incorporar funciones inteligentes como capa de recomendación,
│   │       manteniendo siempre la decisión final en manos del usuario.
│   │
│   ├── 19.1 Smart Deload
│   │   │   [NOT_STARTED] [ Oskar ] [ Gemini ] [ ChatGpt ]
│   │
│   └── 19.2 Generador por restricciones
│       │   [NOT_STARTED] [ Oskar ] [ Gemini ] [ ChatGpt ]
│       ├── tiempo
│       ├── molestias
│       ├── equipamiento
│       ├── ejercicio ocupado
│       ├── casa
│       └── objetivo
│
│
├── FASE 20 — NOTIFICACIONES Y RECORDATORIOS
│   │   [NOT_STARTED] [ Oskar ] [ Gemini ]
│   │
│   │   Descripción:
│   │   └── Añadir avisos únicamente cuando existan eventos reales que
│   │       justifiquen interrumpir o recordar algo al usuario.
│   │
│   ├── 20.1 Centro de notificaciones
│   │   │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│   ├── 20.2 Recordatorios
│   │   │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│   ├── 20.3 Informes
│   │   │   [NOT_STARTED] [ Gemini ]
│   ├── 20.4 Sync
│   │   │   [NOT_STARTED] [ Gemini ] [ ChatGpt ]
│   └── 20.5 Preferencias
│       │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│
│
├── FASE 21 — SOCIAL
│   │   [NOT_STARTED] [ Oskar ] [ Gemini ]
│   │
│   │   Descripción:
│   │   └── Añadir interacción social controlada después de que la experiencia
│   │       individual de entrenamiento esté consolidada.
│   │
│   ├── 21.1 Círculo privado
│   │   │   [NOT_STARTED] [ Oskar ] [ Gemini ]
│   ├── 21.2 Comparación 1 vs 1
│   │   │   [NOT_STARTED] [ Oskar ] [ Gemini ]
│   └── 21.3 Continuidad
│       │   [NOT_STARTED] [ Oskar ] [ Gemini ]
│       ├── streaks
│       ├── rescue notifications
│       └── Wrapped / Tu Saga
│
│
├── FASE 22 — SOBRE VALHALLA Y LEGAL
│   │   [NOT_STARTED] [ Oskar ] [ Gemini ] [ ChatGpt ]
│   │
│   │   Descripción:
│   │   └── Completar la identidad pública del proyecto y cubrir las
│   │       obligaciones de privacidad y condiciones de uso que correspondan.
│   │
│   ├── 22.1 Identidad
│   │   │   [NOT_STARTED] [ Oskar ] [ Gemini ]
│   │   ├── manifiesto
│   │   └── Sobre Valhalla
│   │
│   ├── 22.2 Privacidad
│   │   │   [NOT_STARTED] [ Oskar ] [ ChatGpt ]
│   │
│   └── 22.3 Legal
│       │   [NOT_STARTED] [ Oskar ] [ ChatGpt ]
│       ├── términos
│       ├── descargo médico
│       └── cookies si realmente se utilizan
│
│
├── FASE 23 — PREPARACIÓN Y SALIDA A PRODUCCIÓN
│   │   [NOT_STARTED] [ Oskar ] [ ChatGpt ] [ Gemini ]
│   │
│   │   Descripción:
│   │   └── Publicar únicamente una versión que ya haya sido validada en
│   │       Development y aceptada expresamente por Oskar.
│   │
│   ├── 23.1 Baseline aceptada
│   │   │   [NOT_STARTED] [ Oskar ]
│   │
│   ├── 23.2 CI final
│   │   │   [NOT_STARTED] [ Gemini ] [ ChatGpt ]
│   │
│   ├── 23.3 Backups
│   │   │   [NOT_STARTED] [ ChatGpt ]
│   │
│   ├── 23.4 Migraciones
│   │   │   [NOT_STARTED] [ Gemini ] [ ChatGpt ]
│   │
│   ├── 23.5 Release
│   │   │   [NOT_STARTED] [ Oskar ] [ Gemini ]
│   │
│   ├── 23.6 develop → main
│   │   │   [NOT_STARTED] [ Oskar ] [ Gemini ]
│   │
│   ├── 23.7 Tag
│   │   │   [NOT_STARTED] [ Gemini ]
│   │
│   ├── 23.8 Deploy Production
│   │   │   [NOT_STARTED] [ Gemini ] [ ChatGpt ]
│   │
│   ├── 23.9 Health
│   │   │   [NOT_STARTED] [ Gemini ] [ ChatGpt ]
│   │
│   ├── 23.10 Smoke crítico
│   │   │   [NOT_STARTED] [ Gemini ] [ Oskar ]
│   │
│   └── 23.11 Rollback
│       │   [NOT_STARTED] [ ChatGpt ] [ Gemini ]
│
│
└── FASE 24 — EVOLUCIÓN CONTINUA
    │   [NOT_STARTED] [ Oskar ] [ ChatGpt ] [ Gemini ]
    │
    │   Descripción:
    │   └── Modelo permanente de evolución una vez exista producto:
    │       pequeños incrementos, revisión humana y protección de todo
    │       aquello que ya haya sido aceptado.
    │
    ├── CURRENT
    │   └── [ Oskar ]
    │
    ├── Implementación
    │   └── [ Gemini ]
    │
    ├── Apoyo técnico / bloqueo
    │   └── [ ChatGpt ]
    │
    ├── Validación técnica
    │   └── [ Gemini ] [ ChatGpt ]
    │
    ├── Development
    │   └── [ Gemini ]
    │
    ├── Owner Review
    │   └── [AWAITING_OWNER_REVIEW] [ Oskar ]
    │
    ├── Aceptación
    │   └── [ACCEPTED_LOCKED] [ Oskar ]
    │
    ├── Ideas nuevas
    │   └── BACKLOG [ Oskar ]
    │
    ├── Bugs
    │   └── regression [ Gemini ] [ ChatGpt ]
    │
    └── Siguiente CURRENT
        └── [ Oskar ]


========================================================================================
                       FIN PLAN_MAESTRO_DE_EJECUCIÓN
========================================================================================

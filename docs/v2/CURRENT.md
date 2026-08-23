# CURRENT

Estado: `IN_PROGRESS`

## Tarea autorizada

FASE 5.1 — Identidad.

## Resultado observable

La identidad conceptual de Valhalla queda definida en `DESIGN.md` mediante principios suficientemente concretos para orientar las decisiones visuales y de producto posteriores sin convertir la temática nórdica en decoración excesiva ni sacrificar usabilidad.

## Baseline preservada

Se conserva como punto de partida:

- fitness moderno con identidad vikinga sutil;
- personalidad fuerte, sobria, limpia y moderna;
- épica con moderación;
- accesibilidad para principiantes;
- `Linear Calm` como baseline visual actualmente aceptada;
- identidad nórdica basada en señales discretas;
- prohibición de estética RPG, rune clutter y ornamentación pesada;
- lenguaje de marca ya existente:
  - Conquistas;
  - Tu Saga;
  - La Carga de tu Saga;
  - Peso conquistado.

Esta fase no reabre esas decisiones salvo contradicción demostrable.

## Scope incluido

Actualizar únicamente `DESIGN.md` para hacer operativa la identidad de Valhalla.

Debe quedar definido:

### Núcleo de identidad

- qué significa "fitness moderno";
- qué significa "identidad vikinga sutil";
- cómo conviven fuerza y claridad;
- cómo se mantiene una experiencia accesible para principiantes sin infantilizarla;
- qué elementos deben hacer reconocible a Valhalla incluso sin decoración nórdica explícita.

### Principios de expresión

Definir principios equivalentes a:

- funcionalidad antes que temática;
- fuerza sin agresividad visual innecesaria;
- épica mediante jerarquía, lenguaje y composición, no mediante ornamentación constante;
- identidad nórdica como acento, no como estructura obligatoria de cada componente;
- modernidad antes que recreación histórica;
- claridad antes que metáforas de marca.

### Identidad nórdica

Precisar:

- cuándo tiene sentido usar geometría, escudos o emblemas;
- cuándo no deben utilizarse;
- que los símbolos históricos requieren validar significado y contexto antes de incorporarlos;
- que no se deben utilizar símbolos históricos como simple decoración desconocida;
- que Valhalla debe seguir siendo reconocible aunque una pantalla no contenga ningún símbolo nórdico.

### Lenguaje de marca

Mantener las expresiones existentes y definir su uso con moderación.

El lenguaje temático debe reservarse principalmente para:

- progreso;
- logros;
- recapitulaciones;
- hitos;
- narrativa personal.

No sustituir términos funcionales claros por metáforas cuando puedan dificultar la comprensión.

Por ejemplo, acciones estándar como:

- Guardar;
- Cancelar;
- Editar;
- Eliminar;
- Iniciar sesión;

deben seguir siendo explícitas salvo que exista una razón de UX concreta para otra denominación.

### Límites

Debe quedar explícito que Valhalla no es:

- una interfaz RPG;
- una recreación histórica;
- una estética gamer/neón;
- una colección de runas;
- una interfaz agresiva o intimidante;
- una excusa para sacrificar accesibilidad;
- una marca basada únicamente en escudos, metal, piedra o iconografía nórdica.

## Fuente de verdad

`DESIGN.md` sigue siendo la fuente de verdad de identidad visual y UX.

No crear un segundo documento de identidad que duplique sus decisiones.

## Scope excluido

No modificar en esta fase:

- código;
- componentes;
- App Shell;
- paleta;
- valores de `Linear Calm`;
- tokens;
- tipografía;
- geometría visual concreta;
- iconografía concreta;
- logo;
- logotipo;
- emblema definitivo;
- ilustraciones;
- motion;
- microinteracciones;
- accesibilidad técnica;
- landing;
- copy comercial;
- manifiesto público;
- páginas About/Sobre Valhalla.

Esos elementos pertenecen a fases posteriores.

## Criterio de aceptación

- `DESIGN.md` conserva la baseline aceptada;
- la identidad "fitness moderno + vikinga sutil" queda explicada de forma operativa;
- queda claro qué es y qué no es Valhalla;
- queda definido cuándo usar lenguaje temático y cuándo priorizar lenguaje funcional;
- la identidad nórdica queda subordinada a usabilidad y claridad;
- no se introducen decisiones propias de FASE 5.2 o posteriores;
- no se modifica código;
- `git diff --check` está limpio.

## Estado previo

- FASE 4 — Fundación técnica: `ACCEPTED_LOCKED`.
- FASE 4.6 — App Shell: `ACCEPTED_LOCKED`.

## Responsable principal

Oskar decide la identidad y acepta el resultado.

Gemini consolida la documentación autorizada.

ChatGPT apoya detectando contradicciones, exceso temático y límites de scope.

## Después de aceptar

Siguiente candidato: FASE 5.2 — Sistema visual.

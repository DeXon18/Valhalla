# Diseño de Valhalla

## Concepto

Fitness moderno con identidad vikinga sutil.

## Personalidad

Fuerte, sobria, limpia y moderna. Épica con moderación y accesible para principiantes.

## Núcleo de identidad

- **Fitness moderno:** Producto actual, claro, funcional, preciso y centrado en el entrenamiento y el progreso, no en una estética histórica.
- **Vikingo sutil:** Referencias nórdicas como capa de personalidad, nunca como requisito decorativo constante.
- **Fuerza sobria:** Transmitir determinación mediante jerarquía, lenguaje, contraste y composición, no mediante agresividad visual.
- **Accesibilidad para principiantes:** La interfaz tiene carácter sin exigir conocimiento previo ni vocabulario temático para entenderla y operarla.

## Principios operativos

- Funcionalidad antes que temática.
- Claridad antes que metáfora.
- Fuerza sin agresividad gratuita.
- Épica mediante jerarquía, narrativa y momentos relevantes.
- Identidad nórdica como acento, no como decoración obligatoria.
- Modernidad antes que recreación histórica.
- La temática nunca puede degradar accesibilidad, navegación o comprensión.

## Reconocibilidad

Valhalla debe poder reconocerse incluso en una pantalla sin runas, escudos o referencias nórdicas explícitas.

La identidad se sostiene mediante:

- tono sobrio y directo;
- jerarquía visual limpia y contundente;
- precisión en la presentación de datos;
- uso controlado del acento de marca;
- narrativa consistente de progreso y esfuerzo.

## Sistema cromático

La baseline actual es `Linear Calm`: una interfaz dark contemporánea, sobria y de alto contraste, basada principalmente en neutros fríos y superficies diferenciadas por luminosidad.

### Roles cromáticos

- `background`: Plano base de la aplicación sobre el que descansan las superficies.
- `surface`: Contenedor principal que agrupa bloques de contenido e información.
- `raised`: Nivel adicional de separación visual sobre `surface` para elementos destacados o subpaneles.
- `border`: Separación estructural discreta entre elementos sin dominar la composición.
- `border-subtle`: Delimitación de menor énfasis para divisiones internas o estados secundarios.
- `foreground`: Información textual y gráfica principal (casi blanco, máximo contraste).
- `muted`: Información secundaria, etiquetas de apoyo y estados atenuados.
- `primary`: Acento de marca (azul-violeta desaturado) exclusivo para acción, selección, foco y énfasis relevante. No es un color de relleno decorativo.
- `primary-subtle`: Fondo de énfasis primario contenido para estados activos o seleccionados discretos.
- `primary-foreground`: Texto legible de alto contraste sobre fondos con color `primary`.
- `success`, `warning`, `danger`: Colores semánticos para comunicar estado operativo o criticidad. No forman parte de la identidad de marca ni de la decoración general.

Principios:

- fondo muy oscuro con matiz frío;
- superficies oscuras separadas principalmente por luminosidad, no por colores saturados;
- bordes discretos y de bajo contraste;
- texto principal casi blanco y texto secundario claramente atenuado;
- un único acento de marca azul-violeta desaturado utilizado con moderación;
- evitar glow, neón, grandes superficies saturadas y estética cyberpunk/gamer;
- la identidad nórdica no depende de marrones, dorados o texturas pesadas.

La UI debe consumir únicamente tokens cromáticos semánticos. Los valores concretos de la paleta pertenecen a `src/styles/themes.css`, de modo que pueda cambiarse un tema sin modificar los componentes.

## Tipografía

Baseline tipográfica:

- Pila de sistema nativa (`system-ui`, `-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, `Roboto`, `sans-serif`) para `font-heading` y `font-body`.
- Sin fuentes externas para maximizar rendimiento, robustez y claridad.
- Títulos robustos mediante peso, escala de jerarquía y espaciado, sin requerir familias tipográficas distintas a las del cuerpo.
- Cuerpo e interfaz prioritariamente legibles con interletrado natural.
- Uppercase y tracking amplio reservados exclusivamente para funciones concretas de etiquetado o jerarquía estructural secundaria.
- Evitar tipografías rúnicas, góticas, medievales o decorativas en la interfaz funcional.

## Geometría

Dirección visual:

- Geometría simple, limpia y contemporánea.
- Radios pequeños y contenidos como estándar base.
- Bordes discretos y de baja presencia visual.
- Superficies predominantemente planas.
- Evitar formas excesivamente redondeadas (estilo píldora en tarjetas) o agresivamente angulares.
- Los escudos, remates biselados o geometría temática nunca deben ser la estructura obligatoria de controles ni contenedores.
- La geometría nórdica solo puede aparecer como acento cuando tenga un propósito contextual claro.

## Elevación y profundidad

La separación y jerarquía espacial dependen de:

- Diferencias de luminosidad entre las superficies (`background` → `surface` → `raised`).
- Bordes estructurales discretos (`border`, `border-subtle`).
- Composición clara y espacio (`spacing`).

Las sombras no forman parte de la baseline por defecto. Podrán introducirse posteriormente solo cuando comuniquen elevación o interacción de forma estrictamente funcional.

## Lenguaje visual

Valhalla debe sentirse:

- oscuro pero altamente legible;
- fuerte pero no agresivo;
- preciso;
- sobrio y contemporáneo;
- contenido;
- denso solo cuando la información o el análisis del entrenamiento lo requieran;
- reconocible por su jerarquía y coherencia, no por ornamentación.

Reglas fundamentales:

- un solo acento de marca dominante;
- jerarquía antes que decoración;
- contraste antes que efectos;
- superficies antes que sombras;
- espacio antes que separadores innecesarios;
- temática nórdica como acento sutil;
- evitar gradientes decorativos, glow, blur y ruido visual;
- no transformar cada elemento de interfaz en una pieza de branding.

## Identidad nórdica

Se permiten emblemas discretos, escudos o geometría nórdica solo cuando refuercen significado o contexto.

Reglas:

- evitar decoración repetitiva;
- los símbolos históricos requieren investigar y validar su significado antes de incorporarse;
- no usar símbolos históricos cuyo significado no esté confirmado;
- no utilizar una referencia nórdica si una solución neutral comunica mejor la función;
- nunca sustituir affordances convencionales por ornamentación temática (un botón debe parecer un botón).

## Lenguaje de marca

Expresiones identitarias:

- Conquistas.
- Tu Saga.
- La Carga de tu Saga.
- Peso conquistado.

Uso del lenguaje:

- **Lenguaje temático:** Reservado principalmente para hitos, logros, progreso, recapitulaciones y narrativa personal.
- **Lenguaje funcional directo:** Imprescindible para acciones estándar (Guardar, Cancelar, Editar, Eliminar, Buscar, Filtrar, Iniciar sesión, Cerrar sesión), campos, validaciones y navegación. No convertir cada acción de producto en una metáfora nórdica.

## Qué no es Valhalla

Valhalla no es:

- un RPG;
- una recreación histórica;
- una interfaz gamer o cyberpunk;
- una colección de runas;
- una estética agresiva o intimidante;
- una marca sustentada únicamente en metal, piedra, escudos o iconografía;
- una excusa para sacrificar accesibilidad;
- una interfaz oscura y críptica por motivos temáticos.

## Motion

Principios de movimiento e interacción:

- Motion breve, directo y funcional, destinado a dar feedback inmediato a las acciones del usuario.
- Duración orientativa: 120–180ms (150ms como baseline general).
- Transiciones limitadas estrictamente a propiedades justificadas (`color`, `background-color`, `border-color`, `transform`).
- Prohibido el uso de `transition-all`.
- Microinteracciones de escala (`transform: scale(...)`) reservadas únicamente como feedback táctil de presión en controles interactivos habilitados.
- Sin animación ambiental, decorativa, continua o innecesaria.
- `prefers-reduced-motion: reduce` obligatorio en todo motion no esencial: elimina transiciones y transformaciones espaciales, garantizando que el cambio de estado sea inmediato y accesible sin perder feedback funcional.

## Accesibilidad

Contraste suficiente, targets táctiles adecuados, labels, navegación por teclado, foco visible, información que no dependa solo del color y texto legible.

## Acciones destructivas

Usar undo cuando resulte natural. Confirmar cuando el daño sea importante. Evitar pérdida por toque accidental.
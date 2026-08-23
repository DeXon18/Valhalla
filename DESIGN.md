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

Principios:

- fondo muy oscuro con matiz frío;
- superficies oscuras separadas principalmente por luminosidad, no por colores saturados;
- bordes discretos y de bajo contraste;
- texto principal casi blanco y texto secundario claramente atenuado;
- un único acento de marca azul-violeta desaturado;
- el acento se utiliza con moderación para acciones, selección, foco y elementos relevantes;
- success, warning y danger son colores semánticos y no forman parte de la identidad principal;
- evitar glow, neón, grandes superficies saturadas y estética cyberpunk/gamer;
- la identidad nórdica no depende de marrones, dorados o texturas pesadas.

La UI debe consumir únicamente tokens cromáticos semánticos. Los valores concretos de la paleta pertenecen a `src/styles/themes.css`, de modo que pueda cambiarse un tema sin modificar los componentes.

## Tipografía

- Títulos robustos.
- Cuerpo e interfaz altamente legibles.

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

Breve y funcional. Debe respetar `reduced-motion`.

## Accesibilidad

Contraste suficiente, targets táctiles adecuados, labels, navegación por teclado, foco visible, información que no dependa solo del color y texto legible.

## Acciones destructivas

Usar undo cuando resulte natural. Confirmar cuando el daño sea importante. Evitar pérdida por toque accidental.
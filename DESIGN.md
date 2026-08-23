# Diseño de Valhalla

## Concepto

Fitness moderno con identidad vikinga sutil.

## Personalidad

Fuerte, sobria, limpia y moderna. Épica con moderación y accesible para principiantes.

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

Se permiten escudos discretos, emblemas, geometría nórdica y referencias sutiles a piedra o metal. Los símbolos históricos requieren investigar su significado antes de utilizarlos.

No se permite saturar la interfaz con runas, convertirla en una estética RPG, usar texturas pesadas, convertir todos los botones en escudos ni sacrificar usabilidad por temática.

## Lenguaje de marca

- Conquistas.
- Tu Saga.
- La Carga de tu Saga.
- Peso conquistado.

## Motion

Breve y funcional. Debe respetar `reduced-motion`.

## Accesibilidad

Contraste suficiente, targets táctiles adecuados, labels, navegación por teclado, foco visible, información que no dependa solo del color y texto legible.

## Acciones destructivas

Usar undo cuando resulte natural. Confirmar cuando el daño sea importante. Evitar pérdida por toque accidental.
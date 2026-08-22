# GitHub como fuente de verdad

GitHub es la fuente de verdad del código integrado de Valhalla.

Para cambios que deban incorporarse a Development:

- trabajar en una rama temporal;
- revisar el diff;
- usar staging selectivo;
- crear commit coherente;
- publicar la rama;
- integrar mediante Pull Request hacia `develop`.

No usar merge local para saltarse GitHub.

No hacer push directo a `main`.

No usar force push.

No considerar integrado un cambio que solo exista en el working tree o en una rama local.

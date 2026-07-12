# Corrección de navegación móvil y `index.txt`

Esta versión conserva el menú hamburguesa corregido y evita que los archivos técnicos `.txt` de Next.js se muestren como páginas.

Cambios principales:
- Navegación interna mediante enlaces HTML normales, adecuada para una exportación estática.
- Redirecciones de seguridad para `index.txt` y los archivos `.txt` de cada ruta.
- URLs públicas limpias; el visitante seguirá viendo `drivercraft.net`, `/aventura`, `/sistemas`, etc.
- Build verificado con `npm run build`.

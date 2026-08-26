# Arreglar los números que no se ven en los títulos

## Causa confirmada

Los archivos de Blacker instalados en `public/fonts/` son versiones demo de Zetafonts: los glifos `zero`–`nine` no son números, son la marca de agua "ZETAFONTS.COM". Se confirma porque los diez dígitos tienen exactamente el mismo ancho (2531 unidades) mientras las letras miden ~1460–1540. Por eso "10:30" y "1:30" aparecen como barras con texto diminuto en el hero de `/brunch` (y en cualquier otro texto con dígitos en Blacker).

## Solución

Mantener Blacker para letras y renderizar solo los dígitos con una serif gratuita muy similar (Cormorant Garamond), usando `unicode-range` en CSS. No cambia el copy, no requiere licencias, y aplica automáticamente en todo el sitio.

## Cambios

1. `index.html`: cargar Cormorant Garamond (400/600) desde Google Fonts con `preconnect`.
2. `src/index.css`: después de las declaraciones `@font-face` de Blacker, añadir dos `@font-face` extra con el mismo `font-family: 'Blacker Display'` (regular y bold) cuyo `src` sea `local('Cormorant Garamond')`/la fuente cargada, restringidos a `unicode-range: U+0030-0039, U+002C, U+003A` (dígitos, coma y dos puntos, para que el `:` de la hora combine). Al declararse después, el navegador usa esa cara solo para esos caracteres.
3. Repetir el mismo par para `font-family: 'Blacker Pro Text'` (fuente `font-elegant`), que tiene el mismo defecto en subtítulos y textos con números (teléfonos, horarios en Ubicación y Contacto).
4. Ajuste fino opcional: ligero `size-adjust` o `ascent-override` en esas caras si los números quedan visualmente más pequeños o más grandes que las letras de Blacker.

## Verificación

Capturar con Playwright el hero de `/brunch`, la sección de Ubicación y la de Contacto para confirmar que "10:30 a.m. a 1:30 p.m.", el horario "12:00 PM — 11:00 PM" y los teléfonos se leen correctamente.

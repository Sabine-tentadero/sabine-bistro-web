Quitar los botones flotantes (widgets) en /brunch

Objetivo
La página `/brunch` se usará como landing para campañas de Google Ads, por lo que no debe tener puntos de fuga adicionales. Se debe eliminar el botón flotante de WhatsApp y el botón flotante de reserva que aparecen en la esquina inferior derecha, dejando únicamente el CTA principal del hero.

Problema actual
Los botones flotantes están definidos dentro de `src/components/Footer.tsx` y se renderizan en todas las páginas, incluida `/brunch`.

Solución
1. Añadir una prop opcional `hideFloatingButtons?: boolean` al componente `Footer.tsx`.
2. Condicionar el renderizado de los botones flotantes para que no aparezcan cuando `hideFloatingButtons` sea `true`.
3. En `src/pages/Brunch.tsx`, pasar `<Footer hideFloatingButtons />`.
4. Dejar `Index.tsx` y `Contacto.tsx` sin cambios para que conserven los botones flotantes.
5. Verificar que el build y TypeScript sigan funcionando.

Archivos a editar
- `src/components/Footer.tsx`
- `src/pages/Brunch.tsx`

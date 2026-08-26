# Reemplazar "cocina de autor" por "bistró americano" en /brunch

## Objetivo
Actualizar el copy de la página `/brunch` para que el posicionamiento sea "bistró americano" en lugar de "cocina de autor", en español e inglés.

## Cambios propuestos

1. **Actualizar traducciones en `src/contexts/LanguageContext.tsx`**
   - `brunch.hero.subtitle` (ES): cambiar "Cocina de autor" por "Bistró americano".
   - `brunch.about.p1` (ES): cambiar "creatividad de la cocina de autor" por una redacción con "bistró americano".
   - `brunch.hero.subtitle` (EN): cambiar "Chef-driven cuisine" por "American bistro".
   - `brunch.about.p1` (EN): cambiar "chef-driven creativity" por una redacción con "American bistro".

2. **Ajustar SEO de `/brunch` en `src/pages/Brunch.tsx` (consistencia)**
   - `description` (ES): cambiar "Brunch de autor" por "Brunch de bistró americano".
   - `description` (EN): cambiar "Chef-driven brunch" por "American bistro brunch".

3. **No tocar**
   - Diseño visual, video, botones, navbar, horarios del brunch, ni otras páginas.

## Resultado esperado
El hero y la sección "Sobre el brunch" de `/brunch` dirán "bistró americano" / "American bistro", alineando la descripción SEO con el nuevo mensaje.

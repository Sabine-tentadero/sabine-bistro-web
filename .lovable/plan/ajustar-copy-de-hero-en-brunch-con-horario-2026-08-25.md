# Ajustar copy de hero en /brunch con horario

## Objetivo
Actualizar el texto del hero de `/brunch` para que el usuario sepa que el brunch es los sábados de **10:30 a.m. a 1:30 p.m.**

## Cambios propuestos

1. **Actualizar traducciones en `src/contexts/LanguageContext.tsx`**
   - `brunch.hero.title` (ES): "Brunch en Cartagena — Sábados 10:30 a.m. a 1:30 p.m." (o similar con la hora).
   - `brunch.hero.subtitle` (ES): mantener la vibra de cocina de autor / coctelería, posiblemente como frase complementaria sin repetir "sábado".
   - `brunch.hero.title` (EN) y `brunch.hero.subtitle` (EN): equivalente con horario.

2. **Ajustar SEO de `/brunch` en `src/pages/Brunch.tsx`**
   - Incluir el horario en la `description` de ES/EN para coherencia con el hero.
   - Corregir `openingHoursSpecification` del JSON-LD: cambiar `opens` de `11:00` a `10:30` y `closes` de `15:00` a `13:30`, para que coincida con el horario real.

3. **No tocar**
   - Diseño visual, video, botones, navbar, ni el resto de páginas.

## Resultado esperado
El hero de `/brunch` dirá explícitamente que el brunch es los sábados de 10:30 a.m. a 1:30 p.m., en español e inglés, y el marcado estructurado reflejará el mismo horario.

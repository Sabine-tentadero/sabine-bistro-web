# Nuevas páginas /brunch y /contacto

El home (/) queda intacto en contenido y bloques; solo se le suma la navegación nueva.

## Navbar (compartido por las 3 páginas)

- Tres links exactos en este orden: Inicio (/), Brunch (/brunch), Contacto (/contacto). Todos son rutas reales de React Router, no anclas.
- Se elimina el link actual "Ubicación" (#location) porque no funciona entre páginas; su contenido queda dentro de /contacto.
- Link activo resaltado en dorado (#957A4C) según la página en la que estés.
- Toggle ES | EN actual, sin cambios.
- CTA a la derecha según página: Home → "Reservar Mesa" (Precompro, como hoy); Brunch → "Reservar Brunch" (WhatsApp brunch); Contacto → "Reservar por WhatsApp" (WhatsApp contacto).
- En móvil sigue el menú hamburguesa, con los 3 links y el CTA grande.

## /brunch

Reutiliza la estructura del home. Bloques 3 (carrusel + oferta), 4, 5 (ubicación) y 7 (footer) idénticos al home; hero y "quiénes somos" adaptados, y el CTA final con texto y enlace de brunch.

1. Hero: mismo video del home (autoplay, muted, loop, playsInline) con el mismo overlay; H1 y subtítulo de brunch en ES/EN; botón grande "RESERVAR BRUNCH" / "BOOK BRUNCH" al link de WhatsApp de brunch con sus UTMs, en pestaña nueva.
2. Bloque tipo "Quiénes somos" con el título y el cuerpo de brunch en ES/EN, mismo diseño y espaciado.
3. Carrusel: 6 slots placeholder "Imagen brunch pendiente" / "Brunch image coming soon" con el mismo tratamiento visual del carrusel del home, listos para reemplazar por tus fotos.
4. Bloque de oferta/experiencia igual al home.
5. Ubicación igual al home.
6. CTA final: "Reserva tu brunch este sábado" / "Book your brunch this Saturday" + botón grande al mismo link de WhatsApp de brunch.
7. Footer igual al home (incluye botones flotantes).

SEO: title y description ES/EN exactos, canonical `https://sabinebistro.com/brunch`, og/twitter propios y JSON-LD `Restaurant` con `servesCuisine: ["Brunch","American Bistro","Contemporary"]`, dirección La Serrezuela pisos 2 y 3, `priceRange "$$$"` y horario de sábado 11:00–15:00 como placeholder ajustable.

## /contacto

Mantiene bloques 1, 3, 5, 6 y 7 del home; omite el bloque "quiénes somos" y el de oferta.

1. Hero: mismo video y overlay; H1 "Contacto y Ubicación" / "Contact & Location" y subtítulo indicado.
2. Carrusel de imágenes igual al home.
3. Ubicación igual al home.
4. Bloque "Comunícate con nosotros" / "Get in touch" con subtítulo, dividido en dos partes:
   - Reservas: botón "RESERVAR POR WHATSAPP" / "BOOK VIA WHATSAPP" con el link de WhatsApp de reservas y sus UTMs.
   - Eventos privados y corporativos: los dos teléfonos como enlaces `tel:` y botón secundario "CONSULTAR POR EVENTO" / "INQUIRE ABOUT AN EVENT" con el link de eventos.
5. Footer igual al home.

SEO: title y description ES/EN exactos, canonical `https://sabinebistro.com/contacto`, og/twitter propios y JSON-LD `Restaurant` completo (address, geo, openingHours, telephone).

## Sobre "meta tags en el HTML inicial"

Este proyecto es una SPA de Vite sin renderizado en servidor: los tags por ruta se inyectan con react-helmet-async, lo que Google (que ejecuta JS) sí lee, pero los crawlers de previsualización social (WhatsApp, Facebook, LinkedIn) solo ven el `index.html` estático. Para que los meta tags salgan realmente en el HTML inicial hace falta SSR: la app se puede pasar a la plantilla más reciente de Lovable escribiendo "/" en el chat y eligiendo "Migrate to TanStack Start" ([qué aporta el upgrade](https://lovable.dev/blog/building-apps-using-tanstack-start)). Mientras tanto implemento react-helmet-async (lo mejor posible en este stack) y lo dejo listo para migrar.

## Detalles técnicos

- Rutas `/brunch` y `/contacto` en `src/App.tsx` antes del catch-all; páginas `src/pages/Brunch.tsx` y `src/pages/Contacto.tsx`.
- Instalar `react-helmet-async`, montar `HelmetProvider` en `src/main.tsx` y crear un componente `Seo` reutilizable (title, description, canonical, og/twitter, JSON-LD) usado también para el home; se quita el canonical estático de `index.html`.
- `Navbar` recibe variante de CTA por página y usa `useLocation` para marcar el link activo; los links internos con `react-router` y scroll al top al cambiar de ruta.
- Secciones reutilizadas se parametrizan con props (título/cuerpo/CTA) en lugar de duplicar código; carrusel de brunch acepta lista de slides con placeholders.
- Nuevos textos como claves `brunch.*` y `contact.*` en `LanguageContext`.
- Tracking: nuevos eventos `whatsapp_click` con `cta_location` (`brunch_hero_cta`, `brunch_final_cta`, `contact_reservation_cta`, `contact_events_cta`) vía `src/lib/gtm.ts`; UTMs de los href se conservan tal cual.
- `/brunch` y `/contacto` se agregan a `public/sitemap.xml`.
- Verificación final: reviso las 3 rutas en el preview (desktop y móvil) antes de que publiques.

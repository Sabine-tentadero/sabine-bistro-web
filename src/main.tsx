import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;
const sinBarra = (p: string) => p.replace(/\/+$/, "") || "/";
const app = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Las páginas prerenderizadas traen el HTML listo y React lo retoma sin volver a pintarlo.
// Solo si el HTML es de esta misma ruta: si el servidor entregó otro (p. ej. spa.html), se pinta desde cero.
if (root.dataset.ruta && sinBarra(root.dataset.ruta) === sinBarra(location.pathname)) hydrateRoot(root, app);
else createRoot(root).render(app);

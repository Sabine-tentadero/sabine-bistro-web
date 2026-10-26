import { useEffect, type ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Brunch from "./pages/Brunch";
import Menu from "./pages/Menu";
import Contacto from "./pages/Contacto";
import PoliticaDatos from "./pages/PoliticaDatos";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./contexts/LanguageContext";
import { captureAttribution } from "./lib/attribution";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Re-captura por si el usuario navega interno con params UTM
    captureAttribution();
  }, [pathname]);

  return null;
};

const AttributionInit = () => {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
};

/** Proveedores comunes. El navegador y el prerender (entry-server.tsx) arman el mismo árbol. */
export const Providers = ({ children, initialLang }: { children: ReactNode; initialLang?: "es" | "en" }) => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider initialLang={initialLang}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {children}
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export const AppRoutes = () => (
  <>
    <AttributionInit />
    <ScrollToTop />
    <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/en/menu" element={<Menu />} />
            <Route path="/brunch" element={<Brunch />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/politica-de-datos" element={<PoliticaDatos />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

const App = () => (
  <Providers>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Providers>
);

export default App;

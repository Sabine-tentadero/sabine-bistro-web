import { useLanguage, type Lang } from "@/contexts/LanguageContext";
import { formatoPrecio } from "@/lib/carta";

// Menú del brunch "Late Morning · All you can eat" en HTML (para Google y las IA), con la imagen
// original como respaldo. Fuente: public/menu-brunch-sabine.jpg (enviada por el cliente, 29-oct-2026).
export const PRECIOS_BRUNCH = { adulto: 160000, nino: 80000 };

type Grupo = { titulo?: string; items: string[] };
type Seccion = { titulo: string; grupos: Grupo[] };
type Coctel = { nombre: string; ingredientes: string[] };

const MENU: Record<Lang, {
  kicker: string; h2: string; sub: string; secciones: Seccion[]; cocteles: { titulo: string; items: Coctel[] };
  adulto: string; nino: string; ninoNota: string; impuesto: string; verImagen: string; altImagen: string;
}> = {
  es: {
    kicker: "Menú del brunch",
    h2: "Late Morning",
    sub: "All you can eat",
    secciones: [
      { titulo: "Huevos al gusto", grupos: [{ items: ["Omelette", "Huevos benedictinos", "Huevos rancheros", "Huevos revueltos con toppings"] }] },
      { titulo: "Food stations", grupos: [{ items: ["Panceta", "Alitas", "Tocineta", "Corte de carne nacional"] }] },
      {
        titulo: "Mini pizzas & mini burgers",
        grupos: [
          { titulo: "Mini pizzas caprese", items: ["Tomate, mozzarella fresca y albahaca"] },
          { titulo: "Mini burgers", items: ["Carne Angus, queso cheddar y salsa de tomate de la casa"] },
        ],
      },
      { titulo: "Tablas de charcutería", grupos: [{ items: ["Chorizo semi picante, queso manchego, queso gouda, aceitunas marinadas y roast beef"] }] },
      {
        titulo: "Arma tu ensalada",
        grupos: [
          { titulo: "Base", items: ["Lechuga · Brócoli · Maíz · Tomate cherry"] },
          { titulo: "Toppings", items: ["Cebolla encurtida · Rábano encurtido · Arándanos deshidratados · Semillas de calabaza · Aguacate · Almendras tostadas"] },
          { titulo: "Vinagretas", items: ["Miel mostaza · Cítrica · Asiática"] },
        ],
      },
      {
        titulo: "Panadería & postres",
        grupos: [
          { titulo: "Panadería", items: ["Pan de banano", "Pan de mantequilla y parmesano", "Pan de espinaca"] },
          { titulo: "Postres", items: ["Cheesecake de frutos rojos", "Torta de zanahoria", "Cheesecake de Oreo", "Pie de limón", "Tarta vasca"] },
        ],
      },
      { titulo: "Sushi", grupos: [{ items: ["Philadelphia · California"] }] },
      { titulo: "Estación de ceviche", grupos: [{ items: ["Preparaciones frescas inspiradas en los sabores del mar"] }] },
    ],
    cocteles: {
      titulo: "Coctelería",
      items: [
        { nombre: "Aperol Spritz", ingredientes: ["Aperol (90 ml)", "Prosecco (90 ml)", "Soda (30 ml)", "Hielo y rodaja de naranja"] },
        { nombre: "Mimosa", ingredientes: ["Jugo de naranja (90 ml)", "Prosecco (90 ml)", "Rodaja de naranja"] },
      ],
    },
    adulto: "por persona",
    nino: "niños",
    ninoNota: "Hasta los 10 años.",
    impuesto: "Más impuesto al consumo.",
    verImagen: "Ver el menú del brunch en imagen",
    altImagen: "Menú del brunch Late Morning de Sabine: all you can eat, $160.000 por persona y $80.000 niños",
  },
  en: {
    kicker: "Brunch menu",
    h2: "Late Morning",
    sub: "All you can eat",
    secciones: [
      { titulo: "Eggs your way", grupos: [{ items: ["Omelette", "Eggs Benedict", "Huevos rancheros", "Scrambled eggs with toppings"] }] },
      { titulo: "Food stations", grupos: [{ items: ["Pork belly", "Chicken wings", "Bacon", "Colombian beef cut"] }] },
      {
        titulo: "Mini pizzas & mini burgers",
        grupos: [
          { titulo: "Caprese mini pizzas", items: ["Tomato, fresh mozzarella and basil"] },
          { titulo: "Mini burgers", items: ["Angus beef, cheddar cheese and house tomato sauce"] },
        ],
      },
      { titulo: "Charcuterie boards", grupos: [{ items: ["Mildly spicy chorizo, Manchego cheese, Gouda cheese, marinated olives and roast beef"] }] },
      {
        titulo: "Build your salad",
        grupos: [
          { titulo: "Base", items: ["Lettuce · Broccoli · Corn · Cherry tomato"] },
          { titulo: "Toppings", items: ["Pickled onion · Pickled radish · Dried cranberries · Pumpkin seeds · Avocado · Toasted almonds"] },
          { titulo: "Dressings", items: ["Honey mustard · Citrus · Asian"] },
        ],
      },
      {
        titulo: "Bakery & desserts",
        grupos: [
          { titulo: "Bakery", items: ["Banana bread", "Butter and Parmesan bread", "Spinach bread"] },
          { titulo: "Desserts", items: ["Berry cheesecake", "Carrot cake", "Oreo cheesecake", "Key lime pie", "Basque cheesecake"] },
        ],
      },
      { titulo: "Sushi", grupos: [{ items: ["Philadelphia · California"] }] },
      { titulo: "Ceviche station", grupos: [{ items: ["Fresh preparations inspired by the flavors of the sea"] }] },
    ],
    cocteles: {
      titulo: "Cocktails",
      items: [
        { nombre: "Aperol Spritz", ingredientes: ["Aperol (3 oz)", "Prosecco (3 oz)", "Club soda (1 oz)", "Ice and orange slice"] },
        { nombre: "Mimosa", ingredientes: ["Orange juice (3 oz)", "Prosecco (3 oz)", "Orange slice"] },
      ],
    },
    adulto: "per person",
    nino: "kids",
    ninoNota: "Up to 10 years old.",
    impuesto: "Plus consumption tax.",
    verImagen: "See the brunch menu as an image",
    altImagen: "Sabine's Late Morning brunch menu: all you can eat, COP 160,000 per person and COP 80,000 for kids",
  },
};

const BrunchMenu = () => {
  const { lang } = useLanguage();
  const m = MENU[lang];

  return (
    <section id="menu-brunch" className="bg-background py-16 md:py-24 px-6 md:px-12 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">{m.kicker}</p>
          <h2 className="font-display text-4xl md:text-5xl font-light">
            {m.h2} <span className="italic text-gold-gradient">{m.sub}</span>
          </h2>
          <div className="gold-divider mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-14">
          {([
            [PRECIOS_BRUNCH.adulto, m.adulto, null],
            [PRECIOS_BRUNCH.nino, m.nino, m.ninoNota],
          ] as const).map(([precio, etiqueta, nota]) => (
            <div key={etiqueta} className="border border-primary/40 py-6 px-4 text-center">
              <p className="font-display text-4xl text-primary">{formatoPrecio(precio)}</p>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-foreground/70 mt-2">{etiqueta}</p>
              <p className="font-elegant italic text-sm text-muted-foreground mt-2">
                {nota ? `${nota} ` : ""}{m.impuesto}
              </p>
            </div>
          ))}
        </div>

        <div className="md:columns-2 md:gap-16">
          {m.secciones.map((s) => (
            <div key={s.titulo} className="break-inside-avoid mb-10">
              <h3 className="font-display text-2xl text-primary mb-3 border-b border-border/30 pb-2">{s.titulo}</h3>
              {s.grupos.map((g, i) => (
                <div key={g.titulo ?? i} className={i > 0 ? "mt-3" : ""}>
                  {g.titulo && (
                    <h4 className="font-body text-[11px] tracking-[0.25em] uppercase text-foreground/60 mb-1">{g.titulo}</h4>
                  )}
                  <ul className="font-elegant text-base md:text-lg text-foreground/80 leading-relaxed">
                    {g.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}

          <div className="break-inside-avoid mb-10">
            <h3 className="font-display text-2xl text-primary mb-3 border-b border-border/30 pb-2">{m.cocteles.titulo}</h3>
            {m.cocteles.items.map((c, i) => (
              <div key={c.nombre} className={i > 0 ? "mt-3" : ""}>
                <h4 className="font-elegant text-lg">{c.nombre}</h4>
                <p className="font-body text-xs md:text-sm text-muted-foreground">{c.ingredientes.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>

        <details className="mt-6 border-t border-border/30 pt-6">
          <summary className="cursor-pointer font-body text-xs tracking-[0.25em] uppercase text-primary">{m.verImagen}</summary>
          <a href="/menu-brunch-sabine.jpg" target="_blank" rel="noopener noreferrer" className="block mt-6 max-w-md mx-auto">
            <img
              src="/menu-brunch-sabine.webp"
              alt={m.altImagen}
              width={1102}
              height={1427}
              loading="lazy"
              className="w-full h-auto"
            />
          </a>
        </details>
      </div>
    </section>
  );
};

export default BrunchMenu;

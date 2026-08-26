import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const menuCategories = [
  {
    title: "Entradas",
    items: [
      { name: "Carpaccio de Res", desc: "Alcaparras, parmesano, rúgula, aceite de trufa", price: "$38.000" },
      { name: "Coliflor al Horno", desc: "Especias árabes, tahini, granada", price: "$32.000" },
      { name: "Bruschetta Clásica", desc: "Tomate heirloom, albahaca fresca, burrata", price: "$28.000" },
    ],
  },
  {
    title: "Platos Fuertes",
    items: [
      { name: "Steak Frites", desc: "Lomo fino 300g, papas trufadas, salsa bernaise", price: "$78.000" },
      { name: "T-Bone", desc: "Corte premium 450g, vegetales asados, chimichurri", price: "$95.000" },
      { name: "Salmón en Costra", desc: "Hierbas finas, puré de coliflor, espárragos", price: "$68.000" },
    ],
  },
  {
    title: "Cocktails Signature",
    items: [
      { name: "Oregon Sour", desc: "Bourbon, limón, jarabe de maple, clara", price: "$35.000" },
      { name: "Sabine Negroni", desc: "Gin premium, campari, vermut rosso", price: "$38.000" },
      { name: "Tropical Mule", desc: "Vodka, jengibre, maracuyá, limón", price: "$32.000" },
    ],
  },
];

const MenuSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="menu" className="section-padding bg-dark-gradient" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4"
          >
            Nuestra Carta
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-3xl md:text-5xl font-light"
          >
            Menú <span className="italic text-gold-gradient">Destacado</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="gold-divider mt-6"
          />
        </div>

        <div className="space-y-16">
          {menuCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + ci * 0.15 }}
            >
              <h3 className="font-display text-2xl text-primary mb-8 text-center">{cat.title}</h3>
              <div className="space-y-6">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex items-baseline gap-4">
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3">
                        <h4 className="font-elegant text-lg md:text-xl">{item.name}</h4>
                        <div className="flex-1 border-b border-dotted border-border/40 translate-y-[-4px]" />
                        <span className="font-body text-sm text-primary whitespace-nowrap">{item.price}</span>
                      </div>
                      <p className="font-body text-xs text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MenuSection;

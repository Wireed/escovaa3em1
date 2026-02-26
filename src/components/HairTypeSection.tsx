import { motion } from "framer-motion";
import productTypes from "@/assets/product-types.png";
import productStandalone from "@/assets/product-standalone.png";

const types = [
  "Lisos",
  "Ondulados",
  "Cacheados",
  "Crespos",
  "Barbas",
];

const HairTypeSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-pattern relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <img
                src={productTypes}
                alt="Escova Alisadora em uso"
                className="rounded-2xl w-full max-w-md shadow-2xl"
              />
              <img
                src={productStandalone}
                alt="Escova Alisadora"
                className="absolute -bottom-6 -right-6 w-24 sm:w-32 animate-float drop-shadow-xl hidden sm:block"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl mb-6">
              Indicada Para{" "}
              <span className="text-gradient-primary">Todos os Tipos</span>{" "}
              de Cabelo
            </h2>

            <div className="space-y-3">
              {types.map((type, i) => (
                <motion.div
                  key={type}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-all"
                >
                  <span className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-sm flex-shrink-0">✔</span>
                  <span className="font-heading font-semibold text-foreground">{type}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HairTypeSection;

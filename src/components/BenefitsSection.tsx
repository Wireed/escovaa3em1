import { motion } from "framer-motion";

const benefits = [
  { icon: "✨", title: "Alisa, Seca e Hidrata", desc: "Tudo ao mesmo tempo em um único aparelho" },
  { icon: "🌡️", title: "Tecnologia PTC", desc: "Temperatura constante e segura para seus fios" },
  { icon: "💎", title: "Anti Frizz + Brilho", desc: "Reduz frizz e proporciona brilho intenso" },
  { icon: "⚡", title: "Rápida: 2 Minutos", desc: "Alisamento completo em tempo recorde" },
  { icon: "🔌", title: "Bivolt", desc: "Perfeita para levar em viagens" },
  { icon: "💇", title: "Todos os Tipos", desc: "Lisos, ondulados, cacheados e crespos" },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-pattern relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl mb-3">
            Por Que Escolher a{" "}
            <span className="text-gradient-primary">Escova Alisadora?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Chega de gastar fortunas no salão ou perder horas se arrumando. Tenha cabelo de salão todos os dias, em casa, em 2 minutos.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-4 sm:p-6 text-center hover:border-primary/50 transition-all hover:glow-primary group"
            >
              <span className="text-3xl sm:text-4xl mb-3 block group-hover:scale-110 transition-transform">{benefit.icon}</span>
              <h3 className="font-heading font-bold text-sm sm:text-base mb-1 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

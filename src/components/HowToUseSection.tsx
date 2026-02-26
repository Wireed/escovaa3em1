import { motion } from "framer-motion";

const steps = [
  {
    step: "1",
    title: "Prepare o Cabelo",
    desc: "Com o cabelo limpo e seco, ligue a escova e selecione a temperatura desejada.",
  },
  {
    step: "2",
    title: "Passe a Escova",
    desc: "Passe lentamente da raiz até as pontas, como se estivesse penteando.",
  },
  {
    step: "3",
    title: "Repita nas Mechas",
    desc: "Para um efeito mais liso, repita o processo em cada mecha.",
  },
  {
    step: "4",
    title: "Finalize",
    desc: "Aplique protetor térmico ou óleo capilar para maior brilho.",
  },
];

const HowToUseSection = () => {
  return (
    <section className="py-16 sm:py-24 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl mb-3">
            Como <span className="text-gradient-primary">Usar</span>
          </h2>
          <p className="text-muted-foreground">Super fácil, em apenas 4 passos simples</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-card border border-border rounded-xl p-6 text-center relative"
            >
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-heading font-black text-xl">
                {step.step}
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-card border border-primary/30 rounded-xl p-6 sm:p-8"
        >
          <h3 className="font-heading font-bold text-lg sm:text-xl mb-4 text-center text-gradient-primary">
            ✨ Resultados Esperados
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            {[
              "Cabelos alinhados, sem frizz e com brilho natural",
              "Redução do tempo de alisamento",
              "Praticidade e segurança no dia a dia",
            ].map((result, i) => (
              <div key={i} className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="text-primary">✨</span>
                <span className="text-foreground text-sm">{result}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToUseSection;

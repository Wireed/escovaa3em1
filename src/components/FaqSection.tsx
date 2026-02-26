import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como funciona o pagamento na entrega?",
    a: "É simples e seguro: você faz o pedido pelo site, recebe o produto em casa pelo correio ou transportadora, e só paga quando o entregador chegar. Você pode pagar com PIX, dinheiro, cartão de débito ou crédito em até 12x. Sem risco nenhum!",
  },
  {
    q: "É seguro comprar? Não é golpe?",
    a: "Totalmente seguro! Você NÃO paga nada adiantado. O pagamento é feito somente na hora que o produto chega na sua casa. Você confere tudo antes de pagar. Além disso, oferecemos garantia de 30 dias — se não ficar satisfeita, devolvemos seu dinheiro.",
  },
  {
    q: "A escova pode ser usada em cabelos molhados?",
    a: "Não. O ideal é usá-la em cabelos secos para um melhor resultado.",
  },
  {
    q: "Qual a temperatura máxima da escova?",
    a: "Ela aquece entre 130°C e 200°C, permitindo ajuste conforme a necessidade do seu tipo de cabelo.",
  },
  {
    q: "É segura para crianças?",
    a: "Sim, pode ser usada em crianças com supervisão, sempre em temperaturas mais baixas.",
  },
  {
    q: "Ela substitui a prancha alisadora?",
    a: "Sim, mas com um acabamento mais natural e sem danos excessivos aos fios.",
  },
  {
    q: "Pode ser usada em barbas?",
    a: "Sim, é ideal para alinhar e modelar barbas de forma prática e rápida.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-pattern relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl mb-3">
            Perguntas{" "}
            <span className="text-gradient-primary">Frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-5 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="font-heading font-semibold text-left text-sm sm:text-base text-foreground hover:no-underline">
                  🔹 {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;

import { motion } from "framer-motion";

const CHECKOUT_URL = "https://entrega.logzz.com.br/pay/memnz6gl0/1-unidade-escova-alisadora";

const HeroOffer = () => {
  return (
    <section className="py-12 sm:py-16 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-3 max-w-lg mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="text-muted-foreground line-through text-lg">R$ 297,00</span>
            <span className="font-heading font-black text-3xl sm:text-4xl text-gradient-primary">R$ 139,99</span>
            <span className="bg-success text-primary-foreground font-heading font-bold text-xs px-3 py-1 rounded-full">
              -53% OFF
            </span>
          </div>
          <p className="text-muted-foreground text-sm">ou 12x de R$ 14,30 sem juros</p>

          <motion.a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block gradient-primary text-primary-foreground font-heading font-bold text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 rounded-xl glow-primary animate-pulse-glow uppercase tracking-wide w-full sm:w-auto text-center"
          >
            🛒 QUERO PAGAR NA ENTREGA
          </motion.a>

          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            🔒 Compra 100% Segura — Você Paga Somente Quando Receber
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroOffer;

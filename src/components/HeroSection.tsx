import { motion } from "framer-motion";
import productHero from "@/assets/product-hero.png";

const CHECKOUT_URL = "https://entrega.logzz.com.br/pay/memnz6gl0/1-unidade-escova-alisadora";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-pattern min-h-[90vh] flex items-center py-12 lg:py-0">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left order-2 lg:order-1">

            <div className="inline-block gradient-primary px-4 py-1.5 rounded-full mb-4">
              <span className="text-primary-foreground font-heading font-bold text-xs sm:text-sm tracking-wider uppercase">
                ⚡ Oferta Exclusiva — Pague na Entrega
              </span>
            </div>

            <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4">
              Escova Alisadora{" "}
              <span className="text-gradient-primary">3 em 1</span>
            </h1>

            <p className="text-lg sm:text-xl font-heading font-semibold text-foreground mb-2">
              Alisa, Seca e Hidrata! 
            </p>

            <p className="text-muted-foreground text-sm sm:text-base mb-3 max-w-lg mx-auto lg:mx-0">
              Cansada de gastar R$ 80 a R$ 150 toda semana no salão? Sem tempo pra se arrumar de manhã?
              A Escova Alisadora 3 em 1 resolve isso em apenas 2 minutos, no conforto da sua casa.
            </p>

            <p className="text-xs text-muted-foreground mb-6 max-w-lg mx-auto lg:mx-0">
              🔒 Você só paga quando receber na sua casa — PIX, Dinheiro, Débito ou Crédito até 12x.
            </p>

            <div className="space-y-2 mb-8 text-left max-w-md mx-auto lg:mx-0">
              {[
              "5 Níveis de Temperatura",
              "Aquecimento Rápido em 30s",
              "Anti Frizz + Brilho Intenso"].
              map((item, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="flex items-center gap-3">

                  <span className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-xs flex-shrink-0">✓</span>
                  <span className="text-foreground font-body font-medium text-sm sm:text-base">{item}</span>
                </motion.div>
              )}
            </div>

            <div className="space-y-3">
              






              <p className="text-muted-foreground text-sm">ou 12x de R$ 14,30 sem juros</p>

              <motion.a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block gradient-primary text-primary-foreground font-heading font-bold text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 rounded-xl glow-primary animate-pulse-glow uppercase tracking-wide w-full sm:w-auto text-center">

                🛒 QUERO PAGAR NA ENTREGA
              </motion.a>

              <p className="text-xs text-muted-foreground flex items-center justify-center lg:justify-start gap-1">
                🔒 Compra 100% Segura — Você Paga Somente Quando Receber
              </p>
            </div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center order-1 lg:order-2">

            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-full blur-3xl opacity-20 scale-75" />
              <img
                src={productHero}
                alt="Escova Alisadora 3 em 1"
                className="relative z-10 w-64 sm:w-80 lg:w-96 animate-float drop-shadow-2xl" />

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-0 bg-card border border-border rounded-xl p-3 shadow-xl z-20">

                <p className="text-xs font-heading font-bold text-primary">⭐ 4.9/5</p>
                <p className="text-[10px] text-muted-foreground">+2.500 vendidos</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default HeroSection;
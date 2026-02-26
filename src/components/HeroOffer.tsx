import { motion } from "framer-motion";
import productRound from "@/assets/product-round.png";
import deliveryIcon from "@/assets/delivery-icon.png";

const CHECKOUT_URL = "https://entrega.logzz.com.br/pay/memnz6gl0/1-unidade-escova-alisadora";
const WHATSAPP_URL = "https://wa.me/5537998272175?text=Quero%20saber%20mais%20sobre%20a%20Escova%20Alisadora%203%20em%201%20e%20como%20funciona%20o%20pagamento%20na%20entrega!";

const HeroOffer = () => {
  return (
    <section className="py-16 sm:py-24 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-card border-2 border-primary/50 rounded-2xl p-6 sm:p-10 lg:p-14 text-center relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 gradient-primary opacity-5" />

          {/* Stock urgency */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-destructive/20 border border-destructive/40 text-destructive-foreground px-4 py-2 rounded-full mb-6 animate-urgency"
          >
            <span className="w-2 h-2 rounded-full bg-destructive animate-ping" />
            <span className="font-heading font-bold text-xs sm:text-sm">
              ⚠️ Apenas 23 unidades em estoque!
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
            {/* Product Image */}
            <div className="flex justify-center">
              <img
                src={productRound}
                alt="Escova Alisadora"
                className="w-48 sm:w-64 animate-float drop-shadow-2xl"
              />
            </div>

            {/* Offer Details */}
            <div className="space-y-4">
              <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-gradient-primary">
                SUPER OFERTA
              </h2>

              <div className="space-y-1">
                <p className="text-muted-foreground line-through text-lg">De R$ 297,00</p>
                <p className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-gradient-accent">
                  R$ 139,99
                </p>
                <p className="text-foreground font-heading font-semibold text-lg">
                  OU 12X DE R$ 14,30
                </p>
              </div>

              <div className="bg-muted rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-3 justify-center">
                  <img src={deliveryIcon} alt="Entrega rápida" className="w-12" />
                  <div className="text-left">
                    <p className="font-heading font-bold text-foreground text-sm sm:text-base">
                      PAGUE SOMENTE NA ENTREGA
                    </p>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Receba em casa e pague ao entregador: PIX, Dinheiro, Débito ou Crédito 12x
                    </p>
                  </div>
                </div>
              </div>

              <motion.a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="block gradient-primary text-primary-foreground font-heading font-bold text-base sm:text-xl px-8 py-5 rounded-xl glow-primary animate-pulse-glow uppercase tracking-wide text-center"
              >
                🛒 QUERO MINHA ESCOVA COM PAGAMENTO NA ENTREGA
              </motion.a>

              <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <span>🔒 Compra Segura</span>
                <span>🛡️ Garantia 30 Dias</span>
                <span>📦 Frete Grátis</span>
              </div>

              <p className="text-xs text-muted-foreground">
                Sem risco: você confere o produto na hora e só paga se aprovar.
              </p>

              {/* WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-success text-primary-foreground font-heading font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                💬 Dúvidas? Chama no Zap!
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroOffer;

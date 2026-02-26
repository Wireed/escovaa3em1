import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const CHECKOUT_URL = "https://entrega.logzz.com.br/pay/memnz6gl0/1-unidade-escova-alisadora";

const FloatingCta = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-background/90 backdrop-blur-lg border-t border-border sm:hidden"
        >
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block gradient-primary text-primary-foreground font-heading font-bold text-sm py-4 rounded-xl text-center animate-pulse-glow uppercase tracking-wide"
          >
            🛒 QUERO PAGAR NA ENTREGA — R$ 139,99
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCta;

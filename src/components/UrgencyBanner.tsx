import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";

const UrgencyBanner = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="gradient-primary py-2 px-4 text-center sticky top-0 z-50"
    >
      <div className="container flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
        <p className="text-primary-foreground font-heading font-bold text-xs sm:text-sm animate-urgency">
          🔥 PROMOÇÃO POR TEMPO LIMITADO — ÚLTIMAS UNIDADES!
        </p>
        <CountdownTimer />
      </div>
    </motion.div>
  );
};

export default UrgencyBanner;

import { motion } from "framer-motion";

const videos = [
  { id: "7Sw_Z_TVBec", title: "Veja o resultado incrível!" },
  { id: "CGeJObsKWRo", title: "Antes e Depois surpreendente" },
  { id: "_LHe3R9OFaw", title: "Depoimento real de cliente" },
];

const VideoSection = () => {
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
            <span className="text-gradient-primary">Depoimentos Reais</span> de Quem Usou
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Assista e veja os resultados impressionantes com seus próprios olhos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/50 transition-all"
            >
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="font-heading font-semibold text-sm text-foreground">{video.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

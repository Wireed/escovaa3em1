import { motion } from "framer-motion";

const videos = [
{ id: "7Sw_Z_TVBec", title: "Veja o resultado incrível!" },
{ id: "CGeJObsKWRo", title: "Antes e Depois surpreendente" },
{ id: "_LHe3R9OFaw", title: "Depoimento real de cliente" }];


const VideoSection = () => {
  return (
    <section className="py-12 sm:py-16 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-gradient-primary mb-2">
            Depoimentos Reais
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">Veja o que nossas clientes dizem</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl overflow-hidden border border-border bg-card"
            >
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <p className="p-3 font-heading font-bold text-sm text-foreground">{video.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
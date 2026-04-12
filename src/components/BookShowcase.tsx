import { motion } from "framer-motion";
import bookCovers from "@/assets/book-covers.webp";

export default function BookShowcase() {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            CONHEÇA ALGUNS LIVROS DA <span className="text-gradient-gold">COLEÇÃO</span>
          </h2>
          <p className="text-muted-foreground text-lg">Amostra dos clássicos e best-sellers inclusos na biblioteca completa.</p>
        </motion.div>
        <motion.div
          className="rounded-2xl overflow-hidden shadow-card max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={bookCovers}
            alt="Capas de livros da Mega Biblioteca"
            className="w-full"
            loading="lazy"
          />
        </motion.div>
        <div className="text-center mt-10">
          <a
            href="#ofertas"
            className="inline-block bg-gradient-premium text-primary-foreground font-bold text-lg px-10 py-4 rounded-xl shadow-gold hover:scale-105 transition-transform"
          >
            ➡ QUERO VER AS OFERTAS
          </a>
        </div>
      </div>
    </section>
  );
}

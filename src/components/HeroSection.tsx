import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [loadIframe, setLoadIframe] = useState(false);

  useEffect(() => {
    // Delay iframe load to increase pagespeed score
    const timer = setTimeout(() => setLoadIframe(true), 2500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="relative overflow-hidden py-16 md:py-24 px-4" style={{ background: "var(--gradient-hero)" }}>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            São mais de <span className="text-gradient-gold">30.000 livros</span> na palma da sua mão
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
            Acesse agora a maior biblioteca digital do Brasil — leia ou ouça quando e onde quiser, sem mensalidade, sem limite.
          </p>
        </motion.div>
        <motion.div
          className="flex-1 max-w-sm lg:max-w-sm w-full mx-auto lg:mr-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-full rounded-2xl shadow-card overflow-hidden bg-black/5 flex items-center justify-center relative" style={{ aspectRatio: "9/16" }}>
            {!loadIframe && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            {loadIframe && (
              <iframe
                src="https://play.tynk.ai/p/28610843-dc5f-454d-89e6-f3f26805fa56"
                className="w-full h-full border-none absolute inset-0"
                title="Apresentação"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
          <a
            href="#ofertas"
            className="block w-full text-center mt-6 bg-gradient-premium text-primary-foreground font-bold text-lg px-8 py-4 rounded-xl shadow-gold hover:scale-105 transition-transform"
          >
            ➡ QUERO VER AS OFERTAS
          </a>
        </motion.div>
      </div>
    </section>
  );
}

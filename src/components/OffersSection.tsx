import { motion } from "framer-motion";

export default function OffersSection() {
  return (
    <section id="ofertas" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-bold text-lg mb-2">⏳🔥 OFERTA POR TEMPO LIMITADO</p>
          <h2 className="text-3xl md:text-4xl font-black">Escolha seu pacote e comece a ler hoje</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* PREMIUM */}
          <motion.div
            className="relative border-2 border-gold rounded-2xl p-8 bg-card shadow-gold order-1 md:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-premium text-primary-foreground text-xs font-black px-4 py-1.5 rounded-full tracking-wider">
              🔥 MAIS VENDIDO
            </div>
            <div className="text-center mb-6">
              <p className="text-gold font-bold text-sm tracking-wider mb-1">👑 PACOTE PREMIUM</p>
              <p className="text-foreground font-display text-lg font-bold">Mega Biblioteca Completa</p>
            </div>
            <div className="text-center mb-6">
              <p className="text-muted-foreground line-through text-sm">De R$ 97,00</p>
              <p className="text-muted-foreground text-sm">por apenas:</p>
              <p className="text-5xl font-black text-gradient-gold mt-1">R$ 19,90</p>
              <p className="text-muted-foreground text-sm mt-1">à vista — ou 5x de R$ 4,30</p>
            </div>
            <div className="mb-8">
              <p className="text-gold font-bold text-sm mb-3">📚 O que você recebe:</p>
              <ul className="space-y-2 text-sm text-secondary-foreground">
                {[
                  "30.000 livros em PDF",
                  "500 audiobooks com voz humana",
                  "Todos os gêneros: romance, fantasia, negócios, autoajuda, terror e muito mais",
                  "Compatível com Kindle",
                  "Guia Hábito de Leitura em 21 Dias 🎁",
                  "Tracker de Leitura Digital 🎁",
                  "Acesso à Comunidade de Leitores 🎁",
                  "Entrega automática no e-mail",
                  "Acesso vitalício",
                  "Suporte por WhatsApp",
                  "Garantia de 30 dias",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-success mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="https://go.tribopay.com.br/tt1om6dbzv"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-premium text-primary-foreground font-black text-center py-4 rounded-xl shadow-gold hover:scale-105 transition-transform text-lg"
            >
              ➡ QUERO O PACOTE PREMIUM
            </a>
            <p className="text-center text-muted-foreground text-xs mt-3">+2.400 pessoas já garantiram o acesso hoje</p>
          </motion.div>

          {/* BÁSICO */}
          <motion.div
            className="border border-border rounded-2xl p-8 bg-card shadow-card order-2 md:order-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="text-center mb-6">
              <p className="text-muted-foreground font-bold text-sm tracking-wider mb-1">PACOTE BÁSICO</p>
            </div>
            <div className="text-center mb-6">
              <p className="text-4xl font-black text-foreground">R$ 9,90</p>
            </div>
            <ul className="space-y-2 text-sm text-secondary-foreground mb-8">
              {["1.500 livros em PDF", "Entrega automática no e-mail", "Acesso vitalício", "Garantia de 30 dias"].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-success mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://go.tribopay.com.br/ohg6yrqiyq"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full border-2 border-gold text-gold font-bold text-center py-4 rounded-xl hover:bg-gold/10 transition-colors"
            >
              QUERO O PACOTE BÁSICO
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

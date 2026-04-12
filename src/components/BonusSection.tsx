import { motion } from "framer-motion";
import heroDevices from "@/assets/hero-devices.webp";

const bonuses = [
  {
    title: "Guia Hábito de Leitura em 21 Dias",
    desc: "O sistema simples para criar o hábito da leitura de vez — mesmo para quem vive com a agenda cheia. Em 21 dias você já não consegue mais ficar sem ler.",
    value: "R$27,00",
  },
  {
    title: "Tracker de Leitura Digital",
    desc: "Registre os livros que leu, está lendo e quer ler. Acompanhe sua evolução e monte sua lista do ano de forma simples e organizada.",
    value: "R$17,00",
  },
  {
    title: "Comunidade Exclusiva de Leitores",
    desc: "Entre para um grupo de pessoas apaixonadas por leitura como você. Troque indicações, participe de desafios e descubra novos títulos toda semana.",
    value: "R$27,00",
  },
];

export default function BonusSection() {
  return (
    <section className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          className="flex-1 w-full max-w-md lg:max-w-lg mx-auto lg:mx-0"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={heroDevices}
            alt="Mega Biblioteca Bônus"
            className="w-full rounded-2xl shadow-card"
          />
        </motion.div>
        
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-gold/10 text-gold px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider mb-4">
            🎁 E AINDA NÃO É TUDO...
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase">
            Compre hoje e leve esses <span className="text-gradient-gold">bônus</span> de graça
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Só para quem garantir o acesso agora
          </p>

          <div className="space-y-4">
            {bonuses.map((bonus, i) => (
              <div key={i} className="flex gap-4 bg-card p-5 rounded-xl border border-border shadow-sm hover:border-gold/30 transition-colors">
                <div className="flex-shrink-0 text-gold text-3xl font-black leading-none mt-1">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{bonus.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{bonus.desc}</p>
                  <div className="flex items-center gap-2">
                    <span className="line-through text-xs text-muted-foreground/70">Valor: {bonus.value}</span>
                    <span className="text-green-500 font-bold text-xs bg-green-500/10 px-2 py-0.5 rounded">GRÁTIS</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-gradient-premium rounded-xl text-primary-foreground text-center shadow-gold">
            <p className="font-bold text-lg">
              Você leva R$71,00 em bônus de graça.
              <span className="block font-normal mt-1 opacity-90 text-sm">Disponíveis apenas para quem comprar hoje.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

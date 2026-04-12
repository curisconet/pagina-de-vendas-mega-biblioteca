import { motion } from "framer-motion";

const advantages = [
  { icon: "🎧", title: "OUÇA SEM ANÚNCIOS", desc: "500 audiobooks com voz humana, direto no celular, sem interrupções." },
  { icon: "💳", title: "PAGUE UMA VEZ SÓ", desc: "Acesso vitalício. Sem assinatura, sem renovação, sem surpresa." },
  { icon: "📱", title: "LEIA EM QUALQUER DISPOSITIVO", desc: "Celular, tablet, computador ou Kindle." },
  { icon: "⚡", title: "ACESSO IMEDIATO", desc: "Receba tudo no e-mail em menos de 5 minutos após o pagamento." },
];

export default function AdvantagesSection() {
  return (
    <section className="py-16 px-4 bg-secondary/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {advantages.map((a, i) => (
          <motion.div
            key={i}
            className="bg-card rounded-xl p-6 text-center shadow-card border border-border hover:border-gold/30 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="text-4xl mb-4">{a.icon}</div>
            <h3 className="font-display font-bold text-sm tracking-wider text-gold mb-2">{a.title}</h3>
            <p className="text-muted-foreground text-sm">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

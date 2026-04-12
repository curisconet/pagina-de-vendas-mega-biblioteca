import { motion } from "framer-motion";

export default function GuaranteeSection() {
  return (
    <section className="py-20 px-4">
      <motion.div
        className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="text-5xl mb-4">🛡️</div>
        <h2 className="text-2xl md:text-3xl font-black mb-4">Garantia incondicional de 30 dias</h2>
        <p className="text-muted-foreground mb-8">
          Se não gostar por qualquer motivo, devolvemos 100% do seu dinheiro. Sem burocracia, sem perguntas.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-secondary-foreground">
          <div className="flex items-center gap-2"><span className="text-success">✓</span> Risco zero — teste por 30 dias completos</div>
          <div className="flex items-center gap-2"><span className="text-success">✓</span> Reembolso total — devolução integral</div>
          <div className="flex items-center gap-2"><span className="text-success">✓</span> Sem perguntas — pediu, reembolsamos</div>
        </div>
        <p className="text-muted-foreground text-sm mt-6 italic">
          O dobro do tempo que a maioria oferece — porque confiamos no que entregamos.
        </p>
      </motion.div>
    </section>
  );
}

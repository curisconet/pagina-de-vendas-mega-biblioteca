import { motion } from "framer-motion";

const genres = [
  { icon: "📚", title: "Romance e Dark Romance", desc: "Os títulos que explodiram nas redes — do primeiro ao último capítulo você não para." },
  { icon: "🐉", title: "Fantasia e Ficção Científica", desc: "Sagas épicas e lançamentos que levam você para outro mundo." },
  { icon: "💰", title: "Finanças e Negócios", desc: "Os livros que ensinaram milhares de pessoas a ganhar e multiplicar dinheiro." },
  { icon: "🌱", title: "Desenvolvimento Pessoal", desc: "Mude sua mentalidade e construa a melhor versão de você." },
  { icon: "😱", title: "Terror e Suspense", desc: "Para quem gosta de uma boa história que prende do início ao fim." },
  { icon: "✝️", title: "Religiosos e Espirituais", desc: "Fortaleça sua fé e encontre paz interior." },
];

export default function GenresSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            POR QUE ESCOLHER A <span className="text-gradient-gold">MEGA BIBLIOTECA?</span>
          </h2>
          <p className="text-muted-foreground text-lg">Gêneros que entretêm, educam e transformam.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {genres.map((g, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border rounded-xl p-6 hover:border-gold/30 transition-colors shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="text-3xl mb-3">{g.icon}</div>
              <h3 className="font-display font-bold text-foreground mb-2">{g.title}</h3>
              <p className="text-muted-foreground text-sm">{g.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

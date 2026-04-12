import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Como recebo meu acesso?", a: "Após o pagamento, você recebe o link direto no e-mail em até 5 minutos." },
  { q: "Preciso pagar mensalidade?", a: "Não. Paga uma vez e o acesso é seu para sempre." },
  { q: "Funciona no Kindle?", a: "Sim. Os livros estão em PDF e EPUB, compatíveis com Kindle, celular, tablet e computador." },
  { q: "Posso baixar para ler offline?", a: "Sim, você pode baixar os livros e ler sem internet quando quiser." },
  { q: "E se eu não encontrar o livro que quero?", a: "Com 30.000 títulos as chances são mínimas, mas é só entrar em contato — nossa equipe adiciona novos títulos regularmente." },
  { q: "Quantos dispositivos posso usar?", a: "Sem limite. Use em todos os seus dispositivos." },
];

export default function FaqSection() {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-10">Perguntas Frequentes</h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 overflow-hidden">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

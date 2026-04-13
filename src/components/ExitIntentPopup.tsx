import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY < 50 && e.relatedTarget === null) {
        if (!sessionStorage.getItem("exitIntentShown")) {
          setIsOpen(true);
          sessionStorage.setItem("exitIntentShown", "true");
        }
      }
    };

    // Adiciona o estado ao histórico para capturar o "Voltar" no celular
    const pushState = () => {
      window.history.pushState({ modal: "exit-intent" }, "", window.location.href);
    };

    pushState();

    const handlePopState = () => {
      if (!sessionStorage.getItem("exitIntentShown")) {
        setIsOpen(true);
        sessionStorage.setItem("exitIntentShown", "true");
        pushState(); // Adiciona novamente para manter o usuário na página
      }
    };

    document.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            className="relative bg-zinc-950 w-full max-w-lg rounded-2xl shadow-[0_0_50px_rgba(220,38,38,0.5)] border-2 border-red-600 overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Botão Fechar modal */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white/50 hover:text-white z-20 p-2 text-xl"
            >
              ✕
            </button>

            {/* Cabeçalho Chamativo */}
            <div className="bg-red-600 text-white text-center py-5 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider relative z-10 flex items-center justify-center gap-3 drop-shadow-xl">
                <span className="animate-bounce">🚨</span> 
                ÚLTIMA CHANCE!
                <span className="animate-bounce" style={{ animationDelay: "100ms" }}>🚨</span>
              </h2>
            </div>

            <div className="p-6 md:p-8 text-center space-y-6">
              <p className="text-lg md:text-xl font-medium text-white">
                Essa pode ser sua <strong className="text-red-500">ÚLTIMA CHANCE</strong> de entrar na Mega Biblioteca com desconto.
              </p>

              {/* Box de Preço */}
              <div className="bg-zinc-900 border-2 border-red-600/30 p-4 rounded-xl transform transition-transform hover:scale-105">
                <p className="text-muted-foreground line-through text-lg">De R$ 19,90</p>
                <p className="text-4xl md:text-5xl font-black text-green-500 mt-1 drop-shadow-lg">
                  por só R$ 14,90
                </p>
              </div>

              {/* Lista de Benefícios */}
              <div className="text-left bg-zinc-900/50 p-5 rounded-xl border border-zinc-800 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl border border-green-500 rounded-full w-6 h-6 flex items-center justify-center bg-green-500/10">✔</span>
                  <span className="text-white font-medium text-lg">PACOTE PREMIUM</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl border border-green-500 rounded-full w-6 h-6 flex items-center justify-center bg-green-500/10">✔</span>
                  <span className="text-white font-medium text-lg">30.000 livros + 500 Audiobooks</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl border border-green-500 rounded-full w-6 h-6 flex items-center justify-center bg-green-500/10">✔</span>
                  <span className="text-white font-medium text-lg">Todos os Bônus</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl border border-green-500 rounded-full w-6 h-6 flex items-center justify-center bg-green-500/10">✔</span>
                  <span className="text-white font-medium text-lg">Vitalício</span>
                </div>
              </div>

              {/* Botão de Compra */}
              <div className="pt-2">
                <a
                  href="https://pay.kiwify.com.br/S7p0ot9"
                  className="block w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-black text-xl py-5 px-6 rounded-xl shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all hover:scale-[1.03] active:scale-95 border-b-4 border-green-700"
                >
                  👉 QUERO APROVEITAR AGORA
                </a>
              </div>

              <div className="inline-flex items-center justify-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full font-medium text-sm border border-red-500/20">
                <span className="animate-spin" style={{ animationDuration: "3s" }}>⏳</span> 
                Oferta expira ao fechar essa tela
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAMES = [
  "João Silva", "Maria Santos", "Ana Oliveira", "Pedro Costa", "Lucas Ferreira",
  "Camila Souza", "Rafael Lima", "Juliana Alves", "Bruno Rocha", "Fernanda Dias",
];

export default function SocialProofNotification() {
  const [notification, setNotification] = useState<{ name: string; minutes: number } | null>(null);

  useEffect(() => {
    const show = () => {
      const name = NAMES[Math.floor(Math.random() * NAMES.length)];
      const minutes = Math.floor(Math.random() * 10) + 1;
      setNotification({ name, minutes });
      setTimeout(() => setNotification(null), 5000);
    };

    show();
    const interval = setInterval(show, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            className="bg-card border border-border rounded-xl px-5 py-3 shadow-card text-sm max-w-xs"
          >
            <span className="text-success font-bold">✓</span>{" "}
            <span className="text-foreground font-semibold">{notification.name}</span>{" "}
            <span className="text-muted-foreground">acabou de garantir o acesso — há {notification.minutes} min</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

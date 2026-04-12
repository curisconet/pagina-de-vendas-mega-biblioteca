import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/depoimentos/media__1775974518980.jpg",
  "/depoimentos/media__1775974519190.png",
  "/depoimentos/media__1775974519707.png",
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-2">DEPOIMENTOS</h2>
        <p className="text-gold text-lg font-bold mb-10">⭐⭐⭐⭐⭐ 4,9/5 — mais de 8.000 leitores satisfeitos</p>

        <div className="relative overflow-hidden rounded-2xl shadow-card bg-card max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current]}
              alt={`Depoimento ${current + 1}`}
              className="w-full max-h-[500px] md:max-h-[600px] object-contain mx-auto rounded-xl"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              loading="lazy"
            />
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-gold" : "bg-muted"}`}
              aria-label={`Ver depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

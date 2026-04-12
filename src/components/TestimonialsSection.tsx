import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://lh3.googleusercontent.com/sitesv/APaQ0ST0xAuOR8_xl2hTq3JBWFYUORfLG-DjKyYdMqB6lSsSIvRPoTkaESVoeihRPK8Cxok86ssNA7QUhkDmHsDcTo2gjydscByjFfnrOllgV1kGsR8chyYsI-B7_PZe8gvf_x_kE905zObiE20-NkxfxfJkInVlVHry3meOFDuuegzVfpNV6_-7nj6rgkbMybOkzvyxrVWisyfUnPtAbGjuwYCHSuUeg2-urKlh=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0STsd6E7490_F1CrI_cXfDYdJP2QC_vJe1w-Gp3cm5giJVfTb_Cs--ZaIz5WJO6-WK1bIsoGBt5hrYTWVg9YnVZFZwzkX1xTRo6yIMFv70jHrjK5bCq3GCCsprS86D-ilP4iWYfa_6nEENIi77ohqHc6LWysloFgjXXuP--V17vab0o9dmhBC6Eo9NhAbD1ohZhsQSJHeiU_ufmNcqRzynAfg7hD7LpnJ0aQ=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0SRKTJdA-dpSJkC94HWqGVdTfVQg7jMX_hLNQblVDyA-4Y5yKJCtOHQJ5vpAmT_NHIYTKq-3YVHsBU7N6glkS67iBvDISWoQLdKah8Xp9quUD60WuAullfr8i9RbOyxCcUxkzOBwvP5elaFrftvSZD0m7w2Qk69e7QWP8XPvRlA_kB-Acx6np27CRX1GcQEk7kBxSKmYNxDIqTFSfa_G2pfJJDgB_RVZyA2ijA8=w1280",
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
              className="w-full h-auto"
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

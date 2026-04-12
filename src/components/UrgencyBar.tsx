import { useEffect, useState } from "react";

const DIAS_SEMANA = ["DOMINGO", "SEGUNDA-FEIRA", "TERÇA-FEIRA", "QUARTA-FEIRA", "QUINTA-FEIRA", "SEXTA-FEIRA", "SÁBADO"];

export default function UrgencyBar() {
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    const now = new Date();
    const dia = DIAS_SEMANA[now.getDay()];
    const dd = String(now.getDate()).padStart(2, "0");
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const yyyy = now.getFullYear();
    setDateStr(`${dia}, ${dd}/${mm}/${yyyy}`);
  }, []);

  return (
    <div className="bg-gradient-urgency text-urgency-foreground text-center py-2.5 px-4 text-sm font-bold tracking-wide animate-pulse-slow">
      ⏳ OFERTA VÁLIDA SOMENTE HOJE, {dateStr}
    </div>
  );
}

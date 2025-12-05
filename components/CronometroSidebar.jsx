"use client";

import { useEffect, useState } from "react";
import styles from "./cronometro.module.css";

export default function CronometroSidebar() {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSegundos((s) => {
        if (s + 1 === 60) {
          setMinutos((m) => {
            if (m + 1 === 60) {
              setHoras((h) => h + 1);
              return 0;
            }
            return m + 1;
          });
          return 0;
        }
        return s + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatar = (num) => String(num).padStart(2, "0");

  return (
    <div className={styles.abaLateral}>
      <h2 className={styles.titulo}>Tempo de Simulado</h2>

      <div className={styles.tempo}>
        {formatar(horas)}:{formatar(minutos)}:{formatar(segundos)}
      </div>
    </div>
  );
}

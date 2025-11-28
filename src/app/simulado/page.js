import db from "@/lib/db";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

function Assuntos({ id, title, description }) {
  return (
    <div className={styles.caixa}>
      <div>
        <h3>{title}</h3>
      </div>
      <p>
        {description}
      </p>
      <Link href={`/simulados/${id}`} className={styles.buttonSemEstilo}>
        <button className={styles.botaoIniciar}>Iniciar</button>
      </Link>
    </div>
  );
}

export default async function Home() {
  const result = await db.query("SELECT id, title, description FROM simulados");
  const dados = result.rows;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {dados.map((simulado) => (
          <Assuntos 
            key={simulado.id}
            id={simulado.id}          
            title={simulado.title}
            description={simulado.description}
          />
        ))}
      </div>
    </div>
  );
}
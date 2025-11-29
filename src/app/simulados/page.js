import db from "@/lib/db";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

function Assuntos({ id, title, description }) {
  return (
    <div className={styles.caixa}>
      <div className={styles.cabecalho}>
        <img className ={styles.grafico} src="/grafico-simulado.png" width="25" height="25" alt="Gráfico de simulados"/> 
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
      <Link href="/inicio"> <Image src="/voltar.png" width={24} height={24} alt="Voltar" className={styles.botaoVoltar}/></Link>
      <img className ={styles.logo} src="/logo-original.svg" width="170" height="170" alt="Logo"/> 
      <div className={styles.container}>
        {dados.map((simulados) => (
          <Assuntos 
            key={simulados.id}
            id={simulados.id}          
            title={simulados.title}
            description={simulados.description}
          />
        ))}
      </div>
    </div>
  );
}
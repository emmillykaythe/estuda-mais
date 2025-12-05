import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import db from "@/lib/db";
import Accordion from "@components/accordion";

export default async function MaterialPage() {
  const conteudos = await db.query("select * from conteudo");

  const tipos = (await db.query('SELECT * FROM tipo')).rows;

  const materiais = await db.query('SELECT * FROM material');


  const filtrarMateriaisPorTipo = (idConteudo, idTipo) => {
    const materiaisFiltrado = materiais.rows.filter(m => m.idconteudo == idConteudo && m.idtipo == idTipo);
    return materiaisFiltrado;
  }
  const tiposComponentes = (idConteudo) => (tipos.map(tipo => (
    <Accordion key={tipo.id} className={styles.subItemMaterial} titulo={ <span className={styles.itemTitulo}> 
    <Image src="/play-material.png" width={13} height={12} alt="Play" className={styles.play}/> <span>{tipo.nome}</span> </span>}
    itens={filtrarMateriaisPorTipo(idConteudo, tipo.id).map(m => <a href={m.link} target="_blank">{m.descricao}</a>)}
     />))
  );

  return (
  <div className={styles.pageContainer}>
    <div className={styles.page}>
      <Link href="/inicio"> <Image src="/voltar.png" width={24} height={24} alt="Voltar" className={styles.buttonVoltar}/></Link>
      <Image src="/logo-original.svg" width={200} height={200} alt="Logo Estuda+" className={styles.logo}/>
    </div>
      <main className={styles.mainContent}>
        <div className={styles.listaMateriais}>
          {conteudos.rows.map((conteudo, index) => (
              <Accordion key={conteudo.id} className={styles.itemMaterial} titulo={`${index + 1}. ${conteudo.nome}`} itens={tiposComponentes(conteudo.id)} />
          ))}
        </div>
      </main>
    </div>
  );
}

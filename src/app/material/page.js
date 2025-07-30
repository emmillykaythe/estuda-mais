import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import db from "@/lib/db";
import Accordion from "@components/accordion";

export default async function MaterialPage() {
  
  const materiais = await db.query("select * from material");
  const listaConteudos = [
  { id: 1, nome: 'Vídeo aulas' },
  { id: 2, nome: 'Resumos' },
  { id: 3, nome: 'Listas de exercícios' },
];
  const conteudos = listaConteudos.map(item =>
    <Accordion key={item.id} className={styles.itemMaterial} titulo={`${item.nome}`} itens={["abc", "cde", "efg"]} />
  )

  console.log(conteudos);
  return (
  <div className={styles.pageContainer}>
    <div className={styles.page}>
      <Link href="/principal"> <Image src="/voltar.png" width={24} height={24} alt="Voltar" className={styles.buttonVoltar}/></Link>
      <Image src="/logo-original.svg" width={200} height={200} alt="Logo Estuda+" className={styles.logo}/>
    </div>
      <main className={styles.mainContent}>
        <div className={styles.listaMateriais}>
          {materiais.rows.map((material, index) => (
              <Accordion key={material.id} className={styles.itemMaterial} titulo={`${index + 1}. ${material.nome}`} itens={conteudos} />
          ))}
        </div>
      </main>
    </div>
  );
}

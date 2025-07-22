import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import db from "@/lib/db";

export default async function MaterialPage() {
  
  const materiais = await db.query("select * from material");

  return (
  <div className={styles.pageContainer}>
    <div className={styles.page}>
      <Link href="/principal"> <Image src="/voltar.png" width={24} height={24} alt="Voltar" className={styles.buttonVoltar}/></Link>
      <Image src="/logo.svg" width={200} height={200} alt="Logo Estuda+" className={styles.logo}/>
    </div>
      <main className={styles.mainContent}>
        <div className={styles.listaMateriais}>
    {materiais.rows.map((material, index) => (
        <div key={material.id} className={styles.itemMaterial}> <p>{index + 1}. {material.nome}</p> </div>
          ))}
        </div>
      </main>
    </div>
  );
}

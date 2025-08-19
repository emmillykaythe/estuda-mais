import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
  <Link href="/inicio"> <div className={styles.voltar}>
    <Image className = {styles.buttonVoltar} src="/voltar.png" width="20" height="20" alt="Voltar"/> </div>
  </Link>
    <Image className ={styles.logo} src="/logo-original.svg" width="150" height="150" alt="Logo"/>
    
    </div>
  );
};
 



 



    
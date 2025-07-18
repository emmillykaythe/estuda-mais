import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {
  return (
   <div className={styles.page}>

   <div className={styles.logoInicial}>
        <Image className={styles.logo} src="/logo-principal.png" width="300" height="200" alt="Logo Estuda+"/>
    </div>
   
    <div className={styles.botaoVoltar}>
        <Link href="principal">
        <Image className={styles.voltar} src="/voltar.png" width="20" height="20" alt="Voltar"/>
        </Link>
    </div>  
    </div>
    );
};


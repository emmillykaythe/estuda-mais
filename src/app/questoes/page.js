import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {
  return (
    <div className={styles.page}>
      <Link href="/simulado"> 
    <div className={styles.voltar}>
      <Image className={styles.buttonVoltar} src="/voltar.png" width="20" height="20" alt="Voltar" />
    </div>
      </Link>
        <Image className={styles.logo} src="/logo-original.svg" width="170" height="170" alt="Logo"/>
    <div className={styles.containerQuestion}> <div className={styles.numberQuestion}> 1 </div> 
    <div className={styles.enunciadoQuestion}>
     <p> Um pintor pretende fazer uma reprodução do quadro Guernica em uma tela de dimensões 20 cm por 30 cm. Essa obra, de autoria do espanhol Pablo Picasso, é uma pintura com 3,6 m de altura e 7,8 m de comprimento. A reprodução a ser feita deverá preencher a maior área possível da tela, mantendo a proporção entre as dimensões da obra original. A escala que deve ser empregada para essa reprodução é </p>
    </div>
    </div>
    </div>
  );
}
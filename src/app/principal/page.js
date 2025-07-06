import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
    <div className = {styles.abaLateral}>  
      <Image className ={styles.logo} src="/logo-principal.png" width="350" height="400" alt="Logo"/> 
    <div className= {styles.acessoRapido}>
        <button className={styles.button}>Inicio</button>
        <button className={styles.button}>Materiais</button>
        <button className={styles.button}>Simulados</button>


    </div> 
    </div>
    </div>

  );
};
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
  <div className={styles.page}>
    <div className = {styles.abaLateral} >
      <Image className ={styles.logo} src="/logo-apresentação.png" width="150" height="150" alt="Logo" />
  </div>      
    <div className={styles.container}>
      <Image className = {styles.usuario} src="/usuario-login.png" width="370" height="200" alt="usuario" />
    <div className={styles.caixaform}>
      <input className={styles.input} type="email" placeholder="Digite seu email" />
      <input className={styles.input} type="password" placeholder="Digite sua senha" />
  </div>
        
        <Link href ='/inicio' className={styles.button}> ENTRAR </Link>
        <Link href ='/cadastro' className={styles.button}> CADASTRE-SE </Link>
  </div>
  </div>
  );
}

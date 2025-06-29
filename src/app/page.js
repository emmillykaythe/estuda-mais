import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
        <div className = {styles.abaLateral} >
        <Image className ={styles.logo} src="/logo-principal.png" width="350" height="350" alt="Logo" />
    </div>      
    </div>
  );
}

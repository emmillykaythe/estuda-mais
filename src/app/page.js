'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  return (
  <div className={styles.page}>
    <div className = {styles.abaLateral} >
      <Image className ={styles.logo} src="/logo-apresentação.png" width="150" height="150" alt="Logo" />
  </div>      
    <div className={styles.container}>
      <Image className = {styles.usuario} src="/usuario-login.png" width="370" height="200" alt="usuario" />
    <div className={styles.caixaform}>
      <input className={styles.input} type="email" placeholder="Digite seu email" />
    
    <div className={styles.senha}>  
      <input className={styles.input} type={showPassword ? "text" : "password"} placeholder="Digite sua senha" />
        <span className={styles.visualizarSenha}
          onClick={() => setShowPassword(!showPassword)}>
        <Image src = {showPassword ? "/PermitirVisualizacao-cadastro.png" : "/BloquearVisualizacao-cadastro.png"} width={20} height={20} alt="Visualizar Senha"/>
        </span>
      </div>
  </div>
        
        <Link href ='/inicio' className={styles.button}> ENTRAR </Link>
        <Link href ='/cadastro' className={styles.button}> CADASTRE-SE </Link>
  </div>
  </div>
  );
}
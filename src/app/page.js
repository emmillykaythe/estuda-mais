'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";   // Necessário para login com Google
import styles from "./page.module.css";      // Suas classes CSS

export default function Home() {

  const [form, setForm] = useState({
    email: "",
    senha: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [mostrarMensagem, setMostrarMensagem] = useState(false);
  const [tipoMensagem, setTipoMensagem] = useState("erro");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function fazerLogin() {
    setMostrarMensagem(false);

    try {
      const res = await fetch("/api/autenticacao/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setTipoMensagem("erro");
        setMensagem(data.error || "Credenciais inválidos.");
        setMostrarMensagem(true);
        return;
      }

      setTipoMensagem("sucesso");
      setMensagem("Login realizado com sucesso!");
      setMostrarMensagem(true);

      setTimeout(() => {
        window.location.href = "/inicio";
      }, 1000);

    } catch (error) {
      console.error("Erro ao conectar:", error);
      setTipoMensagem("erro");
      setMensagem("Erro ao conectar com o servidor.");
      setMostrarMensagem(true);
    }
  }

  return (
    <div className={styles.page}>
      
      <div className={styles.abaLateral}>
        <Image className={styles.logo} src="/logo-apresentação.png" width="150" height="150" alt="Logo" />
      </div>

      <div className={styles.container}>
        {mostrarMensagem && (
          <div className={tipoMensagem === "erro" ? styles.mensagemErro : styles.mensagemSucesso}> {mensagem}</div>
        )}

        <Image className={styles.usuario} src="/usuario-login.png" width="370" height="200" alt="usuario" />
          <div className={styles.caixaform}>
            <input className={styles.input} type="email" name="email" placeholder="Digite seu email" value={form.email} onChange={handleChange}/>
          
          <div className={styles.senha}>
            <input className={styles.input} type={showPassword ? "text" : "password"} name="senha" placeholder="Digite sua senha" value={form.senha} onChange={handleChange}/>
             <span className={styles.visualizarSenha} onClick={() => setShowPassword(!showPassword)}>
              <Image src={showPassword ? "/PermitirVisualizacao-cadastro.png" : "/BloquearVisualizacao-cadastro.png"} width={20} height={20} alt="Visualizar Senha"/>
            </span>
          </div>
        </div>

        <button onClick={() => signIn("google")} className={styles.botaoGoogle}> CONTINUAR COM O GOOGLE </button>
        <button className={styles.button} onClick={fazerLogin}> ENTRAR </button>
        <Link href='/cadastro' className={styles.button}> CADASTRE-SE </Link>

        </div>
    </div>
  );
}

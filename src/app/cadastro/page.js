"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    genero: "",
    data_nascimento: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

console.log("Teste: O handleSubmit foi chamado!"); // <-- ADICIONE ISSO AQUI

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    alert(data.message || data.error);
  }

  return (
    <div className={styles.page}>
      <Link href="/" >
        <div className={styles.voltar}>
          <Image className={styles.buttonVoltar} src="/voltar.png" width="20" height="20" alt="Voltar" />
        </div>
      </Link>

      <div className={styles.abaLateral}>
        <Image className={styles.logo} src="/logo-apresentação.png" width="150" height="150" alt="Logo" />
      </div>

      <div className={styles.container}>
        <form className={styles.caixaform} onSubmit={handleSubmit}>

          <div className={styles.nome}>
            <Image className={styles.perfil} src="/perfil-cadastro.png" width="20" height="20" alt="Perfil" />
            <input className={styles.input} name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome Completo" />
          </div>

          <label className={styles.label}>Data de Nascimento</label>
          <div className={styles.campoData}>
            <Image className={styles.calendario} src="/calendario-cadastro.png" width="20" height="20" alt="Calendário" />
            <input className={styles.input} type="date" name="data_nascimento" value={formData.data_nascimento} onChange={handleChange} />
          </div>

          <div className={styles.email}>
            <Image className={styles.caixaEmail} src="/email-cadastro.png" width="20" height="20" alt="Email" />
            <input className={styles.input} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
          </div>

          <div className={styles.senha}>
            <Image className={styles.cadeadoSenha} src="/senha-cadastro.png" width="20" height="20" alt="Senha" />
            <input className={styles.input} type={showPassword ? "text" : "password"} name="senha" value={formData.senha} onChange={handleChange} placeholder="Senha" />
            <span className={styles.visualizarSenha} onClick={() => setShowPassword(!showPassword)}>
              <Image src={showPassword ? "/PermitirVisualizacao-cadastro.png" : "/BloquearVisualizacao-cadastro.png"} width={20} height={20} alt="Visualizar Senha" />
            </span>
          </div>

          <div className={styles.genero}>Gênero</div>
          <div className={styles.campoGenero}>
            <label className={styles.opcaoGenero}>F <input type="radio" name="genero" value="F" onChange={handleChange} /></label>
            <label className={styles.opcaoGenero}>M <input type="radio" name="genero" value="M" onChange={handleChange} /></label>
            <label className={styles.opcaoGenero}>Outro <input type="radio" name="genero" value="Outro" onChange={handleChange} /></label>
          </div>

          <button type="submit" className={styles.button}> Cadastre-se </button>
        </form>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";

export default function CadastroPage() {
  const [form, setForm] = useState({
    nome: "",
    data_nascimento: "",
    email: "",
    senha: "",
    genero: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState("");
  const [mostrarMensagem, setMostrarMensagem] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMostrarMensagem(false);

    try {
      const res = await fetch("/api/autenticacao/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setTipoMensagem("sucesso");
        setMensagem(data.message);
        setMostrarMensagem(true);
        setTimeout(() => (window.location.href = "/inicio"), 1000);
      } else {
        setTipoMensagem("erro");
        setMensagem(data.error || "Erro ao cadastrar");
        setMostrarMensagem(true);
      }
    } catch (err) {
      console.error(err);
      setTipoMensagem("erro");
      setMensagem("Erro ao conectar com o servidor");
      setMostrarMensagem(true);
    }
  }

  return (
    <div className={styles.page}>
      <Link href="/" className={styles.voltar}>
        <Image className={styles.buttonVoltar} src="/voltar.png" width="20" height="20" alt="Voltar"/>
      </Link>

      <div className={styles.abaLateral}>
        <Image className={styles.logo} src="/logo-apresentação.png" width="70" height="70" alt="Logo"/>
      </div>

      <div className={styles.container}>
        {mostrarMensagem && (<div className={ tipoMensagem === "erro" ? styles.mensagemErro : styles.mensagemSucesso}> {mensagem}
      </div>
    )}

      <form className={styles.caixaform} onSubmit={handleSubmit}> <div className={styles.nome}>
        <Image className={styles.perfil} src="/perfil-cadastro.png" width="20" height="20" alt="Perfil"/>
          <input className={styles.input} type="text" name="nome" placeholder="Nome Completo" value={form.nome} onChange={handleChange}/>
      </div>

        <label className={styles.label}> Data de Nascimento </label>
       
          <div className={styles.campoData}>
            <Image className={styles.calendario} src="/calendario-cadastro.png" width="20" height="20" alt="Calendário"/>
              <input className={styles.input} type="date" name="data_nascimento" value={form.data_nascimento} onChange={handleChange}/>
          </div>

          <div className={styles.email}> 
            <Image className={styles.caixaEmail} src="/email-cadastro.png" width="20" height="20" alt="Email"/>
             <input className={styles.input} type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange}/>
          </div>

          <div className={styles.senha}> 
            <Image className={styles.cadeadoSenha} src="/senha-cadastro.png" width="20" height="20" alt="Senha"/>
             <input className={styles.input} type={showPassword ? "text" : "password"} name="senha" placeholder="Senha" value={form.senha} onChange={handleChange}/>

            <span className={styles.visualizarSenha} onClick={() => setShowPassword(!showPassword)}>
              <Image src={showPassword ? "/PermitirVisualizacao-cadastro.png" : "/BloquearVisualizacao-cadastro.png"} width={20} height={20} alt="Mostrar senha"/>
            </span>
          </div>

          <div className={styles.genero}> Gênero </div>
            <div className={styles.campoGenero}>
              <label className={styles.opcaoGenero}> F
               <input type="radio" name="genero" value="F" checked={form.genero === "F"} onChange={handleChange}/>
            </label>

            <label className={styles.opcaoGenero}> M
              <input type="radio" name="genero" value="M" checked={form.genero === "M"} onChange={handleChange}/>
            </label>

            <label className={styles.opcaoGenero}> Outro
              <input type="radio" name="genero" value="Outro" checked={form.genero === "Outro"} onChange={handleChange}/>
            </label>
          </div>

          <button type="submit" className={styles.button}> Cadastre-se </button>
        
        </form>
      </div>
    </div>
  );
}

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
    
    <div className = {styles.abaLateral}>  
      <Image className ={styles.logo} src="/logo-principal.png" width="350" height="350" alt="Logo"/></div> 
    
    <div className={styles.container}>    
    <div className={styles.caixaform} >

    <div className={styles.nome}>  
      <Image className ={styles.perfil} src="/perfil-cadastro.png" width="20" height="20" alt="Perfil"/>
      <input className={styles.input} type="nome" placeholder="Nome Completo" /></div>
          
    <label className={styles.label}>Data de Nascimento</label>
    <div className={styles.campoData}> 
        <select className={styles.opcaoDia}></select>
        <select className={styles.opcaoMes}></select>
        <select className={styles.opcaoAno}></select>
    </div>

    <div className={styles.email}>
      <Image className ={styles.caixaEmail} src="/email-cadastro.png" width="20" height="20" alt="Perfil"/>
      <input className={styles.input} type="email" placeholder="Email" /></div>
    <div className={styles.senha}> 
      <Image className ={styles.cadeadoSenha} src="/senha-cadastro.png" width="20" height="20" alt="Perfil"/>
      <input className={styles.input} type="password" placeholder="Senha" /></div>
    
    <div className={styles.genero}>Gênero</div>
      <div className={styles.campoGenero}>
          <label className={styles.opcaoGenero}>
            F
      <input type="radio" name="gênero" /> 
          </label>
          <label className={styles.opcaoGenero}>
            M
      <input type="radio" name="gênero" /> 
          </label>
          <label className={styles.opcaoGenero}>
            Outro 
      <input type="radio" name="gênero" /> 
          </label>
    </div>

    <button className={styles.button}>Cadastre-se</button>

    </div>
    </div>
    </div>
    );
};
 



 



    
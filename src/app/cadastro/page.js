import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
    
    <div className = {styles.abaLateral}>  
        <Image className ={styles.logo} src="/logo-principal.png" width="350" height="350" alt="Logo"/></div> 
    
    <div className={styles.container}>    
    <div className={styles.caixaform} >
      <input className={styles.input} type="nome" placeholder="Nome Completo" />
    
    <label className={styles.label}>Data de Nascimento</label>
    <div className={styles.data}> 
        <select className={styles.campoData}></select>
        <select className={styles.campoData}></select>
        <select className={styles.campoData}></select>
    </div>

      <input className={styles.input} type="email" placeholder="Email" />
      <input className={styles.input} type="password" placeholder="Senha" />
      
    <div className={styles.genero}>Gênero</div>
    <div className={styles.campoGenero}>
        <label>
            <input type="radio" name="gênero"/> <span> F </span>
        </label>
        <label> 
            <input type="radio" name="gênero"/> <span> M </span>
        </label>
        <label> 
             <input type="radio" name="gênero"/> <span> Outro </span>
        </label>
    </div>

    <button className={styles.button}>Cadastre-se</button>

    </div>
    </div>
    </div>
    );
};
 



 



    
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <Link href="/" >  
    <div className={styles.voltar}>
      <Image className = {styles.buttonVoltar} src="/voltar.png" width="20" height="20" alt="Voltar"/>
    </div>
    </Link>

    <div className = {styles.abaLateral}>  
      <Image className ={styles.logo} src="/logo-principal.svg" width="20" height="20" alt="Logo"/> 

    <div className={styles.inicioAcesso}> 
      <button className={styles.button}>
         <Image className ={styles.inicio} src="/inicio-principal.png" width="25" height="25" alt="Inicio"/>
      <span> Inicio </span> </button>
    </div>

    <div className={styles.divisao}>
      <Image className ={styles.linha} src="/divisao-principal.png" width="200" height="2" alt="linha"/>
    </div>

    <div className= {styles.acessoRapido}>
      <Link href = "/material" className={styles.button}> 
     <Image className={styles.material} src ="/material-principal.png" width="25" height="25" alt="Material"></Image> 
      <span>Materiais</span> </Link>

        <button className={styles.button}> 
          <Image className={styles.simulado} src ="/simulados-principal.png" width="20" height="23" alt="Simulados"></Image>
        <span>Simulados</span> </button>
    </div> 
    </div>
    <div className={styles.container}>

      <Link href = "/material" className={styles.caixa}>
        <Image className={styles.material} src ="/material-principal.png" width="110" height="110" alt="Material"/>
        <div className={styles.texto}>
      <h2>Materiais</h2>
      <p>Acesse conteúdos completos para reforçar seus estudos.</p>
        </div>
      </Link>  

     <Link href="/simulados" className={styles.caixa}>
       <Image className={styles.simulado} src="/simulados-principal.png" width="120" height="120" alt="Simulados" />
       <div className={styles.texto}>
     <h2>Simulados</h2>
     <p>Faça simulados e acompanhe sua evolução no aprendizado.</p>
       </div>
      </Link> 
  
    </div>
        
        <div className={styles.manequim}>
        <Image className={styles.modelo} src ="/modelo-principal.png" width="200" height="200" alt="Modelo estuda+"/>
      <div className={styles.text}>
      <h2>Plataforma Estuda+</h2>
      <br></br>
      <p>Tenha os assuntos mais importantes da grade
        <br></br> curricular de matemática no enem.</p>
      </div>  
    </div>
  </div>

  );  
};


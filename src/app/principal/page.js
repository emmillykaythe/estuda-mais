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
      <Image className ={styles.logo} src="/logo-principal.png" width="350" height="400" alt="Logo"/> 

    <div className={styles.inicioAcesso}> 
      <button className={styles.button}>
         <Image className ={styles.inicio} src="/inicio.png" width="25" height="25" alt="Inicio"/>
      <span> Inicio </span> </button>
    </div>

    <div className={styles.divisao}>
      <Image className ={styles.linha} src="/divisao.png" width="200" height="2" alt="linha"/>
    </div>

    <div className= {styles.acessoRapido}>
      <button className={styles.button}>
          
          <Image className={styles.material} src ="/material.png" width="25" height="25" alt="Material"></Image>
      <span>Materiais</span> </button>

        <button className={styles.button}> 
          <Image className={styles.simulado} src ="/simulados.png" width="25" height="25" alt="Simulados"></Image>
        <span>Simulados</span> </button>
    </div> 
    </div>
    <div className={styles.container}>

      <div className={styles.caixa}>
        <Image className={styles.material} src ="/material.png" width="120" height="120" alt="Material"/>
        <div className={styles.texto}>
      <h2>Materiais</h2>
      <p>Acesse conteúdos completos para reforçar seus estudos.</p>
        </div>
      </div>  

    <div className={styles.caixa}>
        <Image className={styles.simulado} src ="/simulados.png" width="120" height="120" alt="Simulados"/>
        <div className={styles.texto}>
      <h2>Simulados</h2>
      <p>Faça simulados e acompanhe sua evolução no aprendizado.</p>
    </div>
      </div>  
        </div>
        
        <div className={styles.manequim}>
        <Image className={styles.modelo} src ="/modelo.png" width="200" height="200" alt="Modelo estuda+"/>
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


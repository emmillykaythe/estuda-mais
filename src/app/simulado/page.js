import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const dados = [
  { title: "Simulado - IFPB 2024", description: "45 questões de matemática e suas tecnologias" },
  { title: "Simulado - IFPB 2025", description: "45 questões de matemática e suas tecnologias" },
];

function Assuntos({ title, description }) {
  return (
    <div className={styles.caixa}>  
      <div className={styles.organizacao}>
        <Image className={styles.grafico} src="/grafico-simulado.png" width="30" height="30" alt="Gráfico"/>
        <div className={styles.textos}>
          <h3>{title}</h3>
        </div>
      </div>
      <p>{description}</p>
     <Link href="/questoes" className={styles.buttonSemEstilo}> <button className={styles.botaoIniciar}>Iniciar</button> </Link>
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
        <div className={styles.voltar}>
      <Link href="/inicio"> 
          <Image className={styles.buttonVoltar} src="/voltar.png" width="20" height="20" alt="Voltar" />
    </Link>
       </div>
    
          <Image className={styles.logo} src="/logo-original.svg" width="170" height="170" alt="Logo" />
      <div className={styles.container}>
        {dados.map((assuntos, index) => (
          <Assuntos key={index} title={assuntos.title} description={assuntos.description} />
        ))}
      </div>
    </div>
  );
}
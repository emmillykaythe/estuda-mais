import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const dados = [
  { title: "Simulado - Enem 2011", description: "45 questões de matemática e suas tecnologias" },
  { title: "Simulado - Enem 2012", description: "45 questões de matemática e suas tecnologias" },
  { title: "Simulado - Enem 2013", description: "45 questões de matemática e suas tecnologias" },
  { title: "Simulado - Enem 2014", description: "45 questões de matemática e suas tecnologias" },
  { title: "Simulado - Enem 2015", description: "45 questões de matemática e suas tecnologias" },
  { title: "Simulado - Enem 2016", description: "45 questões de matemática e suas tecnologias" },
  { title: "Simulado - Enem 2017", description: "45 questões de matemática e suas tecnologias" },
  { title: "Simulado - Enem 2018", description: "45 questões de matemática e suas tecnologias" },
  { title: "Simulado - Enem 2019", description: "45 questões de matemática e suas tecnologias" },
  { title: "Simulado - Enem 2020", description: "45 questões de matemática e suas tecnologias" },
  { title: "Simulado - Enem 2021", description: "45 questões de matemática e suas tecnologias" },
  { title: "Simulado - Enem 2022", description: "45 questões de matemática e suas tecnologias" },
  { title: "Simulado - Enem 2023", description: "45 questões de matemática e suas tecnologias" },
  { title: "Simulado - Enem 2024", description: "45 questões de matemática e suas tecnologias" },
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
      <button className={styles.botaoIniciar}>Iniciar</button>
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <Link href="/material"> 
        <div className={styles.voltar}>
          <Image className={styles.buttonVoltar} src="/voltar.png" width="20" height="20" alt="Voltar" />
       </div>
      </Link>
          <Image className={styles.logo} src="/logo-original.svg" width="150" height="150" alt="Logo" />
      <div className={styles.container}>
        {dados.map((assuntos, index) => (
          <Assuntos key={index} title={assuntos.title} description={assuntos.description} />
        ))}
      </div>
    </div>
  );
}